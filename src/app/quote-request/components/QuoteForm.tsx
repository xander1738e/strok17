'use client';

import React, { useState, useCallback, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';
import { submitLead, type LeadPayload } from '@/lib/leadService';
import { serviceLabels, type ServiceType } from '@/lib/config';

const TOTAL_STEPS = 5;

interface FormData {
  // Step 1
  service_types: ServiceType[];
  // Step 2
  property_type: string;
  approximate_size: string;
  rooms_areas: string;
  current_condition: string;
  desired_work: string;
  preferred_start_date: string;
  flexible_start: boolean;
  // Step 3: images handled separately
  // Step 4
  name: string;
  phone: string;
  email: string;
  location: string;
  preferred_contact_method: string;
  // Step 5
  consent: boolean;
}

interface UploadedImage {
  id: string;
  file: File;
  preview: string;
  name: string;
}

const initialFormData: FormData = {
  service_types: [],
  property_type: '',
  approximate_size: '',
  rooms_areas: '',
  current_condition: '',
  desired_work: '',
  preferred_start_date: '',
  flexible_start: false,
  name: '',
  phone: '',
  email: '',
  location: '',
  preferred_contact_method: 'telefon',
  consent: false,
};

const propertyTypes = ['Enebolig', 'Rekkehus/tomannsbolig', 'Leilighet', 'Hytte/fritidsbolig', 'Næringsbygg', 'Annet'];
const sizeOptions = ['Under 50 m²', '50–100 m²', '100–200 m²', '200–400 m²', 'Over 400 m²', 'Usikker'];
const conditionOptions = ['Ny/nyoppusset', 'Godt vedlikeholdt', 'Noe slitasje', 'Betydelig slitasje', 'Skader/fuktskader'];
const contactMethods = ['Telefon', 'SMS', 'E-post'];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData | 'images', string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const progress = (step / TOTAL_STEPS) * 100;

  const updateField = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const toggleService = (service: ServiceType) => {
    setFormData((prev) => ({
      ...prev,
      service_types: prev.service_types.includes(service)
        ? prev.service_types.filter((s) => s !== service)
        : [...prev.service_types, service],
    }));
    setErrors((prev) => ({ ...prev, service_types: '' }));
  };

  const validateStep = (): boolean => {
    const newErrors: typeof errors = {};
    if (step === 1 && formData.service_types.length === 0) {
      newErrors.service_types = 'Velg minst én tjeneste';
    }
    if (step === 2) {
      if (!formData.property_type) newErrors.property_type = 'Velg eiendomstype';
      if (!formData.desired_work.trim()) newErrors.desired_work = 'Beskriv ønsket arbeid';
    }
    if (step === 4) {
      if (!formData.name.trim()) newErrors.name = 'Skriv inn navn';
      if (!formData.phone.trim()) newErrors.phone = 'Skriv inn telefonnummer';
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Skriv inn gyldig e-postadresse';
    }
    if (step === 5 && !formData.consent) {
      newErrors.consent = 'Du må godta vilkårene for å sende inn';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep((s) => Math.min(s + 1, TOTAL_STEPS));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const processFiles = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/heic'];
    const maxSize = 10 * 1024 * 1024; // 10MB

    const validFiles = fileArray.filter((file) => {
      if (!validTypes.includes(file.type) && !file.name.toLowerCase().endsWith('.heic')) {
        setErrors((prev) => ({ ...prev, images: 'Kun JPG, PNG, WebP og HEIC støttes' }));
        return false;
      }
      if (file.size > maxSize) {
        setErrors((prev) => ({ ...prev, images: 'Maksimal filstørrelse er 10 MB' }));
        return false;
      }
      return true;
    });

    const newImages: UploadedImage[] = validFiles.map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    setImages((prev) => [...prev, ...newImages].slice(0, 10));
    setErrors((prev) => ({ ...prev, images: '' }));
  }, []);

  const removeImage = (id: string) => {
    setImages((prev) => {
      const img = prev.find((i) => i.id === id);
      if (img) URL.revokeObjectURL(img.preview);
      return prev.filter((i) => i.id !== id);
    });
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setSubmitting(true);
    setSubmitError('');

    const payload: LeadPayload = {
      source: 'stroek17_website',
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      location: formData.location,
      service_types: formData.service_types,
      property_type: formData.property_type,
      approximate_size: formData.approximate_size,
      rooms_areas: formData.rooms_areas,
      current_condition: formData.current_condition,
      desired_work: formData.desired_work,
      preferred_start_date: formData.preferred_start_date,
      flexible_start: formData.flexible_start,
      preferred_contact_method: formData.preferred_contact_method,
      image_urls: images.map((img) => img.name),
      submitted_at: new Date().toISOString(),
    };

    const result = await submitLead(payload);
    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError(result.message);
    }
  };

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-8">
          <Icon name="CheckIcon" size={32} className="text-primary" />
        </div>
        <h2 className="text-section font-bold text-foreground tracking-tight mb-4">
          Forespørsel mottatt
        </h2>
        <p className="text-muted-foreground text-base font-light leading-relaxed max-w-md mx-auto mb-8">
          Takk for henvendelsen, {formData.name}. Vi ser på detaljene og tar kontakt med deg snart.
        </p>
        <p className="text-muted-foreground text-sm">
          Foretrukket kontakt: <span className="text-foreground capitalize">{formData.preferred_contact_method}</span>
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-3">
          <span className="text-muted-foreground text-xs uppercase tracking-wider">
            Steg {step} av {TOTAL_STEPS}
          </span>
          <span className="text-primary text-xs font-semibold">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-px bg-border w-full">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Step 1: Service selection */}
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-2">
            Hva trenger du hjelp med?
          </h2>
          <p className="text-muted-foreground text-sm font-light mb-8">
            Velg én eller flere tjenester.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {(Object.keys(serviceLabels) as ServiceType[]).map((service) => (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`service-option text-left ${formData.service_types.includes(service) ? 'selected' : ''}`}
              >
                <div className={`w-4 h-4 border flex items-center justify-center shrink-0 transition-colors duration-200 ${
                  formData.service_types.includes(service) ? 'bg-primary border-primary' : 'border-border'
                }`}>
                  {formData.service_types.includes(service) && (
                    <Icon name="CheckIcon" size={10} className="text-white" />
                  )}
                </div>
                <span className="text-sm font-medium text-foreground">
                  {serviceLabels[service]}
                </span>
              </button>
            ))}
          </div>
          {errors.service_types && (
            <p className="text-red-400 text-xs mb-4">{errors.service_types}</p>
          )}
        </div>
      )}

      {/* Step 2: Project details */}
      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-2">
            Detaljer om prosjektet
          </h2>
          <p className="text-muted-foreground text-sm font-light mb-8">
            Hjelper oss å gi deg et mer presist tilbud.
          </p>

          <div className="space-y-8">
            {/* Property type */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Type eiendom
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateField('property_type', type)}
                    className={`service-option justify-center text-center py-3 text-sm ${
                      formData.property_type === type ? 'selected' : ''
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.property_type && (
                <p className="text-red-400 text-xs mt-2">{errors.property_type}</p>
              )}
            </div>

            {/* Size */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Omtrentlig areal
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => updateField('approximate_size', size)}
                    className={`service-option justify-center text-center py-3 text-sm ${
                      formData.approximate_size === size ? 'selected' : ''
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Rooms */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Rom og arealer som skal behandles
              </label>
              <input
                type="text"
                value={formData.rooms_areas}
                onChange={(e) => updateField('rooms_areas', e.target.value)}
                placeholder="f.eks. stue, 2 soverom, gang, bad"
                className="form-input"
              />
            </div>

            {/* Condition */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Overflatestand i dag
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {conditionOptions.map((cond) => (
                  <button
                    key={cond}
                    type="button"
                    onClick={() => updateField('current_condition', cond)}
                    className={`service-option text-sm ${
                      formData.current_condition === cond ? 'selected' : ''
                    }`}
                  >
                    {cond}
                  </button>
                ))}
              </div>
            </div>

            {/* Desired work */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Beskriv ønsket arbeid
              </label>
              <textarea
                value={formData.desired_work}
                onChange={(e) => updateField('desired_work', e.target.value)}
                placeholder="Fortell kort om hva du ønsker gjort. Jo mer info, jo bedre."
                rows={4}
                className="form-input resize-none"
              />
              {errors.desired_work && (
                <p className="text-red-400 text-xs mt-2">{errors.desired_work}</p>
              )}
            </div>

            {/* Start date */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Ønsket oppstart (omtrent)
              </label>
              <input
                type="text"
                value={formData.preferred_start_date}
                onChange={(e) => updateField('preferred_start_date', e.target.value)}
                placeholder="f.eks. August 2026, eller snarest"
                className="form-input"
              />
              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => updateField('flexible_start', !formData.flexible_start)}
                  className={`w-5 h-5 border flex items-center justify-center transition-colors duration-200 ${
                    formData.flexible_start ? 'bg-primary border-primary' : 'border-border'
                  }`}
                >
                  {formData.flexible_start && (
                    <Icon name="CheckIcon" size={10} className="text-white" />
                  )}
                </button>
                <span className="text-sm text-muted-foreground font-light">
                  Fleksibel på oppstartstidspunkt
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Photo upload */}
      {step === 3 && (
        <div>
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-2">
            Legg ved bilder
          </h2>
          <p className="text-muted-foreground text-sm font-light mb-8">
            Bilder av jobben hjelper oss å forstå omfanget bedre. Valgfritt, men anbefalt.
          </p>

          {/* Upload zone */}
          <div
            className={`upload-zone p-10 text-center cursor-pointer mb-6 ${isDragOver ? 'drag-over' : ''}`}
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragOver(false);
              processFiles(e.dataTransfer.files);
            }}
            role="button"
            tabIndex={0}
            aria-label="Last opp bilder"
            onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
          >
            <Icon name="PhotoIcon" size={40} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-foreground text-sm font-medium mb-2">
              Klikk for å velge bilder, eller dra og slipp
            </p>
            <p className="text-muted-foreground text-xs">
              JPG, PNG, WebP, HEIC · Maks 10 MB per bilde · Opptil 10 bilder
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,.heic"
            multiple
            className="hidden"
            onChange={(e) => e.target.files && processFiles(e.target.files)}
          />

          {errors.images && (
            <p className="text-red-400 text-xs mb-4">{errors.images}</p>
          )}

          {/* Image previews */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {images.map((img) => (
                <div key={img.id} className="relative aspect-square bg-card overflow-hidden group">
                  <AppImage
                    src={img.preview}
                    alt={`Opplastet bilde: ${img.name}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <button
                    type="button"
                    onClick={() => removeImage(img.id)}
                    className="absolute top-2 right-2 w-7 h-7 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-background"
                    aria-label={`Fjern bilde ${img.name}`}
                  >
                    <Icon name="XMarkIcon" size={14} className="text-foreground" />
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-xs truncate">{img.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="text-muted-foreground text-xs mt-6 font-light">
            Du kan gå videre uten bilder. Det er alltid mulig å sende bilder i ettertid.
          </p>
        </div>
      )}

      {/* Step 4: Contact details */}
      {step === 4 && (
        <div>
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-2">
            Kontaktinformasjon
          </h2>
          <p className="text-muted-foreground text-sm font-light mb-8">
            Slik kan vi nå deg med svar på forespørselen.
          </p>

          <div className="space-y-8">
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Navn
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                placeholder="Fornavn og etternavn"
                className="form-input"
                autoComplete="name"
              />
              {errors.name && <p className="text-red-400 text-xs mt-2">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Telefonnummer
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                placeholder="+47 000 00 000"
                className="form-input"
                autoComplete="tel"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-2">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                E-postadresse
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                placeholder="din@epost.no"
                className="form-input"
                autoComplete="email"
              />
              {errors.email && <p className="text-red-400 text-xs mt-2">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Adresse eller område
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => updateField('location', e.target.value)}
                placeholder="f.eks. Tromsdalen, Kvaløya, Tromsø sentrum"
                className="form-input"
                autoComplete="address-level2"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-3">
                Foretrukket kontaktmetode
              </label>
              <div className="flex gap-3">
                {contactMethods.map((method) => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => updateField('preferred_contact_method', method.toLowerCase())}
                    className={`service-option flex-1 justify-center text-sm py-3 ${
                      formData.preferred_contact_method === method.toLowerCase() ? 'selected' : ''
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Summary */}
      {step === 5 && (
        <div>
          <h2 className="text-xl font-bold text-foreground tracking-tight mb-2">
            Oppsummering
          </h2>
          <p className="text-muted-foreground text-sm font-light mb-8">
            Sjekk at alt stemmer før du sender inn.
          </p>

          <div className="space-y-6 mb-10">
            {[
              {
                label: 'Tjenester',
                value: formData.service_types.map((s) => serviceLabels[s]).join(', ') || '—',
              },
              { label: 'Eiendomstype', value: formData.property_type || '—' },
              { label: 'Areal', value: formData.approximate_size || '—' },
              { label: 'Rom/arealer', value: formData.rooms_areas || '—' },
              { label: 'Stand', value: formData.current_condition || '—' },
              { label: 'Ønsket arbeid', value: formData.desired_work || '—' },
              { label: 'Oppstart', value: formData.preferred_start_date || '—' },
              { label: 'Bilder', value: images.length > 0 ? `${images.length} bilde(r) vedlagt` : 'Ingen bilder' },
              { label: 'Navn', value: formData.name || '—' },
              { label: 'Telefon', value: formData.phone || '—' },
              { label: 'E-post', value: formData.email || '—' },
              { label: 'Område', value: formData.location || '—' },
              { label: 'Kontaktmetode', value: formData.preferred_contact_method || '—' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 border-b border-border pb-4">
                <span className="text-muted-foreground text-xs uppercase tracking-wider w-32 shrink-0 pt-0.5">
                  {item.label}
                </span>
                <span className="text-foreground text-sm font-light">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Consent */}
          <div className="mb-8">
            <button
              type="button"
              onClick={() => updateField('consent', !formData.consent)}
              className="flex items-start gap-3"
            >
              <div className={`w-5 h-5 border flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200 ${
                formData.consent ? 'bg-primary border-primary' : 'border-border'
              }`}>
                {formData.consent && <Icon name="CheckIcon" size={10} className="text-white" />}
              </div>
              <span className="text-muted-foreground text-sm font-light text-left">
                Jeg godtar at STRØK 17 lagrer og behandler informasjonen over for å kunne svare på min forespørsel. Se{' '}
                <a href="/personvern" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  personvernerklæring
                </a>.
              </span>
            </button>
            {errors.consent && (
              <p className="text-red-400 text-xs mt-2 ml-8">{errors.consent}</p>
            )}
          </div>

          {submitError && (
            <div className="mb-6 p-4 border border-red-400/30 bg-red-400/5">
              <p className="text-red-400 text-sm">{submitError}</p>
            </div>
          )}
        </div>
      )}

      {/* Navigation buttons */}
      <div className={`flex mt-10 ${step > 1 ? 'justify-between' : 'justify-end'}`}>
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium uppercase tracking-wider hover:border-foreground transition-colors duration-300 min-h-[44px]"
          >
            <Icon name="ArrowLeftIcon" size={16} />
            Tilbake
          </button>
        )}

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300 min-h-[44px]"
          >
            Neste
            <Icon name="ArrowRightIcon" size={16} />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-sm font-semibold uppercase tracking-widest hover:bg-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
          >
            {submitting ? (
              <>
                <Icon name="ArrowPathIcon" size={16} className="animate-spin" />
                Sender...
              </>
            ) : (
              <>
                Send forespørsel
                <Icon name="PaperAirplaneIcon" size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
"use client";
import { motion } from "framer-motion";
import { memo, useState } from "react";

interface FormData {
  businessType: string;
  hasWebsite: string;
  websiteUrl: string;
  websiteIssues: string;
  businessGoals: string;
  targetAudience: string;
  mainChallenges: string;
  instagramHandle: string;
  brandPersonality: string;
  websiteVision: string;
  contactEmail: string;
  contactPhone: string;
}

const BusinessAuditQuestionnaire = memo(function BusinessAuditQuestionnaire() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessType: "",
    hasWebsite: "",
    websiteUrl: "",
    websiteIssues: "",
    businessGoals: "",
    targetAudience: "",
    mainChallenges: "",
    instagramHandle: "",
    brandPersonality: "",
    websiteVision: "",
    contactEmail: "",
    contactPhone: "",
  });

  const steps = [
    {
      title: "Cuéntanos sobre tu negocio",
      question: "¿De qué trata tu negocio?",
      placeholder: "Describe brevemente qué productos o servicios ofreces...",
      field: "businessType" as keyof FormData,
    },
    {
      title: "Presencia digital",
      question: "¿Tienes página web actualmente?",
      placeholder: "",
      field: "hasWebsite" as keyof FormData,
      type: "radio",
      options: [
        { value: "yes", label: "Sí, tengo página web" },
        { value: "no", label: "No, no tengo página web" },
        { value: "planning", label: "Estoy planeando crear una" },
      ],
    },
    {
      title: "Tu sitio web actual",
      question: "¿Cuál es la URL de tu página web?",
      placeholder: "https://tu-sitio-web.com",
      field: "websiteUrl" as keyof FormData,
      condition: (data: FormData) => data.hasWebsite === "yes",
    },
    {
      title: "Desafíos actuales",
      question: "¿Qué sientes que le falta a tu sitio web?",
      placeholder: "Por ejemplo: más conversiones, mejor diseño, más velocidad...",
      field: "websiteIssues" as keyof FormData,
      condition: (data: FormData) => data.hasWebsite === "yes",
    },
    {
      title: "Objetivos digitales",
      question: "¿Cuál es tu objetivo principal con tu presencia web?",
      placeholder: "Por ejemplo: aumentar ventas, generar leads, mejorar credibilidad...",
      field: "businessGoals" as keyof FormData,
      condition: (data: FormData) => data.hasWebsite !== "yes",
    },
    {
      title: "Tu audiencia",
      question: "¿A quién se dirige tu negocio?",
      placeholder: "Describe tu cliente ideal...",
      field: "targetAudience" as keyof FormData,
    },
    {
      title: "Desafíos principales",
      question: "¿Cuál es el mayor desafío que enfrenta tu negocio actualmente?",
      placeholder: "Por ejemplo: falta de visibilidad, pocas conversiones, competencia...",
      field: "mainChallenges" as keyof FormData,
    },
    {
      title: "Presencia en redes sociales",
      question: "¿Tienes Instagram? Déjanos tu handle para conocer mejor tu marca",
      placeholder: "@tu_instagram_o_deja_en_blanco_si_no_tienes",
      field: "instagramHandle" as keyof FormData,
    },
    {
      title: "Personalidad de marca",
      question: "¿Cómo describirías la personalidad de tu marca?",
      placeholder: "Por ejemplo: profesional y confiable, joven y dinámica, elegante y sofisticada, cercana y amigable...",
      field: "brandPersonality" as keyof FormData,
    },
    {
      title: "Visión de tu sitio web",
      question: "¿Cómo te gustaría que luciera tu sitio web ideal?",
      placeholder: "Describe el estilo, colores, sensación que quieres transmitir. Por ejemplo: minimalista y limpio, colorido y divertido, elegante y profesional...",
      field: "websiteVision" as keyof FormData,
    },
    {
      title: "Información de contacto",
      question: "¿Cuál es tu email para enviarte tu auditoría personalizada?",
      placeholder: "tu-email@ejemplo.com",
      field: "contactEmail" as keyof FormData,
      type: "email",
    },
  ];

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Función para obtener los pasos válidos basados en las condiciones
  const getValidSteps = () => {
    return steps.filter((step, index) => {
      if (!step.condition) return true;
      return step.condition(formData);
    });
  };

  const validSteps = getValidSteps();
  const currentValidStepIndex = validSteps.findIndex(step => step.field === steps[currentStep].field);
  const totalValidSteps = validSteps.length;

  const handleNext = () => {
    if (currentValidStepIndex < totalValidSteps - 1) {
      const nextValidStep = validSteps[currentValidStepIndex + 1];
      const nextStepIndex = steps.findIndex(step => step.field === nextValidStep.field);
      setCurrentStep(nextStepIndex);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentValidStepIndex > 0) {
      const prevValidStep = validSteps[currentValidStepIndex - 1];
      const prevStepIndex = steps.findIndex(step => step.field === prevValidStep.field);
      setCurrentStep(prevStepIndex);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Aquí puedes enviar los datos a tu API
    setShowSuccessModal(true);
  };

  const resetForm = () => {
    setCurrentStep(0);
    setFormData({
      businessType: "",
      hasWebsite: "",
      websiteUrl: "",
      websiteIssues: "",
      businessGoals: "",
      targetAudience: "",
      mainChallenges: "",
      instagramHandle: "",
      brandPersonality: "",
      websiteVision: "",
      contactEmail: "",
      contactPhone: "",
    });
    setShowSuccessModal(false);
  };

  const currentStepData = steps[currentStep];

  // Validación específica para email
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isCurrentStepValid = currentStepData.type === "email"
    ? formData[currentStepData.field]?.trim() !== "" && isValidEmail(formData[currentStepData.field])
    : currentStepData.field === "instagramHandle"
      ? true // Instagram es opcional
      : formData[currentStepData.field]?.trim() !== "";

  return (
    <section className="relative py-10 lg:py-20 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#8b5cf6]/20 to-[#ec4899]/25" />
        <div className="pointer-events-none absolute -top-40 right-[-10%] h-[60vh] w-[60vh] rounded-full bg-[#a855f7]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-[-10%] h-[50vh] w-[50vh] rounded-full bg-[#ec4899]/15 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#8b5cf6]/20 to-[#ec4899]/20 border border-white/20 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-white/90">Oferta limitada</span>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            Auditoría UX Gratuita
          </h2>

          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Trazamos un plan para mejorar tu presencia digital y aumentar tus conversiones. <span className="font-semibold">Análisis completo por tiempo limitado.</span>
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-white/60 mb-2">
            <span>Paso {currentValidStepIndex + 1} de {totalValidSteps}</span>
            <span>{Math.round(((currentValidStepIndex + 1) / totalValidSteps) * 100)}% completado</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentValidStepIndex + 1) / totalValidSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question card */}
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-[28px] border border-white/15 bg-black/10 shadow-xl backdrop-blur-xl backdrop-saturate-150"
        >
          {/* Glow effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-tr from-[#a855f7]/30 via-white/10 to-transparent blur-2xl animate-pulse" />
            <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-tr from-[#ec4899]/25 via-white/5 to-transparent blur-2xl animate-pulse" />
            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">{currentStepData.title}</h3>
              <p className="text-lg text-white/90">{currentStepData.question}</p>
            </div>

            <div className="space-y-4">
              {currentStepData.field === "instagramHandle" && (
                <div className="mb-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <p className="text-blue-300 text-sm">
                    💡 <span className="font-medium">Campo opcional:</span> Si no tienes Instagram, puedes dejar este campo en blanco y continuar.
                  </p>
                </div>
              )}
              {currentStepData.type === "radio" ? (
                <div className="space-y-3">
                  {currentStepData.options?.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                    >
                      <input
                        type="radio"
                        name={currentStepData.field}
                        value={option.value}
                        checked={formData[currentStepData.field] === option.value}
                        onChange={(e) => handleInputChange(currentStepData.field, e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded-full border-2 mr-3 transition-all duration-200 ${formData[currentStepData.field] === option.value
                          ? "border-primary bg-primary"
                          : "border-white/30 group-hover:border-white/50"
                        }`}>
                        {formData[currentStepData.field] === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full m-0.5" />
                        )}
                      </div>
                      <span className="text-white/90 group-hover:text-white transition-colors">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
              ) : currentStepData.type === "email" ? (
                <div className="relative">
                  <input
                    type="email"
                    value={formData[currentStepData.field]}
                    onChange={(e) => handleInputChange(currentStepData.field, e.target.value)}
                    placeholder={currentStepData.placeholder}
                    className="w-full p-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200"
                  />
                  <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-sm">✓</span>
                      </div>
                      <div>
                        <p className="text-white/90 text-sm font-medium mb-1">
                          Tu auditoría será evaluada por un profesional UX/UI
                        </p>
                        <p className="text-white/70 text-sm">
                          Recibirás un análisis detallado y personalizado en las próximas 24 horas.
                          <span className="text-primary font-medium">¡Nos alegramos de que participes!</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <textarea
                    value={formData[currentStepData.field]}
                    onChange={(e) => handleInputChange(currentStepData.field, e.target.value)}
                    placeholder={currentStepData.placeholder}
                    className="w-full p-4 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 resize-none"
                    rows={4}
                  />
                </div>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentValidStepIndex === 0}
                className="px-6 py-3 rounded-xl border border-white/20 bg-white/5 text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Anterior
              </button>

              <button
                onClick={handleNext}
                disabled={!isCurrentStepValid}
                className="group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold text-white ring-2 ring-primary/70 bg-gradient-to-r from-primary/70 via-primary/45 to-primary/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-primary/80 hover:via-primary/55 hover:to-primary/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-primary/80 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10">
                  {currentStep === steps.length - 1 ? "Obtener mi auditoría" : "Siguiente"}
                </span>
                <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                  <span className="absolute -left-10 top-0 h-full w-10 translate-x-0 skew-x-[-20deg] bg-primary/60 blur-md opacity-0 transition-transform duration-700 ease-out group-hover:translate-x-[140%] group-hover:opacity-70"></span>
                </span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              <span>Resultados en 24h</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal de éxito */}
      {showSuccessModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative z-10 w-full max-w-md mx-auto"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-black/60 shadow-xl backdrop-blur-xl backdrop-saturate-150">
              {/* Glow effects */}
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-tr from-green-500/30 via-white/10 to-transparent blur-2xl animate-pulse" />
                <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-tr from-primary/25 via-white/5 to-transparent blur-2xl animate-pulse" />
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-70" />
              </div>

              <div className="relative z-10 p-8 text-center">
                {/* Icono de éxito */}
                <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  ¡Gracias por participar!
                </h3>

                {/* Mensaje */}
                <p className="text-white/80 mb-6 leading-relaxed">
                  Tu auditoría será evaluada por un profesional UX/UI considerando tu personalidad de marca, objetivos y visión del sitio web.
                  <span className="text-primary font-semibold">Te enviaremos un análisis detallado y personalizado en las próximas 24 horas.</span>
                </p>

                <p className="text-white/70 text-sm mb-8">
                  ¡Nos alegramos de que hayas participado!
                </p>

                {/* Botón de cerrar */}
                <button
                  onClick={resetForm}
                  className="group relative inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold text-white ring-2 ring-primary/70 bg-gradient-to-r from-primary/70 via-primary/45 to-primary/25 shadow-[0_12px_40px_-16px_rgba(139,92,246,0.75)] transition-all duration-300 hover:from-primary/80 hover:via-primary/55 hover:to-primary/35 hover:shadow-[0_16px_50px_-14px_rgba(139,92,246,0.8)] hover:ring-primary/80 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="relative z-10">Perfecto</span>
                  <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl">
                    <span className="absolute -left-10 top-0 h-full w-10 translate-x-0 skew-x-[-20deg] bg-primary/60 blur-md opacity-0 transition-transform duration-700 ease-out group-hover:translate-x-[140%] group-hover:opacity-70"></span>
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
});

export default BusinessAuditQuestionnaire;

import emailjs from "@emailjs/browser";

// EmailJS configuration from environment variables
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Form data interface
export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  interestedIn: string;
}

// Email template parameters interface
interface EmailTemplateParams {
  from_name: string;
  from_email: string;
  phone: string;
  interested_in: string;
  to_name: string;
  reply_to: string;
}

// Response interface
export interface EmailResponse {
  success: boolean;
  message: string;
}

// Validate environment variables
export const validateEmailConfig = (): boolean => {
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    console.error("EmailJS configuration is missing. Please check your environment variables.");
    return false;
  }
  return true;
};

// Initialize EmailJS (call this once in your app)
export const initEmailJS = (): void => {
  if (EMAILJS_PUBLIC_KEY) {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
};

// Map form data to email template parameters
const mapFormDataToTemplateParams = (formData: ConsultationFormData): EmailTemplateParams => {
  const interestLabels: Record<string, string> = {
    bachelor: "Bachelor's Degree",
    master: "Master's Degree",
    phd: "PhD Program",
    "not-sure": "Not Sure Yet",
  };

  return {
    from_name: formData.fullName,
    from_email: formData.email,
    phone: formData.phone,
    interested_in: interestLabels[formData.interestedIn] || formData.interestedIn,
    to_name: "Italy Admissions Team",
    reply_to: formData.email,
  };
};

// Send consultation request email
export const sendConsultationEmail = async (
  formData: ConsultationFormData
): Promise<EmailResponse> => {
  // Validate config before sending
  if (!validateEmailConfig()) {
    return {
      success: false,
      message: "Email service is not configured. Please contact us directly.",
    };
  }

  try {
    const templateParams = mapFormDataToTemplateParams(formData);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Thank you! We'll contact you within 24 hours.",
      };
    }

    return {
      success: false,
      message: "Failed to send your request. Please try again.",
    };
  } catch (error) {
    console.error("EmailJS Error:", error);

    // Return user-friendly error message
    return {
      success: false,
      message: "Something went wrong. Please try again or contact us directly.",
    };
  }
};

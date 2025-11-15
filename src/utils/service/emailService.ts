import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_your_service_id";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_your_template_id";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "your_public_key";

export const sendEmail = async (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message: string }> => {
  try {
    emailjs.init(PUBLIC_KEY);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: "kianjanloo10@gmail.com",
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams
    );

    if (response.status === 200) {
      return {
        success: true,
        message: "Email sent successfully!",
      };
    } else {
      throw new Error("Failed to send email");
    }
  } catch (error) {
    // Only log errors in development mode
    if (import.meta.env.DEV) {
      console.error("Email sending error:", error);
    }
    
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
};

export const createEmailLink = (formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string => {
  const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
  `.trim();

  return `mailto:kianjanloo10@gmail.com?subject=${encodeURIComponent(
    formData.subject
  )}&body=${encodeURIComponent(emailBody)}`;
};

// Existing public browser configuration carried forward from the supplied portfolio.
// Override through NEXT_PUBLIC_EMAILJS_* environment variables when needed.
export const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_n13gtdk";
export const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_nf9ejta";
export const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "yDhIDrL00NYW2rN_l";

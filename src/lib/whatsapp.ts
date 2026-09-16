export const WHATSAPP_DISPLAY = '+62 822-5185-3096';
export const WHATSAPP_NUMBER = '6282251853096';

export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
};


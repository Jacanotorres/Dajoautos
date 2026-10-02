/* =========================================================
   Dajoautos — configuración del sitio
   El inventario, el equipo y los clientes felices viven en Supabase
   (ver assets/js/db.js) y se administran desde panel.html. Aquí solo
   queda la configuración fija del sitio (contacto, redes) y los
   helpers que usan varias páginas.
   ========================================================= */

const WHATSAPP_NUMBER = "570000000000";
const CONTACT_PHONE_DISPLAY = "+57 000 000 0000";
const CONTACT_EMAIL = "PENDIENTE@dajoautos.com";

const SOCIAL_LINKS = {
  instagram: "#pendiente-instagram",
  tiktok: "#pendiente-tiktok",
  facebook: "#pendiente-facebook",
  maps: "#pendiente-maps"
};

function waLink(message){
  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
}

/* Igual que waLink(), pero a un número específico (por ejemplo, el
   WhatsApp directo de un asesor en particular). */
function waLinkTo(number, message){
  return "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
}

function formatPrice(n){
  return "$" + n.toLocaleString("es-CO");
}
function formatKm(n){
  return n.toLocaleString("es-CO") + " km";
}

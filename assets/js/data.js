/* =========================================================
   Dajoautos — configuración del sitio
   El inventario, el equipo y los clientes felices viven en Supabase
   (ver assets/js/db.js) y se administran desde panel.html. Aquí solo
   queda la configuración fija del sitio (contacto, redes) y los
   helpers que usan varias páginas.

   Un dato que se deje vacío ("") simplemente no se muestra en el
   sitio: sus botones, enlaces y bloques se ocultan solos (main.js).
   ========================================================= */

const WHATSAPP_NUMBER = "573169001786";             // solo dígitos, con indicativo del país
const CONTACT_PHONE_DISPLAY = "+57 316 900 1786";  // como se muestra en el sitio
const CONTACT_EMAIL = "";
const CONTACT_ADDRESS = "Av. 9ª A Nte. #16N - 34, Granada, Cali, Valle del Cauca";
const CONTACT_HOURS = "";          // ej. "Lunes a sábado, 8:00 a.m. – 6:00 p.m."

/* El mapa apunta a las coordenadas de la sede y no a una ficha de Google
   Maps: en esa dirección la ficha que existe es de otro negocio. Cuando
   Dajoautos tenga su propia ficha, se cambia por ese enlace. */
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/dajoautoscali/",
  tiktok: "https://www.tiktok.com/@dajoautoscali",
  facebook: "",
  maps: "https://www.google.com/maps/search/?api=1&query=3.4613099,-76.5337598"
};

/* Mapa incrustado de la página de contacto (mismas coordenadas, por la
   misma razón). Vacío = no se muestra el mapa. */
const MAP_EMBED_URL = "https://www.google.com/maps?q=3.4613099,-76.5337598&z=16&output=embed";

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

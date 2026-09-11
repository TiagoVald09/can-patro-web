/* =========================================================
   Can Patró — Motor de idiomas compartido (ES / EN / DE)
   Cargado por index.html y por las páginas de "entorno"
   (Ubicación → lugares cercanos). Contiene el diccionario de
   traducción, el cambio de idioma, el banner de cookies (RGPD)
   y el año del footer, para no duplicar este código en cada
   página del sitio.
   ========================================================= */
"use strict";

/* =========================================================
   Diccionario de traducción — ES / EN / DE
   ========================================================= */
var TRANSLATIONS = {
          es: {
            "skip": "Saltar al contenido",
            "brand.kicker": "Agroturismo",
            "nav.open": "Abrir menú",
            "nav.alojamientos": "Alojamientos",
            "nav.servicios": "Servicios",
            "nav.galeria": "Galería",
            "nav.ubicacion": "Ubicación",
            "nav.blog": "Blog",
            "nav.faq": "FAQ",
            "nav.contacto": "Contacto",
            "nav.cta": "Ver disponibilidad",
            "hero.eyebrow": "Manacor · Mallorca",
            "hero.title": "Desconectar en el campo, vivir Mallorca despacio.",
            "hero.lead": "Can Patró es una villa de agroturismo entre almendros y silencio. Ocho dormitorios, piscina al aire libre y el ritmo de la isla: lejos del ruido, a un paso de las cuevas, el mar y los pueblos de piedra.",
            "hero.cta1": "Ver disponibilidad",
            "hero.cta2": "Descubrir la casa",
            "hero.fact1": "650 m²",
            "hero.fact2": "8 dormitorios",
            "hero.fact3": "8 baños",
            "hero.fact4": "Piscina · Barbacoa · Parking",
            "intro.eyebrow": "La finca",
            "intro.title": "Una casa grande para descansar de verdad.",
            "intro.p1": "En las afueras de Manacor, Can Patró abre sus puertas a quienes buscan paz sin renunciar a la belleza. La villa, de 650 m², se alquila por habitaciones individuales, mini-apartamentos o en exclusiva: usted elige si viaja en pareja, con amigos o con toda la familia.",
            "intro.p2": "El día empieza con luz de campo, el canto de los pájaros y el agua de la piscina. Por la tarde, una barbacoa bajo el cielo mallorquín. Por la noche, dos chimeneas encendidas y el silencio de la isla.",
            "intro.note": "A 13 km de las Cuevas del Drach y a 54 km del aeropuerto de Palma. Lo bastante cerca para explorar; lo bastante lejos para desconectar.",
            "stays.eyebrow": "Alojamientos",
            "stays.title": "Tres maneras de quedarse en Can Patró.",
            "stays.lead": "Flexibilidad total para cada viaje: una habitación para una escapada íntima, un mini-apartamento con independencia propia, o la villa entera para reunir a todo el grupo.",
            "stays.casa.title": "Casa Completa",
            "stays.casa.desc": "Los 650 m² de Can Patró solo para los suyos: 8 dormitorios, 8 baños, piscina, jardín y cocina completa. Ideal para celebraciones, familias numerosas o grupos de amigos.",
            "stays.casa.cta": "Ver disponibilidad",
            "stays.habitaciones.title": "Habitaciones Individuales",
            "stays.habitaciones.desc": "Reserve solo su habitación, con baño privado y acceso a las zonas comunes de la finca. La opción perfecta para viajeros en pareja o estancias breves.",
            "stays.habitaciones.cta": "Ver disponibilidad",
            "stays.miniapt.title": "Mini-departamentos",
            "stays.miniapt.desc": "Espacios independientes con cocina propia, pensados para quienes buscan autonomía sin perder el encanto y la calma de la finca.",
            "stays.miniapt.cta": "Ver disponibilidad",
            "amenities.eyebrow": "Comodidades",
            "amenities.title": "Todo lo necesario. Nada que distraiga.",
            "amenities.lead": "Can Patró está pensada para que el día fluya, dentro y fuera de la casa.",
            "amenities.ac": "Aire acondicionado",
            "amenities.heating": "Calefacción central",
            "amenities.fireplaces": "2 Chimeneas",
            "amenities.tv": "TV satélite",
            "amenities.wifi": "WiFi",
            "amenities.ethernet": "Ethernet",
            "amenities.pool": "Piscina",
            "amenities.hammock": "Hamaca",
            "gallery.eyebrow": "Galería",
            "gallery.title": "Can Patró, en imágenes.",
            "gallery.lead": "Un vistazo a la casa, el jardín y la luz de Manacor.",
            "gallery.cta": "Ver más fotos",
            "gallery.ctaLess": "Ver menos fotos",
            "location.eyebrow": "Ubicación",
            "location.title": "El campo, cerca de todo lo demás.",
            "location.lead": "Can Patró está en Manacor, en el corazón agrícola de Mallorca, a poca distancia de cuevas, playas y el aeropuerto.",
            "location.address": "Polígono 33, 242 · 07509 Manacor, Mallorca, España",
            "location.dist.manacor": "Manacor",
            "location.dist.cuevas": "Cuevas del Drach",
            "location.dist.aeropuerto": "Aeropuerto de Palma",
            "location.dist.rafanadal": "Rafa Nadal Academy",
            "location.dist.portocristo": "Porto Cristo",
            "location.dist.playa": "Playa Romántica",
            "location.dist.mercado": "Mercado de Manacor",
            "location.note": "Tiempos orientativos en coche desde Can Patró. Toque un lugar para verlo en el mapa, o la flecha para saber más.",
            "location.showing": "Mostrando:",
            "location.viewProperty": "Ver Can Patró",
            "location.dist.rafanadal.more": "Saber más sobre Rafa Nadal Academy",
            "location.dist.cuevas.more": "Saber más sobre las Cuevas del Drach",
            "location.dist.portocristo.more": "Saber más sobre Porto Cristo",
            "location.dist.playa.more": "Saber más sobre Playa Romántica",
            "location.dist.mercado.more": "Saber más sobre el Mercado de Manacor",
            "blog.eyebrow": "Descubre Mallorca",
            "blog.title": "Historias del campo y la isla.",
            "blog.lead": "Ideas para llenar los días entre la piscina y la carretera de almendros.",
            "blog.readmore": "Leer más",
            "blog.post1.date": "12 marzo 2026",
            "blog.post1.title": "Un día entre almendros en flor",
            "blog.post1.excerpt": "Cuándo y dónde ver los campos de Manacor vestidos de blanco y rosa, y las rutas tranquilas para recorrerlos en bicicleta.",
            "blog.post2.date": "28 marzo 2026",
            "blog.post2.title": "Cuevas del Drach: la Mallorca subterránea",
            "blog.post2.excerpt": "Qué esperar de la visita, el mejor horario para evitar aglomeraciones y cómo combinarla con una tarde en Porto Cristo.",
            "blog.post3.date": "9 abril 2026",
            "blog.post3.title": "Mercados y pueblos del Llevant",
            "blog.post3.excerpt": "Un recorrido sin prisa por los mercados semanales y las calles de piedra del este de Mallorca, con Can Patró como base.",
            "cta.eyebrow": "Reservas",
            "cta.title": "Compruebe fechas y reserve con calma.",
            "cta.lead": "El calendario de Can Patró se gestiona con un sistema externo de disponibilidad. Elija habitación, mini-apartamento o casa completa y solicite las fechas que tiene en mente.",
            "cta.btn1": "Reservar",
            "cta.btn2": "Escribir a reservas",
            "contact.eyebrow": "Contacto",
            "contact.title": "Le esperamos en Manacor.",
            "contact.lead": "Cuéntenos cuántas personas viajan, qué tipo de alojamiento prefiere y las fechas aproximadas. Respondemos con claridad y sin prisas.",
            "contact.info.label": "Atención al cliente",
            "contact.reservas.label": "Reservas y gestión",
            "contact.location.label": "Ubicación",
            "contact.location.value": "Manacor, Mallorca · 13 km Cuevas del Drach · 54 km aeropuerto",
            "form.name": "Nombre",
            "form.name.placeholder": "Su nombre",
            "form.email": "Correo",
            "form.email.placeholder": "su@correo.com",
            "form.stay": "Tipo de alojamiento",
            "form.stay.room": "Habitación individual",
            "form.stay.miniapt": "Mini-departamento",
            "form.stay.house": "Casa completa",
            "form.stay.unsure": "Aún no lo sé",
            "form.message": "Mensaje",
            "form.message.placeholder": "Fechas, número de huéspedes y lo que le gustaría encontrar en Can Patró.",
            "form.submit": "Reservar / consultar",
            "form.note": "Este formulario abre su correo para enviarnos el mensaje. No procesamos pagos en esta web.",
            "footer.tagline": "Agroturismo en Manacor, Mallorca. Paz, campo y una villa para quedarse.",
            "footer.contact.heading": "Contacto",
            "footer.legal.heading": "Aviso legal",
            "footer.legal.notice": "Aviso Legal",
            "footer.legal.privacy": "Política de Privacidad",
            "footer.legal.cookies": "Política de Cookies",
            "footer.owner": "Titular: Qhapaq Ayllu S.L.",
            "footer.disclaimer": "Esta web no gestiona pagos; las reservas se confirman por los canales oficiales de la finca.",
            "cookies.text": "Usamos cookies propias y de terceros para el correcto funcionamiento de la web y para analizar la navegación. Puede aceptarlas todas o configurar sus preferencias. Más información en nuestra ",
            "cookies.link": "Política de Cookies",
            "cookies.configure": "Configurar",
            "cookies.acceptAll": "Aceptar todas",
            "cookies.necessary.title": "Necesarias",
            "cookies.necessary.desc": "Imprescindibles para el funcionamiento de la web.",
            "cookies.analytics.title": "Analíticas",
            "cookies.analytics.desc": "Nos ayudan a entender cómo se usa la web.",
            "cookies.marketing.title": "Marketing",
            "cookies.marketing.desc": "Para mostrar contenido relevante en otras webs.",
            "cookies.save": "Guardar preferencias",
            "faq.eyebrow": "Preguntas frecuentes",
            "faq.title": "Todo lo que necesita saber.",
            "faq.lead": "Si tiene otra duda, escríbanos a info@canpatro.com y le responderemos con gusto.",
            "faq.q1": "¿Cuál es el horario de check-in y check-out?",
            "faq.a1": "El check-in es a partir de las 16:00 y el check-out hasta las 11:00. Si su vuelo lo permite, contáctenos: siempre que la disponibilidad lo permita, intentamos adaptar los horarios a su llegada o salida.",
            "faq.q2": "¿Se admiten mascotas en Can Patró?",
            "faq.a2": "Sí, las mascotas son bienvenidas en la mayoría de las reservas de casa completa, previa consulta. En alquileres de habitación individual o mini-departamento, escríbanos antes de reservar para confirmar disponibilidad.",
            "faq.q3": "¿Cuál es la política de cancelación?",
            "faq.a3": "Las condiciones de cancelación dependen de la tarifa elegida en el motor de reservas y se muestran antes de confirmar el pago. Para reservas gestionadas por correo, indicamos las condiciones exactas al enviar el presupuesto.",
            "faq.q4": "Si reservo una habitación individual, ¿tengo acceso a la piscina y las zonas comunes?",
            "faq.a4": "Sí. Todos los huéspedes, reserven una habitación, un mini-departamento o la villa completa, tienen acceso a la piscina, el jardín y la zona de barbacoa de Can Patró.",
            "place.eyebrow": "Cerca de Can Patró",
            "place.backLink": "← Volver a Can Patró",
            "place.cta1": "Ver disponibilidad en Can Patró",
            "place.cta2": "Volver al mapa",
            "place.titleSuffix": " · Cerca de Can Patró",
            "place.notFound.title": "Este lugar no está disponible",
            "place.notFound.body": "Vuelva a Can Patró para ver el resto de lugares de interés cercanos.",
            "place.rafanadal.title": "Rafa Nadal Academy",
            "place.rafanadal.distance": "A 10 minutos en coche desde Can Patró.",
            "place.rafanadal.body1": "Fundada por el tenista mallorquín Rafael Nadal, esta academia deportiva reúne pistas de tenis y pádel, un centro de alto rendimiento y un espacio expositivo dedicado a su trayectoria.",
            "place.rafanadal.body2": "Ideal para los amantes del deporte que quieran combinar sus vacaciones en Can Patró con una visita a uno de los referentes deportivos de la isla.",
            "place.cuevas.title": "Cuevas del Drach",
            "place.cuevas.distance": "A 15 minutos en coche desde Can Patró.",
            "place.cuevas.body1": "Una de las cuevas más visitadas de España: galerías de piedra caliza, estalactitas centenarias y el lago Martel, uno de los lagos subterráneos más grandes de Europa.",
            "place.cuevas.body2": "La visita incluye un pequeño concierto de música clásica sobre el agua, a bordo de barcas iluminadas. Reserve entrada con antelación en temporada alta.",
            "place.portocristo.title": "Porto Cristo",
            "place.portocristo.distance": "A 15 minutos en coche desde Can Patró.",
            "place.portocristo.body1": "Antiguo pueblo de pescadores convertido en uno de los puertos más encantadores del Llevant mallorquín, con un paseo marítimo tranquilo y restaurantes frente al mar.",
            "place.portocristo.body2": "Punto de partida habitual para visitar las Cuevas del Drach y las Cuevas dels Hams, además de sus propias calas de aguas tranquilas.",
            "place.playa.title": "Playa Romántica",
            "place.playa.distance": "A 20 minutos en coche desde Can Patró.",
            "place.playa.body1": "Una cala pequeña y resguardada, de aguas turquesas y arena fina, popular entre familias por su ambiente tranquilo y sus aguas poco profundas.",
            "place.playa.body2": "Un buen plan para una tarde de playa después de la piscina de Can Patró, con varios chiringuitos cerca para comer frente al mar.",
            "place.mercado.title": "Mercado de Manacor",
            "place.mercado.distance": "A 8 minutos en coche desde Can Patró.",
            "place.mercado.body1": "Cada lunes, el centro de Manacor se llena con uno de los mercados semanales más animados de Mallorca: producto local, flores, ropa y artesanía.",
            "place.mercado.body2": "Una buena forma de empezar el día como un mallorquín más, antes de volver a la calma de Can Patró."

          },
          en: {
            "skip": "Skip to content",
            "brand.kicker": "Agritourism",
            "nav.open": "Open menu",
            "nav.alojamientos": "Accommodation",
            "nav.servicios": "Amenities",
            "nav.galeria": "Gallery",
            "nav.ubicacion": "Location",
            "nav.blog": "Blog",
            "nav.faq": "FAQ",
            "nav.contacto": "Contact",
            "nav.cta": "Check availability",
            "hero.eyebrow": "Manacor · Mallorca",
            "hero.title": "Unplug in the countryside, live Mallorca slowly.",
            "hero.lead": "Can Patró is an agritourism villa among almond trees and silence. Eight bedrooms, an outdoor pool and the island's own pace: far from the noise, close to the caves, the sea and the stone villages.",
            "hero.cta1": "Check availability",
            "hero.cta2": "Discover the house",
            "hero.fact1": "650 m²",
            "hero.fact2": "8 bedrooms",
            "hero.fact3": "8 bathrooms",
            "hero.fact4": "Pool · Barbecue · Parking",
            "intro.eyebrow": "The estate",
            "intro.title": "A big house to truly rest in.",
            "intro.p1": "On the outskirts of Manacor, Can Patró welcomes those looking for peace without giving up beauty. The 650 m² villa is rented by individual room, mini-apartment, or in full: you choose whether you're travelling as a couple, with friends, or with the whole family.",
            "intro.p2": "The day starts with countryside light, birdsong and the water of the pool. In the afternoon, a barbecue under the Mallorcan sky. At night, two lit fireplaces and the silence of the island.",
            "intro.note": "13 km from the Caves of Drach and 54 km from Palma airport. Close enough to explore; far enough to switch off.",
            "stays.eyebrow": "Accommodation",
            "stays.title": "Three ways to stay at Can Patró.",
            "stays.lead": "Total flexibility for every trip: a room for an intimate getaway, a mini-apartment with its own independence, or the whole villa to bring the whole group together.",
            "stays.casa.title": "Full House",
            "stays.casa.desc": "All 650 m² of Can Patró just for you: 8 bedrooms, 8 bathrooms, pool, garden and a fully equipped kitchen. Ideal for celebrations, large families or groups of friends.",
            "stays.casa.cta": "Check availability",
            "stays.habitaciones.title": "Individual Rooms",
            "stays.habitaciones.desc": "Book just your room, with a private bathroom and access to the estate's shared areas. The perfect option for couples or short stays.",
            "stays.habitaciones.cta": "Check availability",
            "stays.miniapt.title": "Mini-Apartments",
            "stays.miniapt.desc": "Independent spaces with their own kitchen, designed for those seeking autonomy without losing the charm and calm of the estate.",
            "stays.miniapt.cta": "Check availability",
            "amenities.eyebrow": "Amenities",
            "amenities.title": "Everything you need. Nothing to distract you.",
            "amenities.lead": "Can Patró is designed for the day to flow, indoors and out.",
            "amenities.ac": "Air conditioning",
            "amenities.heating": "Central heating",
            "amenities.fireplaces": "2 Fireplaces",
            "amenities.tv": "Satellite TV",
            "amenities.wifi": "WiFi",
            "amenities.ethernet": "Ethernet",
            "amenities.pool": "Swimming pool",
            "amenities.hammock": "Hammock",
            "gallery.eyebrow": "Gallery",
            "gallery.title": "Can Patró, in pictures.",
            "gallery.lead": "A glimpse of the house, the garden and the Manacor light.",
            "gallery.cta": "See more photos",
            "gallery.ctaLess": "See fewer photos",
            "location.eyebrow": "Location",
            "location.title": "The countryside, close to everything else.",
            "location.lead": "Can Patró is in Manacor, in the agricultural heart of Mallorca, a short distance from caves, beaches and the airport.",
            "location.address": "Polígono 33, 242 · 07509 Manacor, Mallorca, Spain",
            "location.dist.manacor": "Manacor",
            "location.dist.cuevas": "Caves of Drach",
            "location.dist.aeropuerto": "Palma Airport",
            "location.dist.rafanadal": "Rafa Nadal Academy",
            "location.dist.portocristo": "Porto Cristo",
            "location.dist.playa": "Playa Romántica beach",
            "location.dist.mercado": "Manacor Market",
            "location.note": "Approximate driving times from Can Patró. Tap a place to see it on the map, or the arrow to learn more.",
            "location.showing": "Showing:",
            "location.viewProperty": "View Can Patró",
            "location.dist.rafanadal.more": "Learn more about Rafa Nadal Academy",
            "location.dist.cuevas.more": "Learn more about the Caves of Drach",
            "location.dist.portocristo.more": "Learn more about Porto Cristo",
            "location.dist.playa.more": "Learn more about Playa Romántica",
            "location.dist.mercado.more": "Learn more about Manacor Market",
            "blog.eyebrow": "Discover Mallorca",
            "blog.title": "Stories from the countryside and the island.",
            "blog.lead": "Ideas to fill the days between the pool and the almond-tree road.",
            "blog.readmore": "Read more",
            "blog.post1.date": "12 March 2026",
            "blog.post1.title": "A day among blossoming almond trees",
            "blog.post1.excerpt": "When and where to see Manacor's fields dressed in white and pink, plus quiet routes to cycle through them.",
            "blog.post2.date": "28 March 2026",
            "blog.post2.title": "Caves of Drach: Mallorca's underground world",
            "blog.post2.excerpt": "What to expect from the visit, the best time to avoid crowds, and how to combine it with an afternoon in Porto Cristo.",
            "blog.post3.date": "9 April 2026",
            "blog.post3.title": "Markets and villages of the Llevant",
            "blog.post3.excerpt": "An unhurried tour of the weekly markets and stone streets of eastern Mallorca, with Can Patró as your base.",
            "cta.eyebrow": "Bookings",
            "cta.title": "Check dates and book at ease.",
            "cta.lead": "Can Patró's calendar is managed through an external availability system. Choose a room, mini-apartment or the full house and request the dates you have in mind.",
            "cta.btn1": "Book now",
            "cta.btn2": "Email reservations",
            "contact.eyebrow": "Contact",
            "contact.title": "We're waiting for you in Manacor.",
            "contact.lead": "Tell us how many people are travelling, what type of accommodation you prefer and your approximate dates. We reply clearly, without rushing.",
            "contact.info.label": "Guest enquiries",
            "contact.reservas.label": "Reservations",
            "contact.location.label": "Location",
            "contact.location.value": "Manacor, Mallorca · 13 km Caves of Drach · 54 km airport",
            "form.name": "Name",
            "form.name.placeholder": "Your name",
            "form.email": "Email",
            "form.email.placeholder": "you@email.com",
            "form.stay": "Accommodation type",
            "form.stay.room": "Individual room",
            "form.stay.miniapt": "Mini-apartment",
            "form.stay.house": "Full house",
            "form.stay.unsure": "Not sure yet",
            "form.message": "Message",
            "form.message.placeholder": "Dates, number of guests and anything you'd like to find at Can Patró.",
            "form.submit": "Book / enquire",
            "form.note": "This form opens your email client to send us the message. We do not process payments on this website.",
            "footer.tagline": "Agritourism in Manacor, Mallorca. Peace, countryside and a villa worth staying in.",
            "footer.contact.heading": "Contact",
            "footer.legal.heading": "Legal",
            "footer.legal.notice": "Legal Notice",
            "footer.legal.privacy": "Privacy Policy",
            "footer.legal.cookies": "Cookie Policy",
            "footer.owner": "Owner: Qhapaq Ayllu S.L.",
            "footer.disclaimer": "This website does not process payments; bookings are confirmed through the estate's official channels.",
            "cookies.text": "We use our own and third-party cookies for the website to function correctly and to analyse browsing. You can accept them all or set your preferences. More information in our ",
            "cookies.link": "Cookie Policy",
            "cookies.configure": "Manage settings",
            "cookies.acceptAll": "Accept all",
            "cookies.necessary.title": "Necessary",
            "cookies.necessary.desc": "Essential for the website to function.",
            "cookies.analytics.title": "Analytics",
            "cookies.analytics.desc": "Help us understand how the website is used.",
            "cookies.marketing.title": "Marketing",
            "cookies.marketing.desc": "Used to show relevant content on other websites.",
            "cookies.save": "Save preferences",
            "faq.eyebrow": "Frequently asked questions",
            "faq.title": "Everything you need to know.",
            "faq.lead": "If you have another question, write to us at info@canpatro.com and we'll be happy to help.",
            "faq.q1": "What are the check-in and check-out times?",
            "faq.a1": "Check-in is from 4:00 PM and check-out until 11:00 AM. If your flight allows it, contact us: whenever availability permits, we try to adapt the times to your arrival or departure.",
            "faq.q2": "Are pets allowed at Can Patró?",
            "faq.a2": "Yes, pets are welcome for most full-house bookings, subject to confirmation. For an individual room or mini-apartment, please write to us before booking to confirm availability.",
            "faq.q3": "What is the cancellation policy?",
            "faq.a3": "Cancellation terms depend on the rate chosen in the booking engine and are shown before confirming payment. For bookings managed by email, we state the exact terms when sending the quote.",
            "faq.q4": "If I book an individual room, do I have access to the pool and shared areas?",
            "faq.a4": "Yes. All guests, whether booking a room, a mini-apartment or the full villa, have access to the pool, the garden and the barbecue area at Can Patró.",
            "place.eyebrow": "Near Can Patró",
            "place.backLink": "← Back to Can Patró",
            "place.cta1": "Check availability at Can Patró",
            "place.cta2": "Back to the map",
            "place.titleSuffix": " · Near Can Patró",
            "place.notFound.title": "This place isn't available",
            "place.notFound.body": "Go back to Can Patró to see the other nearby places of interest.",
            "place.rafanadal.title": "Rafa Nadal Academy",
            "place.rafanadal.distance": "A 10-minute drive from Can Patró.",
            "place.rafanadal.body1": "Founded by Mallorcan tennis champion Rafael Nadal, this sports academy brings together tennis and padel courts, a high-performance training centre and an exhibition space dedicated to his career.",
            "place.rafanadal.body2": "A great stop for sports lovers looking to combine their stay at Can Patró with a visit to one of the island's best-known sporting landmarks.",
            "place.cuevas.title": "Caves of Drach",
            "place.cuevas.distance": "A 15-minute drive from Can Patró.",
            "place.cuevas.body1": "One of Spain's most visited caves: limestone galleries, centuries-old stalactites and Lake Martel, one of the largest underground lakes in Europe.",
            "place.cuevas.body2": "The visit includes a short classical music concert on the water, performed from illuminated boats. Book ahead during high season.",
            "place.portocristo.title": "Porto Cristo",
            "place.portocristo.distance": "A 15-minute drive from Can Patró.",
            "place.portocristo.body1": "A former fishing village turned into one of the most charming harbours on Mallorca's east coast, with a relaxed seafront promenade and restaurants by the water.",
            "place.portocristo.body2": "The usual starting point for visiting the Caves of Drach and Caves dels Hams, plus its own calm-water coves.",
            "place.playa.title": "Playa Romántica",
            "place.playa.distance": "A 20-minute drive from Can Patró.",
            "place.playa.body1": "A small, sheltered cove with turquoise water and fine sand, popular with families for its calm atmosphere and shallow waters.",
            "place.playa.body2": "A lovely plan for a beach afternoon after the pool at Can Patró, with a few beach bars nearby for a meal by the sea.",
            "place.mercado.title": "Manacor Market",
            "place.mercado.distance": "An 8-minute drive from Can Patró.",
            "place.mercado.body1": "Every Monday, the centre of Manacor fills with one of Mallorca's liveliest weekly markets: local produce, flowers, clothing and crafts.",
            "place.mercado.body2": "A great way to start the day like a local, before heading back to the calm of Can Patró."

          },
          de: {
            "skip": "Zum Inhalt springen",
            "brand.kicker": "Agrotourismus",
            "nav.open": "Menü öffnen",
            "nav.alojamientos": "Unterkünfte",
            "nav.servicios": "Ausstattung",
            "nav.galeria": "Galerie",
            "nav.ubicacion": "Lage",
            "nav.blog": "Blog",
            "nav.faq": "FAQ",
            "nav.contacto": "Kontakt",
            "nav.cta": "Verfügbarkeit prüfen",
            "hero.eyebrow": "Manacor · Mallorca",
            "hero.title": "Abschalten auf dem Land, Mallorca im eigenen Tempo erleben.",
            "hero.lead": "Can Patró ist eine Agrotourismus-Villa zwischen Mandelbäumen und Stille. Acht Schlafzimmer, ein Freiluftpool und der Rhythmus der Insel: fernab vom Lärm, ganz nah an Höhlen, Meer und steinernen Dörfern.",
            "hero.cta1": "Verfügbarkeit prüfen",
            "hero.cta2": "Das Haus entdecken",
            "hero.fact1": "650 m²",
            "hero.fact2": "8 Schlafzimmer",
            "hero.fact3": "8 Badezimmer",
            "hero.fact4": "Pool · Grill · Parkplatz",
            "intro.eyebrow": "Das Anwesen",
            "intro.title": "Ein großes Haus für echte Erholung.",
            "intro.p1": "Am Rande von Manacor öffnet Can Patró seine Türen für alle, die Ruhe suchen, ohne auf Schönheit zu verzichten. Die 650 m² große Villa wird zimmerweise, als Miniapartment oder exklusiv vermietet: Sie entscheiden, ob Sie zu zweit, mit Freunden oder mit der ganzen Familie reisen.",
            "intro.p2": "Der Tag beginnt mit Licht auf dem Land, Vogelgezwitscher und dem Wasser des Pools. Am Nachmittag ein Grillabend unter dem mallorquinischen Himmel. Nachts zwei brennende Kamine und die Stille der Insel.",
            "intro.note": "13 km von den Drachenhöhlen und 54 km vom Flughafen Palma entfernt. Nah genug zum Erkunden, fern genug zum Abschalten.",
            "stays.eyebrow": "Unterkünfte",
            "stays.title": "Drei Arten, in Can Patró zu wohnen.",
            "stays.lead": "Volle Flexibilität für jede Reise: ein Zimmer für eine intime Auszeit, ein Miniapartment mit eigener Unabhängigkeit oder die ganze Villa, um die gesamte Gruppe zusammenzubringen.",
            "stays.casa.title": "Ganzes Haus",
            "stays.casa.desc": "Alle 650 m² von Can Patró nur für Sie: 8 Schlafzimmer, 8 Badezimmer, Pool, Garten und eine voll ausgestattete Küche. Ideal für Feiern, große Familien oder Freundesgruppen.",
            "stays.casa.cta": "Verfügbarkeit prüfen",
            "stays.habitaciones.title": "Einzelzimmer",
            "stays.habitaciones.desc": "Buchen Sie nur Ihr Zimmer, mit eigenem Bad und Zugang zu den Gemeinschaftsbereichen des Anwesens. Die perfekte Option für Paare oder kurze Aufenthalte.",
            "stays.habitaciones.cta": "Verfügbarkeit prüfen",
            "stays.miniapt.title": "Miniapartments",
            "stays.miniapt.desc": "Unabhängige Bereiche mit eigener Küche, gedacht für alle, die Eigenständigkeit suchen, ohne auf den Charme und die Ruhe des Anwesens zu verzichten.",
            "stays.miniapt.cta": "Verfügbarkeit prüfen",
            "amenities.eyebrow": "Ausstattung",
            "amenities.title": "Alles Nötige. Nichts, was ablenkt.",
            "amenities.lead": "Can Patró ist so gestaltet, dass der Tag drinnen wie draußen einfach fließt.",
            "amenities.ac": "Klimaanlage",
            "amenities.heating": "Zentralheizung",
            "amenities.fireplaces": "2 Kamine",
            "amenities.tv": "Satelliten-TV",
            "amenities.wifi": "WLAN",
            "amenities.ethernet": "Ethernet",
            "amenities.pool": "Schwimmbad",
            "amenities.hammock": "Hängematte",
            "gallery.eyebrow": "Galerie",
            "gallery.title": "Can Patró, in Bildern.",
            "gallery.lead": "Ein Blick auf das Haus, den Garten und das Licht von Manacor.",
            "gallery.cta": "Mehr Fotos ansehen",
            "gallery.ctaLess": "Weniger Fotos anzeigen",
            "location.eyebrow": "Lage",
            "location.title": "Das Land, nah an allem anderen.",
            "location.lead": "Can Patró liegt in Manacor, im landwirtschaftlichen Herzen Mallorcas, nur kurze Zeit von Höhlen, Stränden und dem Flughafen entfernt.",
            "location.address": "Polígono 33, 242 · 07509 Manacor, Mallorca, Spanien",
            "location.dist.manacor": "Manacor",
            "location.dist.cuevas": "Drachenhöhlen",
            "location.dist.aeropuerto": "Flughafen Palma",
            "location.dist.rafanadal": "Rafa Nadal Academy",
            "location.dist.portocristo": "Porto Cristo",
            "location.dist.playa": "Playa Romántica",
            "location.dist.mercado": "Wochenmarkt Manacor",
            "location.note": "Ungefähre Fahrzeiten ab Can Patró. Tippen Sie auf einen Ort, um ihn auf der Karte zu sehen, oder auf den Pfeil für mehr Informationen.",
            "location.showing": "Angezeigt:",
            "location.viewProperty": "Can Patró anzeigen",
            "location.dist.rafanadal.more": "Mehr über die Rafa Nadal Academy erfahren",
            "location.dist.cuevas.more": "Mehr über die Drachenhöhlen erfahren",
            "location.dist.portocristo.more": "Mehr über Porto Cristo erfahren",
            "location.dist.playa.more": "Mehr über Playa Romántica erfahren",
            "location.dist.mercado.more": "Mehr über den Wochenmarkt Manacor erfahren",
            "blog.eyebrow": "Mallorca entdecken",
            "blog.title": "Geschichten vom Land und der Insel.",
            "blog.lead": "Ideen, um die Tage zwischen Pool und Mandelbaum-Allee zu füllen.",
            "blog.readmore": "Weiterlesen",
            "blog.post1.date": "12. März 2026",
            "blog.post1.title": "Ein Tag zwischen blühenden Mandelbäumen",
            "blog.post1.excerpt": "Wann und wo man die Felder von Manacor in Weiß und Rosa erleben kann, plus ruhige Radrouten.",
            "blog.post2.date": "28. März 2026",
            "blog.post2.title": "Drachenhöhlen: das unterirdische Mallorca",
            "blog.post2.excerpt": "Was Sie beim Besuch erwartet, die beste Uhrzeit, um Menschenmassen zu vermeiden, und wie Sie ihn mit einem Nachmittag in Porto Cristo verbinden.",
            "blog.post3.date": "9. April 2026",
            "blog.post3.title": "Märkte und Dörfer der Llevant-Region",
            "blog.post3.excerpt": "Ein entspannter Streifzug durch die Wochenmärkte und steinernen Gassen im Osten Mallorcas, mit Can Patró als Ausgangspunkt.",
            "cta.eyebrow": "Buchungen",
            "cta.title": "Termine prüfen und in Ruhe buchen.",
            "cta.lead": "Der Kalender von Can Patró wird über ein externes Verfügbarkeitssystem verwaltet. Wählen Sie Zimmer, Miniapartment oder das ganze Haus und fragen Sie Ihre Wunschtermine an.",
            "cta.btn1": "Jetzt buchen",
            "cta.btn2": "Reservierung per E-Mail",
            "contact.eyebrow": "Kontakt",
            "contact.title": "Wir erwarten Sie in Manacor.",
            "contact.lead": "Teilen Sie uns mit, wie viele Personen reisen, welche Unterkunftsart Sie bevorzugen und Ihren ungefähren Zeitraum. Wir antworten klar und ohne Eile.",
            "contact.info.label": "Kundenservice",
            "contact.reservas.label": "Reservierungen",
            "contact.location.label": "Lage",
            "contact.location.value": "Manacor, Mallorca · 13 km Drachenhöhlen · 54 km Flughafen",
            "form.name": "Name",
            "form.name.placeholder": "Ihr Name",
            "form.email": "E-Mail",
            "form.email.placeholder": "sie@email.com",
            "form.stay": "Art der Unterkunft",
            "form.stay.room": "Einzelzimmer",
            "form.stay.miniapt": "Miniapartment",
            "form.stay.house": "Ganzes Haus",
            "form.stay.unsure": "Noch nicht sicher",
            "form.message": "Nachricht",
            "form.message.placeholder": "Termine, Anzahl der Gäste und was Sie sich von Can Patró wünschen.",
            "form.submit": "Buchen / anfragen",
            "form.note": "Dieses Formular öffnet Ihr E-Mail-Programm, um uns die Nachricht zu senden. Wir wickeln keine Zahlungen über diese Website ab.",
            "footer.tagline": "Agrotourismus in Manacor, Mallorca. Ruhe, Land und eine Villa zum Bleiben.",
            "footer.contact.heading": "Kontakt",
            "footer.legal.heading": "Rechtliches",
            "footer.legal.notice": "Impressum",
            "footer.legal.privacy": "Datenschutzerklärung",
            "footer.legal.cookies": "Cookie-Richtlinie",
            "footer.owner": "Inhaber: Qhapaq Ayllu S.L.",
            "footer.disclaimer": "Diese Website wickelt keine Zahlungen ab; Buchungen werden über die offiziellen Kanäle des Anwesens bestätigt.",
            "cookies.text": "Wir verwenden eigene Cookies und Cookies von Drittanbietern, damit die Website korrekt funktioniert und um die Nutzung zu analysieren. Sie können alle akzeptieren oder Ihre Einstellungen anpassen. Weitere Informationen in unserer ",
            "cookies.link": "Cookie-Richtlinie",
            "cookies.configure": "Einstellungen",
            "cookies.acceptAll": "Alle akzeptieren",
            "cookies.necessary.title": "Notwendig",
            "cookies.necessary.desc": "Unerlässlich für die Funktion der Website.",
            "cookies.analytics.title": "Analyse",
            "cookies.analytics.desc": "Helfen uns zu verstehen, wie die Website genutzt wird.",
            "cookies.marketing.title": "Marketing",
            "cookies.marketing.desc": "Um relevante Inhalte auf anderen Websites anzuzeigen.",
            "cookies.save": "Einstellungen speichern",
            "faq.eyebrow": "Häufige Fragen",
            "faq.title": "Alles, was Sie wissen müssen.",
            "faq.lead": "Bei weiteren Fragen schreiben Sie uns an info@canpatro.com — wir helfen Ihnen gerne weiter.",
            "faq.q1": "Wann ist Check-in und Check-out?",
            "faq.a1": "Der Check-in ist ab 16:00 Uhr, der Check-out bis 11:00 Uhr. Falls es Ihr Flug erlaubt, kontaktieren Sie uns: Je nach Verfügbarkeit passen wir die Zeiten gerne an Ihre An- oder Abreise an.",
            "faq.q2": "Sind Haustiere in Can Patró erlaubt?",
            "faq.a2": "Ja, Haustiere sind bei den meisten Buchungen des ganzen Hauses nach Rücksprache willkommen. Bei Einzelzimmern oder Miniapartments schreiben Sie uns bitte vor der Buchung, um die Verfügbarkeit zu bestätigen.",
            "faq.q3": "Wie lautet die Stornierungsbedingung?",
            "faq.a3": "Die Stornierungsbedingungen hängen von der im Buchungssystem gewählten Tarifart ab und werden vor der Zahlungsbestätigung angezeigt. Bei per E-Mail verwalteten Buchungen teilen wir Ihnen die genauen Bedingungen mit dem Angebot mit.",
            "faq.q4": "Wenn ich ein Einzelzimmer buche, habe ich dann Zugang zum Pool und zu den Gemeinschaftsbereichen?",
            "faq.a4": "Ja. Alle Gäste — ob sie ein Zimmer, ein Miniapartment oder die ganze Villa buchen — haben Zugang zum Pool, zum Garten und zum Grillbereich von Can Patró.",
            "place.eyebrow": "In der Nähe von Can Patró",
            "place.backLink": "← Zurück zu Can Patró",
            "place.cta1": "Verfügbarkeit in Can Patró prüfen",
            "place.cta2": "Zurück zur Karte",
            "place.titleSuffix": " · In der Nähe von Can Patró",
            "place.notFound.title": "Dieser Ort ist nicht verfügbar",
            "place.notFound.body": "Kehren Sie zu Can Patró zurück, um die anderen Orte in der Nähe zu sehen.",
            "place.rafanadal.title": "Rafa Nadal Academy",
            "place.rafanadal.distance": "10 Minuten mit dem Auto von Can Patró entfernt.",
            "place.rafanadal.body1": "Diese vom mallorquinischen Tennisstar Rafael Nadal gegründete Sportakademie vereint Tennis- und Padelplätze, ein Leistungszentrum und einen Ausstellungsbereich zu seiner Karriere.",
            "place.rafanadal.body2": "Ein toller Halt für Sportfans, die ihren Aufenthalt in Can Patró mit dem Besuch einer der bekanntesten Sportstätten der Insel verbinden möchten.",
            "place.cuevas.title": "Drachenhöhlen",
            "place.cuevas.distance": "15 Minuten mit dem Auto von Can Patró entfernt.",
            "place.cuevas.body1": "Eine der meistbesuchten Höhlen Spaniens: Kalksteingalerien, jahrhundertealte Stalaktiten und der Lake Martel, einer der größten unterirdischen Seen Europas.",
            "place.cuevas.body2": "Der Besuch beinhaltet ein kurzes klassisches Musikkonzert auf dem Wasser, dargeboten von beleuchteten Booten. In der Hochsaison empfiehlt sich eine Reservierung.",
            "place.portocristo.title": "Porto Cristo",
            "place.portocristo.distance": "15 Minuten mit dem Auto von Can Patró entfernt.",
            "place.portocristo.body1": "Ein ehemaliges Fischerdorf, das sich zu einem der charmantesten Häfen an der Ostküste Mallorcas entwickelt hat, mit einer ruhigen Strandpromenade und Restaurants am Wasser.",
            "place.portocristo.body2": "Üblicher Ausgangspunkt für den Besuch der Drachenhöhlen und der Höhlen von Hams sowie eigener ruhiger Buchten.",
            "place.playa.title": "Playa Romántica",
            "place.playa.distance": "20 Minuten mit dem Auto von Can Patró entfernt.",
            "place.playa.body1": "Eine kleine, geschützte Bucht mit türkisfarbenem Wasser und feinem Sand, bei Familien beliebt wegen ihrer Ruhe und dem flachen Wasser.",
            "place.playa.body2": "Ein schöner Plan für einen Strandnachmittag nach dem Pool in Can Patró, mit ein paar Strandbars in der Nähe für ein Essen am Meer.",
            "place.mercado.title": "Wochenmarkt Manacor",
            "place.mercado.distance": "8 Minuten mit dem Auto von Can Patró entfernt.",
            "place.mercado.body1": "Jeden Montag verwandelt sich das Zentrum von Manacor in einen der lebendigsten Wochenmärkte Mallorcas: lokale Produkte, Blumen, Kleidung und Kunsthandwerk.",
            "place.mercado.body2": "Ein schöner Start in den Tag wie ein Einheimischer, bevor es zurück in die Ruhe von Can Patró geht."

          }
        };

var STORAGE_LANG = "canpatro-lang";
var STORAGE_COOKIES = "canpatro-cookie-consent";

function applyLanguage(lang) {
  var dict = TRANSLATIONS[lang] || TRANSLATIONS.es;

  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) {
      el.setAttribute("placeholder", dict[key]);
    }
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-aria-label");
    if (dict[key] !== undefined) {
      el.setAttribute("aria-label", dict[key]);
    }
  });

  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    var isActive = btn.getAttribute("data-lang") === lang;
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  var galleryBtn = document.getElementById("gallery-more");
  if (galleryBtn) {
    var expanded = galleryBtn.getAttribute("aria-expanded") === "true";
    galleryBtn.textContent = expanded ? dict["gallery.ctaLess"] : dict["gallery.cta"];
  }

  /* Si la página tiene su propia lógica dependiente del idioma
     (por ejemplo, entorno.html mostrando un lugar según la URL),
     se avisa mediante un evento personalizado. */
  document.dispatchEvent(new CustomEvent("canpatro:language-changed", { detail: { lang: lang, dict: dict } }));

  try {
    window.localStorage.setItem(STORAGE_LANG, lang);
  } catch (e) {
    /* almacenamiento no disponible: se ignora */
  }
}

function initLanguage() {
  var saved = "es";
  try {
    saved = window.localStorage.getItem(STORAGE_LANG) || "es";
  } catch (e) {
    saved = "es";
  }
  if (!TRANSLATIONS[saved]) {
    saved = "es";
  }
  applyLanguage(saved);
}

document.querySelectorAll(".lang-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    applyLanguage(btn.getAttribute("data-lang"));
  });
});

/* =========================================================
   Banner de cookies (RGPD) — presente en todas las páginas
   ========================================================= */
var cookieBanner = document.getElementById("cookie-banner");
var cookieAccept = document.getElementById("cookie-accept");
var cookieConfig = document.getElementById("cookie-config");
var cookieSettings = document.getElementById("cookie-settings");
var cookieSave = document.getElementById("cookie-save");

function hasStoredConsent() {
  try {
    return !!window.localStorage.getItem(STORAGE_COOKIES);
  } catch (e) {
    return false;
  }
}

function storeConsent(value) {
  try {
    window.localStorage.setItem(STORAGE_COOKIES, JSON.stringify(value));
  } catch (e) {
    /* almacenamiento no disponible: se ignora */
  }
}

if (cookieBanner && !hasStoredConsent()) {
  cookieBanner.removeAttribute("hidden");
}

if (cookieAccept) {
  cookieAccept.addEventListener("click", function () {
    storeConsent({ necessary: true, analytics: true, marketing: true, date: new Date().toISOString() });
    cookieBanner.setAttribute("hidden", "");
  });
}

if (cookieConfig && cookieSettings) {
  cookieConfig.addEventListener("click", function () {
    var isHidden = cookieSettings.hasAttribute("hidden");
    if (isHidden) {
      cookieSettings.removeAttribute("hidden");
      cookieConfig.setAttribute("aria-expanded", "true");
    } else {
      cookieSettings.setAttribute("hidden", "");
      cookieConfig.setAttribute("aria-expanded", "false");
    }
  });
}

if (cookieSave) {
  cookieSave.addEventListener("click", function () {
    var analytics = document.getElementById("cookie-analytics");
    var marketing = document.getElementById("cookie-marketing");
    storeConsent({
      necessary: true,
      analytics: analytics ? analytics.checked : false,
      marketing: marketing ? marketing.checked : false,
      date: new Date().toISOString()
    });
    cookieBanner.setAttribute("hidden", "");
  });
}

/* =========================================================
   Año del pie de página
   ========================================================= */
var yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

initLanguage();
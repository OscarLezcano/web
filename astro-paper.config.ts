import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://cdi.mbeju.xyz/",
    title: "Club de Informática - FIUNI",
    description: "Sitio oficial del Club de Informática de la FIUNI. Leé nuestros artículos y conocé más sobre nosotros",
    author: "Adán Alvarez",
    profile: undefined,
    ogImage: "default-og.jpg",
    lang: "es",
    timezone: "America/Asuncion",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/cdi-fiuni/web/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "instagram",   url: "https://www.instagram.com/clubdeinformaticafiuni" },
    { name: "github",   url: "https://github.com/cdi-fiuni" },
    // { name: "x",        url: "https://x.com/username" },
    // { name: "linkedin", url: "https://www.linkedin.com/in/clubdeinformatica/" },
    { name: "mail",     url: "mailto:adan.alvarez@fiuni.edu.py" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
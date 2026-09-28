import type { UIStrings } from "../types";

export default {
  nav: {
    home: "Inicio",
    posts: "Posts",
    events: "Eventos",
    tags: "Tags",
    about: "Nosotros",
    archives: "Archivos",
    search: "Buscar",
  },
  post: {
    publishedAt: "Publicado",
    updatedAt: "Actualizado",
    sharePostIntro: "Comparte este post:",
    sharePostOn: "Comparte este post en {{platform}}",
    sharePostViaEmail: "Comparte este post via email",
    tagLabel: "Tags",
    backToTop: "Volver arriba",
    goBack: "Volver atrás",
    editPage: "Editar esta página",
    previousPost: "Post previo",
    nextPost: "Post siguiente",
  },
  pagination: {
    prev: "Prev",
    next: "Sig",
    page: "Página",
  },
  home: {
    socialLinks: "Redes Sociales",
    featured: "Destacado",
    recentPosts: "Posts Recientes",
    allPosts: "Todos los Posts",
  },
  footer: {
    copyright: "Copyright",
    allRightsReserved: "Todos los derecho reservados.",
  },
  pages: {
    tagTitle: "Tag",
    tagDesc: "Todos los articulos con el tag",

    tagsTitle: "Tags",
    tagsDesc: "Todos los tags utilizados en este blog.",

    postsTitle: "Posts",
    postsDesc: "Todos los posts publicados.",

    eventsTitle: "Eventos",
    eventsDesc: "Todos los eventos organizados por el club.",

    archivesTitle: "Archivos",
    archivesDesc: "Todos los posts archivados.",

    searchTitle: "Buscar",
    searchDesc: "Busca cualquier artículo ...",
  },
  event: {
    dateLabel: "Fecha",
    timeLabel: "Hora",
    locationLabel: "Ubicación",
    presentersLabel: "Ponentes",
    tagLabel: "Etiqueta",
    modeLabel: "Modalidad",
    noUpcoming: "Aún no hay eventos programados.",
    mode: {
      "in-person": "Presencial",
      online: "En línea",
      hybrid: "Híbrido",
    },
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menu",
    toggleTheme: "Cambiar tema",
    searchPlaceholder: "Buscar publicaciones...",
    noResults: "Ningun resultado encontrado",
    goToPreviousPage: "Ir a la página anterior",
    goToNextPage: "Ir a la página siguiete",
  },
  notFound: {
    title: "404 No Encontrado",
    message: "Página no encontrada",
    goHome: "Volver al inicio",
  },
} satisfies UIStrings;

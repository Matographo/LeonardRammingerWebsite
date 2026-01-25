export const SITE = {
  website: "https://leonard-ramminger-blog.de/",
  author: "Leonard Ramminger",
  profile: "https://ramminger.dev/",
  desc: "Gedanken und Konzepte zu Software-Engineering, Psychologie, Metalearning, Effizienz und Flow",
  title: "Leonard Ramminger Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/Matographo/LeonardRammingerWebsite/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "de", // html lang code. Set this empty and default will be "en"
  timezone: "Europe/Berlin", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

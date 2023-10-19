import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.drakeafk.io", // replace this with your deployed domain
  author: "DrakeAFK",
  desc: "DrakeAFK's blog about all things that interest him.",
  title: "DrakeAFK - Blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/drakeafk",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/drakehopkins/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:drake@drakeafk.io",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/drakeafk_",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/drakeafk_",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/drakeafk",
    linkTitle: `${SITE.title} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@drakeafk",
    linkTitle: `${SITE.title} on YouTube`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/drakeafk",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/drakeafk",
    linkTitle: `${SITE.title} on Reddit`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/drakeafk",
    linkTitle: `${SITE.title} on Steam`,
    active: false,
  },
];

import type { SocialObjects } from "@/lib/types";

export const SITE = {
  website: "https://nixthe.systems",
  author: "pwnwriter",
  desc: "",
  title: "Nix The Systems",
  ogImage: "og-image.jpg",
  repo: "https://github.com/pwnwriter/nixthe.systems",
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const menu_items: { title: string; href: string }[] = [
  // {
  //   title: "Home",
  //   href: "/",
  // },
];

// Just works with top-level folders and files. For files, don't add extension as it looks for the slug, and not the file name.
export const side_nav_menu_order: string[] = [
  "getting-started",
  "guides",
  "guides/pages",
  "guides/table-of-contents",
  "guides/sidebar-navigation",
  "custom-components",
  "reference",
];

// Don't delete anything. You can use 'true' or 'false'.
// These are global settings
export const docconfig = {
  hide_table_of_contents: false,
  hide_breadcrumbs: false,
  hide_side_navigations: false,
  hide_datetime: false,
  hide_time: true,
  hide_search: false,
  hide_repo_button: false,
  hide_author: true,
};

// Set your social. It will appear in footer. Don't change the `name` value.
export const Socials: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/pwnwriter/nixthe.systems/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  
  {
    name: "Mail",
    href: "mailto:pwnwriter@nixthe.systems",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://github.com/pwnwriter/",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
 
  {
    name: "Mastodon",
    href: "https://mastodon.social/@pwnwriter",
    linkTitle: `${SITE.title} on Mastodon`,
    active: true,
  },
];

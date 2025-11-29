import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Markdown Live Preview - IngeniousClan",
  description:
    "A powerful markdown editor with live preview. Write, edit, and preview your markdown in real-time with syntax highlighting and a beautiful split-view interface.",
  url: "http://ingeniousclan.com",
  ogImage: "http://ingeniousclan.com/og.jpg",
  links: {
    twitter: "https://twitter.com/miickasmt",
    github: "https://github.com/yokesh-ks",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];
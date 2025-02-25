// @ts-check
import { defineConfig } from 'astro/config';
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "en";
const locales = 
{
    en: "en",
    fr: "fr"
}

export default defineConfig({
    // site: 'https://33-cl.github.io',
    // base: '/portfolio',
    integrations: [
      i18n({
        defaultLocale: defaultLocale,
        locales: locales, 
      }),
      sitemap(),
    ],
  });

// https://astro.build/config

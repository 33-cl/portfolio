// @ts-check
import { defineConfig } from 'astro/config';
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "en";
const locales = 
{
    en: "en-US",
    fr: "fr-FR"
}

export default defineConfig({
    integrations: [
      i18n({
        defaultLocale: defaultLocale,
        locales: locales, 
      }),
      sitemap(),
    ],
  });

// https://astro.build/config


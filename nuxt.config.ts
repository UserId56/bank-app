// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/content"],
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },
  app: {
    head: {
      title: "Bank APP",
    },
  },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  imports: {
    dirs: ["./stores"],
  },
});

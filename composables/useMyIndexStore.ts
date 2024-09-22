// import { defineStore } from "@pinia/nuxt";

export const useMyIndexStore = defineStore({
  id: "myIndexStore",
  state: (): indexStoreType => ({ BestDataList: [] }),
  actions: {
    async getBest() {
      // А надо ли проверять?
      if (process.client) {
        const result = await $fetch("/api/getBestList", {
          method: "POST",
          body: { type: "card" },
        });
        this.BestDataList = await JSON.parse(result);
      }
    },
  },
});

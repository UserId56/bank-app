export const useMyIndexStore = defineStore({
  id: "myIndexStore",
  state: (): indexStoreType => {
    return {
      BestDataList: {},
      tabName: "card",
    };
  },
  actions: {
    async getBest() {
      // А надо ли проверять?
      if (true) {
        const result = await $fetch("/api/getBestList", {
          method: "POST",
          body: { type: "card" },
        });
        this.BestDataList = result
          ? await JSON.parse(result)
          : this.BestDataList;
      }
    },
    test1(item: number) {
      const index = this.BestDataList.findIndex(
        (element) => element.id === item
      );
      if (index !== -1) {
        this.BestDataList[index] = {
          ...this.BestDataList[index],
          ...{
            id: 123123,
          },
        };
      }
    },
    setTab(name: string) {
      this.tabName = name;
    },
  },
});

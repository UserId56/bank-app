export const useMyIndexStore = defineStore({
  id: "myIndexStore",
  state: (): indexStoreType => {
    return {
      BestDataList: [],
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
      // let tempArray = this.BestDataList;
      // this.BestDataList.map((element) => {
      //   console.log(element, "element");
      //   console.log(item, "item");
      //   return item === element.id ? "DELETED" : element;
      // });
      const index = this.BestDataList.findIndex(
        (element) => element.id === item
      );
      if (index !== -1) {
        // Используем Vue.set или простое присваивание, чтобы Pinia отслеживала изменение
        this.BestDataList[index] = {
          ...this.BestDataList[index],
          ...{
            id: 123123,
          },
        };
      }
      // this.BestDataList = [1];
    },
  },
});
// export const useMyIndexStore = useState('MyIndexStore',)

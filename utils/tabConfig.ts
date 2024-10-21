import type Index from "~/pages/index.vue";

export default (path: string): Array<tabConfigType> => {
  const TypesTabsList: Array<tabConfigType> = [
    {
      title: "Кредитные карты",
      type: "card",
      isOpen: false,
    },
    {
      title: "Кредиты",
      type: "credit",
      isOpen: false,
    },
    {
      title: "Займы",
      type: "loan",
      isOpen: false,
    },
    {
      title: "РКО",
      type: "RKO",
      isOpen: false,
    },
    {
      title: "Рейтинг",
      type: "rating",
      isOpen: false,
    },
    {
      title: "Лимит",
      type: "limit",
      isOpen: false,
    },
    {
      title: "Льготный период",
      type: "preferential",
      isOpen: false,
    },
    {
      title: "Процентная ставка",
      type: "percent",
      isOpen: false,
    },
    {
      title: "Сумма",
      type: "sum",
      isOpen: false,
    },
    {
      title: "Ставка",
      type: "rate",
      isOpen: false,
    },
    {
      title: "Срок",
      type: "period",
      isOpen: false,
    },
  ];
  function getTabName(tabType: Array<string>): Array<tabConfigType> {
    let currentTub: Array<tabConfigType> = [];
    let firstElement: boolean = true;
    TypesTabsList.forEach((item) => {
      if (tabType.includes(item.type)) {
        item.isOpen = firstElement ? true : false;
        firstElement = false;
        currentTub.push(item);
      }
    });
    return currentTub;
  }
  switch (path) {
    case "/":
      return getTabName(["card", "credit", "loan", "RKO"]);
    case "/credit-card":
      return getTabName(["rating", "limit", "preferential", "percent"]);
    case "/credit":
      return getTabName(["rating", "sum", "rate", "period"]);
    case "/loan":
      return getTabName(["rating", "sum", "rate", "period"]);
    case "/RKO":
      return getTabName(["rating", "sum", "rate", "period"]);
    default:
      throw new Error("Не верный url или нет данных для url  в tabConfig");
  }
};

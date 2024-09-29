const CardStringsHelpers: CardStringsHelpersTypes = {
  card: {
    getFirtsTitlestring: function (dataFirtsTitle: number): string {
      return `${dataFirtsTitle < 2 ? "" : "до "}${dataFirtsTitle}%`;
    },
    firstSubstring: "На остаток",
    getTwoTitlestring: function (dataTwoTitle: number): string {
      return `${dataTwoTitle < 2 ? "" : "до "}${dataTwoTitle}%`;
    },
    twoSubstring: "Кэшбэк",
  },
  credit: {
    getFirtsTitlestring: function (dataFirtsTitle: number): string {
      return `от ${dataFirtsTitle}%`;
    },
    firstSubstring: "Ставка",
    getTwoTitlestring: function (dataTwoTitle: number): string {
      return `от ${Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
      }).format(dataTwoTitle)}`;
    },
    twoSubstring: "Мин.Сумма",
  },
  loan: {
    getFirtsTitlestring: function (dataFirtsTitle: number): string {
      return `от ${dataFirtsTitle}%`;
    },
    firstSubstring: "Ставка",
    getTwoTitlestring: function (dataTwoTitle: number): string {
      return `до ${Intl.NumberFormat("ru-RU", {
        style: "unit",
        unit: "day",
      }).format(dataTwoTitle)}`;
    },
    twoSubstring: "Срок займа",
  },
  RKO: {
    getFirtsTitlestring: function (dataFirtsTitle: number): string {
      return `${dataFirtsTitle <= 2 ? "" : "от "}${dataFirtsTitle}%`;
    },
    firstSubstring: "Пополнение",
    getTwoTitlestring: function (dataTwoTitle: number): string {
      return `${Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
      }).format(dataTwoTitle)}`;
    },
    twoSubstring: "Обслуживание",
  },
};
export default CardStringsHelpers;

export default (): Array<tabConfigType> => {
  return [
    {
      title: "Кредитные карты",
      type: "card",
      isOpen: true,
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
  ];
};

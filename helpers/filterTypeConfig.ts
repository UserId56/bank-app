export interface TypeFilter {
  title: string;
  imageUrl: string;
  type: string;
  link: string;
}

export function typeFilters(): Array<TypeFilter> {
  return [
    {
      title: "Лучшие банки",
      imageUrl: "/images/bank.svg",
      type: "bank",
      link: "/banks",
    },
    {
      title: "Кредитные карты",
      imageUrl: "/images/credit-card.svg",
      type: "credit-card",
      link: "/credit-card",
    },
    {
      title: "Эквайринг",
      imageUrl: "/images/nfc-card.svg",
      type: "nfc-card",
      link: "/nfc-card",
    },
    {
      title: "Акции",
      imageUrl: "/images/star.svg",
      type: "star",
      link: "/sales",
    },
    {
      title: "Дебетовые карты",
      imageUrl: "/images/cube-of-notes-stack.svg",
      type: "deb-card",
      link: "/card",
    },
    {
      title: "Карты рассрочки",
      imageUrl: "/images/shopping-bag.svg",
      type: "shopping-bag",
      link: "/installment-card",
    },
  ];
}

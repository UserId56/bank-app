const objectConfig = {
  "credit-card": [
    [
      {
        name: "moneyLimit",
        type: "sum",
      },
      {
        name: "gracePeriod",
        type: "period",
      },
      {
        name: "cashback",
        type: "percent",
      },
    ],
    [
      {
        name: "interestRate",
        type: "percent",
      },
      {
        name: "rate",
        type: "sum",
      },
      {
        name: "decision",
        type: "time",
      },
    ],
  ],
};

export default (type: string): any => {
  return objectConfig[type as keyof typeof objectConfig];
};

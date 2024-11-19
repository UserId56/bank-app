const ObjectStrings = {
  small: {
    moneyLimit: "Кред. лимит",
    gracePeriod: "Без процентов",
    cashback: "Кэшбэк",
    interestRate: "Проц. ставка",
    rate: "Стоимость",
    decision: "Решение",
    // Почему то выводит не в том порядке, как задумывалось.
  },
  full: {
    moneyLimit: "Кредитный лимит",
    gracePeriod: "Без процентов",
    cashback: "Кэшбэк",
  },
};

export default (type: string, name: string) => {
  let tempObject = ObjectStrings[type as keyof typeof ObjectStrings];
  return tempObject[name as keyof typeof tempObject];
};

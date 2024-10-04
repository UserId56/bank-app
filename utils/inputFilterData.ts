// interface optionsType {
//   title: string;
//   value: string;
// }

// interface inputData {
//   inputType: string;
//   min?: number;
//   max?: number;
//   title: string;
//   options?: Array<optionsType>;
// }
// interface DataFilterType {
//   sum: inputData;
// }

const dataFilter: DataFilterType = {
  sum: {
    inputType: "num",
    min: 5000,
    max: 10_000_000,
    title: "Лимит",
  },
  purpose: {
    inputType: "purpose",
    title: "Цель",
    options: [
      {
        title: "Автомобиль",
        value: "car",
      },
      {
        title: "Автомобиль 2",
        value: "car2",
      },
      {
        title: "Автомобиль 3",
        value: "car3",
      },
      {
        title: "Автомобиль 4",
        value: "car4",
      },
      {
        title: "Автомобиль 5",
        value: "car5",
      },
    ],
  },
  button: {
    inputType: "button",
    title: "Подобрать",
  },
};

export default (type: string): inputData => {
  return dataFilter[type as keyof DataFilterType];
};

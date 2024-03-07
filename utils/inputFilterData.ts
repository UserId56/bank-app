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
};

export default (type: string): inputData => {
  return dataFilter[type as keyof DataFilterType];
};

declare interface optionsType {
  title: string;
  value: string;
}

declare interface inputData {
  inputType: string;
  min?: number;
  max?: number;
  title: string;
  options?: Array<optionsType>;
}
declare interface DataFilterType {
  sum: inputData;
  purpose: inputData;
}

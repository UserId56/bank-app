export default (typeString: string, valueString: any) => {
  switch (typeString) {
    case "day":
      return `до ${Intl.NumberFormat("ru-RU", {
        style: "unit",
        unit: "day",
      }).format(valueString)}`;
      break;
    case "percent":
      return `${valueString}%`;
      break;
    case "sum":
      return `${Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB",
        minimumFractionDigits: 0,
      }).format(valueString)}`;
      break;
    case "time":
      return `${valueString} мин.`;
      break;

    default:
      return valueString;
      break;
  }
};

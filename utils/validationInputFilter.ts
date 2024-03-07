export default (value: string, min: number, max: number): number | string => {
  let typeValid: number | string = +value.replace(/\s/g, "");
  typeValid = typeValid < min ? min : typeValid;
  typeValid = typeValid > max ? max : typeValid;
  typeValid = isNaN(typeValid) ? +value.replace(/\D+/g, "") : typeValid;
  return typeValid;
};

export const getCurrPrice = (data) => {
  const keys = Object.keys(data).sort();
  return parseFloat(data[keys[keys.length - 1]].closing_price).toFixed(2);
};

export const getPriceChange = (data) => {
  const keys = Object.keys(data).sort();
  return parseFloat(
    data[keys[keys.length - 1]].closing_price - data[keys[0]].closing_price
  ).toFixed(2);
};

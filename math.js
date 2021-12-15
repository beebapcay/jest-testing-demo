exports.sum = (a, b) => a + b;

exports.createObject = (...data) => {
  const obj = {};
  data.forEach((item) => (obj[item] = item));
  return obj;
};

exports.createArray = (...data) => {
  return Array.from(data);
};

exports.concatString = (...data) => {
  return data.join(' ');
};

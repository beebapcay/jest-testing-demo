exports.fetchDataCB = (callback) => {
  setTimeout(() => {
    callback('hello world');
  }, 1000);
};

exports.fetchDataPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world');
    }, 1000);
  });
};

exports.fetchDataAwait = async () => {
  await Promise((resolve, reject) => {
    setTimeout(() => {
      return 'hello world';
    }, 1000);
  });
};

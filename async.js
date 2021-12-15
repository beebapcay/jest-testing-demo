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
  const data = await this.fetchDataPromise();
  return data;
};

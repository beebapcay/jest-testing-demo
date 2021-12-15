// const asyncF = require('../async');

// test('the data is hello word callback', (done) => {
//   const callback = (data) => {
//     try {
//       expect(data).toBe('hello world');
//       done();
//     } catch (e) {
//       done(e);
//     }
//   };

//   asyncF.fetchDataCB(callback);
// });

// test('the data is hello word promise', () => {
//   return fetchDataPromise().then((data) => {
//     expect(data).toBe('hello world');
//   });
// });

// test('the data is hello word await', async () => {
//   const data = await asyncF.fetchDataAwait();
//   expect(data).toBe('peanut butter');
// });

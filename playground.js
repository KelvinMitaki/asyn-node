// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       longitude: 0,
//       latitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };
// geocode("Nairobi", (data) => {
//   console.log(data);
// });
//

const add = (n1, n2, callback) => {
  setTimeout(() => {
    const sum = n1 + n2;
    callback(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});

// recap_(math_forEach_filter_find)
const phList = [
  { id: 1, name: "iphone", color: "white", price: 1200, brand: "apple" },
  { id: 2, name: "ximoi", color: "black", price: 1500, brand: "readmi" },
  { id: 3, name: "vivo", color: "sliver", price: 2000, brand: "vivo" },
  { id: 4, name: "iphone15", color: "black", price: 1500, brand: "apple" },
  { id: 5, name: "samsung", color: "green", price: 1000, brand: "samsung" },
  { id: 6, name: "nokia", color: "black", price: 2200, brand: "nokia" },
];
// filter:
// const filterNew = phList.filter((fl) => fl.brand === "apple");
// console.log(filterNew);

// // 👉find:
// const ph1 = phList.find((f) => f.id === 3);
// const ph1 = phList.find((f) => {
//   if (f.name === "iphone") {
//     console.log(f);
//   }
// });
// console.log(ph1);

// // 👉forEach:
// phList.forEach((fE) => console.log(fE));
// phList.forEach((fE) => {
//   if (fE.color === "black") {
//     console.log(fE);
//   }
// });

// // 👉map:
// const newPhoneList = phList.map((ph) => {
//   if (ph.color === "black") {
//     ph.price = ph.price + 200;
//   }
//   return ph;
// });
// console.log(newPhoneList);

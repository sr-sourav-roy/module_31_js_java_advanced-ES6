// Array Methods _filter_forEach_find
const phoneList = [
  { id: 1, name: "iphone", color: "white", price: 1200, brand: "apple" },
  { id: 2, name: "ximoi", color: "black", price: 1500, brand: "readmi" },
  { id: 3, name: "vivo", color: "sliver", price: 2000, brand: "vivo" },
  { id: 4, name: "iphone15", color: "black", price: 1500, brand: "apple" },
  { id: 5, name: "samsung", color: "green", price: 1000, brand: "samsung" },
  { id: 6, name: "nokia", color: "black", price: 2200, brand: "nokia" },
];

// filter--> return by array:
const sourav = phoneList.filter((fl) => {
  const color = fl.color === "black";
  const brand = fl.brand === "apple";
  return brand;
  return color;
});
// console.log(sourav);  // output je konw kichu ke array output

// forEach--> no return by array;
phoneList.forEach((fr) => {
  if (fr.color === "black") {
    // console.log(fr); // output dibe akta object
  }
});

// find --> output full-object:
const findOut = phoneList.find((fd) => fd.id !== 4);
// console.log(findOut);

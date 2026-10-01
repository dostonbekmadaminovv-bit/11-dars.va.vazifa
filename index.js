// import { products } from "./data.js";
// console.log(products);
//=======================

// function addProduct(newProduct, products) {
//   newProduct.id =
//     products.length == 0 ? (products.id = 1) : products.at(-1).id + 1;
//   let newProd = [...products, newProduct];
//   return newProd;
// }
// // console.log(addProduct);

// const newProduct = {
//   title: "iPhone 17",
//   price: 1300,
//   category: "smartphone",
//   brand: "Apple",
//   stock: 10,
//   rating: 5,
//   isAvailable: true,
//   tags: ["phone", "premium"],
// };

// const result = addProduct(newProduct, products);

// console.log(result);
//============================================
// function getProduct(productId, products) {
//   getProduct = products.find((prod) => prod.id == productId);
//   if (getProduct) {
//     return getProduct;
//   }
//   return null;
// }
// const result = getProduct(3, products);
// console.log(result);

//=========================
// narxi boyicha pastga qarab
// function filterArr(arr, price) {
//   let newProducts = arr.filter((prod) => prod.price >= price);
//   let sortedProd = newProducts.sort((a, b) => b.price - a.price);
//   return sortedProd;
// }
// console.log(filterArr(products, 500));

//===============================================
// let nums = [1, 2, 25, 44, 85, 21, 33, 12];
// let newNums = nums.map((num) => {
//   if (num % 2 == 0) {
//     return num ** 2;
//   } else {
//     return num;
//   }
// });

// console.log(newNums);

// let newNum = nums.map((num) => (num % 2 == 0 ? num ** 2 : num));
// console.log(newNum);
//==============================
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// vazifa \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////////////////////////////////////////////////////////
let books = [
  {
    id: 1,
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    price: 30000,
    isRead: true,
  },
  {
    id: 2,
    title: "Mehrobdan chayon",
    author: "Abdulla Qodiriy",
    price: 28000,
    isRead: false,
  },
  {
    id: 3,
    title: "Sariq devni minib",
    author: "Xudoyberdi To'xtaboyev",
    price: 25000,
    isRead: false,
  },
];
////=================
// 1. Create (Yaratish / Qo'shish)
// ● Foydalanuvchi yangi kitob ma'lumotlarini (nomi, muallifi, narxi) kiritib, ro'yxatga yangi
// kitob qo'sha olishi kerak.
// ● Kitob qo'shilayotganda unga avtomatik tarzda unikal id berilishi kerak.
// function addBook(title, author, price) {
//   const newBook = {
//     id: books.length ? books[books.length - 1].id + 1 : 1,
//     title: title,
//     author: author,
//     price: price,
//     isRead: true,
//   };

//   books.push(newBook);
// }

// addBook("Sen bir men o'zga olam", "Feya Moran", 80000);

// console.log(books);
//=====================================================
// 2. Read (O'qish / Ko'rish)
// ● Mavjud barcha kitoblar ro'yxati ekranga (yoki konsolga) chiqarilishi kerak.
// ● Har bir kitobning nomi, muallifi, narxi va holati (o'qilgan/o'qilmagan) ko mezonlar bo'yicha
// ko'rinishi lozim
// function showBooks() {
//   books.forEach((book) => {
//     console.log(
//       `Nomi: ${book.title}, Muallif: ${book.author}, Narxi: ${book.price} so'm, Holati: ${
//         book.isRead ? "o'qilgan" : "o'qilmagan"
//       }`,
//     );
//   });
// }

// showBooks();
//======================================================
// 3. Update (Yangilash / Tahrirlash)
// ● Tanlangan kitobning narxini yoki nomini o'zgartirish imkoniyati bo'lishi kerak.
// ● Kitobning isRead (o'qilgan) holatini o'zgartirish (masalan: false bo'lsa true ga
// o'tkazish) tugmasi bo'lishi kerak
// function yangilash(id, yangiNomi, yangiNarxi) {
//   let book = books.find((book) => book.id === id);
//   if (book) {
//     book.title = yangiNomi;
//     book.price = yangiNarxi;
//   } else {
//     console.log("Bunday ID li kitob topilmadi.");
//   }
// }
// function holatiniOzgartirish(id) {
//   let book = books.find((book) => book.id === id);
//   if (book) {
//     book.isRead = book.isRead;
//   } else {
//     console.log("Bunday ID li kitob topilmadi.");
//   }
// }
// yangilash(1, "Oq kema", 100000);
// holatiniOzgartirish(1);
// console.log(books);
//============================================
// 4. Delete (O'chirish)
// ● Kitobning idsi bo'yicha uni ro'yxatdan o'chirib tashlash imkoniyati bo'lishi kerak.
function ochirish(id) {
  books = books.filter((book) => book.id !== id);
}

ochirish(2);
console.log(books);

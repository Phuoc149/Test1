//1.
// let str = "helllo";
// function reverseString(str_input) {
//   let reversedString = "";
//   for (let i = str_input.length - 1; i >= 0; i--) {
//     reversedString += str_input[i];
//   }
//   return reversedString;
// }
// console.log(reverseString(str));

// //2
// let str = " this is a test";
// function test(str) {
//   let splitStr = str.toLowerCase().split(" ");
//   for (let i = 0; i < splitStr.length; i++) {
//     splitStr[i] =
//       splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }
//   // Directly return the joined string
//   return splitStr.join(" ");
// }
// console.log(test(str));
//3.
// let arr = [1, 1, 2, 3, 4, 4, 3];
// function test(arr) {
//   let newArr = [];
//   newArr = arr.filter(function (item) {
//     return newArr.includes(item) ? "" : newArr.push(item);
//   });
//   return newArr;
// }
// console.log(arr);
// console.log(test(arr));

//4
// while (true) {
//   let input = prompt(
//     "Nhap vao r = read/ c = create / u = update / d = delete / e = exit "
//   );

//   let person = [
//     {
//       id: 1,
//       name: "thien",
//       age: 20,
//       salary: 100,
//       position: "Nhan vien",
//     },
//     {
//       id: 2,
//       name: "Huy",
//       age: 20,
//       salary: 1500,
//       position: "Truong phong",
//     },
//     {
//       id: 3,
//       name: "Hoang",
//       age: 20,
//       salary: 2000,
//       position: "Giam doc",
//     },
//   ];
//   if (input == "c") {
//     let ten = prompt("nhap vao ten");
//     let tuoi = Number(prompt("nhap vao tuoi"));
//     let mucluong = Number(prompt("nhap vao muc luong"));
//     let chucvu = prompt("nhap vao chuc vu");
//     var element = {};
//     element.id = person.length + 1;
//     element.name = ten;
//     element.age = tuoi;
//     element.salary = mucluong;
//     element.position = chucvu;
//     person.push(element);
//     console.table(person);
//   }
//   if (input == "r") {
//     for (const key in person) {
//       console.table(person[key]);
//     }
//   }
//   if (input == "u") {
//     let idInput = Number(prompt("nhap vao id muon UPDATE"));
//     for (const key in person) {
//       if (idInput == person[key].id) {
//         let nameUpdate = prompt("nhap vao ten UPDATE");
//         person[key].name = nameUpdate;
//         let ageUpdate = Number(prompt("nhap vao tuoi"));
//         person[key].age = ageUpdate;
//         let salaryUpdate = Number(prompt(" nhap vao muc luong "));
//         person[key].salary = salaryUpdate;
//         let posttionUpdate = prompt("nhap vao chuc vu");
//         person[key].position = posttionUpdate;
//       }
//     }
//     console.table(person);
//   }
//   if (input == "d") {
//     let idInput = Number(prompt("nhap vao id muon XOA"));
//     for (const key in person) {
//       if (idInput == person[key].id) {
//         delete person[key];
//       }
//     }
//     console.table(person);
//   }
//   if (input == "e") {
//     break;
//   }
// }

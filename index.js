// const friends = [{
//         'sno': 1,
//         'name': "Nitin Kumar",
//         'age': 22,
//         'isbestfriend': true,


//         Favourite_color: ['red', 'yellow', 'blue'],
//         yellowFavourite: function(color) {
//             color = "yellow";

//             for (let i = 0; i < this.Favourite_color.length; i++) {
//                 if (color == this.Favourite_color[i]) {

//                     return "Yellow is my favourite color";
//                 }
//             }
//             return "Yello is not my favourite color";
//         }

//     },
//     {
//         'sno': 2,
//         'name': "Anand Singh",
//         'age': 23,
//         'isbestfriend': true,
//         Favourite_color: ['red', 'yellow', 'blue'],
//         yellowFavourite: function(color) {
//             color = "yellow";

//             for (let i = 0; i < this.Favourite_color.length; i++) {
//                 if (color == this.Favourite_color[i]) {

//                     return "Yellow is my favourite color";
//                 }
//             }
//             return "Yello is not my favourite color";
//         }

//     },
//     {
//         'sno': 3,
//         'name': "Aryan khan",
//         'age': 25,
//         'isbestfriend': true,
//         Favourite_color: ['red', 'yellow', 'blue'],
//         yellowFavourite: function(color) {
//             color = "yellow";

//             for (let i = 0; i < this.Favourite_color.length; i++) {
//                 if (color == this.Favourite_color[i]) {

//                     return "Yellow is my favourite color";
//                 }
//             }
//             return "Yello is not my favourite color";
//         }

//     },
//     {
//         'sno': 4,
//         'name': "Shivam Mishra",
//         'age': 23,
//         'isbestfriend': false,
//         Favourite_color: ['red', 'yellow', 'blue'],
//         yellowFavourite: function(color) {
//             color = "yellow";

//             for (let i = 0; i < this.Favourite_color.length; i++) {
//                 if (color == this.Favourite_color[i]) {

//                     return "Yellow is my favourite color";
//                 }
//             }
//             return "Yello is not my favourite color";
//         }

//     },
//     {
//         'sno': 5,
//         'name': "Amitabh Nigam",
//         'age': 25,
//         'isbestfriend': true,
//         Favourite_color: ['red', 'yellow', 'blue'],
//         yellowFavourite: function(color) {
//             color = "yellow";

//             for (let i = 0; i < this.Favourite_color.length; i++) {
//                 if (color == this.Favourite_color[i]) {

//                     return "Yellow is my favourite color";
//                 }
//             }
//             return "Yello is not my favourite color";
//         }

//     }
// ];

// let htmltext = "<th>S.no</th><th>Name</th><th>Age</th><th>BestFriend</th><th>Favourite Color1</th><th>Favourite Color1</th><th>Favourite Color3</th><th>Yellow Favourite</th>";
// let htmltd = "";
// for (let i = 0; i < friends.length; i++) {
//     for (let c = 0; c < friends[i].Favourite_color.length; c++) {
//         htmltd += "<td>" + (friends[i].Favourite_color[c]) + "</td>";
//     }
//     htmltext += "<tr>\
//       <td>" + (i + 1) + "</td>\
//      <td>" + arr[i].name + "</td>\
//      <td>" + arr[i].age + "</td>\
//      <td>" + arr[i].isBestFriend + "</td>\
//       " + htmltd + "\
//      <td>" + arr[i].yellowFavourite() + "</td>\
//      </tr>";
//     document.getElementById("table").innerHTML = htmltext;
//     htmltd = "";

// }

// // document.write("<div>");
// // document.write("<th>S.no</th><th>Name</th><th>Age</th><th>BestFriend</th><th>Favourite Color1</th><th>Favourite Color1</th><th>Favourite Color3</th><th>Yellow Favourite</th>");
// // for (let i = 0; i < friends.length; i++) {
// //     for (let c = 0; c < friends[i].Favourite_color.length; c++) {
// //         htmltd += "<td>" + (friends[i].Favourite_color[c]) + "</td>";
// //     }
// //     htmltext += "<tr>\
// //       <td>" + (i + 1) + "</td>\
// //      <td>" + friends[i].name + "</td>\
// //      <td>" + friends[i].age + "</td>\
// //      <td>" + friends[i].isBestFriend + "</td>\
// //       " + htmltd + "\
// //      <td>" + friends[i].yellowFavourite() + "</td>\
// //      </tr>";
// // console.log(arr[i].name);
// // console.log(arr[i].age)
// // console.log(arr[i].isBestFried);
// // console.log(arr[i].yellowFavourite());



// // document.write("</div>");




// // let table = document.getElementById("center");
// // window.onload(myfun());

// //  function myfun() {
// //     for (let i = 0; i < friends.length; i++) {
// //         let row = document.createElement("tr");
// //         let name = document.createElement("td");
// //         let sno = document.createElement("td");
// //         let age = document.createElement("td");
// //         let favouritecolors1 = document.createElement("td");
// //         let favouritecolors2 = document.createElement("td");
// //         let favouritecolors3 = document.createElement("td");
// //         let yellowfavourite = document.createElement("td");
// //         let bf = document.createElement("td");
// //         sno.innerText = friends[i].sno;
// //         name.innerText = friends[i].name;
// //         age.innerText = friends[i].age;
// //         bf.innerText = friends[i].isbestfriend;
// //         favouritecolors1.innerText = friends[i].favouritecolors1;
// //         favouritecolors2.innerText = friends[i].favouritecolors2;
// //         favouritecolors3.innerText = friends[i].favouritecolors3;
// //         yellowfavourite.innerText = friends[i].yellowFavOrNot();
// //         table.appendChild(row);
// //         row.appendChild(sno);
// //         row.appendChild(name);
// //         row.appendChild(age);
// //         row.appendChild(bf);
// //         row.appendChild(favouritecolors1);
// //         row.appendChild(favouritecolors2);
// //         row.appendChild(favouritecolors3);
// //         row.appendChild(yellowfavourite);
// //     }
// // }

let arr = [{
        name: "Ram",
        age: 22,
        isBestFriend: true,
        Favourite_color: ['red', 'yellow', 'blue'],
        yellowFavourite: function(color) {
            color = "yellow";

            for (let i = 0; i < this.Favourite_color.length; i++) {
                if (color == this.Favourite_color[i]) {

                    return "Yellow is my favourite color";
                }
            }
            return "Yello is not my favourite color";
        }

    },
    {
        name: "Shyam",
        age: 25,
        isBestFriend: "No",
        Favourite_color: ['red', 'blue', 'black'],
        yellowFavourite: function(color) {
            color = "yellow";

            for (let i = 0; i < this.Favourite_color.length; i++) {
                if (color == this.Favourite_color[i]) {

                    return "Yellow is my favourite color";
                }
            }
            return "Yello is not my favourite color";
        }

    },
    {
        name: "Mohan",
        age: 24,
        isBestFriend: "No",
        Favourite_color: ['red', 'yellow', 'pink'],
        yellowFavourite: function(color) {
            color = "yellow";

            for (let i = 0; i < this.Favourite_color.length; i++) {
                if (color == this.Favourite_color[i]) {

                    return "Yellow is my favourite color";
                }
            }
            return "Yello is not my favourite color";
        }

    },
    {
        name: "Sonu",
        age: 26,
        isBestFriend: true,
        Favourite_color: ['red', 'yellow', 'black'],
        yellowFavourite: function(color) {
            color = "yellow";

            for (let i = 0; i < this.Favourite_color.length; i++) {
                if (color == this.Favourite_color[i]) {

                    return "Yellow is my favourite color";
                }
            }
            return "Yello is not my favourite color";
        }

    },
    {
        name: "Mohan",
        age: 28,
        isBestFriend: true,
        Favourite_color: ['red', 'blue', ''],
        yellowFavourite: function(color) {
            color = "yellow";

            for (let i = 0; i < this.Favourite_color.length; i++) {
                if (color == this.Favourite_color[i]) {

                    return "Yellow is my favourite color";
                }
            }
            return "Yello is not my favourite color";
        }

    }


];


let htmltext = "<th>S.no</th><th>Name</th><th>Age</th><th>BestFriend</th><th>Favourite Color1</th><th>Favourite Color1</th><th>Favourite Color3</th><th>Yellow Favourite</th>";

let htmltd = "";
for (let i = 0; i < arr.length; i++) {
    for (let c = 0; c < arr[i].Favourite_color.length; c++) {
        htmltd += "<td>" + (arr[i].Favourite_color[c]) + "</td>";
    }
    htmltext += "<tr>\
  <td>" + (i + 1) + "</td>\
 <td>" + arr[i].name + "</td>\
 <td>" + arr[i].age + "</td>\
 <td>" + arr[i].isBestFriend + "</td>\
  " + htmltd + "\
 <td>" + arr[i].yellowFavourite() + "</td>\
 </tr>";
    // console.log(arr[i].name);
    // console.log(arr[i].age)
    // console.log(arr[i].isBestFried);
    // console.log(arr[i].yellowFavourite());

    document.getElementById("table").innerHTML = htmltext;
    htmltd = "";

}
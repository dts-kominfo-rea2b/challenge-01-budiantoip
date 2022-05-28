// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {
  name: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  isHavePet: "Yes",
  education: [
    {
      name: "SD 01",
      city: "Jakarta",
      graduate: 2016,
    },
    {
      name: "SMP 02",
      city: "Jakarta",
      graduate: 2019,
    },
    {
      name: "SMA 03",
      city: "Tangerang",
    },
  ]
};

// Manually process distinct data
let colors = ["Yellow", "Pink", "White", "Purple"];
firstUser.favoriteColor = [];
for (let color of colors) {
  if (!firstUser.favoriteColor.includes(color)) {
    firstUser.favoriteColor.push(color);
  }
}

let restaurants = [
  "Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi",
];
firstUser.favoriteRestaurant = [];
for (let restaurant of restaurants) {
  if (!firstUser.favoriteRestaurant.includes(restaurant)) {
    firstUser.favoriteRestaurant.push(restaurant);
  }
}

const secondUser = {
  name: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  isHavePet: "No",
  education: [
    {
      name: "SD 02",
      city: "Jakarta",
      graduate: 2010,
    },
    {
      name: "SMP 03",
      city: "Bogor",
      graduate: 2013,
    },
    {
      name: "SMA 01",
      city: "Surabaya",
      graduate: 2016,
    },
    {
      name: "Universitas Maju",
      city: "Tangerang",
    },
  ]
};

// Manually process distinct data
colors = ["Blue", "Black", "Grey"];
secondUser.favoriteColor = [];
for (let color of colors) {
  if (!secondUser.favoriteColor.includes(color)) {
    secondUser.favoriteColor.push(color);
  }
}

restaurants = [
  "Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy",
];
secondUser.favoriteRestaurant = [];
for (let restaurant of restaurants) {
  if (!secondUser.favoriteRestaurant.includes(restaurant)) {
    secondUser.favoriteRestaurant.push(restaurant);
  }
}

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [ firstUser, secondUser ];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};
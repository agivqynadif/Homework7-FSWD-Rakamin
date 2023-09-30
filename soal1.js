const rumus = require("./module/rumus");

// Hitung persegi
console.log("-------Persegi-------");
const sisiPersegi = 5;
const luasPersegi = rumus.luas_persegi(sisiPersegi);
const kelilingPersegi = rumus.keliling_persegi(sisiPersegi);

console.log(`Luas persegi: ${luasPersegi} \nKeliling persegi: ${kelilingPersegi}`);

// Hitung persegi panjang
console.log("\n-----Persegi Panjang-----");
const luasPersegiPanjang = rumus.luas_persegiPanjang(4, 6);
const kelilingPersegiPanjang = rumus.keliling_persegiPanjang(4, 6);

console.log(`Luas persegi panjang: ${luasPersegiPanjang} \nKeliling persegi panjang: ${kelilingPersegiPanjang}`);

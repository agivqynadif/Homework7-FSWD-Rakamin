// Rumus mencari luas persegi
exports.luas_persegi = function (sisi) {
  return sisi * sisi;
};

// Rumus mencari keliling persegi
exports.keliling_persegi = function (sisi) {
  return 4 * sisi;
};

// Rumus mencari luas persegi panjang
exports.luas_persegiPanjang = function (panjang, lebar) {
  return panjang * lebar;
};

// Rumus mencari keliling persegi panjang
exports.keliling_persegiPanjang = function (panjang, lebar) {
  return 2 * (panjang + lebar);
};

function simpan() {

  let nama = document.getElementById("nama").value;
  let stok = document.getElementById("stok").value;

  let data = JSON.parse(localStorage.getItem("stokBarang")) || {};

  data[nama] = parseInt(stok);

  localStorage.setItem("stokBarang", JSON.stringify(data));

  alert("Stok berhasil disimpan!");
}
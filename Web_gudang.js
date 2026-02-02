document.querySelector(".button").addEventListener("click", function(){

  let nama = document.getElementById("username").value;

  let data = JSON.parse(localStorage.getItem("stokBarang")) || {};

  if(data[nama] !== undefined){
    document.getElementById("hasil").innerText =
      data[nama];
  } else {
    document.getElementById("hasil").innerText =
      "Barang tidak ditemukan";
  }

});
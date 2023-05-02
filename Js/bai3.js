//  bai 3
let doiTien = document.getElementById("ketQua3");
doiTien.onclick = function doiTien() {
  var tyLe = 23500;
  var tienUSD = document.getElementById("soUSD").value * 1;
  var result3 = tienUSD * tyLe;
  console.log(result3);
  document.getElementById("result3").innerHTML = result3 + " VND";
};

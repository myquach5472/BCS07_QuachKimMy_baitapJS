// bai 4
let hinhChuNhat = document.getElementById("ketQua4");
hinhChuNhat.onclick = function hinhChuNhat() {
  var canhMot = document.getElementById("canhMot").value * 1;
  var canhHai = document.getElementById("canhHai").value * 1;
  var chuVi = (canhMot + canhHai) * 2;
  var dienTich = canhMot * canhHai;
  console.log(chuVi);
  console.log(dienTich);

  document.getElementById("result4").innerHTML = "Chu Vi = " + chuVi + " cm";
  document.getElementById("result4.1").innerHTML =
    "Dien Tich = " + dienTich + " cm²";
};

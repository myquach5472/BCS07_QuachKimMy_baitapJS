// bai 1
function luongNhanVien() {
  var luong1Ngay = document.getElementById("luong1Ngay").value * 1;
  var soNgay = document.getElementById("soNgay").value * 1;
  var result1 = luong1Ngay * soNgay;
  console.log(result1);
  document.getElementById("result1").innerHTML =
    "Số lương phải trả là " + result1 + " VND";
}
document.getElementById("ketQua1").addEventListener("click", luongNhanVien);

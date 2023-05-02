// bai 2
let trungBinh = document.getElementById("ketQua2");
trungBinh.onclick = function () {
  var soMot = document.getElementById("soMot").value * 1;
  var soHai = document.getElementById("soHai").value * 1;
  var soBa = document.getElementById("soBa").value * 1;
  var soBon = document.getElementById("soBon").value * 1;
  var soNam = document.getElementById("soNam").value * 1;
  var sum = soMot + soHai + soBa + soBon + soNam;
  var result2 = sum / 5;
  console.log(result2);
  document.getElementById("result2").innerHTML = "Kết quả là " + result2;
};

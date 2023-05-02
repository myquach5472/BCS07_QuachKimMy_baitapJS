// bai 5
let kyso = document.getElementById("ketQua5");
kyso.onclick = function () {
  var number = document.getElementById("deBai").value * 1;
  var digit1 = Math.floor(number / 10);
  var digit2 = number % 10;
  var tong = digit1 + digit2;
  console.log(tong);
  document.getElementById("result5").innerHTML = "Tổng 2 ký số là: " + tong;
};

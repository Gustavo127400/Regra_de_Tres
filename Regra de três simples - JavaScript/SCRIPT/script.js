document.getElementById("calculate").addEventListener("click", function () {
  var n1 = parseFloat(document.getElementById("a").value);
  var n2 = parseFloat(document.getElementById("b").value);
  var n3 = parseFloat(document.getElementById("c").value);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || n1 === 0) {
    document.getElementById("result").textContent = "Inválido";
    return;
  }
  let result = (n1 * n2) / n3;

  if (Number.isInteger("result")) {
    document.getElementById("result").textContent = result;
  } else {
    document.getElementById("result").textContent = result.toFixed(2);
  }
});

function op(operation) {
  document.getElementById("resultArea").innerHTML += operation;
}
function calc() {
  let con = document.getElementById("resultArea");
  let result = eval(con.innerHTML);
  con.innerHTML = result;
}
function clearResult() {
  document.getElementById("resultArea").innerHTML = "";
}
function deleteInt() {
  let resultArea = document.getElementById("resultArea");
  resultArea.innerHTML = resultArea.innerHTML.slice(0, -1);
}

function getNum(num) {
    document.getElementById("result").value += num;
}
function clearResult() {
    document.getElementById("result").value = " ";
}
function removeNum() {
    var res = document.getElementById("result").value;
    document.getElementById("result").value = document.getElementById("result").value.slice(0,res.length - 1);
}
function getResult() {
    document.getElementById("result").value = eval(document.getElementById("result").value);
}
function getCos() {
    document.getElementById("result").value = Math.cos(document.getElementById("result").value);
}
function getSin() {
    document.getElementById("result").value = Math.sin(document.getElementById("result").value);
}
function getTan() {
    document.getElementById("result").value = Math.tan(document.getElementById("result").value);
}
function getLog() {
    document.getElementById("result").value = Math.log(document.getElementById("result").value);
}
function getSqrt() {
    document.getElementById("result").value = Math.sqrt(document.getElementById("result").value);
}
function getCbrt() {
    document.getElementById("result").value = Math.cbrt(document.getElementById("result").value);
}
function getLog10() {
    document.getElementById("result").value = Math.log10(document.getElementById("result").value);
}
function getSquare() {
    document.getElementById("result").value = eval((document.getElementById("result").value)*(document.getElementById("result").value));
}
function getE() {
    document.getElementById("result").value = eval(Math.E*document.getElementById("result").value);
}
function getPer() {
    document.getElementById("result").value = eval((document.getElementById("result").value/100));
}
function getPi() {
    document.getElementById("result").value = eval(Math.PI*document.getElementById("result").value);
}
function getCube() {
    document.getElementById("result").value = eval(((document.getElementById("result").value)*(document.getElementById("result").value))*(document.getElementById("result").value));
}


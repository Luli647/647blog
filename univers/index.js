const str = document.getElementById('typed-strings').innerText
console.log(str)
let i = 0, cal;
function strChange() {
    if (i < str.length) {
        cal = str.slice(0, i++) + '|';
        document.getElementById('typed-strings').innerText = cal;
        setTimeout(strChange, 100);
    } else {
        document.getElementById('typed-strings').innerHTML = str;
    }
}
strChange();
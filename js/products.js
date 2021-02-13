

let opt = document.getElementsByClassName('select')

let products = document.querySelectorAll('.Product__item')

let selectIndex = document.getElementById('select').options.selectedIndex
let selectValue = document.getElementById('select').options[selectIndex].value 
for(products[i=0]; i<products.length; i++ ){
    if(i<selectValue) {
    products[i].removeAttribute('style')}
    else { products[i].style = "display:none"}
}


document.getElementById('select').onchange = function abc() {
    selectIndex = document.getElementById('select').options.selectedIndex
    selectValue = document.getElementById('select').options[selectIndex].value 
    for(products[i=0]; i<products.length; i++ ){
    if(i<selectValue) {
    products[i].removeAttribute('style')}
    else { products[i].style = "display:none"}
}}
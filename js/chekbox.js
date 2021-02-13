const chck = document.querySelectorAll('.Brands__input')

document.querySelector('#Clean').addEventListener('click', () => {


for (i = 0; i < chck.length; i++) {
    if (chck[i].checked) {
        chck[i].checked = false
    }
}

})


let keys = document.querySelectorAll('.keys');
let input = document.querySelector('input');
let clear = document.querySelector('.clear')
let deleteNum = document.querySelector('.delete')

keys.forEach(key => {
    key.addEventListener('click', function (e) {
        if (e.target.innerHTML == '=') {
            input.value = eval(input.value)
        }
        else {
            input.value = input.value + e.target.innerHTML;
        }
    });
});

clear.addEventListener('click', function () {
    input.value = '';
});

deleteNum.addEventListener('click', function () {
    if (input.value != '') {
        input.value = (input.value).substring(0, (input.value).length - 1);
    }
});


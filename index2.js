const input_a = document.getElementById('myInput_a');
const button_a = document.getElementById('myButton_a');
const output_a = document.getElementById('myOutput_a');
button_a.addEventListener('click', () => {
    if (Number(input_a.value) > -1000 && Number(input_a.value) < 1000) {
        output_a.textContent = "Значение Принято"
    }
    else {
        output_a.textContent = "Вы ввели некоректное значение, введите заново"
    }
});



const input_c = document.getElementById('myInput_c');
const button_c = document.getElementById('myButton_c');
const output_c = document.getElementById('myOutput_c');
button_c.addEventListener('click', () => {
    if (Number(input_c.value) > -1000 && Number(input_c.value) < 1000) {
        output_c.textContent = "Значение Принято"
    }
    else {
        output_c.textContent = "Вы ввели некоректное значение, введите заново"
    }
});

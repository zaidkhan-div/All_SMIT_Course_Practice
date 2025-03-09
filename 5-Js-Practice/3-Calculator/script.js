let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let buttonarray = Array.from(buttons);


let string = '';
buttonarray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerText == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        }
        else if (e.target.innerHTML == '=') {

            try {
                display.value = string;
                string = eval(string);
            }
            catch (error) {
                display.value = "Error";
            }

        }
        else {
            string += e.target.innerHTML;
            display.value = string;
        }
    })
});
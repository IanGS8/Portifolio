const cardCalculadora = document.getElementById('cardCalculadora');
const modalCalculadora = document.getElementById('modalCalculadora');
const fecharModal = document.getElementById('fecharModal');
const display = document.getElementById('display');

cardCalculadora.addEventListener('click', () => {
    modalCalculadora.style.display = 'block';
});

fecharModal.addEventListener('click', () => {
    modalCalculadora.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modalCalculadora) {
        modalCalculadora.style.display = 'none';
    }
});

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key >= '0' && key <= '9') appendValue(key); 
    else if (['+', '-', '*', '/', '%', '.'].includes(key)) appendValue(key); 
    else if (key === 'Enter') calculate(); 
    else if (key === 'Backspace') deleteLast(); 
    else if (key === 'Escape') clearDisplay(); 
});
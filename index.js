const h2Color = document.querySelectorAll('h2');
for (h2 of h2Color) {
    h2.style.color = 'lightblue';
}
const backpack = document.getElementById('backpacks');
backpack.style.backgroundColor = 'yellow';

const cards = document.getElementsByClassName('card');
for (card of cards) {
    card.style.borderRadius = '30px'
}

function buyNow() {
    console.log('Hello')


}

const buyNowButton = document.querySelectorAll('a');
for (button of buyNowButton) {
    button.addEventListener('click', function () {
        const cards = document.getElementsByClassName('card');
        for (card of cards) {
            card.style.display = 'none'
        }
    })
}

document.getElementById('input-field').addEventListener('keyup', function (event) {
    text = event.target.value;
    const submited = document.getElementById('delete-btn');
    if (text === 'delete') {
        submited.removeAttribute('disabled');
    } else {
        submited.setAttribute('disabled', true);
    }
})
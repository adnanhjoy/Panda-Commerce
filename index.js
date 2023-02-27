// const h2Color = document.querySelectorAll('h2');
// for (h2 of h2Color) {
//     h2.style.color = 'lightblue';
// }
// const backpack = document.getElementById('backpacks');
// backpack.style.backgroundColor = 'yellow';

// const cards = document.getElementsByClassName('card');
// for (card of cards) {
//     card.style.borderRadius = '30px'
// }

// function buyNow() {
//     console.log('Hello')


// }

// const buyNowButton = document.querySelectorAll('a');
// for (button of buyNowButton) {
//     button.addEventListener('click', function () {
//         const cards = document.getElementsByClassName('card');
//         for (card of cards) {
//             card.style.display = 'none'
//         }
//     })
// }

document.getElementById('input-field').addEventListener('keyup', function (event) {
    text = event.target.value;
    console.log(text)
    const submitEmail = document.getElementById('submit-email');
    if (text === 'email') {
        submitEmail.removeAttribute('disabled');
    } else {
        submitEmail.setAttribute('disabled', true)
    }
})
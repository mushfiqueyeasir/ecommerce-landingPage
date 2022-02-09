
const h2s = document.getElementsByTagName('h2');
for (const h2 of h2s) {
    console.log(h2.innerText);
    h2.style.color = 'lightblue';
}

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

const buyNows = document.getElementsByClassName('btn-buy');

for (const buyNow of buyNows) {
    buyNow.addEventListener('click', function () {
        const semiParent = event.target.parentNode.parentNode.parentNode;
        semiParent.parentNode.removeChild(semiParent);
    })
}

const sendButton = document.getElementById('button-addon2');

document.getElementById('comment').addEventListener('keyup', function () {
    if (comment.value == 'email') {
        sendButton.removeAttribute('disabled');
    } else {
        sendButton.setAttribute('disabled', true);
    }
})


const images = document.getElementsByTagName('img');
console.log(images);
for (const image of images) {
    image.addEventListener('mouseenter', function () {
        image.style.transform = 'rotate(360deg)';
        image.style.transitionDuration = "3.5s";
    })
}


document.getElementById('contact').addEventListener('dblclick', function () {
    console.log(5)
    contact.style.backgroundColor = 'pink';
})


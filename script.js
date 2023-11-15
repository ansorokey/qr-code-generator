const imgBox = document.querySelector('#img-box');
const qrImg = document.querySelector('#qr-img');
const qrText = document.querySelector('#qr-text');

function generateQR() {
    const apiURL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    qrImg.src = apiURL;

    imgBox.classList.add('show-img');
}

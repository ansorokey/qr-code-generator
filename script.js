const imgBox = document.querySelector('#img-box');
const qrImg = document.querySelector('#qr-img');
const qrText = document.querySelector('#qr-text');

function generateQR() {

    // do not attemp to create a code if the input is empty
    if(!qrText.value.length) {
        //the error class plays a shake animation
        qrText.classList.add('error')
        // remove the animation after 1 second
        setTimeout(() => qrText.classList.remove('error'), 1000)
        return;
    }

    const apiURL = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    qrImg.src = apiURL;

    // qr code is hidden by default, adding this class shows the qr code with an animation
    imgBox.classList.add('show-img');
}

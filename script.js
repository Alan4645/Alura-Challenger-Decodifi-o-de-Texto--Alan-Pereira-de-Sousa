/* script.js */
function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText); // Base64 encoding
    alert('Texto criptografado: ' + encryptedText);
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decryptedText = atob(inputText); // Base64 decoding
        alert('Texto descriptografado: ' + decryptedText);
    } catch (e) {
        alert('Texto inválido para descriptografia.');
    }
}

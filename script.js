const loginButton = document.querySelector('.login-button');

loginButton.addEventListener('click', function(event) {
    event.preventDefault(); // Verhindert, dass das Formular abgeschickt wird (falls im Formular)
    meineFunktion();
});

function meineFunktion() {
    window.location.href = 'welcome.html';
}

	
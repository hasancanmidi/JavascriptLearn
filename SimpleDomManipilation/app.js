const button = document.getElementById('showTextButton');
const text = document.getElementById('text');

button.addEventListener('click', () => {
    if (text.classList.contains('hidden')) {
        text.classList.remove('hidden');
        button.innerHTML = 'Close Text';
    } else {
        text.classList.add('hidden');
        button.innerHTML = 'Show Text';
    }
});

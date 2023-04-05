var gallery = document.getElementById("gallery");

var images = [
    'https://picsum.photos/500/500?random=1',
    'https://picsum.photos/500/500?random=2',
    'https://picsum.photos/500/500?random=3',
    'https://picsum.photos/500/500?random=4',
    'https://picsum.photos/500/500?random=5'
];

var index = 0;

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        index++;
        if (index === images.length) {
            index = 0;
        }
    } else if (event.key === 'ArrowLeft') {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
    }
    gallery.innerHTML = '<img src="' + images[index] + '" />';
});
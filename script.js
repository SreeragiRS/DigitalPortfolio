
const backgroundImage = document.getElementById('backgroundImage');

document.addEventListener('mousemove', () => {
    backgroundImage.classList.remove('hidden');
});

document.addEventListener('mouseleave', () => {
    backgroundImage.classList.add('hidden');
});

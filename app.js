const slides = document.querySelectorAll('.slide');

for (const slide of slides) {
    slide.addEventListener('mouseover', () => {
        slide.classList.add('active');
    });
    slide.addEventListener('mouseout', () => {
        slide.classList.remove('active');
    });
}

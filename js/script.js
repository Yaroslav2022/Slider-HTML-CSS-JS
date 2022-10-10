const slides = document.querySelectorAll('.slide');
for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActivewClasses()
        slide.classList.add('active')
    })
}

function clearActivewClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
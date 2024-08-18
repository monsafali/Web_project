const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}



// Testimonial
const slider = document.querySelector('.testimonial-slider');
const slides = document.querySelectorAll('.slide');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    checkSlidePosition();
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 4; // Scroll-fast
    slider.scrollLeft = scrollLeft - walk;
});


slider.addEventListener('transitionend', checkSlidePosition);

function checkSlidePosition() {
    const firstSlide = slides[0];
    const lastSlide = slides[slides.length - 1];
    if (slider.scrollLeft <= 0) {
        slider.style.transition = 'none';
        slider.scrollLeft = lastSlide.offsetLeft;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                slider.style.transition = 'transform 0.5s ease';
            });
        });
    } else if (slider.scrollLeft >= lastSlide.offsetLeft) {
        slider.style.transition = 'none';
        slider.scrollLeft = firstSlide.offsetLeft;
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                slider.style.transition = 'transform 0.5s ease';
            });
        });
    }
}


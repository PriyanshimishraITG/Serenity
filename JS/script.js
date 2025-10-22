const savedAge = localStorage.getItem("userAge");
window.onload = function () {
    if (savedAge) {
        document.getElementById("age-popup").classList.add("hidden");
        document.getElementById("welcome-popup").classList.add("hidden");
        document.body.style.overflow = "auto";
    };
};
document.body.style.overflow = "hidden";
document.getElementById("age-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkAge();
    }
});
function checkAge() {
    const ageInput = document.getElementById("age-input");
    const age = parseInt(ageInput.value);
    if (isNaN(age)) {
        alert("Please enter a valid number!");
        return;
    };
    if (age < 18 || age > 100) {
        document.getElementById("age-popup").classList.add("hidden");
        document.getElementById("invalid-age-popup").classList.remove("hidden");
        document.body.style.overflow = "hidden";
        setTimeout(() => {
            document.getElementById("invalid-age-popup").classList.add("hidden");
            document.getElementById("age-popup").classList.remove("hidden");
            document.body.style.overflow = "hidden";
        }, 3000);
    } else {
        localStorage.setItem("userAge", age);
        document.getElementById("age-popup").classList.add("hidden");
        document.getElementById("welcome-popup").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("welcome-popup").classList.add("hidden");
            document.body.style.overflow = "auto";
        }, 5000);
    };
}



var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});



const slider = document.querySelector('.product-card-wrapper');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('dragging');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('dragging');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('dragging');
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
});
slider.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - slider.offsetLeft;
    const walk = (x - startX) * 1.5;
    slider.scrollLeft = scrollLeft - walk;
});



function scrollCards(direction) {
    const wrapper = document.getElementById('cardWrapper');
    const scrollAmount = 200;
    if (direction === 'left') {
        wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };
};
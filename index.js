
let sampah;
let kota;
let partisipan;

let uptoPartisipan = 0;
let uptoSampah = 0;
let uptokota = 0;
const scrollOffset = 85;
let isCounting = false;

//burger menu

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// animasi hitung onscroll

window.addEventListener("scroll", () => {
    if (window.scrollY > scrollOffset && !isCounting) {
        // Start the counting functions
        sampah = setInterval(countSampah);
        kota = setInterval(countkota);
        partisipan = setInterval(countPartisipan);
        isCounting = true;
    }
});

function countSampah() {
    let count = document.getElementById("sampah");
    count.innerHTML = ++uptoSampah;
    if (uptoSampah === 3000) {
        clearInterval(sampah);
    }
}

function countkota() {
    let count = document.getElementById("kota");
    count.innerHTML = ++uptokota;
    if (uptokota === 98) {
        clearInterval(kota);
    }
}

function countPartisipan() {
    let count = document.getElementById("partisipan");
    count.innerHTML = ++uptoPartisipan;
    if (uptoPartisipan === 2000) {
        clearInterval(partisipan);
    }
}

document.querySelectorAll('.readmore-btn').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 200); // Durasi animasi
    });
});

let sampah;
let provinsi;
let partisipan;

let uptoPartisipan = 0;
let uptoSampah = 0;
let uptoProvinsi = 0;
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
        provinsi = setInterval(countProvinsi);
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

function countProvinsi() {
    let count = document.getElementById("provinsi");
    count.innerHTML = ++uptoProvinsi;
    if (uptoProvinsi === 38) {
        clearInterval(provinsi);
    }
}

function countPartisipan() {
    let count = document.getElementById("partisipan");
    count.innerHTML = ++uptoPartisipan;
    if (uptoPartisipan === 2000) {
        clearInterval(partisipan);
    }
}
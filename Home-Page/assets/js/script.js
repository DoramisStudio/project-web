const homeButton = document.getElementById('home-btn')
const galleryButton = document.getElementById('gallery-btn')
const ourProjectButton = document.getElementById('our-project-btn')
const aboutButton = document.getElementById('about-btn')

homeButton.addEventListener("click", function(){
    document.location.href = '../Home-Page/home-page.html';
})
galleryButton.addEventListener("click", function(){
    document.location.href = '../Gallery/gallery.html';
})
ourProjectButton.addEventListener("click", function(){
    document.location.href = '../Our-Projects/our-projects.html';
})
aboutButton.addEventListener("click", function(){
    document.location.href = '../About/about.html';
})

const image_list = [
    "./assets/img/Gojo-Satoru.jpg",
    "./assets/img/periodic-table.jpg",
    "./assets/img/kunjungan-industri-2022.jpg"
];

var image_slide_container = document.getElementById('image_slide');

var image_slide_pos = image_list.length; 
var img = image_slide_container.children[0];

let intervalSlide;

function nextSlide() {
    if (image_slide_pos < (image_list.length - 1)) {image_slide_pos++;}
    else {image_slide_pos = 0;}
    
    updateWall();
    wait(1000);
}
			
function prevSlide() {
    if (image_slide_pos < 1) {image_slide_pos = (image_list.length - 1);}
    else {image_slide_pos--;}
    
    updateWall();
    wait(1000);
}

function updateWall() {
    window.clearInterval(intervalSlide);
    intervalSlide = setInterval(nextSlide, 8000);
    img.classList.remove('slide-transition');
    setTimeout(function(){img.classList.add('slide-transition');
    img.setAttribute('src', image_list[image_slide_pos]);}, 100)
}

intervalSlide = setInterval(nextSlide, 8000);
nextSlide();
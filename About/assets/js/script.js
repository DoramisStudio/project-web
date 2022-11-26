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

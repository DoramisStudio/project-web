const image_list = [
    "../assets/img/Gojo-Satoru.jpg",
    "../assets/img/periodic-table.jpg"
];

var image_slide_container = document.getElementById('image_slide');

var image_slide_pos = image_list.length; 

function switchWall() {
    for (let i = 0; i >= (image_slide_pos - 1); i++) {
        console.log(i);
    }
}

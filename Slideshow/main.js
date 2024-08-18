let myImage = document.getElementById("slideshow");
let images = ["./images/course-01.jpg", 
    "./images/course-02.jpg",
    "./images/course-03.jpg",
    "./images/course-04.jpg",
    "./images/course-05.jpg"];
let i = 0;

function slideshow() {
    myImage.setAttribute('src', images[i])

    if(i == 4) {
        i = 0
    } else {
        i++
    }

    setTimeout("slideshow()", 2000)
}

slideshow();
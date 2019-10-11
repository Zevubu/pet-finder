// alert(`slideshow.js connected!`);
// console.log(`hello`);

var time = 3000;
var j = 0;
const images = [
    '../../slideshow/img1.jpg',
    '../../slideshow/img2.jpg',
    '../../slideshow/img3.jpg',
    '../../slideshow/img6.jpg',
]

// createa one image element
var diplayImgs = document.querySelector(".diplay-imgs");
var img = document.createElement("img");
img.setAttribute("class", "slide-img");
img.setAttribute("width", "100px"); // set default width & height to always display images
img.setAttribute("height", "100px"); 
diplayImgs.append(img);

const changeImages = () => {
  if (j < images.length - 1) {
    j++;
    // dynamically change only the source of the image
    img.setAttribute("src", `${images[j]}`);
  } else {
      // whenever i > imgage.length reset and rerun the changeImages function 
    j = 0;
  }
  setTimeout("changeImages()", time);
};

// whever the page loaded, run changeImages function
window.onload = changeImages;

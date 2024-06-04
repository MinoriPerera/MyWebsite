const changeImageButton = document.getElementById("changeImageButton");
const imageElement = document.getElementById("image");

const imageList = ["image1.jpg","image2.jpg","image3.jpg","image4.jpg","image5.jpg","image6.jpg"];
let currentImageIndex = 0;

changeImageButton.addEventListener("click",() => {
    currentImageIndex=(currentImageIndex + 1)% imageList.length;
    imageElement.src = imageList[currentImageIndex];
});
let slideIndex = 0
let images = document.getElementById("slideShow--img")
let preButtonUp = document.getElementById("preButton")
let nextButtonUp = document.getElementById("nextButton")


let arrySlide = [
    "https://www.themoviedb.org/t/p/original/z00ePKhjTlQqg455kF2U0jmiPDb.jpg",
    "https://www.themoviedb.org/t/p/original/qSYOdHUUS5NzrQknwn0X3cBMwtP.jpg",
    "https://www.themoviedb.org/t/p/original/z9ft5HYHzWcasR6SGcgeluxTznB.jpg",
    "https://www.themoviedb.org/t/p/original/wpL6X6vpSGEVmxAiLKDLunfOf2Q.jpg",
]


let indexSlideShow = document.getElementById("slideShow--index")
indexSlideShow.innerText = `${slideIndex + 1}/${arrySlide.length}`


function nextSlide() {

    slideIndex++

    if (slideIndex > arrySlide.length - 1) {
        slideIndex = 0
    }

    images.src = arrySlide[slideIndex]

    nextButtonUp.style.transform = "scale(0.9)"
    indexSlideShow.innerText = `${slideIndex + 1}/${arrySlide.length}`
}


function preSlide() {

    slideIndex--

    if (slideIndex < 0) {
        slideIndex = arrySlide.length - 1
    }

    images.src = arrySlide[slideIndex]

    preButtonUp.style.transform = "scale(0.9)"
    indexSlideShow.innerText = `${slideIndex + 1}/${arrySlide.length}`
}


let autoSilde = setInterval(() => {
    nextSlide()
    resetClick()
}, 3000);


function resetClick() {
    preButtonUp.style.transform = "scale(1)"
    nextButtonUp.style.transform = "scale(1)"
}
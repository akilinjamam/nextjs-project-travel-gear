let btnLeft = document.getElementById('btn-left');
let btnRight = document.getElementById('btn-right');
let slider = document.getElementById('slider');

btnLeft.onclick = () => {
    slider.scrollLeft -= 220
}

btnRight.onclick = () => {
    slider.scrollLeft += 220
}


let sliderWidth = slider.scrollWidth - slider.clientWidth

function autoPlay() {
    if (slider.scrollLeft > (sliderWidth - 1)) {
        slider.scrollLeft -= sliderWidth
    } else {
    }
    slider.scrollLeft += 1
}

let play = setInterval(autoPlay, 30);


let thumbnails = document.getElementsByClassName('thumbnail');

for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener('mouseover', function () {
        clearInterval(play);
    })
    thumbnails[i].addEventListener('mouseout', function () {
        return play = setInterval(autoPlay, 30);
    })

}


function play() {
    let plays = document.querySelector('.car')
    plays.style.animationPlayState = "running"
}

function paused() {
    let pauses = document.querySelector('.car')
    if(pauses) {
        pauses.style.animationPlayState = "paused"
    }
}
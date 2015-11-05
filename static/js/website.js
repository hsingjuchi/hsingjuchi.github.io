function hover(element, img) {
    element.setAttribute('src', img);
}

function unhover(element, img) {
    element.setAttribute('src', img);
}

function showtext(element, thetext) {
    element.innerHTML = thetext
        // highlighting = setInterval("gradualfade(textcontainerobj)", 50)
}

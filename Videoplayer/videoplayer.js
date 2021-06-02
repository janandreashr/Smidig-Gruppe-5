var videoIndex = 1;
showVideos(videoIndex);

function plusVideos(n) {
    showVideos(videoIndex += n);
}

function currentVideo(n) {
    showVideos(videoIndex = n);
}

function showVideos(n) {
    var i;
    var videos = document.getElementsByClassName("videoSlide");
    var dots = document.getElementsByClassName("dot");
    if (n > videos.length) {videoIndex = 1}
    if (n < 1) {videoIndex = video.length}
    for (i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    videos[videoIndex-1].style.display = "block";
    dots[videoIndex-1].className += " active";
}
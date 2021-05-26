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
    if (n > videos.length) {videoIndex = 1}
    if (n < 1) {videoIndex = video.length}
    for (i = 0; i < videos.length; i++) {
        videos[i].style.display = "none";
    }
    videos[videoIndex-1].style.display = "block";
}
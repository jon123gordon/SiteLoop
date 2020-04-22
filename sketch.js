let vid;
function setup() {
  noCanvas();

  vid = createVideo(
    ["TapeReel.mp4"],
    vidLoad
  );

  vid.size(windowWidth, windowHeight);
}

// This function is called when the video loads
function vidLoad() {
  vid.loop();
  vid.volume(0);
}
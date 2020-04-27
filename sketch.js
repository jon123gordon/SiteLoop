var bgv;
var sound;

var sagan = ['From', 'this', 'distant', 'vantage point,', 'the Earth', 'might', 'not', 'seem of', 'any', 'particular interest.', 'But', 'for us,', 'it’s', 'different.', 'Consider', 'again', 'that', 'dot.', 'That’s', 'here.', 'That’s', 'home.', 'That’s us.', 'On', 'it', 'everyone', 'you', 'love,', 'everyone you know,', 'everyone', 'you', 'ever', 'heard', 'of,', 'every', 'human', 'being', 'who', 'ever', 'was,', 'lived', 'out', 'their', 'lives.', 'The aggregate', 'of', 'our', 'joy', 'and', 'suffering,', 'thousands', 'of confident', 'religions,', 'ideologies,', 'and', 'economic doctrines,', 'every', 'hunter', 'and', 'forager,', 'every', 'hero', 'and coward,', 'every', 'creator', 'and', 'destroyer', 'of civilization,', 'every king', 'and peasant,', 'every young couple in love,', 'every mother', 'and father,', 'hopeful', 'child,', 'inventor', 'and explorer,', 'every', 'teacher', 'of', 'morals,', 'every', 'corrupt', 'politician,', 'every', '‘superstar,’', 'every', '‘supreme', 'leader,’', 'every saint', 'and sinner', 'in', 'the', 'history', 'of', 'our', 'species,', 'lived', 'there', '—', 'on', 'a', 'mote', 'of', 'suspended in a sunbeam.'];
 

var separator = ' ';



function preload() {
  sound = loadSound("birds.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // specify multiple formats for different browsers
  bgv = createVideo(["TapeReel.mp4", ]);
  bgv.hide();
  bgv.loop();
  sound.play();
  sound.loop();                                           
  frameRate(15);

 
}

function draw() {
  
  //var tw = windowWidth / 2;
  var m = map(mouseY, 0, windowHeight, windowWidth/2, windowWidth, true);
 
 
  
  
  
  background(220);
  image(bgv, 0, 0, windowWidth, windowHeight);
  textSize(32);
  fill(255, 255, 255);
  
  words = join(sagan, separator );
  
  
  
  text(words, 15, 50, m, windowHeight);
 


}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


function mouseMoved() {

  if (mouseY > windowHeight / 4) {
    shuffle(sagan, true) 
    

  } else {
    sagan = ['From', 'this', 'distant', 'vantage point,', 'the Earth', 'might', 'not', 'seem of', 'any', 'particular interest.', 'But', 'for us,', 'it’s', 'different.', 'Consider', 'again', 'that', 'dot.', 'That’s', 'here.', 'That’s', 'home.', 'That’s us.', 'On', 'it', 'everyone', 'you', 'love,', 'everyone you know,', 'everyone', 'you', 'ever', 'heard', 'of,', 'every', 'human', 'being', 'who', 'ever', 'was,', 'lived', 'out', 'their', 'lives.', 'The aggregate', 'of', 'our', 'joy', 'and', 'suffering,', 'thousands', 'of confident', 'religions,', 'ideologies,', 'and', 'economic doctrines,', 'every', 'hunter', 'and', 'forager,', 'every', 'hero', 'and coward,', 'every', 'creator', 'and', 'destroyer', 'of civilization,', 'every king', 'and peasant,', 'every young couple in love,', 'every mother', 'and father,', 'hopeful', 'child,', 'inventor', 'and explorer,', 'every', 'teacher', 'of', 'morals,', 'every', 'corrupt', 'politician,', 'every', '‘superstar,’', 'every', '‘supreme', 'leader,’', 'every saint', 'and sinner', 'in', 'the', 'history', 'of', 'our', 'species,', 'lived', 'there', '—', 'on', 'a', 'mote', 'of', 'suspended in a sunbeam.'];
  }

  
  
}
const SLICE_COUNT = 10

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.draw_slits(false)
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("paw test","png")
  pScope.load_image_sequence("cat_test","png",11)
  pScope.load_image("yarntest","png")
}

function setup_layers(pScope){

  new PLayer(null, 220);   

  var ringouter =new PLayer(outerring)
  ringouter.mode( RING )
  ringouter.set_boundary(0,1000)

  var middlebackground =new PLayer(secondmiddlebackground)
  middlebackground.mode(RING)
  middlebackground.set_boundary(0,1000)

  var ringinner =new PLayer(innerring)
  ringinner.mode(RING)
  ringinner.set_boundary(0,1000)
 
  var cat =new PLayer(catface)
  cat.mode(RING)
  cat.set_boundary(0,100)

  var yarn = new PLayer(wool);
  yarn.mode(RING);
  yarn.set_boundary( 0, 1000 );

  var ratring = new PLayer(rat);
  ratring.mode( SWIRL(1) );
  ratring.set_boundary(0,1);

  var Centrepaw =new PLayer(paw)
  Centrepaw.mode( RING )
  Centrepaw.set_boundary(0,1000)

}


function wool(x, y, animation, pScope){
  fill(255)
  scale(0.9)
  pScope.draw_image("yarntest",x-10,y+465-animation.wave()*-360)
}

function paw(x, y, animation, pScope){
  scale(animation.frame);
  pScope.draw_image("paw test",x,y);
}

function secondmiddlebackground(x, y, animation, pScope){
  let angleOffsetsecondbackground = (360 / SLICE_COUNT)/2
  let backgroundArcStartsecondbackground = 270 - angleOffsetsecondbackground;
  let backgroundArcEndsecondbackground = 270 + angleOffsetsecondbackground;
 fill(160,140,190)
  arc(x,y,1600,1600,backgroundArcStartsecondbackground,backgroundArcEndsecondbackground)
}

function outerring(x,y,animation,pScope){
  let angleOffsetouterring = (360 / SLICE_COUNT)/2
  let backgroundArcStartouterring = 270 - angleOffsetouterring;
  let backgroundArcEndouterring = 270 + angleOffsetouterring;
  fill(214,214,13)
  arc(x,y,2000,2000,backgroundArcStartouterring,backgroundArcEndouterring)
}

function innerring(x, y,animation,pScope){ 
let angleOffsetinnerring = (360 / SLICE_COUNT)/2 
let ArcStartinnerring = 270 - angleOffsetinnerring;
let ArcEndinnerring = 270 + angleOffsetinnerring;
fill(214, 214, 13)
arc(x,y,770,770,ArcStartinnerring,ArcEndinnerring);
}

function rat(x, y, animation, pScope){
  translate(x,y-20)
  strokeWeight(4)
  fill(255)
  ellipse(-14,-231-animation.wave()*50,80,57) 
  fill(0)
  ellipse(-35,-240-animation.wave()*50,5,5)
  
  fill(255)
  beginShape(vertex)
  vertex(-32,-258-animation.wave()*50)
  vertex(-32,-270-animation.wave()*50)
  vertex(-18,-265-animation.wave()*50)
  vertex(-18,-245-animation.wave()*50)
  endShape()

  fill(0)
  stroke(150,1,20)
  line(25,-220-animation.wave()*50,60,-220-animation.wave()*50)
  stroke(0)
  fill(150,1,20)
  ellipse(-50,-229-animation.wave()*50, 10,10)
  strokeWeight(3)
  line(-38,-227-animation.wave()*50,-15,-235-animation.wave()*50)
  line(-30,-224-animation.wave()*50, -5,-224-animation.wave()*50 )
  line(-38,-221-animation.wave()*50,-15,-215-animation.wave()*50)
}

function catface(x, y, animation, pScope){
  translate(x,y-500);
  scale(1.5);
  pScope.draw_image_from_sequence("cat_test", x+5,y-5, animation.frame);    
}

 
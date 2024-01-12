const SLICE_COUNT = 10

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK)
  pScope.scale_for_screen(true)
  pScope.draw_layer_boundaries(false)
  pScope.draw_slits(false)
  pScope.set_direction(CCW)
  pScope.set_slice_count(SLICE_COUNT)
  pScope.load_image("pawcentre","png")
  pScope.load_image_sequence("catface","png",10)
  pScope.load_image("yarn","png")
  pScope.load_image("pawring","png")
}

function setup_layers(pScope){

  new PLayer(null, 220)   

  var ringouter =new PLayer(outerring)
  ringouter.mode( RING )
  ringouter.set_boundary(0,1000)

  var outerringpurplewhite =new PLayer(purplewhiteouterring)
  outerringpurplewhite.mode(RING)
  outerringpurplewhite.set_boundary(0,100)

  var ringpaw =new PLayer(pawring)
  ringpaw.mode (RING)
  ringpaw.set_boundary(0,1000)

  var ringsecond =new PLayer(secondring)
  ringsecond.mode(RING)
  ringsecond.set_boundary(0,1000)

  var middlebackground =new PLayer(secondmiddlebackground)
  middlebackground.mode(RING)
  middlebackground.set_boundary(0,1000)

  var ringinner =new PLayer(innerring)
  ringinner.mode(RING)
  ringinner.set_boundary(0,1000)
 
  var cat =new PLayer(catface)
  cat.mode(RING)
  cat.set_boundary(0,0)

  var yarn = new PLayer(wool)
  yarn.mode(SWIRL(1))
  yarn.set_boundary(0, 1)

  var ratring = new PLayer(rat)
  ratring.mode( SWIRL(1) )
  ratring.set_boundary(0,1)

  var Centrepaw =new PLayer(paw)
  Centrepaw.mode( RING )
  Centrepaw.set_boundary(0,1000)
}

function outerring(x,y,animation,pScope){
  let angleOffsetouterring = (360 / SLICE_COUNT)/2
  let backgroundArcStartouterring = 270 - angleOffsetouterring
  let backgroundArcEndouterring = 270 + angleOffsetouterring
  fill(232,232,5)
  arc(x,y,2000,2000,backgroundArcStartouterring,backgroundArcEndouterring)
}

function purplewhiteouterring(x, y, animation, pScope){
  let angleOffsetsecondbackground = (360 / SLICE_COUNT)/2
  let backgroundArcStartsecondbackground = 270 - angleOffsetsecondbackground
  let backgroundArcEndsecondbackground = 270 + angleOffsetsecondbackground
 
if(animation.frame>0&&animation.frame<0.4){
fill(255)
}
else if(animation.frame>0.5&&animation.frame<0.9){
 fill(255)  
 }
else{
 fill(160,140,190) 
 }
arc(x,y,1875,1875,backgroundArcStartsecondbackground,backgroundArcEndsecondbackground)   
}

function pawring(x,y,animation,pScope){
  scale(0.7)
  pScope.draw_image("pawring",x,y-1214-animation.wave()*-25)
}

function secondring(x,y,animation,pScope){
  let angleOffsetouterring = (360 / SLICE_COUNT)/2
  let backgroundArcStartouterring = 270 - angleOffsetouterring
  let backgroundArcEndouterring = 270 + angleOffsetouterring
  fill(232,232,5)
  arc(x,y,1575,1575,backgroundArcStartouterring,backgroundArcEndouterring)
}

function secondmiddlebackground(x, y, animation, pScope){
  let angleOffsetsecondbackground = (360 / SLICE_COUNT)/2
  let backgroundArcStartsecondbackground = 270 - angleOffsetsecondbackground
  let backgroundArcEndsecondbackground = 270 + angleOffsetsecondbackground
  fill(160,140,190) 
  arc(x,y,1500,1500,backgroundArcStartsecondbackground,backgroundArcEndsecondbackground)  
}

function innerring(x, y,animation,pScope){ 
  let angleOffsetinnerring = (360 / SLICE_COUNT)/2 
  let ArcStartinnerring = 270 - angleOffsetinnerring
  let ArcEndinnerring = 270 + angleOffsetinnerring
  fill(232,232,5)
  arc(x,y,770,770,ArcStartinnerring,ArcEndinnerring)
  }

function catface(x, y, animation, pScope){
  translate(x,y-500)
  scale(1.5)
  pScope.draw_image_from_sequence("catface", x+5,y-5, animation.frame)    
 }

function wool(x, y, animation, pScope){
  
  if(animation.frame==0.7){
    scale(0.6)
    translate(0,200)
    }
  else if(animation.frame==0.6){
   scale(0.7)  
   translate(0,160)
   }
  else if(animation.frame==0.5){
    scale(0.8)
    translate(0,100)  
     }
  else if(animation.frame==0.8){
     scale(0)  
    }
  else if(animation.frame==0.9){
     scale(0)  
    }
  else if(animation.frame==0.1){
   scale(0)  
   }
  else if(animation.frame==0.0){
     scale(0)  
    }
  else{
     scale(0.9)
     }

  pScope.draw_image("yarn",x-10,y+510-animation.wave()*-240) 
}

function rat(x, y, animation, pScope){
  translate(x,y-15)
  strokeWeight(4)
  fill(255)
  ellipse(-14,-229-animation.wave()*50,80,57) 
  fill(0)
  ellipse(-35,-238-animation.wave()*50,5,5)
  
  fill(255)
  beginShape(vertex)
  vertex(-32,-256-animation.wave()*50)
  vertex(-32,-268-animation.wave()*50)
  vertex(-18,-263-animation.wave()*50)
  vertex(-18,-243-animation.wave()*50)
  endShape()

  fill(0)
  stroke(150,1,20)
  line(25,-218-animation.wave()*50,60,-218-animation.wave()*50)
  stroke(0)
  fill(150,1,20)
  ellipse(-50,-227-animation.wave()*50, 10,10)
  strokeWeight(3)
  line(-38,-225-animation.wave()*50,-15,-233-animation.wave()*50)
  line(-30,-222-animation.wave()*50, -5,-222-animation.wave()*50 )
  line(-38,-219-animation.wave()*50,-15,-213-animation.wave()*50)
}

function paw(x, y, animation, pScope){
  scale(animation.frame)
  pScope.draw_image("pawcentre",x,y)
}
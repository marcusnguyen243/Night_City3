
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================

// exmample of global var that can be used between scenes
let loy= 0;


function titlescreen()  {
let x = 255;
  this.setup = function (){
    createCanvas(1433,1000);
    background(255);
    fill(0);

  }

this.draw = function() {
  image(picture,0,0);
  fill(0,x);
  rect(0,0,width,height);
//if (mouseIsPressed){
  //mgr.showNextScene();
  x = x - .1;
  console.log(x);
}


    this.enter = function()  {

        //createCanvas(1433,1000);
        background(255);
      }
this.mousePressed = function(){
  mgr.showNextScene();
}

    }

function ending(){
let x = 255;
let y = 900;
this.setup = function(){
background(0);
}
this.draw = function(){
image(endingscreen,width/2-200,y)
y = y -.5
}
}




function prologue()  {
let x = 0;
  this.setup = function (){
    createCanvas(1433,1000);
    background(255)
  }



    this.enter = function()  {

        createCanvas(1433,1000);
        background(255);
      }




    this.draw = function()
    {
      x = x-0.3;
      console.log(x)
image(text1,width/2-300,x+850);

if (mouseIsPressed){
  mgr.showNextScene();
}

}
}



////////////////////////////// 1 /////////////////
function intro()  {
  //var daguy;
  let guyxloc = 540;
  let guyyloc = 540;
  let guymoves;
  let speed = 1.9;
  let speedy = .9;
  let g = 0;
  let theTint = 0;
  let carlTextMover = 1000;
  let carlTextBoxMover =0;
//let p = 0;
  var atkbtn = new Clickable();
  var splbtn = new Clickable();
  var itmbtn = new Clickable();
  var mailbox = new Clickable();
    this.setup = function() {
      createCanvas(1433,1000);
      console.log("We are at setup for scene1");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
atkbtn.locate(50,800);
atkbtn.resize(370,59);
atkbtn.image = atk;
atkbtn.color = "#66000000";
atkbtn.strokeWeight = 0;
atkbtn.text = " ";
atkbtn.onHover = function (){
  this.image = atkyel;
  text("no weapons yet!",width/2,height/2);
}
atkbtn.onOutside = function (){
  this.image = atk;
}
atkbtn.onPress = function(){
//image(atkmenu, width/2,height/2);
//console.log("hello");
}
atkbtn.onRelease = function(){
  text("no weapons yet!",width/2,height/2);
  //image(atkmenu, width/2,height/2);
}

splbtn.locate(55,860);
splbtn.resize(290,59);
splbtn.image = spell;
splbtn.color = "#66000000";
splbtn.strokeWeight = 0;
splbtn.text = " ";
splbtn.onHover = function (){
  this.image = spellyel;
  text("no spells yet!",width/2,height/2);
}
splbtn.onOutside = function (){
  this.image = spell;
}

splbtn.onPress = function(){
text("no items yet!",width/2,height/2);
}
splbtn.onRelease = function(){
  text("no spells yet!",width/2,height/2);
}

itmbtn.locate(70,920);
itmbtn.resize(240,59);
itmbtn.image = item;
itmbtn.color = "#66000000";
itmbtn.strokeWeight = 0;
itmbtn.text = " ";
itmbtn.onHover = function (){
  this.image = itemyel;
  text("no items yet!",width/2,height/2);
}
itmbtn.onOutside = function (){
  this.image = item;
}

itmbtn.onPress = function(){
  text("no items yet!",width/2,height/2);
}
itmbtn.onRelease = function(){
  text("no items yet!",width/2,height/2);
}

mailbox.locate(660,500);
mailbox.resize(95,100);
mailbox.color = "#66000000";
mailbox.strokeWeight = 0;
mailbox.text = " ";
mailbox.onPress = function(){

}

      background("blue");
      textAlign(CENTER);
      textSize(29);




    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        //console.log(mouseX, " ", mouseY);
        // textX = 10;
        // textY = 0;
        loy = 100;
        background("red");
        createCanvas(1433,1000);
   //speed = 10;
        //send off stage

        // helpbtnsprite.visible = false;
daguy.position.x = 630;
daguy.position.y = 620;

        //put the sprite on the stage

        nextbtnsprite.onMouseOver = function() {
          this.animation.goToFrame(1);
        };
        nextbtnsprite.onMouseOut = function() {
          this.animation.goToFrame(0);
        };
        nextbtnsprite.onMousePressed = function() {
          this.animation.goToFrame(2);
        };
        nextbtnsprite.onMouseReleased = function() {
          this.animation.goToFrame(0);
          mgr.showNextScene();
        };


        // if (snd1.isPlaying()) {
        // // .isPlaying() returns a boolean
        //     snd1.pause(); // .play() will resume from .pause() position
        // //  background(255, 0, 0);
        // } else {
        //     snd1.play();
        //   //background(0, 255, 0);
        // }


    }


    this.draw = function()
    {

        keyPressed();
frameRate(60);
        background(0,0,0);
        image(home,0,0,width,height);
        //image(guy,guyxloc,guyyloc,170,170);
        //image(carls[g],300,height/2+carlTextBoxMover);

        //animation(sparkle,width/2-10,height/2+30);
        //mousePressed();
        console.log(g + " " + carlTextMover);
        // if (mouseIsPressed){
        //   g++;
        //   if(g>4){
        //     g=0;
        //   }
        // }
        //tint(255,theTint);
        image(health,-5,0,445,247);
        tint(255,200);
        image(objective1,900,0);
        //image(menu,12,760,380,210);
        noTint();
        //image(carls[0],400,height/2);
        textAlign(CENTER);
        //tint(255,atkmenuTint);
        //image(atkmenu, width/2-500,height/2-500);
        textSize(29);
        atkbtn.draw();
        splbtn.draw();
        itmbtn.draw();
        mailbox.draw();

//onsole.log(x);
//console.log(mouseX, " ", mouseY);


        // if (guymoves == true){
        //   guyxloc += speed;
        // }

          // if (snd1.isPlaying()) {
          // // .isPlaying() returns a boolean
          //     snd1.pause(); // .play() will resume from .pause() position
          // //  background(255, 0, 0);
          // } else {
          //     snd1.play();
          //   //background(0, 255, 0);
          // }


        drawSprites();  //used to show any sprites on the stage
        if(daguy.position.x > 1300){
          mgr.showNextScene();
        }

    }

    this.mousePressed = function(){
  console.log("hello");
  g++;
      }

this.keyPressed = function(){
if (keyIsDown(LEFT_ARROW)){
  //guymoves = true;

  daguy.changeAnimation('movingback');
daguy.velocity.x = -1.9;
daguy.velocity.y = -1;
console.log(daguy.velocity.x);
} else if(keyIsDown(RIGHT_ARROW)) {
  daguy.changeAnimation('movingforward');
  daguy.velocity.x = 1.9;
  daguy.velocity.y = 1;
} else {
  daguy.changeAnimation('still');
  daguy.velocity.x = 0;
  daguy.velocity.y = 0;
}

if (keyIsDown(DOWN_ARROW)){
  frameRate(10);
  g++;
  if (g>2){
    g=0;
    carlTextMover = 0;
    carlTextBoxMover = 1000;
    theTint = 255;
    //mgr.showScene(intro2);
  }


}


}




}




///////////////////////  2 (main) ////////////////////////


function themenu()  {
    //var daguy;
    var bench = new Clickable();
    let guyxloc = 540;
    let guyyloc = 540;
    let guymoves;
    let speed = 1.9;
    let speedy = .9;
    let g = 0;
    let theTint = 0;
    let carlTextMover = 1000;
    let carlTextBoxMover =0;
  //let p = 0;
    var atkbtn = new Clickable();
    var splbtn = new Clickable();
    var itmbtn = new Clickable();
    var mailbox = new Clickable();
      this.setup = function() {
        createCanvas(1433,1000);
        bench.locate(300,730);
        bench.text = "Inspect under bench";
        bench.strokeWeight = 0;
        bench.onHover = function(){
          this.text = "that's definitely a bench";
        }
        console.log("We are at setup for scene1");
        // do all stuff you want to initialize things,
        // as this it need to be called only once.
  atkbtn.locate(50,800);
  atkbtn.resize(370,59);
  atkbtn.image = atk;
  atkbtn.color = "#66000000";
  atkbtn.strokeWeight = 0;
  atkbtn.text = " ";
  atkbtn.onHover = function (){
    this.image = atkyel;
  }
  atkbtn.onOutside = function (){
    this.image = atk;
  }
  atkbtn.onPress = function(){
  //image(atkmenu, width/2,height/2);
  //console.log("hello");
  }
  atkbtn.onRelease = function(){
    text("no weapons yet!",width/2,height/2);
    //image(atkmenu, width/2,height/2);
  }

  splbtn.locate(55,860);
  splbtn.resize(290,59);
  splbtn.image = spell;
  splbtn.color = "#66000000";
  splbtn.strokeWeight = 0;
  splbtn.text = " ";
  splbtn.onHover = function (){
    this.image = spellyel;
  }
  splbtn.onOutside = function (){
    this.image = spell;
  }

  splbtn.onPress = function(){
  text("no items yet!",width/2,height/2);
  }
  splbtn.onRelease = function(){
    text("no spells yet!",width/2,height/2);
  }

  itmbtn.locate(70,920);
  itmbtn.resize(240,59);
  itmbtn.image = item;
  itmbtn.color = "#66000000";
  itmbtn.strokeWeight = 0;
  itmbtn.text = " ";
  itmbtn.onHover = function (){
    this.image = itemyel;
  }
  itmbtn.onOutside = function (){
    this.image = item;
  }

  itmbtn.onPress = function(){
    text("no items yet!",width/2,height/2);
  }
  itmbtn.onRelease = function(){
    text("no items yet!",width/2,height/2);
  }

  mailbox.locate(660,500);
  mailbox.resize(95,100);
  mailbox.color = "#66000000";
  mailbox.strokeWeight = 0;
  mailbox.text = " ";
  mailbox.onPress = function(){

  }

        background("blue");
        textAlign(CENTER);
        textSize(29);




      }

      // enter() will be called each time SceneManager switches
      // to this scene
      this.enter = function()  {
          //console.log(mouseX, " ", mouseY);
          // textX = 10;
          // textY = 0;
          loy = 100;
          background("red");
          createCanvas(1433,1000);
     //speed = 10;
          //send off stage

          // helpbtnsprite.visible = false;
  daguy.position.x = 200;
  daguy.position.y = 720;

          //put the sprite on the stage

          nextbtnsprite.onMouseOver = function() {
            this.animation.goToFrame(1);
          };
          nextbtnsprite.onMouseOut = function() {
            this.animation.goToFrame(0);
          };
          nextbtnsprite.onMousePressed = function() {
            this.animation.goToFrame(2);
          };
          nextbtnsprite.onMouseReleased = function() {
            this.animation.goToFrame(0);
            mgr.showNextScene();
          };


          // if (snd1.isPlaying()) {
          // // .isPlaying() returns a boolean
          //     snd1.pause(); // .play() will resume from .pause() position
          // //  background(255, 0, 0);
          // } else {
          //     snd1.play();
          //   //background(0, 255, 0);
          // }


      }


      this.draw = function()
      {

          keyPressed();
  frameRate(60);
          background(0,0,0);
          image(ascene,0,-170,width,height);
          animation(sparkle,300,730);
          image(objective3,900,0);
          //image(guy,guyxloc,guyyloc,170,170);
          //image(carls[g],300,height/2+carlTextBoxMover);

          //animation(sparkle,width/2-10,height/2+30);
          //mousePressed();
          console.log(g + " " + carlTextMover);
          // if (mouseIsPressed){
          //   g++;
          //   if(g>4){
          //     g=0;
          //   }
          // }
          //tint(255,theTint);
          image(health,-5,0,445,247);
          //image(menu,12,760,380,210);
          noTint();
          //image(carls[0],400,height/2);
          textAlign(CENTER);
          //tint(255,atkmenuTint);
          //image(atkmenu, width/2-500,height/2-500);
          textSize(29);
          atkbtn.draw();
          splbtn.draw();
          itmbtn.draw();
          bench.draw();
          //mailbox.draw();

  //onsole.log(x);
  //console.log(mouseX, " ", mouseY);


          // if (guymoves == true){
          //   guyxloc += speed;
          // }

            // if (snd1.isPlaying()) {
            // // .isPlaying() returns a boolean
            //     snd1.pause(); // .play() will resume from .pause() position
            // //  background(255, 0, 0);
            // } else {
            //     snd1.play();
            //   //background(0, 255, 0);
            // }


          drawSprites();  //used to show any sprites on the stage
          if(daguy.position.x > 1200){
            mgr.showScene(last);
          }
          if(daguy.position.x < 50){
            mgr.showScene(help);
          }

      }

      this.mousePressed = function(){
    console.log("hello");
    g++;
        }

  this.keyPressed = function(){
  if (keyIsDown(LEFT_ARROW)){
    //guymoves = true;

    daguy.changeAnimation('movingback');
  daguy.velocity.x = -3;

  console.log(daguy.velocity.x);
  } else if(keyIsDown(RIGHT_ARROW)) {
    daguy.changeAnimation('movingforward');
    daguy.velocity.x = 3;
  } else {
    daguy.changeAnimation('still');
    daguy.velocity.x = 0;
    daguy.velocity.y = 0;
  }

  if (keyIsDown(DOWN_ARROW)){
    frameRate(10);
    g++;
    if (g>2){
      g=0;
      carlTextMover = 0;
      carlTextBoxMover = 1000;
      theTint = 255;
      //mgr.showScene(intro2);
    }


  }


  }




  }




function main()  {
   let octo1,octo2;
   let octoX, octoY;
   let dirX, dirY;
   let octopusmoves;
   let speed;
   let incx = 0;
   let g =0;
   let z =0;
   var trash = new Clickable();
   var atkbtn = new Clickable();
   var splbtn = new Clickable();
   var itmbtn = new Clickable();
   //let light1;
//light = loadAnimation('assets/thelight001.png', 'assets/thelight006.png');

   // daguy = createSprite(100,1000);
   // daguy.addAnimation('still','assets/SPRITE001.png');
   // daguy.addAnimation('movingforward','assets/SPRITE001.png','assets/SPRITE003.png');
   // daguy.addAnimation('movingback','assets/BSPRITE001.png','assets/BSPRITE003.png');
  this.setup = function() {
    atkbtn.locate(30,810);
    atkbtn.resize(370,59);
    atkbtn.image = atk;
    atkbtn.color = "#66000000";
    atkbtn.strokeWeight = 0;
    atkbtn.text = " ";
    atkbtn.onHover = function (){
      this.image = atkyel;
      text("no weapons yet!",width/2,height/2);
    }
    atkbtn.onOutside = function (){
      this.image = atk;
    }
    atkbtn.onPress = function(){
    //image(atkmenu, width/2,height/2);
    //console.log("hello");
    }
    atkbtn.onRelease = function(){
    text("no weapons yet!",width/2,height/2);
      //image(atkmenu, width/2,height/2);
    }

    splbtn.locate(35,870);
    splbtn.resize(290,59);
    splbtn.image = spell;
    splbtn.color = "#66000000";
    splbtn.strokeWeight = 0;
    splbtn.text = " ";
    splbtn.onHover = function (){
      this.image = spellyel;
        text("no spells yet!",width/2,height/2);
    }
    splbtn.onOutside = function (){
      this.image = spell;
    }

    splbtn.onPress = function(){

      text("no spells yet!",width/2,height/2);
      }
      splbtn.onRelease = function (){
        text("no spells yet!",width/2,height/2);
      }


    itmbtn.locate(45,930);
    itmbtn.resize(240,59);
    itmbtn.image = item;
    itmbtn.color = "#66000000";
    itmbtn.strokeWeight = 0;
    itmbtn.text = " ";
    itmbtn.onHover = function (){
      this.image = itemyel;
      text("no items yet!",width/2,height/2);
    }
    itmbtn.onOutside = function (){
      this.image = item;
    }

    itmbtn.onPress = function(){
      text("no items yet!",width/2,height/2);
    }
    trash.locate(420,600);
    trash.text = "Check trash";
    trash.strokeWeight = 0;
    trash.onHover = function(){
      this.text = "inside you find trash";
    }
    //createCanvas(1000,1189);


      //light1 = loadAnimation('assets/thelight001.png', 'assets/thelight006.png');
      //octo1 = new Octopi(width/2-100,height/2-100,color(255,0,0),.20);

  }

  this.enter = function() {
    snd1.pause();
    snd3.pause();
    //createCanvas(1000,1389);
    //myButton.locate(width/2, height/2);
    //console.log(mouseX, "  ", mouseY);
    //  snd2.loop();
    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1); };
    helpbtnsprite.onMouseOut = function() {  this.animation.goToFrame(0); };
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2); };
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      //mgr.showNextScene();
    };
daguy.position.x = 250;
daguy.position.y = 740;

  }

    this.draw = function(){
      keyPressed();

      //animation(light1,250,940);
      background(0);
      image(beforetown,0,-200,width,height+100);
      animation(light,width/2-200,height/2+130);
      animation(sparkle,width/2-230,height/2+200);

      image(clouds,300+incx,100,700,75);
      image(health,-5,0,445,247);
      tint(255,170);
      image(objective2,900,0);
      noTint();
      trash.draw();
      atkbtn.draw();
      splbtn.draw();
      itmbtn.draw();
      //image(dtrash[g],530,500,700,500+z);
      console.log(g);
      //console.log(mouseX);
      drawSprites();

      incx = incx + .08;

      if(incx>2000){
        incx = -incx;
      }

      if(daguy.position.x > 1250){
        mgr.showNextScene();
      }
      if(daguy.position.x < 200){
        mgr.showScene(intro);
      }
    }

    this.keyPressed = function(){
    if (keyIsDown(LEFT_ARROW)){
      //guymoves = true;

    daguy.changeAnimation('movingback');
    daguy.velocity.x = -4;
    console.log(daguy.velocity.x);
    } else if(keyIsDown(RIGHT_ARROW)) {
      daguy.changeAnimation('movingforward');
      daguy.velocity.x = 4;
    } else {
      daguy.changeAnimation('still');
      daguy.velocity.x = 0;
      daguy.velocity.y = 0;
    }



    }

}   // end of main


////////////////////////////// 3 /////////////////

function last() {
  let g = 0;5
var sidewalk = new Clickable();
var atkbtn = new Clickable()
var splbtn = new Clickable()
var itmbtn = new Clickable()
    //let loy= 255;
    atkbtn.locate(50,800);
    atkbtn.resize(370,59);
    atkbtn.image = atk;
    atkbtn.color = "#66000000";
    atkbtn.strokeWeight = 0;
    atkbtn.text = " ";
    atkbtn.onHover = function (){
      this.image = atkyel;
      text("no weapons yet!",width/2,height/2);
    }
    atkbtn.onOutside = function (){
      this.image = atk;
    }
    atkbtn.onPress = function(){
    //image(atkmenu, width/2,height/2);
    //console.log("hello");
    }
    atkbtn.onRelease = function(){
      text("no weapons yet!",width/2,height/2);
      //image(atkmenu, width/2,height/2);
    }

    splbtn.locate(55,860);
    splbtn.resize(290,59);
    splbtn.image = spell;
    splbtn.color = "#66000000";
    splbtn.strokeWeight = 0;
    splbtn.text = " ";
    splbtn.onHover = function (){
      this.image = spellyel;
      text("no items yet!",width/2,height/2);
    }
    splbtn.onOutside = function (){
      this.image = spell;
    }

    splbtn.onPress = function(){
    text("no items yet!",width/2,height/2);
    }
    splbtn.onRelease = function(){
      text("no spells yet!",width/2,height/2);
    }

    itmbtn.locate(70,920);
    itmbtn.resize(240,59);
    itmbtn.image = item;
    itmbtn.color = "#66000000";
    itmbtn.strokeWeight = 0;
    itmbtn.text = " ";
    itmbtn.onHover = function (){
      text("no items yet!",width/2,height/2);
      this.image = itemyel;
    }
    itmbtn.onOutside = function (){
      this.image = item;

    }

    itmbtn.onPress = function(){
      text("no items yet!",width/2,height/2);
    }
    itmbtn.onRelease = function(){
      text("no items yet!",width/2,height/2);
    }

    this.setup = function()  {
    sidewalk.locate(1000,820);
      sidewalk.text ="Check Under Doormat";




        console.log("We are at setup for scene3");
        //createCanvas(1000,1189);
    }

    this.enter = function()  {
        let loy= 255;
        console.log("We are entering scene3");
        keyPressed();
//createCanvas(1000,1189);
daguy.position.x = 300;
daguy.position.y = 750;
        //send off stage and stop sounds
        // helpbtnsprite.position.x =  -5000;
        // helpbtnsprite.position.y =  -5000;
        snd1.pause();
        snd2.pause();
        //put the sprite on the stage
        // nextbtnsprite.position.x = width  -100;
        // nextbtnsprite.position.y = height -100;
        nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1); };
        nextbtnsprite.onMouseOut = function() {  this.animation.goToFrame(0); };
        nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2); };
        nextbtnsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);

          // if (snd3.isPlaying()) {
          //     snd3.pause();
          // } else {
          //     snd3.play();
          // }
          mgr.showScene(intro);

        };

        //snd2.loop();

    }


    this.draw = function() {
      keyPressed();
        background(0,0,0);
        image(newone,0,-150,width,height);
        textAlign(CENTER);
        textSize(29);
        animation(light,800,630);
        tint(255,200);
        image(objective4,900,0);
        noTint();
        animation(sparkle,1000,720);
        sidewalk.onHover = function(){
          this.text = "You found a bug";
        }
        image(health,-5,0,445,247);
        sidewalk.draw();
        atkbtn.draw();
        itmbtn.draw();
        splbtn.draw();
        //trash.draw();
        //push();
        //
      //  translate(width/2,loy*3);
        //fill(255);
        //text("This is help", 0, 100);
        //text("Click the the next button to go back to intro.", 0, 150);

          // if (loy < 0) {
          //   loy = 255;
          // } else {
          //   loy--;
          // }
        //
      //  pop();
        drawSprites();
          //used to show any sprites on the stage
          if(daguy.position.x >1000){
            mgr.showScene(ending);
          }
 if (daguy.position.x < 60){
   mgr.showScene(themenu);
 }
    }
    this.keyPressed = function(){
    if (keyIsDown(LEFT_ARROW)){
      //guymoves = true;

      daguy.changeAnimation('movingback');
    daguy.velocity.x = -1.9;
    //daguy.velocity.y = -1;
    console.log(daguy.velocity.x);
    } else if(keyIsDown(RIGHT_ARROW)) {
      daguy.changeAnimation('movingforward');
      daguy.velocity.x = 1.9;
      //daguy.velocity.y = 1;
    } else {
      daguy.changeAnimation('still');
      daguy.velocity.x = 0;
      daguy.velocity.y = 0;
    }

}
}

function help() {
  let g = 0;
  var atkbtn = new Clickable()
  var splbtn = new Clickable()
  var itmbtn = new Clickable()
      //let loy= 255;
      atkbtn.locate(50,800);
      atkbtn.resize(370,59);
      atkbtn.image = atk;
      atkbtn.color = "#66000000";
      atkbtn.strokeWeight = 0;
      atkbtn.text = " ";
      atkbtn.onHover = function (){
          text("no weapons yet!",width/2,height/2);
        this.image = atkyel;
      }
      atkbtn.onOutside = function (){

        this.image = atk;
      }
      atkbtn.onPress = function(){
      //image(atkmenu, width/2,height/2);
      //console.log("hello");
      }
      atkbtn.onRelease = function(){
        text("no weapons yet!",width/2,height/2);
        //image(atkmenu, width/2,height/2);
      }

      splbtn.locate(55,860);
      splbtn.resize(290,59);
      splbtn.image = spell;
      splbtn.color = "#66000000";
      splbtn.strokeWeight = 0;
      splbtn.text = " ";
      splbtn.onHover = function (){
        text("no spells yet!",width/2,height/2);
        this.image = spellyel;
      }
      splbtn.onOutside = function (){
        this.image = spell;
      }

      splbtn.onPress = function(){
      text("no spells yet!",width/2,height/2);
      }
      splbtn.onRelease = function(){
        text("no spells yet!",width/2,height/2);
      }

      itmbtn.locate(70,920);
      itmbtn.resize(240,59);
      itmbtn.image = item;
      itmbtn.color = "#66000000";
      itmbtn.strokeWeight = 0;
      itmbtn.text = " ";
      itmbtn.onHover = function (){
        this.image = itemyel;
        text("no items yet!",width/2,height/2);
      }
      itmbtn.onOutside = function (){

        this.image = item;
      }

      itmbtn.onPress = function(){5
        text("no items yet!",width/2,height/2);
      }
      itmbtn.onRelease = function(){
        text("no items yet!",width/2,height/2);
      }
var sidewalk = new Clickable();
    //let loy= 255;
    this.setup = function()  {
    sidewalk.locate(760,820);
      sidewalk.text ="Check Sidewalk";




        console.log("We are at setup for scene3");
        //createCanvas(1000,1189);
    }

    this.enter = function()  {
        let loy= 255;
        console.log("We are entering scene3");
        keyPressed();
//createCanvas(1000,1189);
daguy.position.x = 300;
daguy.position.y = 750;
        //send off stage and stop sounds
        // helpbtnsprite.position.x =  -5000;
        // helpbtnsprite.position.y =  -5000;
        snd1.pause();
        snd2.pause();
        //put the sprite on the stage
        // nextbtnsprite.position.x = width  -100;
        // nextbtnsprite.position.y = height -100;
        nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1); };
        nextbtnsprite.onMouseOut = function() {  this.animation.goToFrame(0); };
        nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2); };
        nextbtnsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);

          if (snd3.isPlaying()) {
              snd3.pause();
          } else {
              snd3.play();
          }
          mgr.showScene(intro);

        };

        //snd2.loop();

    }


    this.draw = function() {
      keyPressed();
        background(0,0,0);
        image(town,0, -300,width,1200);
        image(health,-5,0,445,247);
        tint(255,200);
        image(objective5,900,0);
        noTint();
        textAlign(CENTER);
        textSize(29);
        animation(light,800,630)
        animation(sparkle,860,720);
        sidewalk.onHover = function(){
          this.text = "That's a sparkly sidewalk";
        }
        sidewalk.draw();
        atkbtn.draw();
        itmbtn.draw();
        splbtn.draw();
        //trash.draw();
        //push();
        //
      //  translate(width/2,loy*3);
        //fill(255);
        //text("This is help", 0, 100);
        //text("Click the the next button to go back to intro.", 0, 150);

          // if (loy < 0) {
          //   loy = 255;
          // } else {
          //   loy--;
          // }
        //
      //  pop();
        drawSprites();  //used to show any sprites on the stage
        if (daguy.position.x < 100){
          mgr.showScene(last);
        }
        if (daguy.position.x > 1000){
          mgr.showScene(themenu);
        }
    }
    this.keyPressed = function(){
    if (keyIsDown(LEFT_ARROW)){
      //guymoves = true;

      daguy.changeAnimation('movingback');
    daguy.velocity.x = -1.9;
    //daguy.velocity.y = -1;
    console.log(daguy.velocity.x);
    } else if(keyIsDown(RIGHT_ARROW)) {
      daguy.changeAnimation('movingforward');
      daguy.velocity.x = 1.9;
      //daguy.velocity.y = 1;
    } else {
      daguy.changeAnimation('still');
      daguy.velocity.x = 0;
      daguy.velocity.y = 0;
    }

}
}




var snd1,snd2,snd3;
var img1,img2,img3;
var text1;
var ghost, asterisk;
var picture;
var anim1;
var themenu;
var nextbtnanim, nextbtnsprite;
var helpbtnanim, helpbtnsprite;
var health;
var menu;
var home;
var guy;
var town;
var clouds;
var beforetown;
var sparkle;
var weapon;
var carls = [];
var mail = [];
var dtrash = [];
var atk;
var spell;
var item;
var atkyel;
var spellyel;
var itemyel;
var atkmenu;
var spellmenu;
var itemmenu;
var ascene;
var song;
var objective1;
var objective2;
var objective3;
var objective4;
var objective5;
var endingscreen;
// var duration;
// var  slideWidth = 500;

function preload() {
  objective1 = loadImage("assets/objective1.png");
  objective2 = loadImage("assets/objective2.png");
    objective3 = loadImage("assets/objective3.png");
      objective4 = loadImage("assets/objective4.png");
      objective5 = loadImage("assets/objective5.png");
      endingscreen = loadImage("assets/endingscreen.png");
  song = loadSound("assets/ff7.mp3");
  newone = loadImage("assets/last scene.png");
  text1 = loadImage("assets/ENTERCARLS.png");
  picture = loadImage("assets/LANDINGPAGE.png");
  ascene = loadImage("assets/scene4.png");
atkmenu = loadImage("assets/weaponsmenu.png")
spellmenu = loadImage("assets/spellmenu.png")
itemmenu = loadImage("assets/itemmenu.png")
atkyel = loadImage("replace/WEAPONS1.png");
spellyel = loadImage("assets/spells1.png");
itemyel = loadImage("assets/items1.png");
atk = loadImage("replace/weapons.png");
// spell = loadImage("assets/spells.png");
// item = loadImage("assets/items.png");
// weapon = loadImage("assets/WEAPONS.png");
  snd1 = loadSound("assets/beatbox.mp3");
  snd2 = loadSound("assets/beat.mp3");
  snd3 = loadSound("assets/death.mp3");
  img1 = loadImage("assets/bunker1.jpg");
  img2 = loadImage("assets/bunker2.jpg");
  img3 = loadImage("assets/bunker3.jpg");
  home = loadImage("assets/HOME.PNG");
health = loadImage("assets/HEALTHBARASSET.PNG");
  menu = loadImage("assets/MENUASSET.PNG");
  guy = loadImage("assets/guy001.png");
  town = loadImage("assets/SCENE2.png");
light = loadAnimation("assets/light001.png","assets/light030.png");
clouds = loadImage("assets/clouds1.PNG");
beforetown = loadImage("assets/beforetown.PNG");
sparkle = loadAnimation("assets/sparkle001.png", "assets/sparkle005.png");
for (let j = 0; j<5;j++){
  carls[j] = loadImage('assets/carltext00' + j + '.png');
}

for (let i = 0; i<3;i++){
  mail[i] = loadImage('assets/mailtext00' + i + '.png');
}

dtrash[0] = loadImage('assets/trash000.png');
dtrash[1] = loadImage('assets/trash001.png');
dtrash[2] = loadImage('assets/trash002.png');

  //NOTES on animation assets naming. You must only use numbers at the end of the file name.
  // i.e. animation_001 is fine. animation1_001 is not good. it confuses the loading function.
  // one technique with for managing sprites is to load them, and then move them off the canvas until needed


   helpbtnanim = loadAnimation('assets/help_u.png',
   'assets/help_r.png', 'assets/help_d.png');
   helpbtnsprite = createSprite(-500,0); //create and move 'off stage'
   helpbtnsprite.addAnimation('normal',helpbtnanim);


   nextbtnanim = loadAnimation('assets/next_btn_u.png',
   'assets/next_btn_r.png', 'assets/next_btn_d.png');
    nextbtnsprite = createSprite(-500,0);
    nextbtnsprite.addAnimation('normal',nextbtnanim);




}

// global manager object
var mgr;

function setup() {
    createCanvas(1433,1000);
    mgr = new SceneManager();
    daguy = createSprite(630,620);
    daguy.addAnimation('still','assets/SPRITE001.png');
    daguy.addAnimation('movingforward','assets/SPRITE001.png','assets/SPRITE003.png');
    daguy.addAnimation('movingback','assets/BSPRITE001.png','assets/BSPRITE003.png');
mgr.addScene(titlescreen);
mgr.addScene(prologue);
    mgr.addScene (intro);
    //mgr.addScene (intro2);
    mgr.addScene (main);
    mgr.addScene (themenu);
    mgr.addScene (help);
    mgr.addScene (last);
    mgr.addScene(ending);
    //mgr.addscene(scene4);
    mgr.showNextScene();

    song.play();

    //pausing sprite animations
    helpbtnsprite.animation.stop();
    nextbtnsprite.animation.stop();


}

function draw()
{
  //setVolume(.5);

//song.play();

    // pass the current draw function into the SceneManager
    mgr.draw();


}


   // pass the mousePressed message into the SceneManager
  //mgr.mousePressed();


//  function mouseMoved()
//  {
//    // pass the mouseMoved message into the SceneManager
//     mgr.handleEvent("mouseDragged");
// }

// function mouseDragged()
// {
//    // pass the mouseMoved message into the SceneManager
//     mgr.handleEvent("mouseDragged");
// }

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
      case '1':
          mgr.showScene( prologue );
          break;
        case '2':
            mgr.showScene( intro );
            break;
        case '3':
            mgr.showScene( main );
            break;
        case '4':
            mgr.showScene( help );
            break;
            case '5':
            mgr.showScene( themenu );
                break;

                case '6':
                    mgr.showScene( last);
                    break;
                    case '7':
                        mgr.showScene(ending);
                        break;
                case '0':
                    mgr.showScene(titlescreen);
                    break;
    }

    mgr.keyPressed();
}

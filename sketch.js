var DevilwearsPrada, HarryPotter, PlanetoftheApes, MeninBlack, Titanic, CharliesAngels, EdwardscissorHands;
var  PrincessDiaries, RunawayBride,JurassicPark;
var DwPimg, Hpimg,PAimg, MiBimg, Titaimg, CAimg, EsHimg, PDimg, RBimg, JPimg;

var Backtoyou, BlankSpace, BlindingLights, ColdWater, DanceMonkey, EyeoftheTiger, KillmwKindness, Rockabye;
var SevenRings, Sucker;
var Btyimg, BSimg, BLimg, CWimg, DMimg, ETimg, KwKimg, Rockimg, SRimg, Suckerimg;

var AliceinWonderland, CharlieChcolateFactory, GameoThrones, HitchhikersGuideGalaxy,MurderOrientExpress;
var Taleof2Cities, OldManSea, TreasureIsland,WarPeace,HungryCaterpiller;
var AiWimg, CCFimg, GoTimg, HGGimg, MOEimg,T2Timg, OMSimg, TIimg,WPimg, HCimg;

var Athens,Baghdad,Canberra,Kingston,MexicoCity,Moscow,Singapore,Stockholm,Tokyo,WashingtonDC;
var Athimg,Baghimg,Canimg,Kingimg,MCimg,Mosimg,Singaimg,Stockimg,Tokimg,WDCimg;

var movieB, songB, bookB, citieB;
var mAnsbox, sAnsbox,bAnsbox,cAnsbox, mnext,snext,bnext,cnext;
var mAns,sAns,bAns,cAns;
var MovieAns,SongAns,BookAns,CitiesAns;
var movies,songs,books,cities;
var mques,sques,bques,cques;
var Home;
var score=0;
var title;
function preload(){
bg = loadImage("Emojis/background.jpg");




Athimg = loadImage("Emojis/Cities/Athens.png");
Baghimg = loadImage("Emojis/Cities/Baghdad.png");
Canimg = loadImage("Emojis/Cities/Canberra.png");
Kingimg = loadImage("Emojis/Cities/Kingston.png");
MCimg = loadImage("Emojis/Cities/Mexico City.png");
Singaimg = loadImage("Emojis/Cities/Singapore.png");
Stockimg = loadImage("Emojis/Cities/Stockholm.png");
Tokimg = loadImage("Emojis/Cities/Tokyo.png");
Mosimg = loadImage("Emojis/Cities/Moscow.png");
WDCimg = loadImage("Emojis/Cities/Washington DC.jpg");
   
DwPimg = loadImage("Emojis/movies/DevilWearsPrada.png");
Hpimg = loadImage("Emojis/movies/Harry potter.png");
PAimg = loadImage("Emojis/movies/Planet of the Apes.png");
MiBimg = loadImage("Emojis/movies/Men in Black.png");
Titaimg = loadImage("Emojis/movies/Titanic.png");
CAimg = loadImage("Emojis/movies/Charlie's Angels.png");
EsHimg = loadImage("Emojis/movies/Edward Scissor Hands.png");
PDimg = loadImage("Emojis/movies/Princess Diaries.png");
RBimg = loadImage("Emojis/movies/Runaway Bride.png");
JPimg = loadImage("Emojis/movies/Jurrasic Park.png");

Btyimg = loadImage("Emojis/Songs/Back to you.png");
BSimg = loadImage("Emojis/Songs/Blank Space.jpg");
BLimg = loadImage("Emojis/Songs/Blinding Lights.png");
CWimg = loadImage("Emojis/Songs/Cold Water.png")
DMimg = loadImage("Emojis/Songs/Dance Monkey.png");
ETimg = loadImage("Emojis/Songs/Eye of the Tiger.png");
KwKimg = loadImage("Emojis/Songs/Killem with Kindness.png");
Rockimg = loadImage("Emojis/Songs/Rockabye.png");
SRimg = loadImage("Emojis/Songs/Seven Rings.png");
Suckerimg = loadImage("Emojis/Songs/Sucker.png");

AiWimg = loadImage("Emojis/Books/Alice in Wonderland.png");
CCFimg = loadImage("Emojis/Books/Charlie and the Chocolate Factory.png");
GoTimg = loadImage("Emojis/Books/Game of Thrones.png");
HGGimg = loadImage("Emojis/Books/Hitchikers Guide to the Galaxy.png")
MOEimg = loadImage("Emojis/Books/Murder on the Orient Express.png");
T2Timg = loadImage("Emojis/Books/Tale of Two Cities.png");
OMSimg = loadImage("Emojis/Books/Old man and the sea.png");
TIimg = loadImage("Emojis/Books/Treasure Island.png");
WPimg = loadImage("Emojis/Books/War and peace.png");
HCimg = loadImage("Emojis/Books/Hungry Caterpiller.png");






}

function setup(){
    
createCanvas(displayWidth-20,displayHeight-20);


 

}

    function draw() {

 background(bg);
        
       console.log(score);
       title = createElement('h1');
       title.html("Emoji Quotient");
       title.position(displayWidth/2 - 150, 0);
        movieB= createButton("Movie");
        movieB.position(displayWidth/4, displayHeight/2-200);
        movieB.mousePressed(function () {
            movieB.hide();
            mques= createElement('h2');
            mques.html("Guess the movie name by these Emojis");
            mques.position(displayWidth/3-50,100);
            mAnsbox= createInput();
            mAnsbox.position(displayWidth/3-50,600);
            mnext = createButton("NEXT");
            mnext.position(displayWidth/2+60,600);
            mnext.mousePressed(function(){
                   
                MovieAns= mAnsbox.value();
                console.log(MovieAns);
                var rnumber = Math.round(random(1,10));
                switch(rnumber) {
                        case 1: image(DwPimg,displayWidth/2-40,displayHeight/2-30,50,50);
                        
                        if(MovieAns=== "Devil Wears Prada"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                                   
                       break;
                case 2: image(Hpimg,displayWidth/2-40,displayHeight/2-30,50,50);
                        
                         if(MovieAns=== "Harry Potter"){
                                score = score+10;
                                   }
                                   else{
                                        score = score+0;
                                }
                                
                                break;
                case 3:  image(PAimg,displayWidth/2-40,displayHeight/2-30,50,50);
                          
                           if(MovieAns=== "Planet of the Apes"){
                                score = score+10;
                                   }
                                   else{
                                        score = score+0;
                                }
                                
                        break;
                case 4: image(MiBimg,displayWidth/2-40,displayHeight/2-30,50,50);
                           
                           if(MovieAns=== "Men in Black"){
                                score = score+10;
                                   }
                                   else{
                                        score = score+0;
                                } 
                               break;
                case 5: image(Titaimg,displayWidth/2-40,displayHeight/2-30,50,50);
                         
                          if(MovieAns=== "Titanic"){
                                score = score+10;
                                   }
                                   else{
                                        score = score+0;
                                }
                                
                        break;
                case 6: image(CAimg,displayWidth/2-40,displayHeight/2-30,50,50);
                           
                           
                           if(MovieAns=== "Charlie's Angels"){
                                score = score+10;
                                   }
                                   else{
                                        score = score+0;
                                }
                               
                        break;
                case 7: image(EsHimg,displayWidth/2-40,displayHeight/2-30,50,50);
                          
                         
                          if(MovieAns=== "Edward Scissor Hands"){
                                score = score+10;
                                   }
                                   else{
                                        score = score+0;
                                }
                               
                        break;
                case 8:  image(PDimg,displayWidth/2-40,displayHeight/2-30,50,50);
                         
                         
                          if(MovieAns=== "Princess Diaries"){
                                score = score+10;
                                   }
                                   else{
                                        score = score+0;
                                }
                               
                        break;
                case 9: image(RBimg,displayWidth/2-40,displayHeight/2-30,50,50);
                          
                           
                           if(MovieAns=== "Runaway Bride"){
                                score = score+10;
                                   }
                                   else{
                                        score = score+0;
                                }
                               
                        break;
              case 10:  image(JPimg,displayWidth/2-40,displayHeight/2-30,50,50);
                         
                          if(MovieAns=== "Jurrasic Park"){
                                score = score+10;
                                   }
                                   else{
                                        score = score+0;
                                }
                               
                        break;
                          
                default: break;               }
            })

            
            var rand = Math.round(random(1,10));
            switch(rand) {
      case 1: image(DwPimg,displayWidth/2-40,displayHeight/2-30,50,50);
             
              
              if(MovieAns=== "Devil Wears Prada"){
                score = score+10;
                   }
                   else{
                           score = score+0;
                   }
                   
              
              break;
      case 2: image(Hpimg,displayWidth/2-40,displayHeight/2-30,50,50);
              
            
              if(MovieAns=== "Harry Potter"){
                score = score+10;
                   }
                   else{
                           score = score+0;
                   }
                 
              break;
      case 3:  image(PAimg,displayWidth/2-40,displayHeight/2-30,50,50);
                 
                 
                 if(MovieAns=== "Planet of the Apes"){
                        score = score+10;
                           }
                           else{
                                   score = score+0;
                           }
                         
               
              break;
      case 4: image(MiBimg,displayWidth/2-40,displayHeight/2-30,50,50);
                
                 if(MovieAns=== "Men in Black"){
                        score = score+10;
                           }
                           else{
                                   score = score+0;
                           }
                           
              break;
      case 5: image(Titaimg,displayWidth/2-40,displayHeight/2-30,50,50);
                
                
                if(MovieAns=== "Titanic"){
                        score = score+10;
                           }
                           else{
                                   score = score+0;
                           }
                          
              break;
      case 6: image(CAimg,displayWidth/2-40,displayHeight/2-30,50,50);
                 
                 
                 if(MovieAns=== "Charlie's Angels"){
                        score = score+10;
                           }
                           else{
                                   score = score+0;
                           }
                         
                 
              break;
      case 7: image(EsHimg,displayWidth/2-40,displayHeight/2-30,50,50);
                
                if(MovieAns=== "Edward Scissor Hands"){
                        score = score+10;
                           }
                           else{
                                   score = score+0;
                           }
                          
               
              break;
      case 8:  image(PDimg,displayWidth/2-40,displayHeight/2-30,50,50);
               
                if(MovieAns=== "Princess Diaries"){
                        score = score+10;
                           }
                           else{
                                   score = score+0;
                           }
                           
                
              break;
      case 9: image(RBimg,displayWidth/2-40,displayHeight/2-30,50,50);
                 
                 if(MovieAns=== "Runaway Bride"){
                        score = score+10;
                           }
                           else{
                                   score = score+0;
                           }
                          
                 
              break;
    case 10:  image(JPimg,displayWidth/2-40,displayHeight/2-30,50,50);
                
                if(MovieAns=== "Jurassic Park"){
                        score = score+10;
                           }
                           else{
                                   score = score+0;
                           }
                          
                
              break;
      default: break;
    }
})
//console.log(MovieAns);

    


    songB= createButton("Songs");
        songB.position(displayWidth/4+200, displayHeight/2-200);
        songB.mousePressed(function () {
        console.log(SongAns);
            songB.hide();
            sques= createElement('h2');
            sques.html("Guess the song title by these Emojis");
            sques.position(displayWidth/3-50,100);
            sAnsbox= createInput();
            sAnsbox.position(displayWidth/3-50,600);
            snext = createButton("NEXT");
            snext.position(displayWidth/2+60,600);
            snext.mousePressed(function(){
                   
                SongAns= sAnsbox.value();
                console.log(SongAns);
                var srnumber = Math.round(random(1,10));
                
        switch(srnumber) {
               
                        case 1:  Backtoyou= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Backtoyou.addImage("Btyimg", Btyimg);
                        Backtoyou.lifetime = 134;
                        if(SongAns=== "Back to You"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                       break;
                       case 2:  BlankSpace= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        BlankSpace.addImage("Btyimg", Btyimg);
                        BlankSpace.lifetime = 134;
                        if(SongAns=== "Blank Space"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                       break;
                       
                       case 3:  BlindingLights= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                       BlindingLights.addImage("BLimg", BLimg);
                       BlindingLights.lifetime = 134;
                       if(SongAns=== "Blinding Lights"){
                               score = score+10;
                                  }
                                  else{
                                          score = score+0;
                                  }
                      break;
                      case 4:  ColdWater= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                      ColdWater.addImage("CWimg", CWimg);
                      ColdWater.lifetime = 134;
                        if(SongAns=== "Cold Water"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                       break;
                       case 5:  DanceMonkey= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                       DanceMonkey.addImage("DMimg", DMimg);
                       DanceMonkey.lifetime = 134;
                        if(SongAns=== "Dance Monkey"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                       break;
                       case 6:  EyeoftheTiger= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                       EyeoftheTiger.addImage("ETimg", ETimg);
                       EyeoftheTiger.lifetime = 134;
                        if(SongAns=== "Eye of the Tiger"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                       break;
                       case 7: KillmwKindness= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                       KillmwKindness.addImage("KwKimg", KwKimg);
                       KillmwKindness.lifetime = 134;
                        if(SongAns=== "Kill them with Kindness"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                       break;
                       case 8:   Rockabye= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                       Rockabye.addImage("Rockimg", Rockimg);
                       Rockabye.lifetime = 134;
                        if(SongAns=== "Rockabye"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                       break;
                       case 9:  SevenRings= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                       SevenRings.addImage("SRimg", SRimg);
                       SevenRings.lifetime = 134;
                        if(SongAns=== "Seven Rings"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                       break;
                       case 10:   Sucker= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                       Sucker.addImage("Suckerimg", Suckerimg);
                       Sucker.lifetime = 134;
                   if(SongAns=== "Sucker"){
                                score = score+10;
                                   }
                                   else{
                                           score = score+0;
                                   }
                       break;
                       default:break;
                                }
                                })


         var srnumber2 = Math.round(random(1,10));
                
        switch(srnumber2) {
                                       
                       case 1:  Backtoyou= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Backtoyou.addImage("Btyimg", Btyimg);
                        Backtoyou.lifetime = 134;
                        if(SongAns=== "Back to You"){
                                 score = score+10;
                                         }
                                          else{
                                                score = score+0;
                                        }
                        break;
                        case 2:  BlankSpace= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        BlankSpace.addImage("Btyimg", Btyimg);
                        BlankSpace.lifetime = 134;
                         if(SongAns=== "Blank Space"){
                                 score = score+10;
                                          }
                                        else{
                                                score = score+0;
                                         }
                         break;
                                               
                        case 3:  BlindingLights= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        BlindingLights.addImage("BLimg", BLimg);
                        BlindingLights.lifetime = 134;
                        if(SongAns=== "Blinding Lights"){
                                score = score+10;
                                         }
                                        else{
                                  score = score+0;
                                         }
                         break;
                        case 4:  ColdWater= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        ColdWater.addImage("CWimg", CWimg);
                        ColdWater.lifetime = 134;
                        if(SongAns=== "Cold Water"){
                                score = score+10;
                                         }
                                        else{
                                                score = score+0;
                                         }
                        break;
                        case 5:  DanceMonkey= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        DanceMonkey.addImage("DMimg", DMimg);
                        DanceMonkey.lifetime = 134;
                        if(SongAns=== "Dance Monkey"){
                                score = score+10;
                                        }
                                        else{
                                                 score = score+0;
                                        }
                        break;
                        case 6:  EyeoftheTiger= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        EyeoftheTiger.addImage("ETimg", ETimg);
                        EyeoftheTiger.lifetime = 134;
                        if(SongAns=== "Eye of the Tiger"){
                                score = score+10;
                                          }
                                         else{
                                  score = score+0;
                                         }
                         break;
                        case 7: KillmwKindness= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        KillmwKindness.addImage("KwKimg", KwKimg);
                        KillmwKindness.lifetime = 134;
                        if(SongAns=== "Kill them with Kindness"){
                                score = score+10;
                                        }
                                        else{
                                                score = score+0;
                                         }
                        break;
                        case 8:   Rockabye= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Rockabye.addImage("Rockimg", Rockimg);
                        Rockabye.lifetime = 134;
                        if(SongAns=== "Rockabye"){
                                score = score+10;
                                        }
                                        else{
                                              score = score+0;
                                        }
                        break;
                        case 9:  SevenRings= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        SevenRings.addImage("SRimg", SRimg);
                        SevenRings.lifetime = 134;
                        if(SongAns=== "Seven Rings"){
                                        score = score+10;
                                         }
                                        else{
                                                score = score+0;
                                                 }
                        break;
                        case 10:   Sucker= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Sucker.addImage("Suckerimg", Suckerimg);
                        Sucker.lifetime = 134;
                        if(SongAns=== "Sucker"){
                                 score = score+10;
                                         }
                                        else{
                                                score = score+0;
                                        }
                        break;
                        default:break;
                                }
                                })
                        



                bookB= createButton("Books");
                bookB.position(displayWidth/4 + 400, displayHeight/2-200);
                bookB.mousePressed(function () {
                console.log(BookAns);
                        bookB.hide();
                        bques= createElement('h2');
                        bques.html("Guess the book title by these Emojis");
                        bques.position(displayWidth/3-50,100);
                        bAnsbox= createInput();
                        bAnsbox.position(displayWidth/3-50,600);
                        bnext = createButton("NEXT");
                        bnext.position(displayWidth/2+60,600);
                        bnext.mousePressed(function(){
                                   
                        BookAns= bAnsbox.value();
                        console.log(BookAns);
                        var brnumber = Math.round(random(1,10));
                                
                switch(brnumber) {
                        
                        case 1:  AliceinWonderland= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        AliceinWonderland.addImage("AiWimg", AiWimg);
                        if(BookAns=== "Alice in Wonderland"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 2:  CharlieChcolateFactory= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        CharlieChcolateFactory.addImage("CCFimg", CCFimg);
                        if(BookAns=== "Charlie and the Chocolate Factory"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 3:  GameoThrones= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        GameoThrones.addImage("GoTimg", GoTimg);
                        if(BookAns=== "Game of Thrones"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 4:  HitchhikersGuideGalaxy= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        HitchhikersGuideGalaxy.addImage("HGGimg", HGGimg);
                        if(BookAns=== "Hitchiker's Guide to the Galaxy"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 5:  MurderOrientExpress= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        MurderOrientExpress.addImage("MOEimg", MOEimg);
                        if(BookAns=== "Murder on the Orient Express"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 6:  Taleof2Cities= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Taleof2Cities.addImage("T2Timg", T2Timg);
                        if(BookAns=== "A Tale of Two Cities"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 7:  OldManSea= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        OldManSea.addImage("OMSimg", OMSimg);
                        if(BookAns=== "The Old Man and the Sea"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 8:  TreasureIsland= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        TreasureIsland.addImage("TIimg", TIimg);
                        if(BookAns=== "Treasure Island"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 9: WarPeace= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        WarPeace.addImage("WPimg", WPimg);
                        if(BookAns=== "War and Peace"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 10:   HungryCaterpiller= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        HungryCaterpiller.addImage("HCimg", HCimg);
                        if(BookAns=== "The Hungry Caterpillar"){
                                 score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                                        }
                                })


                        var brnumber2 = Math.round(random(1,10));
                                
                switch(brnumber2) {
                                
                        case 1:  AliceinWonderland= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        AliceinWonderland.addImage("AiWimg", AiWimg);
                        if(BookAns=== "Alice in Wonderland"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 2:  CharlieChcolateFactory= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        CharlieChcolateFactory.addImage("CCFimg", CCFimg);
                        if(BookAns=== "Charlie and the Chocolate Factory"){
                                        score = score+10;
                                         }
                                                 else{
                                        score = score+0;
                                                }
                         break;
                        case 3:  GameoThrones= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                         GameoThrones.addImage("GoTimg", GoTimg);
                         if(BookAns=== "Game of Thrones"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                 }
                        break;
                        case 4:  HitchhikersGuideGalaxy= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        HitchhikersGuideGalaxy.addImage("HGGimg", HGGimg);
                        if(BookAns=== "Hitchiker's Guide to the Galaxy"){
                                        score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 5:  MurderOrientExpress= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        MurderOrientExpress.addImage("MOEimg", MOEimg);
                        if(BookAns=== "Murder on the Orient Express"){
                                        score = score+10;
                                                }
                                                 else{
                                        score = score+0;
                                                 }
                        break;
                        case 6:  Taleof2Cities= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Taleof2Cities.addImage("T2Timg", T2Timg);
                        if(BookAns=== "A Tale of Two Cities"){
                         score = score+10;
                                         }
                                                else{
                                        score = score+0;
                                                 }
                        break;
                        case 7:  OldManSea= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        OldManSea.addImage("OMSimg", OMSimg);
                        if(BookAns=== "The Old Man and the Sea"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                 }
                        break;
                        case 8:  TreasureIsland= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        TreasureIsland.addImage("TIimg", TIimg);
                        if(BookAns=== "Treasure Island"){
                                        score = score+10;
                                                }
                                                 else{
                                        score = score+0;
                                                }
                         break;
                        case 9: WarPeace= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        WarPeace.addImage("WPimg", WPimg);
                        if(BookAns=== "War and Peace"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                        break;
                        case 10:   HungryCaterpiller= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                         HungryCaterpiller.addImage("HCimg", HCimg);
                        if(BookAns=== "The Hungry Caterpillar"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                        break;

                                        }
                                })

                citieB= createButton("City");
                citieB.position(displayWidth/4 + 600, displayHeight/2-200);
                                citieB.mousePressed(function () {
                                console.log(cityAns);
                                        citieB.hide();
                                        cques= createElement('h1');
                                        cques.html("Guess the city by these Emojis");
                                        cques.position(displayWidth/3-50,100);
                                        cAnsbox= createInput();
                                         cAnsbox.position(displayWidth/3-50,600);
                                        cnext = createButton("NEXT");
                                        cnext.position(displayWidth/2+60,600);
                                        cnext.mousePressed(function(){
                                                           
                                         cityAns= cAnsbox.value();
                                        console.log(cityAns);
                                        var crnumber = Math.round(random(1,10));
                                                        
                        switch(crnumber) {


                        case 1: Athens= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Athens.addImage("Athimg", Athimg);
                        if(cityAns=== "Athens"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                                        break;
                        case 2: Baghdad= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Baghdad.addImage("Baghimg", Baghimg);
                        if(cityAns=== "Baghdad"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                                        break;
                        case 3: Canberra= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Canberra.addImage("Canimg", Canimg);
                        if(cityAns=== "Canberra"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                                        break;
                        case 4: Kingston= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Kingston.addImage("Kingimg", Kingimg);
                        if(cityAns=== "KIngston"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                                        break;
                        case 5: MexicoCity= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        MexicoCity.addImage("MCimg", MCimg);
                        if(cityAns=== "Mexico City"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                                        break;
                        case 6: Moscow= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Moscow.addImage("Mosimg", Mosimg);
                        if(cityAns=== "Moscow"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                                        break;
                        case 7: Singapore= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Singapore.addImage("Singaimg", Singaimg);
                        if(cityAns=== "Singapore"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                                        break;
                        case 8: Stockholm= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Stockholm.addImage("Stockimg", Stockimg);
                        if(cityAns=== "Stockholm"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                                        break;
                        case 9: Tokyo= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        Tokyo.addImage("Tokimg", Tokimg);
                        if(cityAns=== "Tokyo"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                                        break;
                        case 10:WashingtonDC= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                        WashingtonDC.addImage("WDCimg", WDCimg);
                        if(cityAns=== "Washington DC"){
                                        score = score+10;
                                                }
                                                else{
                                        score = score+0;
                                                }
                             
                                                break;
                                                default:break
                        }
                })


                var crnumber2 = Math.round(random(1,10));
                                                        
                switch(crnumber2) {


                case 1: Athens= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                Athens.addImage("Athimg", Athimg);
                if(cityAns=== "Athens"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                                break;
                case 2: Baghdad= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                Baghdad.addImage("Baghimg", Baghimg);
                if(cityAns=== "Baghdad"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                                break;
                case 3: Canberra= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                Canberra.addImage("Canimg", Canimg);
                if(cityAns=== "Canberra"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                                break;
                case 4: Kingston= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                Kingston.addImage("Kingimg", Kingimg);
                if(cityAns=== "KIngston"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                                break;
                case 5: MexicoCity= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                MexicoCity.addImage("MCimg", MCimg);
                if(cityAns=== "Mexico City"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                                break;
                case 6: Moscow= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                Moscow.addImage("Mosimg", Mosimg);
                if(cityAns=== "Moscow"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                                break;
                case 7: Singapore= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                Singapore.addImage("Singaimg", Singaimg);
                if(cityAns=== "Singapore"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                                break;
                case 8: Stockholm= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                Stockholm.addImage("Stockimg", Stockimg);
                if(cityAns=== "Stockholm"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                                break;
                case 9: Tokyo= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                Tokyo.addImage("Tokimg", Tokimg);
                if(cityAns=== "Tokyo"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                                break;
                case 10:WashingtonDC= createSprite(displayWidth/2-40,displayHeight/2-30,50,50);
                WashingtonDC.addImage("WDCimg", WDCimg);
                if(cityAns=== "Washington DC"){
                                score = score+10;
                                        }
                                        else{
                                score = score+0;
                                        }
                     
                                        break;
                                        default:break

                
                }
        })

        drawSprites();
       
    }
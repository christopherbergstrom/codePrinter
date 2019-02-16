// window.onload = function(){console.log("loaded")};
window.onload = function(){codePrinter};
var i = 0;
var text = `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link href="libraries/bootstrap/bootstrap.min.css" rel="stylesheet">
    <!-- <link rel="stylesheet" href="libraries/font-awesome-4.6.3/css/font-awesome.min.css"/> -->
    <link rel="stylesheet" type="text/css" href="index.css"/>
    <link rel="icon" href="images/favicon.ico" type="image/ico" sizes="16x16"/>
    <title>Christopher Bergstrom</title>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="libraries/jquery-3.2.1.min.js" type="text/javascript" language="javascript"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script> -->
    <!-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> -->
    <script src="js/index.js"></script>
    <script src="js/scroll.js"></script>
    <script src="js/resize.js"></script>
    <script src="js/hover.js"></script>
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div id="menu">
          <a class="menuItem" id="aboutBtn">home</a>
          <a class="menuItem" id="portfolioBtn">portfolio</a>
          <a class="menuItem" href="">resume</a>
          <a class="menuItem" href="mailto:christopherrbergstrom@gmail.com">email</a>
          <a class="menuItem" href="tel:+17206464880">phone</a>
          <a class="menuItem" href="https://www.linkedin.com/in/christopherbergstrom" target="_blank">linkedin</a>
          <a class="menuItem" href="https://github.com/christopherbergstrom" target="_blank">github</a>
          <!-- <a class="menuItem icon" href="mailto:christopherrbergstrom@gmail.com"><span class="fa fa-envelope"></span></a>
          <a class="menuItem icon" href="tel:+17206464880"><span class="fa fa-phone"></span></a>
          <a class="menuItem icon" href="https://www.linkedin.com/in/christopherbergstrom" target="_blank"><span class="fa fa-linkedin"></span></a>
          <a class="menuItem icon" href="https://github.com/christopherbergstrom" target="_blank"><span class="fa fa-github"></span></a> -->
        </div>
      </div>
      <div class="row">
        <!-- <div class="col-md-3"></div> -->
        <div class="about col-md-4 col-md-offset-1">
          <img src="images/me2.png" alt="Picture of me!" class="mePic img-circle">
          <!-- <img src="images/me.png" alt="Picture of me!" class="mePic img-circle"> -->
        </div>
        <div class="about text col-md-6 col-md-offset-1">
          <span id="name">Christopher Bergstrom</span><br>
          <span id="pronunciation">KRIS-TOH-FER BURG-strum</span><br>
          <span id="noun">noun</span><br>
          <ol>
            <li class="desc">
                a web developer.
            </li>
            <li class="desc">
                one who has a passion for back end development.
            </li>
            <li class="desc">
                a person who is currently located in beautiful Southern California.
            </li>
          </ol>
        </div>
      </div>
      <div class="row">
        <div id="portfolio" class="col-md-1 col-md-offset-1">portfolio</div>
      </div>
      <!-- row 1 -->
      <div id="firstProjectRow" class="row">
        <!-- wifiby -->
        <div id="wifiby" class="col-md-4 col-md-offset-1 project background">
          <!-- <div id="wifiby" class=""></div> -->
            <!-- <a href="" class="picture" id="wifiby"><img src="images/wifiby.png"></a>
          </div> -->
        </div>
        <!-- warrior project -->
        <div id="warrior" class="col-md-4 col-md-offset-2 project background"></div>
        <!-- <div class="col-md-5 rowSpacing">
          <div class="project">
            <a href="" class="picture" id="warrior"><img src="images/warrior.png"></a>
          </div>
        </div> -->
      </div>
      <!-- row 2 -->
      <div class="row">
        <!-- maze generator -->
        <div id="maze" class="col-md-4 col-md-offset-1 project background">        
          <!-- <div class="project">
            <a href="" class="picture" id="maze"><img src="images/maze.png"></a>
          </div> -->
        </div>
        <!-- tic-tac-toe -->
        <div id="tic-tac-toe" class="col-md-4 col-md-offset-2 project background"></div>
          <!-- <div class="project">
            <a href="" class="picture" id="tic-tac-toe"><img src="images/tic-tac-toe.png"></a>
          </div> -->
        </div>
      </div>
    </div>
  </body>
</html>
`;
var speed = 50;

function codePrinter() 
{
  if (i < text.length) 
  {
    document.getElementById("printHEre").innerHTML += text.charAt(i);
    i++;
    setTimeout(codePrinter, speed);
  }
}
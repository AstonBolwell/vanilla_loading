<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>cace.xyz</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div id="first-site">
        <div class="Titel">
            <h1 class="title">SERVERNAME</h1>
            <h2 class="title-welcome">welcome</h2>
            <h3 class="title-music">Press <b>Spacebar</b> to start/stop the music</h2>
        </div>
        <div class="box-left">
            <h1 class="title-box-left">Keybinds</h1>
            <ul class="box-left-list">
                <li class="box-left-li"><a class="taste">F1</a> Phone</li>
                <li class="box-left-li"><a class="taste">F2</a> Inventory</li>
                <li class="box-left-li"><a class="taste">F3</a> Emotes</li>
                <li class="box-left-li"><a class="taste">F12</a> Screenshot</li>
                <li class="box-left-li"><a class="taste">M</a> Engine on/off</li>
                <li class="box-left-li"><a class="taste">K</a> Clothes Menu</li>
                <li class="box-left-li"><a class="taste">G</a> hands up</li>
            </ul>
        </div>
        <div class="box-right">
            <h1 class="title-box-right">Rules</h1>
            <ul class="box-right-list">
                <li class="box-right-li">
                    <a class="taste1"></a> No VDM</li>
                <li class="box-right-li">
                    <a class="taste1"></a> no rdm</li>
                <li class="box-right-li">
                    <a class="taste1"></a> more rules</li>
            </ul>
        </div>
        <audio id="leson" src="music/music.ogg" autoplay="true" hidden="true" loop="true" volume="50">
    <script>
    
        var play = false;
        var myAudio = document.getElementById("leson");
        
        myAudio.volume = 0.1;
    
        function onKeyDown(event) {
                switch (event.keyCode) {
                    case 32: //SpaceBar                    
                        if (play) {
                            myAudio.pause();
                            play = false;
                        } else {
                            myAudio.play();
                            play = true;
                        }
                        break;
                }
          return false;
        }
    
        window.addEventListener("keydown", onKeyDown, false);
    </script>

    <div class="overcast"></div>
    <div class="progress"></div>

    <style>
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            display: none;
        }
        
        #myProgress {
            width: 100%;
            background-color: grey;
        }
        
        #myBar {
            width: 1%;
            height: 30px;
            background-color: green;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="nui://game/ui/jquery.js" type="text/javascript"></script>
    <script src="https://kit.fontawesome.com/b6ec58ae28.js" crossorigin="anonymous"></script>
    <script src="script.js"></script>
</body>

</html>
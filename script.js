function play1(){
    anime.timeline({ loop: false })
    .add({duration: 2000,
        begin: function(anim) {
            $('#background').css("background-image","url(\"./images/Slide1/background.png\")");
            $('#mask').css("background-image","url(\"./images/Slide1/mask.png\")");
            $('#foreground').css("background-image","url(\"./images/Slide1/foreground.png\")");
            console.log("1")
        }
    })    
    .add({
        targets: '#curtain',
        opacity: [1, 0],
        easing: "easeInOutQuad",
        duration: 3000,
        begin: function(anim){
            anime.timeline()
            .add({
                targets: "#background,#mask",
                left: ["45%","55%"],
                duration: 15000,
                easing: "linear"
            })
            anime.timeline()
            .add({
                targets: "#foreground",
                left: ["48%","52%"],
                duration: 15000,
                easing: "linear"
            })
        }
    })
    .add({duration: 9000})
    .add({
        targets: '#curtain',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 3000
    })
    
}

function play2(){
    anime.timeline({ loop: false })
    .add({duration: 2000,
        begin: function(anim) {
            $('#background').css("background-image","url(\"./images/Slide2/background.png\")");
            $('#mask').css("background-image","url(\"./images/Slide2/mask.png\")");
            $('#foreground').css("background-image","url(\"./images/Slide2/foreground.png\")");
            console.log("2")
        }
    })    
    .add({
        targets: '#curtain',
        opacity: [1, 0],
        easing: "easeInOutQuad",
        duration: 3000,
        begin: function(anim){
            anime.timeline()
            .add({
                targets: "#background,#mask",
                left: ["45%","55%"],
                duration: 15000,
                easing: "linear"
            })
            anime.timeline()
            .add({
                targets: "#foreground",
                left: ["43%","39%"],
                duration: 15000,
                easing: "linear"
            })
        }
    })
    .add({duration: 9000})
    .add({
        targets: '#curtain',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 3000
    })
}

function play3(){
    anime.timeline({ loop: false })
    .add({duration: 2000,
        begin: function(anim) {
            $('#background').css("background-image","url(\"./images/Slide3/background.png\")");
            $('#mask').css("background-image","url(\"./images/Slide3/mask.png\")");
            $('#foreground').css("background-image","url(\"./images/Slide3/foreground.png\")");
            console.log("3")
        }
    })    
    .add({
        targets: '#curtain',
        opacity: [1, 0],
        easing: "easeInOutQuad",
        duration: 3000,
        begin: function(anim){
            anime.timeline()
            .add({
                targets: "#background,#mask",
                left: ["45%","55%"],
                duration: 15000,
                easing: "linear"
            })
            anime.timeline()
            .add({
                targets: "#foreground",
                left: ["48%","52%"],
                duration: 15000,
                easing: "linear"
            })
        }
    })
    .add({duration: 9000})
    .add({
        targets: '#curtain',
        opacity: [0, 1],
        easing: "easeInOutQuad",
        duration: 3000
    })
}

function startA(){
    setInterval(()=>{
        play1()
        setTimeout(()=>{
            play2()
        },17*1000)
        setTimeout(()=>{
            play3()
        },17*2*1000)
    },17*3*1000)
    play1()
    setTimeout(()=>{
        play2()
    },17*1000)
    setTimeout(()=>{
        play3()
    },17*2*1000)
}

function startB(){
    setInterval(()=>{
        play2()
        setTimeout(()=>{
            play3()
        },17*1000)
        setTimeout(()=>{
            play1()
        },17*2*1000)
    },17*3*1000)
    play2()
    setTimeout(()=>{
        play3()
    },17*1000)
    setTimeout(()=>{
        play1()
    },17*2*1000)
}

function startC(){
    setInterval(()=>{
        play3()
        setTimeout(()=>{
            play1()
        },17*1000)
        setTimeout(()=>{
            play2()
        },17*2*1000)
    },17*3*1000)
    play3()
    setTimeout(()=>{
        play1()
    },17*1000)
    setTimeout(()=>{
        play2()
    },17*2*1000)
}

//Choose random:

function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

switch(getRandomInt(3)){
    case 1:
        startA()
        break
    case 2:
        startB()
        break
    case 3:
        startC()
        break
}


anime.timeline({ loop: true })
    .add({targets:".spinner",duration: 1000,rotate:[360,0],easing:"linear"})
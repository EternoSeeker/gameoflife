// Animate side navbar on page load
gsap.from(".game-settings .sidenav .animate", {
    duration: 1,
    x: -500,
    ease: "power1.inOut",
    stagger: 0.1
});

// Animate the heading on page load
gsap.from(".heading", {
    duration: 1,
    y: -500,
    ease: "power1.inOut",
    stagger: 0.2,
    onComplete: function() {
        // Start the yoyo bouncing effect after the initial animation
        gsap.to(".heading", {
            duration: 1,
            y: -5,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1
        });
    }
});

// used to animate the grid
gsap.from(".grid-container", {
    duration: 1,
    x: 1000,
    ease: "power1.inOut",
    stagger: 0.2
});

function changeToGif1() {
    document.getElementById('image1').src = 'images/Moving-Glider.gif';
}
function changeToStatic1() {
    document.getElementById('image1').src = 'images/Small-Glider.png';
}

function changeToGif2() {
    document.getElementById('image2').src = 'images/Moving-Big-Glider.gif';
}
function changeToStatic2() {
    document.getElementById('image2').src = 'images/Big-Glider.png';
}

function changeToGif3() {
    document.getElementById('image3').src = 'images/Moving-Gosper-Glider-Gun.gif';
}
function changeToStatic3() {
    document.getElementById('image3').src = 'images/Gosper-Glider-Gun.png';
}

function changeToGif4() {
    document.getElementById('image4').src = 'images/Moving-Pulsar.gif';
}
function changeToStatic4() {
    document.getElementById('image4').src = 'images/Pulsar.png';
}

function changeToGif5() {
    document.getElementById('image5').src = 'images/moving-fire-circle.gif';
}
function changeToStatic5() {
    document.getElementById('image5').src = 'images/Circle-of-Fire.png';

}
function changeToGif6() {
    document.getElementById('image6').src = 'images/Moving-Quadpole.gif';
}
function changeToStatic6() {
    document.getElementById('image6').src = 'images/Quadpole.png';
}

function changeToGif7() {
    document.getElementById('image7').src = 'images/Moving-Spider.gif';
}

function changeToStatic7() {
    document.getElementById('image7').src = 'images/Spider.png';
}

function changeToGif8() {
    document.getElementById('image8').src = 'images/Moving-Spaceship.gif';
}

function changeToStatic8() {
    document.getElementById('image8').src = 'images/Spaceship.png';
}

function changeToGif9() {
    document.getElementById('image9').src = 'images/Moving-Boat-Tie.gif';
}

function changeToStatic9() {
    document.getElementById('image9').src = 'images/Boat-Tie.png';
}

function changeToGif10() {
    document.getElementById('image10').src = 'images/Moving-Pentadecathlon.gif';
}

function changeToStatic10() {
    document.getElementById('image10').src = 'images/Pentadecathlon.png';
}

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

function getRandomColor() {
    var color = ["#ffffff", "#ff0000", "#d900ff", "#00e1ff", "#00ff00", "#ffc200", "#ff7300"];
    randColor = color[Math.floor(Math.random() * color.length)];

    var tempColor = (randColor == "#ffffff") ? "#0f0f0f" : randColor;

    var accColor = document.getElementsByClassName('accent-color');
    for (var x = 0; x < accColor.length; x++) {
      accColor[x].style.color = tempColor;
    }
    var accColorBack = document.getElementsByClassName('accent-color-background');
    for (var x = 0; x < accColorBack.length; x++) {
      accColorBack[x].style.background = tempColor;
    }

    var accColorStroke = document.getElementsByClassName('accent-color-stroke');
    for (var x = 0; x < accColorStroke.length; x++) {
      accColorStroke[x].style.borderColor = tempColor;
    }

    if (randColor == "#ffffff") {
      document.getElementsByClassName('accent-color')[0].style.color = "#ffffff";
    }

    return randColor;
}

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 350,
        "density": {
          "enable": true,
          "value_area": 1500
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": getRandomColor(),
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 2.4,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#0f0f0f",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);
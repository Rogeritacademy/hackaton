var randomMovement = function() {
    return anime.random(0, 0) + 'rem'
};

var randomSpeed = function() {
  return anime.random(0, 10000) + 'rem'  
};

$(document).ready(function(){
	animation();
});

function animation() {
console.log("animation");

var infiniteLoopAlternate = anime({
        targets: '#bubble1',
        translateX: [ { value: randomMovement  }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: 600  }, { value: 400 }, { value: -200 } ],
        opacity: [ {value: 0.4 }, { value: 0.5 }],
        easing: 'linear',
        duration: randomSpeed,
        direction: 'alternate',
  		loop: true
});

var infiniteLoopAlternate2 = anime({
        targets: '#bubble2',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: 600  }, { value: 400 }, { value: -400 } ],
        opacity: [ {value: 0.4 }, { value: 0.2 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 100,
        direction: 'alternate',
  		loop: true
});

var infiniteLoopAlternate3 = anime({
        targets: '#bubble3',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: 600  }, { value: 400 }, { value: 200 } ],
        opacity: [ {value: 0.4 }, { value: 0.2 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 0,
        direction: 'alternate',
  		loop: true
});

var infiniteLoopAlternate4 = anime({
        targets: '#bubble4',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: 600  }, { value: 400 }, { value: 100 } ],
        opacity: [ {value: 0.4 }, { value: 0.2 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 300,
        direction: 'alternate',
  		loop: true
});

var infiniteLoopAlternate5 = anime({
        targets: '#bubble5',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: 600  }, { value: 400 }, { value: -100 } ],
        opacity: [ {value: 0.4 }, { value: 0.2 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 100,
        direction: 'alternate',
  		loop: true
});

var infiniteLoopAlternate6 = anime({
        targets: '#bubble6',
        translateX: [ { value: randomMovement }, { value: randomMovement }, { value: randomMovement } ],
        translateY: [ { value: 600  }, { value: 400 }, { value: 200 } ],
        opacity: [ {value: 0.4 }, { value: 0.2 }],
        easing: 'linear',
        duration: randomSpeed,
        offset: 0,
        direction: 'alternate',
  		loop: true
});

}


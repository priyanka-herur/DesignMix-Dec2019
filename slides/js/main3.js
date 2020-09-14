
//var subHeadingTopPosition = document.querySelectorAll('.sub-heading-per-page');
$('.sub-heading-per-page').each(function(){
  $(this).html($(this).text().replace(/./g, "<span class='letter'>$&</span>"));
});

var pathEls = document.querySelectorAll('.all-devices path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration:  3000,
    loop: false,
    direction: 'linear',
    easing: 'easeInOutSine',
    autoplay: true
  });
}

Reveal.addEventListener( 'slidechanged', function( event ) {
  var curSlide = event.currentSlide;
  console.log(event.indexh + ' index value is this')
  function removeAllVisibility () {
    document.querySelector('.should-we-prototype').classList.remove('visible');
    document.querySelector('.prototype-heading').classList.remove('visible');
  }
  removeAllVisibility();
  var $cornerElsParent = $(event.currentSlide);
  var $cornerEl = $cornerElsParent.find('.sub-heading-per-page-corner')
$('.main-subheading').text($cornerEl.text())
//  $cornerEl.css({top:  '-' + $cornerElsParent[0].getBoundingClientRect().top + 'px'})
//  $cornerEl.css({left:  '-' + $cornerElsParent[0].getBoundingClientRect().left + 'px'})
//  console.log('set corner el')

  switch(event.indexh) {
    case 7:
      var parentEl = document.querySelector('.prototype-heading');
//      parentEl.classList.add('visible')
//      anime({
//        targets: 'path#bg-path',
//        d: [
//          {value: 'M 570.7576 19.0606 C 603.9548 26.8007 732.7866 83.6661 791.9697 109.9697 C 832.8788 128.1515 951.1165 190.9991 967.7273 205.4243 C 1025.303 255.4243 1127.4849 323.606 1127.4849 387.606 C 1127.4849 458.606 1119.9091 489.1212 1104.7576 523.9697 C 1096.3646 543.2736 1082.0303 558.8182 1038.9395 590.2727 C 995.3236 622.1105 941.9215 660.5815 926.8181 670.5757 C 906.3939 684.0909 828.3334 726.6363 717.7273 734.2121 C 607.1212 741.7879 451.0605 709.9697 352.5757 679.6667 C 254.0909 649.3636 129.8485 620.5757 51.0606 519.0606 C 12.4338 469.2914 -15.2121 420.3333 14.697 349.3636 C 34.5031 302.3666 160.0677 282.4241 205.6061 266.0303 C 281.3636 238.7576 321.2279 219.4046 316.2122 185.7273 C 284.3939 -27.9091 451.5757 -8.7273 570.7576 19.0606 Z'},
//        ],
//        easing: 'easeInOutQuad',
//        direction: 'alternate',
//        duration: 5000,
//        loop: true
//      })
      break;
    case 0:
      var parentEl = document.querySelector('.should-we-prototype');
      parentEl.classList.add('visible')
      var shouldPrototype = document.querySelectorAll('.should-we-prototype #rotate_around_her path');
      for (var i = 0; i < shouldPrototype.length; i++) {
        var pathEl = shouldPrototype[i];
        var offset = anime.setDashoffset(pathEl);
        pathEl.setAttribute('stroke-dashoffset', offset);
        anime({
          targets: pathEl,
          strokeDashoffset: [offset, 0],
          delay: anime.random(0, 2000),
          duration:  anime.random(1000, 3000),
          loop: true,
          direction: 'linear',
          easing: 'easeInOutSine',
          autoplay: true
        });
      }
      break;
    case 8:
      var path = anime.path('.anime-path path');

      var motionPath = anime({
        targets: '.el-to-move',
        translateX: path('x'),
        translateY: path('y'),
        //  rotate: path('angle'),
        easing: 'easeInOutSine',
        duration: 3000,
        loop: true
      });
      
      anime({
        targets: '.anime-path-2 path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 3000,
        delay: function(el, i) { return i * 250 },
        direction: 'linear',
        loop: true
      });
     
    var listOfRRElements = document.querySelectorAll('.wrapper-radial-repeat .el');
      if (listOfRRElements.length <= 0) {
        const wrapperEl = document.querySelector('.wrapper-radial-repeat');
        const numberOfEls = 9;
        const duration = 1500;
        const delay = duration / (numberOfEls);

        let tl = anime.timeline({
          duration: delay,
          complete: function() { tl.restart(); }
        });

        function createEl(i) {
          let el = document.createElement('div');
          const rotate = (360 / numberOfEls) * i;
          const translateY = 100;
          el.classList.add('el');
          el.style.backgroundColor = '#DA6271';
          el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
          el.style.transformOrigin = 'center';
          tl.add({
            begin: function() {
              anime({
                targets: el,
                backgroundColor: ['#DA6271', '#F6C443'],
                rotate: [rotate + 'deg', rotate + 10 +'deg'],
                translateY: [translateY + '%', translateY + '%'],
                scale: [1, 1.15],
                easing: 'easeInOutSine',
                direction: 'alternate',
                duration: duration * .25
              });
            }
          });
          wrapperEl.appendChild(el);
        };

        for (let i = 0; i < numberOfEls; i++) createEl(i);
      }

    
    default: 
      break;
  }
  anime({
        targets: '.sub-heading-per-page .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: function(el, i) {
          return 500 + 30 * i;
        }
      });
});
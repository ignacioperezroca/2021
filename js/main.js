function getRandom(min, max){
  return Math.random() * (max - min) + min;
}

var isSafari = /constructor/i.test(window.HTMLElement);
var isFF = !!navigator.userAgent.match(/firefox/i);

if (isSafari) {
  document.getElementsByTagName('html')[0].classList.add('safari');
}

// Remove mouseover on button for demo purpose
Array.prototype.slice.call(document.querySelectorAll('.img-hero'), 0).forEach(function(bt) {
  bt.addEventListener('mouseover', function(e) {
    e.preventDefault();
  });
});

// initBt10();

// // Button 10
// function initBt10() {
//   var bt = document.querySelectorAll('#component-10')[0];
//   var btTxt = bt.querySelector('.img-hero');
//   var isPlaying = false;
//   var turbVal = { val: 0.000001 };
//   var turbValX = { val: 0.000001 };
//   var turb = document.querySelectorAll('#filter-music feTurbulence')[0];
//   var btTl = new TimelineLite({ paused: true, onUpdate: function() {
//     turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
//   }, onComplete: function() { 
//     btTl.reverse();
//   }, onReverseComplete: function() {
//     btTl.restart();
//   } });

//   btTl.to(turbValX, 0.4, { val: 0.04, ease: Power0.easeNone }, 0);
//   btTl.to(turbVal, 0.1, { val: 0.2 ,ease: Power0.easeNone }, 0);

//   bt.addEventListener('mouseover', function() {
//     if(isPlaying) {
//       btTl.pause()
//       var btTl2 = new TimelineLite({ onUpdate: function() {
//         turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
//       } });
//       btTl2.to(turbVal, 0.1, { val: 0.000001 });
//       btTl2.to(turbValX, 0.1, { val: 0.000001 }, 0);
//       isPlaying = false;
//     } else {
//       btTl.play();
//       isPlaying = true;
//     }
//   });
// }
"use strict";

const logo = document.querySelector('h1');
const ball = document.querySelector('#ball');

let activeAnimations = [];

function animate({timing, draw, duration}) {
  let start = performance.now();
  let cancelled = false;
  let frameId;

  function animateFrame(time) {
    if (cancelled) return;

    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      frameId = requestAnimationFrame(animateFrame);
    }
  }

  frameId = requestAnimationFrame(animateFrame);

  const animationAPI = {
    cancel: () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
    }
  };

  activeAnimations.push(animationAPI);
  return animationAPI;
}

function cancelAllAnimations() {
  activeAnimations.forEach(anim => anim.cancel());
  activeAnimations = [];
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}

function makeEaseInOut(timing) {
  return function(timeFraction) {
    if (timeFraction < .5)
      return timing(2 * timeFraction) / 2;
    else
      return (2 - timing(2 * (1 - timeFraction))) / 2;
  }
}

function resetElementState() {
  ball.style.display = 'none';
  ball.style.top = '0%';
  ball.style.transform = 'scale(1)';
  logo.style.color = 'black';
  logo.textContent = logo.getAttribute('data-text') || logo.textContent.trim();
}

function animateText(element, callback) {
  element.style.color = 'black';
  let text = element.textContent.trim();
  element.textContent = '';
  let to = text.length;

  let anim = animate({
    duration: 4000,
    timing: bounce,
    draw: function(progress) {
      let result = Math.ceil(to * progress);
      element.textContent = text.slice(0, result);
      if (progress === 1 && callback) callback();
    }
  });

  return anim;
}

function animateBallFalling(element, callback) {
  let start = 0;
  let to = 46;
  element.style.display = 'block';
  element.style.top = start + '%';
  element.style.transform = `scale(1)`;

  let anim = animate({
    duration: 4000,
    timing: makeEaseOut(bounce),
    draw: function(progress) {
      let result = start + (to - start) * progress;
      element.style.top = result + '%';
      if (progress === 1 && callback) callback();
    }
  });

  return anim;
}

function animateBallInflation(element, callback) {
  const startScale = 1;
  const endScale = 400;
  element.style.transform = `scale(${startScale})`;

  let anim = animate({
    duration: 1000,
    timing: (t) => t,
    draw: function(progress) {
      const scale = startScale + (endScale - startScale) * progress;
      element.style.transform = `scale(${scale})`;
      if (progress === 1 && callback) callback();
    }
  });

  return anim;
}

function animateTextBlink(element, duration = 1000, callback) {
  let anim = animate({
    duration: duration,
    timing: makeEaseInOut(bounce),
    draw: function(progress) {
      if (progress < 0.25 || progress > 0.5 || progress === 1) {
        element.style.color = 'white';
      } else {
        element.style.color = 'black';
      }
      if (progress === 1 && callback) callback();
    }
  });

  return anim;
}

document.body.addEventListener('click', () => {
  cancelAllAnimations();
  resetElementState();

  animateText(logo, () => {
    animateBallFalling(ball, () => {
      animateBallInflation(ball, () => {
        animateTextBlink(logo);
      });
    });
  });
});

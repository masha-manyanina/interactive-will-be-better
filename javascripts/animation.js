document.addEventListener('DOMContentLoaded', () => {
    unloading()
    painting()
    otherwise()
    grow()
    coloroftext()
    getresponse()
    create()
    tooltip1()
    tooltip2()
    tooltip3()
    tooltip4()
    tooltip5()
    tooltip6()
    tooltip7()
})



// --------------------------------------- получить ответы -------------------------------
function coloroftext() {
  const text = document.querySelectorAll('.response')

  text.forEach((text) => {
    text.addEventListener('click', () => {
      text.style.color = 'white'
    })
  })
}

  const phrases = [
    'ЗУММЕРЫ ДУРЕЮТ С ЭТОЙ ПРИКОРМКИ',
    'ДАВНО ПОРА В ПАРИЖ ПО СОСТОЯНИЮ ЗДОРОВЬЯ',
    'ЛУЧШЕ В ПОЕЗД, ЧЕМ ПОД ПОЕЗД',
    'ЗАГОРАЙ, А НЕ ВЫГОРАЙ'
  ]


  
function getresponse() {
  const p = document.querySelectorAll('.response')

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length)
    return phrases[randomIndex]
  }

  p.forEach((p) => {
    p.addEventListener('click', () => {
      p.textContent = getRandomPhrase()
    })
  }
    
)}






 
// --------------------------------------- разгрузить мысли -------------------------------
function unloading() {

     const images = document.querySelectorAll('.el')
     
     images.forEach((image) => {
        image.addEventListener('click', () => {
            image.style.opacity = '0'
        })
     })
}


// --------------------------------------- собрать себя заново -------------------------------
function create() {
    const images = document.querySelectorAll('.again')

    images.forEach((image) => {
        image.addEventListener('click', () => {
            if (image.style.transform = 'rotate(0deg)') {
                    image.style.transform = 'rotate(180deg)'
            } else {
                image.style.transform = 'rotate(0deg)'
            }
            }) 
    })
}



// --------------------------------------- увидеть краски жизни -------------------------------
function painting() {
    const images = document.querySelectorAll('.pink')

    images.forEach((image) => {
        image.addEventListener('click', () => {
            image.style.transform = 'scaleX(-1)'
        })
    })
}



// --------------------------------------- посмотреть на мир иначе -------------------------------
function otherwise() {
    const images = document.querySelectorAll('.otherwise')

    images.forEach((image) => {
        image.addEventListener('click', () => {
            if (image.style.transform = 'rotate(0deg)') {
                    image.style.transform = 'rotate(180deg)'
            } else {
                image.style.transform = 'rotate(0deg)'
            }
            }) 
    })
}

// --------------------------------------- взрастить уверенность в себе -------------------------------
function grow() {
    const images = document.querySelectorAll('.grow')

    images.forEach((image) => {
        image.addEventListener('click', () => {
            image.style.width = '23vw'
            image.style.height = '23vw'
        })
    })
}

// --------------------------------------- стать новой личностью -------------------------------


document.addEventListener("DOMContentLoaded", function () {
  let head1 = document.querySelector(".head1");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  head1.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      head1.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  head1.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let head2 = document.querySelector(".head2");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  head2.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      head2.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  head2.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let hand1 = document.querySelector(".hand1");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  hand1.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      hand1.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  hand1.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let hand2 = document.querySelector(".hand2");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  hand2.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      hand2.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  hand2.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let hand3 = document.querySelector(".hand3");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  hand3.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      hand3.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  hand3.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let hand4 = document.querySelector(".hand4");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  hand4.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      hand4.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  hand4.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let body1 = document.querySelector(".body1");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  body1.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      body1.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  body1.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let body2 = document.querySelector(".body2");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  body2.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      body2.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  body2.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let body3 = document.querySelector(".body3");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  body3.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      body3.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  body3.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let body4 = document.querySelector(".body4");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  body4.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      body4.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  body4.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let leg1 = document.querySelector(".leg1");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  leg1.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      leg1.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  leg1.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let leg2 = document.querySelector(".leg2");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  leg2.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      leg2.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  leg2.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let leg3 = document.querySelector(".leg3");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  leg3.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      leg3.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  leg3.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let leg4 = document.querySelector(".leg4");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  leg4.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      leg4.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  leg4.ondragstart = function () {
    return false;
  };
});




// --------------------------------------- получить ответы - цветок -------------------------------

document.addEventListener("DOMContentLoaded", function () {
  let ser1 = document.querySelector(".ser1");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  ser1.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      ser1.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  ser1.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let ser2 = document.querySelector(".ser2");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  ser2.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      ser2.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  ser2.ondragstart = function () {
    return false;
  };
});


document.addEventListener("DOMContentLoaded", function () {
  let twosloy1 = document.querySelector(".twosloy1");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  twosloy1.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      twosloy1.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  twosloy1.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let twosloy2 = document.querySelector(".twosloy2");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  twosloy2.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      twosloy2.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  twosloy2.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let twosloy3 = document.querySelector(".twosloy3");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  twosloy3.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      twosloy3.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  twosloy3.ondragstart = function () {
    return false;
  };
});


document.addEventListener("DOMContentLoaded", function () {
  let twosloy4 = document.querySelector(".twosloy4");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  twosloy4.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      twosloy4.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  twosloy4.ondragstart = function () {
    return false;
  };
});


document.addEventListener("DOMContentLoaded", function () {
  let threesloy1 = document.querySelector(".threesloy1");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  threesloy1.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      threesloy1.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  threesloy1.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let threesloy2 = document.querySelector(".threesloy2");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  threesloy2.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      threesloy2.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  threesloy2.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let threesloy3 = document.querySelector(".threesloy3");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  threesloy3.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      threesloy3.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  threesloy3.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let threesloy4 = document.querySelector(".threesloy4");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  threesloy4.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      threesloy4.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  threesloy4.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let threesloy5 = document.querySelector(".threesloy5");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  threesloy5.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      threesloy5.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  threesloy5.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let threesloy6 = document.querySelector(".threesloy6");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  threesloy6.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      threesloy6.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  threesloy6.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let threesloy7 = document.querySelector(".threesloy7");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  threesloy7.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      threesloy7.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  threesloy7.ondragstart = function () {
    return false;
  };
});

document.addEventListener("DOMContentLoaded", function () {
  let threesloy8 = document.querySelector(".threesloy8");
  let shiftX = 0,
    shiftY = 0;
  let currentX = 0,
    currentY = 0;

  threesloy8.onmousedown = function (event) {
    shiftX = event.clientX;
    shiftY = event.clientY;

    function onMouseMove(event) {
      let deltaX = event.clientX - shiftX;
      let deltaY = event.clientY - shiftY;

      currentX += deltaX;
      currentY += deltaY;

      threesloy8.style.transform = `translate(${currentX}px, ${currentY}px)`;

      shiftX = event.clientX;
      shiftY = event.clientY;
    }

    function onMouseUp() {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    }

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  threesloy8.ondragstart = function () {
    return false;
  };
});

// --------------------------------------- тултипы -------------------------------

function tooltip1() {
  const buttons = document.querySelectorAll('.help-button')
  const helpText1 = document.querySelector('.help1')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      helpText1.style.display = 'block'

      if (helpText1.style.display = 'block') {
        button.addEventListener('click', () => {
      helpText1.style.display = 'none'

        })
      }
    })
  })
}

function tooltip2() {
  const buttons = document.querySelectorAll('.help-button2')
  const helpText1 = document.querySelector('.help2')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      helpText1.style.display = 'block'

      if (helpText1.style.display = 'block') {
        button.addEventListener('click', () => {
      helpText1.style.display = 'none'

        })
      }
    })
  })
}


function tooltip3() {
  const buttons = document.querySelectorAll('.help-button3')
  const helpText1 = document.querySelector('.help3')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      helpText1.style.display = 'block'

      if (helpText1.style.display = 'block') {
        button.addEventListener('click', () => {
      helpText1.style.display = 'none'

        })
      }
    })
  })
}

function tooltip4() {
  const buttons = document.querySelectorAll('.help-button4')
  const helpText1 = document.querySelector('.help4')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      helpText1.style.display = 'block'

      if (helpText1.style.display = 'block') {
        button.addEventListener('click', () => {
      helpText1.style.display = 'none'

        })
      }
    })
  })
}

function tooltip5() {
  const buttons = document.querySelectorAll('.help-button5')
  const helpText1 = document.querySelector('.help5')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      helpText1.style.display = 'block'

      if (helpText1.style.display = 'block') {
        button.addEventListener('click', () => {
      helpText1.style.display = 'none'

        })
      }
    })
  })
}

function tooltip6() {
  const buttons = document.querySelectorAll('.help-button6')
  const helpText1 = document.querySelector('.help6')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      helpText1.style.display = 'block'

      if (helpText1.style.display = 'block') {
        button.addEventListener('click', () => {
      helpText1.style.display = 'none'

        })
      }
    })
  })
}

function tooltip7() {
  const buttons = document.querySelectorAll('.help-button7')
  const helpText1 = document.querySelector('.help7')

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      helpText1.style.display = 'block'

      if (helpText1.style.display = 'block') {
        button.addEventListener('click', () => {
      helpText1.style.display = 'none'

        })
      }
    })
  })
}
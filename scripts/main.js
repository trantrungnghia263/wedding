document.addEventListener('DOMContentLoaded', () => {
  const dayElement = document.querySelector('.section__day');
  const hourElement = document.querySelector('.section__hour');
  const minuteElement = document.querySelector('.section__minus');
  const secondElement = document.querySelector('.section__second');

  //coundown
  function countDownDate () {
    const targetDate = new Date('2025-03-09');
    console.log(targetDate);

    const countDown = setInterval(function () {
      const currentDate = new Date();
      console.log(currentDate);
      const temp = targetDate - currentDate;
      console.log(temp);

      if (temp <= 0) {
        clearInterval(countDown);
      }else {
        const days = Math.floor(temp / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (temp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor((temp % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((temp % (1000 * 60)) / 1000);

          dayElement.innerHTML = days;
          hourElement.innerHTML = hours;
          minuteElement.innerHTML = minutes;
          secondElement.innerHTML = seconds;
      }
    }, 1000)
  }
  countDownDate();

  //parallax
  const parallaxBgEls = document.querySelectorAll(".section__bg-parallax");
  parallaxBgEls.forEach(parallaxBg => {
    let latestScrollY = 0;
    let ticking = false;

    function onScroll() {
      latestScrollY = window.pageYOffset;
      requestTick();
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }

    function updateParallax() {
      parallaxBg.style.transform = `translateY(${latestScrollY * 0.5}px)`;
      ticking = false;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
  });

  //audio
  document.addEventListener('click', musicPlay);
  function musicPlay() {
    document.getElementById('audio').play();
    document.removeEventListener('click', musicPlay);
  }
})
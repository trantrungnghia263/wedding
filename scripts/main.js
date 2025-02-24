document.addEventListener('DOMContentLoaded', () => {
  const dayElement = document.querySelector('.section__day');
  const hourElement = document.querySelector('.section__hour');
  const minuteElement = document.querySelector('.section__minus');
  const secondElement = document.querySelector('.section__second');

  //coundown
  function countDownDate () {
    const targetDate = new Date('2025-03-09');
    // console.log(targetDate);

    const countDown = setInterval(function () {
      const currentDate = new Date();
      // console.log(currentDate);
      const temp = targetDate - currentDate;
      // console.log(temp);

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
  const parallaxEls = document.querySelectorAll(".section__bg-parallax");
  window.addEventListener("scroll", function () {
    let offset = window.pageYOffset;
  
    parallaxEls.forEach(parallax => {
      let speed = 0.7;
      let rect = parallax.getBoundingClientRect(); // Lấy vị trí của phần tử
      let elementOffset = rect.top + window.scrollY; // Vị trí thực tế trên trang
      let distance = offset - elementOffset; // Tính khoảng cách so với vị trí ban đầu
  
      parallax.style.backgroundPositionY = distance * speed + "px";
    });
  });
  
  //audio
  document.addEventListener('click', musicPlay);
  function musicPlay() {
    document.getElementById('audio').play();
    document.removeEventListener('click', musicPlay);
  }

  //send to email
  emailjs.init("myTf2EtOyanMtwXCK");

  function clearInput() {
    document.getElementById("name").value = "";
    document.getElementById("advance").value = "Bạn sẽ tham gia chứ ?";
    document.getElementById("quantity").value = "Số lượng";
    document.getElementById("note").value = "";
  }

  document.querySelector(".form").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      advance: document.getElementById("advance").value,
      quantity: document.getElementById("quantity").value,
      note: document.getElementById("note").value
    };

    emailjs.send("service_ahi7cim", "template_pkc7udv", formData)
    .then(function (response) {
      clearInput();
      alert("Gửi email thành công!");
    }, function (error) {
      alert("Gửi email thất bại! " + error);
    });
  });
})

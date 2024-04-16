var i = 0;
var txt1 = "             <Hey Dear,<<  You have received message from Pratik....  <<Please check the Inbox ! 👉 |";
var speed = 55;

function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == '<')
      document.getElementById("text1").innerHTML += '</br>'
    else if (txt1.charAt(i) == '>')
      document.getElementById("text1").innerHTML = ''
    else if (txt1.charAt(i) == '|') {
      let msgEnvelope = document.querySelector("#msgEnvelope");
      msgEnvelope.style.display= "inline-block";
    }
    else
      document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

(
  async function () {
    await typeWriter();
  }
)();


  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });
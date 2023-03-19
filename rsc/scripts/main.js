function handleHeaderOnScroll() {
    const header = document.querySelector("header");
    let prevScrollPos = window.scrollY;
    let currentScrollPos = window.scrollY;
    window.onscroll = () => {
      currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        header.style.top = "0";
      } else {
        header.style.top = "-60px";
      }
      prevScrollPos = currentScrollPos;
    }
    
}

function showCurrentYear() {
    const yearElement = document.getElementById('year');
    yearElement.innerHTML= new Date().getFullYear();
}

handleHeaderOnScroll();
showCurrentYear();

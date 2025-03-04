

/*button*/
document.addEventListener("DOMContentLoaded", function() {
  const scrollToTopBtn = document.createElement("button");
  scrollToTopBtn.textContent = "↑ Scroll to Top";
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.bottom = "20px";
  scrollToTopBtn.style.right = "20px";
  scrollToTopBtn.style.padding = "10px 20px";
  scrollToTopBtn.style.fontSize = "16px";
  document.body.appendChild(scrollToTopBtn);

  scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});


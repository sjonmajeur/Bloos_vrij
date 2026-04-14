document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /*
    Placeholder voor later.
    Zodra we weten hoe je het programma verkoopt, zetten we hieronder
    de echte betaal- of productlink neer.
  */
  const premiumButtons = document.querySelectorAll("[data-pay-link]");
  const payLink = "#";

  premiumButtons.forEach((button) => {
    button.setAttribute("href", payLink);
  });

  /*
    Kleine verbetering voor anchor-links in de sticky header:
    we scrollen iets netter naar secties.
  */
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const targetEl = document.querySelector(targetId);

      if (!targetEl) {
        return;
      }

      event.preventDefault();

      const headerOffset = 96;
      const elementPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
});
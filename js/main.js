"use strict";


/* ========================================
   MOBILE MENU
======================================== */

const menuButton =
  document.getElementById("menuButton");

const mobileMenu =
  document.getElementById("mobileMenu");


if (
  menuButton &&
  mobileMenu
) {

  menuButton.addEventListener(
    "click",
    () => {

      const isOpen =
        menuButton.getAttribute(
          "aria-expanded"
        ) === "true";


      menuButton.setAttribute(
        "aria-expanded",
        String(!isOpen)
      );


      menuButton.classList.toggle(
        "is-open",
        !isOpen
      );


      mobileMenu.hidden =
        isOpen;


      document.body.classList.toggle(
        "menu-open",
        !isOpen
      );

    }
  );


  const menuLinks =
    mobileMenu.querySelectorAll("a");


  menuLinks.forEach(
    (link) => {

      link.addEventListener(
        "click",
        () => {

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );


          menuButton.classList.remove(
            "is-open"
          );


          mobileMenu.hidden =
            true;


          document.body.classList.remove(
            "menu-open"
          );

        }
      );

    }
  );

}


/* ========================================
   SCROLL REVEAL
======================================== */

const revealElements =
  document.querySelectorAll(
    ".reveal"
  );


const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


if (reduceMotion) {

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "is-visible"
      );

    }
  );

}

else if (
  "IntersectionObserver" in window
) {

  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "is-visible"
              );


              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },

      {
        threshold: 0.12,

        rootMargin:
          "0px 0px -40px 0px"
      }

    );


  revealElements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}

else {

  revealElements.forEach(
    (element) => {

      element.classList.add(
        "is-visible"
      );

    }
  );

}

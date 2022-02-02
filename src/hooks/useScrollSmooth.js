import { useLayoutEffect } from "react";

const useScrollSmooth = () => {
  useLayoutEffect(() => {
    const anchorBtns = document.querySelectorAll("a[href^='#']");

    anchorBtns.forEach((anchorBtn) => {
      anchorBtn.addEventListener("click", function (btn) {
        btn.preventDefault();

        if (
          document.getElementById(this.getAttribute("href").replace("#", ""))
        ) {
          document
            .getElementById(this.getAttribute("href").replace("#", ""))
            .scrollIntoView({
              behavior: "smooth",
            });
        }
      });
    });
  });

  return () => {};
};

export default useScrollSmooth;

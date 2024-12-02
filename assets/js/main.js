// Select the marquee containers
const marqueeContainers = document.querySelectorAll('.testimonial-cards');

marqueeContainers.forEach((container) => {
  const childNodes = Array.from(container.children);

  // Duplicate the nodes and append them
  childNodes.forEach((node) => {
    const clone = node.cloneNode(true);
    container.appendChild(clone);
  });
});


// accordion functionalities

// Get all accordion buttons and items
const accordionButtons = document.getElementsByClassName("accordion-button");

// Loop through all accordion buttons
for (let i = 0; i < accordionButtons.length; i++) {
  // Add event listener for button click
  accordionButtons[i].addEventListener("click", function (event) {
    const icon = event.currentTarget.querySelector(".plus-icon");

    // Toggle between plus and minus icon
    if (icon.src.includes("plusicon.svg")) {
      icon.src = "./assets/images/icons/minusicon.svg";
    } else {
      icon.src = "./assets/images/icons/plusicon.svg";
    }
  });
}

document.querySelectorAll(".accordion-collapse").forEach(function (collapse) {
  collapse.addEventListener("shown.bs.collapse", function () {
    let button = this.previousElementSibling.querySelector(".accordion-button");
    if (button) {
      let icon = button.querySelector(".plus-icon");
      if (icon) {
        icon.src = "./assets/images/icons/minus-icon.svg";
      }
    }
  });

  collapse.addEventListener("hidden.bs.collapse", function () {
    const button =
      this.previousElementSibling.querySelector(".accordion-button");
    if (button) {
      const icon = button.querySelector(".plus-icon");
      if (icon) {
        icon.src = "./assets/images/icons/plus-icon.svg";
      }
    }
  });
});

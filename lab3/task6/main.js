"use strict"

const togglers = document.querySelectorAll(".caret");
togglers.forEach(toggler => {
    toggler.addEventListener("click", function() {
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
});
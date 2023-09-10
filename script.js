const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const minicircle = document.querySelector("#minicircle");

function circleMouse() {
    const minicircle = document.querySelector("#minicircle");
    
    window.addEventListener("mousemove", function (details) {
        const mouseX = details.clientX;
        const mouseY = details.clientY;

        minicircle.style.left = mouseX + "px";
        minicircle.style.top = mouseY + "px";
    });

    window.addEventListener("mouseout", function () {
        minicircle.style.display = "none";
    });

    window.addEventListener("mouseover", function () {
        minicircle.style.display = "block";
    });
}

  

circleMouse();
  
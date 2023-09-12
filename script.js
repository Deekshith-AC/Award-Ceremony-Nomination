document.addEventListener("DOMContentLoaded", function() 
{
    const dateDisplay = document.getElementById("extra5");

    function update() {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + 5);
        const options = { day: "numeric", month: "short", year: "numeric" };
        const formattedDate = currentDate.toLocaleDateString(undefined, options);
        dateDisplay.textContent = "From " + formattedDate;
    }

    update();

    setInterval(update, 86400000);
});
const scroll = new LocomotiveScroll(
{
    el: document.querySelector('#main'),
    smooth: true
});

const minicircle = document.querySelector("#minicircle");
function circleMouse() 
{
    const minicircle = document.querySelector("#minicircle");
    
    window.addEventListener("mousemove", function(details) 
    {
        details.preventDefault();
        const r = details.clientX;
        const s = details.clientY;

        minicircle.style.left = r + "px";
        minicircle.style.top = s + "px";
    });

    window.addEventListener("mouseout", function () {
        minicircle.style.display = "none";
    });

    window.addEventListener("mouseover", function () {
        minicircle.style.display = "block";
    });
}
circleMouse();

function firstpageAnime()
{
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: "-10",
        duration: 2,
        opacity: 0,
        ease: Expo.easeInOut
    });
}

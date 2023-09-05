document.addEventListener("DOMContentLoaded", function() {
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

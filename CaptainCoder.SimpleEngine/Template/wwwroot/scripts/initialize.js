let Width = 0;
let Height = 0;

function resizeCanvas() {
    const canvas = document.getElementById("main-canvas");
    const content = document.getElementById("content");
    const bounds = content.getBoundingClientRect();
    Width = canvas.width = bounds.width; //document.width is obsolete
    Height = canvas.height = bounds.height; //document.height is obsolete
    console.debug("Resizing...");
}

window.addEventListener("resize", () => 
{
    const canvas = document.getElementById("main-canvas");
    const content = document.getElementById("content");
    if (!canvas) { return; }
    if (!content) { return; }
    resizeCanvas();
});
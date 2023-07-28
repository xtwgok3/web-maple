/*click normal en body */
document.addEventListener("DOMContentLoaded", function () {
    let cursorState = 1;
    let cursorChanged = false; // Variable para controlar si el cursor cambió al hacer clic

    // Función para cambiar el cursor al hacer clic en el cuerpo
    function changeCursorOnClick() {
        document.body.style.cursor = "url(cursorClick.png), auto";
        cursorChanged = true;
    }

    // Función para cambiar el cursor al soltar el clic en el cuerpo
    function resetCursorOnRelease() {
        document.body.style.cursor = "url(cursor0.png), auto";
        cursorChanged = true;
    }

    // Agregar el evento mousedown al cuerpo para cambiar el cursor al hacer clic
    document.body.addEventListener("mousedown", changeCursorOnClick);

    // Agregar el evento mouseup al cuerpo para cambiar el cursor al soltar el clic
    document.body.addEventListener("mouseup", resetCursorOnRelease);

});

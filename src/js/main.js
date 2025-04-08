import "../scss/style.scss";


if (typeof switchThemeColor === "function") {
  switchThemeColor();
} else {
  console.warn("Функция switchThemeColor не найдена!");
}
document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", (event) => {
        const eyes = document.querySelectorAll(".eye");
        eyes.forEach((eye) => {
            const pupil = eye.querySelector(".pupil");
            const eyeRect = eye.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            const deltaX = event.clientX - eyeCenterX;
            const deltaY = event.clientY - eyeCenterY;
            const angle = Math.atan2(deltaY, deltaX);
            const maxDistance = eyeRect.width / 4;
            const pupilX = Math.cos(angle) * maxDistance;
            const pupilY = Math.sin(angle) * maxDistance;
            pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });
    });
});
(() => {
    const $counter = document.getElementById("js-counter");

    const clickHandler = () => {
        $counter.textContent = 0;
        alert("チッ");
    };

    const resetButton = document.getElementById("js-reset-button");
    resetButton.addEventListener("click", clickHandler);

    const getRandomPosition = (element) => {
        const parent = element.parentElement;
        const parentRect = parent.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const maxX = parentRect.width - elementRect.width;
        const maxY = parentRect.height - elementRect.height;
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        return { x: randomX, y: randomY };
    };

    const moveButton = () => {
        const position = getRandomPosition(resetButton);
        resetButton.style.left = `${position.x}px`;
        resetButton.style.top = `${position.y}px`;
    };

    resetButton.addEventListener("mouseover", moveButton);

})();


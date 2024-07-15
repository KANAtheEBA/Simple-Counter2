(() => {
    const $counter = document.getElementById("js-counter");

    const info = [
        "チッ",
        "はいはい、強い強い(笑)",
        "まだやってるんですか？"
    ];
    let infoIndex = 0;

    const clickHandler = () => {
        $counter.textContent = 0;
        alert(info[infoIndex]);
        infoIndex = (infoIndex + 1) % info.length;
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
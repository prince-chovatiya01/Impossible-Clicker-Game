const button = document.getElementById('clickButton');

button.addEventListener('mouseover', () => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Random position calculations
    const randomX = Math.random() * (viewportWidth - button.offsetWidth);
    const randomY = Math.random() * (viewportHeight - button.offsetHeight);

    // Set new button position
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
});

button.addEventListener('click', () => {
    alert("Congratulations! You clicked the button!");
});

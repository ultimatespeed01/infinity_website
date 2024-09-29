window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    
    // Delay the hiding of the loader by 3 seconds (3000 milliseconds)
    setTimeout(() => {
        loader.classList.add("loader--hidden");
    }, 4000); // 3000 milliseconds = 3 seconds

    // Once the transition ends, remove the loader from the DOM
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

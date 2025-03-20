document.querySelectorAll(".anime-card").forEach((card) => {
    card.addEventListener("mouseenter", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("anime-overlay");
        overlay.style.backgroundImage = `url(${card.dataset.bg})`;
        overlay.style.backgroundSize = "cover";
        overlay.style.backgroundPosition = "center";
        overlay.style.position = "absolute";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.opacity = "1";
        overlay.style.zIndex = "1";
        overlay.style.pointerEvents = "none";
        card.style.position = "relative";
        card.appendChild(overlay);
    });

    card.addEventListener("mouseleave", () => {
        const overlay = card.querySelector(".anime-overlay");
        if (overlay) {
            overlay.remove();
        }
    });

    card.addEventListener("click", (event) => {
        event.preventDefault();  // Ensure the redirect doesn't happen instantly

        // Identify anime title for unique effects
        const title = card.querySelector("h2").innerText;
        if (title.includes("Attack on Titan")) {
            console.log("Attack on Titan clicked, applying screen shake!");
            document.body.classList.add("screen-shake");
            setTimeout(() => {
                document.body.classList.remove("screen-shake");
            }, 1500); // Animation duration
        } else if (title.includes("Dragon Ball")) {
            showDragonBallEffect();
        } else if (title.includes("Demon Slayer")) {
            showSwordFightEffect();
        } else if (title.includes("Death Note")) {
            showBookOpeningEffect();
        } else if (title.includes("One Piece")) {
            showFiercePunchEffect();
        }

        // Wait for animation to finish, then redirect
        setTimeout(() => {
            window.location.href = card.querySelector("a").href;
        }, 1500); // Delay redirect to match animation duration
    });
});

// Attack on Titan: Screen Shake Effect
const style = document.createElement("style");
style.innerHTML = `
    @keyframes shake {
        0%, 100% { transform: translate(0, 0); }
        25% { transform: translate(-10px, 5px); }
        50% { transform: translate(10px, -5px); }
        75% { transform: translate(-5px, 10px); }
    }
    .screen-shake { 
        animation: shake 0.2s linear infinite; 
    }

   @keyframes spin-expand {
    0% {
        transform: rotate(0deg) scale(1);
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
    }
    100% {
        transform: rotate(360deg) scale(15);
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
}

.dragon-ball-effect {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    background: url('dragonball.png') no-repeat center/contain;
    animation: spin-expand 3s ease-in-out forwards;
    pointer-events: none;
    z-index: 9999; /* Ensure the effect is on top */
}

    @keyframes left-slash-effect {
        0% {
            opacity: 0;
            transform: translateX(-100%) scale(1.2) rotate(-30deg);
        }
        50% {
            opacity: 1;
            transform: translateX(0) scale(1.5) rotate(-10deg);
        }
        100% {
            opacity: 0;
            transform: translateX(100%) scale(1.8) rotate(0deg);
        }
    }
    @keyframes right-slash-effect {
        0% {
            opacity: 0;
            transform: translateX(100%) scale(1.2) rotate(30deg);
        }
        50% {
            opacity: 1;
            transform: translateX(0) scale(1.5) rotate(10deg);
        }
        100% {
            opacity: 0;
            transform: translateX(-100%) scale(1.8) rotate(0deg);
        }
    }
    .sword-slash-effect {
        position: fixed;
        top: 50%;
        width: 100vw;
        height: 100vh;
        background: radial-gradient(circle, rgba(255,69,0,0.9), rgba(255,0,0,0.8), rgba(255,165,0,0.6));
        clip-path: polygon(0% 30%, 100% 0%, 100% 70%, 0% 100%);
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 20px rgba(255, 69, 0, 0.8);
    }
    .left-slash {
        animation: left-slash-effect 1.5s ease-in-out;
    }
    .right-slash {
        animation: right-slash-effect 1.5s ease-in-out;
    }
    .blackout-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: black;
        opacity: 0.9;
        z-index: 9998;
        animation: flicker 0.5s ease-in-out;
    }
    @keyframes flicker {
        0%, 100% { opacity: 0.9; }
        50% { opacity: 0.6; }
    }
    @keyframes impact-burst {
        0% {
            opacity: 1;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1.5);
        }
        100% {
            opacity: 0;
            transform: scale(2);
        }
    }
    .impact-burst {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 200px;
        background: radial-gradient(circle, rgba(255,255,0,1), rgba(255,165,0,0.8), rgba(255,0,0,0.5));
        border-radius: 50%;
        animation: impact-burst 0.5s ease-out;
        pointer-events: none;
        z-index: 10000;
    }


    .book-opening-effect {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 250px;
        background: url('deathnote.jpeg') no-repeat center/contain;
        animation: book-open 3s ease-in-out;
        pointer-events: none;
    }

    @keyframes punch-effect {
        from { transform: scale(0.5); opacity: 0; }
        to { transform: scale(1.5); opacity: 1; }
    }
    .fierce-punch-effect {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 250px;
        height: 250px;
        background: url('punch.png') no-repeat center/contain;
        animation: punch-effect 0.3s ease-in-out;
        pointer-events: none;
    }
`;
document.head.appendChild(style);


// Dragon Ball: Spinning Ball Effect
function showDragonBallEffect() {
    const ball = document.createElement("div");
    ball.classList.add("dragon-ball-effect");
    document.body.appendChild(ball);

    // Optional: Add a timeout for the duration of the animation
    setTimeout(() => ball.remove(), 2000);  // This will remove the ball after 2 seconds
}

// Demon Slayer: Sword Fighting Animation
function showSwordFightEffect() {
    const overlay = document.createElement("div");
    overlay.classList.add("blackout-overlay");
    document.body.appendChild(overlay);
    
    const leftSlash = document.createElement("div");
    leftSlash.classList.add("sword-slash-effect", "left-slash");
    document.body.appendChild(leftSlash);
    
    const rightSlash = document.createElement("div");
    rightSlash.classList.add("sword-slash-effect", "right-slash");
    document.body.appendChild(rightSlash);
    
    const impactBurst = document.createElement("div");
    impactBurst.classList.add("impact-burst");
    document.body.appendChild(impactBurst);
    
    setTimeout(() => {
        leftSlash.remove();
        rightSlash.remove();
        impactBurst.remove();
        overlay.remove();
    }, 2000); // Effect lasts longer
}

// Death Note: Book Opening Effect
function showBookOpeningEffect() {
    const book = document.createElement("div");
    book.classList.add("book-opening-effect");
    document.body.appendChild(book);
    setTimeout(() => book.remove(), 3000);
}

// One Punch Man: Fierce Punch Effect
function showFiercePunchEffect() {
    const punch = document.createElement("div");
    punch.classList.add("fierce-punch-effect");
    document.body.appendChild(punch);
    setTimeout(() => punch.remove(), 300);
}

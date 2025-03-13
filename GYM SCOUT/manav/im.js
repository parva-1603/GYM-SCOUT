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
        event.preventDefault();

        // Identify anime title for unique effects
        const title = card.querySelector("h2").innerText;
        if (title.includes("Attack on Titan")) {
            document.body.classList.add("screen-shake");
            setTimeout(() => document.body.classList.remove("screen-shake"), 1500);
        } else if (title.includes("Dragon Ball")) {
            showShenronEffect();
        } else if (title.includes("Demon Slayer")) {
            showSwordFightEffect();
        } else if (title.includes("Death Note")) {
            showBookOpeningEffect();
        } else if (title.includes("One Punch Man")) {
            showFiercePunchEffect();
        }

        // Wait for animation to finish, then redirect
        setTimeout(() => {
            window.location.href = card.querySelector("a").href;
        }, 1500);
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
    .screen-shake { animation: shake 0.2s linear infinite; }

    @keyframes shenron-talk {
        0%, 100% { transform: translateY(0) scale(1); opacity: 1; }
        50% { transform: translateY(-5px) scale(1.05); opacity: 0.9; }
    }
     .shenron-effect {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 300px;
        height: 300px;
        background: url('shenron.png') no-repeat center/contain;
        animation: shenron-talk 1.5s ease-in-out infinite;
        pointer-events: none;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    .dragon-ball-effect {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 100px;
        background: url('dragonball.png') no-repeat center/contain;
        animation: spin 1s linear infinite;
        pointer-events: none;
    }
    @keyframes sword-slash {
        from { transform: translateX(-100px) rotate(-45deg); opacity: 0; }
        to { transform: translateX(100px) rotate(45deg); opacity: 1; }
    }
    .sword-fight-effect {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 100px;
        height: 300px;
        background: url('sword.png') no-repeat center/contain;
        animation: sword-slash 0.5s linear;
        pointer-events: none;
    }

    @keyframes book-open {
        from { transform: scale(0.5); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    .book-opening-effect {
        position: fixed;
        top: 50%;
        left: 50%;
        width: 200px;
        height: 250px;
        background: url('deathnote.png') no-repeat center/contain;
        animation: book-open 1s ease-in-out;
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


// Demon Slayer: Sword Fighting Animation
function showSwordFightEffect() {
    const sword = document.createElement("div");
    sword.classList.add("sword-fight-effect");
    document.body.appendChild(sword);
    setTimeout(() => sword.remove(), 500);
}

// Death Note: Book Opening Effect
function showBookOpeningEffect() {
    const book = document.createElement("div");
    book.classList.add("book-opening-effect");
    document.body.appendChild(book);
    setTimeout(() => book.remove(), 1000);
}

// One Punch Man: Fierce Punch Effect
function showFiercePunchEffect() {
    const punch = document.createElement("div");
    punch.classList.add("fierce-punch-effect");
    document.body.appendChild(punch);
    setTimeout(() => punch.remove(), 300);
}

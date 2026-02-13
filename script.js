function nextPage(pageNum) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + pageNum).classList.add('active');
}

function hideNo() {
    const noBtn = document.getElementById('no-btn');
    noBtn.style.opacity = '0';
    setTimeout(() => { noBtn.style.display = 'none'; }, 300);
}

// Falling hearts effect for Page 1 & 4
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.className = 'falling-heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 400);

// Add Falling Heart CSS via JS
const style = document.createElement('style');
style.innerHTML = `
    .falling-heart {
        position: fixed; top: -20px; font-size: 20px;
        z-index: -1; animation: fall linear forwards;
    }
    @keyframes fall { to { transform: translateY(100vh) rotate(360deg); } }
`;
document.head.appendChild(style);
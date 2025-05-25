document.getElementById('startBtn').addEventListener('click', function() {
    const loading = document.getElementById('loading');
    loading.style.display = 'flex';
    
    // Анимация загрузки на 3 секунды
    setTimeout(() => {
        window.location.href = 'game.html';
    }, 3000);
});
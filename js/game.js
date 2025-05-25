document.addEventListener('DOMContentLoaded', function() {
    const gameGrid = document.getElementById('gameGrid');
    const trapsCount = document.getElementById('trapsCount');
    const decreaseTraps = document.getElementById('decreaseTraps');
    const increaseTraps = document.getElementById('increaseTraps');
    const trapOptions = document.querySelectorAll('.trap-option');
    const predictBtn = document.getElementById('predictBtn');
    
    let traps = 1;
    const starsCount = { 1: 10, 3: 5, 5: 4, 7: 3 };
    
    function createGameGrid() {
        gameGrid.innerHTML = '';
        for (let i = 0; i < 25; i++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.dataset.index = i;
            gameGrid.appendChild(cell);
        }
    }
    
    function showStars() {
        const cells = document.querySelectorAll('.cell');
        const count = starsCount[traps];
        const stars = [];
        
        while (stars.length < count) {
            const randomIndex = Math.floor(Math.random() * 25);
            if (!stars.includes(randomIndex)) {
                stars.push(randomIndex);
            }
        }
        
        stars.forEach((index, i) => {
            setTimeout(() => {
                cells[index].classList.add('star');
                cells[index].innerHTML = '★';
            }, i * 50);
        });
    }
    
    function updateTraps() {
        trapsCount.textContent = traps;
        trapOptions.forEach(option => {
            option.classList.toggle('active', parseInt(option.dataset.traps) === traps);
        });
    }
    
    decreaseTraps.addEventListener('click', () => {
        if (traps > 1) {
            traps = traps === 3 ? 1 : traps - 2;
            updateTraps();
        }
    });
    
    increaseTraps.addEventListener('click', () => {
        if (traps < 7) {
            traps = traps === 5 ? 7 : traps + 2;
            updateTraps();
        }
    });
    
    trapOptions.forEach(option => {
        option.addEventListener('click', () => {
            traps = parseInt(option.dataset.traps);
            updateTraps();
        });
    });
    
    predictBtn.addEventListener('click', () => {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.classList.remove('star');
            cell.textContent = '';
        });
        
        showStars();
    });
    
    createGameGrid();
});
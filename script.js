const librasAlphabet = {
    'A': `<g><rect x="35" y="45" width="30" height="40" rx="10"/><circle cx="45" cy="55" r="5"/><path d="M 65 50 Q 80 55 75 70"/></g>`,
    'B': `<g><rect x="35" y="35" width="30" height="50" rx="5"/><line x1="42" y1="35" x2="42" y2="85"/><line x1="50" y1="35" x2="50" y2="85"/><line x1="58" y1="35" x2="58" y2="85"/><path d="M 35 65 Q 25 70 35 75"/></g>`,
    'C': `<g><path d="M 65 30 C 25 30 25 80 65 80" stroke-width="6"/></g>`,
    'D': `<g><rect x="42" y="50" width="25" height="35" rx="5"/><line x1="42" y1="20" x2="42" y2="85"/><path d="M 42 60 Q 30 65 42 75"/></g>`,
    'E': `<g><rect x="35" y="45" width="30" height="40" rx="5"/><line x1="35" y1="55" x2="65" y2="55"/><line x1="35" y1="65" x2="65" y2="65"/><line x1="35" y1="75" x2="65" y2="75"/></g>`,
    'F': `<g><rect x="45" y="35" width="25" height="50" rx="5"/><path d="M 45 35 Q 25 40 35 55"/><line x1="35" y1="55" x2="55" y2="55"/></g>`,
    'G': `<g><rect x="35" y="50" width="30" height="35" rx="8"/><line x1="45" y1="25" x2="45" y2="60"/><path d="M 45 35 Q 65 30 55 50"/></g>`,
    'H': `<g><rect x="35" y="45" width="30" height="40" rx="5"/><line x1="42" y1="25" x2="42" y2="85"/><line x1="52" y1="25" x2="52" y2="85"/><path d="M 52 45 Q 70 55 52 65"/></g>`,
    'I': `<g><rect x="35" y="50" width="25" height="35" rx="8"/><line x1="60" y1="30" x2="60" y2="85"/><path d="M 35 65 Q 25 70 35 75"/></g>`,
    'J': `<g><path d="M 60 30 L 60 75 C 60 90 35 90 35 75" stroke-width="5"/><rect x="30" y="50" width="25" height="30" rx="5"/></g>`,
    'K': `<g><rect x="35" y="45" width="30" height="40" rx="5"/><line x1="42" y1="20" x2="42" y2="85"/><line x1="52" y1="25" x2="52" y2="85"/><path d="M 52 40 Q 75 35 52 55"/></g>`,
    'L': `<g><rect x="45" y="45" width="25" height="40" rx="5"/><line x1="45" y1="20" x2="45" y2="85"/><path d="M 45 65 L 20 65" stroke-width="5"/></g>`,
    'M': `<g><rect x="35" y="50" width="35" height="35" rx="5"/><line x1="42" y1="50" x2="42" y2="85"/><line x1="52" y1="50" x2="52" y2="85"/><line x1="62" y1="50" x2="62" y2="85"/></g>`,
    'N': `<g><rect x="35" y="50" width="26" height="35" rx="5"/><line x1="42" y1="50" x2="42" y2="85"/><line x1="52" y1="50" x2="52" y2="85"/></g>`,
    'O': `<g><circle cx="50" cy="55" r="22" stroke-width="5"/></g>`,
    'P': `<g><rect x="35" y="55" width="30" height="30" rx="5"/><line x1="40" y1="35" x2="40" y2="85"/><line x1="50" y1="40" x2="50" y2="85"/><path d="M 50 55 Q 70 60 50 70"/></g>`,
    'Q': `<g><rect x="35" y="35" width="30" height="35" rx="8"/><line x1="45" y1="50" x2="45" y2="85"/><path d="M 45 55 Q 65 70 55 85"/></g>`,
    'R': `<g><rect x="35" y="45" width="30" height="40" rx="5"/><path d="M 42 25 L 54 85 M 52 25 L 40 85" stroke-width="5"/></g>`,
    'S': `<g><rect x="35" y="45" width="30" height="40" rx="10"/><path d="M 30 65 Q 50 50 65 65" stroke-width="5"/></g>`,
    'T': `<g><rect x="45" y="35" width="25" height="50" rx="5"/><path d="M 45 35 Q 25 40 35 55"/><line x1="40" y1="45" x2="40" y2="75"/></g>`,
    'U': `<g><rect x="35" y="50" width="30" height="35" rx="5"/><line x1="42" y1="25" x2="42" y2="85"/><line x1="54" y1="25" x2="54" y2="85"/></g>`,
    'V': `<g><rect x="35" y="50" width="30" height="35" rx="5"/><line x1="40" y1="25" x2="40" y2="85"/><line x1="58" y1="25" x2="58" y2="85"/></g>`,
    'W': `<g><rect x="35" y="50" width="32" height="35" rx="5"/><line x1="40" y1="25" x2="40" y2="85"/><line x1="50" y1="23" x2="50" y2="85"/><line x1="60" y1="25" x2="60" y2="85"/></g>`,
    'X': `<g><rect x="35" y="45" width="30" height="40" rx="5"/><path d="M 45 45 Q 45 20 30 30" stroke-width="5"/></g>`,
    'Y': `<g><rect x="40" y="50" width="20" height="35" rx="5"/><path d="M 20 30 Q 30 55 45 55 Q 60 55 75 30" stroke-width="5"/></g>`,
    'Z': `<g><path d="M 35 35 L 65 35 L 35 75 L 65 75" stroke-width="5" stroke-linecap="round"/></g>`
};

let learnedLetters = JSON.parse(localStorage.getItem('libras_learned')) || [];
let currentSelectedLetter = 'A';
let currentQuizLetter = '';

function init() {
    renderAbcGrid();
    selectLetter('A');
    updateProgressBar();
    generateQuizQuestion();
}

function switchView(view) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.view-panel').forEach(panel => panel.classList.remove('active'));

    if(view === 'study') {
        document.getElementById('tab-study').classList.add('active');
        document.getElementById('view-study').classList.add('active');
    } else {
        document.getElementById('tab-practice').classList.add('active');
        document.getElementById('view-practice').classList.add('active');
        generateQuizQuestion();
    }
}

function renderAbcGrid() {
    const grid = document.getElementById('abc-grid');
    if (!grid) return;
    grid.innerHTML = '';
    Object.keys(librasAlphabet).forEach(letter => {
        const card = document.createElement('div');
        card.className = `letter-card ${learnedLetters.includes(letter) ? 'learned' : ''} ${letter === currentSelectedLetter ? 'selected' : ''}`;
        card.id = `card-${letter}`;
        card.innerText = letter;
        card.onclick = () => selectLetter(letter);
        grid.appendChild(card);
    });
}

function selectLetter(letter) {
    currentSelectedLetter = letter;
    document.querySelectorAll('.letter-card').forEach(c => c.classList.remove('selected'));
    
    const selectedPar = document.getElementById(`card-${letter}`);
    if(selectedPar) selectedPar.classList.add('selected');

    document.getElementById('detail-letter').innerText = letter;
    document.getElementById('hand-svg-display').innerHTML = librasAlphabet[letter];

    const btn = document.getElementById('toggle-learned-btn');
    if(learnedLetters.includes(letter)) {
        btn.innerText = '✓ Aprendida (Remover)';
        btn.className = 'action-btn learned-btn';
    } else {
        btn.innerText = 'Marcar como aprendida';
        btn.className = 'action-btn';
    }
}

function toggleLetterLearned() {
    if(learnedLetters.includes(currentSelectedLetter)) {
        learnedLetters = learnedLetters.filter(l => l !== currentSelectedLetter);
    } else {
        learnedLetters.push(currentSelectedLetter);
    }
    localStorage.setItem('libras_learned', JSON.stringify(learnedLetters));
    
    renderAbcGrid();
    selectLetter(currentSelectedLetter);
    updateProgressBar();
}

function updateProgressBar() {
    const total = Object.keys(librasAlphabet).length;
    const percentage = Math.round((learnedLetters.length / total) * 100);
    document.getElementById('progress-text').innerText = `${percentage}%`;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

function generateQuizQuestion() {
    const letters = Object.keys(librasAlphabet);
    currentQuizLetter = letters[Math.floor(Math.random() * letters.length)];
    
    document.getElementById('quiz-svg-display').innerHTML = librasAlphabet[currentQuizLetter];
    document.getElementById('quiz-feedback').innerText = '';
    document.getElementById('next-quiz-btn').style.display = 'none';

    let options = [currentQuizLetter];
    while(options.length < 4) {
        let randomLet = letters[Math.floor(Math.random() * letters.length)];
        if(!options.includes(randomLet)) {
            options.push(randomLet);
        }
    }
    options.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('quiz-options-container');
    optionsContainer.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => checkQuizAnswer(btn, opt);
        optionsContainer.appendChild(btn);
    });
}

function checkQuizAnswer(selectedBtn, selectedOption) {
    document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
    const feedback = document.getElementById('quiz-feedback');
    
    if(selectedOption === currentQuizLetter) {
        selectedBtn.classList.add('correct');
        feedback.innerText = '🎉 Excelente! Resposta correta.';
        feedback.style.color = 'var(--success)';
        if(!learnedLetters.includes(currentQuizLetter)) {
            learnedLetters.push(currentQuizLetter);
            localStorage.setItem('libras_learned', JSON.stringify(learnedLetters));
            updateProgressBar();
            renderAbcGrid();
        }
    } else {
        selectedBtn.classList.add('wrong');
        feedback.innerText = `❌ Incorreto. Era a letra ${currentQuizLetter}.`;
        feedback.style.color = '#ef4444';
        
        document.querySelectorAll('.option-btn').forEach(b => {
            if(b.innerText === currentQuizLetter) b.classList.add('correct');
        });
    }

    document.getElementById('next-quiz-btn').style.display = 'block';
}

window.onload = init;

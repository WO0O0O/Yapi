// Flashcard data structure
let flashcards = [];
let currentCardIndex = 0;

// DOM Elements
const nepaliInput = document.getElementById('nepali-text');
const pronunciationInput = document.getElementById('pronunciation');
const englishInput = document.getElementById('english-text');
const addCardButton = document.getElementById('add-card');
const cardContainer = document.getElementById('card-container');
const prevButton = document.getElementById('prev-card');
const nextButton = document.getElementById('next-card');

// Add new flashcard
function addFlashcard() {
    const nepali = nepaliInput.value.trim();
    const pronunciation = pronunciationInput.value.trim();
    const english = englishInput.value.trim();

    if (nepali && pronunciation && english) {
        const flashcard = {
            nepali,
            pronunciation,
            english
        };

        flashcards.push(flashcard);
        clearInputs();
        updateCardDisplay();
    }
}

// Clear input fields
function clearInputs() {
    nepaliInput.value = '';
    pronunciationInput.value = '';
    englishInput.value = '';
    nepaliInput.focus();
}

// Update card display
function updateCardDisplay() {
    if (flashcards.length === 0) {
        cardContainer.innerHTML = `
            <div class="flashcard">
                <div class="card-inner">
                    <div class="card-front">
                        <p class="nepali">Add a card</p>
                        <span class="pronunciation">to get started</span>
                    </div>
                    <div class="card-back">
                        <p class="english">Let's begin!</p>
                    </div>
                </div>
            </div>
        `;
        return;
    }

    const card = flashcards[currentCardIndex];
    cardContainer.innerHTML = `
        <div class="flashcard" onclick="this.classList.toggle('flipped')">
            <div class="card-inner">
                <div class="card-front">
                    <p class="nepali">${card.nepali}</p>
                    <span class="pronunciation">${card.pronunciation}</span>
                </div>
                <div class="card-back">
                    <p class="english">${card.english}</p>
                </div>
            </div>
        </div>
    `;
}

// Navigate through cards
function nextCard() {
    if (flashcards.length > 0) {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        updateCardDisplay();
    }
}

function prevCard() {
    if (flashcards.length > 0) {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        updateCardDisplay();
    }
}

// Event Listeners
addCardButton.addEventListener('click', addFlashcard);
prevButton.addEventListener('click', prevCard);
nextButton.addEventListener('click', nextCard);

// Initialize
updateCardDisplay();

// --- DOM Elements ---
const modal = document.getElementById('booking-modal');
const openModalBtn = document.getElementById('open-reserve-btn');
const closeModalBtn = document.querySelector('.close-btn');
const exploreMenuBtn = document.getElementById('hero-menu-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');
const reservationForm = document.getElementById('reservation-form');

// --- Feature 1: Menu Filtering Logic ---
filterBtns.forEach(button => {
    button.addEventListener('click', () => {
        // Toggle Active Button Class
        document.querySelector('.filter-btn.active').classList.remove('active');
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        // Show/Hide Menu Items based on classification
        menuCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// --- Feature 2: Scroll to Menu Setup ---
exploreMenuBtn.addEventListener('click', () => {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
});

// --- Feature 3: Modal Interactivity ---
const openModal = () => modal.style.display = 'flex';
const closeModal = () => modal.style.display = 'none';

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

// Close modal if user clicks anywhere outside the form wrapper box
window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// --- Feature 4: Form Submission Validation Handle ---
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('guest-name').value;
    const count = document.getElementById('guest-count').value;
    const date = document.getElementById('reserve-date').value;

    alert(`Thank you, ${name}! Your table reservation for ${count} guests on ${date} has been provisionally registered.`);
    
    reservationForm.reset();
    closeModal();
});

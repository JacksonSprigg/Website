/* ============================================================================
   BOOKSHELF DATA
   ============================================================================ */

const books = [
    // Fiction
    { title: "Permutation City", author: "Greg Egan", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "Brief Interviews with Hideous Men", author: "David Foster Wallace", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Romeo and Juliet", author: "William Shakespeare", rating: 7, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Curious Incident of the Dog in the Night-Time", author: "Mark Haddon", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Time Machine", author: "H.G. Wells", rating: 7, type: "fiction", cover: "placeholder.jpg" },
    { title: "Waiting for Godot", author: "Samuel Beckett", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Snow Crash", author: "Neal Stephenson", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "Cat's Cradle", author: "Kurt Vonnegut Jr.", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 7, type: "fiction", cover: "placeholder.jpg" },
    { title: "Manna", author: "Marshall Brain", rating: 7, type: "fiction", cover: "placeholder.jpg" },
    { title: "Alien Clay", author: "Adrian Tchaikovsky", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Bohr Maker", author: "Linda Nagata", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "Anathem", author: "Neal Stephenson", rating: 10, type: "fiction", cover: "placeholder.jpg" },
    { title: "Instantiation", author: "Greg Egan", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Quantum Thief", author: "Hannu Rajaniemi", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Lolita", author: "Vladimir Nabokov", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Prometheus Bound", author: "Aeschylus", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "Star Maker", author: "Olaf Stapledon", rating: 10, type: "fiction", cover: "placeholder.jpg" },
    { title: "Stories of Your Life and Others", author: "Ted Chiang", rating: 10, type: "fiction", cover: "placeholder.jpg" },
    { title: "True Names... and Other Dangers", author: "Vernor Vinge", rating: 8, type: "fiction", cover: "placeholder.jpg" },

    // Non-fiction
    { title: "Machine Decision is Not Final: China and the History and Future of AI", author: "Benjamin H. Bratton", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "If Anyone Builds It, Everyone Dies: Why Superhuman AI Would Kill Us All", author: "Eliezer Yudkowsky", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Wild Swans: Three Daughters of China", author: "Jung Chang", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Vital Question: Energy, Evolution, and the Origins of Complex Life", author: "Nick Lane", rating: 10, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Sense of Style: The Thinking Person's Guide to Writing in the 21st Century", author: "Steven Pinker", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "A Brief History of Intelligence", author: "Max Solomon Bennett", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Artificial Intelligence with Chinese Characteristics", author: "Jinghan Zeng", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The China Wave: Rise of a Civilizational State", author: "Weiwei Zhang", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Breakneck: China's Quest to Engineer the Future", author: "Dan Wang", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Proof of Stake: The Making of Ethereum", author: "Vitalik Buterin", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Life Itself", author: "Robert Rosen", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Age of Em", author: "Robin Hanson", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Gratitude", author: "Oliver Sacks", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Talking Nets: An Oral History of Neural Networks", author: "James A. Anderson", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Biophysics of Computation", author: "Christof Koch", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Neurolinguistics", author: "Giosuè Baggio", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "This Is Water", author: "David Foster Wallace", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "If This Isn't Nice, What Is?", author: "Kurt Vonnegut Jr.", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "On Liberty", author: "John Stuart Mill", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Thinking Physics", author: "Lewis Carroll Epstein", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Your Inner Fish", author: "Neil Shubin", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The End of Time", author: "Julian Barbour", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Something to Do with Paying Attention", author: "David Foster Wallace", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Abolition of Man", author: "C.S. Lewis", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Principles of Economics", author: "N. Gregory Mankiw", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Sick Societies", author: "Robert B. Edgerton", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Impro: Improvisation and the Theatre", author: "Keith Johnstone", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Rationality: From AI to Zombies", author: "Eliezer Yudkowsky", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Chuang Tzu: Basic Writings", author: "Zhuangzi", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Active Inference", author: "Thomas Parr", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Seizing Power: The Strategic Logic of Military Coups", author: "Naunihal Singh", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Reasons and Persons", author: "Derek Parfit", rating: 10, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Zero to One", author: "Peter Thiel", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Singularity Is Nearer", author: "Ray Kurzweil", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Scaling Era: An Oral History of AI, 2019–2025", author: "Dwarkesh Patel", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Secret of Our Success", author: "Joseph Henrich", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Finite and Infinite Games", author: "James P. Carse", rating: 10, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Ketamine", author: "Bita Moghaddam", rating: 7, type: "nonfiction", cover: "placeholder.jpg" }
];

const dnfBooks = [
    // Add DNF books here
];

/* ============================================================================
   BOOKSHELF FUNCTIONS
   ============================================================================ */

let currentFilter = 'all';
let currentTab = 'books';

function renderBooks() {
    const container = document.getElementById('books-grid');
    if (!container) return;

    let filteredBooks = books;

    if (currentFilter === 'fiction') {
        filteredBooks = books.filter(b => b.type === 'fiction');
    } else if (currentFilter === 'nonfiction') {
        filteredBooks = books.filter(b => b.type === 'nonfiction');
    }

    // Sort by rating descending
    filteredBooks.sort((a, b) => b.rating - a.rating);

    container.innerHTML = filteredBooks.map(book => `
        <div class="book-card">
            <div class="book-cover">
                <img src="media/bookshelf/${book.cover}" alt="${book.title} cover" onerror="this.src='media/bookshelf/placeholder.jpg'">
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
                <div class="book-rating">${'★'.repeat(book.rating)}${'☆'.repeat(10-book.rating)}</div>
            </div>
        </div>
    `).join('');
}

function renderDNF() {
    const container = document.getElementById('dnf-grid');
    if (!container) return;

    if (dnfBooks.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-color); opacity: 0.6;">No DNF books yet.</p>';
        return;
    }

    container.innerHTML = dnfBooks.map(book => `
        <div class="book-card">
            <div class="book-cover">
                <img src="media/bookshelf/${book.cover}" alt="${book.title} cover" onerror="this.src='media/bookshelf/placeholder.jpg'">
            </div>
            <div class="book-info">
                <div class="book-title">${book.title}</div>
                <div class="book-author">${book.author}</div>
            </div>
        </div>
    `).join('');
}

function setFilter(filter) {
    currentFilter = filter;

    // Update button states
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-filter="${filter}"]`).classList.add('active');

    renderBooks();
}

function showTab(tab) {
    currentTab = tab;

    // Hide all sections
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });

    // Show selected section
    document.getElementById(`${tab}-section`).classList.add('active');
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    renderBooks();
    renderDNF();
});

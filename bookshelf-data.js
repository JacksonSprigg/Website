/* ============================================================================
   BOOKSHELF DATA - Easy to edit!
   Just add/remove books from these arrays
   ============================================================================ */

const currentlyReading = [
    { title: "Gödel, Escher, Bach", author: "Douglas Hofstadter", cover: "placeholder.jpg" },
    { title: "The Master and His Emissary", author: "Iain McGilchrist", cover: "placeholder.jpg" },
    { title: "Consciousness Explained", author: "Daniel Dennett", cover: "placeholder.jpg" },
    { title: "The Structure of Scientific Revolutions", author: "Thomas Kuhn", cover: "placeholder.jpg" },
    { title: "Darwin's Dangerous Idea", author: "Daniel Dennett", cover: "placeholder.jpg" },
    { title: "The Information", author: "James Gleick", cover: "placeholder.jpg" },
    { title: "I Am a Strange Loop", author: "Douglas Hofstadter", cover: "placeholder.jpg" },
    { title: "The Metaphysics of Quality", author: "Robert Pirsig", cover: "placeholder.jpg" },
    { title: "Being and Time", author: "Martin Heidegger", cover: "placeholder.jpg" },
    { title: "The Phenomenology of Spirit", author: "G.W.F. Hegel", cover: "placeholder.jpg" }
];

const books = [
    // Rating 10
    { title: "Anathem", author: "Neal Stephenson", rating: 10, type: "fiction", cover: "placeholder.jpg" },
    { title: "Star Maker", author: "Olaf Stapledon", rating: 10, type: "fiction", cover: "placeholder.jpg" },
    { title: "Stories of Your Life and Others", author: "Ted Chiang", rating: 10, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Vital Question: Energy, Evolution, and the Origins of Complex Life", author: "Nick Lane", rating: 10, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Reasons and Persons", author: "Derek Parfit", rating: 10, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Finite and Infinite Games", author: "James P. Carse", rating: 10, type: "nonfiction", cover: "placeholder.jpg" },

    // Rating 9
    { title: "Permutation City", author: "Greg Egan", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Brief Interviews with Hideous Men", author: "David Foster Wallace", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Waiting for Godot", author: "Samuel Beckett", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Cat's Cradle", author: "Kurt Vonnegut Jr.", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Instantiation", author: "Greg Egan", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Quantum Thief", author: "Hannu Rajaniemi", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "Lolita", author: "Vladimir Nabokov", rating: 9, type: "fiction", cover: "placeholder.jpg" },
    { title: "If Anyone Builds It, Everyone Dies", author: "Eliezer Yudkowsky", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Wild Swans: Three Daughters of China", author: "Jung Chang", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "A Brief History of Intelligence", author: "Max Solomon Bennett", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Breakneck: China's Quest to Engineer the Future", author: "Dan Wang", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Life Itself", author: "Robert Rosen", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "This Is Water", author: "David Foster Wallace", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "On Liberty", author: "John Stuart Mill", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The End of Time", author: "Julian Barbour", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Impro: Improvisation and the Theatre", author: "Keith Johnstone", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Rationality: From AI to Zombies", author: "Eliezer Yudkowsky", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Chuang Tzu: Basic Writings", author: "Zhuangzi", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Secret of Our Success", author: "Joseph Henrich", rating: 9, type: "nonfiction", cover: "placeholder.jpg" },

    // Rating 8
    { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Curious Incident of the Dog in the Night-Time", author: "Mark Haddon", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "Snow Crash", author: "Neal Stephenson", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "Alien Clay", author: "Adrian Tchaikovsky", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Bohr Maker", author: "Linda Nagata", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "Prometheus Bound", author: "Aeschylus", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "True Names... and Other Dangers", author: "Vernor Vinge", rating: 8, type: "fiction", cover: "placeholder.jpg" },
    { title: "Machine Decision is Not Final", author: "Benjamin H. Bratton", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Sense of Style", author: "Steven Pinker", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The China Wave", author: "Weiwei Zhang", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Proof of Stake", author: "Vitalik Buterin", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Age of Em", author: "Robin Hanson", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Gratitude", author: "Oliver Sacks", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Biophysics of Computation", author: "Christof Koch", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "If This Isn't Nice, What Is?", author: "Kurt Vonnegut Jr.", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Thinking Physics", author: "Lewis Carroll Epstein", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Your Inner Fish", author: "Neil Shubin", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Something to Do with Paying Attention", author: "David Foster Wallace", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Abolition of Man", author: "C.S. Lewis", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Sick Societies", author: "Robert B. Edgerton", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Active Inference", author: "Thomas Parr", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Zero to One", author: "Peter Thiel", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Scaling Era", author: "Dwarkesh Patel", rating: 8, type: "nonfiction", cover: "placeholder.jpg" },

    // Rating 7
    { title: "Romeo and Juliet", author: "William Shakespeare", rating: 7, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Time Machine", author: "H.G. Wells", rating: 7, type: "fiction", cover: "placeholder.jpg" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 7, type: "fiction", cover: "placeholder.jpg" },
    { title: "Manna", author: "Marshall Brain", rating: 7, type: "fiction", cover: "placeholder.jpg" },
    { title: "Artificial Intelligence with Chinese Characteristics", author: "Jinghan Zeng", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Talking Nets", author: "James A. Anderson", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Neurolinguistics", author: "Giosuè Baggio", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Principles of Economics", author: "N. Gregory Mankiw", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Seizing Power", author: "Naunihal Singh", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "The Singularity Is Nearer", author: "Ray Kurzweil", rating: 7, type: "nonfiction", cover: "placeholder.jpg" },
    { title: "Ketamine", author: "Bita Moghaddam", rating: 7, type: "nonfiction", cover: "placeholder.jpg" }
];

const dnfBooks = [
    // Add DNF books here as needed
];

// Last updated date - change this when you update the bookshelf
const lastUpdated = "December 2024";

// Media links
const blogs = [
    { name: "Gwern.net", url: "https://gwern.net" },
    { name: "Astral Codex Ten", url: "https://www.astralcodexten.com" },
    { name: "LessWrong", url: "https://www.lesswrong.com" },
    // Add more blogs here
];

const favoritePosts = [
    { title: "Meditations on Moloch", author: "Scott Alexander", url: "https://slatestarcodex.com/2014/07/30/meditations-on-moloch/" },
    { title: "The Sequences", author: "Eliezer Yudkowsky", url: "https://www.lesswrong.com/rationality" },
    // Add more favorite posts here
];

const podcasts = [
    { name: "Dwarkesh Podcast", url: "https://www.dwarkeshpatel.com/podcast" },
    { name: "The Lunar Society", url: "https://www.youtube.com/@TheLunarSociety" },
    { name: "80,000 Hours", url: "https://80000hours.org/podcast/" },
    // Add more podcasts here
];

const youtubeChannels = [
    { name: "3Blue1Brown", url: "https://www.youtube.com/@3blue1brown" },
    { name: "Computerphile", url: "https://www.youtube.com/@Computerphile" },
    // Add more YouTube channels here
];

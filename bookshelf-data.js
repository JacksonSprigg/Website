/* ============================================================================
   BOOKSHELF DATA
   ============================================================================ */

const currentlyReading = [
    { title: "Permutation City", author: "Greg Egan", rating: 0, type: "fiction", isbn13: "9780061054815" },
    { title: "Breakneck: China's Quest to Engineer the Future", author: "Dan Wang", rating: 0, type: "nonfiction", isbn13: "9781324106036" },
    { title: "Active Inference: The Free Energy Principle in Mind, Brain, and Behavior", author: "Thomas Parr", rating: 0, type: "nonfiction", isbn13: "9780262045353" },
    { title: "Lolita", author: "Vladimir Nabokov", rating: 0, type: "fiction", isbn13: "9780141197012" },
    { title: "Reasons and Persons", author: "Derek Parfit", rating: 0, type: "nonfiction", isbn13: "9780198249085" },
    { title: "The Scaling Era: An Oral History of AI, 2019–2025", author: "Dwarkesh Patel", rating: 0, type: "nonfiction", isbn13: "9781953953551" },
    { title: "Stories of Your Life and Others", author: "Ted Chiang", rating: 0, type: "fiction", isbn13: "9780330426640" },
    { title: "Labyrinths: Selected Stories & Other Writings", author: "Jorge Luis Borges", rating: 0, type: "fiction", isbn13: "9780811200127" },
    { title: "Nausea", author: "Jean-Paul Sartre", rating: 0, type: "fiction", isbn13: "9780811201889" },
    { title: "Gödel, Escher, Bach: An Eternal Golden Braid", author: "Douglas R. Hofstadter", rating: 0, type: "nonfiction", isbn13: "9780465026562" }
];

const books = [
    { title: "Simulacra and Simulation", author: "Jean Baudrillard", rating: 6, type: "nonfiction", isbn13: "9780472065219" },
    { title: "Alice's Adventures in Wonderland", author: "Lewis Carroll", rating: 7, type: "fiction", isbn13: "9781529002461" },
    { title: "If Anyone Builds It, Everyone Dies: Why Superhuman AI Would Kill Us All", author: "Eliezer Yudkowsky", rating: 7, type: "nonfiction", isbn13: "9780316595643" },
    { title: "Brief Interviews with Hideous Men", author: "David Foster Wallace", rating: 7, type: "fiction", isbn13: "9780349111889" },
    { title: "A Brief History of Intelligence: Evolution, AI, and the Five Breakthroughs That Made Our Brains", author: "Max Solomon Bennett", rating: 9, type: "nonfiction", isbn13: "9780008560133" },
    { title: "Romeo and Juliet", author: "William Shakespeare", rating: 6, type: "fiction", isbn13: "9780743477116" },
    { title: "Neurolinguistics", author: "Giosuè Baggio", rating: 6, type: "nonfiction", isbn13: "9780262368148" },
    { title: "This Is Water: Some Thoughts, Delivered on a Significant Occasion, about Living a Compassionate Life", author: "David Foster Wallace", rating: 7, type: "nonfiction", isbn13: "9780316068222" },
    { title: "The Time Machine", author: "H.G. Wells", rating: 3, type: "fiction", isbn13: "9780141439976" },
    { title: "Waiting for Godot", author: "Samuel Beckett", rating: 4, type: "fiction", isbn13: "9780802130341" },
    { title: "Cat's Cradle", author: "Kurt Vonnegut Jr.", rating: 8, type: "fiction", isbn13: "9780575081956" },
    { title: "Something to Do with Paying Attention", author: "David Foster Wallace", rating: 8, type: "fiction", isbn13: "9781946022271" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", rating: 7, type: "fiction", isbn13: "9780743273565" },
    { title: "Rationality: From AI to Zombies (The Sequences)", author: "Eliezer Yudkowsky", rating: 10, type: "nonfiction", isbn13: "9781939311160" },
    { title: "Zero to One: Notes on Startups, or How to Build the Future", author: "Peter Thiel", rating: 7, type: "nonfiction", isbn13: "9780804139298" },
    { title: "Ketamine (The MIT Press Essential Knowledge series)", author: "Bita Moghaddam", rating: 7, type: "nonfiction", isbn13: "9780262542241" },
    { title: "The MANIAC", author: "Benjamín Labatut", rating: 6, type: "fiction", isbn13: "9780593654477" },
    { title: "Unsong", author: "Scott Alexander", rating: 9, type: "fiction", isbn13: "9798320962610" },
    { title: "Quantum Computing Since Democritus", author: "Scott Aaronson", rating: 8, type: "nonfiction", isbn13: "9780521199568" },
    { title: "There Is No Antimemetics Division", author: "qntm", rating: 9, type: "fiction", isbn13: "9780593983751" },
    { title: "All About Love: New Visions", author: "bell hooks", rating: 2, type: "nonfiction", isbn13: "9780688168445" },
    { title: "Harry Potter and the Methods of Rationality", author: "Eliezer Yudkowsky", rating: 8, type: "fiction", isbn13: "harrypotterandthemethodsofrationality" },
    { title: "The Metamorphosis and Other Stories", author: "Franz Kafka", rating: 7, type: "fiction", isbn13: "9781593080297" },
    { title: "What Do You Care What Other People Think?: Further Adventures of a Curious Character", author: "Richard P. Feynman", rating: 7, type: "nonfiction", isbn13: "9780393355642" },
    { title: "Three Worlds Collide", author: "Eliezer Yudkowsky", rating: 7, type: "fiction", isbn13: "threeworldscollide" },
    { title: "Inadequate Equilibria: Where and How Civilizations Get Stuck", author: "Eliezer Yudkowsky", rating: 8, type: "nonfiction", isbn13: "9781939311207" },
    { title: "Consider the Lobster and Other Essays", author: "David Foster Wallace", rating: 8, type: "nonfiction", isbn13: "9780316156110" },
    { title: "The Myth of Sisyphus", author: "Albert Camus", rating: 7, type: "nonfiction", isbn13: "9780141182001" },
    { title: "Otherness and Control in the Age of AGI", author: "Joe Carlsmith", rating: 8, type: "nonfiction", isbn13: "othernessandcontrolintheageofagi" },
    { title: "Four Thousand Weeks: Time Management for Mortals", author: "Oliver Burkeman", rating: 8, type: "nonfiction", isbn13: "9780374159122" },
    { title: "The Call of Cthulu and Other Stories", author: "H.P. Lovecraft", rating: 7, type: "fiction", isbn13: "9780141182346" },
    { title: "The Denial of Death", author: "Ernest Becker", rating: 7, type: "nonfiction", isbn13: "9780285640078" },
    { title: "Twelve Angry Men", author: "Reginald Rose", rating: 6, type: "fiction", isbn13: "9780143104407" },
    { title: "Siddhartha", author: "Hermann Hesse", rating: 6, type: "fiction", isbn13: "9780141189574" },
    { title: "The Frogs", author: "Aristophanes", rating: 5, type: "fiction", isbn13: "9781406936728" },
    { title: "Only Dull People Are Brilliant at Breakfast", author: "Oscar Wilde", rating: 7, type: "nonfiction", isbn13: "9780241251805" },
    { title: "Letters to a Young Poet", author: "Rainer Maria Rilke", rating: 6, type: "nonfiction", isbn13: "9780486422459" },
    { title: "Tao Te Ching", author: "Lao Tzu", rating: 8, type: "nonfiction", isbn13: "9780679724346" },
    { title: "The Death of Ivan Ilych", author: "Leo Tolstoy", rating: 8, type: "fiction", isbn13: "thedeathofivanilych" },
    { title: "The Quantum Astrologer's Handbook: a history of Renaissance mathematics", author: "Michael Brooks", rating: 6, type: "nonfiction", isbn13: "9781947534810" },
    { title: "Notes from Underground", author: "Fyodor Dostoevsky", rating: 10, type: "fiction", isbn13: "9780679734529" },
    { title: "Ethics in the Real World: 86 Brief Essays on Things that Matter", author: "Peter Singer", rating: 6, type: "nonfiction", isbn13: "9781925355857" },
    { title: "The Last Question", author: "Isaac Asimov", rating: 6, type: "fiction", isbn13: "thelastquestion" },
    { title: "White Nights", author: "Fyodor Dostoevsky", rating: 5, type: "fiction", isbn13: "9780241252083" },
    { title: "The Bell Jar", author: "Sylvia Plath", rating: 8, type: "fiction", isbn13: "9780060837020" },
    { title: "Beyond Good and Evil", author: "Friedrich Nietzsche", rating: 9, type: "nonfiction", isbn13: "9780140449235" },
    { title: "Our Mathematical Universe: My Quest for the Ultimate Nature of Reality", author: "Max Tegmark", rating: 8, type: "nonfiction", isbn13: "9780241954638" },
    { title: "The Little Prince", author: "Antoine de Saint-Exupéry", rating: 8, type: "fiction", isbn13: "9780152023980" },
    { title: "The Moral Landscape: How Science Can Determine Human Values", author: "Sam Harris", rating: 7, type: "nonfiction", isbn13: "9780552776387" },
    { title: "Meditations", author: "Marcus Aurelius", rating: 10, type: "nonfiction", isbn13: "9780140449334" },
    { title: "Making Sense: Conversations on Consciousness, Morality, and the Future of Humanity", author: "Sam Harris", rating: 9, type: "nonfiction", isbn13: "9780062857781" },
    { title: "Ecce Homo", author: "Friedrich Nietzsche", rating: 7, type: "nonfiction", isbn13: "9780140445152" },
    { title: "My View of the World", author: "Erwin Schrödinger", rating: 7, type: "nonfiction", isbn13: "9780918024305" },
    { title: "Flowers for Algernon", author: "Daniel Keyes", rating: 9, type: "fiction", isbn13: "9781417670802" },
    { title: "Animal Farm", author: "George Orwell", rating: 8, type: "fiction", isbn13: "9780141036137" },
    { title: "Why I Write and Other Essays", author: "George Orwell", rating: 8, type: "nonfiction", isbn13: "9780143036357" },
    { title: "The Symposium", author: "Plato", rating: 5, type: "nonfiction", isbn13: "9780140449273" },
    { title: "On Bullshit", author: "Harry G. Frankfurt", rating: 7, type: "nonfiction", isbn13: "9780691122946" },
    { title: "Waking Up: A Guide to Spirituality Without Religion", author: "Sam Harris", rating: 7, type: "nonfiction", isbn13: "9781451636017" },
    { title: "Man's Search for Meaning", author: "Viktor E. Frankl", rating: 7, type: "nonfiction", isbn13: "9780807014295" },
    { title: "Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character", author: "Richard P. Feynman", rating: 9, type: "nonfiction", isbn13: "9780393355624" },
    { title: "Lying", author: "Sam Harris", rating: 7, type: "nonfiction", isbn13: "9781940051000" },
    { title: "The School of Life: An Emotional Education", author: "Alain de Botton", rating: 7, type: "nonfiction", isbn13: "9780241382325" },
    { title: "On The Shortness Of Life", author: "Seneca", rating: 9, type: "nonfiction", isbn13: "9780143036326" },
    { title: "Why You Will Marry the Wrong Person: & Other Essays", author: "The School of Life", rating: 8, type: "nonfiction", isbn13: "whyyouwillmarrythewrongperson" },
    { title: "The Art of War", author: "Sun Tzu", rating: 6, type: "nonfiction", isbn13: "9781645472834" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", rating: 6, type: "fiction", isbn13: "9780060935467" },
    { title: "The Alchemist", author: "Paulo Coelho", rating: 2, type: "fiction", isbn13: "9780062315007" },
    { title: "The Great Zoo of China", author: "Matthew Reilly", rating: 6, type: "fiction", isbn13: "9781476749556" },
    { title: "Apology", author: "Plato", rating: 8, type: "nonfiction", isbn13: "9780865163485" },
    { title: "1984", author: "George Orwell", rating: 8, type: "fiction", isbn13: "9780452284234" },
    { title: "The Ones Who Walk Away from Omelas", author: "Ursula K. Le Guin", rating: 6, type: "fiction", isbn13: "9780886825010" },
    { title: "Discourses and Selected Writings", author: "Epictetus", rating: 8, type: "nonfiction", isbn13: "9780140449464" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", rating: 6, type: "fiction", isbn13: "9780316769174" },
    { title: "The Crucible", author: "Arthur Miller", rating: 6, type: "fiction", isbn13: "9780142437339" },
    { title: "A Christmas Carol", author: "Charles Dickens", rating: 6, type: "fiction", isbn13: "9781561797462" },
    { title: "Year of Wonders", author: "Geraldine Brooks", rating: 6, type: "fiction", isbn13: "9780142000786" },
    { title: "Nine Days", author: "Toni Jordan", rating: 6, type: "fiction", isbn13: "9781921922831" },
    { title: "Slaughterhouse-Five", author: "Kurt Vonnegut Jr.", rating: 7, type: "fiction", isbn13: "slaughterhousefive" },
    { title: "Of Mice and Men", author: "John Steinbeck", rating: 7, type: "fiction", isbn13: "9780140186420" },
    { title: "Holes", author: "Louis Sachar", rating: 6, type: "fiction", isbn13: "holes" },
    { title: "QED: The Strange Theory of Light and Matter", author: "Richard P. Feynman", rating: 7, type: "nonfiction", isbn13: "9780691024172" },
    { title: "The Doors of Perception & Heaven and Hell", author: "Aldous Huxley", rating: 8, type: "nonfiction", isbn13: "thedoorsofperceptionandheavenandhell" },
    { title: "The Stranger", author: "Albert Camus", rating: 8, type: "fiction", isbn13: "9780141182506" },
    { title: "Stay or Leave: Essays on relationships", author: "The School of Life", rating: 10, type: "nonfiction", isbn13: "9781915087515" },
    { title: "Fahrenheit 451", author: "Ray Bradbury", rating: 7, type: "fiction", isbn13: "9781451673319" },
    { title: "Mortality", author: "Christopher Hitchens", rating: 8, type: "nonfiction", isbn13: "9781455502752" },
    { title: "Letter to a Christian Nation", author: "Sam Harris", rating: 6, type: "nonfiction", isbn13: "9780307265777" },
    { title: "A Room of One's Own", author: "Virginia Woolf", rating: 7, type: "nonfiction", isbn13: "aroomofonesown" },
    { title: "Free Will", author: "Sam Harris", rating: 7, type: "nonfiction", isbn13: "9781451683400" },
    { title: "A Brief History of Time", author: "Stephen Hawking", rating: 6, type: "nonfiction", isbn13: "9780553176988" },
    { title: "The Blind Watchmaker: Why the Evidence of Evolution Reveals a Universe Without Design", author: "Richard Dawkins", rating: 8, type: "nonfiction", isbn13: "9780141026169" },
    { title: "Superintelligence: Paths, Dangers, Strategies", author: "Nick Bostrom", rating: 9, type: "nonfiction", isbn13: "9780199678112" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", rating: 9, type: "fiction", isbn13: "9780143058144" }
];


const dnfBooks = [
    // Add DNF books here as needed
    { title: "Man and His Symbols", author: "C.G. Jung", rating: 0, type: "nonfiction", isbn13: "9780440351832" },
    { title: "The Fall", author: "Albert Camus", rating: 0, type: "fiction", isbn13: "9780679720225" },
    { title: "Life 3.0: Being Human in the Age of Artificial Intelligence", author: "Max Tegmark", rating: 0, type: "nonfiction", isbn13: "9780141981802" },
    { title: "The Brothers Karamazov", author: "Fyodor Dostoevsky", rating: 0, type: "fiction", isbn13: "9780374528379" }
];

// Last updated date - change this when you update the bookshelf
const lastUpdated = "August 2025";

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

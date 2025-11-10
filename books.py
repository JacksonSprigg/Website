
# download_goodreads_covers.py
import os
import time
import requests
from PIL import Image
from io import BytesIO
from bs4 import BeautifulSoup

books = [
    {"title": "Permutation City", "author": "Greg Egan", "rating": 0, "type": "fiction", "isbn13": "9780061054815", "currently_reading": True},
    {"title": "Alice's Adventures in Wonderland", "author": "Lewis Carroll", "rating": 0, "type": "fiction", "isbn13": "9781529002461", "currently_reading": True},
    {"title": "Breakneck: China's Quest to Engineer the Future", "author": "Dan Wang", "rating": 0, "type": "nonfiction", "isbn13": "9781324106036", "currently_reading": True},
    {"title": "Impro: Improvisation and the Theatre", "author": "Keith Johnstone", "rating": 0, "type": "nonfiction", "isbn13": "9780878301171", "currently_reading": True},
    {"title": "Active Inference: The Free Energy Principle in Mind, Brain, and Behavior", "author": "Thomas Parr", "rating": 0, "type": "nonfiction", "isbn13": "9780262045353", "currently_reading": True},
    {"title": "Lolita", "author": "Vladimir Nabokov", "rating": 0, "type": "fiction", "isbn13": "9780141197012", "currently_reading": True},
    {"title": "Reasons and Persons", "author": "Derek Parfit", "rating": 0, "type": "nonfiction", "isbn13": "9780198249085", "currently_reading": True},
    {"title": "The Scaling Era: An Oral History of AI, 2019–2025", "author": "Dwarkesh Patel", "rating": 0, "type": "nonfiction", "isbn13": "9781953953551", "currently_reading": True},
    {"title": "Star Maker", "author": "Olaf Stapledon", "rating": 0, "type": "fiction", "isbn13": "9780486466835", "currently_reading": True},
    {"title": "Stories of Your Life and Others", "author": "Ted Chiang", "rating": 0, "type": "fiction", "isbn13": "9780330426640", "currently_reading": True},
    {"title": "Labyrinths: Selected Stories & Other Writings", "author": "Jorge Luis Borges", "rating": 0, "type": "fiction", "isbn13": "9780811200127", "currently_reading": True},
    {"title": "Man and His Symbols", "author": "C.G. Jung", "rating": 0, "type": "nonfiction", "isbn13": "9780440351832", "currently_reading": True},
    {"title": "The Birth of Tragedy", "author": "Friedrich Nietzsche", "rating": 0, "type": "nonfiction", "isbn13": "9780140433395", "currently_reading": True},
    {"title": "Letters to a Young Contrarian", "author": "Christopher Hitchens", "rating": 0, "type": "nonfiction", "isbn13": "9780465030330", "currently_reading": True},
    {"title": "Dune", "author": "Frank Herbert", "rating": 0, "type": "fiction", "isbn13": "9780593099322", "currently_reading": True},
    {"title": "The Fall", "author": "Albert Camus", "rating": 0, "type": "fiction", "isbn13": "9780679720225", "currently_reading": True},
    {"title": "Nausea", "author": "Jean-Paul Sartre", "rating": 0, "type": "fiction", "isbn13": "9780811201889", "currently_reading": True},
    {"title": "Simulacra and Simulation", "author": "Jean Baudrillard", "rating": 0, "type": "nonfiction", "isbn13": "9780472065219", "currently_reading": True},
    {"title": "Life 3.0: Being Human in the Age of Artificial Intelligence", "author": "Max Tegmark", "rating": 0, "type": "nonfiction", "isbn13": "9780141981802", "currently_reading": True},
    {"title": "Superintelligence: Paths, Dangers, Strategies", "author": "Nick Bostrom", "rating": 0, "type": "nonfiction", "isbn13": "9780199678112", "currently_reading": True},
    {"title": "The Prince", "author": "Niccolò Machiavelli", "rating": 0, "type": "nonfiction", "isbn13": "9780937832387", "currently_reading": True},
    {"title": "The Brothers Karamazov", "author": "Fyodor Dostoevsky", "rating": 0, "type": "fiction", "isbn13": "9780374528379", "currently_reading": True},
    {"title": "Gödel, Escher, Bach: An Eternal Golden Braid", "author": "Douglas R. Hofstadter", "rating": 0, "type": "nonfiction", "isbn13": "9780465026562", "currently_reading": True},
    
    {"title": "If Anyone Builds It, Everyone Dies: Why Superhuman AI Would Kill Us All", "author": "Eliezer Yudkowsky", "rating": 8, "type": "nonfiction", "isbn13": "9780316595643", "currently_reading": False},
    {"title": "Brief Interviews with Hideous Men", "author": "David Foster Wallace", "rating": 6, "type": "fiction", "isbn13": "9780349111889", "currently_reading": False},
    {"title": "A Brief History of Intelligence: Evolution, AI, and the Five Breakthroughs That Made Our Brains", "author": "Max Solomon Bennett", "rating": 8, "type": "nonfiction", "isbn13": "9780008560133", "currently_reading": False},
    {"title": "Romeo and Juliet", "author": "William Shakespeare", "rating": 6, "type": "fiction", "isbn13": "9780743477116", "currently_reading": False},
    {"title": "Neurolinguistics", "author": "Giosuè Baggio", "rating": 6, "type": "nonfiction", "isbn13": "9780262368148", "currently_reading": False},
    {"title": "This Is Water: Some Thoughts, Delivered on a Significant Occasion, about Living a Compassionate Life", "author": "David Foster Wallace", "rating": 8, "type": "nonfiction", "isbn13": "9780316068222", "currently_reading": False},
    {"title": "The Time Machine", "author": "H.G. Wells", "rating": 4, "type": "fiction", "isbn13": "9780141439976", "currently_reading": False},
    {"title": "Waiting for Godot", "author": "Samuel Beckett", "rating": 6, "type": "fiction", "isbn13": "9780802130341", "currently_reading": False},
    {"title": "Cat's Cradle", "author": "Kurt Vonnegut Jr.", "rating": 8, "type": "fiction", "isbn13": "9780575081956", "currently_reading": False},
    {"title": "Something to Do with Paying Attention (McNally Editions)", "author": "David Foster Wallace", "rating": 8, "type": "nonfiction", "isbn13": "9781946022271", "currently_reading": False},
    {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "rating": 8, "type": "fiction", "isbn13": "9780743273565", "currently_reading": False},
    {"title": "Rationality: From AI to Zombies", "author": "Eliezer Yudkowsky", "rating": 10, "type": "nonfiction", "isbn13": "9781939311160", "currently_reading": False},
    {"title": "Zero to One: Notes on Startups, or How to Build the Future", "author": "Peter Thiel", "rating": 8, "type": "nonfiction", "isbn13": "9780804139298", "currently_reading": False},
    {"title": "Ketamine (The MIT Press Essential Knowledge series)", "author": "Bita Moghaddam", "rating": 8, "type": "nonfiction", "isbn13": "9780262542241", "currently_reading": False},
    {"title": "The MANIAC", "author": "Benjamín Labatut", "rating": 6, "type": "fiction", "isbn13": "9780593654477", "currently_reading": False},
    {"title": "Unsong", "author": "Scott Alexander", "rating": 8, "type": "fiction", "isbn13": "9798320962610", "currently_reading": False},
    {"title": "Quantum Computing Since Democritus", "author": "Scott Aaronson", "rating": 8, "type": "nonfiction", "isbn13": "9780521199568", "currently_reading": False},
    {"title": "and then we'll be okay", "author": "Exurb1a", "rating": 4, "type": "fiction", "isbn13": "andthenwellbeokay", "currently_reading": False},
    {"title": "There Is No Antimemetics Division", "author": "qntm", "rating": 8, "type": "fiction", "isbn13": "9780593983751", "currently_reading": False},
    {"title": "100 Suns", "author": "Michael Light", "rating": 8, "type": "nonfiction", "isbn13": "9781400041138", "currently_reading": False},
    {"title": "All About Love: New Visions", "author": "bell hooks", "rating": 4, "type": "nonfiction", "isbn13": "9780688168445", "currently_reading": False},
    {"title": "Harry Potter and the Methods of Rationality", "author": "Eliezer Yudkowsky", "rating": 8, "type": "fiction", "isbn13": "harrypotterandthemethodsofrationality", "currently_reading": False},
    {"title": "The Metamorphosis and Other Stories", "author": "Franz Kafka", "rating": 8, "type": "fiction", "isbn13": "9781593080297", "currently_reading": False},
    {"title": "What Do You Care What Other People Think?: Further Adventures of a Curious Character", "author": "Richard P. Feynman", "rating": 8, "type": "nonfiction", "isbn13": "9780393355642", "currently_reading": False},
    {"title": "Three Worlds Collide", "author": "Eliezer Yudkowsky", "rating": 8, "type": "fiction", "isbn13": "threeworldscollide", "currently_reading": False},
    {"title": "Inadequate Equilibria: Where and How Civilizations Get Stuck", "author": "Eliezer Yudkowsky", "rating": 8, "type": "nonfiction", "isbn13": "9781939311207", "currently_reading": False},
    {"title": "Consider the Lobster and Other Essays", "author": "David Foster Wallace", "rating": 8, "type": "nonfiction", "isbn13": "9780316156110", "currently_reading": False},
    {"title": "The Myth of Sisyphus", "author": "Albert Camus", "rating": 8, "type": "nonfiction", "isbn13": "9780141182001", "currently_reading": False},
    {"title": "Otherness and Control in the Age of AGI", "author": "Joe Carlsmith", "rating": 8, "type": "nonfiction", "isbn13": "othernessandcontrolintheageofagi", "currently_reading": False},
    {"title": "Four Thousand Weeks: Time Management for Mortals", "author": "Oliver Burkeman", "rating": 6, "type": "nonfiction", "isbn13": "9780374159122", "currently_reading": False},
    {"title": "The Call of Cthulhu", "author": "H.P. Lovecraft", "rating": 6, "type": "fiction", "isbn13": "9780141182346", "currently_reading": False},
    {"title": "The Denial of Death", "author": "Ernest Becker", "rating": 8, "type": "nonfiction", "isbn13": "9780285640078", "currently_reading": False},
    {"title": "Twelve Angry Men", "author": "Reginald Rose", "rating": 6, "type": "fiction", "isbn13": "9780143104407", "currently_reading": False},
    {"title": "Siddhartha", "author": "Hermann Hesse", "rating": 6, "type": "fiction", "isbn13": "9780141189574", "currently_reading": False},
    {"title": "The Frogs", "author": "Aristophanes", "rating": 6, "type": "fiction", "isbn13": "9781406936728", "currently_reading": False},
    {"title": "Only Dull People Are Brilliant at Breakfast (Penguin Little Black Classics, #119)", "author": "Oscar Wilde", "rating": 8, "type": "nonfiction", "isbn13": "9780241251805", "currently_reading": False},
    {"title": "Letters to a Young Poet", "author": "Rainer Maria Rilke", "rating": 6, "type": "nonfiction", "isbn13": "9780486422459", "currently_reading": False},
    {"title": "Tao Te Ching", "author": "Lao Tzu", "rating": 6, "type": "nonfiction", "isbn13": "9780679724346", "currently_reading": False},
    {"title": "The Death of Ivan Ilych", "author": "Leo Tolstoy", "rating": 8, "type": "fiction", "isbn13": "thedeathofivanilych", "currently_reading": False},
    {"title": "The Quantum Astrologer's Handbook: a history of the Renaissance mathematics that birthed imaginary numbers, probability, and the new physics of the universe", "author": "Michael Brooks", "rating": 6, "type": "nonfiction", "isbn13": "9781947534810", "currently_reading": False},
    {"title": "Notes from Underground", "author": "Fyodor Dostoevsky", "rating": 10, "type": "fiction", "isbn13": "9780679734529", "currently_reading": False},
    {"title": "Ethics in the Real World: 86 Brief Essays on Things that Matter", "author": "Peter Singer", "rating": 6, "type": "nonfiction", "isbn13": "9781925355857", "currently_reading": False},
    {"title": "The Last Question", "author": "Isaac Asimov", "rating": 6, "type": "fiction", "isbn13": "thelastquestion", "currently_reading": False},
    {"title": "White Nights", "author": "Fyodor Dostoevsky", "rating": 6, "type": "fiction", "isbn13": "9780241252083", "currently_reading": False},
    {"title": "The Bell Jar", "author": "Sylvia Plath", "rating": 8, "type": "fiction", "isbn13": "9780060837020", "currently_reading": False},
    {"title": "Beyond Good and Evil", "author": "Friedrich Nietzsche", "rating": 8, "type": "nonfiction", "isbn13": "9780140449235", "currently_reading": False},
    {"title": "Our Mathematical Universe: My Quest for the Ultimate Nature of Reality", "author": "Max Tegmark", "rating": 8, "type": "nonfiction", "isbn13": "9780241954638", "currently_reading": False},
    {"title": "The Little Prince", "author": "Antoine de Saint-Exupéry", "rating": 8, "type": "fiction", "isbn13": "9780152023980", "currently_reading": False},
    {"title": "The Moral Landscape: How Science Can Determine Human Values", "author": "Sam Harris", "rating": 8, "type": "nonfiction", "isbn13": "9780552776387", "currently_reading": False},
    {"title": "Meditations", "author": "Marcus Aurelius", "rating": 10, "type": "nonfiction", "isbn13": "9780140449334", "currently_reading": False},
    {"title": "Making Sense: Conversations on Consciousness, Morality, and the Future of Humanity", "author": "Sam Harris", "rating": 10, "type": "nonfiction", "isbn13": "9780062857781", "currently_reading": False},
    {"title": "Ranger's Apprentice (vol. 1-11)", "author": "John Flanagan", "rating": 6, "type": "fiction", "isbn13": "9789123521142", "currently_reading": False},
    {"title": "The Novice / The Inquisition / The Battlemage (Summoner, #1-3)", "author": "Taran Matharu", "rating": 6, "type": "fiction", "isbn13": "9789123677320", "currently_reading": False},
    {"title": "Why I Am so Clever", "author": "Friedrich Nietzsche", "rating": 6, "type": "nonfiction", "isbn13": "9780241251850", "currently_reading": False},
    {"title": "My View of the World", "author": "Erwin Schrödinger", "rating": 8, "type": "nonfiction", "isbn13": "9780918024305", "currently_reading": False},
    {"title": "Flowers for Algernon", "author": "Daniel Keyes", "rating": 8, "type": "fiction", "isbn13": "9781417670802", "currently_reading": False},
    {"title": "Animal Farm", "author": "George Orwell", "rating": 8, "type": "fiction", "isbn13": "9780141036137", "currently_reading": False},
    {"title": "Why I Write", "author": "George Orwell", "rating": 8, "type": "nonfiction", "isbn13": "9780143036357", "currently_reading": False},
    {"title": "The Symposium", "author": "Plato", "rating": 6, "type": "nonfiction", "isbn13": "9780140449273", "currently_reading": False},
    {"title": "On Bullshit", "author": "Harry G. Frankfurt", "rating": 8, "type": "nonfiction", "isbn13": "9780691122946", "currently_reading": False},
    {"title": "Stay or Leave: How to remain in, or end, your relationship", "author": "The School of Life", "rating": 10, "type": "nonfiction", "isbn13": "9781915087515", "currently_reading": False},
    {"title": "Waking Up: A Guide to Spirituality Without Religion", "author": "Sam Harris", "rating": 8, "type": "nonfiction", "isbn13": "9781451636017", "currently_reading": False},
    {"title": "Man's Search for Meaning", "author": "Viktor E. Frankl", "rating": 8, "type": "nonfiction", "isbn13": "9780807014295", "currently_reading": False},
    {"title": "Surely You're Joking, Mr. Feynman!: Adventures of a Curious Character", "author": "Richard P. Feynman", "rating": 8, "type": "nonfiction", "isbn13": "9780393355624", "currently_reading": False},
    {"title": "Lying", "author": "Sam Harris", "rating": 8, "type": "nonfiction", "isbn13": "9781940051000", "currently_reading": False},
    {"title": "The Giving Tree", "author": "Shel Silverstein", "rating": 6, "type": "fiction", "isbn13": "9780060256654", "currently_reading": False},
    {"title": "The School of Life: An Emotional Education", "author": "Alain de Botton", "rating": 8, "type": "nonfiction", "isbn13": "9780241382325", "currently_reading": False},
    {"title": "On the Shortness of Life: Life Is Long if You Know How to Use It (Penguin Great Ideas)", "author": "Seneca", "rating": 10, "type": "nonfiction", "isbn13": "9780143036326", "currently_reading": False},
    {"title": "Why You Will Marry the Wrong Person: & Other Essays", "author": "The School of Life", "rating": 8, "type": "nonfiction", "isbn13": "whyyouwillmarrythewrongperson", "currently_reading": False},
    {"title": "The Art of War", "author": "Sun Tzu", "rating": 6, "type": "nonfiction", "isbn13": "9781645472834", "currently_reading": False},
    {"title": "To Kill a Mockingbird", "author": "Harper Lee", "rating": 6, "type": "fiction", "isbn13": "9780060935467", "currently_reading": False},
    {"title": "The Alchemist", "author": "Paulo Coelho", "rating": 4, "type": "fiction", "isbn13": "9780062315007", "currently_reading": False},
    {"title": "The Six Sacred Stones", "author": "Matthew Reilly", "rating": 6, "type": "fiction", "isbn13": "9781742611785", "currently_reading": False},
    {"title": "Seven Deadly Wonders (Jack West Jr, #1)", "author": "Matthew Reilly", "rating": 6, "type": "fiction", "isbn13": "9781416505068", "currently_reading": False},
    {"title": "The Great Zoo of China", "author": "Matthew Reilly", "rating": 6, "type": "fiction", "isbn13": "9781476749556", "currently_reading": False},
    {"title": "Apology", "author": "Plato", "rating": 8, "type": "nonfiction", "isbn13": "9780865163485", "currently_reading": False},
    {"title": "1984", "author": "George Orwell", "rating": 8, "type": "fiction", "isbn13": "9780452284234", "currently_reading": False},
    {"title": "The Ones Who Walk Away from Omelas", "author": "Ursula K. Le Guin", "rating": 6, "type": "fiction", "isbn13": "9780886825010", "currently_reading": False},
    {"title": "Discourses and Selected Writings", "author": "Epictetus", "rating": 8, "type": "nonfiction", "isbn13": "9780140449464", "currently_reading": False},
    {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "rating": 6, "type": "fiction", "isbn13": "9780316769174", "currently_reading": False},
    {"title": "The Crucible", "author": "Arthur Miller", "rating": 6, "type": "fiction", "isbn13": "9780142437339", "currently_reading": False},
    {"title": "A Christmas Carol", "author": "Charles Dickens", "rating": 6, "type": "fiction", "isbn13": "9781561797462", "currently_reading": False},
    {"title": "Wonder (Wonder, #1)", "author": "R.J. Palacio", "rating": 6, "type": "fiction", "isbn13": "9780375869020", "currently_reading": False},
    {"title": "Year of Wonders", "author": "Geraldine Brooks", "rating": 6, "type": "fiction", "isbn13": "9780142000786", "currently_reading": False},
    {"title": "Nine Days", "author": "Toni Jordan", "rating": 6, "type": "fiction", "isbn13": "9781921922831", "currently_reading": False},
    {"title": "Slaughterhouse-Five", "author": "Kurt Vonnegut Jr.", "rating": 8, "type": "fiction", "isbn13": "slaughterhousefive", "currently_reading": False},
    {"title": "Of Mice and Men", "author": "John Steinbeck", "rating": 6, "type": "fiction", "isbn13": "9780140186420", "currently_reading": False},
    {"title": "Holes (Holes, #1)", "author": "Louis Sachar", "rating": 6, "type": "fiction", "isbn13": "holes", "currently_reading": False},
    {"title": "QED: The Strange Theory of Light and Matter", "author": "Richard P. Feynman", "rating": 8, "type": "nonfiction", "isbn13": "9780691024172", "currently_reading": False},
    {"title": "The Doors of Perception & Heaven and Hell", "author": "Aldous Huxley", "rating": 8, "type": "nonfiction", "isbn13": "thedoorsofperceptionandheavenandhell", "currently_reading": False},
    {"title": "The Stranger", "author": "Albert Camus", "rating": 8, "type": "fiction", "isbn13": "9780141182506", "currently_reading": False},
    {"title": "Fahrenheit 451", "author": "Ray Bradbury", "rating": 6, "type": "fiction", "isbn13": "9781451673319", "currently_reading": False},
    {"title": "Mortality", "author": "Christopher Hitchens", "rating": 8, "type": "nonfiction", "isbn13": "9781455502752", "currently_reading": False},
    {"title": "Letter to a Christian Nation", "author": "Sam Harris", "rating": 6, "type": "nonfiction", "isbn13": "9780307265777", "currently_reading": False},
    {"title": "A Room of One's Own", "author": "Virginia Woolf", "rating": 8, "type": "nonfiction", "isbn13": "aroomofonesown", "currently_reading": False},
    {"title": "Free Will", "author": "Sam Harris", "rating": 8, "type": "nonfiction", "isbn13": "9781451683400", "currently_reading": False},
    {"title": "A Brief History of Time", "author": "Stephen Hawking", "rating": 6, "type": "nonfiction", "isbn13": "9780553176988", "currently_reading": False},
    {"title": "The Blind Watchmaker: Why the Evidence of Evolution Reveals a Universe Without Design", "author": "Richard Dawkins", "rating": 8, "type": "nonfiction", "isbn13": "9780141026169", "currently_reading": False},
    {"title": "Crime and Punishment", "author": "Fyodor Dostoevsky", "rating": 8, "type": "fiction", "isbn13": "9780143058144", "currently_reading": False}
]



def get_goodreads_cover(book, index, total):
    if not book.get('isbn13'):
        print(f"⊘ Skipped (no ISBN): {book['title']}")
        return
    
    # Search Goodreads by ISBN
    search_url = f"https://www.goodreads.com/search?q={book['isbn13']}"
    
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        
        response = requests.get(search_url, headers=headers, timeout=10)
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find the img tag with class "ResponsiveImage" inside the book cover area
        img_tag = soup.find('img', class_='ResponsiveImage', role='presentation')
        
        if img_tag and img_tag.get('src'):
            cover_url = img_tag['src']
            
            # Make sure we're not getting a placeholder/ad
            if 'goodreads.com' in cover_url or 'gr-assets.com' in cover_url:
                # Download the image
                img_response = requests.get(cover_url, timeout=10)
                
                # Check if we actually got image data (not empty/error)
                if img_response.status_code == 200 and len(img_response.content) > 1000:
                    # Get file extension from URL
                    ext = 'jpg' if '.jpg' in cover_url else 'png'
                    filepath = f"media/bookshelf/covers/{book['isbn13']}.{ext}"
                    
                    # Save directly without conversion/compression
                    with open(filepath, 'wb') as f:
                        f.write(img_response.content)
                    
                    print(f"✓ [{index}/{total}] {book['title']}")
                    return
        
        print(f"✗ [{index}/{total}] {book['title']} - Cover not found")
        
    except Exception as e:
        print(f"✗ [{index}/{total}] {book['title']} - Error: {e}")
    
    # Be respectful with requests
    time.sleep(1)

print(f"Starting download of {len(books)} covers from Goodreads...\n")

for i, book in enumerate(books, 1):
    get_goodreads_cover(book, i, len(books))

print("\n🎉 Done! Check the ./covers folder")
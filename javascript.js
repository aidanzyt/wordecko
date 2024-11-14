// Game data
const DAILY_WORDS = [
  {
      word: 'HAPPY',
      synonyms: ['JOYFUL', 'CHEERFUL', 'MERRY', 'GLAD', 'DELIGHTED', 'PLEASED', 'ELATED', 'JUBILANT', 'BLISSFUL', 'CONTENT']
  },
  {
      word: 'SMART',
      synonyms: ['CLEVER', 'INTELLIGENT', 'BRIGHT', 'WISE', 'SHARP', 'BRILLIANT', 'ASTUTE', 'GIFTED', 'QUICK', 'KEEN']
  },
  {
      word: 'STRONG',
      synonyms: ['POWERFUL', 'MIGHTY', 'ROBUST', 'TOUGH', 'STURDY', 'SOLID', 'FIRM', 'MUSCULAR', 'HARDY', 'FORCEFUL']
  },
  {
    word: 'CHAIR',
    synonyms: ['SEAT', 'STOOL', 'BENCH', 'THRONE', 'RECLINER', 'ARMCHAIR']
},
{
    word: 'CAR',
    synonyms: ['VEHICLE', 'AUTOMOBILE', 'RIDE', 'WHEELS', 'MOTORCAR']
},
{
    word: 'DOG',
    synonyms: ['CANINE', 'PUP', 'POOCH', 'HOUND', 'MUTT']
},
{
    word: 'HOUSE',
    synonyms: ['HOME', 'RESIDENCE', 'ABODE', 'DWELLING', 'LODGE', 'COTTAGE', 'APARTMENT']
},
{
    word: 'COMPUTER',
    synonyms: ['PC', 'LAPTOP', 'DESKTOP', 'MACHINE', 'DEVICE', 'SYSTEM']
},
{
    word: 'PHONE',
    synonyms: ['MOBILE', 'CELL', 'SMARTPHONE', 'HANDSET', 'DEVICE']
},
{
    word: 'BOOK',
    synonyms: ['NOVEL', 'VOLUME', 'TEXT', 'MANUSCRIPT', 'PUBLICATION']
},
{
    word: 'COFFEE',
    synonyms: ['BREW', 'JAVA', 'ESPRESSO', 'LATTE', 'MOCHA', 'CAFFEINE']
},
{
    word: 'BAG',
    synonyms: ['SACK', 'PURSE', 'BACKPACK', 'TOTE', 'CARRIER']
},
{
    word: 'BICYCLE',
    synonyms: ['BIKE', 'CYCLE', 'TWO-WHEELER', 'VELO']
},
{
    word: 'TREE',
    synonyms: ['OAK', 'PINE', 'PLANT', 'SAPLING', 'FIR', 'PALM']
},
{
    word: 'HAT',
    synonyms: ['CAP', 'BONNET', 'FEDORA', 'BEANIE', 'BERET']
},
{
    word: 'SHOES',
    synonyms: ['SNEAKERS', 'BOOTS', 'FOOTWEAR', 'LOAFERS', 'SANDALS']
},
{
    word: 'TABLE',
    synonyms: ['DESK', 'BENCH', 'COUNTER', 'PLATFORM', 'STAND']
},
{
    word: 'CLOCK',
    synonyms: ['WATCH', 'TIMEPIECE', 'ALARM', 'TIMER']
},
{
    word: 'LIGHT',
    synonyms: ['LAMP', 'BULB', 'FLASH', 'GLOW', 'BEAM']
},
{
    word: 'FRUIT',
    synonyms: ['BERRY', 'CITRUS', 'APPLE', 'BANANA', 'MELON']
},
{
    word: 'BREAD',
    synonyms: ['LOAF', 'ROLL', 'BUN', 'BAGUETTE', 'TOAST']
},
{
    word: 'GLASSES',
    synonyms: ['SPECTACLES', 'SHADES', 'GOGGLES', 'LENSES']
},
{
    word: 'PAINTING',
    synonyms: ['ART', 'PORTRAIT', 'CANVAS', 'PICTURE', 'MURAL']
},
{
  word: 'LAUGH',
  synonyms: ['GIGGLE', 'CHUCKLE', 'SNICKER', 'CACKLE', 'GUFFAW', 'SMILE', 'TITTER', 'HOWL', 'ROAR', 'SNORT']
},
{
  word: 'LOVE',
  synonyms: ['ADORE', 'CHERISH', 'TREASURE', 'PRIZE', 'VALUE', 'CARE', 'DEVOTION', 'PASSION', 'AFFECTION', 'ADMIRE']
},
{
  word: 'FAST',
  synonyms: ['QUICK', 'RAPID', 'SWIFT', 'SPEEDY', 'BRISK', 'HURRIED', 'EXPEDITIOUS', 'FLEET', 'PROMPT', 'NIMBLE']
},
{
  word: 'QUIET',
  synonyms: ['SILENT', 'HUSHED', 'MUTED', 'SOFT', 'CALM', 'PEACEFUL', 'STILL', 'NOISELESS', 'MELLOW', 'SUBDUED']
},
{
  word: 'FUNNY',
  synonyms: ['HILARIOUS', 'AMUSING', 'COMICAL', 'HUMOROUS', 'ENTERTAINING', 'WITTY', 'JOLLY', 'UPLIFTING', 'LIGHTHEARTED', 'PLAYFUL']
},
{
  word: 'EASY',
  synonyms: ['SIMPLE', 'STRAIGHTFORWARD', 'EFFORTLESS', 'CLEAR', 'BASIC', 'SMOOTH', 'UNDemanding', 'MANAGEABLE', 'UNCOMPLICATED', 'PAINLESS']
},
{
  word: 'STRANGE',
  synonyms: ['WEIRD', 'ODD', 'UNUSUAL', 'PECULIAR', 'BIZARRE', 'QUIRKY', 'ECCENTRIC', 'OUTLANDISH', 'UNCOMMON', 'FREAKY']
},
{
  word: 'BRIGHT',
  synonyms: ['SHINY', 'VIVID', 'LUMINOUS', 'RADIANT', 'GLOWING', 'DAZZLING', 'CLEAR', 'ILLUMINATED', 'SPARKLING', 'SHIMMERING']
},
{
  word: 'KIND',
  synonyms: ['CARING', 'COMPASSIONATE', 'GENEROUS', 'THOUGHTFUL', 'SYMPATHETIC', 'BENEVOLENT', 'FRIENDLY', 'GENTLE', 'WARM', 'CONSIDERATE']
},
{
  word: 'BRAVE',
  synonyms: ['COURAGEOUS', 'FEARLESS', 'VALIANT', 'HEROIC', 'GUTSY', 'BOLD', 'DAUNTLESS', 'DARING', 'ADVENTUROUS', 'STRONG']
},
{
  word: 'TIRED',
  synonyms: ['WEARY', 'EXHAUSTED', 'SLEEPY', 'FATIGUED', 'DRAINED', 'BEAT', 'WORN', 'DROWSY', 'RUN-DOWN', 'FRAZZLED']
},
{
  word: 'QUIRKY',
  synonyms: ['ODD', 'UNIQUE', 'DIFFERENT', 'ECCENTRIC', 'UNUSUAL', 'PECULIAR', 'WHIMSICAL', 'UNCONVENTIONAL', 'WEIRD', 'BIZARRE']
},
{
  word: 'HURRY',
  synonyms: ['RUSH', 'HASTEN', 'SPEED', 'DASH', 'RACE', 'ZIP', 'FLY', 'HUSTLE', 'SCURRY', 'SCAMPER']
},
{
  word: 'LOVELY',
  synonyms: ['BEAUTIFUL', 'ATTRACTIVE', 'CHARMING', 'DELIGHTFUL', 'GRACEFUL', 'PLEASANT', 'ADORABLE', 'SWEET', 'CUTE', 'ELEGANT']
},
{
  word: 'SHINE',
  synonyms: ['GLOW', 'RADIATE', 'SPARKLE', 'GLEAM', 'GLITTER', 'GLIMMER', 'FLASH', 'BEAM', 'SHIMMER', 'DAZZLE']
},
{
  word: 'SAFE',
  synonyms: ['SECURE', 'PROTECTED', 'GUARDED', 'HARMLESS', 'SHELTERED', 'RISK-FREE', 'SHIELDED', 'UNTOUCHED', 'UNDISTURBED', 'STABLE']
},
{
  word: 'FUN',
  synonyms: ['ENJOYABLE', 'EXCITING', 'AMUSING', 'ENTERTAINING', 'PLEASANT', 'DELIGHTFUL', 'THRILLING', 'UPBEAT', 'JOYFUL', 'HAPPY']
},
{
  word: 'SUN',
  synonyms: ['STAR', 'SOLAR', 'DAYLIGHT', 'SUNSHINE', 'RAYS']
},
{
  word: 'MUSIC',
  synonyms: ['SONG', 'MELODY', 'TUNE', 'HARMONY', 'BEAT', 'RHYTHM']
},
{
  word: 'OCEAN',
  synonyms: ['SEA', 'WAVES', 'TIDE', 'SURF', 'DEEP', 'WATERS']
},
{
  word: 'DREAM',
  synonyms: ['VISION', 'FANTASY', 'ASPIRATION', 'GOAL', 'IMAGINATION']
},
{
  word: 'PARTY',
  synonyms: ['CELEBRATION', 'FEST', 'GATHERING', 'BASH', 'FIESTA']
},
{
  word: 'RAIN',
  synonyms: ['SHOWER', 'DRIZZLE', 'DOWNPOUR', 'SPRINKLE', 'STORM']
},
{
  word: 'MOUNTAIN',
  synonyms: ['PEAK', 'SUMMIT', 'HILL', 'RIDGE', 'CLIFF']
},
{
  word: 'MOVIE',
  synonyms: ['FILM', 'PICTURE', 'FEATURE', 'SHOW', 'FLICK']
},
{
  word: 'PASTA',
  synonyms: ['NOODLES', 'SPAGHETTI', 'MACARONI', 'PENNE', 'FETTUCCINE']
},
{
  word: 'FOREST',
  synonyms: ['WOODLAND', 'WOODS', 'JUNGLE', 'GROVE', 'THICKET']
},
{
  word: 'SMILE',
  synonyms: ['GRIN', 'BEAM', 'SMIRK', 'LAUGH', 'HAPPY FACE']
},
{
  word: 'BOOKSTORE',
  synonyms: ['SHOP', 'LIBRARY', 'BOOKSHOP', 'STORE']
},
{
  word: 'PLANET',
  synonyms: ['WORLD', 'GLOBE', 'SPHERE', 'EARTH', 'HEAVENLY BODY']
},
{
  word: 'STORM',
  synonyms: ['THUNDER', 'LIGHTNING', 'GALE', 'TEMPEST', 'TORNADO']
},
{
  word: 'BALLOON',
  synonyms: ['BUBBLE', 'BLOWUP', 'INFLATABLE', 'FLOAT']
},
{
  word: 'GUITAR',
  synonyms: ['STRING', 'INSTRUMENT', 'ACOUSTIC', 'ELECTRIC', 'BASS']
},
{
  word: 'CANDLE',
  synonyms: ['WAX', 'LIGHT', 'FLAME', 'TAPER', 'TEALIGHT']
},
{
  word: 'GAME',
  synonyms: ['CONTEST', 'COMPETITION', 'MATCH', 'SPORT', 'TOURNAMENT']
},
{
  word: 'TROPHY',
  synonyms: ['AWARD', 'PRIZE', 'MEDAL', 'CUP', 'RECOGNITION']
},
{
  word: 'FLOWER',
  synonyms: ['BLOOM', 'BLOSSOM', 'PETAL', 'FLORA', 'BUD']
},
{
  word: 'CITY',
  synonyms: ['TOWN', 'METROPOLIS', 'URBAN', 'VILLAGE', 'DOWNTOWN']
},
{
  word: 'DESERT',
  synonyms: ['SAND', 'DUNES', 'WASTELAND', 'OASIS', 'ARID']
},
{
  word: 'BREEZE',
  synonyms: ['WIND', 'GUST', 'DRAFT', 'WHIFF', 'AIR']
},
{
  word: 'JOURNEY',
  synonyms: ['TRIP', 'VOYAGE', 'EXPEDITION', 'ODYSSEY', 'ADVENTURE']
},
{
  word: 'SPICE',
  synonyms: ['HERB', 'SEASONING', 'FLAVOR', 'ZEST', 'AROMA']
},
{
  word: 'CLOUD',
  synonyms: ['PUFF', 'MIST', 'FOG', 'HUMIDITY', 'VAPOR']
},
{
  word: 'HONEY',
  synonyms: ['NECTAR', 'SWEET', 'SYRUP', 'AMBER', 'GOLD']
},
{
  word: 'FRIEND',
  synonyms: ['PAL', 'BUDDY', 'ALLY', 'COMPANION', 'MATE']
},
{
  word: 'TRUTH',
  synonyms: ['FACT', 'REALITY', 'VERITY', 'HONESTY', 'ACCURACY']
},
{
  word: 'WATERFALL',
  synonyms: ['CASCADE', 'FALLS', 'RAPIDS', 'PLUNGE', 'STREAM']
},
{
  word: 'COMET',
  synonyms: ['ASTEROID', 'METEOR', 'SHOOTING STAR', 'CELESTIAL']
},
{
  word: 'FIRE',
  synonyms: ['FLAME', 'BLAZE', 'INFERNO', 'HEAT', 'EMBER']
},
{
  word: 'ICE',
  synonyms: ['FROST', 'SLEET', 'GLACIER', 'HAIL', 'SNOW']
},
{
  word: 'MEADOW',
  synonyms: ['FIELD', 'GRASSLAND', 'PASTURE', 'PLAIN', 'PRAIRIE']
},
{
  word: 'STARS',
  synonyms: ['TWINKLES', 'GALAXIES', 'LIGHTS', 'CONSTELLATIONS', 'SPARKLES']
},
{
  word: 'JUNGLE',
  synonyms: ['RAINFOREST', 'TROPICS', 'WILDERNESS', 'BUSH', 'THICKET']
},
{
  word: 'STORY',
  synonyms: ['TALE', 'NARRATIVE', 'FABLE', 'SAGA', 'LEGEND']
},
{
  word: 'PAINT',
  synonyms: ['COLOR', 'COAT', 'TINT', 'HUE', 'PIGMENT']
},
{
  word: 'TOOL',
  synonyms: ['INSTRUMENT', 'DEVICE', 'APPARATUS', 'UTENSIL', 'GEAR']
},
{
  word: 'TUNNEL',
  synonyms: ['PASSAGE', 'CHANNEL', 'TUBE', 'SUBWAY', 'UNDERPASS']
},
{
  word: 'WIZARD',
  synonyms: ['MAGICIAN', 'SORCERER', 'ENCHANTER', 'MAGE', 'SPELLCASTER']
},
{
  word: 'ISLAND',
  synonyms: ['ISLE', 'CAY', 'ATOLL', 'KEY', 'LAND']
},
{
  word: 'GOLD',
  synonyms: ['TREASURE', 'METAL', 'FORTUNE', 'WEALTH', 'ORE']
},
{
  word: 'RIVER',
  synonyms: ['STREAM', 'BROOK', 'CREEK', 'WATERWAY', 'CHANNEL']
},
{
  word: 'SPACE',
  synonyms: ['COSMOS', 'UNIVERSE', 'GALAXY', 'VOID', 'INFINITY']
},
{
  word: 'GHOST',
  synonyms: ['SPIRIT', 'SPECTER', 'PHANTOM', 'APPARITION', 'WRAITH']
},
{
  word: 'WIND',
  synonyms: ['BREEZE', 'GUST', 'GALE', 'DRAFT', 'WHIRL']
},
{
  word: 'SHIP',
  synonyms: ['VESSEL', 'BOAT', 'CRAFT', 'YACHT', 'LINER']
},
{
  word: 'CAVE',
  synonyms: ['GROTTO', 'HOLLOW', 'CAVERN', 'DEN', 'CHAMBER']
},
{
  word: 'FROG',
  synonyms: ['AMPHIBIAN', 'TOAD', 'HOPPER', 'LEAPER']
},
{
  word: 'RACE',
  synonyms: ['COMPETITION', 'CONTEST', 'TOURNAMENT', 'HEAT', 'RALLY']
},
{
  word: 'MIRROR',
  synonyms: ['GLASS', 'REFLECTOR', 'LOOKING GLASS']
},
{
  word: 'CASTLE',
  synonyms: ['FORT', 'PALACE', 'FORTRESS', 'MANOR', 'STRONGHOLD']
},
{
  word: 'BUBBLE',
  synonyms: ['BLOB', 'SPHERE', 'BALLOON', 'DROP', 'GLOBULE']
},
{
  word: 'ROCK',
  synonyms: ['STONE', 'BOULDER', 'PEBBLE', 'MINERAL', 'MASS']
},
{
  word: 'PIANO',
  synonyms: ['KEYBOARD', 'INSTRUMENT', 'GRAND', 'UPRIGHT']
},
{
  word: 'BASKET',
  synonyms: ['HAMPER', 'BOWL', 'CONTAINER', 'BIN', 'CRATE']
},
{
  word: 'BRIDGE',
  synonyms: ['SPAN', 'OVERPASS', 'VIADUCT', 'CAUSEWAY']
},
{
  word: 'LADDER',
  synonyms: ['STAIRS', 'STEPS', 'RUNG', 'SCAFFOLD']
},
{
  word: 'RAINBOW',
  synonyms: ['ARC', 'SPECTRUM', 'BOW', 'COLORS', 'BAND']
},
{
  word: 'FARM',
  synonyms: ['RANCH', 'HOMESTEAD', 'ESTATE', 'PLANTATION', 'ACREAGE']
},
{
  word: 'ROSE',
  synonyms: ['FLOWER', 'BLOSSOM', 'BLOOM', 'PETAL', 'BUD']
},
{
  word: 'BRICK',
  synonyms: ['BLOCK', 'STONE', 'MASONRY', 'TILE', 'SLAB']
},
{
  word: 'NEIGHBOR',
  synonyms: ['RESIDENT', 'NEARBY', 'LOCAL', 'FRIEND', 'COMMUNITY']
},
{
  word: 'SCHOOL',
  synonyms: ['ACADEMY', 'INSTITUTE', 'COLLEGE', 'UNIVERSITY', 'EDUCATION']
},
{
  word: 'DRUM',
  synonyms: ['BONGO', 'SNARE', 'BASS', 'BEAT', 'PERCUSSION']
},
{
  word: 'WINDOW',
  synonyms: ['PANE', 'GLASS', 'VIEW', 'PORTAL', 'SKYLIGHT']
},
{
  word: 'DESK',
  synonyms: ['TABLE', 'WORKSPACE', 'BENCH', 'COUNTER', 'STAND']
},
{
  word: 'PILLOW',
  synonyms: ['CUSHION', 'PAD', 'BOLSTER', 'SUPPORT']
},
{
  word: 'DOOR',
  synonyms: ['ENTRANCE', 'GATE', 'PORTAL', 'ENTRY']
},
{
  word: 'HILL',
  synonyms: ['MOUND', 'KNOLL', 'ELEVATION', 'UPLAND']
},
{
  word: 'BRIDGE',
  synonyms: ['CONNECTOR', 'SPAN', 'OVERPASS', 'LINK']
},
{
  word: 'CLOUD',
  synonyms: ['MIST', 'FOG', 'VAPOR', 'HAZE']
},
{
  word: 'PLANE',
  synonyms: ['AIRCRAFT', 'JET', 'FLIGHT', 'AIRLINER']
},
{
  word: 'PEACE',
  synonyms: ['TRANQUILITY', 'HARMONY', 'CALM', 'SERENITY']
},
{
  word: 'MOUNTAIN',
  synonyms: ['HILL', 'PEAK', 'SUMMIT', 'RIDGE']
},
{
  word: 'VAN',
  synonyms: ['VEHICLE', 'TRUCK', 'MINIVAN', 'SUV']
},
{
  word: 'LAKE',
  synonyms: ['POND', 'WATER', 'RESERVOIR', 'POOL']
},
{
  word: 'ART',
  synonyms: ['PAINTING', 'SCULPTURE', 'DESIGN', 'DRAWING']
},
{
  word: 'SMOKE',
  synonyms: ['FOG', 'MIST', 'HAZE', 'VAPOR']
},
{
  word: 'BEACH',
  synonyms: ['SHORE', 'COAST', 'SAND', 'SEASIDE', 'WATERFRONT']
},
{
  word: 'RAIN',
  synonyms: ['SHOWERS', 'DRIZZLE', 'DOWNPOUR', 'STORM', 'PRECIPITATION']
},
{
  word: 'COOKIE',
  synonyms: ['BISCUIT', 'SNACK', 'TREAT', 'DESSERT', 'SWEET']
},
{
  word: 'PARK',
  synonyms: ['GARDEN', 'RESERVE', 'GREENSPACE', 'FIELD', 'PLAYGROUND']
},
{
  word: 'BOAT',
  synonyms: ['VESSEL', 'SHIP', 'CRAFT', 'YACHT', 'BARGE']
},
{
  word: 'VEGETABLE',
  synonyms: ['PRODUCE', 'GREENS', 'PLANT', 'VEGGIE']
},
{
  word: 'COAT',
  synonyms: ['JACKET', 'OVERCOAT', 'WRAP', 'PARKA', 'CLOAK']
},
{
  word: 'RIVER',
  synonyms: ['STREAM', 'WATERWAY', 'BROOK', 'CURRENT']
},
{
  word: 'CASTLE',
  synonyms: ['PALACE', 'FORTRESS', 'MANSION', 'STRONGHOLD']
},
{
  word: 'CARPET',
  synonyms: ['RUG', 'MAT', 'RUNNER', 'TAPESTRY']
},
{
  word: 'STADIUM',
  synonyms: ['ARENA', 'FIELD', 'COLISEUM', 'BALLPARK']
},
{
  word: 'GLUE',
  synonyms: ['ADHESIVE', 'PASTE', 'CEMENT', 'BOND']
},
{
  word: 'SALAD',
  synonyms: ['MIX', 'BOWL', 'GREENS', 'VEGGIES']
},
{
  word: 'TOY',
  synonyms: ['PLAYTHING', 'DOLL', 'GAME', 'MODEL']
},
{
  word: 'MAP',
  synonyms: ['CHART', 'ATLAS', 'GUIDE', 'DIAGRAM']
},
{
  word: 'SING',
  synonyms: ['CHANT', 'HUM', 'SERENADE', 'CROON']
},
{
  word: 'DESERT',
  synonyms: ['WASTELAND', 'DUNES', 'SANDS', 'OASIS']
},
{
  word: 'BRUSH',
  synonyms: ['COMB', 'GROOM', 'SWEEP', 'POLISH']
},
{
  word: 'SOCKS',
  synonyms: ['STOCKINGS', 'FOOTWEAR', 'HOSE', 'KNITWEAR']
},
{
  word: 'CANDLE',
  synonyms: ['WAX', 'FLAME', 'TAPER', 'LIGHT']
}
];

const colorThemes = [
  { name: '🏖️ Beach', background: 'linear-gradient(120deg, #fdeb93 0%, #f5b785 100%)' },
  { name: '💼 PwC', background: 'linear-gradient(120deg, #ffffff 0%, #d35400 100%)' },
  { name: '🇲🇪 Montenegro', background: 'linear-gradient(120deg, #cb3f3f 0%, #ffe900 100%)' },
  { name: '🍂 Crunchy Leaves', background: 'linear-gradient(120deg, #ffcc80 0%, #d84315 100%)' },
  { name: '🥛 Doogh', background: 'linear-gradient(120deg, #e0f7fa 0%, #80deea 100%)' }
];

// Game state
let foundSynonyms = [];
let gameOver = false;
let dailyWord = null;
let streak = parseInt(localStorage.getItem('streak')) || 0;
let lastPlayDate = localStorage.getItem('lastPlayDate');
let currentTheme = 0;

// Initialize game when document is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateStreakDisplay();
  checkDailyPlay();
  initializeThemeSystem();

  window.startGame = function() {
      if (hasPlayedToday()) {
          showPopupMessage("Come back tomorrow for a new word! 🌟");
          return;
      }
      
      dailyWord = getDailyWord();
      document.getElementById("introScreen").style.display = "none";
      document.getElementById("game").style.display = "flex";
      initializeGame();
  };

  window.closeEndScreen = function() {
      document.getElementById("endScreen").style.display = "none";
      document.getElementById("game").style.display = "none";
      document.getElementById("introScreen").style.display = "flex";
      checkDailyPlay();
  };

  const wordInput = document.getElementById("wordInput");
  const submitButton = document.getElementById("submitButton");
  const hintButton = document.querySelector(".hint-btn");
  const giveUpButton = document.querySelector(".give-up-btn");

  submitButton.addEventListener('click', submitWord);
  wordInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') submitWord();
  });
  hintButton.addEventListener('click', showHint);
  giveUpButton.addEventListener('click', handleGiveUp);
});

// Initialize theme system
function initializeThemeSystem() {
  // Load saved theme preference
  const savedTheme = localStorage.getItem('preferredTheme');
  if (savedTheme !== null) {
      currentTheme = parseInt(savedTheme);
      applyTheme(currentTheme);
  }
}

// Apply a specific theme
function applyTheme(themeIndex) {
  const theme = colorThemes[themeIndex];
  document.body.style.background = theme.background;
}

// Cycle to next theme
function cycleTheme() {
  currentTheme = (currentTheme + 1) % colorThemes.length;
  const theme = colorThemes[currentTheme];
  
  // Apply the theme
  applyTheme(currentTheme);
  
  // Show theme name message
  showThemeMessage(theme.name);
  
  // Save preference
  localStorage.setItem('preferredTheme', currentTheme);
}

// Theme change message display
function showThemeMessage(message) {
  const popup = document.createElement('div');
  popup.className = 'theme-message';
  popup.textContent = message;
  
  // Style the popup
  popup.style.position = 'fixed';
  popup.style.top = '20px';
  popup.style.left = '50%';
  popup.style.transform = 'translateX(-50%)';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  popup.style.color = 'white';
  popup.style.padding = '10px 20px';
  popup.style.borderRadius = '5px';
  popup.style.zIndex = '1000';
  
  document.body.appendChild(popup);
  
  // Remove after 2 seconds
  setTimeout(() => popup.remove(), 2000);
}

function updateStreak() {
  const today = new Date().toDateString();
  
  if (lastPlayDate !== today) {
      if (lastPlayDate) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          if (lastPlayDate !== yesterday.toDateString()) {
              streak = 1;
          } else {
              streak++;
          }
      } else {
          streak = 1;
      }
      
      localStorage.setItem('lastPlayDate', today);
      localStorage.setItem('streak', streak);
      lastPlayDate = today;
  }
  
  updateStreakDisplay();
}

function updateStreakDisplay() {
  document.querySelector('.high-score').innerHTML = 
      `🔥 Daily Streak: ${streak}`;
}

function getDailyWord() {
  // Get current time in PST/PDT
  const now = new Date();
  const pstDate = new Date(now.toLocaleString("en-US", {timeZone: "America/Los_Angeles"}));
  
  // Calculate days since epoch (January 1, 1970)
  // This ensures we don't repeat words until we've used them all
  const startDate = new Date('2024-01-01T00:00:00-08:00'); // PST start date
  const daysSinceStart = Math.floor((pstDate - startDate) / (1000 * 60 * 60 * 24));
  
  // Get the word index, only moving to next cycle when all words are used
  const cycleNumber = Math.floor(daysSinceStart / DAILY_WORDS.length);
  const indexInCycle = daysSinceStart % DAILY_WORDS.length;
  
  // Shuffle array deterministically based on cycle number
  let shuffledIndices = Array.from({length: DAILY_WORDS.length}, (_, i) => i);
  
  // Use cycle number as seed for shuffling
  let seed = cycleNumber;
  for (let i = shuffledIndices.length - 1; i > 0; i--) {
      // Generate next random number in sequence
      seed = (seed * 9301 + 49297) % 233280;
      const rnd = seed / 233280;
      
      // Swap elements
      const j = Math.floor(rnd * (i + 1));
      [shuffledIndices[i], shuffledIndices[j]] = [shuffledIndices[j], shuffledIndices[i]];
  }
  
  // Get today's word using the shuffled index
  return DAILY_WORDS[shuffledIndices[indexInCycle]];
}

function addThemeStyles() {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = themeStyles;
  document.head.appendChild(styleSheet);
}

function checkDailyPlay() {
  if (hasPlayedToday()) {
      const playButton = document.querySelector('.play-button');
      playButton.textContent = "Come back tomorrow!";
      playButton.disabled = true;
      playButton.style.backgroundColor = '#cccccc';
      
      document.querySelector('.intro-container p').textContent = 
          `You've already played today! Come back tomorrow for a new word. Current streak: ${streak} 🔥`;
  }
}

function hasPlayedToday() {
  const lastPlayed = localStorage.getItem('lastPlayedDate');
  const today = new Date().toDateString();
  return lastPlayed === today;
}

function markAsPlayed() {
  localStorage.setItem('lastPlayedDate', new Date().toDateString());
}

function initializeGame() {
  foundSynonyms = [];
  gameOver = false;
  
  const wordDisplay = document.querySelector(".target-word");
  wordDisplay.textContent = dailyWord.word;
  const totalSynonyms = dailyWord.synonyms.length; // Get actual count
  updateProgressDisplay(totalSynonyms);
  document.querySelector(".found-words-grid").innerHTML = "";
  document.getElementById("wordInput").value = "";
  document.getElementById("errorMessage").textContent = "";
}

function submitWord() {
  if (gameOver) return;

  const wordInput = document.getElementById("wordInput");
  const word = wordInput.value.trim().toUpperCase();
  
  if (word.length < 2) {
      showError("Word must be at least 2 letters long");
      return;
  }

  if (foundSynonyms.includes(word)) {
      showError("You've already found this synonym!");
      wordInput.value = "";
      wordInput.focus();
      return;
  }

  if (dailyWord.synonyms.includes(word)) {
      // Add the word to found synonyms
      foundSynonyms.push(word);
      const totalSynonyms = dailyWord.synonyms.length;
      
      // Clear and focus input immediately
      wordInput.value = "";
      wordInput.focus();
      
      // Update display
      updateProgressDisplay(totalSynonyms);
      
      // Show success popup
      const popup = document.createElement("div");
      popup.className = "popup-message";
      popup.textContent = `Great find! ${foundSynonyms.length}/${totalSynonyms} found! 🌟`;
      document.body.appendChild(popup);
      
      // Remove popup after animation
      setTimeout(() => {
          if (popup && popup.parentNode) {
              popup.parentNode.removeChild(popup);
          }
      }, 1500);

      if (foundSynonyms.length === totalSynonyms) {
          handleGameWin();
      }
  } else {
      showError("Not a valid synonym");
      wordInput.value = "";
      wordInput.focus();
  }
}

// Update the showPopupMessage function as well
function showPopupMessage(message) {
  const existingPopups = document.querySelectorAll('.popup-message');
  existingPopups.forEach(popup => popup.remove());

  const popup = document.createElement("div");
  popup.className = "popup-message";
  popup.textContent = message;
  document.body.appendChild(popup);
  
  setTimeout(() => {
      if (popup && popup.parentNode) {
          popup.parentNode.removeChild(popup);
      }
  }, 1500);
}

function updateProgressDisplay(totalSynonyms) {
  document.querySelector(".score-display").textContent = 
      `Progress: ${foundSynonyms.length}/${totalSynonyms} synonyms found`;
  updateFoundWords();
  // Update the high score display too
  document.getElementById("highScoreDisplay").textContent = 
      `${foundSynonyms.length}/${totalSynonyms}`;
}

function updateFoundWords() {
  const wordsGrid = document.querySelector(".found-words-grid");
  wordsGrid.innerHTML = "";
  
  foundSynonyms.sort().forEach(word => {
      const wordElement = document.createElement("div");
      wordElement.className = "word-card";
      wordElement.textContent = word;
      wordsGrid.appendChild(wordElement);
  });
}

function showHint() {
  // Convert all found synonyms to uppercase for comparison
  const upperFoundSynonyms = foundSynonyms.map(word => word.toUpperCase());
  
  // Filter out synonyms that have already been found, comparing in uppercase
  const remainingSynonyms = dailyWord.synonyms.filter(syn => 
      !upperFoundSynonyms.includes(syn.toUpperCase())
  );
  
  if (remainingSynonyms.length > 0) {
      // Pick a random word from the remaining synonyms
      const randomIndex = Math.floor(Math.random() * remainingSynonyms.length);
      const randomSynonym = remainingSynonyms[randomIndex];
      
      // Show first two letters as a hint
      showPopupMessage(`Hint: Try a word starting with ${randomSynonym.substring(0, 2)}...`);
  } else {
      // If all words have been found, show a different message
      showPopupMessage("You've found all the synonyms! 🎉");
  }
}

function handleGameWin() {
  gameOver = true;
  updateStreak();
  markAsPlayed();
  showPopupMessage("Congratulations! You found all 10 synonyms! 🎉");
  setTimeout(showEndScreen, 1500);
}

function handleGiveUp() {
  gameOver = true;
  updateStreak();
  markAsPlayed();
  showEndScreen();
}

function showEndScreen() {
  const totalSynonyms = dailyWord.synonyms.length;
  document.getElementById("endScreen").style.display = "flex";
  
  // Create the end screen content with both share and return home buttons
  document.querySelector(".popup").innerHTML = `
      <h2>Game Over!</h2>
      <p>Found: ${foundSynonyms.length}/${totalSynonyms} synonyms</p>
      <div id="wordSummary">
          <h3>All Possible Synonyms:</h3>
          <div class="all-words-grid"></div>
      </div>
      <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
          <button id="shareButton" class="play-button" style="width: auto; margin: 0;" onclick="shareScore()">Share Score</button>
          <button id="returnHomeButton" class="play-button" style="width: auto; margin: 0; background-color: #6c757d;" onclick="returnHome()">Return Home</button>
      </div>
  `;
  
  // Add words to the grid
  const wordSummary = document.querySelector(".all-words-grid");
  wordSummary.innerHTML = "";
  
  dailyWord.synonyms.forEach(word => {
      const wordElement = document.createElement("div");
      wordElement.className = `word-card ${foundSynonyms.includes(word) ? 'found-word' : 'unfound-word'}`;
      wordElement.textContent = word;
      wordSummary.appendChild(wordElement);
  });
}

function returnHome() {
  document.getElementById("endScreen").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("introScreen").style.display = "flex";
  checkDailyPlay();
}

function shareScore() {
  const totalSynonyms = dailyWord.synonyms.length;
  const foundCount = foundSynonyms.length;
  
  // Add performance emoji based on percentage found
  let performanceEmoji;
  const percentage = (foundCount / totalSynonyms) * 100;
  if (percentage < 25) performanceEmoji = "🌱";
  else if (percentage < 50) performanceEmoji = "🌿";
  else if (percentage < 75) performanceEmoji = "🌳";
  else if (percentage < 100) performanceEmoji = "🏆";
  else performanceEmoji = "👑";

  // Create grid of boxes showing found/unfound words
  const gridRows = [];
  let row = [];
  dailyWord.synonyms.forEach((_, index) => {
      if (index > 0 && index % 5 === 0) {
          gridRows.push(row.join(''));
          row = [];
      }
      row.push(index < foundCount ? '🟩' : '⬜');
  });
  if (row.length > 0) {
      gridRows.push(row.join(''));
  }

  // Create formatted share text
  const dateStr = new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const shareText = `Word Echo ${performanceEmoji} ${dateStr}\n` +
      `Word: ${dailyWord.word}\n` +
      `Found: ${foundCount}/${totalSynonyms}\n` +
      `${gridRows.join('\n')}\n` +
      `Daily Streak: ${streak} 🔥`;
  
  const shareUrl = window.location.href;
  const fullShareText = shareText + "\n\nPlay at: " + shareUrl;

  // Try native sharing first
  if (navigator.share) {
      navigator.share({
          title: "Word Echo",
          text: fullShareText
      }).catch(error => console.error("Error sharing:", error));
  } else {
      // Fallback to social media links
      document.querySelector(".popup").innerHTML = `
          <h2>Game Over!</h2>
          <p>Found: ${foundCount}/${totalSynonyms} synonyms</p>
          <div id="wordSummary">
              <h3>All Possible Synonyms:</h3>
              <div class="all-words-grid"></div>
          </div>
          <div class="share-buttons" style="margin-top: 20px; display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
              <a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(fullShareText)}" target="_blank" style="color: #1DA1F2; text-decoration: none; padding: 8px 16px; border-radius: 20px; background: #e8f5fd;">Twitter</a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}" target="_blank" style="color: #4267B2; text-decoration: none; padding: 8px 16px; border-radius: 20px; background: #e7eaf3;">Facebook</a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("Word Echo")}&summary=${encodeURIComponent(shareText)}" target="_blank" style="color: #0077B5; text-decoration: none; padding: 8px 16px; border-radius: 20px; background: #e1f0f8;">LinkedIn</a>
              <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(fullShareText)}" target="_blank" style="color: #25D366; text-decoration: none; padding: 8px 16px; border-radius: 20px; background: #e5f7ef;">WhatsApp</a>
              <a href="mailto:?subject=${encodeURIComponent("Check out Word Echo!")}&body=${encodeURIComponent(fullShareText)}" style="color: #D44638; text-decoration: none; padding: 8px 16px; border-radius: 20px; background: #fce8e6;">Email</a>
          </div>
          <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
              <button id="returnHomeButton" class="play-button" style="width: auto; margin: 0; background-color: #6c757d;" onclick="returnHome()">Return Home</button>
          </div>
      `;

      // Recreate the word grid
      const wordSummary = document.querySelector(".all-words-grid");
      wordSummary.innerHTML = "";
      dailyWord.synonyms.forEach(word => {
          const wordElement = document.createElement("div");
          wordElement.className = `word-card ${foundSynonyms.includes(word) ? 'found-word' : 'unfound-word'}`;
          wordElement.textContent = word;
          wordSummary.appendChild(wordElement);
      });
  }
}

function showError(message) {
  const errorMessage = document.getElementById("errorMessage");
  errorMessage.textContent = message;
  setTimeout(() => errorMessage.textContent = "", 2000);
}

function showPopupMessage(message) {
  const popup = document.createElement("div");
  popup.className = "popup-message";
  popup.textContent = message;
  document.body.appendChild(popup);
  setTimeout(() => popup.remove(), 1500);
}

function resetGame() {
  foundSynonyms = [];
  gameOver = false;
  document.querySelector(".found-words-grid").innerHTML = "";
  const totalSynonyms = dailyWord.synonyms.length;
  document.querySelector(".score-display").textContent = 
      `Progress: 0/${totalSynonyms} synonyms found`;
  document.getElementById("wordInput").value = "";
  document.getElementById("errorMessage").textContent = "";
}

// Game data
const DAILY_WORDS = [
{
    word: 'FAST',
    synonyms: ['QUICK', 'RAPID', 'SPEEDY', 'SWIFT', 'HURRIED']
},
{
    word: 'BRAVE',
    synonyms: ['COURAGEOUS', 'BOLD', 'FEARLESS', 'VALIANT', 'HEROIC']
},
{
    word: 'BRIGHT',
    synonyms: ['LUMINOUS', 'VIVID', 'RADIANT', 'DAZZLING', 'BRILLIANT']
},
{
    word: 'KIND',
    synonyms: ['CARING', 'GENTLE', 'COMPASSIONATE', 'CONSIDERATE', 'THOUGHTFUL']
},
{
    word: 'CLEAN',
    synonyms: ['TIDY', 'NEAT', 'SPOTLESS', 'PURE', 'HYGIENIC']
},
{
    word: 'LOUD',
    synonyms: ['NOISY', 'BOISTEROUS', 'THUNDEROUS', 'DEAFENING', 'CLAMOROUS']
},
{
    word: 'SOFT',
    synonyms: ['GENTLE', 'CUSHIONY', 'SUPPLE', 'PLUSH', 'SMOOTH']
},
{
    word: 'ANGRY',
    synonyms: ['FURIOUS', 'IRATE', 'MAD', 'ENRAGED', 'UPSET']
},
{
    word: 'SMALL',
    synonyms: ['TINY', 'MINUTE', 'MINIATURE', 'LITTLE', 'PETITE']
},
{
    word: 'BIG',
    synonyms: ['LARGE', 'HUGE', 'ENORMOUS', 'GIGANTIC', 'MASSIVE']
},
{
    word: 'WARM',
    synonyms: ['COZY', 'TOASTY', 'BALMY', 'MILD', 'HEATED']
},
{
    word: 'SMOOTH',
    synonyms: ['SLEEK', 'POLISHED', 'SILKY', 'GLIDING', 'FLAWLESS']
},
{
    word: 'HARDWORKING',
    synonyms: ['DILIGENT', 'INDUSTRIOUS', 'DEDICATED', 'PERSEVERING', 'TIRELESS']
},
{
    word: 'FUN',
    synonyms: ['ENJOYABLE', 'EXCITING', 'PLEASANT', 'AMUSING', 'ENTERTAINING']
},
{
    word: 'TIRED',
    synonyms: ['EXHAUSTED', 'WEARY', 'FATIGUED', 'DRAINED', 'SLUGGISH']
},
{
    word: 'HEAVY',
    synonyms: ['WEIGHTY', 'MASSIVE', 'BURDENSOME', 'HEFTY', 'PONDEROUS']
},
{
    word: 'FAMOUS',
    synonyms: ['RENOWNED', 'CELEBRATED', 'NOTABLE', 'PROMINENT', 'DISTINGUISHED']
},
{
    word: 'LOUD',
    synonyms: ['ROARING', 'THUNDEROUS', 'CLANGOROUS', 'RAUCOUS', 'PIERCING']
},
{
    word: 'DEEP',
    synonyms: ['PROFOUND', 'ABYSSAL', 'VAST', 'IMMENSE', 'UNFATHOMABLE']
},
{
    word: 'HUNGRY',
    synonyms: ['STARVING', 'RAVENOUS', 'PECKISH', 'FAMISHED', 'EMPTY']
},
{
    word: 'QUICK',
    synonyms: ['RAPID', 'NIMBLE', 'HURRIED', 'PROMPT', 'BRISK']
},
{
    word: 'ELEGANT',
    synonyms: ['STYLISH', 'GRACEFUL', 'REFINED', 'CLASSY', 'SOPHISTICATED']
},
{
    word: 'BRITTLE',
    synonyms: ['FRAGILE', 'CRUMBLY', 'BREAKABLE', 'FLIMSY', 'DELICATE']
},
{
    word: 'HAPPY',
    synonyms: ['ECSTATIC', 'CONTENTED', 'JOVIAL', 'UPBEAT', 'CHIPPER']
},
{
    word: 'SHARP',
    synonyms: ['POINTED', 'ACUTE', 'PIERCING', 'KEEN', 'RAPID']
},
{
    word: 'STRONG',
    synonyms: ['TENACIOUS', 'RESOLUTE', 'FIRM', 'RESILIENT', 'HARDY']
},
{
    word: 'EMPTY',
    synonyms: ['VACANT', 'VOID', 'BARE', 'HOLLOW', 'DEVOID']
},
{
    word: 'HARD',
    synonyms: ['INFLEXIBLE', 'SOLID', 'STURDY', 'DIFFICULT', 'RIGID']
},
{
    word: 'BRIGHT',
    synonyms: ['SHINING', 'GLISTENING', 'BRILLIANT', 'LUSTROUS', 'ILLUMINATED']
},
{
    word: 'SOFT',
    synonyms: ['YIELDING', 'GENTLE', 'CUSHIONED', 'SUPPLE', 'TENDER']
},
{
    word: 'ANGUISHED',
    synonyms: ['DISTRESSED', 'TORN', 'WOUNDED', 'PAINED', 'HURT']
},
{
    word: 'CALM',
    synonyms: ['SERENE', 'PEACEFUL', 'STILL', 'TRANQUIL', 'RELAXED']
},
{
    word: 'GRATEFUL',
    synonyms: ['THANKFUL', 'APPRECIATIVE', 'OBLIGED', 'INDEBTED', 'SATISFIED']
},
{
    word: 'CHEAP',
    synonyms: ['AFFORDABLE', 'BUDGET', 'INEXPENSIVE', 'LOW-COST', 'ECONOMICAL']
},
{
    word: 'EXPENSIVE',
    synonyms: ['COSTLY', 'LAVISH', 'PRICEY', 'OVERPRICED', 'VALUABLE']
},
{
    word: 'POWERFUL',
    synonyms: ['DOMINANT', 'MIGHTY', 'STRONG', 'INFLUENTIAL', 'IMPOSING']
},
{
    word: 'FRAGILE',
    synonyms: ['DELICATE', 'BREAKABLE', 'BRITTLE', 'FLIMSY', 'VULNERABLE']
},
{
    word: 'HARMFUL',
    synonyms: ['DANGEROUS', 'DAMAGING', 'INJURIOUS', 'DETRIMENTAL', 'PERILOUS']
},
{
    word: 'HELPFUL',
    synonyms: ['USEFUL', 'ASSISTIVE', 'BENEFICIAL', 'SUPPORTIVE', 'ADVANTAGEOUS']
},
{
    word: 'HEALTHY',
    synonyms: ['FIT', 'WELL', 'ROBUST', 'VIGOROUS', 'STRONG']
},
{
    word: 'SICK',
    synonyms: ['ILL', 'UNWELL', 'INFIRM', 'DISEASED', 'WEAK']
},
{
    word: 'LUXURIOUS',
    synonyms: ['OPULENT', 'ELEGANT', 'LAVISH', 'SUMPTUOUS', 'PLUSH']
},
{
    word: 'ORDINARY',
    synonyms: ['COMMON', 'REGULAR', 'PLAIN', 'UNREMARKABLE', 'NORMAL']
},
{
    word: 'UNIQUE',
    synonyms: ['SPECIAL', 'RARE', 'EXCEPTIONAL', 'ONE-OF-A-KIND', 'DISTINCTIVE']
},
{
    word: 'FASTIDIOUS',
    synonyms: ['FUSSY', 'METICULOUS', 'PICKY', 'DEMANDING', 'PAINSTAKING']
},
{
    word: 'DIRTY',
    synonyms: ['FILTHY', 'SOILED', 'GRIMY', 'MUCKY', 'SULLIED']
},
{
    word: 'QUIET',
    synonyms: ['HUSHED', 'WHISPERED', 'SOFT', 'MUTED', 'SILENT']
},
{
    word: 'DANGEROUS',
    synonyms: ['PERILOUS', 'HAZARDOUS', 'RISKY', 'TREACHEROUS', 'DEADLY']
},
{
    word: 'SAFE',
    synonyms: ['SECURE', 'PROTECTED', 'SHIELDED', 'GUARDED', 'UNHARMED']
},
{
    word: 'COMPASSIONATE',
    synonyms: ['KINDHEARTED', 'SYMPATHETIC', 'UNDERSTANDING', 'CARING', 'HUMANE']
},
{
    word: 'POLITE',
    synonyms: ['COURTEOUS', 'RESPECTFUL', 'WELL-MANNERED', 'GRACIOUS', 'CORDIAL']
},
{
    word: 'LONELY',
    synonyms: ['ISOLATED', 'SOLITARY', 'DESOLATE', 'FORLORN', 'ABANDONED']
},
{
    word: 'CURIOUS',
    synonyms: ['INQUISITIVE', 'EAGER', 'QUESTIONING', 'PROBING', 'INTERESTED']
},
{
    word: 'DELICIOUS',
    synonyms: ['TASTY', 'FLAVORFUL', 'SAVORY', 'SCRUMPTIOUS', 'APPETIZING']
},
{
    word: 'STRONG-WILLED',
    synonyms: ['DETERMINED', 'RESOLUTE', 'UNYIELDING', 'STEADFAST', 'STUBBORN']
},
{
    word: 'FLEXIBLE',
    synonyms: ['ADAPTABLE', 'SUPPLE', 'ELASTIC', 'MALLEABLE', 'BENDABLE']
},
{
    word: 'BRIEF',
    synonyms: ['SHORT', 'CONCISE', 'SUCCINCT', 'ABRIDGED', 'TERSE']
},
{
    word: 'BRILLIANT',
    synonyms: ['GENIUS', 'INSPIRED', 'MASTERFUL', 'EXCEPTIONAL', 'VISIONARY']
},
{
    word: 'CHAOTIC',
    synonyms: ['DISORDERED', 'TUMULTUOUS', 'ANARCHIC', 'WILD', 'UNPREDICTABLE']
},
{
    word: 'AWKWARD',
    synonyms: ['CLUMSY', 'UNGRACEFUL', 'INELEGANT', 'UNCOMFORTABLE', 'BLUNDERING']
},
{
    word: 'CHEERFUL',
    synonyms: ['HAPPY-GO-LUCKY', 'UPLIFTING', 'BUOYANT', 'JOVIAL', 'EXUBERANT']
},
{
    word: 'DECEPTIVE',
    synonyms: ['MISLEADING', 'TRICKY', 'ILLUSIVE', 'FRAUDULENT', 'DISHONEST']
},
{
    word: 'ENERGETIC',
    synonyms: ['VIGOROUS', 'SPIRITED', 'ZESTFUL', 'ANIMATED', 'PEPPY']
},
{
    word: 'GROTESQUE',
    synonyms: ['HIDEOUS', 'DISTORTED', 'BIZARRE', 'GRUESOME', 'MACABRE']
},
{
    word: 'HEAVENLY',
    synonyms: ['DIVINE', 'BLISSFUL', 'SERAPHIC', 'PARADISIACAL', 'CELESTIAL']
},
{
    word: 'PLAYFUL',
    synonyms: ['WHIMSICAL', 'JOKING', 'MISCHIEVOUS', 'LIGHTHEARTED', 'FRISKY']
},
{
    word: 'ROUGH',
    synonyms: ['COARSE', 'JAGGED', 'RUGGED', 'HARSH', 'SCRATCHY']
},
{
    word: 'PEPPERY',
    synonyms: ['SPICY', 'PUNGENT', 'ZESTY', 'FIERY', 'FLAVORED']
},
{
    word: 'COLOSSAL',
    synonyms: ['IMMENSE', 'TITANIC', 'MASSIVE', 'GIGANTIC', 'MONSTROUS']
},
{
    word: 'SHINY',
    synonyms: ['GLEAMING', 'POLISHED', 'GLITTERING', 'SPARKLING', 'SHIMMERING']
},
{
    word: 'FOREST',
    synonyms: ['WOODLAND', 'JUNGLE', 'THICKET', 'GROVE', 'BOSK']
},
{
    word: 'RIVER',
    synonyms: ['STREAM', 'BROOK', 'CREEK', 'WATERWAY', 'CURRENT']
},
{
    word: 'MOUNTAIN',
    synonyms: ['PEAK', 'SUMMIT', 'RIDGE', 'ALP', 'HIGHLAND']
},
{
    word: 'OCEAN',
    synonyms: ['SEA', 'MARINE', 'WATERS', 'ABYSS', 'DEEP']
},
{
    word: 'DESERT',
    synonyms: ['DUNES', 'ARID ZONE', 'SANDS', 'WASTELAND', 'BARRON']
},
{
    word: 'WIND',
    synonyms: ['BREEZE', 'GUST', 'GALE', 'DRAFT', 'CURRENT']
},
{
    word: 'FLOWER',
    synonyms: ['BLOOM', 'BLOSSOM', 'PETAL', 'FLORA', 'FROND']
},
{
    word: 'TREE',
    synonyms: ['SAPLING', 'OAK', 'CEDAR', 'PINE', 'TIMBER']
},
{
    word: 'RAIN',
    synonyms: ['DRIZZLE', 'DOWNPOUR', 'SHOWER', 'PRECIPITATION', 'MIST']
},
{
    word: 'SUN',
    synonyms: ['STAR', 'SUNSHINE', 'SOLAR', 'DAYSTAR', 'RAYS']
},
{
    word: 'ROCK',
    synonyms: ['STONE', 'BOULDER', 'PEBBLE', 'CRAG', 'CLIFF']
},
{
    word: 'CLOUD',
    synonyms: ['PUFF', 'MIST', 'FOG', 'CUMULUS', 'OVERCAST']
},
{
    word: 'EARTH',
    synonyms: ['SOIL', 'GROUND', 'LAND', 'TERRAIN', 'DIRT']
},
{
    word: 'VALLEY',
    synonyms: ['GLEN', 'DALE', 'HOLLOW', 'BASIN', 'DELL']
},
{
    word: 'ISLAND',
    synonyms: ['ATOLL', 'CAY', 'ISLET', 'ARCHIPELAGO', 'REFUGE']
},
{
    word: 'SNOW',
    synonyms: ['FROST', 'FLURRIES', 'ICE', 'BLIZZARD', 'SLEET']
},
{
    word: 'CAVE',
    synonyms: ['GROTTO', 'CAVERN', 'HOLLOW', 'DEN', 'TUNNEL']
},
{
    word: 'BEACH',
    synonyms: ['SHORE', 'COASTLINE', 'STRAND', 'SEASHORE', 'SAND']
},
{
    word: 'MEADOW',
    synonyms: ['FIELD', 'PASTURE', 'GRASSLAND', 'PRAIRIE', 'GLADE']
},
{
    word: 'VOLCANO',
    synonyms: ['CRATER', 'VENT', 'CALDERA', 'MOUNTAIN', 'ERUPTION']
},
{
    word: 'BALANCED',
    synonyms: ['STABLE', 'EVEN', 'EQUITABLE', 'PROPORTIONAL', 'FAIR']
},
{
    word: 'TRANSPARENT',
    synonyms: ['CLEAR', 'VISIBLE', 'CRYSTALLINE', 'PERCIPIENT', 'OBVIOUS']
},
{
    word: 'GRANULAR',
    synonyms: ['TEXTURED', 'ROUGH', 'COARSE', 'PARTICULATE', 'GRAINY']
},
{
    word: 'FICKLE',
    synonyms: ['CHANGEABLE', 'INCONSISTENT', 'ERRATIC', 'VARIABLE', 'CAPRICIOUS']
},
{
    word: 'EFFICIENT',
    synonyms: ['PRODUCTIVE', 'EFFECTIVE', 'RESOURCEFUL', 'ORGANIZED', 'PRACTICAL']
},
{
    word: 'BOLD',
    synonyms: ['AUDACIOUS', 'COURAGEOUS', 'FEARLESS', 'DAUNTLESS', 'DEFIANT']
},
{
    word: 'STABLE',
    synonyms: ['SECURE', 'STATIONARY', 'UNSHAKEABLE', 'CONSTANT', 'STEADY']
},
{
    word: 'DYNAMIC',
    synonyms: ['ENERGETIC', 'ACTIVE', 'VIBRANT', 'PROGRESSIVE', 'MOTIVATED']
},
{
    word: 'PRISTINE',
    synonyms: ['UNSPOILED', 'IMMACULATE', 'UNTOUCHED', 'CLEAN', 'PURE']
},
{
    word: 'SUBTLE',
    synonyms: ['FAINT', 'DELICATE', 'UNDERSTATED', 'REFINED', 'INCONSPICUOUS']
},
{
    word: 'AGILE',
    synonyms: ['NIMBLE', 'SWIFT', 'FLEET', 'SUPPLE', 'GRACEFUL']
},
{
    word: 'CRISP',
    synonyms: ['FRESH', 'SNAPPY', 'SHARP', 'VIVID', 'CLEAR-CUT']
},
{
    word: 'LAVISH',
    synonyms: ['OPULENT', 'SUMPTUOUS', 'LUXURIOUS', 'EXTRAVAGANT', 'PLENTIFUL']
},
{
    word: 'SPARSE',
    synonyms: ['SCARCE', 'THIN', 'MEAGER', 'SCATTERED', 'UNPLENTIFUL']
},
{
    word: 'LURID',
    synonyms: ['SHOCKING', 'SENSATIONAL', 'GRISLY', 'GARISH', 'VIVID']
},
{
    word: 'VIBRANT',
    synonyms: ['LIVELY', 'COLORFUL', 'DYNAMIC', 'RADIANT', 'ENERGETIC']
},
{
    word: 'STURDY',
    synonyms: ['SOLID', 'TOUGH', 'STRONG', 'DURABLE', 'RESILIENT']
},
{
    word: 'SLIPPERY',
    synonyms: ['SLICK', 'GREASY', 'SLIDING', 'SMOOTH', 'GLOSSY']
},
{
    word: 'TANGY',
    synonyms: ['ZESTY', 'SHARP', 'PIQUANT', 'SPICY', 'TART']
},
{
    word: 'PUNGENT',
    synonyms: ['STRONG', 'ACRID', 'SHARP', 'BITING', 'OVERPOWERING']
},
{
    word: 'BLAND',
    synonyms: ['TASTELESS', 'FLAVORLESS', 'INSIPID', 'DULL', 'UNINTERESTING']
},
{
    word: 'GENTLE',
    synonyms: ['MILD', 'SOFT', 'TENDER', 'CALM', 'SOOTHING']
},
{
    word: 'STEADFAST',
    synonyms: ['LOYAL', 'RESOLUTE', 'UNWAVERING', 'FAITHFUL', 'COMMITTED']
},
{
    word: 'LUCID',
    synonyms: ['CLEAR', 'INTELLIGIBLE', 'COHERENT', 'RATIONAL', 'TRANSPARENT']
},
{
    word: 'STRETCHED',
    synonyms: ['EXTENDED', 'ELONGATED', 'PULLED', 'EXPANDED', 'OUTSTRETCHED']
},
{
    word: 'WRETCHED',
    synonyms: ['MISERABLE', 'PITIFUL', 'UNHAPPY', 'DEPLORABLE', 'UNFORTUNATE']
},
{
    word: 'GLOSSY',
    synonyms: ['SHINY', 'POLISHED', 'LUSTROUS', 'SLEEK', 'REFLECTIVE']
},
{
    word: 'TEDIOUS',
    synonyms: ['BORING', 'MONOTONOUS', 'TIRESOME', 'DULL', 'REPETITIVE']
},
{
    word: 'BULKY',
    synonyms: ['HEAVY', 'MASSIVE', 'CLUNKY', 'OVERSIZED', 'THICK']
},
{
    word: 'FLUFFY',
    synonyms: ['SOFT', 'PUFFY', 'AIRY', 'CUSHIONY', 'LIGHT']
},
{
    word: 'BREEZY',
    synonyms: ['WINDY', 'AIRY', 'GUSTY', 'BRISK', 'CHILLY']
},
{
    word: 'OVERCAST',
    synonyms: ['CLOUDY', 'GLOOMY', 'GRAY', 'DIM', 'SHADOWY']
},
{
    word: 'FRIGID',
    synonyms: ['FREEZING', 'BITTER', 'ICY', 'CHILLY', 'COLD']
},
{
    word: 'SWELTERING',
    synonyms: ['HOT', 'BOILING', 'SCORCHING', 'STIFLING', 'SULTRY']
},
{
    word: 'MUGGY',
    synonyms: ['HUMID', 'STICKY', 'DAMP', 'SWELTERING', 'CLOSE']
},
{
    word: 'BLUSTERY',
    synonyms: ['WINDY', 'STORMY', 'GUSTY', 'TEMPESTUOUS', 'BOISTEROUS']
},
{
    word: 'FOGGY',
    synonyms: ['MISTY', 'HAZY', 'OBSCURED', 'CLOUDY', 'VAPOROUS']
},
{
    word: 'DRIZZLY',
    synonyms: ['SHOWERY', 'WET', 'RAINY', 'MISTY', 'DAMP']
},
{
    word: 'SUNNY',
    synonyms: ['BRIGHT', 'RADIANT', 'CLEAR', 'SHINING', 'BEAMING']
},
{
    word: 'STORMY',
    synonyms: ['TEMPESTUOUS', 'VIOLENT', 'WINDY', 'BLUSTERY', 'WILD']
},
{
    word: 'ARID',
    synonyms: ['DRY', 'PARCHED', 'DESERTLIKE', 'BARREN', 'WATERLESS']
},
{
    word: 'ICY',
    synonyms: ['FROSTY', 'GLACIAL', 'COLD', 'FREEZING', 'CHILLY']
},
{
    word: 'TEMPERATE',
    synonyms: ['MILD', 'MODERATE', 'PLEASANT', 'BALMY', 'CLEMENT']
},
{
    word: 'SOGGY',
    synonyms: ['DRENCHED', 'WATERLOGGED', 'SOAKED', 'DAMP', 'SATURATED']
},
{
    word: 'GUSTY',
    synonyms: ['WINDY', 'BREEZY', 'BLUSTERY', 'AIRY', 'TEMPESTUOUS']
},
{
    word: 'LEARN',
    synonyms: ['STUDY', 'ABSORB', 'UNDERSTAND', 'COMPREHEND', 'MASTER']
},
{
    word: 'TEACH',
    synonyms: ['INSTRUCT', 'EDUCATE', 'TRAIN', 'COACH', 'TUTOR']
},
{
    word: 'EXAM',
    synonyms: ['TEST', 'ASSESSMENT', 'QUIZ', 'EVALUATION', 'CHECK']
},
{
    word: 'CLASSROOM',
    synonyms: ['LECTURE HALL', 'STUDY ROOM', 'LEARNING SPACE', 'SCHOOLROOM', 'HOMEROOM']
},
{
    word: 'STUDENT',
    synonyms: ['LEARNER', 'PUPIL', 'SCHOLAR', 'TRAINEE', 'APPRENTICE']
},
{
    word: 'TEACHER',
    synonyms: ['INSTRUCTOR', 'EDUCATOR', 'PROFESSOR', 'MENTOR', 'GUIDE']
},
{
    word: 'ASSIGNMENT',
    synonyms: ['TASK', 'PROJECT', 'HOMEWORK', 'DUTY', 'EXERCISE']
},
{
    word: 'GRADUATE',
    synonyms: ['ALUMNUS', 'FINISHER', 'COMPLETER', 'SCHOLAR', 'POSTGRADUATE']
},
{
    word: 'LECTURE',
    synonyms: ['TALK', 'PRESENTATION', 'SEMINAR', 'ADDRESS', 'DISCUSSION']
},
{
    word: 'LIBRARY',
    synonyms: ['BOOKSTACKS', 'RESOURCE CENTER', 'READING ROOM', 'ARCHIVE', 'STUDY HALL']
},
{
    word: 'SYLLABUS',
    synonyms: ['CURRICULUM', 'OUTLINE', 'PROGRAM', 'PLAN', 'SCHEDULE']
},
{
    word: 'RESEARCH',
    synonyms: ['INVESTIGATION', 'STUDY', 'ANALYSIS', 'EXPLORATION', 'INQUIRY']
},
{
    word: 'GRADE',
    synonyms: ['MARK', 'SCORE', 'RANKING', 'RATING', 'EVALUATION']
},
{
    word: 'TEXTBOOK',
    synonyms: ['MANUAL', 'HANDBOOK', 'COURSEBOOK', 'GUIDE', 'REFERENCE']
},
{
    word: 'QUIZ',
    synonyms: ['TEST', 'EXAM', 'ASSESSMENT', 'QUESTIONNAIRE', 'EVALUATION']
},
{
    word: 'ATHLETE',
    synonyms: ['SPORTSPERSON', 'COMPETITOR', 'PLAYER', 'RUNNER', 'PERFORMER']
},
{
    word: 'GAME',
    synonyms: ['MATCH', 'CONTEST', 'COMPETITION', 'TOURNAMENT', 'PLAY']
},
{
    word: 'SCORE',
    synonyms: ['POINTS', 'RESULT', 'TALLY', 'MARK', 'RANK']
},
{
    word: 'COACH',
    synonyms: ['TRAINER', 'MENTOR', 'INSTRUCTOR', 'MANAGER', 'GUIDE']
},
{
    word: 'TEAM',
    synonyms: ['SQUAD', 'CREW', 'UNIT', 'GROUP', 'LINEUP']
},
{
    word: 'STADIUM',
    synonyms: ['ARENA', 'FIELD', 'VENUE', 'COLISEUM', 'GROUND']
},
{
    word: 'GOAL',
    synonyms: ['TARGET', 'OBJECTIVE', 'AIM', 'PURPOSE', 'POINT']
},
{
    word: 'TOURNAMENT',
    synonyms: ['COMPETITION', 'CHAMPIONSHIP', 'CONTEST', 'SERIES', 'EVENT']
},
{
    word: 'VICTORY',
    synonyms: ['WIN', 'TRIUMPH', 'SUCCESS', 'ACHIEVEMENT', 'CONQUEST']
},
{
    word: 'DEFENSE',
    synonyms: ['GUARD', 'PROTECTION', 'BLOCKING', 'RESISTANCE', 'SHIELD']
},
{
    word: 'OFFENSE',
    synonyms: ['ATTACK', 'AGGRESSION', 'STRATEGY', 'CHARGE', 'ADVANCE']
},
{
    word: 'MEDAL',
    synonyms: ['AWARD', 'TROPHY', 'PRIZE', 'BADGE', 'HONOR']
},
{
    word: 'PRACTICE',
    synonyms: ['TRAINING', 'DRILLS', 'EXERCISE', 'REHEARSAL', 'PREPARATION']
},
{
    word: 'RUNNER',
    synonyms: ['SPRINTER', 'ATHLETE', 'COMPETITOR', 'MARATHONER', 'RACER']
},
{
    word: 'CHAMPION',
    synonyms: ['WINNER', 'TITLEHOLDER', 'VICTOR', 'LEADER', 'CONQUEROR']
},
{
    word: 'REFEREE',
    synonyms: ['UMPIRE', 'JUDGE', 'OFFICIAL', 'ARBITRATOR', 'MEDIATOR']
},
{
    word: 'SPECTATOR',
    synonyms: ['AUDIENCE', 'FAN', 'VIEWER', 'OBSERVER', 'WATCHER']
},
{
    word: 'MATCH',
    synonyms: ['GAME', 'CONTEST', 'COMPETITION', 'EVENT', 'SHOWDOWN']
},
{
    word: 'CHAMPIONSHIP',
    synonyms: ['FINALS', 'TOURNAMENT', 'CONTEST', 'VICTORY', 'TITLE']
},
{
    word: 'FIELD',
    synonyms: ['PITCH', 'GROUND', 'ARENA', 'STADIUM', 'COURT']
},
{
    word: 'PLAYER',
    synonyms: ['ATHLETE', 'COMPETITOR', 'PARTICIPANT', 'PERFORMER', 'SPORTSPERSON']
},
{
    word: 'RACE',
    synonyms: ['CONTEST', 'MARATHON', 'SPRINT', 'COMPETITION', 'RUN']
},
{
    word: 'SKILL',
    synonyms: ['ABILITY', 'TALENT', 'EXPERTISE', 'PROFICIENCY', 'KNACK']
},
{
    word: 'SPEED',
    synonyms: ['PACE', 'VELOCITY', 'QUICKNESS', 'RAPIDITY', 'SWIFTNESS']
},
{
    word: 'TROPHY',
    synonyms: ['AWARD', 'PRIZE', 'MEDAL', 'TITLE', 'HONOR']
},
{
    word: 'DRILL',
    synonyms: ['PRACTICE', 'EXERCISE', 'TRAINING', 'WARM-UP', 'PREPARATION']
},
{
    word: 'STRATEGY',
    synonyms: ['PLAN', 'TACTIC', 'SCHEME', 'APPROACH', 'GAMEPLAN']
},
{
    word: 'LEAGUE',
    synonyms: ['DIVISION', 'ASSOCIATION', 'CONFERENCE', 'FEDERATION', 'ALLIANCE']
},
{
    word: 'COMPETITION',
    synonyms: ['TOURNAMENT', 'CONTEST', 'MATCH', 'EVENT', 'SHOWDOWN']
},
{
    word: 'VICTORY',
    synonyms: ['WIN', 'TRIUMPH', 'SUCCESS', 'ACHIEVEMENT', 'GLORY']
},
{
    word: 'SPELL',
    synonyms: ['INCANTATION', 'CHARM', 'ENCHANTMENT', 'HEX', 'MAGIC']
},
{
    word: 'WAND',
    synonyms: ['STAFF', 'ROD', 'BATON', 'SCEPTER', 'SWITCH']
},
{
    word: 'POTION',
    synonyms: ['BREW', 'ELIXIR', 'TONIC', 'CONCOCTION', 'SERUM']
},
{
    word: 'SORCERER',
    synonyms: ['MAGICIAN', 'WIZARD', 'WARLOCK', 'CONJURER', 'ENCHANTER']
},
{
    word: 'WITCH',
    synonyms: ['SORCERESS', 'SPELLCASTER', 'ENCHANTRESS', 'CRONE', 'CHARMER']
},
{
    word: 'CURSE',
    synonyms: ['HEX', 'JINX', 'SPELL', 'BLIGHT', 'MALEDICTION']
},
{
    word: 'RITUAL',
    synonyms: ['CEREMONY', 'RITE', 'TRADITION', 'OBSERVANCE', 'PRACTICE']
},
{
    word: 'MAGIC',
    synonyms: ['SORCERY', 'ENCHANTMENT', 'WITCHCRAFT', 'ALCHEMY', 'MYSTICISM']
},
{
    word: 'MYSTIC',
    synonyms: ['SEER', 'PROPHET', 'VISIONARY', 'PSYCHIC', 'ORACLE']
},
{
    word: 'CHARM',
    synonyms: ['TALISMAN', 'AMULET', 'SPELL', 'ENCHANTMENT', 'TOKEN']
},
{
    word: 'FAMILIAR',
    synonyms: ['SPIRIT', 'GUARDIAN', 'COMPANION', 'ALLY', 'PROTECTOR']
},
{
    word: 'SHIMMER',
    synonyms: ['GLEAM', 'GLIMMER', 'SPARKLE', 'TWINKLE', 'GLINT']
},
{
    word: 'ILLUSION',
    synonyms: ['MIRAGE', 'TRICK', 'DECEPTION', 'FANTASY', 'HALLUCINATION']
},
{
    word: 'ALCHEMY',
    synonyms: ['TRANSMUTATION', 'CHEMISTRY', 'PHILOSOPHY', 'MAGIC', 'MYSTICISM']
},
{
    word: 'SPELLBOOK',
    synonyms: ['GRIMOIRE', 'TOME', 'MANUAL', 'MAGICAL BOOK', 'ENCHANTER’S GUIDE']
},
{
    word: 'ROOF',
    synonyms: ['CEILING', 'COVERING', 'OVERHANG', 'CANOPY', 'TOP']
},
{
    word: 'WINDOW',
    synonyms: ['PANE', 'GLASS', 'CASEMENT', 'PORTAL', 'FRAME']
},
{
    word: 'DOOR',
    synonyms: ['ENTRANCE', 'GATEWAY', 'PORTAL', 'THRESHOLD', 'HATCH']
},
{
    word: 'KITCHEN',
    synonyms: ['COOKHOUSE', 'GALLEY', 'PANTRY', 'COOKING AREA', 'CULINARY SPACE']
},
{
    word: 'BEDROOM',
    synonyms: ['CHAMBER', 'SLEEPING QUARTERS', 'SUITE', 'LOFT', 'BOUDOIR']
},
{
    word: 'LIVING ROOM',
    synonyms: ['LOUNGE', 'SITTING ROOM', 'PARLOR', 'FAMILY ROOM', 'DEN']
},
{
    word: 'FLOOR',
    synonyms: ['GROUND', 'LEVEL', 'STAGE', 'DECK', 'PLATFORM']
},
{
    word: 'WALL',
    synonyms: ['PARTITION', 'BARRIER', 'DIVIDER', 'ENCLOSURE', 'PANEL']
},
{
    word: 'STAIRS',
    synonyms: ['STEPS', 'STAIRCASE', 'ESCALATOR', 'RISERS', 'LADDER']
},
{
    word: 'BALCONY',
    synonyms: ['TERRACE', 'VERANDA', 'PORCH', 'DECK', 'PLATFORM']
},
{
    word: 'FIREPLACE',
    synonyms: ['HEARTH', 'CHIMNEY', 'MANTEL', 'STOVE', 'FIREPIT']
},
{
    word: 'ATTIC',
    synonyms: ['LOFT', 'GARRET', 'UPPER STORY', 'CRAWL SPACE', 'STORAGE AREA']
},
{
    word: 'BASEMENT',
    synonyms: ['CELLAR', 'UNDERCROFT', 'VAULT', 'LOWER LEVEL', 'FOUNDATION']
},
{
    word: 'GARDEN',
    synonyms: ['YARD', 'LAWN', 'BACKYARD', 'ORCHARD', 'PLOT']
},
{
    word: 'FURNITURE',
    synonyms: ['CHAIRS', 'TABLES', 'FIXTURES', 'CABINETRY', 'DECOR']
},
{
    word: 'FRUIT',
    synonyms: ['BERRIES', 'CITRUS', 'PRODUCE', 'MELON', 'DRUPE']
},
{
    word: 'VEGETABLE',
    synonyms: ['GREENS', 'ROOTS', 'LEGUMES', 'PLANTS', 'CRUCIFEROUS']
},
{
    word: 'MEAT',
    synonyms: ['PROTEIN', 'BEEF', 'POULTRY', 'SEAFOOD', 'LAMB']
},
{
    word: 'DESSERT',
    synonyms: ['SWEET', 'PASTRY', 'CAKE', 'TREAT', 'CONFECTION']
},
{
    word: 'SNACK',
    synonyms: ['BITE', 'APPETIZER', 'NIBBLE', 'TREAT', 'MUNCHIES']
},
{
    word: 'BREAD',
    synonyms: ['LOAF', 'ROLL', 'BUN', 'PASTRY', 'TOAST']
},
{
    word: 'SOUP',
    synonyms: ['BROTH', 'STEW', 'CHOWDER', 'CONSOMMÉ', 'BISQUE']
},
{
    word: 'SPICE',
    synonyms: ['HERB', 'FLAVORING', 'SEASONING', 'CONDIMENT', 'EXTRACT']
},
{
    word: 'CHEESE',
    synonyms: ['DAIRY', 'CHEDDAR', 'BRIE', 'MOZZARELLA', 'GOUDA']
},
{
    word: 'DRINK',
    synonyms: ['BEVERAGE', 'REFRESHMENT', 'LIQUID', 'BREW', 'ELIXIR']
},
{
    word: 'PASTA',
    synonyms: ['NOODLES', 'SPAGHETTI', 'RAVIOLI', 'MACARONI', 'FETTUCCINE']
},
{
    word: 'SAUCE',
    synonyms: ['DRESSING', 'CONDIMENT', 'GRAVY', 'DIP', 'TOPPING']
},
{
    word: 'SALAD',
    synonyms: ['GREENS', 'MIX', 'SIDE DISH', 'BOWL', 'VEGGIE DISH']
},
{
    word: 'ICE CREAM',
    synonyms: ['FROZEN DESSERT', 'SORBET', 'GELATO', 'FROYO', 'DAIRY TREAT']
},
{
    word: 'BEAN',
    synonyms: ['LEGUME', 'PULSE', 'SOYBEAN', 'CHICKPEA', 'LENTIL']
},
{
    word: 'JOURNEY',
    synonyms: ['VOYAGE', 'EXPEDITION', 'TRIP', 'ADVENTURE', 'ODYSSEY']
},
{
    word: 'DESTINATION',
    synonyms: ['LOCATION', 'SPOT', 'GOAL', 'PLACE', 'STOP']
},
{
    word: 'LUGGAGE',
    synonyms: ['BAGGAGE', 'SUITCASE', 'BAGS', 'PACKS', 'CARRY-ONS']
},
{
    word: 'AIRPORT',
    synonyms: ['TERMINAL', 'RUNWAY', 'AIRFIELD', 'HUB', 'AVIATION CENTER']
},
{
    word: 'TICKET',
    synonyms: ['PASS', 'VOUCHER', 'ADMISSION', 'FARE', 'RESERVATION']
},
{
    word: 'ITINERARY',
    synonyms: ['SCHEDULE', 'PLAN', 'ROUTE', 'AGENDA', 'TRAVEL GUIDE']
},
{
    word: 'PASSPORT',
    synonyms: ['ID', 'TRAVEL DOCUMENT', 'VISA', 'CREDENTIALS', 'IDENTIFICATION']
},
{
    word: 'TOUR',
    synonyms: ['EXCURSION', 'TRIP', 'VOYAGE', 'JOURNEY', 'EXPEDITION']
},
{
    word: 'HOTEL',
    synonyms: ['INN', 'RESORT', 'LODGING', 'MOTEL', 'ACCOMMODATION']
},
{
    word: 'VACATION',
    synonyms: ['HOLIDAY', 'TRIP', 'GETAWAY', 'BREAK', 'ESCAPE']
},
{
    word: 'CRUISE',
    synonyms: ['VOYAGE', 'SAILING', 'EXPEDITION', 'SEA TRIP', 'BOATING']
},
{
    word: 'GUIDE',
    synonyms: ['ESCORT', 'LEADER', 'DIRECTOR', 'NAVIGATOR', 'TOUR LEADER']
},
{
    word: 'MAP',
    synonyms: ['CHART', 'DIAGRAM', 'BLUEPRINT', 'ATLAS', 'LAYOUT']
},
{
    word: 'CAMPING',
    synonyms: ['OUTDOOR STAY', 'TENTING', 'BACKPACKING', 'GLAMPING', 'TREKKING']
},
{
    word: 'TRANSPORTATION',
    synonyms: ['TRAVEL', 'CONVEYANCE', 'TRANSIT', 'MOVEMENT', 'SHUTTLE']
},
{
    word: 'COMPUTER',
    synonyms: ['PC', 'LAPTOP', 'WORKSTATION', 'DEVICE', 'MACHINE']
},
{
    word: 'SOFTWARE',
    synonyms: ['PROGRAM', 'APPLICATION', 'PLATFORM', 'TOOL', 'SYSTEM']
},
{
    word: 'HARDWARE',
    synonyms: ['EQUIPMENT', 'COMPONENTS', 'MACHINERY', 'DEVICES', 'TOOLS']
},
{
    word: 'NETWORK',
    synonyms: ['SYSTEM', 'WEB', 'GRID', 'CONNECTIONS', 'INFRASTRUCTURE']
},
{
    word: 'DATABASE',
    synonyms: ['REPOSITORY', 'STORAGE', 'ARCHIVE', 'SYSTEM', 'COLLECTION']
},
{
    word: 'ALGORITHM',
    synonyms: ['PROCESS', 'FORMULA', 'SEQUENCE', 'LOGIC', 'METHOD']
},
{
    word: 'PROGRAMMER',
    synonyms: ['DEVELOPER', 'CODER', 'ENGINEER', 'TECHNICIAN', 'SOFTWARE SPECIALIST']
},
{
    word: 'ROBOT',
    synonyms: ['AUTOMATON', 'ANDROID', 'MACHINE', 'CYBORG', 'BOT']
},
{
    word: 'INTERNET',
    synonyms: ['WEB', 'ONLINE', 'CYBERSPACE', 'NETWORK', 'DIGITAL REALM']
},
{
    word: 'AI',
    synonyms: ['ARTIFICIAL INTELLIGENCE', 'MACHINE LEARNING', 'AUTOMATION', 'NEURAL NETWORKS', 'SMART SYSTEMS']
},
{
    word: 'APP',
    synonyms: ['APPLICATION', 'SOFTWARE', 'TOOL', 'PLATFORM', 'PROGRAM']
},
{
    word: 'CODE',
    synonyms: ['PROGRAMMING', 'SCRIPT', 'SYNTAX', 'COMMANDS', 'LANGUAGE']
},
{
    word: 'CLOUD',
    synonyms: ['STORAGE', 'HOSTING', 'VIRTUAL SPACE', 'DATA CENTER', 'ONLINE INFRASTRUCTURE']
},
{
    word: 'ENCRYPTION',
    synonyms: ['SECURITY', 'CIPHER', 'ENCODING', 'SCRAMBLING', 'PROTECTION']
},
{
    word: 'GADGET',
    synonyms: ['DEVICE', 'TOOL', 'APPLIANCE', 'INSTRUMENT', 'TECHNOLOGY']
},
{
    word: 'CONTROLLER',
    synonyms: ['JOYSTICK', 'GAMEPAD', 'REMOTE', 'INPUT DEVICE', 'CONSOLE PAD']
},
{
    word: 'LEVEL',
    synonyms: ['STAGE', 'PHASE', 'ZONE', 'TIER', 'RANK']
},
{
    word: 'MISSION',
    synonyms: ['QUEST', 'TASK', 'OBJECTIVE', 'GOAL', 'CHALLENGE']
},
{
    word: 'BOSS',
    synonyms: ['ENEMY LEADER', 'FINAL CHALLENGE', 'ARCHNEMESIS', 'VILLAIN', 'ANTAGONIST']
},
{
    word: 'ARENA',
    synonyms: ['BATTLEFIELD', 'STADIUM', 'ZONE', 'MAP', 'VENUE']
},
{
    word: 'SCORE',
    synonyms: ['POINTS', 'TALLY', 'RESULT', 'MARK', 'RANK']
},
{
    word: 'HERO',
    synonyms: ['CHAMPION', 'WARRIOR', 'PROTAGONIST', 'SAVIOR', 'AVATAR']
},
{
    word: 'RPG',
    synonyms: ['ROLE-PLAYING GAME', 'FANTASY GAME', 'STRATEGY GAME', 'ADVENTURE GAME', 'CHARACTER GAME']
},
{
    word: 'FPS',
    synonyms: ['FIRST-PERSON SHOOTER', 'SHOOTER GAME', 'ACTION GAME', 'TACTICAL GAME', 'COMBAT GAME']
},
{
    word: 'POWER-UP',
    synonyms: ['BOOST', 'BONUS', 'UPGRADE', 'PERK', 'ENHANCEMENT']
},
{
    word: 'MULTIPLAYER',
    synonyms: ['CO-OP', 'TEAM MODE', 'ONLINE MODE', 'DUAL MODE', 'GROUP PLAY']
},
{
    word: 'MAP',
    synonyms: ['TERRAIN', 'LAYOUT', 'STAGE', 'LEVEL DESIGN', 'ENVIRONMENT']
},
{
    word: 'SKILL',
    synonyms: ['ABILITY', 'TALENT', 'POWER', 'TECHNIQUE', 'COMPETENCE']
},
{
    word: 'WEAPON',
    synonyms: ['ARM', 'TOOL', 'GEAR', 'INSTRUMENT', 'FIREARM']
},
{
    word: 'MELODY',
    synonyms: ['TUNE', 'AIR', 'SONG', 'HARMONY', 'THEME']
},
{
    word: 'RHYTHM',
    synonyms: ['BEAT', 'TEMPO', 'CADENCE', 'PULSE', 'PATTERN']
},
{
    word: 'LYRICS',
    synonyms: ['WORDS', 'TEXT', 'VERSES', 'STANZAS', 'LINES']
},
{
    word: 'INSTRUMENT',
    synonyms: ['TOOL', 'DEVICE', 'APPARATUS', 'EQUIPMENT', 'GEAR']
},
{
    word: 'SONG',
    synonyms: ['TUNE', 'PIECE', 'COMPOSITION', 'BALLAD', 'NUMBER']
},
{
    word: 'CHORD',
    synonyms: ['TRIAD', 'HARMONY', 'ARPEGGIO', 'INTERVAL', 'NOTE GROUP']
},
{
    word: 'CONCERT',
    synonyms: ['SHOW', 'PERFORMANCE', 'GIG', 'RECITAL', 'EVENT']
},
{
    word: 'BAND',
    synonyms: ['GROUP', 'ENSEMBLE', 'ORCHESTRA', 'TROUPE', 'TROUPE']
},
{
    word: 'ALBUM',
    synonyms: ['RECORD', 'COLLECTION', 'COMPILATION', 'SET', 'TRACKLIST']
},
{
    word: 'BEAT',
    synonyms: ['RHYTHM', 'PULSE', 'PATTERN', 'CADENCE', 'THUMP']
},
{
    word: 'SINGER',
    synonyms: ['VOCALIST', 'PERFORMER', 'ARTIST', 'CHORISTER', 'SONGSTRESS']
},
{
    word: 'COMPOSER',
    synonyms: ['SONGWRITER', 'MUSICIAN', 'CREATOR', 'ARRANGER', 'ORCHESTRATOR']
},
{
    word: 'STUDIO',
    synonyms: ['RECORDING ROOM', 'WORKSPACE', 'PRODUCTION HOUSE', 'MIXING SPACE', 'MUSIC ROOM']
},
{
    word: 'MICROPHONE',
    synonyms: ['MIC', 'TRANSMITTER', 'AMPLIFIER', 'RECORDER', 'SPEAKER']
},
{
    word: 'GENRE',
    synonyms: ['STYLE', 'CATEGORY', 'TYPE', 'CLASSIFICATION', 'FORM']
},
];

// Game state
let foundSynonyms = [];
let gameOver = false;
let dailyWord = null;
let streak = parseInt(localStorage.getItem('streak')) || 0;
let lastPlayDate = localStorage.getItem('lastPlayDate');

// Initialize game when document is loaded
// Initialize game when document is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateStreakDisplay();
  checkDailyPlay();

  window.startGame = function() {
      if (hasPlayedToday()) {
          showPopupMessage("Come back tomorrow for a new word! 🌟");
          return;
      }
      
      dailyWord = getDailyWord();
      const introScreen = document.getElementById("introScreen");
      const gameScreen = document.getElementById("game");
      
      if (introScreen) {
          introScreen.style.display = "none";
      }
      if (gameScreen) {
          gameScreen.style.display = "flex";
      }
      
      initializeGame();
  };

  window.closeEndScreen = function() {
      const endScreen = document.getElementById("endScreen");
      const gameScreen = document.getElementById("game");
      const introScreen = document.getElementById("introScreen");
      
      if (endScreen) {
          endScreen.style.display = "none";
      }
      if (gameScreen) {
          gameScreen.style.display = "none";
      }
      if (introScreen) {
          introScreen.style.display = "flex";
      }
      
      checkDailyPlay();
  };

  // Get all the DOM elements we need
  const wordInput = document.getElementById("wordInput");
  const submitButton = document.getElementById("submitButton");
  const hintButton = document.querySelector(".hint-btn");
  const giveUpButton = document.querySelector(".give-up-btn");

  // Add event listeners only if elements exist
  if (submitButton) {
      submitButton.addEventListener('click', submitWord);
  }
  
  if (wordInput) {
      wordInput.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') submitWord();
      });
  }
  
  // Add hint button event listener
  if (hintButton) {
      console.log("Hint button found"); // Debug log
      hintButton.onclick = function() {
          console.log("Hint button clicked"); // Debug log
          if (!dailyWord || !dailyWord.synonyms) {
              console.log("No daily word loaded"); // Debug log
              return;
          }

          const upperFoundSynonyms = foundSynonyms.map(word => word.toUpperCase());
          const remainingSynonyms = dailyWord.synonyms.filter(syn => 
              !upperFoundSynonyms.includes(syn.toUpperCase())
          );

          if (remainingSynonyms.length > 0) {
              const randomIndex = Math.floor(Math.random() * remainingSynonyms.length);
              const randomSynonym = remainingSynonyms[randomIndex];
              
              // Remove any existing popups
              const existingPopups = document.querySelectorAll('.popup-message');
              existingPopups.forEach(popup => popup.remove());

              // Create new popup
              const popup = document.createElement("div");
              popup.className = "popup-message";
              popup.style.opacity = "1"; // Ensure visibility
              popup.textContent = `Hint: Try a word starting with ${randomSynonym.substring(0, 2)}...`;
              document.body.appendChild(popup);

              // Remove the popup after animation
              setTimeout(() => {
                  if (popup && popup.parentNode) {
                      popup.parentNode.removeChild(popup);
                  }
              }, 1500);
          } else {
              const popup = document.createElement("div");
              popup.className = "popup-message";
              popup.style.opacity = "1";
              popup.textContent = "You've found all the synonyms! 🎉";
              document.body.appendChild(popup);
              
              setTimeout(() => {
                  if (popup && popup.parentNode) {
                      popup.parentNode.removeChild(popup);
                  }
              }, 1500);
          }
      };
  } else {
      console.error("Hint button not found"); // Debug log
  }
  
  if (giveUpButton) {
      giveUpButton.addEventListener('click', handleGiveUp);
  }

  // Initialize window functions
  window.returnHome = returnHome;
  window.shareScore = shareScore;
});

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

function returnToHome() {
  manuallyExited = true;  // Set flag to true when exiting manually
  document.getElementById("game").style.display = "none";       // Hide the game screen
  document.getElementById("introScreen").style.display = "flex"; // Show the home screen
  document.getElementById("homeLogo").style.display = "block";   // Ensure home logo is visible
  gameRunning = false;                                           // Stop the game if it’s running
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
  if (wordDisplay && dailyWord) {
      wordDisplay.textContent = dailyWord.word;
  }
  
  const totalSynonyms = dailyWord ? dailyWord.synonyms.length : 0;
  
  const foundWordsGrid = document.querySelector(".found-words-grid");
  if (foundWordsGrid) {
      foundWordsGrid.innerHTML = "";
  }
  
  const wordInput = document.getElementById("wordInput");
  if (wordInput) {
      wordInput.value = "";
  }
  
  const errorMessage = document.getElementById("errorMessage");
  if (errorMessage) {
      errorMessage.textContent = "";
  }
  
  updateProgressDisplay(totalSynonyms);
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
  const scoreDisplay = document.querySelector(".score-display");
  const highScoreDisplay = document.getElementById("highScoreDisplay");
  
  if (scoreDisplay) {
      scoreDisplay.textContent = `Progress: ${foundSynonyms.length}/${totalSynonyms} synonyms found`;
  }
  
  if (highScoreDisplay) {
      highScoreDisplay.textContent = `${foundSynonyms.length}/${totalSynonyms}`;
  }
  
  updateFoundWords();
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
  if (!dailyWord || !dailyWord.synonyms) {
      console.error("No daily word loaded");
      return;
  }

  const upperFoundSynonyms = foundSynonyms.map(word => word.toUpperCase());
  const remainingSynonyms = dailyWord.synonyms.filter(syn => 
      !upperFoundSynonyms.includes(syn.toUpperCase())
  );

  if (remainingSynonyms.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingSynonyms.length);
      const randomSynonym = remainingSynonyms[randomIndex];
      
      // Remove any existing popups
      const existingPopups = document.querySelectorAll('.popup-message');
      existingPopups.forEach(popup => popup.remove());

      // Create new popup
      const popup = document.createElement("div");
      popup.className = "popup-message";
      popup.style.opacity = "1"; // Ensure visibility
      popup.textContent = `Hint: Try a word starting with ${randomSynonym.substring(0, 2)}...`;
      document.body.appendChild(popup);

      // Remove the popup after animation
      setTimeout(() => {
          if (popup && popup.parentNode) {
              popup.parentNode.removeChild(popup);
          }
      }, 1500);
  } else {
      const popup = document.createElement("div");
      popup.className = "popup-message";
      popup.style.opacity = "1";
      popup.textContent = "You've found all the synonyms! 🎉";
      document.body.appendChild(popup);
      
      setTimeout(() => {
          if (popup && popup.parentNode) {
              popup.parentNode.removeChild(popup);
          }
      }, 1500);
  }
}

function handleGameWin() {
  gameOver = true;
  updateStreak();
  markAsPlayed();
  showPopupMessage("Congratulations! You found all 5 synonyms! 🎉");
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
  const shareText = `Wordecko ${performanceEmoji} ${dateStr}\n` +
      `Word: ${dailyWord.word}\n` +
      `Found: ${foundCount}/${totalSynonyms}\n` +
      `${gridRows.join('\n')}\n` +
      `Daily Streak: ${streak} 🔥`;
  
  const shareUrl = window.location.href;
  const fullShareText = shareText + "\n\nPlay at: " + shareUrl;

  // Try native sharing first
  if (navigator.share) {
      navigator.share({
          title: "Wordecko",
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
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent("Wordecko")}&summary=${encodeURIComponent(shareText)}" target="_blank" style="color: #0077B5; text-decoration: none; padding: 8px 16px; border-radius: 20px; background: #e1f0f8;">LinkedIn</a>
              <a href="https://api.whatsapp.com/send?text=${encodeURIComponent(fullShareText)}" target="_blank" style="color: #25D366; text-decoration: none; padding: 8px 16px; border-radius: 20px; background: #e5f7ef;">WhatsApp</a>
              <a href="mailto:?subject=${encodeURIComponent("Check out Wordecko!")}&body=${encodeURIComponent(fullShareText)}" style="color: #D44638; text-decoration: none; padding: 8px 16px; border-radius: 20px; background: #fce8e6;">Email</a>
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

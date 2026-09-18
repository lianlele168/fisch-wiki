export interface CodeItem {
  code: string;
  reward: string;
  status: 'Active' | 'Expired';
  addedDate?: string;
  /** Account level the code requires before it will redeem. */
  levelReq?: string;
  /** Published expiry date, for the long-running codes that carry one. */
  expires?: string;
  /** True for codes added within the last 7 days. */
  isNew?: boolean;
  /** Drives the grouping used on the codes page. */
  category?: 'permanent' | 'update' | 'event';
  /** Date this row was last checked against sources. */
  verifiedDate?: string;
}

export interface RodItem {
  name: string;
  tier: 'S+' | 'S' | 'A' | 'B' | 'F';
  price: string;
  lureSpeed: string;
  luck: string;
  control: string;
  resilience: string;
  maxKg: string;
  location: string;
  description: string;
  recommendedFor: string;
}

export interface LocationItem {
  name: string;
  coordinates: string;
  reqLevel: string;
  reqGear: string;
  description: string;
  notableFish: string[];
  tips: string;
}

export interface EnchantmentItem {
  name: string;
  tier: 'S' | 'A' | 'B';
  effect: string;
  multiplier: string;
  description: string;
}

export interface TotemItem {
  name: string;
  price: string;
  location: string;
  coordinates: string;
  effect: string;
  description: string;
}

export interface FishItem {
  name: string;
  rarity: 'Mythical' | 'Legendary' | 'Rare' | 'Uncommon' | 'Common';
  basePrice: string;
  preferredWeather: string;
  preferredSeason: string;
  location: string;
}

// 1. Active & Expired Codes
// Sources cross-checked 2026-09-18: Pocket Gamer (Sep 12), PlayPatch (Sep 13),
// Radio Times, BloxGuidesGG, Nerd's Chalk, HermitGamer.
// NOTE: Fisch retires almost every update code roughly 24 hours after release,
// so a long "active" list is a red flag, not a selling point.
export const ACTIVE_CODES: CodeItem[] = [
  {
    code: 'SCARLET',
    reward: "Scarlet skin for Nate's Blade",
    status: 'Active',
    addedDate: 'December 7, 2025',
    expires: 'December 15, 2026',
    category: 'permanent',
    verifiedDate: 'September 18, 2026',
  },
  {
    code: 'TemporarySubmarine',
    reward: 'Submarine parts crate — Back Fins, Metal Panels, Side Fins, Submarine Top & Windows',
    status: 'Active',
    addedDate: 'September 1, 2025',
    expires: 'October 18, 2026',
    category: 'permanent',
    verifiedDate: 'September 18, 2026',
  },
  {
    code: 'CARBON',
    reward: 'Carbon bobber',
    status: 'Active',
    addedDate: 'January 25, 2025',
    expires: 'No published expiry',
    category: 'permanent',
    verifiedDate: 'September 18, 2026',
  },
  {
    code: 'LittleBudlingUpdate',
    reward: "1,000 C$ + Walrus boat + 5x Icy Fisch'n Dots + 5x Coral Pearl + 5x Cotton Candy Pieces + 5x Tropical Fruit Mix + 1x Random Totem",
    status: 'Active',
    addedDate: 'September 12, 2026',
    levelReq: 'Level 25+',
    isNew: true,
    category: 'update',
    verifiedDate: 'September 18, 2026',
  },
  {
    code: 'SkycrestIsInTheSky',
    reward: "1,000 C$ + Banana boat + 5x Icy Fisch'n Dots + 5x Coral Pearl + 5x Cotton Candy Pieces + 5x Tropical Fruit Mix + 1x Random Totem",
    status: 'Active',
    levelReq: 'Level 25+',
    category: 'update',
    verifiedDate: 'September 18, 2026',
  },
];

// Codes that no longer redeem. Kept as a reference archive because most guides
// silently delete dead strings — and then re-list them a year later as "new".
export const EXPIRED_CODES: CodeItem[] = [
  // --- 2026 weekly update codes (each lived roughly 24 hours) ---
  { code: 'SkycrestNextWeek', reward: "1,000 C$ + Little Sei Whale boat + 5x Icy Fisch'n Dots + 5x Coral Pearl + 5x Cotton Candy Pieces + 5x Tropical Fruit Mix + 1x Random Totem", status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'ShootingStars', reward: '1,000 C$ + XL Meteoric Rod + bait bundle + 1x Random Hunt Totem', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'CollectMyPufferfish', reward: '1,000 C$ + Giant Jetski + bait bundle + 1x Random Hunt Totem', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'TheDeepIsVeryDeep', reward: '1,000 C$ + Cleaned Scrap-Bot + bait bundle + 1x Random Hunt Totem', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'HarpoonGunsAreAwesome', reward: '1,000 C$ + Chaotic Crasher + bait bundle + 1x Random Hunt Totem', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'HarpoonGunsNextWeek', reward: 'Expired — reward not documented by the publisher', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'SorryForShopShenanigans', reward: '150 C$ + Rainbow Totem', status: 'Expired', levelReq: 'Level 50+', category: 'update' },
  { code: 'RoamingFishAndWaterPark', reward: 'Expired — reward not documented by the publisher', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'OllieAndFinWhale', reward: 'Expired — reward not documented by the publisher', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'DrylandsIsFire', reward: 'Expired — reward not documented by the publisher', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'KingCrabstle', reward: 'Expired — reward not documented by the publisher', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'Fischfest2026', reward: 'Fischfest 2026 event bundle', status: 'Expired', category: 'event' },
  { code: 'AquariumCustomization', reward: 'Expired — reward not documented by the publisher', status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'TheDeepAwaitsForYou', reward: 'Expired — The Deep update code', status: 'Expired', levelReq: 'Level 1000+', category: 'update' },
  { code: 'NewIslandSoon', reward: '1,000 C$ + Pitchfork skin + 5x Starlight Worm + 1x Random Totem', status: 'Expired', category: 'update' },
  { code: 'EverturnForest', reward: 'Driftwood Rod Skin + 1,000 C$ + 5x Starlight Worm + 1x Random Hunt Totem', status: 'Expired', category: 'update' },
  { code: 'JungleExpansionSOON', reward: 'Seraphic Rod skin + 5x Thorn Cluster bait + 1x Random Totem', status: 'Expired', category: 'update' },
  { code: 'JungleExpansion', reward: '500 C$ + 5x Thorn Cluster + 1x Random item', status: 'Expired', category: 'update' },
  { code: 'LOSTJUNGLE', reward: 'Expired — Lost Jungle event code', status: 'Expired', category: 'event' },
  { code: 'LOSTJUNGLESOON', reward: 'Expired — Lost Jungle teaser code', status: 'Expired', category: 'update' },
  { code: 'Brinestorm', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'update' },
  { code: 'Tidefall', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'update' },
  { code: 'Astraeus', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'update' },
  { code: 'TradePlazaRevamp', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'update' },
  { code: 'TradeRevampSoon', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'update' },

  // --- 2026 companion / quest update codes ---
  { code: 'Shady', reward: '1,000 Coins + Neongrinder skin + Chainsaw skin + 5x Golden Tentacles + 20x Shady Scrip + 1x Random Totem', status: 'Expired', category: 'update' },
  { code: 'ShadySorry', reward: '100 Coins + Shadyreaper', status: 'Expired', category: 'update' },
  { code: 'HumpbackAndMegamouth', reward: '1,000 Coins + 5x Golden Tentacles + 1x Random Totem', status: 'Expired', category: 'update' },
  { code: 'Sovereign', reward: '1,000 Coins + Shiny Flopping Salmon companion + 5x Golden Tentacles', status: 'Expired', category: 'update' },
  { code: 'VenueTakeover', reward: '1,000 Coins + Giant Driftwood + 5x Golden Tentacles', status: 'Expired', category: 'update' },
  { code: 'Companions', reward: "1,000 Cash + Hades' Rose-Scythe + 5x Golden Tentacles + 10x Krill", status: 'Expired', category: 'update' },
  { code: 'MermaidCove', reward: '1,000 Cash + Violet Dusk + Fisch Coin + Golden Tentacles', status: 'Expired', category: 'update' },
  { code: 'Crews', reward: 'Expired — Crews update code', status: 'Expired', category: 'update' },
  { code: 'LivyatanAndCompanions', reward: 'Expired — Livyatan companion update code', status: 'Expired', category: 'update' },
  { code: 'nickandsnothegoat', reward: '43,110 Cash + Bassanjo + 20x Fish Heads + 20x Minnows + 20x Shark Heads', status: 'Expired', category: 'event' },
  { code: 'YESIMBEINGFRTHISISTHEMAKHCODE', reward: 'Magical Leak', status: 'Expired', category: 'event' },
  { code: 'SLOPSKINSFORMIGUROD', reward: 'Expired — rod skin bundle', status: 'Expired', category: 'event' },
  { code: 'WRATHOFOLYMPUS', reward: 'Expired — Wrath of Olympus event code', status: 'Expired', category: 'event' },
  { code: 'FischIsTheBest', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: '049andNickneedatan', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'NickNate049492SnoStage105', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'ECLIPSEBLADE', reward: 'Blade of the Eclipse skin for the Fang of the Eclipse rod', status: 'Expired', category: 'event' },
  { code: 'FORAREASON', reward: 'Red Blade of the Glorp skin for the Blade of Glorp rod', status: 'Expired', category: 'event' },
  { code: 'isitreallyyou?', reward: 'Bloodwing skin for the Wingripper rod', status: 'Expired', category: 'event' },
  { code: 'MerlinMystery', reward: 'Garnetbreaker skin for the Dreambreaker rod', status: 'Expired', category: 'event' },
  { code: 'MerryMerlin', reward: 'Expired — Merlin event code', status: 'Expired', category: 'event' },
  { code: 'CultistLair', reward: 'Golden Staff skin for the Great Dreamer rod', status: 'Expired', category: 'update' },
  { code: 'BigUpdateSoon', reward: 'Minty Fab skin for the Fabulous rod', status: 'Expired', category: 'update' },
  { code: 'DEVSLOPSKINS', reward: 'Domodrum + Meowing Melody + Illumina + Tideglass + Last Dance skins', status: 'Expired', category: 'event' },
  { code: 'CAVERN', reward: 'Expired — Cavern update skin', status: 'Expired', category: 'update' },
  { code: 'SNOWBURROW', reward: 'Expired — Snowburrow update skins', status: 'Expired', category: 'update' },
  { code: 'TheDepths', reward: 'Weird Algae + Truffle Worms', status: 'Expired', category: 'update' },
  { code: 'Prehistoric', reward: 'Cash + Weird Algae + Truffle Worms', status: 'Expired', category: 'update' },
  { code: 'AncientIsle', reward: 'Cash + Weird Algae + Truffle Worms', status: 'Expired', category: 'update' },
  { code: 'SUPPORTERDESTINY', reward: 'Destiny Rod skin', status: 'Expired', category: 'event' },
  { code: 'METEOR', reward: 'Expired — Meteor event skin', status: 'Expired', category: 'event' },
  { code: 'SECONDARYENCHANT', reward: 'Starfall Totem + Boat', status: 'Expired', category: 'update' },
  { code: 'PERSONALAQUARIUMS', reward: 'Boat', status: 'Expired', category: 'update' },
  { code: 'thisisaveryevilcode', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'wowyoufigureditout', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'UNGUESSABLECODE', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'TESTCONST', reward: 'Expired — developer test string', status: 'Expired', category: 'event' },
  { code: 'PUBLICTEST2', reward: 'Expired — public test build string', status: 'Expired', category: 'event' },

  // --- Holiday & seasonal event codes ---
  { code: 'MERRYFISCHMAS', reward: 'Holly Berry + Peppermint Worm', status: 'Expired', category: 'event' },
  { code: 'MerryFischmas2', reward: '25x Fruitcake Flakes + 25x Cookie Crumble + 15x Frostnova Bait', status: 'Expired', category: 'event' },
  { code: 'FISCHMASDAY', reward: '$1,000 + 2x Holly Berries + 2x Peppermint Worms', status: 'Expired', category: 'event' },
  { code: 'GOODBYEFISCHMAS', reward: '$3,000 + 1x Aurora', status: 'Expired', category: 'event' },
  { code: 'FischmasSoon', reward: 'Lime Silly Time skin', status: 'Expired', category: 'event' },
  { code: 'NewYear', reward: '$1,000 + 2x Holly Berries + 2x Peppermint Worms', status: 'Expired', category: 'event' },
  { code: 'NewYears', reward: 'Expired — New Year event code', status: 'Expired', category: 'event' },
  { code: 'LunarNewYear', reward: 'Expired — Lunar New Year event code', status: 'Expired', category: 'event' },
  { code: 'NorthernExpedition', reward: '$1,000 + 2x Holly Berries + 3x Peppermint Worms', status: 'Expired', category: 'event' },
  { code: 'BorealPines', reward: 'Expired — Boreal Pines winter event code', status: 'Expired', category: 'event' },
  { code: 'Advent', reward: 'Cash + Weird Algae + Truffle Worms', status: 'Expired', category: 'event' },
  { code: 'ALIENS', reward: 'Snowy Christmas Skin for the Christmas Tree rod', status: 'Expired', category: 'event' },
  { code: 'ValentinesDay', reward: "Cupid's Bow Skin + Chocolates", status: 'Expired', category: 'event' },
  { code: 'Valentides', reward: 'Onirifalx skin + Chocolates', status: 'Expired', category: 'event' },
  { code: 'ValentinesSoon', reward: '3 Skins + Dripstone Totem', status: 'Expired', category: 'event' },
  { code: 'ValentinesOver', reward: 'Expired — Valentine event code', status: 'Expired', category: 'event' },
  { code: 'ROSES', reward: '2x Titles + Bobber', status: 'Expired', category: 'event' },
  { code: 'Easter2026', reward: 'Easter event code (expired April 18, 2026)', status: 'Expired', category: 'event' },
  { code: 'StPatricks', reward: "St Patrick's event code — 2x Rods + Skins", status: 'Expired', category: 'event' },
  { code: 'SeventhOfMarch!', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: '4THOFJULY', reward: 'Patriot Rod + Title + Shiny and Sparkling Totems', status: 'Expired', category: 'event' },
  { code: 'HAPPY4TH', reward: 'Expired — Fourth of July event code', status: 'Expired', category: 'event' },
  { code: 'Fischgiving', reward: 'Roasted Turkey Boat + 10x Unsellable Bountiful Bait Crate', status: 'Expired', category: 'event' },
  { code: 'ThanksgivingSoon', reward: 'Expired — Thanksgiving teaser code', status: 'Expired', category: 'event' },
  { code: 'FischFright2024', reward: 'Candy Corn Bobber + Plastic Rod + Carbon Rod', status: 'Expired', category: 'event' },
  { code: 'FischFright2025', reward: 'Mimic Spellbook Bobber + Pumpkin Candy Basket Lantern', status: 'Expired', category: 'event' },
  { code: 'FischFrightPart2', reward: 'Expired — FischFright Part 2 event skin', status: 'Expired', category: 'event' },
  { code: 'FISCHFRIGHTSOON', reward: 'Expired — Halloween teaser code', status: 'Expired', category: 'event' },
  { code: 'FISCHFRIGHTNOW', reward: 'Expired — Halloween event code', status: 'Expired', category: 'event' },
  { code: 'FISCHFEST', reward: 'Expired — Fischfest event bundle', status: 'Expired', category: 'event' },
  { code: 'FISCHANNIVERSARY', reward: 'Anniversary cake item', status: 'Expired', category: 'event' },
  { code: 'JOUNCE', reward: 'Team-choice code (expired March 8, 2026 — JOUNCE or BIGGLE, pick one)', status: 'Expired', category: 'event' },
  { code: 'BIGGLE', reward: 'Team-choice code (expired March 8, 2026 — JOUNCE or BIGGLE, pick one)', status: 'Expired', category: 'event' },
  { code: 'BLOOPWHISTLE2', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'BRICK', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'CHUD', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'DREADFIN', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'FOLK', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'EVENTFIXED', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'RRG', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'RFG', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },

  // --- Apology / outage / maintenance codes ---
  { code: 'SORRY', reward: 'Skins + Rods', status: 'Expired', category: 'event' },
  { code: 'SorryReward', reward: '5x Golden Tentacles + C$1,500', status: 'Expired', category: 'event' },
  { code: 'SORRYGUYS', reward: '2x Kraken Tentacle baits + C$1,000', status: 'Expired', category: 'event' },
  { code: 'SorryForDowntime', reward: '10x Instant Catchers + 10x Fish Heads', status: 'Expired', category: 'event' },
  { code: 'SorryforShutdown', reward: '15x Volcanic Geodes', status: 'Expired', category: 'event' },
  { code: 'Sorry4Delay', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'ChangesComing', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'Legomy', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },

  // --- Milestone & follower-thanks codes ---
  { code: 'ThankYou', reward: 'Boat + Totem', status: 'Expired', category: 'event' },
  { code: 'ThankYouFollowers', reward: '2,000 Cash', status: 'Expired', category: 'event' },
  { code: 'ThankYouFollowers2', reward: 'Astral Rod', status: 'Expired', category: 'event' },
  { code: 'ThankYouFollowers3', reward: 'Event Horizon Rod', status: 'Expired', category: 'event' },
  { code: 'ThankYouFollwers', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'ThanksFor10Mil', reward: '10Mil Title + 40% faster Lure Speed for 1 hour + 10,000 Cash', status: 'Expired', category: 'event' },
  { code: '100M', reward: '$2,500 + 2x Truffle Worm + 2x Weird Algae', status: 'Expired', category: 'event' },
  { code: '200K', reward: '3x Truffle Worm + 3x Weird Algae', status: 'Expired', category: 'event' },
  { code: '1BVisits', reward: 'Expired — 1 billion visits milestone code', status: 'Expired', category: 'event' },
  { code: 'Brother', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'NewBeginnings', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'OGNOLIFE', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'Scubaaaa', reward: '10x Coral Geodes', status: 'Expired', category: 'event' },

  // --- Currency, boost & shop codes ---
  { code: 'THEKRAKEN', reward: 'Sunken ship bobber + C$2,500', status: 'Expired', category: 'event' },
  { code: 'ATLANTEANSTORM', reward: "2x Hangman's Hook baits + C$1,000", status: 'Expired', category: 'event' },
  { code: 'GOLDENTIDE', reward: '3x Instant Catchers', status: 'Expired', category: 'event' },
  { code: 'HeadStart', reward: 'Cash + Instant Catchers', status: 'Expired', category: 'event' },
  { code: 'HEADSTART', reward: 'Expired — reward not documented by the publisher', status: 'Expired', category: 'event' },
  { code: 'FRIENDXP', reward: 'Expired — friend XP boost code', status: 'Expired', category: 'event' },
  { code: 'DAILYSHOP', reward: 'Daily Shop event bundle (expired July 19, 2026)', status: 'Expired', category: 'event' },
  { code: 'DARKHEART', reward: 'Darkheart event bundle (expired July 19, 2026)', status: 'Expired', category: 'event' },
];

// 2. Fishing Rods Tier List Data
export const RODS_DATA: RodItem[] = [
  {
    name: 'Supreme Rod',
    tier: 'S+',
    price: '$150,000',
    lureSpeed: '+80%',
    luck: '+150%',
    control: '0.2',
    resilience: '0.15',
    maxKg: '10,000kg',
    location: 'Roslit Volcano Secret Vendor',
    description: 'The pinnacle of fishing technology in Fisch. Massive luck and lure speed boost.',
    recommendedFor: 'End-game players hunting Mythical Megalodons and Secret Fish.'
  },
  {
    name: 'Destiny Rod',
    tier: 'S+',
    price: '$190,000',
    lureSpeed: '+70%',
    luck: '+250%',
    control: '0.15',
    resilience: '0.1',
    maxKg: '15,000kg',
    location: 'Caster NPC (Sunstone Peak)',
    description: 'Provides the highest raw Luck multiplier in the entire game for catching legendary species.',
    recommendedFor: 'Trophy collectors and rare species completists.'
  },
  {
    name: 'Magma Rod',
    tier: 'S',
    price: '$25,000',
    lureSpeed: '+40%',
    luck: '+75%',
    control: '0.1',
    resilience: '0.05',
    maxKg: '2,500kg',
    location: 'Roslit Bay Volcano Cave',
    description: 'Heat-resistant rod. The ONLY rod that can fish directly in boiling volcanic lava.',
    recommendedFor: 'Volcano fishing and hunting Magma Shark / Lava Eel.'
  },
  {
    name: 'Nocturnal Rod',
    tier: 'S',
    price: '$11,000',
    lureSpeed: '+50%',
    luck: '+100% (Night)',
    control: '0.08',
    resilience: '0.05',
    maxKg: '1,500kg',
    location: 'Terrapin Island Witch NPC',
    description: 'Doubles fishing luck during night time or dark rain weather.',
    recommendedFor: 'Night fishing sessions paired with Dark Totem.'
  },
  {
    name: 'Carbon Rod',
    tier: 'A',
    price: '$2,000',
    lureSpeed: '+25%',
    luck: '+45%',
    control: '0.05',
    resilience: '0.05',
    maxKg: '600kg',
    location: 'Moosewood Rod Merchant',
    description: 'Best mid-game economy rod. High durability and solid lure speed for fast leveling.',
    recommendedFor: 'Mid-game players moving from Moosewood to Roslit Bay.'
  },
  {
    name: 'Fast Rod',
    tier: 'A',
    price: '$750',
    lureSpeed: '+90%',
    luck: '-10%',
    control: '0.02',
    resilience: '0.0',
    maxKg: '200kg',
    location: 'Moosewood Dock',
    description: 'Sacrifices luck for ultra-fast bite rates. Perfect for farming EXP quickly.',
    recommendedFor: 'AFK / Fast EXP leveling up to level 50.'
  },
  {
    name: 'Flimsy Rod',
    tier: 'F',
    price: 'Free',
    lureSpeed: '0%',
    luck: '0%',
    control: '0.0',
    resilience: '0.0',
    maxKg: '25kg',
    location: 'Starter Inventory',
    description: 'Basic wooden rod given to all new anglers.',
    recommendedFor: 'First 5 minutes of gameplay in Moosewood.'
  }
];

// 3. Locations & Coordinates Data
export const LOCATIONS_DATA: LocationItem[] = [
  {
    name: 'Moosewood (Starter Island)',
    coordinates: 'X: 380, Y: 135, Z: 230',
    reqLevel: 'Level 1+',
    reqGear: 'None',
    description: 'The starting hub island featuring starter vendors, basic rod shops, and shipwright.',
    notableFish: ['Bass', 'Salmon', 'Golden Perch', 'Moosewood Trout'],
    tips: 'Talk to the Angler NPC daily for free fishing quests and quick cash rewards.'
  },
  {
    name: 'Roslit Bay & Volcano',
    coordinates: 'X: -1480, Y: 130, Z: 680',
    reqLevel: 'Level 15+',
    reqGear: 'Wooden Boat or Faster',
    description: 'Tropical volcanic island. Features both shallow ocean waters and a dangerous lava cave.',
    notableFish: ['Lava Eel', 'Magma Shark', 'Obsidian Snapper', 'Fire Coral Bass'],
    tips: 'You MUST equip a Magma Rod to fish inside the volcanic crater.'
  },
  {
    name: 'Snowcap Island',
    coordinates: 'X: 2600, Y: 135, Z: 2400',
    reqLevel: 'Level 25+',
    reqGear: 'Warm Clothes / Speedboat',
    description: 'Freezing arctic biome featuring icy caverns and winter exclusive species.',
    notableFish: ['Glacier Cod', 'Frostbite Halibut', 'Polar Bear Shark', 'Ice Crystal Fish'],
    tips: 'Fish inside the Snowcap Cave for high-value Glacier Cod.'
  },
  {
    name: 'Desolate Deep (Ocean Trench)',
    coordinates: 'X: -950, Y: -250, Z: -1800',
    reqLevel: 'Level 40+',
    reqGear: 'Diving Gear ($3,000) Mandatory',
    description: 'A deep underwater abyss hidden beneath Sunstone Island. Requires diving gear to avoid drowning.',
    notableFish: ['Abyssal Anglerfish', 'Depths Crappie', 'Bioluminescent Kraken', 'Giant Squids'],
    tips: 'Buy Diving Gear at Moosewood before diving! Without it, oxygen depletes in 10 seconds.'
  },
  {
    name: 'Secret Island (Keep Sanctuary)',
    coordinates: 'X: 1200, Y: 150, Z: -3400',
    reqLevel: 'Level 50+',
    reqGear: 'Advanced Navigation / Glider',
    description: 'Hidden fog-covered sanctuary housing the Enchantment Relic altar.',
    notableFish: ['Celestial Koi', 'Mythical Leviathan', 'Starlight Flounder'],
    tips: 'Locate the hidden waterfall cave behind the main stone arch to enter.'
  }
];

// 4. Enchantments Data
export const ENCHANTMENTS_DATA: EnchantmentItem[] = [
  {
    name: 'Sea King',
    tier: 'S',
    effect: 'Fish Size +30%',
    multiplier: '1.4x Sale Price',
    description: 'Increases caught fish dimensions by 30%, directly scaling up market value.'
  },
  {
    name: 'Hasty',
    tier: 'S',
    effect: 'Lure Speed +40%',
    multiplier: '1.5x Catch Rate',
    description: 'Drastically reduces bite waiting time, letting you catch 40% more fish per hour.'
  },
  {
    name: 'Lucky',
    tier: 'A',
    effect: 'Rare Luck +20%',
    multiplier: '1.2x Rare Luck',
    description: 'Boosts probability of hooking Rare, Legendary, and Mythical species.'
  },
  {
    name: 'Abyssal',
    tier: 'B',
    effect: 'Deep Water Bonus +35%',
    multiplier: '1.35x Trench Luck',
    description: 'Provides additional catch speed and luck when fishing in Desolate Deep.'
  }
];

// 5. Totems Data
export const TOTEMS_DATA: TotemItem[] = [
  {
    name: 'Tempest Totem',
    price: '$2,000',
    location: 'Terrapin Island Hidden Cave',
    coordinates: 'X: -150, Y: 140, Z: 1900',
    effect: 'Summons Thunderstorm Weather instantly for 15 minutes.',
    description: 'Essential for spawning storm-exclusive species like Electric Eel and Tempest Shark.'
  },
  {
    name: 'Wind Totem',
    price: '$2,000',
    location: 'Snowcap Peak Cavern',
    coordinates: 'X: 2650, Y: 210, Z: 2450',
    effect: 'Triggers Heavy Wind conditions.',
    description: 'Increases glider flight speed and spawns windy weather species.'
  },
  {
    name: 'Sun Totem',
    price: '$2,000',
    location: 'Sunstone Island Peak',
    coordinates: 'X: -900, Y: 220, Z: -1750',
    effect: 'Clears storms and forces Clear Sunny Weather.',
    description: 'Resets bad weather back to sunny daytime for daytime fish species.'
  }
];

// 6. Fish Price & Rarity Data
export const FISH_VALUES: FishItem[] = [
  // Mythical & Event Bosses
  { name: 'Celestial Leviathan', rarity: 'Mythical', basePrice: '$15,000', preferredWeather: 'Night / Clear', preferredSeason: 'All', location: 'Keep Sanctuary (Secret Altar)' },
  { name: 'Megalodon Shark', rarity: 'Mythical', basePrice: '$12,500', preferredWeather: 'Thunderstorm', preferredSeason: 'Autumn', location: 'Deep Ocean Trench' },
  { name: 'Bioluminescent Kraken', rarity: 'Mythical', basePrice: '$14,200', preferredWeather: 'Fog', preferredSeason: 'Winter', location: 'Desolate Deep Abyssal Trench' },
  { name: 'Ancient Depth Serpent', rarity: 'Mythical', basePrice: '$16,500', preferredWeather: 'Rain', preferredSeason: 'All', location: 'Brine Pool Sub-Trench' },
  { name: 'Spectral Ghost Fish', rarity: 'Mythical', basePrice: '$11,000', preferredWeather: 'Night / Fog', preferredSeason: 'Autumn', location: 'Sunken Shipwreck' },

  // Legendary Predators & Deep Sea
  { name: 'Magma Shark', rarity: 'Legendary', basePrice: '$4,500', preferredWeather: 'Sunny', preferredSeason: 'Summer', location: 'Roslit Volcano Lava Pool' },
  { name: 'Abyssal Anglerfish', rarity: 'Legendary', basePrice: '$4,200', preferredWeather: 'Fog', preferredSeason: 'Winter', location: 'Desolate Deep' },
  { name: 'Electric Eel', rarity: 'Legendary', basePrice: '$3,600', preferredWeather: 'Thunderstorm', preferredSeason: 'Spring', location: 'Terrapin Island Mangroves' },
  { name: 'Tempest Shark', rarity: 'Legendary', basePrice: '$4,800', preferredWeather: 'Thunderstorm', preferredSeason: 'Autumn', location: 'Open Ocean Whirlpool' },
  { name: 'Gilded Sailfish', rarity: 'Legendary', basePrice: '$3,900', preferredWeather: 'Windy', preferredSeason: 'Summer', location: 'Sunstone Island Cliffs' },
  { name: 'Blizzard Salmon', rarity: 'Legendary', basePrice: '$3,750', preferredWeather: 'Snow', preferredSeason: 'Winter', location: 'Snowcap Peak Lake' },
  { name: 'Phantom Ray', rarity: 'Legendary', basePrice: '$4,100', preferredWeather: 'Night', preferredSeason: 'Spring', location: 'Secret Island Caverns' },

  // Rare Species
  { name: 'Glacier Cod', rarity: 'Rare', basePrice: '$850', preferredWeather: 'Snow / Wind', preferredSeason: 'Winter', location: 'Snowcap Island Shore' },
  { name: 'Golden Perch', rarity: 'Rare', basePrice: '$650', preferredWeather: 'Sunny', preferredSeason: 'Spring', location: 'Moosewood Deep Pond' },
  { name: 'Obsidian Salmon', rarity: 'Rare', basePrice: '$920', preferredWeather: 'Any', preferredSeason: 'Summer', location: 'Roslit Bay Basalt Rocks' },
  { name: 'Starlight Flounder', rarity: 'Rare', basePrice: '$980', preferredWeather: 'Night / Clear', preferredSeason: 'All', location: 'Keep Sanctuary' },
  { name: 'Alligator Gar', rarity: 'Rare', basePrice: '$780', preferredWeather: 'Fog / Rain', preferredSeason: 'Summer', location: 'Terrapin Bayou' },
  { name: 'Void Squid', rarity: 'Rare', basePrice: '$1,100', preferredWeather: 'Any', preferredSeason: 'Winter', location: 'Desolate Deep Entrance' },
  { name: 'Amberjack King', rarity: 'Rare', basePrice: '$820', preferredWeather: 'Windy', preferredSeason: 'Autumn', location: 'Sunstone Coral Reef' },
  { name: 'Aurora Trout', rarity: 'Rare', basePrice: '$950', preferredWeather: 'Snow / Night', preferredSeason: 'Winter', location: 'Snowcap Glacier Cave' },

  // Uncommon Species
  { name: 'Roslit Flounder', rarity: 'Uncommon', basePrice: '$280', preferredWeather: 'Clear', preferredSeason: 'Summer', location: 'Roslit Bay Beach' },
  { name: 'Clownfish', rarity: 'Uncommon', basePrice: '$210', preferredWeather: 'Sunny', preferredSeason: 'Spring', location: 'Sunstone Island Shallows' },
  { name: 'Terrapin Mudfish', rarity: 'Uncommon', basePrice: '$190', preferredWeather: 'Rain', preferredSeason: 'Summer', location: 'Terrapin Island Swamp' },
  { name: 'Frost Trout', rarity: 'Uncommon', basePrice: '$320', preferredWeather: 'Snow', preferredSeason: 'Winter', location: 'Snowcap Docks' },
  { name: 'Red Snapper', rarity: 'Uncommon', basePrice: '$250', preferredWeather: 'Windy', preferredSeason: 'Autumn', location: 'Moosewood Ocean Edge' },
  { name: 'Angelfish', rarity: 'Uncommon', basePrice: '$310', preferredWeather: 'Sunny', preferredSeason: 'Spring', location: 'Sunstone Coral Reef' },
  { name: 'Swamp Eel', rarity: 'Uncommon', basePrice: '$240', preferredWeather: 'Fog', preferredSeason: 'Autumn', location: 'Terrapin Mangroves' },
  { name: 'Ice Pike', rarity: 'Uncommon', basePrice: '$340', preferredWeather: 'Snow / Wind', preferredSeason: 'Winter', location: 'Snowcap Ice Shelf' },

  // Common Species
  { name: 'Moosewood Trout', rarity: 'Common', basePrice: '$45', preferredWeather: 'Any', preferredSeason: 'All', location: 'Moosewood Starter Docks' },
  { name: 'Pond Perch', rarity: 'Common', basePrice: '$35', preferredWeather: 'Sunny', preferredSeason: 'Spring', location: 'Moosewood Village Pond' },
  { name: 'Common Carp', rarity: 'Common', basePrice: '$50', preferredWeather: 'Rain', preferredSeason: 'All', location: 'Moosewood River' },
  { name: 'Ocean Minnow', rarity: 'Common', basePrice: '$30', preferredWeather: 'Any', preferredSeason: 'Summer', location: 'Shallow Waters' },
  { name: 'Sea Bass', rarity: 'Common', basePrice: '$65', preferredWeather: 'Windy', preferredSeason: 'Autumn', location: 'Moosewood Coast' },
  { name: 'Sand Goby', rarity: 'Common', basePrice: '$40', preferredWeather: 'Sunny', preferredSeason: 'Summer', location: 'Roslit Coast Sandbar' },
  { name: 'Weed Shiner', rarity: 'Common', basePrice: '$25', preferredWeather: 'Any', preferredSeason: 'Spring', location: 'Terrapin Shallows' },
  { name: 'Kelp Crab', rarity: 'Common', basePrice: '$55', preferredWeather: 'Fog', preferredSeason: 'All', location: 'Ocean Floor Kelp Forests' }
];

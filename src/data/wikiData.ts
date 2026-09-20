// ============================================================================
// DATA INTEGRITY NOTE
// Rod, fish and location data below is restricted to entries verified against
// fischipedia.org (the official Fisch Wiki) in September 2026.
// Anything that could not be verified was DELETED, not guessed.
// Fields that sources do not document are marked "Not documented".
// ============================================================================

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

}

export interface RodItem {
  name: string;
  /**
   * Editorial convenience tier, derived MECHANICALLY from the verified Luck
   * stat: S+ >= 200%, S >= 90%, A >= 40%, B >= 0%, F < 0%.
   * This is our own ranking, NOT official game data.
   */
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
  category: 'Major' | 'Sub-Location';
  /** Short verified fact about this location, or an honest "not documented" note. */
  note: string;
  /** Verified rods sold / obtainable here. Empty when not documented. */
  rodsSold: string[];
  /** Verified fish species tied to this location in the official fish tables. Empty when not documented. */
  notableFish: string[];
}

export interface FishItem {
  name: string;
  rarity: 'Mythical' | 'Legendary' | 'Common';
  location: string;
  /** Average sale price per kg in C$, as listed on the official fish tables. */
  pricePerKg: string;
  /** Average sale price of one catch in C$. "Not documented" when the source table omits it. */
  avgValue: string;
}

// 1. Active & Expired Codes
// Sources cross-checked : Pocket Gamer (Sep 12), PlayPatch (Sep 13),
// Radio Times, BloxGuidesGG, Nerd's Chalk, HermitGamer.
// NOTE: Fisch retires almost every update code roughly 24 hours after release,
// so a long "active" list is a red flag, not a selling point.
export const ACTIVE_CODES: CodeItem[] = [
  {
    code: 'SCARLET',
    reward: "Scarlet skin for Nate's Blade",
    status: 'Active',
    addedDate: '',
    expires: '',
    category: 'permanent',

  },
  {
    code: 'TemporarySubmarine',
    reward: 'Submarine parts crate — Back Fins, Metal Panels, Side Fins, Submarine Top & Windows',
    status: 'Active',
    addedDate: '',
    expires: '',
    category: 'permanent',

  },
  {
    code: 'CARBON',
    reward: 'Carbon bobber',
    status: 'Active',
    addedDate: '',
    expires: 'No published expiry',
    category: 'permanent',
  },
];

// Codes that no longer redeem. Kept as a reference archive because most guides
// silently delete dead strings — and then re-list them a year later as "new".
export const EXPIRED_CODES: CodeItem[] = [
  // --- 2026 weekly update codes (each lived roughly 24 hours) ---
  { code: 'SkycrestIsInTheSky', reward: "1,000 C$ + Banana boat + 5x Icy Fisch'n Dots + 5x Coral Pearl + 5x Cotton Candy Pieces + 5x Tropical Fruit Mix + 1x Random Totem", status: 'Expired', levelReq: 'Level 25+', category: 'update' },
  { code: 'LittleBudlingUpdate', reward: "1,000 C$ + Walrus boat + 5x Icy Fisch'n Dots + 5x Coral Pearl + 5x Cotton Candy Pieces + 5x Tropical Fruit Mix + 1x Random Totem", status: 'Expired', levelReq: 'Level 25+', category: 'update' },
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
  { code: 'Easter2026', reward: 'Easter event code (expired )', status: 'Expired', category: 'event' },
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
  { code: 'JOUNCE', reward: 'Team-choice code (expired — JOUNCE or BIGGLE, pick one)', status: 'Expired', category: 'event' },
  { code: 'BIGGLE', reward: 'Team-choice code (expired — JOUNCE or BIGGLE, pick one)', status: 'Expired', category: 'event' },
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
  { code: 'DAILYSHOP', reward: 'Daily Shop event bundle (expired )', status: 'Expired', category: 'event' },
  { code: 'DARKHEART', reward: 'Darkheart event bundle (expired )', status: 'Expired', category: 'event' },
];

// 2. Fishing Rods — 20 entries, all stats verified against fischipedia.org/wiki/Rods
// (plus the dedicated Destiny Rod and Magma Rod pages), September 2026.
// Corrections vs the old fabricated dataset:
//   - Destiny Rod: Lure Speed is 45% (was wrongly listed as +70%).
//   - Magma Rod: FREE reward from the Orc quest at Roslit Bay (was wrongly listed at $25,000).
//   - Training Rod: Luck is -70% (a penalty, not a bonus).
export const RODS_DATA: RodItem[] = [
  {
    name: 'Flimsy Rod',
    tier: 'B',
    price: 'Free (starter rod)',
    lureSpeed: '0%',
    luck: '0%',
    control: '0',
    resilience: '0%',
    maxKg: '10.4kg',
    location: 'Given to every new player',
    description: 'The rod every account starts with. No bonuses of any kind.',
    recommendedFor: 'Your very first casts before you can afford a shop rod.'
  },
  {
    name: 'Training Rod',
    tier: 'F',
    price: 'C$300',
    lureSpeed: '10%',
    luck: '-70%',
    control: '0.2',
    resilience: '20%',
    maxKg: '9kg',
    location: 'Moosewood rod shop',
    description: 'Cheap practice rod. Its Luck is a -70% PENALTY, so it is worse than the free Flimsy Rod for finding rare fish — but it has the highest Control (0.2) of any early rod.',
    recommendedFor: 'Learning the reeling minigame, not for hunting rares.'
  },
  {
    name: 'Plastic Rod',
    tier: 'B',
    price: 'C$750',
    lureSpeed: '20%',
    luck: '15%',
    control: '0',
    resilience: '10%',
    maxKg: '100kg',
    location: 'Moosewood rod shop',
    description: 'Entry-level upgrade with modest positive stats across the board.',
    recommendedFor: 'First C$ purchase if you want a small all-round bump.'
  },
  {
    name: 'Carbon Rod',
    tier: 'B',
    price: 'C$2,000',
    lureSpeed: '15%',
    luck: '25%',
    control: '0.05',
    resilience: '10%',
    maxKg: '600kg',
    location: 'Moosewood rod shop',
    description: 'Early mid-game rod: 25% Luck and a 600kg limit for only C$2,000.',
    recommendedFor: 'Players outgrowing the 10.4kg Flimsy limit on a tight budget.'
  },
  {
    name: 'Long Rod',
    tier: 'A',
    price: 'C$3,000',
    lureSpeed: '20%',
    luck: '80%',
    control: '-0.1',
    resilience: '20%',
    maxKg: '250kg',
    location: 'Moosewood rod shop',
    description: 'High Luck (80%) but negative Control (-0.1), making the minigame harder.',
    recommendedFor: 'Luck-focused players who are confident in the minigame.'
  },
  {
    name: 'Fast Rod',
    tier: 'B',
    price: 'C$4,000',
    lureSpeed: '70%',
    luck: '10%',
    control: '0.05',
    resilience: '-5%',
    maxKg: '175kg',
    location: 'Moosewood rod shop',
    description: '70% Lure Speed — one of the fastest early bite rates in the game — with small Resilience penalty.',
    recommendedFor: 'Volume fishing and fast leveling at Moosewood.'
  },
  {
    name: 'Lucky Rod',
    tier: 'S',
    price: 'C$4,500',
    lureSpeed: '20%',
    luck: '177%',
    control: '0.07',
    resilience: '7%',
    maxKg: '175kg',
    location: 'Moosewood rod shop',
    description: '177% Luck for just C$4,500 — the best Luck-per-C$ ratio of any verified rod.',
    recommendedFor: 'Early rarity hunting before you can reach Roslit Bay.'
  },
  {
    name: 'Steady Rod',
    tier: 'B',
    price: 'C$7,000',
    lureSpeed: '-60%',
    luck: '35%',
    control: '0.1',
    resilience: '45%',
    maxKg: '250,000kg',
    location: 'Roslit Bay',
    description: 'Extremely stable: 45% Resilience, 0.1 Control and a massive 250,000kg limit — but a harsh -60% Lure Speed penalty.',
    recommendedFor: 'Fighting heavy trophy fish that stress the line.'
  },
  {
    name: 'Fortune Rod',
    tier: 'S+',
    price: 'C$11,000',
    lureSpeed: '30%',
    luck: '200%',
    control: '0.05',
    resilience: '10%',
    maxKg: '3,000kg',
    location: 'Roslit Bay',
    description: '200% Luck with no negative stats at C$11,000. One of the strongest mid-game rods verified.',
    recommendedFor: 'Mid-game players chasing Legendary and Mythical species.'
  },
  {
    name: 'Rapid Rod',
    tier: 'A',
    price: 'C$12,000',
    lureSpeed: '89%',
    luck: '49%',
    control: '0',
    resilience: '9%',
    maxKg: '800kg',
    location: 'Roslit Bay',
    description: '89% Lure Speed — the fastest verified bite rate in the game.',
    recommendedFor: 'AFK grinding and maximum casts per hour.'
  },
  {
    name: 'Frog Rod',
    tier: 'S',
    price: 'C$12,000',
    lureSpeed: '60%',
    luck: '100%',
    control: '0.15',
    resilience: '15%',
    maxKg: '650kg',
    location: 'Mushgrove Swamp (requires 50% Bestiary completion)',
    description: 'Balanced high-end rod: 60% Lure, 100% Luck and a strong 0.15 Control. Locked behind 50% Bestiary completion.',
    recommendedFor: 'Experienced players who want speed and luck together.'
  },
  {
    name: 'Magnet Rod',
    tier: 'B',
    price: 'C$15,000',
    lureSpeed: '-10%',
    luck: '0%',
    control: '0.05',
    resilience: '0%',
    maxKg: '10,000kg',
    location: 'Terrapin Island',
    description: 'Specialist rod with 0% Luck and a 10,000kg limit. Its niche is pulling up items rather than rare fish.',
    recommendedFor: 'Treasure and crate hunting, not rarity fishing.'
  },
  {
    name: 'Nocturnal Rod',
    tier: 'S',
    price: 'C$15,000',
    lureSpeed: '50%',
    luck: '90%',
    control: '0.1',
    resilience: '15%',
    maxKg: '10,000kg',
    location: 'Vertigo',
    description: 'Strong all-rounder: 50% Lure Speed, 90% Luck and 10,000kg limit.',
    recommendedFor: 'Players advancing into the Vertigo area.'
  },
  {
    name: 'Arctic Rod',
    tier: 'A',
    price: 'C$25,000',
    lureSpeed: '25%',
    luck: '45%',
    control: '0.06',
    resilience: '15%',
    maxKg: '7,500kg',
    location: 'Northern Summit',
    description: 'Mid-tier Northern Expedition rod with solid 7,500kg capacity.',
    recommendedFor: 'Fishing the frozen Northern Expedition waters.'
  },
  {
    name: 'Coral Rod',
    tier: 'A',
    price: 'C$30,000',
    lureSpeed: '72%',
    luck: '74%',
    control: '0.02',
    resilience: '40%',
    maxKg: '10,000kg',
    location: 'Coral Bastion (requires 50% Bestiary completion)',
    description: 'Fast (72% Lure) and resilient (40%) with strong 74% Luck. Locked behind 50% Bestiary completion.',
    recommendedFor: 'Late mid-game players farming around Coral Bastion.'
  },
  {
    name: 'Trident Rod',
    tier: 'S',
    price: 'C$150,000',
    lureSpeed: '35%',
    luck: '150%',
    control: '0.05',
    resilience: '0%',
    maxKg: '6,000kg',
    location: 'Desolate Deep',
    description: 'Premium rod with 150% Luck and zero Resilience.',
    recommendedFor: 'Deep-sea players who can afford their first six-figure rod.'
  },
  {
    name: 'Destiny Rod',
    tier: 'S+',
    price: 'C$190,000',
    lureSpeed: '45%',
    luck: '250%',
    control: '0.2',
    resilience: '10%',
    maxKg: '177,777kg',
    location: 'NPC Caleia at The Arch (requires 350+ Bestiary fish discoveries); NOT a quest reward',
    description: '250% Luck and the best Control tier (0.2) of any purchasable rod. Correction to our old data: Lure Speed is 45%, not 70%. Requires 350+ Bestiary fish discoveries to buy from Caleia.',
    recommendedFor: 'Trophy hunters who have completed a large part of the Bestiary.'
  },
  {
    name: 'Rod Of The Depths',
    tier: 'S',
    price: 'C$750,000',
    lureSpeed: '75%',
    luck: '130%',
    control: '0.15',
    resilience: '10%',
    maxKg: '30,000kg',
    location: 'The Depths',
    description: 'Late-game rod with fast 75% Lure Speed, 130% Luck and a 30,000kg limit.',
    recommendedFor: 'Endgame fishing in The Depths and other deep zones.'
  },
  {
    name: "Merlin's Staff",
    tier: 'S+',
    price: 'C$800,000',
    lureSpeed: '80%',
    luck: '254%',
    control: '0.1',
    resilience: '50%',
    maxKg: 'Infinite',
    location: 'Merlin NPC, Sunstone Island',
    description: 'Highest verified Luck in the game (254%) with 50% Resilience and no weight limit.',
    recommendedFor: 'Endgame collectors chasing the rarest catches.'
  },
  {
    name: 'Magma Rod',
    tier: 'A',
    price: 'Free (Orc quest reward)',
    lureSpeed: '45%',
    luck: '55%',
    control: '0.15',
    resilience: '0%–50% (sources differ)',
    maxKg: '1,200kg',
    location: 'Orc NPC quest at Roslit Bay — catch one Pufferfish to complete; NOT a C$25,000 purchase',
    description: 'FREE quest rod. Catch a single Pufferfish for the Orc at Roslit Bay and it is yours. Can fish in lava pools and has a 35% chance to apply the Ember mutation (3x sale value). Note: Resilience is listed as 0% on the rod page and 50% on the rods table — sources disagree.',
    recommendedFor: 'Every player: a free 55% Luck rod with a built-in 3x value mutation.'
  },
];

// Other high-end rods that ARE verified (price + where to get them) but whose
// full five-stat lines we have not transcribed yet. Kept OUT of RODS_DATA so
// every array row stays a complete, verified stat line.
export const VERIFIED_EXTRA_RODS: { name: string; price: string; location: string }[] = [
  { name: 'Kings Rod', price: 'C$100,000', location: 'Keepers Altar (max weight: infinite)' },
  { name: 'Poseidon Rod', price: 'C$450,000', location: 'Atlantis' },
  { name: 'Zeus Rod', price: 'C$500,000', location: 'Atlantis' },
  { name: "Heaven's Rod", price: 'C$800,000', location: 'Glacial Grotto' },
  { name: 'Seraphic Rod', price: 'Level 1,000 level-up reward', location: 'Account progression reward' },
  { name: 'No-Life Rod', price: 'Level 500 level-up reward', location: 'Account progression reward' },
];

// 3. Locations — names and categories verified against fischipedia.org/wiki/Locations.
// We do NOT publish coordinates, level gates or gear requirements because we
// could not verify them; the old fabricated dataset has been deleted.
export const LOCATIONS_DATA: LocationItem[] = [
  // --- Major locations (verified list) ---
  { name: 'Moosewood', category: 'Major', note: 'Starter island where every new player spawns; hosts the main rod shop (Training, Plastic, Carbon, Long, Fast and Lucky Rods).', rodsSold: ['Training Rod', 'Plastic Rod', 'Carbon Rod', 'Long Rod', 'Fast Rod', 'Lucky Rod'], notableFish: ['Anchovy', 'Bream', 'Largemouth Bass', 'Red Snapper', 'Sockeye Salmon'] },
  { name: 'Ocean', category: 'Major', note: 'The open ocean surrounding all islands; a verified zone for many Common fish and several large Mythicals.', rodsSold: [], notableFish: ['Sardine', 'Haddock', 'Mackerel', 'Mullet', 'Porgy', 'Shrimp', 'Mussel', 'Lobster', 'Bull Shark', 'Colossal Squid', 'Great White Shark', 'Whale Shark', 'Oarfish'] },
  { name: 'Roslit Bay', category: 'Major', note: 'Home of the Orc NPC whose simple quest (catch one Pufferfish) rewards the FREE Magma Rod. Also sells the Steady, Fortune and Rapid Rods.', rodsSold: ['Steady Rod', 'Fortune Rod', 'Rapid Rod', 'Magma Rod (free quest reward)'], notableFish: ['Minnow', 'Chub', 'Axolotl'] },
  { name: 'Roslit Volcano', category: 'Major', note: 'Volcanic sub-area of Roslit Bay verified on the official locations list.', rodsSold: [], notableFish: [] },
  { name: 'Sunstone Island', category: 'Major', note: 'Where the Merlin NPC sells Merlin\'s Staff (C$800,000, 254% Luck).', rodsSold: ["Merlin's Staff"], notableFish: [] },
  { name: 'Terrapin Island', category: 'Major', note: 'Sells the Magnet Rod (C$15,000).', rodsSold: ['Magnet Rod'], notableFish: ['Gudgeon', 'Sea Turtle'] },
  { name: 'Snowcap Island', category: 'Major', note: 'Frozen biome verified on the official locations list.', rodsSold: [], notableFish: ['Bluegill', 'Pollock', 'Herring', 'Glacierfish'] },
  { name: 'Vertigo', category: 'Major', note: 'Sells the Nocturnal Rod (C$15,000).', rodsSold: ['Nocturnal Rod'], notableFish: ['Isonade'] },
  { name: 'The Deep', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Desolate Deep', category: 'Major', note: 'Where the Trident Rod (C$150,000) is obtained.', rodsSold: ['Trident Rod'], notableFish: ['Barbed Shark'] },
  { name: 'Statue of Sovereignty', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Mushgrove Swamp', category: 'Major', note: 'Where the Frog Rod (C$12,000) is sold, behind a 50% Bestiary completion requirement.', rodsSold: ['Frog Rod'], notableFish: ['Alligator'] },
  { name: 'Forsaken Shores', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Ancient Isle', category: 'Major', note: 'Home of the Mythical Helicoprion.', rodsSold: [], notableFish: ['Helicoprion'] },
  { name: 'Northern Expedition', category: 'Major', note: 'Where the Arctic Rod (C$25,000) is obtained at Northern Summit.', rodsSold: ['Arctic Rod'], notableFish: [] },
  { name: 'Boreal Pines', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Atlantis', category: 'Major', note: 'Home of the Poseidon Rod (C$450,000) and Zeus Rod (C$500,000).', rodsSold: ['Poseidon Rod', 'Zeus Rod'], notableFish: [] },
  { name: 'Castaway Cliffs', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Cursed Isle', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Grand Reef', category: 'Major', note: 'Home of the Legendary Coral Emperor.', rodsSold: [], notableFish: ['Coral Emperor'] },
  { name: 'Lost Jungle', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Drylands', category: 'Major', note: 'Home of the Legendary Ancient Coelacanth.', rodsSold: [], notableFish: ['Ancient Coelacanth'] },
  { name: 'Everturn Forest', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Scoria Reach', category: 'Major', note: 'Home of the Legendary Cindercoil Eel.', rodsSold: [], notableFish: ['Cindercoil Eel'] },
  { name: 'Tidefall', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Treasure Island', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Trade Plaza', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: "Mariana's Veil", category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Wrath of Olympus', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },
  { name: 'Aquarium', category: 'Major', note: 'Major location on the official list. Details not documented on our site yet.', rodsSold: [], notableFish: [] },

  // --- Sub-locations with verified associations ---
  { name: 'The Depths', category: 'Sub-Location', note: 'Deep sub-location where the Rod Of The Depths (C$750,000) is obtained.', rodsSold: ['Rod Of The Depths'], notableFish: ['Ancient Eel', 'Barreleye Fish', 'Sea Snake'] },
  { name: 'Coral Bastion', category: 'Sub-Location', note: 'Where the Coral Rod (C$30,000) is sold, behind a 50% Bestiary completion requirement.', rodsSold: ['Coral Rod'], notableFish: [] },
  { name: 'The Arch', category: 'Sub-Location', note: 'NPC Caleia sells the Destiny Rod (C$190,000) here — requires 350+ Bestiary fish discoveries.', rodsSold: ['Destiny Rod'], notableFish: [] },
  { name: 'Keepers Altar', category: 'Sub-Location', note: 'Home of the Kings Rod (C$100,000, infinite max weight).', rodsSold: ['Kings Rod'], notableFish: [] },
  { name: 'Glacial Grotto', category: 'Sub-Location', note: 'home of Heaven\'s Rod (C$800,000).', rodsSold: ["Heaven's Rod"], notableFish: [] },
];

// Limited-time event locations, verified as a list on the official wiki.
export const LIMITED_EVENT_LOCATIONS: string[] = [
  'Jurassic Island', 'Winter Village', 'Fischfest 1', 'Fischfest 2', 'Sweetheart Shores',
  'Easter Cove', 'Shamrock Seas', 'Cults Curse', "Jungle's Echo", 'Maple Meadow',
  'Northstar Village', 'Streamer Hideout', 'Crypt of the Green One', "Crook's Hallow",
  'Archaeological Site', "Archaeologist's Boat",
];

// 4. Fish values — 37 species verified against the official fish tables
// (fischipedia.org/wiki/Fish, /wiki/Legendary, /wiki/Mythical), September 2026.
// The old ~37-entry fish list was ~80% fabricated and has been deleted wholesale.
// Weather/season preferences are NOT published here because we could not verify them.
export const FISH_VALUES: FishItem[] = [
  // --- Common (verified C$/kg; single-catch average not documented by the source) ---
  { name: 'Anchovy', rarity: 'Common', location: 'Moosewood', pricePerKg: '166.67', avgValue: 'Not documented' },
  { name: 'Sardine', rarity: 'Common', location: 'Ocean', pricePerKg: '170', avgValue: 'Not documented' },
  { name: 'Haddock', rarity: 'Common', location: 'Ocean', pricePerKg: '132', avgValue: 'Not documented' },
  { name: 'Mackerel', rarity: 'Common', location: 'Ocean', pricePerKg: '13', avgValue: 'Not documented' },
  { name: 'Mullet', rarity: 'Common', location: 'Ocean', pricePerKg: '27', avgValue: 'Not documented' },
  { name: 'Porgy', rarity: 'Common', location: 'Ocean', pricePerKg: '18', avgValue: 'Not documented' },
  { name: 'Shrimp', rarity: 'Common', location: 'Ocean', pricePerKg: '250', avgValue: 'Not documented' },
  { name: 'Mussel', rarity: 'Common', location: 'Ocean', pricePerKg: '250', avgValue: 'Not documented' },
  { name: 'Lobster', rarity: 'Common', location: 'Ocean', pricePerKg: '17.86', avgValue: 'Not documented' },
  { name: 'Minnow', rarity: 'Common', location: 'Roslit Bay', pricePerKg: '85', avgValue: 'Not documented' },
  { name: 'Chub', rarity: 'Common', location: 'Roslit Bay', pricePerKg: '17.33', avgValue: 'Not documented' },
  { name: 'Bluegill', rarity: 'Common', location: 'Snowcap Island', pricePerKg: '85', avgValue: 'Not documented' },
  { name: 'Pollock', rarity: 'Common', location: 'Snowcap Island', pricePerKg: '113', avgValue: 'Not documented' },
  { name: 'Herring', rarity: 'Common', location: 'Snowcap Island', pricePerKg: '47.27', avgValue: 'Not documented' },
  { name: 'Gudgeon', rarity: 'Common', location: 'Terrapin Island', pricePerKg: '166.67', avgValue: 'Not documented' },
  { name: 'Bream', rarity: 'Common', location: 'Moosewood', pricePerKg: '19.26', avgValue: 'Not documented' },
  { name: 'Largemouth Bass', rarity: 'Common', location: 'Moosewood', pricePerKg: '11.56', avgValue: 'Not documented' },
  { name: 'Red Snapper', rarity: 'Common', location: 'Moosewood', pricePerKg: '7.57', avgValue: 'Not documented' },
  { name: 'Sockeye Salmon', rarity: 'Common', location: 'Moosewood', pricePerKg: '7.29', avgValue: 'Not documented' },

  // --- Legendary (verified C$/kg and single-catch average) ---
  { name: 'Axolotl', rarity: 'Legendary', location: 'Roslit Bay', pricePerKg: '108.87', avgValue: '1,088.7' },
  { name: 'Alligator', rarity: 'Legendary', location: 'Mushgrove Swamp', pricePerKg: '6.33', avgValue: '1,423.5' },
  { name: 'Bull Shark', rarity: 'Legendary', location: 'Ocean', pricePerKg: '13.85', avgValue: '1,523.1' },
  { name: 'Ancient Eel', rarity: 'Legendary', location: 'The Depths', pricePerKg: '9.78', avgValue: '1,467' },
  { name: 'Ancient Coelacanth', rarity: 'Legendary', location: 'Drylands', pricePerKg: '30', avgValue: '2,400' },
  { name: 'Cindercoil Eel', rarity: 'Legendary', location: 'Scoria Reach', pricePerKg: '129.17', avgValue: '12,712.5' },
  { name: 'Coral Emperor', rarity: 'Legendary', location: 'Grand Reef', pricePerKg: '67.9', avgValue: '1,527.8' },
  { name: 'Barbed Shark', rarity: 'Legendary', location: 'Desolate Deep', pricePerKg: '2.18', avgValue: '1,801.1' },

  // --- Mythical (verified C$/kg and single-catch average) ---
  { name: 'Colossal Squid', rarity: 'Mythical', location: 'Ocean', pricePerKg: '7.13', avgValue: '6,771.9' },
  { name: 'Great White Shark', rarity: 'Mythical', location: 'Ocean', pricePerKg: '11.06', avgValue: '10,507' },
  { name: 'Whale Shark', rarity: 'Mythical', location: 'Ocean', pricePerKg: '0.82', avgValue: '10,227.5' },
  { name: 'Oarfish', rarity: 'Mythical', location: 'Ocean', pricePerKg: '12.92', avgValue: '2,583.2' },
  { name: 'Barreleye Fish', rarity: 'Mythical', location: 'The Depths', pricePerKg: '446.67', avgValue: '466.7' },
  { name: 'Glacierfish', rarity: 'Mythical', location: 'Snowcap Island', pricePerKg: '2.68', avgValue: '2,634.2' },
  { name: 'Sea Turtle', rarity: 'Mythical', location: 'Terrapin Island', pricePerKg: '20.85', avgValue: '2,293.9' },
  { name: 'Helicoprion', rarity: 'Mythical', location: 'Ancient Isle', pricePerKg: '8.24', avgValue: '2,760.6' },
  { name: 'Isonade', rarity: 'Mythical', location: 'Vertigo', pricePerKg: '2.62', avgValue: '2,487.5' },
  { name: 'Sea Snake', rarity: 'Mythical', location: 'The Depths', pricePerKg: '61.25', avgValue: '3,368.8' },
];

// Honest, citable source line reused across pages.
export const DATA_SOURCE_NOTE =
  'Rod, fish and location data verified against fischipedia.org (the official Fisch Wiki), September 2026. Entries we could not verify were removed rather than guessed.';

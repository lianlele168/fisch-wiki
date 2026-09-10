export interface CodeItem {
  code: string;
  reward: string;
  status: 'Active' | 'Expired';
  addedDate?: string;
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
export const ACTIVE_CODES: CodeItem[] = [
  { code: 'SCARLET', reward: 'Scarlet Weapon Skin for Nate\'s Blade', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'TemporarySubmarine', reward: 'Submarine Parts Crate (Back Fins, Metal Panels, Side Fins, Submarine Top & Windows)', status: 'Active', addedDate: 'August 27, 2026' },
  { code: 'CARBON', reward: 'Free Carbon Bobber Equipment', status: 'Active', addedDate: 'August 27, 2026' },
];

export const EXPIRED_CODES: CodeItem[] = [
  { code: 'CollectMyPufferfish', reward: '1,000 Coins, Giant Jetski, 5x Icy Dots & Random Totem', status: 'Expired' },
  { code: 'ShootingStars', reward: 'Free Bobber & Star Crate', status: 'Expired' },
  { code: 'TEST', reward: '$100 Cash', status: 'Expired' },
  { code: 'RELEASE', reward: 'Starter Bait Box', status: 'Expired' },
  { code: 'BETA', reward: 'Special Title', status: 'Expired' }
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

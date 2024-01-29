const pokemonData = [
  {
    pokedexId: 257,
    generation: 3,
    category: 'Pokémon Ardent',
    name: {
      fr: 'Braségali',
      en: 'Blaziken',
      jp: 'バシャーモ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/257/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/257/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Feu',
        image:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/feu.png',
      },
      {
        name: 'Combat',
        image:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/combat.png',
      },
    ],
    talents: [
      { name: 'Brasier', tc: false },
      { name: 'Turbo', tc: true },
    ],
    stats: { hp: 80, atk: 120, def: 70, spe_atk: 110, spe_def: 70, vit: 80 },
    resistances: [
      { name: 'Normal', multiplier: 1 },
      { name: 'Plante', multiplier: 0.5 },
      { name: 'Feu', multiplier: 0.5 },
      { name: 'Eau', multiplier: 2 },
      { name: 'Électrik', multiplier: 1 },
      { name: 'Glace', multiplier: 0.5 },
      { name: 'Combat', multiplier: 1 },
      { name: 'Poison', multiplier: 1 },
      { name: 'Sol', multiplier: 2 },
      { name: 'Vol', multiplier: 2 },
      { name: 'Psy', multiplier: 2 },
      { name: 'Insecte', multiplier: 0.25 },
      { name: 'Roche', multiplier: 1 },
      { name: 'Spectre', multiplier: 1 },
      { name: 'Dragon', multiplier: 1 },
      { name: 'Ténèbres', multiplier: 0.5 },
      { name: 'Acier', multiplier: 0.5 },
      { name: 'Fée', multiplier: 1 },
    ],
    evolution: {
      pre: [
        { pokedexId: 255, name: 'Poussifeu', condition: 'Niveau 16' },
        { pokedexId: 256, name: 'Galifeu', condition: 'Niveau 36' },
      ],
      next: null,
      mega: [
        {
          orbe: 'Braségali',
          sprites: {
            regular:
              'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/257/mega-regular.png',
            shiny:
              'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/257/mega-shiny.png',
          },
        },
      ],
    },
    height: '1,9 m',
    weight: '52,0 kg',
    egg_groups: ['Terrestre'],
    sexe: { male: 87.5, female: 12.5 },
    catch_rate: 45,
    level_100: 1059862,
    forme: null,
  },

  {
    pokedexId: 1,
    generation: 1,
    category: 'Pok\u00e9mon Graine',
    name: {
      fr: 'Bulbizarre',
      en: 'Bulbasaur',
      jp: '\u30d5\u30b7\u30ae\u30c0\u30cd',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/1/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/1/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Plante',
        image:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/plante.png',
      },
      {
        name: 'Poison',
        image:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/poison.png',
      },
    ],
    talents: [
      { name: 'Engrais', tc: false },
      { name: 'Chlorophylle', tc: true },
    ],
    stats: { hp: 45, atk: 49, def: 49, spe_atk: 65, spe_def: 65, vit: 45 },
    resistances: [
      { name: 'Normal', multiplier: 1 },
      { name: 'Plante', multiplier: 0.25 },
      { name: 'Feu', multiplier: 2 },
      { name: 'Eau', multiplier: 0.5 },
      { name: '\u00c9lectrik', multiplier: 0.5 },
      { name: 'Glace', multiplier: 2 },
      { name: 'Combat', multiplier: 0.5 },
      { name: 'Poison', multiplier: 1 },
      { name: 'Sol', multiplier: 1 },
      { name: 'Vol', multiplier: 2 },
      { name: 'Psy', multiplier: 2 },
      { name: 'Insecte', multiplier: 1 },
      { name: 'Roche', multiplier: 1 },
      { name: 'Spectre', multiplier: 1 },
      { name: 'Dragon', multiplier: 1 },
      { name: 'T\u00e9n\u00e8bres', multiplier: 1 },
      { name: 'Acier', multiplier: 1 },
      { name: 'F\u00e9e', multiplier: 0.5 },
    ],
    evolution: {
      pre: null,
      next: [
        { pokedexId: 2, name: 'Herbizarre', condition: 'Niveau 16' },
        { pokedexId: 3, name: 'Florizarre', condition: 'Niveau 32' },
      ],
      mega: null,
    },
    height: '0,7 m',
    weight: '6,9 kg',
    egg_groups: ['Monstrueux', 'V\u00e9g\u00e9tal'],
    sexe: { male: 87.5, female: 12.5 },
    catch_rate: 45,
    level_100: 1059862,
    forme: null,
  },

  {
    pokedexId: 25,
    generation: 1,
    category: 'Pok\u00e9mon Souris',
    name: {
      fr: 'Pikachu',
      en: 'Pikachu',
      jp: '\u30d4\u30ab\u30c1\u30e5\u30a6',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/25/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/25/shiny.png',
      gmax: {
        regular:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/25/gmax-regular.png',
        shiny:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/25/gmax-shiny.png',
      },
    },
    types: [
      {
        name: '\u00c9lectrik',
        image:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/electrik.png',
      },
    ],
    talents: [
      { name: 'Statik', tc: false },
      { name: 'Paratonnerre', tc: true },
    ],
    stats: { hp: 45, atk: 80, def: 50, spe_atk: 75, spe_def: 60, vit: 120 },
    resistances: [
      { name: 'Normal', multiplier: 1 },
      { name: 'Plante', multiplier: 1 },
      { name: 'Feu', multiplier: 1 },
      { name: 'Eau', multiplier: 1 },
      { name: '\u00c9lectrik', multiplier: 0.5 },
      { name: 'Glace', multiplier: 1 },
      { name: 'Combat', multiplier: 1 },
      { name: 'Poison', multiplier: 1 },
      { name: 'Sol', multiplier: 2 },
      { name: 'Vol', multiplier: 0.5 },
      { name: 'Psy', multiplier: 1 },
      { name: 'Insecte', multiplier: 1 },
      { name: 'Roche', multiplier: 1 },
      { name: 'Spectre', multiplier: 1 },
      { name: 'Dragon', multiplier: 1 },
      { name: 'T\u00e9n\u00e8bres', multiplier: 1 },
      { name: 'Acier', multiplier: 0.5 },
      { name: 'F\u00e9e', multiplier: 1 },
    ],
    evolution: {
      pre: [{ pokedexId: 172, name: 'Pichu', condition: 'Bonheur' }],
      next: [{ pokedexId: 26, name: 'Raichu', condition: 'Pierre Foudre' }],
      mega: null,
    },
    height: '0,4 m',
    weight: '6,0 kg',
    egg_groups: ['Terrestre', 'F\u00e9erique'],
    sexe: { male: 50.0, female: 50.0 },
    catch_rate: 190,
    level_100: 1000000,
    forme: null,
  },
  {
    pokedexId: 246,
    generation: 2,
    category: 'Pokémon Peaupierre',
    name: {
      fr: 'Embrylex',
      en: 'Larvitar',
      jp: 'ヨーギラス',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/246/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/246/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Roche',
        image:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/roche.png',
      },
      {
        name: 'Sol',
        image:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/sol.png',
      },
    ],
    talents: [
      {
        name: 'Cran',
        tc: false,
      },
      {
        name: 'Voile Sable',
        tc: true,
      },
    ],
    stats: {
      hp: 50,
      atk: 64,
      def: 50,
      spe_atk: 45,
      spe_def: 50,
      vit: 41,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 0.5,
      },
      {
        name: 'Plante',
        multiplier: 4,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 4,
      },
      {
        name: 'Électrik',
        multiplier: 0,
      },
      {
        name: 'Glace',
        multiplier: 2,
      },
      {
        name: 'Combat',
        multiplier: 2,
      },
      {
        name: 'Poison',
        multiplier: 0.25,
      },
      {
        name: 'Sol',
        multiplier: 2,
      },
      {
        name: 'Vol',
        multiplier: 0.5,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 0.5,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 2,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedexId: 247,
          name: 'Ymphect',
          condition: 'Niveau 30',
        },
        {
          pokedexId: 248,
          name: 'Tyranocif',
          condition: 'Niveau 55',
        },
      ],
      mega: null,
    },
    height: '0,6 m',
    weight: '72,0 kg',
    egg_groups: ['Monstrueux'],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 45,
    level_100: 1250000,
    forme: null,
  },
  {
    pokedexId: 578,
    generation: 5,
    category: 'Pokémon Divisé',
    name: {
      fr: 'Méios',
      en: 'Duosion',
      jp: 'ダブラン',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/578/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/578/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Psy',
        image:
          'https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/types/psy.png',
      },
    ],
    talents: [
      {
        name: 'Envelocape',
        tc: false,
      },
      {
        name: 'Garde Magik',
        tc: false,
      },
      {
        name: 'Régé-Force',
        tc: true,
      },
    ],
    stats: {
      hp: 65,
      atk: 40,
      def: 50,
      spe_atk: 125,
      spe_def: 60,
      vit: 30,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 1,
      },
      {
        name: 'Feu',
        multiplier: 1,
      },
      {
        name: 'Eau',
        multiplier: 1,
      },
      {
        name: 'Électrik',
        multiplier: 1,
      },
      {
        name: 'Glace',
        multiplier: 1,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 0.5,
      },
      {
        name: 'Insecte',
        multiplier: 2,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 2,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 2,
      },
      {
        name: 'Acier',
        multiplier: 1,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedexId: 577,
          name: 'Nucléos',
          condition: 'Niveau 32',
        },
      ],
      next: [
        {
          pokedexId: 579,
          name: 'Symbios',
          condition: 'Niveau 41',
        },
      ],
      mega: null,
    },
    height: '0,6 m',
    weight: '8,0 kg',
    egg_groups: ['Amorphe'],
    sexe: {
      male: 50,
      female: 50,
    },
    catch_rate: 100,
    level_100: 1059862,
    forme: null,
  },
];

export default pokemonData;

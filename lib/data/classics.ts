import type { Book } from '../books'

export const classicBooks: Book[] = [
  {
    slug: 'persuasion',
    title: 'Persuasion',
    author: 'Jane Austen',
    published: 1817,
    setting: 'Somerset, Lyme Regis and Bath, England \u2014 1814\u20131815',
    subgenre: 'Classic',
    accent: 'sky',
    tagline: 'A second chance at love, eight years after a broken engagement.',
    overview:
      "Austen\u2019s final completed novel follows Anne Elliot, who broke off her engagement to naval officer Frederick Wentworth at nineteen. Eight years later, he returns as a wealthy captain.",
    plot: [
      'At nineteen, Anne was persuaded by her family friend Lady Russell to reject Wentworth because he had no fortune. Now twenty-seven, she still loves him.',
      "Debts force Anne\u2019s vain father, Sir Walter Elliot, to rent their home to Admiral Croft, whose wife is Wentworth\u2019s sister. Wentworth seems to court Louisa Musgrove.",
      'On a trip to Lyme, Louisa falls from the Cobb and is injured. Anne\u2019s calm in the crisis impresses Wentworth. Louisa later becomes engaged to Captain Benwick.',
      "In Bath, Anne\u2019s cousin William Elliot courts her, but she learns he is untrustworthy. Wentworth overhears Anne speak about women\u2019s constancy and writes a letter declaring his love. They become engaged.",
    ],
    characters: [
      { name: 'Anne Elliot', role: 'Heroine', description: 'A thoughtful, overlooked daughter of a baronet.' },
      { name: 'Captain Frederick Wentworth', role: 'Hero', description: 'A self-made naval officer.' },
      { name: 'Sir Walter Elliot', role: 'Family', description: "Anne\u2019s vain, extravagant father." },
      { name: 'Lady Russell', role: 'Supporting', description: 'Anne\u2019s godmother who persuaded her to refuse Wentworth.' },
      { name: 'Louisa Musgrove', role: 'Supporting', description: 'A lively young woman.' },
      { name: 'William Elliot', role: 'Antagonist', description: "Anne\u2019s cousin and the heir to her father\u2019s estate." },
    ],
    relationships: [
      { pair: 'Anne & Wentworth', type: 'Second chance', description: 'A love that survives regret and time.' },
    ],
    themes: ['Second chances', 'Persuasion and regret', 'Constancy', 'Social change'],
    adaptations: [
      '1995 film starring Amanda Root and Ciar\u00E1n Hinds.',
      '2007 ITV film starring Sally Hawkins and Rupert Penry-Jones.',
      '2022 Netflix film starring Dakota Johnson and Cosmo Jarvis.',
    ],
    facts: ['Published posthumously in December 1817 alongside Northanger Abbey.'],
  },
  {
    slug: 'wuthering-heights',
    title: 'Wuthering Heights',
    author: 'Emily Bront\u00EB',
    published: 1847,
    setting: 'The Yorkshire moors, England',
    subgenre: 'Gothic',
    accent: 'violet',
    tagline: 'A love so consuming it destroys two families.',
    overview:
      "Emily Bront\u00EB\u2019s only novel tells of the passionate bond between Catherine Earnshaw and Heathcliff, an orphan taken in by her family, and the revenge that follows across two generations.",
    plot: [
      "The tenant Lockwood visits his landlord Heathcliff at Wuthering Heights. The housekeeper Nelly Dean tells him the story.",
      "Mr. Earnshaw brings home Heathcliff, an orphan. Catherine and Heathcliff become inseparable, but her brother Hindley degrades him. Catherine chooses to marry Edgar Linton, and Heathcliff disappears.",
      "Heathcliff returns wealthy. He marries Edgar\u2019s sister Isabella out of revenge. Catherine dies after giving birth to a daughter, Cathy.",
      "Heathcliff gains control of both houses. He forces young Cathy to marry his sickly son, Linton, who soon dies. Haunted by Catherine, Heathcliff dies, and Cathy and Hareton plan to marry.",
    ],
    characters: [
      { name: 'Catherine Earnshaw', role: 'Heroine', description: 'Wild, passionate and torn between love and status.' },
      { name: 'Heathcliff', role: 'Protagonist', description: 'An orphan whose love becomes vengeance.' },
      { name: 'Edgar Linton', role: 'Supporting', description: "Catherine\u2019s gentle husband." },
      { name: 'Isabella Linton', role: 'Supporting', description: "Edgar\u2019s sister, who marries Heathcliff." },
      { name: 'Hindley Earnshaw', role: 'Antagonist', description: "Catherine\u2019s brother, who abuses Heathcliff." },
      { name: 'Cathy Linton', role: 'Family', description: "Catherine and Edgar\u2019s daughter." },
      { name: 'Hareton Earnshaw', role: 'Family', description: "Hindley\u2019s son." },
      { name: 'Nelly Dean', role: 'Supporting', description: 'The housekeeper and narrator.' },
    ],
    relationships: [
      { pair: 'Catherine & Heathcliff', type: 'Obsessive love', description: '\u201CWhatever our souls are made of, his and mine are the same.\u201D' },
      { pair: 'Cathy & Hareton', type: 'Redemption', description: 'The second generation finds a gentler love.' },
    ],
    themes: ['Obsession', 'Revenge', 'Class', 'Nature', 'The supernatural'],
    adaptations: [
      '1939 film starring Laurence Olivier and Merle Oberon.',
      '2026 film directed by Emerald Fennell, starring Margot Robbie and Jacob Elordi.',
    ],
    facts: ['First published under the pseudonym Ellis Bell.'],
  },
  {
    slug: 'the-song-of-achilles',
    title: 'The Song of Achilles',
    author: 'Madeline Miller',
    published: 2011,
    setting: 'Ancient Greece and the plains of Troy',
    subgenre: 'Historical / Mythological',
    accent: 'cyan',
    tagline: 'The Trojan War retold as a love story.',
    overview:
      'Madeline Miller retells the Iliad through Patroclus, an exiled prince who becomes the companion and lover of Achilles.',
    plot: [
      'Patroclus is exiled to Phthia after accidentally killing a boy. There he befriends Prince Achilles, son of the sea nymph Thetis, who disapproves.',
      'The boys train with the centaur Chiron and fall in love. When Helen is taken to Troy, Achilles joins the war, as prophecy says he will die there.',
      'After a quarrel with Agamemnon over Briseis, Achilles refuses to fight. Patroclus wears his armour and is killed by Hector.',
      'Achilles kills Hector and is killed by Paris. Thetis carves Patroclus\u2019s name on the tomb so their spirits are united.',
    ],
    characters: [
      { name: 'Patroclus', role: 'Protagonist', description: 'A gentle exiled prince and narrator.' },
      { name: 'Achilles', role: 'Protagonist', description: 'A half-divine prince destined for glory.' },
      { name: 'Thetis', role: 'Family', description: "Achilles\u2019 mother." },
      { name: 'Chiron', role: 'Supporting', description: 'The wise centaur.' },
      { name: 'Briseis', role: 'Supporting', description: 'A captive woman who befriends Patroclus.' },
      { name: 'Odysseus', role: 'Supporting', description: 'The cunning king of Ithaca.' },
    ],
    relationships: [
      { pair: 'Patroclus & Achilles', type: 'Friends to lovers', description: 'A devoted love set against fate.' },
    ],
    themes: ['Fate', 'Glory and mortality', 'Devotion', 'Grief'],
    facts: ['Won the 2012 Orange Prize for Fiction.'],
  },
]

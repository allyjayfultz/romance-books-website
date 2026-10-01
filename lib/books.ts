import { webNovelBooks } from './data/web-novels'
import { fantasyBooks } from './data/fantasy'
import { contemporaryBooks } from './data/contemporary'
import { classicBooks } from './data/classics'

export type Accent =
  | 'rose'
  | 'amber'
  | 'sky'
  | 'violet'
  | 'emerald'
  | 'orange'
  | 'fuchsia'
  | 'teal'

export type Character = {
  name: string
  role: 'Heroine' | 'Hero' | 'Protagonist' | 'Supporting' | 'Antagonist' | 'Family'
  description: string
}

export type SeriesEntry = {
  order: number
  title: string
  year: number
  focus?: string
}

export type Book = {
  slug: string
  title: string
  author: string
  published: number
  series?: string
  setting: string
  subgenre: string
  accent: Accent
  tagline: string
  overview: string
  plot: string[]
  characters: Character[]
  seriesEntries?: SeriesEntry[]
  themes: string[]
  facts: string[]
  format?: string
  originalLanguage?: string
  relationships?: Relationship[]
  adaptations?: string[]
}

export type Relationship = {
  pair: string
  type: string
  description: string
}

const coreBooks: Book[] = [
  {
    slug: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    published: 1813,
    setting: 'Hertfordshire, Kent and Derbyshire, England — early 19th century',
    subgenre: 'Classic',
    accent: 'rose',
    tagline: 'The enemies-to-lovers novel that started it all.',
    overview:
      'Pride and Prejudice follows Elizabeth Bennet, the sharp-witted second of five daughters in a family whose estate is entailed away to a male cousin. Her clashes with the proud, wealthy Fitzwilliam Darcy form the heart of a novel about first impressions, class, reputation and marriage in Regency England.',
    plot: [
      'The wealthy, good-natured Charles Bingley rents Netherfield Park near the Bennet family home of Longbourn. He quickly takes to the eldest Bennet daughter, Jane, while his friend Mr. Darcy offends Elizabeth at a local assembly by declaring her only "tolerable."',
      'Elizabeth is charmed by the militia officer George Wickham, who claims Darcy cheated him out of an inheritance. Meanwhile, Mrs. Bennet pushes Elizabeth to accept a proposal from the pompous clergyman Mr. Collins, heir to Longbourn. Elizabeth refuses, and Collins instead marries her friend Charlotte Lucas. Bingley abruptly leaves for London, breaking Jane\u2019s heart.',
      'Visiting Charlotte in Kent, Elizabeth meets Collins\u2019s patroness, Lady Catherine de Bourgh, and encounters Darcy again. He unexpectedly proposes, but in a way that insults her family. Elizabeth rejects him, accusing him of separating Jane and Bingley and of mistreating Wickham. Darcy answers with a letter revealing that Wickham squandered his inheritance and attempted to elope with Darcy\u2019s fifteen-year-old sister, Georgiana, for her fortune.',
      'Months later, touring Derbyshire with her aunt and uncle, the Gardiners, Elizabeth visits Darcy\u2019s estate, Pemberley, and finds him greatly changed in manner. The visit is cut short by news that her youngest sister, Lydia, has run off with Wickham. Darcy secretly tracks the couple down and pays Wickham to marry Lydia, saving the family\u2019s reputation.',
      'Bingley returns and becomes engaged to Jane. Lady Catherine confronts Elizabeth over rumours of an engagement to Darcy, but Elizabeth refuses to promise she will never accept him. Learning of this, Darcy proposes again, and Elizabeth — now aware of everything he has done — accepts.',
    ],
    characters: [
      {
        name: 'Elizabeth Bennet',
        role: 'Heroine',
        description:
          'The witty, independent second Bennet daughter. Her quick judgments of Darcy and Wickham are the "prejudice" of the title.',
      },
      {
        name: 'Fitzwilliam Darcy',
        role: 'Hero',
        description:
          'Wealthy master of Pemberley in Derbyshire. Reserved and proud, he learns humility through Elizabeth\u2019s rejection.',
      },
      {
        name: 'Jane Bennet',
        role: 'Family',
        description: 'The eldest and gentlest Bennet sister, who falls in love with Charles Bingley.',
      },
      {
        name: 'Charles Bingley',
        role: 'Supporting',
        description: 'Darcy\u2019s amiable friend who rents Netherfield Park and courts Jane.',
      },
      {
        name: 'George Wickham',
        role: 'Antagonist',
        description:
          'A charming militia officer and son of the late Pemberley steward. He deceives Elizabeth and elopes with Lydia.',
      },
      {
        name: 'Mr. & Mrs. Bennet',
        role: 'Family',
        description:
          'The sardonic Mr. Bennet and his anxious, matchmaking wife, who is determined to see her daughters married.',
      },
      {
        name: 'Lydia Bennet',
        role: 'Family',
        description: 'The reckless youngest Bennet sister, whose elopement threatens the family\u2019s reputation.',
      },
      {
        name: 'Mr. Collins',
        role: 'Supporting',
        description: 'A self-important clergyman and heir to Longbourn who marries Charlotte Lucas.',
      },
      {
        name: 'Lady Catherine de Bourgh',
        role: 'Antagonist',
        description: 'Darcy\u2019s domineering aunt, who intends him to marry her daughter, Anne.',
      },
    ],
    themes: ['First impressions', 'Class and reputation', 'Marriage and money', 'Self-knowledge'],
    facts: [
      'Austen\u2019s working title was "First Impressions."',
      'It was published anonymously, credited to "the Author of Sense and Sensibility."',
    ],
  },
  {
    slug: 'jane-eyre',
    title: 'Jane Eyre',
    author: 'Charlotte Bront\u00eb',
    published: 1847,
    setting: 'Northern England — early 19th century',
    subgenre: 'Gothic',
    accent: 'violet',
    tagline: 'An orphaned governess, a brooding master and a secret in the attic.',
    overview:
      'Jane Eyre is a coming-of-age gothic romance told in the first person by Jane, an orphan who grows into a principled, self-respecting governess. Her love for Edward Rochester is tested by a devastating secret and by her refusal to sacrifice her integrity.',
    plot: [
      'Orphaned Jane is raised unkindly by her aunt, Mrs. Reed, at Gateshead Hall, then sent to Lowood School, a harsh charity institution run by Mr. Brocklehurst. There she befriends Helen Burns, who dies of consumption. Jane eventually becomes a teacher at the school.',
      'Seeking a new life, Jane takes a post as governess to Ad\u00e8le Varens, the young French ward of Edward Rochester, at Thornfield Hall. Jane and the moody Rochester form a deep bond, though strange events — eerie laughter and a mysterious fire in Rochester\u2019s room — trouble the house.',
      'Rochester proposes, but their wedding is halted when it is revealed that he is already married. His wife, Bertha Mason, whose mental illness has led him to confine her in the attic of Thornfield, is the source of the house\u2019s disturbances. Refusing to become his mistress, Jane flees.',
      'Destitute, Jane is taken in by the clergyman St. John Rivers and his sisters, Diana and Mary, who turn out to be her cousins. She inherits a fortune from her uncle, John Eyre, and shares it with them. St. John asks her to marry him and join him as a missionary in India, but she declines, knowing he does not love her.',
      'Hearing Rochester\u2019s voice calling to her, Jane returns to Thornfield and finds it burned to ruins. Bertha set the fire and died in it; Rochester was blinded and lost a hand trying to save her. Jane finds him at Ferndean Manor and they marry. He later regains partial sight in one eye.',
    ],
    characters: [
      {
        name: 'Jane Eyre',
        role: 'Heroine',
        description: 'The orphaned narrator: plain, passionate and fiercely principled.',
      },
      {
        name: 'Edward Fairfax Rochester',
        role: 'Hero',
        description: 'The brooding, sardonic master of Thornfield Hall, who hides a secret marriage.',
      },
      {
        name: 'Bertha Mason',
        role: 'Supporting',
        description: 'Rochester\u2019s first wife, from Jamaica, who is confined in Thornfield\u2019s attic.',
      },
      {
        name: 'St. John Rivers',
        role: 'Supporting',
        description: 'A devout, ambitious clergyman and Jane\u2019s cousin, who proposes a loveless missionary marriage.',
      },
      {
        name: 'Ad\u00e8le Varens',
        role: 'Supporting',
        description: 'Rochester\u2019s young French ward and Jane\u2019s pupil.',
      },
      {
        name: 'Mrs. Fairfax',
        role: 'Supporting',
        description: 'The kindly housekeeper of Thornfield Hall.',
      },
      {
        name: 'Helen Burns',
        role: 'Supporting',
        description: 'Jane\u2019s patient, devout friend at Lowood School.',
      },
      {
        name: 'Mrs. Reed',
        role: 'Antagonist',
        description: 'Jane\u2019s cold aunt by marriage, who mistreats her at Gateshead.',
      },
    ],
    themes: ['Independence and self-respect', 'Love versus morality', 'Social class', 'Religion'],
    facts: [
      'Originally published under the pen name "Currer Bell."',
      'Chapter 38 opens with one of fiction\u2019s most famous lines: "Reader, I married him."',
    ],
  },
  {
    slug: 'outlander',
    title: 'Outlander',
    author: 'Diana Gabaldon',
    published: 1991,
    series: 'Outlander',
    setting: 'Scottish Highlands — 1945 and 1743',
    subgenre: 'Historical / Time Travel',
    accent: 'emerald',
    tagline: 'A WWII nurse falls through time — and into the arms of a Highlander.',
    overview:
      'Outlander is the first novel in Diana Gabaldon\u2019s sweeping series blending historical fiction, romance and time travel. Claire Randall, a former British Army combat nurse, is transported from 1945 to 1743 Scotland, where she must navigate clan politics and the growing Jacobite unrest.',
    plot: [
      'After the Second World War, Claire Randall and her husband, historian Frank Randall, take a second honeymoon in Inverness. Touching a standing stone at the circle of Craigh na Dun, Claire is hurled back to 1743.',
      'She is quickly menaced by Captain Jonathan "Black Jack" Randall, Frank\u2019s sadistic ancestor, and then taken in by men of Clan MacKenzie, including a wounded young Highlander, Jamie Fraser. Brought to Castle Leoch, Claire\u2019s healing skills keep her useful to the laird, Colum MacKenzie, though she is suspected of being an English spy.',
      'To keep her out of Black Jack Randall\u2019s custody, Claire is made to marry Jamie. Their marriage of convenience becomes a passionate love. Claire is later arrested alongside her friend Geillis Duncan and tried for witchcraft; Jamie rescues her. Given the chance to return to her own time at the stones, Claire chooses to stay with Jamie.',
      'They travel to Jamie\u2019s family estate, Lallybroch, but Jamie is captured and imprisoned at Wentworth Prison, where Black Jack Randall tortures and assaults him. Claire, Murtagh and the MacKenzie men rescue him. Jamie is taken to an abbey in France to recover, and the novel ends with Claire revealing she is pregnant.',
    ],
    characters: [
      {
        name: 'Claire Beauchamp Randall',
        role: 'Heroine',
        description: 'A pragmatic, outspoken former combat nurse from 1945 with a gift for healing.',
      },
      {
        name: 'James "Jamie" Fraser',
        role: 'Hero',
        description: 'A young Highland warrior, laird of Lallybroch and nephew of the MacKenzie chiefs.',
      },
      {
        name: 'Frank Randall',
        role: 'Supporting',
        description: 'Claire\u2019s 20th-century husband, a historian researching his family tree.',
      },
      {
        name: 'Jonathan "Black Jack" Randall',
        role: 'Antagonist',
        description: 'A cruel captain in the British Army and Frank\u2019s direct ancestor.',
      },
      {
        name: 'Colum MacKenzie',
        role: 'Supporting',
        description: 'Laird of Clan MacKenzie at Castle Leoch, and Jamie\u2019s uncle.',
      },
      {
        name: 'Dougal MacKenzie',
        role: 'Supporting',
        description: 'Colum\u2019s brother and the clan\u2019s war chieftain, a secret Jacobite supporter.',
      },
      {
        name: 'Geillis Duncan',
        role: 'Supporting',
        description: 'A herbalist and Claire\u2019s friend who is revealed to be a fellow time traveler.',
      },
      {
        name: 'Murtagh Fraser',
        role: 'Supporting',
        description: 'Jamie\u2019s fiercely loyal godfather.',
      },
      {
        name: 'Jenny Fraser Murray',
        role: 'Family',
        description: 'Jamie\u2019s strong-willed sister, who runs Lallybroch with her husband, Ian Murray.',
      },
    ],
    seriesEntries: [
      { order: 1, title: 'Outlander', year: 1991 },
      { order: 2, title: 'Dragonfly in Amber', year: 1992 },
      { order: 3, title: 'Voyager', year: 1993 },
      { order: 4, title: 'Drums of Autumn', year: 1996 },
      { order: 5, title: 'The Fiery Cross', year: 2001 },
      { order: 6, title: 'A Breath of Snow and Ashes', year: 2005 },
      { order: 7, title: 'An Echo in the Bone', year: 2009 },
      { order: 8, title: 'Written in My Own Heart\u2019s Blood', year: 2014 },
      { order: 9, title: 'Go Tell the Bees That I Am Gone', year: 2021 },
    ],
    themes: ['Fate and choice', 'Love across time', 'Trauma and healing', 'Loyalty and clan'],
    facts: [
      'In the United Kingdom the first novel was originally published as "Cross Stitch."',
      'Adapted into the Starz television series beginning in 2014.',
    ],
  },
  {
    slug: 'bridgerton',
    title: 'The Duke and I',
    author: 'Julia Quinn',
    published: 2000,
    series: 'Bridgerton',
    setting: 'London, England — Regency era (1813)',
    subgenre: 'Historical / Regency',
    accent: 'sky',
    tagline: 'A fake courtship between a duke and the eldest Bridgerton daughter.',
    overview:
      'The Duke and I launches the Bridgerton series, which follows the eight alphabetically named Bridgerton siblings as each finds love. The society gossip sheet of the mysterious "Lady Whistledown" provides commentary throughout the series.',
    plot: [
      'Daphne Bridgerton, the eldest Bridgerton daughter, is well liked but seen by suitors only as a friend. Simon Basset, the new Duke of Hastings and a close friend of her eldest brother, Anthony, has vowed never to marry or have children — a vow made to spite the cold father who rejected him for his childhood stutter.',
      'Hounded by matchmaking mothers, Simon proposes a scheme: he and Daphne will pretend to court. His interest will make her more desirable to other suitors, and their "courtship" will keep the mothers away from him.',
      'The pretence turns real. After Anthony catches them in a compromising moment, the two marry, though Simon warns Daphne that he cannot give her children. Daphne eventually realises he means he will not, rather than cannot, and the conflict over his vow nearly destroys their marriage.',
      'Simon finally confronts the pain of his past, reconciling his trauma with his love for Daphne. The couple go on to have a family together.',
    ],
    characters: [
      {
        name: 'Daphne Bridgerton',
        role: 'Heroine',
        description: 'The fourth Bridgerton child and eldest daughter: warm, sensible and longing for a family.',
      },
      {
        name: 'Simon Basset, Duke of Hastings',
        role: 'Hero',
        description: 'A guarded duke who vowed never to give his late father an heir.',
      },
      {
        name: 'Anthony Bridgerton',
        role: 'Family',
        description: 'The eldest sibling and Viscount Bridgerton; Simon\u2019s friend and Daphne\u2019s protective brother.',
      },
      {
        name: 'Violet Bridgerton',
        role: 'Family',
        description: 'The widowed matriarch of the family and mother of all eight Bridgerton children.',
      },
      {
        name: 'Lady Whistledown',
        role: 'Supporting',
        description: 'The anonymous author of a society gossip sheet; her identity is revealed later in the series.',
      },
      {
        name: 'Lady Danbury',
        role: 'Supporting',
        description: 'A formidable, sharp-tongued dowager and fixture of London society.',
      },
    ],
    seriesEntries: [
      { order: 1, title: 'The Duke and I', year: 2000, focus: 'Daphne & Simon' },
      { order: 2, title: 'The Viscount Who Loved Me', year: 2000, focus: 'Anthony & Kate' },
      { order: 3, title: 'An Offer from a Gentleman', year: 2001, focus: 'Benedict & Sophie' },
      { order: 4, title: 'Romancing Mister Bridgerton', year: 2002, focus: 'Colin & Penelope' },
      { order: 5, title: 'To Sir Phillip, With Love', year: 2003, focus: 'Eloise & Phillip' },
      { order: 6, title: 'When He Was Wicked', year: 2004, focus: 'Francesca & Michael' },
      { order: 7, title: 'It\u2019s in His Kiss', year: 2005, focus: 'Hyacinth & Gareth' },
      { order: 8, title: 'On the Way to the Wedding', year: 2006, focus: 'Gregory & Lucy' },
    ],
    themes: ['Family', 'Healing from childhood trauma', 'Society and gossip', 'Fake dating'],
    facts: [
      'The siblings are named alphabetically: Anthony, Benedict, Colin, Daphne, Eloise, Francesca, Gregory and Hyacinth.',
      'Lady Whistledown is revealed to be Penelope Featherington in "Romancing Mister Bridgerton."',
      'Adapted by Shondaland as the Netflix series "Bridgerton" (2020).',
    ],
  },
  {
    slug: 'a-court-of-thorns-and-roses',
    title: 'A Court of Thorns and Roses',
    author: 'Sarah J. Maas',
    published: 2015,
    series: 'A Court of Thorns and Roses',
    setting: 'The mortal lands and Prythian, a faerie realm of seven courts',
    subgenre: 'Fantasy Romance',
    accent: 'fuchsia',
    tagline: 'A huntress, a cursed faerie court and a deadly bargain.',
    overview:
      'A Court of Thorns and Roses (ACOTAR) is a fantasy romance loosely inspired by "Beauty and the Beast." Nineteen-year-old huntress Feyre Archeron is taken into the faerie land of Prythian, where she becomes entangled in a centuries-old curse and the politics of the High Lords.',
    plot: [
      'Feyre keeps her impoverished father and two sisters, Nesta and Elain, alive by hunting. When she kills a giant wolf in the woods, a beast arrives to claim a life for a life under the treaty between humans and faeries: the wolf was a faerie.',
      'The beast is Tamlin, High Lord of the Spring Court, who takes Feyre to his estate in Prythian. She discovers the court is under a curse that has left its inhabitants permanently masked, and she slowly falls in love with Tamlin.',
      'The curse was cast by Amarantha, who rules Prythian from Under the Mountain. Feyre goes there to save Tamlin and strikes a deal: complete three trials, or answer Amarantha\u2019s riddle, to break the curse. Rhysand, High Lord of the Night Court, saves her life in exchange for a bargain: one week of every month spent with him.',
      'Feyre survives the trials and solves the riddle (the answer is "love"), but Amarantha kills her. The seven High Lords resurrect Feyre as High Fae, each giving her a share of their power, and Amarantha is destroyed.',
    ],
    characters: [
      {
        name: 'Feyre Archeron',
        role: 'Heroine',
        description: 'A determined huntress and painter at heart who is remade as High Fae.',
      },
      {
        name: 'Tamlin',
        role: 'Hero',
        description: 'High Lord of the Spring Court, a shapeshifter bound by Amarantha\u2019s curse.',
      },
      {
        name: 'Rhysand',
        role: 'Supporting',
        description:
          'High Lord of the Night Court, who hides his true character behind a cruel mask. He becomes the central love interest from book two.',
      },
      {
        name: 'Lucien',
        role: 'Supporting',
        description: 'Tamlin\u2019s emissary and friend, recognisable by his scar and mechanical eye.',
      },
      {
        name: 'Amarantha',
        role: 'Antagonist',
        description: 'A vengeful faerie who seized control of Prythian and rules Under the Mountain.',
      },
      {
        name: 'Nesta Archeron',
        role: 'Family',
        description: 'Feyre\u2019s cold, proud eldest sister; the heroine of A Court of Silver Flames.',
      },
      {
        name: 'Elain Archeron',
        role: 'Family',
        description: 'Feyre\u2019s gentle middle sister, who loves gardening.',
      },
    ],
    seriesEntries: [
      { order: 1, title: 'A Court of Thorns and Roses', year: 2015, focus: 'Feyre & Tamlin' },
      { order: 2, title: 'A Court of Mist and Fury', year: 2016, focus: 'Feyre & Rhysand' },
      { order: 3, title: 'A Court of Wings and Ruin', year: 2017, focus: 'Feyre & Rhysand' },
      { order: 4, title: 'A Court of Frost and Starlight (novella)', year: 2018, focus: 'Night Court' },
      { order: 5, title: 'A Court of Silver Flames', year: 2021, focus: 'Nesta & Cassian' },
    ],
    themes: ['Healing from trauma', 'Agency and freedom', 'Found family', 'Power and sacrifice'],
    facts: [
      'Loosely inspired by "Beauty and the Beast" and the ballad of Tam Lin.',
      'The series is famous for its twist: Rhysand, introduced as a villain, becomes Feyre\u2019s mate.',
    ],
  },
  {
    slug: 'the-notebook',
    title: 'The Notebook',
    author: 'Nicholas Sparks',
    published: 1996,
    setting: 'New Bern, North Carolina — 1932, 1946 and the present day',
    subgenre: 'Contemporary / Drama',
    accent: 'amber',
    tagline: 'A love story read aloud, one page at a time.',
    overview:
      'The Notebook was Nicholas Sparks\u2019s breakthrough bestseller. It intertwines a 1940s love story with a present-day frame in which an elderly man reads the story aloud to a woman in a nursing home.',
    plot: [
      'In a nursing home, an elderly man reads from a worn notebook to a woman who has Alzheimer\u2019s disease. The story he reads begins in 1946 in New Bern, North Carolina.',
      'Noah Calhoun has returned from the Second World War and restored an old plantation house. Fourteen years earlier, he and Allie Nelson had fallen in love one summer before her wealthy family took her away. Noah wrote to her, but her mother hid the letters.',
      'Allie, now engaged to Lon Hammond Jr., a successful lawyer, sees a newspaper article about Noah\u2019s restored house and travels to New Bern to see him. Their love rekindles, and Allie must choose between Noah and Lon. She chooses Noah.',
      'The narrator is revealed to be Noah, now elderly, and the woman is Allie, who wrote the story down so he could read it to her. On rare occasions she remembers him, and the novel ends with Noah going to her room at night to be with her.',
    ],
    characters: [
      {
        name: 'Noah Calhoun',
        role: 'Hero',
        description: 'A steady, poetry-loving war veteran who restores the house he once promised Allie.',
      },
      {
        name: 'Allison "Allie" Nelson',
        role: 'Heroine',
        description: 'A spirited young woman from a wealthy family who loves to paint.',
      },
      {
        name: 'Lon Hammond Jr.',
        role: 'Supporting',
        description: 'Allie\u2019s fianc\u00e9, a respected and ambitious lawyer.',
      },
      {
        name: 'Allie\u2019s mother',
        role: 'Family',
        description: 'Disapproves of Noah\u2019s social class and hides his letters from Allie.',
      },
    ],
    seriesEntries: [
      { order: 1, title: 'The Notebook', year: 1996 },
      { order: 2, title: 'The Wedding', year: 2003, focus: 'Noah & Allie\u2019s daughter, Jane' },
    ],
    themes: ['Enduring love', 'Memory and aging', 'Class divides', 'Second chances'],
    facts: [
      'Adapted into the 2004 film starring Ryan Gosling and Rachel McAdams.',
      'The Wedding (2003) is a follow-up told by Wilson Lewis, Noah and Allie\u2019s son-in-law.',
    ],
  },
  {
    slug: 'me-before-you',
    title: 'Me Before You',
    author: 'Jojo Moyes',
    published: 2012,
    series: 'Me Before You',
    setting: 'A small English town near a castle — present day',
    subgenre: 'Contemporary',
    accent: 'orange',
    tagline: 'Six months to show a man his life is worth living.',
    overview:
      'Me Before You is a contemporary love story about Louisa "Lou" Clark, a quirky young woman, and Will Traynor, a former high-flying businessman left quadriplegic after an accident. The novel explores love, autonomy and the right to choose.',
    plot: [
      'When the caf\u00e9 she works in closes, 26-year-old Lou Clark takes a six-month job as a carer for Will Traynor. Two years earlier, Will was hit by a motorbike and left paralysed. Once adventurous and successful, he is now bitter and withdrawn.',
      'Lou overhears that Will has promised his parents six months before he travels to the Swiss clinic Dignitas to end his life. Secretly, she resolves to change his mind by planning outings and adventures.',
      'Lou and Will fall in love, and she breaks up with her long-time boyfriend, Patrick. On a trip to Mauritius, Lou confesses her love, but Will tells her it is not enough to change his decision.',
      'Will goes ahead with his plan. Lou ultimately joins him in Switzerland to be with him at the end. Afterwards, she receives a letter from Will, read in a Paris caf\u00e9, and money he left her, urging her to live boldly.',
    ],
    characters: [
      {
        name: 'Louisa Clark',
        role: 'Heroine',
        description: 'A chatty, unambitious young woman known for her colourful, eccentric clothes.',
      },
      {
        name: 'Will Traynor',
        role: 'Hero',
        description: 'A sharp-witted former City businessman left quadriplegic after an accident.',
      },
      {
        name: 'Camilla Traynor',
        role: 'Family',
        description: 'Will\u2019s reserved mother, a magistrate, who hires Lou.',
      },
      {
        name: 'Nathan',
        role: 'Supporting',
        description: 'Will\u2019s nurse, who handles his medical care and becomes Lou\u2019s ally.',
      },
      {
        name: 'Patrick',
        role: 'Supporting',
        description: 'Lou\u2019s fitness-obsessed boyfriend of several years.',
      },
      {
        name: 'Katrina "Treena" Clark',
        role: 'Family',
        description: 'Lou\u2019s clever younger sister and a single mother.',
      },
    ],
    seriesEntries: [
      { order: 1, title: 'Me Before You', year: 2012 },
      { order: 2, title: 'After You', year: 2015 },
      { order: 3, title: 'Still Me', year: 2018 },
    ],
    themes: ['Autonomy and choice', 'Living fully', 'Class differences', 'Grief'],
    facts: ['Adapted into a 2016 film starring Emilia Clarke and Sam Claflin, with a screenplay by Moyes.'],
  },
  {
    slug: 'red-white-and-royal-blue',
    title: 'Red, White & Royal Blue',
    author: 'Casey McQuiston',
    published: 2019,
    setting: 'Washington, D.C., London and Texas — an alternate present day',
    subgenre: 'Contemporary / LGBTQ+',
    accent: 'teal',
    tagline: 'The First Son of the United States and a British prince. What could go wrong?',
    overview:
      'Red, White & Royal Blue is a contemporary romantic comedy set in an alternate reality where Ellen Claremont is President of the United States. Her son, Alex, falls for his supposed rival, Prince Henry of Great Britain.',
    plot: [
      'Alex Claremont-Diaz, the First Son, has a long-running rivalry with Prince Henry. At a royal wedding, a scuffle between them topples an enormously expensive wedding cake, creating an international incident.',
      'To limit the damage, both families\u2019 press teams arrange for Alex and Henry to stage a public friendship. The forced appearances turn into real friendship, and then into a secret romance, carried on largely through heartfelt emails.',
      'Their relationship becomes public when their private emails are leaked during Ellen\u2019s re-election campaign. Henry is pressured by his grandmother, the Queen, to deny it, but chooses to stand by Alex.',
      'Alex and Henry receive overwhelming public support. Ellen wins re-election, carrying Alex\u2019s home state of Texas, and the couple are free to be together openly.',
    ],
    characters: [
      {
        name: 'Alex Claremont-Diaz',
        role: 'Protagonist',
        description: 'The charismatic, politically ambitious First Son from Texas.',
      },
      {
        name: 'Prince Henry',
        role: 'Protagonist',
        description: 'A reserved, romantic British prince and younger brother to the heir, Prince Philip.',
      },
      {
        name: 'Ellen Claremont',
        role: 'Family',
        description: 'Alex\u2019s mother, the first woman President of the United States.',
      },
      {
        name: 'June Claremont-Diaz',
        role: 'Family',
        description: 'Alex\u2019s fiercely supportive older sister.',
      },
      {
        name: 'Nora Holleran',
        role: 'Supporting',
        description: 'Alex and June\u2019s brilliant best friend and granddaughter of the Vice President.',
      },
      {
        name: 'Percy "Pez" Okonjo',
        role: 'Supporting',
        description: 'Henry\u2019s exuberant best friend.',
      },
    ],
    themes: ['Identity and coming out', 'Public versus private life', 'Politics', 'Rivals to lovers'],
    facts: [
      'McQuiston\u2019s debut novel; it won the Goodreads Choice Award for Best Romance (2019).',
      'Adapted into a 2023 Prime Video film starring Taylor Zakhar Perez and Nicholas Galitzine.',
    ],
  },
]

export const books: Book[] = [...coreBooks, ...webNovelBooks, ...fantasyBooks, ...contemporaryBooks, ...classicBooks].sort(
  (a, b) => a.title.localeCompare(b.title),
)

export function getBook(slug: string) {
  return books.find((book) => book.slug === slug)
}

export const subgenres = Array.from(new Set(books.map((b) => b.subgenre))).sort()

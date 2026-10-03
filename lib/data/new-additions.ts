import type { Book } from '../books'

export const newAdditionBooks: Book[] = [
  {
    slug: 'the-seven-husbands-of-evelyn-hugo',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    published: 2017,
    setting: 'New York City and Hollywood — 1950s to the present',
    subgenre: 'Historical Fiction',
    accent: 'emerald',
    tagline: 'A reclusive screen icon finally tells the truth about her great love.',
    overview:
      'Aging Hollywood star Evelyn Hugo chooses an unknown magazine reporter, Monique Grant, to write her life story. Behind the seven marriages that made headlines lies the real love of Evelyn\u2019s life: fellow actress Celia St. James.',
    plot: [
      'Monique, a writer at Vivant magazine, is stunned when Evelyn requests her specifically. Evelyn recounts her life, starting with her escape from Hell\u2019s Kitchen by marrying Ernie Diaz and moving to Los Angeles.',
      'Rising to stardom, Evelyn marries the actor Don Adler, who becomes abusive. On set she falls in love with Celia St. James, but they must hide their relationship to protect their careers.',
      'Evelyn\u2019s later marriages — including to her devoted friend and producer Harry Cameron, who is gay — help shield her and Celia from scandal. Evelyn and Harry raise a daughter, Connor.',
      'Evelyn reveals why she chose Monique: a tragic secret links Evelyn to the death of Monique\u2019s father. With her story told, Evelyn ends her life on her own terms, leaving Monique to publish the book.',
    ],
    characters: [
      { name: 'Evelyn Hugo', role: 'Protagonist', description: 'A glamorous, ruthless, bisexual Hollywood legend.' },
      { name: 'Celia St. James', role: 'Protagonist', description: 'An acclaimed actress and the love of Evelyn\u2019s life.' },
      { name: 'Monique Grant', role: 'Protagonist', description: 'A journalist at a crossroads in her career and marriage.' },
      { name: 'Harry Cameron', role: 'Supporting', description: 'Evelyn\u2019s producer, best friend and husband.' },
      { name: 'Don Adler', role: 'Antagonist', description: 'A Hollywood star and Evelyn\u2019s abusive second husband.' },
      { name: 'Connor Cameron', role: 'Family', description: 'Evelyn\u2019s daughter.' },
    ],
    relationships: [
      { pair: 'Evelyn & Celia', type: 'Secret love', description: 'Decades of devotion hidden from the public eye.' },
      { pair: 'Evelyn & Harry', type: 'Chosen family', description: 'A marriage of friendship, protection and parenthood.' },
    ],
    themes: ['Fame and sacrifice', 'Queer identity', 'Ambition', 'Truth and legacy'],
    facts: ['Became a word-of-mouth phenomenon on BookTok several years after publication.'],
  },
  {
    slug: 'people-we-meet-on-vacation',
    title: 'People We Meet on Vacation',
    author: 'Emily Henry',
    published: 2021,
    setting: 'Palm Springs, California, with flashbacks to summer trips worldwide',
    subgenre: 'Contemporary',
    accent: 'blue',
    tagline: 'Two best friends. Ten summer trips. One last chance.',
    overview:
      'Free-spirited travel writer Poppy Wright and buttoned-up teacher Alex Nilsen have nothing in common, but they took a summer vacation together every year — until a trip two years ago ruined everything. Poppy proposes one more trip to win back her best friend.',
    plot: [
      'Poppy and Alex, both from small-town Ohio, meet at the University of Chicago and become best friends. Every summer they travel together, with Poppy\u2019s career as a writer for R+R magazine taking off.',
      'After an incident on a trip to Croatia, the two stop speaking. Two years later Poppy, burnt out and unhappy, asks Alex to join her for one more trip: the week of his brother David\u2019s wedding in Palm Springs.',
      'The trip goes wrong in comic ways — a broken air conditioner, a heatwave — while flashbacks reveal the slow growth of their feelings and what really happened in Croatia.',
      'Poppy and Alex finally confront their love and their fears about wanting different lives. They choose each other, finding a future that includes both home and adventure.',
    ],
    characters: [
      { name: 'Poppy Wright', role: 'Heroine', description: 'A bubbly, restless travel writer.' },
      { name: 'Alex Nilsen', role: 'Hero', description: 'A reserved, steady high-school English teacher.' },
      { name: 'Rachel Krohn', role: 'Supporting', description: 'Poppy\u2019s best friend in New York.' },
      { name: 'David Nilsen', role: 'Family', description: 'Alex\u2019s younger brother, whose wedding brings them to Palm Springs.' },
    ],
    relationships: [
      { pair: 'Poppy & Alex', type: 'Friends to lovers', description: 'A decade of friendship hiding something deeper.' },
    ],
    themes: ['Friends to lovers', 'Belonging', 'Burnout', 'Home versus adventure'],
    facts: ['Told in alternating "This Summer" and past "Summers" chapters.'],
  },
  {
    slug: 'the-spanish-love-deception',
    title: 'The Spanish Love Deception',
    author: 'Elena Armas',
    published: 2021,
    setting: 'New York City and Spain',
    subgenre: 'Contemporary / Workplace',
    accent: 'indigo',
    tagline: 'She needs a date to her sister\u2019s wedding in Spain. The only volunteer is her nemesis.',
    overview:
      'Catalina Mart\u00edn has let her family believe she has an American boyfriend, and now she needs one at her sister\u2019s wedding in Spain. Her infuriating colleague Aaron Blackford offers to be her fake date.',
    plot: [
      'Catalina, a Spanish woman working at a New York engineering consultancy, has a month to find a date for her sister Isabel\u2019s wedding, where her ex will also be present.',
      'Aaron, the tall, blunt colleague she has disliked since they first met, volunteers. In exchange, she must help him with a work favour.',
      'In Spain, the pair pretend to be a couple in front of Catalina\u2019s loud, loving family. The pretence becomes harder to separate from real feelings.',
      'Back in New York, they face workplace complications and Catalina\u2019s fears about trusting love again. Aaron proves his feelings are real, and they commit.',
    ],
    characters: [
      { name: 'Catalina Mart\u00edn', role: 'Heroine', description: 'A warm, stubborn Spanish engineer in New York.' },
      { name: 'Aaron Blackford', role: 'Hero', description: 'Her serious, uncompromising American colleague.' },
      { name: 'Isabel Mart\u00edn', role: 'Family', description: 'Catalina\u2019s sister, the bride.' },
      { name: 'Rosie', role: 'Supporting', description: 'Catalina\u2019s best friend and coworker.' },
    ],
    relationships: [
      { pair: 'Catalina & Aaron', type: 'Fake dating', description: 'Coworkers who loathe each other — supposedly.' },
    ],
    themes: ['Fake dating', 'Enemies to lovers', 'Family', 'Trust'],
    facts: ['Originally self-published; it went viral on BookTok before a traditional release.'],
  },
]

export const identity = {
  name: 'Santiago Vélez',
  shortName: 'Santi',
  role: 'Client Relationship Manager',
  location: 'Medellín, Colombia',
  email: 'santiagovl96@gmail.com',
};

export const experience = [
  {
    number: '01',
    company: 'VirtualSoft',
    category: 'SaaS / iGaming',
    role: 'SaaS Account Manager',
    summary: 'Turning client needs into a shared direction.',
    detail:
      'Managed eight accounts within a $3M SaaS portfolio, connecting clients with product owners, developers, analysts and implementation teams. Helped translate requests into campaigns and actionable product backlogs.',
    metrics: [
      { value: '+15 pp', label: 'CSAT · 71% → 86%' },
      { value: '8+', label: 'Collaborative campaigns' },
    ],
  },
  {
    number: '02',
    company: 'bb.q Chicken',
    category: 'Market entry / Colombia',
    role: 'Procurement & Business Development',
    summary: 'Helping a global brand find its local footing.',
    detail:
      'Helped bring the Korean franchise to Medellín. Shaped go-to-market inputs, built relationships for 70+ raw materials, connected 15+ local collaborators, and helped secure its Provenza location and key providers.',
    metrics: [
      { value: '70+', label: 'Raw materials sourced' },
      { value: '15+', label: 'Local collaborators' },
    ],
  },
  {
    number: '03',
    company: 'bb.q Chicken',
    category: 'Brand / Marketing',
    role: 'Chief Brand Officer',
    summary: 'Global identity. Local understanding.',
    detail:
      'Directed an eight-person team overseeing brand identity, reputation and marketing in Colombia. Translated global guidelines into local practice and supervised content, audiovisual production, influencer collaborations and budgets.',
    metrics: [
      { value: '1.65×', label: 'Monthly sales' },
      { value: '↑ ATV', label: 'Average transaction value' },
      { value: '8', label: 'People in the creative team' },
    ],
  },
];

export const skillGroups = [
  {
    title: 'Strategy & delivery',
    skills: 'Roadmapping / User research / A/B testing / OKRs / Agile & Scrum',
  },
  {
    title: 'Relationships & systems',
    skills: 'Salesforce / HubSpot / Optimove / Jira / Stakeholder alignment',
  },
  { title: 'Tools & curiosity', skills: 'Python / Slack / Figma / APIs' },
  {
    title: 'AI literacy',
    skills: 'Hermes / Codex / Claude / Models / Harnesses / Skills / MCPs / AI workflows',
  },
  {
    title: 'Working with people',
    skills: 'Assertive communication / Active listening / Curiosity / Empathy / Teamwork',
  },
];

export const workTotals = [
  { value: '8+', label: 'Accounts managed simultaneously' },
  { value: '20+', label: 'Campaigns across my work' },
  { value: '400+', label: 'Requests scoped, documented & triaged' },
  { value: '5+', label: 'Teams connected around solutions' },
];

export type Project = {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  cardResult: { value: string; label: string };
  challenge: string;
  contribution: string;
  approach: string;
  highlights: { challenge: string[]; contribution: string[]; approach: string[] };
  outcomes: { value: string; label: string }[];
  learning: string;
  art: 'dorado' | 'seoul';
};

export const projects: Project[] = [
  {
    id: 'el-dorado',
    number: '01',
    title: 'Path to El Dorado',
    client: 'VirtualSoft × Doradobet',
    category: 'Engagement & retention',
    art: 'dorado',
    summary: 'An eight-month journey that gave players a reason to come back.',
    cardResult: { value: '20% → 55%', label: 'Customer retention' },
    challenge:
      'Doradobet wanted to attract new players and sustain their engagement. Many newly acquired players were leaving within two months.',
    contribution:
      'As Account Manager, I turned the account owner’s concern into a brief, brought marketing and commercial teams together, facilitated the brainstorm, managed the request pipeline, and presented our joint proposal to the client.',
    approach:
      'We shaped an eight-month leaderboard tournament around a thematic journey through Ecuador, from Otavalo to the Galápagos Islands. Eligible activity earned points, with monthly rewards and a final island-trip grand prize. I kept communication moving and coordinated backlog follow-through.',
    highlights: {
      challenge: ['leaving within two months'],
      contribution: [
        'turned the account owner’s concern into a brief',
        'managed the request pipeline',
      ],
      approach: ['eight-month leaderboard tournament', 'coordinated backlog follow-through'],
    },
    outcomes: [
      { value: '20 → 55%', label: 'Customer retention · +35 percentage points' },
      { value: '~26%', label: 'Average daily / monthly active-user uplift' },
      { value: '+6%', label: 'Gross gaming revenue during campaign months' },
    ],
    learning:
      'The strongest ideas came from talented people working on a shared problem. My role was to connect the right teams and turn that conversation into something the client could act on.',
  },
  {
    id: 'bbq-colombia',
    number: '02',
    title: 'From Seoul to Medellín',
    client: 'bb.q Chicken MF Colombia',
    category: 'Market entry & procurement',
    art: 'seoul',
    summary: 'Helping a Korean franchise build the connections for a Colombian beginning.',
    cardResult: { value: '70+', label: 'Raw materials sourced' },
    challenge:
      'Bringing a global franchise into a new market called for local understanding: its customers, pricing, supply chain, partners and location.',
    contribution:
      'I helped shape go-to-market inputs, including the ideal customer profile, brand voice, local insights and pricing. I also developed supplier relationships and helped secure the Provenza location and key providers.',
    approach:
      'The work connected the franchise’s global standards with local capabilities. I helped establish a supply chain for 70+ raw materials aligned with quality requirements and connected the brand with 15+ local collaborators.',
    highlights: {
      challenge: ['local understanding'],
      contribution: ['go-to-market inputs', 'helped secure the Provenza location'],
      approach: ['70+ raw materials', '15+ local collaborators'],
    },
    outcomes: [
      { value: '70+', label: 'Raw materials covered by local supply-chain work' },
      { value: '15+', label: 'Local collaborators connected with the brand' },
      { value: 'Provenza', label: 'Location secured with key providers' },
    ],
    learning:
      'A meaningful market entry begins with relationships: understanding what the brand needs and finding the people who can help bring it to life locally.',
  },
];

export type Creation = {
  name: string;
  category: string;
  description: string;
  detail: string;
  mark: string;
  href?: string;
  image?: {
    src: string;
    alt: string;
    fit?: 'cover' | 'contain';
    position?: string;
    background?: string;
  };
  video?: string;
};

export const creations: Creation[] = [
  {
    name: 'Trai',
    image: {
      src: '/images/creations/trai-banner.png',
      alt: 'Trai’s orange mascot against a star-filled background',
    },
    video: '/videos/trai-demo.mp4',
    category: 'Desktop application',
    mark: '◌',
    description: 'A little buddy that tracks your AI usage.',
    detail:
      'A system-tray companion for Codex and Claude. Refreshed every minute, it shows your remaining five-hour and weekly usage at a glance.',
  },
  {
    name: 'DNS Switch',
    image: {
      src: '/images/creations/dns-switch-transparent.png',
      alt: 'DNS Switch routing an internet connection to Cloudflare, Google, Quad9 or the ISP',
      fit: 'contain',
      background: 'transparent',
    },
    video: '/videos/dns-switch-demo.mp4',
    category: 'Utility script',
    mark: '↔',
    description: 'Your network. Your choice.',
    detail:
      'A script for changing your DNS provider on the go: Cloudflare, Google, Quad9 or your ISP.',
  },
  {
    name: 'Maelström',
    image: {
      src: '/images/creations/maelstrom-banner.png',
      alt: 'Maelström logo centered on a dark background with violet and blue light trails',
    },
    category: 'Chrome extension',
    mark: '✳',
    description: 'Replace your New Tab with a customizable launchpad',
    detail:
      'An editable new-tab launchpad for your preferred platforms and source links, with a 25/5/15 focus timer.',
    href: 'https://chromewebstore.google.com/detail/maelstr%C3%B6m-%E2%80%94-focus-new-tab/jpmfgjobljmbplmifddfhinpegiladde?hl=es-419',
  },
  {
    name: 'Sweetspot Desert',
    image: {
      src: '/images/creations/sweetspot-desert.png',
      alt: 'Crimson Desert with Sweetspot Desert visual adjustments',
      position: '50% 0%',
    },
    category: 'ReShade add-on',
    mark: '◈',
    description: 'A different lens on a familiar world.',
    detail: 'An opinionated, curated set of visual tweaks for Crimson Desert.',
    href: 'https://www.nexusmods.com/crimsondesert/mods/532?tab=description',
  },
  {
    name: 'JobHub',
    category: 'Personal application',
    mark: '⌘',
    description: 'A more intentional job search.',
    detail:
      'A job-hunting hub that fetches and scores positions, combined with a manual launchpad.',
  },
];

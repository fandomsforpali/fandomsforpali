export interface ButtonItem {
  label: string;
  href: string;
  color: 'coral' | 'crimson' | 'orange' | 'green' | 'plum' | 'brown' | 'cyan' | 'grey';
  icon?: string;
  external?: boolean;
}

export interface SocialLinkItem {
  name: string;
  href: string;
  icon: 'instagram' | 'tiktok' | 'tumblr' | 'email' | 'discord' | 'twitter' | 'bluesky';
  ariaLabel: string;
}

export interface PricingTier {
  category: string;
  sketch: string;
  lineart: string;
  flatColor: string;
  fullRender: string;
}

export interface ComicPanel {
  src: string;
  alt: string;
  caption?: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
}

export const siteConfig = {
  title: 'Fandoms for Palestine',
  tagline: 'Uniting fans of all things fiction to help those in Palestine',
  description: 'A guide to all things FFP - Demigods for Palestine, Lead & Director applications, commission forms, raffle forms, and donations.',
  themeColor: '#0D2235',
  url: 'https://fandomsforpali.carrd.co',

  header: {
    home: {
      label: 'Home',
      href: '/',
    },
    actions: [
      {
        label: 'Apply: Leads',
        href: 'https://forms.gle/DJuDeua58vzmD2fC7',
        color: 'cyan' as const,
        external: true,
      },
      {
        label: 'Apply: Directors',
        href: 'https://forms.gle/bUA6HhSRoXBhRQfZA',
        color: 'orange' as const,
        external: true,
      },
      {
        label: 'Donate Now',
        href: 'https://www.gofundme.com/f/stand-with-wijdan-help-her-win-the-fight-against-cancer?attribution_id=sl:c29b9e82-8bf4-4107-970f-acee21d9f09c&lang=en_US&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link',
        color: 'crimson' as const,
        external: true,
      },
    ],
  },

  landing: {
    avatar: {
      src: '/assets/images/image01.jpg',
      alt: 'Fandoms for Palestine Logo',
      href: '/contributors',
    },
    banner: {
      src: '/assets/campaign-jacksonbug/apps_countdown_6days.jpg',
      alt: 'Lead & Director Applications - Demigods for Palestine Campaign',
      href: '/currentcampaign',
      external: false,
    },
    leadsButton: {
      label: '🌊 Apply for Leads (Form)',
      href: 'https://forms.gle/DJuDeua58vzmD2fC7',
      color: 'cyan' as const,
      external: true,
    },
    directorsButton: {
      label: '🔥 Apply for Directors (Form)',
      href: 'https://forms.gle/bUA6HhSRoXBhRQfZA',
      color: 'orange' as const,
      external: true,
    },
    campaignSection: {
      pretitle: '- Current campaign -',
      title: 'DEMIGODS FOR PALESTINE',
      buttons: [
        {
          label: '🌊 Apply for Leads',
          href: 'https://forms.gle/DJuDeua58vzmD2fC7',
          color: 'crimson' as const,
          external: true,
        },
        {
          label: '🔥 Apply for Directors',
          href: 'https://forms.gle/bUA6HhSRoXBhRQfZA',
          color: 'orange' as const,
          external: true,
        },
        {
          label: '⚔️ Campaign Details & Comic',
          href: '/currentcampaign',
          color: 'green' as const,
        },
        // {
        //   label: 'Our Writers & Artists',
        //   href: '/contributors',
        //   color: 'coral' as const,
        // },
        {
          label: 'About Wijdan & family',
          href: '/wijdan',
          color: 'sand' as const,
        },
        {
          label: 'About Mohammed',
          href: '/mohammed',
          color: 'plum' as const,
        }
      ] as ButtonItem[],
    },
    aboutSection: {
      title: 'About FFP',
      buttons: [
        {
          label: 'What we do',
          href: '/whatwedo',
          color: 'crimson' as const,
        },
        {
          label: 'Our Team',
          href: '/moderators',
          color: 'orange' as const,
        },
        {
          label: 'FAQ',
          href: '/faq',
          color: 'green' as const,
        },
        {
          label: 'FFP Discord Server',
          href: 'https://discord.gg/hgn2AySnjq',
          color: 'plum' as const,
          external: true,
        },
      ] as ButtonItem[],
    },
    socialLinks: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/fandomsforpali/',
        icon: 'instagram',
        ariaLabel: 'Follow Fandoms for Palestine on Instagram',
      },
      {
        name: 'TikTok',
        href: 'https://www.tiktok.com/@fandomsforpali?_t=8rW8rHp01JP&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaaF3H4KdCAW8__0NK2pn4A7q4X7TWmOkZtevMFY5mPD812TGN7R7JeQ7P4_aem_8uBo7kHktIOE23ENykIwuQ',
        icon: 'tiktok',
        ariaLabel: 'Follow Fandoms for Palestine on TikTok',
      },
      {
        name: 'Tumblr',
        href: 'https://www.tumblr.com/fandomsforpali',
        icon: 'tumblr',
        ariaLabel: 'Follow Fandoms for Palestine on Tumblr',
      },
      {
        name: 'Email',
        href: 'mailto:fandomsforpalestine@gmail.com',
        icon: 'email',
        ariaLabel: 'Email Fandoms for Palestine',
      },
    ] as SocialLinkItem[],
  },

  campaign: {
    title: 'Demigods for Palestine',
    subtitle: 'Percy Jackson & Olympians for Palestine Charity Campaign',
    image: '/assets/campaign-jacksonbug/apps_countdown_6days.jpg',
    leadAppUrl: 'https://forms.gle/DJuDeua58vzmD2fC7',
    directorAppUrl: 'https://forms.gle/bUA6HhSRoXBhRQfZA',
    description:
      'Fandoms for Palestine is embarking on our next major campaign: Demigods for Palestine! We are rallying the Percy Jackson fandom to organize creative charity initiatives, art and writing contributions, and mutual aid to support Palestinian families in need.',
    rolesOverview:
      'Right now, we are recruiting Directors, Leads, and volunteers across all fandom communities to shape the creative and operational vision for Demigods for Palestine.',
    donationLink:
      'https://www.gofundme.com/f/stand-with-wijdan-help-her-win-the-fight-against-cancer?attribution_id=sl:c29b9e82-8bf4-4107-970f-acee21d9f09c&lang=en_US&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link',
    comicPanels: [
      {
        src: '/assets/campaign-jacksonbug/comic_ffp1.png',
        alt: 'FFP Crossover Comic - Part 1: Bringing beloved fandoms together for Palestine',
        caption: 'Panel 1: Connecting fans across fictional universes to build real-world solidarity.',
      },
      {
        src: '/assets/campaign-jacksonbug/comic_ffp2.png',
        alt: 'FFP Crossover Comic - Part 2: Introducing Ahsan from Gaza and Laaiqah from Jenin',
        caption: 'Panel 2: Introducing Palestinian heroes Ahsan and Laaiqah.',
      },
      {
        src: '/assets/campaign-jacksonbug/comic_ffp3.png',
        alt: 'FFP Crossover Comic - Part 3: Superpowers of resilience and hope',
        caption: 'Panel 3: Powers rooted in courage, culture, and community.',
      },
      {
        src: '/assets/campaign-jacksonbug/comic_ffp4.png',
        alt: 'FFP Crossover Comic - Part 4: Stepping through portals into new worlds',
        caption: 'Panel 4: Crossing multiverses into the Greek mythological world of Percy Jackson.',
      },
      {
        src: '/assets/campaign-jacksonbug/comic_ffp5.png',
        alt: 'FFP Crossover Comic - Part 5: Percy and Annabeth call for Leads and Directors',
        caption: 'Panel 5: We need Directors, Leads, and volunteers to build the next campaign!',
      },
    ] as ComicPanel[],
    dtiysImages: [
      {
        src: '/assets/campaign-jacksonbug/dtiys_13_12.jpg',
        alt: 'Draw This In Your Style - 10 Days Left',
      },
      {
        src: '/assets/campaign-jacksonbug/dtiys_19_12.jpg',
        alt: 'Draw This In Your Style - 4 Days Left',
      },
      {
        src: '/assets/campaign-jacksonbug/dtiys_21_12.jpg',
        alt: 'Draw This In Your Style - 2 Days Left',
      },
      {
        src: '/assets/campaign-jacksonbug/dtiys_23_12.jpg',
        alt: 'Draw This In Your Style - 1 Day Left',
      },
    ] as GalleryItem[],
    pricingTiers: [
      {
        category: 'Bust',
        sketch: '$10',
        lineart: '$15',
        flatColor: '$25',
        fullRender: '$40',
      },
      {
        category: 'Half Body',
        sketch: '$15',
        lineart: '$20',
        flatColor: '$30',
        fullRender: '$50',
      },
      {
        category: 'Full Body',
        sketch: '$20',
        lineart: '$25',
        flatColor: '$35',
        fullRender: '$60',
      },
    ] as PricingTier[],
  },

  wijdan: {
    name: 'Wijdan & Family',
    title: 'Stand with Wijdan: Help Her Win the Fight Against Cancer',
    image: '/assets/images/image04.jpg',
    gofundmeUrl:
      'https://www.gofundme.com/f/stand-with-wijdan-help-her-win-the-fight-against-cancer?attribution_id=sl:c29b9e82-8bf4-4107-970f-acee21d9f09c&lang=en_US&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link',
    summary:
      'Wijdan is a young Palestinian girl undergoing critical, life-saving cancer treatment amidst extreme hardship and blockade. Every donation through our campaign goes directly toward supporting her treatment, medication, and family survival.',
  },

  whatWeDo: {
    title: 'What We Do',
    subtitle: 'Uniting Fandoms to Make a Real-World Impact',
    heartImage: '/assets/images/image03.jpg',
    points: [
      'Organize fandom-focused charity drives, raffles, and commission markets.',
      'Connect fans with talented artists and writers who donate their creative work to raise funds.',
      'Direct 100% of verified contributions to direct-aid campaigns and families on the ground in Palestine.',
      'Build community and raise sustained awareness across platforms including Discord, Instagram, Tumblr, and TikTok.',
    ],
  },

  moderators: {
    title: 'Our Team',
    subtitle: 'The volunteer organizers and moderators behind Fandoms for Palestine',
    roles: [
      {
        role: 'Campaign Organizers',
        description: 'Coordinating events, artist submissions, commission intake, and donation verification.',
      },
      {
        role: 'Discord Moderators',
        description: 'Maintaining a safe, supportive, and active space for fans and creators in our server.',
      },
      {
        role: 'Communications & Socials',
        description: 'Managing announcements, updates, and creator spotlights across social platforms.',
      },
    ],
  },

  faq: [
    {
      question: 'How do applications for Leads and Directors work?',
      answer:
        'Fill out the respective Google Form (Leads or Directors) with your experience, portfolio/sample work, and availability. Our core organizers review applications and reach out via Discord or email.',
    },
    {
      question: 'Do I have to be in the Percy Jackson fandom to volunteer?',
      answer:
        'No! As Shay’s comic highlights, you don’t need to belong to a specific fandom to participate and make a difference. All creators, writers, and community builders passionate about Palestine are welcome.',
    },
    {
      question: 'Where does donation money go?',
      answer:
        'Donors contribute directly to verified campaigns (such as Wijdan’s cancer fund). FFP organizers never take a cut or hold donations; our mission is purely mutual aid and community connection.',
    },
    {
      question: 'How can I participate as an artist or writer?',
      answer:
        'Join our official FFP Discord server or check our announcement links when creator calls go live for the new campaign.',
    },
  ],
};

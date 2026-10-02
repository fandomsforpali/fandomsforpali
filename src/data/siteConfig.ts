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

export const siteConfig = {
  title: 'Fandoms for Palestine',
  tagline: 'Uniting fans of all things fiction to help those in Palestine',
  description: 'A guide to all things FFP - Miraculers for Palestine, commission forms, raffle forms, and donations.',
  themeColor: '#FFE3E3',
  url: 'https://fandomsforpali.carrd.co',

  header: {
    home: {
      label: 'Home',
      href: '/',
    },
    actions: [
      {
        label: 'MFP Campaign Info',
        href: '/currentcampaign',
        color: 'green' as const,
      },
      {
        label: 'Donate Now',
        href: 'https://www.gofundme.com/f/stand-with-wijdan-help-her-win-the-fight-against-cancer?attribution_id=sl:c29b9e82-8bf4-4107-970f-acee21d9f09c&lang=en_US&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link',
        color: 'crimson' as const,
        external: true,
      },
      {
        label: 'Commission Form',
        href: 'https://forms.gle/J7XUrEeo91jDKtUE6',
        color: 'orange' as const,
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
      src: '/assets/images/image05.jpg',
      alt: 'Mi-Raffle-lous @buggachat art raffle | Miraculers for Palestine',
      href: 'https://forms.gle/XBujmwrz1fDNTeJHA',
      external: true,
    },
    raffleButton: {
      label: 'MFP Raffle Form',
      href: 'https://forms.gle/XBujmwrz1fDNTeJHA',
      color: 'crimson' as const,
      external: true,
    },
    campaignSection: {
      pretitle: '- Current campaign -',
      title: 'MIRACULERS FOR PALESTINE',
      buttons: [
        {
          label: '🐞MFP Donation Campaign🇵🇸',
          href: '/currentcampaign',
          color: 'coral' as const,
        },
        {
          label: 'Our Writers & Artists',
          href: '/contributors',
          color: 'orange' as const,
        },
        {
          label: 'MFP Commission Form',
          href: 'https://forms.gle/qRMXcidJjtY5ChEz5',
          color: 'green' as const,
          external: true,
        },
        {
          label: 'About Wijdan & family',
          href: '/wijdan',
          color: 'plum' as const,
        },
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
    title: 'Miraculers for Palestine (MFP)',
    subtitle: 'Art & Writing Charity Campaign for Palestine',
    image: '/assets/images/image02.jpg',
    description:
      'Miraculers for Palestine is an online charity campaign uniting artists, writers, and fans of Miraculous Ladybug to raise critical humanitarian relief and medical funds for families in Palestine, including Wijdan and her family.',
    donationLink:
      'https://www.gofundme.com/f/stand-with-wijdan-help-her-win-the-fight-against-cancer?attribution_id=sl:c29b9e82-8bf4-4107-970f-acee21d9f09c&lang=en_US&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link',
    commissionFormLink: 'https://forms.gle/qRMXcidJjtY5ChEz5',
    raffleFormLink: 'https://forms.gle/XBujmwrz1fDNTeJHA',
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
      question: 'How do commissions work?',
      answer:
        'Submit the commission form with your prompt and creator preference. Once accepted, you donate directly to the designated fundraiser (e.g., Wijdan’s GoFundMe) and submit proof of payment to receive your completed commission.',
    },
    {
      question: 'Where does my money go?',
      answer:
        'You donate directly to verified fundraisers. FFP organizers never touch your funds; we only verify donation receipts and match you with our volunteer creators.',
    },
    {
      question: 'How can I participate as an artist or writer?',
      answer:
        'Join our official FFP Discord server or fill out our creator intake forms during open call periods to offer your services for upcoming campaigns.',
    },
    {
      question: 'Can I donate without ordering a commission or raffle ticket?',
      answer:
        'Yes, absolutely! You can click "Donate Now" on any page to donate directly to the GoFundMe campaign.',
    },
  ],
};


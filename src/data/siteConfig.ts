export interface ButtonItem {
  label: string;
  href: string;
  color: 'coral' | 'crimson' | 'orange' | 'green' | 'plum' | 'brown' | 'cyan' | 'grey' | 'darkblue' | 'lightblue' | 'sand';
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

export interface TeamMemberSocial {
  platform: 'instagram' | 'tumblr' | 'tiktok' | 'ao3' | 'patreon' | 'twitter' | 'link';
  url: string;
  ariaLabel: string;
}

export interface TeamMember {
  name: string;
  role: string;
  socials?: TeamMemberSocial[];
  inactive?: boolean;
}

export const BASE_URL = '/fandomsforpali'

export const siteConfig = {
  title: 'Fandoms for Palestine',
  tagline: 'Uniting fans of all things fiction to help those in Palestine',
  description: 'A guide to all things FFP - JacksonBug, Lead & Director applications, commission forms, raffle forms, and donations.',
  themeColor: '#0D2235',
  url: 'https://fandomsforpali.github.com',

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
        href: 'https://chuffed.org/project/help-mohammedf',
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
      alt: 'Lead & Director Applications - JacksonBug Campaign',
      href: '/currentcampaign',
      external: false,
    },
    leadsButton: {
      label: 'Apply for Leads (Form)',
      href: 'https://forms.gle/DJuDeua58vzmD2fC7',
      color: 'cyan' as const,
      external: true,
    },
    directorsButton: {
      label: 'Apply for Directors (Form)',
      href: 'https://forms.gle/bUA6HhSRoXBhRQfZA',
      color: 'orange' as const,
      external: true,
    },
    campaignSection: {
      pretitle: '- Current campaign -',
      title: 'JACKSONBUG',
      buttons: [
        {
          label: 'Campaign Details & Comic',
          href: '/currentcampaign',
          color: 'green' as const,
        },
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
          color: 'cyan' as const,
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
    title: 'JACKSONBUG',
    subtitle: 'Percy Jackson & Olympians for Palestine Charity Campaign',
    image: '/assets/campaign-jacksonbug/apps_countdown_6days.jpg',
    leadAppUrl: 'https://forms.gle/DJuDeua58vzmD2fC7',
    directorAppUrl: 'https://forms.gle/bUA6HhSRoXBhRQfZA',
    description:
      'JacksonBug School is an Awareness campaign dedicated to educating people about various aspects of Palestinian culture and identity through a crossover of the Miraculous Ladybug and Percy Jackson universes. We’ll be promoting various initiatives throughout the campaign for those who want to donate, alongside a curated educational series and lots of other content as well!',
    rolesOverview:
      'Right now, we are recruiting Directors, Leads, and volunteers across all fandom communities to shape the creative and operational vision for JacksonBug.',
    donationLink:
      'https://chuffed.org/project/help-mohammedf',
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
    name: 'Wijdan',
    title: 'Stand with Wijdan: Help Her Win the Fight Against Cancer',
    image: '/assets/images/image04.jpg',
    gofundmeUrl:
      'https://www.gofundme.com/f/stand-with-wijdan-help-her-win-the-fight-against-cancer?attribution_id=sl:c29b9e82-8bf4-4107-970f-acee21d9f09c&lang=en_US&utm_campaign=man_sharesheet_dash&utm_medium=customer&utm_source=copy_link',
    summary:
      'Wijdan is a 5-year-old Palestinian girl from Gaza who has a rare type of cancer known as a fibrosarcoma. She and her family are facing severe poverty and homelessness on top of the damage inflicted by the genocide, which resulted in inconsistent treatment to her condition. Her health is deteriorating day by day, and her family is waiting for the opportunity to travel abroad to get her the help she needs. Wijdan’s family is from the city of Rafah, and they are composed of 3 daughters, one son, and the parents.',
  },

  mohammed: {
    name: 'Mohammed & Family',
    title: "Urgent: Help Mohammed's Family Survive and Rebuild",
    image: 'https://prod-chuffedcontent.s3.amazonaws.com/assets/LhhpscnC2vxJ7Wtu6zpMUjQzFgdlAaH8yVOHaBOi.jpg',
    chuffedUrl: 'https://chuffed.org/project/help-mohammedf',
    summary:
      "Mohammed is a 23-year-old accounting student from Gaza. Over the course of the ongoing genocide, Mohammed and his family have lost everything: their home was completely bombed and destroyed, his university was demolished, his father was seriously injured, and beloved family members, friends, and their pet cat were lost.",
    story:
      "Now, Mohammed and his family live in a makeshift tent that offers no protection against the harsh winter cold, wind, and rain. With basic food, potable water, and medical care for his father scarce, this fundraiser is a vital lifeline to provide essential winter supplies, food, urgent medical care, and aid toward their safety and future.",
    urgentNeeds: [
      'Medical treatment and rehabilitation for his seriously injured father.',
      'Winterization supplies, warm blankets, and reinforced shelter from the cold.',
      'Family safety and relocation.',
    ],
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
    emeritusTitle: 'Emeritus Team Members',
    emeritusSubtitle: 'Volunteers who have stepped down after helping with previous campaigns.',
    members: [
      {
        name: 'Beetlez (@Beeetlezz)',
        role: 'Head Mod',
        socials: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/beeetlezz/',
            ariaLabel: 'Beetlez on Instagram',
          },
          {
            platform: 'tumblr',
            url: 'https://www.tumblr.com/beeetlezz',
            ariaLabel: 'Beetlez on Tumblr',
          },
          {
            platform: 'tiktok',
            url: 'https://www.tiktok.com/@beetlezart?lang=en',
            ariaLabel: 'Beetlez on TikTok',
          },
        ],
      },
      {
        name: 'Andrea (@trebleclef_zm)',
        role: 'Writing Mod',
        inactive: true,
        socials: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/trebleclef_zm/',
            ariaLabel: 'Andrea on Instagram',
          },
          {
            platform: 'ao3',
            url: 'https://archiveofourown.org/users/trebleclef_zm',
            ariaLabel: 'Andrea on Archive of Our Own',
          },
        ],
      },
      {
        name: 'Yasmeen (@chaton_buginette)',
        role: 'Social Media & PR Mod',
        inactive: true,
        socials: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/chaton_buginette/',
            ariaLabel: 'Yasmeen on Instagram',
          },
        ],
      },
      {
        name: 'Shay (@art_the_f_up)',
        role: 'Art Mod',
        socials: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/art_the_f_up/',
            ariaLabel: 'Shay on Instagram',
          },
          {
            platform: 'tumblr',
            url: 'https://www.tumblr.com/art-the-f-up',
            ariaLabel: 'Shay on Tumblr',
          },
          {
            platform: 'patreon',
            url: 'https://www.patreon.com/artthefup',
            ariaLabel: 'Shay on Patreon',
          },
        ],
      },
      {
        name: 'Cheesyakumas',
        role: 'Graphic design & Organizational Mod',
        inactive: true,
        socials: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/akumatizedcamembert/',
            ariaLabel: 'Cheesyakumas on Instagram',
          },
          {
            platform: 'tumblr',
            url: 'https://cheesyakumas.tumblr.com/',
            ariaLabel: 'Cheesyakumas on Tumblr',
          },
        ],
      },
      {
        name: 'Tuturu',
        role: 'Organizational Mod',
        inactive: true,
      },
      {
        name: 'Kyle (@cardiac-agreste)',
        role: 'Organizational Mod',
        socials: [
          {
            platform: 'tumblr',
            url: 'https://tumblr.com/cardiac-agreste',
            ariaLabel: 'Kyle (cardiac_agreste) on Tumblr',
          },
          {
            platform: 'ao3',
            url: 'https://archiveofourown.org/users/KPG',
            ariaLabel: 'Kyle (cardiac_agreste) on Archive of Our Own',
          },
        ],
      },
      {
        name: 'Lucca the Bug (@spunkyscribbles)',
        role: 'Organizational Mod',
        socials: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/spunkyscribbles/',
            ariaLabel: 'Lucca the Bug on Instagram',
          },
        ],
      },
      {
        name: 'Joey (@rainyram)',
        role: 'Organizational Mod',
        inactive: false,
        socials: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/rainyr.am',
            ariaLabel: 'Joey (rainyr.am) on Instagram',
          }
        ]
      },
      {
        name: 'oleander',
        role: 'Organizational Mod',
        inactive: false,
        socials: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/i_am_a_reader_fear_me_',
            ariaLabel: 'i_am_a_reader_fear_me_ on Instagram',
          }
        ]
      },
      {
        name: 'Qhraine',
        role: 'Organizational Mod',
        inactive: false,
        socials: [
          {
            platform: 'instagram',
            url: 'https://www.instagram.com/qhrarte/',
            ariaLabel: 'Qhraine on Instagram',
          }
        ]
      },
      {
        name: 'Louann',
        inactive: true,
        role: 'General Art Assistant',
      },
    ] as TeamMember[],
  },

  faq: [
    {
      question: 'How do applications for Leads and Directors work?',
      answer:
        'Fill out the respective Google Form (Leads or Directors). Our core organizers review applications and reach out via Discord or email.',
    },
    {
      question: 'Can I still donate if I’m from a foreign country that doesn’t use dollar as money / How is the payment done?',
      answer:
        'Yes, of course! Payment will be proceed through Pay Pal, so everyone from every country in the world can donate if they want to! You will be required to donate the money yourself to a chosen charity or Fundraiser we provide. You will also be asked to provide proof from the website you donated and of your bank account. Once that’s verified, you will be contacted by the artist who wil work with you! It’s like paying for a commission, you’ll receive your art, but by donating the money to people in need, and not to the artist.',
    },
    {
      question: 'How can I cancel or leave the campaign if I ever become incapable of donating?',
      answer:
        'Donation can be a one-time thing only, or as many times as you’d like! You’re not forced to quit the campaign if you ever become unable to donate, and you can always continue to support us regardless!'
    },
    {
      question: 'Do I have to be in the Percy Jackson fandom to volunteer?',
      answer:
        'No! As Shay’s comic highlights, you don’t need to belong to a specific fandom to participate and make a difference. All creators, writers, and community builders passionate about Palestine are welcome.',
    },
    {
      question: 'Where does donation money go?',
      answer:
        'Donors contribute directly to verified campaigns (such as Mohammed’s family fund). FFP organizers never take a cut or hold donations; our mission is purely aid and community connection.',
    },
    {
      question: 'How can I participate as an artist or writer?',
      answer:
        'Join our official FFP Discord server or check our announcement links when creator calls go live for the new campaign.',
    },
    {
      question: 'I was wondering if there were any other campaigns for Palestine along with any campaigns for Ukraine you know of that are still active?',
      answer:
        'We do not know of other campaigns working for the greater good but If anyone is inspired by us, please feel free to create your own for another place in need! We’ll be sure to share any campaigns that come our way :)',
    },
  ],
};

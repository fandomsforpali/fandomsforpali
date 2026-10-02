import contributorsData from './contributors.json';

export interface ContributorSocial {
  platform: string;
  label: string;
  href: string;
}

export interface Contributor {
  name: string;
  pronouns: string;
  socialLinks: ContributorSocial[];
  quote?: string;
  images: string[];
  slots: string[];
  addOns: string[];
  will: string[];
  wont: string[];
}

export const artists: Contributor[] = contributorsData.artists;
export const writers: Contributor[] = contributorsData.writers;


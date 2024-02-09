export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: string;
  footerOnly?: boolean;
};

export type SiteInfo = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks: SocialLink[];
};

const siteInfo: SiteInfo = {
  name: "kentang",
  description: "",
  image: {
    src: "/social.jpg",
    alt: "kentang",
  },
  socialLinks: [],
};

export default siteInfo;

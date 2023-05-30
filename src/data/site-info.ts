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
  name: "Kentang",
  description: "Kent Liusudarso is a developer from Indonesia.",
  image: {
    src: "/social.jpg",
    alt: "Kentang",
  },
  socialLinks: [],
};

export default siteInfo;

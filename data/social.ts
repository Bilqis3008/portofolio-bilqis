export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
  color?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Bilqis3008",
    icon: "Github",
    handle: "@Bilqis3008",
    color: "#2DBA4E"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bilqis-nabila-ummami-23a02b289/",
    icon: "Linkedin",
    handle: "in/bilqis-nabila-ummami-23a02b289/",
    color: "#0A66C2"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/bilqisnblaa/",
    icon: "Instagram",
    handle: "@bilqisnblaa",
    color: "#E4405F"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/085266501830",
    icon: "MessageCircle",
    handle: "+62 85266501830",
    color: "#25D366"
  },
  {
    name: "Email",
    url: "mailto:bilaboknamanya@gmail.com",
    icon: "Mail",
    handle: "bilaboknamanya@gmail.com",
    color: "#EA4335"
  }
];

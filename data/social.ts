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
    url: "https://github.com/muhzuhri",
    icon: "Github",
    handle: "@muhzuhri",
    color: "#2DBA4E"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/muh-zuhri-mubarak-0921972a5/",
    icon: "Linkedin",
    handle: "in/muh-zuhri-mubarak-0921972a5/",
    color: "#0A66C2"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/muhzhrii",
    icon: "Instagram",
    handle: "@muhzuhrii",
    color: "#E4405F"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/082160107638",
    icon: "MessageCircle",
    handle: "+62 82160107638",
    color: "#25D366"
  },
  {
    name: "Email",
    url: "mailto:muhzhrii@gmail.com",
    icon: "Mail",
    handle: "muhzhrii@gmail.com",
    color: "#EA4335"
  }
];

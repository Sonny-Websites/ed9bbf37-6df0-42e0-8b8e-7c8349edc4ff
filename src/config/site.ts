type PresentationResource = {
  name: string;
  href: string;
};

export const siteConfig: {
  name: string;
  email: string;
  whatsappNumber: string;
  instagramUrl: string;
  presentations: PresentationResource[];
} = {
  name: 'S Solutions',
  email: 'info.thessolutions@gmail.com',
  whatsappNumber: '',
  instagramUrl: '',
  presentations: []
};

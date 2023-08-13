export interface Title {
  priority: string | number;
  content: string;
};

export interface Image {
  source: string;
  description: string;
};

export interface Link {
  url: string;
};

export interface SectionPrimary {
  name: string;
  title: Title;
  text: string[];
  image: Image;
  link: {
    apple: Link; 
    google: Link;
  };
};

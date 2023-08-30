export type Title  = {
  priority: string | number;
  content: string;
};

export type Button = {
  content: string;
};

export type SectionSecondary = {
  name: string;
  title: Title;
  texts: string[];
  button: Button;
};

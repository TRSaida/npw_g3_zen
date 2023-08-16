export type Navigation = {
  target: string;
  content: string;
  type: 'anchor' | 'url';
};

export type Header = {
  name: string;
  menuItems: Navigation[];
  langs: string[];
};

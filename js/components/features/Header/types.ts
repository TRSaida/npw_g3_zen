export interface Lang {
  source: string[] ;
};

export interface Navigation {
  target: string;
  content: string;
  type: 'anchor' | 'url';
};

export interface Header {
  name: string;
  menuList: Navigation;
  langs: Lang[];
};

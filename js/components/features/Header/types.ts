export interface Theme { 
  source: string;
} ;

export interface Logo {
  source: string ;
};

export interface Lang {
  source: string ;
};

export interface Burger {
  source: string ;
};

export interface Navigation {
  target: string;
  content: string;
  type: 'anchor' | 'url';
};

export interface Header {
  name: string;
  menuItem: Navigation;
  logo: Logo;
  lang: Lang;
  burger: Burger;
  theme: Theme;
}

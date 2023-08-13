export const data = {
  en: { 
    header: {
      name: 'header',
      menuItems: [
        {
          id: 1,
          type: 'anchor',
          target: 'download',
          content: 'Download',
        },
        {
          id: 2,
          type: 'anchor',
          target: 'warranty',
          content: 'Warranty',
        },
        {
          id: 3,
          type: 'anchor',
          target: 'care',
          content: 'Care',
        },
        {
          id: 4,
          type: 'anchor',
          target: 'cashback',
          content: 'Cashback',
        },
        {
          id: 5,
          type: 'anchor',
          target: 'clients',
          content: 'Clients',
        },  
      ],
      langs: ['en', 'ru'],
    },
    download: {
      name: 'download',
      title: {
      priority: 1,
      content: 'Peaceful shopping mindful money',
      },
      texts: ['See how we can help with making your shopping experience and money management more Zen'],
      image: {
        source: './assets/images/1.jpg',
        description: 'Some description for image 1',
      },
      links: {
        apple: {
          url: 'https://apple.com',
        },
        google: {
          url: 'https://google.com',
        },
      },
    },
  },
};

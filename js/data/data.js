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
      download:{
        name: 'download',
        title: {
          content: 'Peaceful shopping mindful money',
          priority: 1,
        },
        texts: [
          'See how we can help with making your shopping experience and money management more ZEN.'
        ],
        links: {
          apple:{
            source:'https://www.apple.com',
            description: 'apple__logo',
          },
          google:  {
            source:'https://play.google.com/',
            description: 'google__logo',
          },
        },
        image: {
          source: './assets/images/2.jpg',
          description: 'download__image',
        }
      },
      warranty: {
        name: 'warranty',
        title: {
            content: '1-year warranty boost',
            priority: 1,
        },
        texts: [
          'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
          'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.'
        ],
        image: {
          source: './assets/images/3.jpg',
          description: 'warranty__img',
        },
      },
   },
  };

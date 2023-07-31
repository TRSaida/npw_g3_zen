export const data = {
  header: {
    name: 'header',
    btnlogo: {
      URL: '#',
      image: {
        source: 'assets/icon/3.png',
        description: 'zen-zero effort nonbank',
      },
    },
    menu: [
      {
        target: 'download',
        content: 'Download',
        type: 'anchor',
      },
      {
        target: 'warranty',
        content: 'Warranty',
        type: 'anchor',
      },
      {
        target: 'care',
        content: 'Care',
        type: 'anchor',
      },
      {
        target: 'cashback',
        content: 'Cashback',
        type: 'anchor',
      },
      {
        target: 'clients',
        content: 'Clients',

        type: 'anchor',
      },
    ],
    btnlang: {
      URL: '#',
      content: 'EN',
    },
    btntheme: {
      image: {
        source: 'assets/icons/moon.png',
        description: 'nighttheme',
      },
    }
  },
  download: {
    name: 'download',
    title: {
      priority: 1,
      content: 'Peaceful shopping mindful money',
    },
    texts: ['See how we can help with making your shopping experience and money management more Zen'],
    image: {
      source: 'assets/images/1.jpg',
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
  warranty: {
    name: 'warranty',
    title: {
      priority: 2,
      content: '1-year warranty boost',
    },
    texts: [
      'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
      'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.'
    ],
    image: {
      source:
        'assets/images/2.jpg',
      description: 'some description for image 2 ',
    }
  },
  care: {
    name: 'care',
    title: {
      priority: 2,
      content: 'Zen CARE',
    },
    texts: [
      'Shopping online is usually a delightful experience. Until it\'s not.',
      'Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.',
      'But, here comes ZEN Care: a free, built-in shopping protection.',
    ],
    image: {
      source: 'assets/images/3.jpg',
      description: 'some description for image 3 ',
    }
  },
  cashback: {
    name: 'cashback',
    title: {
      priority: 2,
      content: 'and cashback!',
    },
    texts: [
      'It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.',
      'We gave it a thought and made cashback way more friendly.',
      'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.',
    ],
    btn: {
      URL: '#'
    },
  },
  clients: {
    name: 'clients',
    title: {
      priority: 2,
      content: 'Clients',
    },
    brands: [
      {
        source: 'assets/clients/1.svg',
        description: 'ROSEGAL',
      },
      {
        source: 'assets/clients/2.svg',
        description: 'Gearbest',
      },
      {
        source: 'assets/clients/3.svg',
        description: 'allegro',
      },
      {
        source: 'assets/clients/4.svg',
        description: 'AliExpress',
      },
      {
        source: 'assets/clients/5.svg',
        description: 'Booking.com',
      },
      {
        source: 'assets/clients/6.svg',
        description: 'MediaMarkt',
      },
      {
        source: 'assets/clients/7.svg',
        description: 'RTVeuroAGD',
      },
      {
        source: 'assets/clients/8.svg',
        description: 'GROUPON',
      },
    ],
  },
  footer: {
    columns: [
      {
        name: 'Learn',
        title: {
          priority: 3,
          content: 'Learn',
        },
        links: [
          {
            URL: 'https//:example.com',
            content: 'Help center',
          },
          {
            URL: 'https//:example.com',
            content: 'Join ZEN team',
          },
          {
            URL: 'https//:example.com',
            content: 'Privacy Policy',
          },
          {
            URL: 'https//:example.com',
            content: 'Cookies',
          },
          {
            URL: 'https//:example.com',
            content: 'Terms of use',
          },
        ]
      },
      {
        name: 'Discover',
        title: {
          priority: 3,
          content: 'Discover',
        },
        links: [
          {
            URL: 'https//:example.com',
            content: 'For developers',
          },
          {
            URL: 'https//:example.com',
            content: 'Apple Pay',
          },
          {
            URL: 'https//:example.com',
            content: 'Google Pay',
          },
        ]
      },
      {
        name: 'Offer',
        title: {
          priority: 3,
          content: 'Offer',
        },
        links: [
          {
            URL: 'https//:example.com',
            content: 'Business',
          },
          {
            URL: 'https//:example.com',
            content: 'Personal',
          },
        ]
      },
      {
        name: 'Language',
        title: {
          priority: 3,
          content: 'Language',
        },
        links: [
          {
            URL: 'https//:example.com',
            content: 'English',
          },
          {
            URL: 'https//:example.com',
            content: 'Polish',
          },
        ]
      },
      {
        name: 'Follow us',
        title: {
          priority: 3,
          content: 'Follow us',
        },
        links: [
          {
            source: 'assets/icon/1.png',
            description: 'Follow us',
          },
        ]
      },
      {
        name: 'Contact',
        title: {
          priority: 3,
          content: 'Contact',
        },
        links: [
          {
            addres: 'hello@zen.com',
          },
        ]
      },
      {
        name: 'text',
        title: {
          priority: 3,
          content: 'text',
        },
        image: {
          source: 'assets/icon/2.png',
          description: 'zen-zero effort nonbank',
        },
        info: [
          'ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
          'Registration number of the company 304749651, VAT ID LT100011714916.',
          'License of electronic money institutions number LB000457.',
          'Share capital 2.185.000,00 EUR.',
          'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
          'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.'
        ],
        image: {
          source: 'assets/icon/3.png',
          description: 'zen-zero effort nonbank',
        },
        image: {
          source: 'assets/icon/3.png',
          description: 'DSS certified',
        },
      }
    ]
  }
};

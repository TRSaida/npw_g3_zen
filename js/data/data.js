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
        source: '../assets/images/3.jpg',
        description: 'warranty__img',
      },
    },
    care: {
      name: 'care',
      title: {
          content: 'ZEN Care',
          priority: 1,
      },
      texts: [
        "Shopping online is usually a delightful experience. Until it's not.",
        'Until something you buy, proves to be faulty, missing or a totally wrong item, you’re in for long product return procedures.',
        'But, here comes ZEN Care: a free, built-in shopping protection.'

      ],
      image: {
        source: 'assets/images/3.jpg',
        description: 'some description for image 3 ',
      }
    },
    cashback: {
      name: 'cashback',
      title: {
        content: 'and cashback!',
        priority: 1,
      },
      texts: [
        'It saves a little bit of money while you’re shopping, but in many cases it takes ages to get anything out of it.',
        'We gave it a thought and made cashback way more friendly.',
        'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.'
      ],
      button: {
        content: 'Order a consultation'
      },
    },
    clients: [
      {
        source:'../assets/clients/1.svg',
        description:'Rosegal'
      },
      {
        source:'../assets/clients/2.svg',
        description:'Gearbest'
      },
      {
        source:'../assets/clients/3.svg',
        description:'allegro'
      },
      {
        source:'../assets/clients/4.svg',
        description:'AliExpress'
      },
      {
        source:'../assets/clients/5.svg',
        description:'Booking'
      },
      {
        source:'../assets/clients/6.svg',
        description:'MediaMarkt'
      },
      {
        source:'../assets/clients/7.svg',
        description:'Rtv'
      },
      {
        source:'../assets/clients/8.svg',
        description:'Groupon'
      },
    ],
    footer: {
      columns: [
        {
          title: 'Learn',
          links: [
            {
              content: 'Help center',
              source: '#',
            },
            {
              content: 'Join ZEN team',
              source: '#',
            },
            {
              content: 'Privacy Policy',
              source: '#',
            },
            {
              content: 'Cookies',
              source: '#',
            },
            {
              content: 'Terms of use',
              source: '#',
            }
          ]
        },
        {
          title: 'Discover',
          links: [
            {
              content: 'For developers',
              sourse: '#',
            },
            {
              content: 'Apple Pay',
              sourse: '#',
            },
            {
              content: 'Google Pay',
              sourse: '#',
            },
          ]
        },
        {
          title: 'Offer',
          links: [
            {
              content: 'Business',
              sourse: '#',
            },
            {
              content: 'Personal',
              sourse: '#',
            },
          ]
        },
        {
          title: 'Language',
          links: [
            {
              content: 'English',
              sourse: '#',
            },
            {
              content: 'Polish',
              sourse: '#',
            },
          ]
        },
        {
          title: 'Follow us',
          links: [
            {
              description: 'In',
              sourse: '../assets/icon/1.svg',
            },

          ]
        },
        {
          title: 'Contact',
          links: [
            {
              content: 'hello@zen.com',
              sourse: 'hello@zen.com',
            },

          ]
        },
      ],
      logo: {
        source:'../assets/icon/2.svg',
        description:'footerLogo'
      },
      text: [
        'ZEN is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
        'Registration number of the company 304749651, VAT ID LT100011714916.',
        'License of electronic money institutions number LB000457.',
        'Share capital 2.185.000,00 EUR.',
        'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
        'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.',
      ],
      icon: {
        source: '../assets/icon/logo.svg',
        description: 'footerIcon'
      }
    },
    },
  ru: {
    header: {
      logo: {},
      menuItems: [
        {
          id: 1,
          type: 'anchor',
          target: 'download',
          content: 'Скачать',
        },
        {
          id: 2,
          type: 'anchor',
          target: 'warranty',
          content: 'Гарантия',
        },
        {
          id: 3,
          type: 'anchor',
          target: 'care',
          content: 'Забота',
        },
        {
          id: 4,
          type: 'anchor',
          target: 'cashback',
          content: 'Возврат наличных',
        },
        {
          id: 5,
          type: 'anchor',
          target: 'clients',
          content: 'Клиенты',
        },  
      ],
      langs: ['en', 'ru'],
    },
    download:{
      title: {
        content: 'Спокойный шопинг с заботой о деньгах',
        priority: 1,
      },
      text: [
        'Посмотрите, как мы можем помочь сделать ваши покупки и управление денежными средствами более ZEN.'
      ],
      links: [
        {
          sourse:'https://www.apple.com/ru/app-store/',
          description: 'apple__logo',
        },
        {
          sourse:'https://play.google.com/',
          description: 'google__logo',
        },
      ],
      image: {
        source: './../assets/img/2.jpg',
        description: 'download__image',
      }
    },
    warranty:{
      title: {
          content: 'Повышение гарантии на 1 год',
          priority: 1,
      },
      text: [
        'Карты ZEN имеют очень удобную функцию, которая поможет вам, когда ваши электронные устройства начнут выходить из строя после окончания стандартной гарантии, что довольно часто.',
        'При покупке любой электроники с помощью карты ZEN shopping Mastercard гарантия на них продлевается на один год. Как это работает? Это просто так. Автоматически.'
      ],
      image: {
        source: '../assets/images/1.jpg',
        description: 'warranty__img',
      },
    },
    care:{
      title: {
          content: 'ZEN Care',
          priority: 1,
      },
      text: [
        "Покупки в Интернете, как правило, доставляют удовольствие.",
        'До тех пор, пока что-то, что вы покупаете, не окажется неисправным, отсутствующим или совершенно неправильным товаром, вас ждут длительные процедуры возврата товара.',
        'Но c ZEN Care: бесплатная встроенная защита покупок.'
      ],
      image: {
        source: 'assets/images/3.jpg',
        description: 'some description for image 3 ',
      },
      },
    cashback:{
      title: {
        content: 'и кэшбэк!',
        priority: 1,
      },
    text: [
        'Это экономит немного денег, пока вы ходите по магазинам, но во многих случаях требуется целая вечность, чтобы получить что-то из этого.',
        'Мы подумали и сделали кэшбэк более удобным.',
        'До 14% от суммы, которую вы тратите с помощью ZEN Mastercard ®, будет зачислено на ваш счет сразу после покупки.'
      ],
      button: {
        content: 'Заказать консультацию',
      },
    },
    clients: [
      {
        source:'../assets/clients/1.svg',
        description:'Rosegal'
      },
      {
        source:'../assets/clients/2.svg',
        description:'Gearbest'
      },
      {
        source:'../assets/clients/3.svg',
        description:'allegro'
      },
      {
        source:'../assets/clients/4.svg',
        description:'AliExpress'
      },
      {
        source:'../assets/clients/5.svg',
        description:'Booking'
      },
      {
        source:'../assets/clients/6.svg',
        description:'MediaMarkt'
      },
      {
        source:'../assets/clients/7.svg',
        description:'Rtv'
      },
      {
        source:'../assets/clients/8.svg',
        description:'Groupon'
      },
    ],
    footer:{
      columns: [
        {
          title: 'Для изучения',
          links: [
            {
              content: 'Центр помощи',
              source: '#',
            },
            {
              content: 'Присоединяйтесь к команде ЗЕН',
              source: '#',
            },
            {
              content: 'политика конфиденциальности',
              source: '#',
            },
            {
              content: 'Cookies',
              source: '#',
            },
            {
              content: 'Условия эксплуатации',
              source: '#',
            }
          ]
        },
        {
          title: 'Обнаружение',
          links: [
            {
              content: 'Для разработчиков',
              sourse: '#',
            },
            {
              content: 'Apple Pay',
              sourse: '#',
            },
            {
              content: 'Google Pay',
              sourse: '#',
            },
          ]
        },
        {
          title: 'Предложение',
          links: [
            {
              content: 'Для бизнеса',
              sourse: '#',
            },
            {
              content: 'Для частных лиц',
              sourse: '#',
            },
          ]
        },
        {
          title: 'Язык',
          links: [
            {
              content: 'English',
              sourse: '#',
            },
            {
              content: 'Polski',
              sourse: '#',
            },
          ]
        },
        {
          title: 'Подписывайтесь на нас',
          links: [
            {
              description: 'In',
              sourse: '../assets/icon/1.svg',
            },

          ]
        },
        {
          title: 'Контакты',
          links: [
            {
              content: 'hello@zen.com',
              sourse: 'hello@zen.com',
            },

          ]
        },
      ],
      logo: {
        source:'../assets/icon/2.svg',
        description:'footerLogo'
       },
      text: [
        'ZEN является лицензированным финансовым учреждением под надзором Центрального банка Литвы, одобренным Европейским банковским управлением для 31 страны.',
        'Регистрационный номер компании 304749651, ИНН LT100011714916.',
        'License of electronic money institutions number LB000457.',
        'Лицензия учреждений электронных денег номер LB000457.',
        'Адрес компании: Mėsinių g. 5, LT-01133, Вильнюс, Литва.',
        'Офис продаж: ул. Эмили Плятер 53, 00-113 Варшава, Польша.',
      ],
      icon: {
        source: '../assets/icon/3.svg',
        description: 'footerIcon'
      }
    },
  },
 };


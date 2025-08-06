import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      home: "Home",
      about: "About",
      tours: "Tours",
      contacts: "Contacts",
      
      // Hero Section
      heroTitle: "Discover Amazing Destinations",
      heroSubtitle: "Experience the world's most beautiful places with our expert travel services",
      
      // Destinations
      destinations: "Popular Destinations",
      istanbul: "Istanbul",
      antalya: "Antalya",
      dubai: "Dubai",
      sharmElSheikh: "Sharm El-Sheikh",
      goThere: "Go There",
      exploreMore: "Explore More",
      population: "Population",
      territory: "Territory",
      avgPrice: "AVG Price",
      
      // Weekly Offers
      weeklyOffers: "Best Weekly Offers In Each City",
      weeklyOffersDesc: "Discover the best weekly offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.",
      checkIns: "Check Ins",
      person: "person",
      dealIncludes: "Deal Includes:",
      daysTrip: "5 Days Trip > Hotel Included",
      airplaneBill: "Airplane Bill Included",
      dailyPlaces: "Daily Places Visit",
      makeReservation: "Make a Reservation",
      
      // Visa Support
      visaSupport: "Visa support",
      visaSupportDesc: "Experience stress-free travel with our expert visa support. We provide seamless assistance and comprehensive guidance, ensuring a smooth journey.",
      visaBenefits: "Benefits of our Visa Support service:",
      bestPrices: "Best Prices",
      shortProcessing: "Short Processing Time",
      trustworthy: "Trustworthy Assistance",
      
      // Countries
      china: "China",
      hongKong: "Hong Kong",
      european: "European(Schengen)",
      india: "India",
      japan: "Japan",
      saudiArabia: "Saudi Arabia",
      oman: "Oman",
      usa: "USA",
      england: "England",
      canada: "Canada",
      europeanUnion: "European Union",
      
      // Travel Services
      exploreDestinations: "Explore Destinations with Ease",
      exploreDestinationsDesc: "Find the best deals on railway and airplane tickets in each city, carefully selected for you.",
      railwayTickets: "Cheap Railway Tickets With Us",
      railwayDesc: "Embark on a railway adventure and explore destinations worldwide. Whether it's the picturesque landscapes, bustling cities, or cultural gems, our rail services offer a unique and comfortable way to traverse the globe.",
      airTravel: "Discover Exciting Air Travel Deals",
      airTravelDesc: "Embark on an airborne adventure and explore destinations worldwide. Whether it's the breathtaking landscapes, vibrant cities, or cultural treasures, our airline services provide a convenient and exhilarating way to navigate the globe.",
      
      // Countries Section
      visitCountries: "Visit One Of Our Countries Now",
      visitCountriesDesc: "Discover the best offers in each city, curated just for you. Immerse yourself in a world of savings and indulge in unparalleled experiences.",
      needDirections: "Need Directions ?",
      
      // Best Locations
      bestLocations: "Best Locations",
      bookDeal: "Book Prefered Deal Here",
      
      // Contact
      makeReservationTitle: "Make Your Reservation",
      discoverMore: "Discover More",
      phoneCall: "Make a Phone Call",
      contactEmail: "Contact Us via Email",
      visitOffices: "Visit Our Offices",
      reservationForm: "Make Your Reservation Through This Form",
      
      // CTA
      ctaTitle: "Ready for Your Next Adventure?",
      ctaSubtitle: "Join thousands of satisfied travelers and discover the world with ZamonTour",
      happyClients: "Happy Clients",
      yearsExperience: "Years Experience",
      support: "Support",
      contactUs: "Contact Us",
      
      // Footer
      footerDescription: "Your trusted travel partner for unforgettable journeys around the world.",
      quickLinks: "Quick Links",
      allRightsReserved: "All rights reserved.",
      privacyPolicy: "Privacy Policy",
      termsOfService: "Terms of Service",
      
      // Destination descriptions
      dubaiDesc: "Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene.",
      antalyaDesc: "Antalya is the fastest-growing city in Turkey, and tourists from around the world are discovering its fabulous mix of great beaches and traditional Turkish culture.",
      sharmDesc: "Sharm El Sheikh is the center of tourism action in Sinai Peninsula and it has the world top diving sites.",
      istanbulDesc: "Istanbul is the most populous city in Turkey and its cultural, economic and historic center. It is located in north-western part of Turkey."
    }
  },
  ru: {
    translation: {
      // Navigation
      home: "Главная",
      about: "О нас",
      tours: "Туры",
      contacts: "Контакты",
      
      // Hero Section
      heroTitle: "Откройте удивительные направления",
      heroSubtitle: "Познакомьтесь с самыми красивыми местами мира с нашими экспертными туристическими услугами",
      
      // Destinations
      destinations: "Популярные направления",
      istanbul: "Стамбул",
      antalya: "Анталья",
      dubai: "Дубай",
      sharmElSheikh: "Шарм-эль-Шейх",
      goThere: "Поехать туда",
      exploreMore: "Узнать больше",
      population: "Население",
      territory: "Территория",
      avgPrice: "Средняя цена",
      
      // Weekly Offers
      weeklyOffers: "Лучшие еженедельные предложения в каждом городе",
      weeklyOffersDesc: "Откройте для себя лучшие еженедельные предложения в каждом городе, подобранные специально для вас. Погрузитесь в мир экономии и насладитесь непревзойденными впечатлениями.",
      checkIns: "Регистраций",
      person: "человек",
      dealIncludes: "Предложение включает:",
      daysTrip: "5-дневная поездка > Отель включен",
      airplaneBill: "Авиабилеты включены",
      dailyPlaces: "Ежедневные экскурсии",
      makeReservation: "Забронировать",
      
      // Visa Support
      visaSupport: "Визовая поддержка",
      visaSupportDesc: "Испытайте беззаботное путешествие с нашей экспертной визовой поддержкой. Мы предоставляем бесшовную помощь и всестороннее руководство.",
      visaBenefits: "Преимущества нашей визовой поддержки:",
      bestPrices: "Лучшие цены",
      shortProcessing: "Быстрое оформление",
      trustworthy: "Надежная помощь",
      
      // Countries
      china: "Китай",
      hongKong: "Гонконг",
      european: "Европейская(Шенген)",
      india: "Индия",
      japan: "Япония",
      saudiArabia: "Саудовская Аравия",
      oman: "Оман",
      usa: "США",
      england: "Англия",
      canada: "Канада",
      europeanUnion: "Европейский Союз",
      
      // Travel Services
      exploreDestinations: "Исследуйте направления с легкостью",
      exploreDestinationsDesc: "Найдите лучшие предложения на железнодорожные и авиабилеты в каждом городе, тщательно отобранные для вас.",
      railwayTickets: "Дешевые железнодорожные билеты с нами",
      railwayDesc: "Отправьтесь в железнодорожное приключение и исследуйте направления по всему миру. Будь то живописные пейзажи, шумные города или культурные жемчужины.",
      airTravel: "Откройте захватывающие предложения авиаперелетов",
      airTravelDesc: "Отправьтесь в воздушное приключение и исследуйте направления по всему миру. Будь то захватывающие пейзажи, яркие города или культурные сокровища.",
      
      // Countries Section
      visitCountries: "Посетите одну из наших стран сейчас",
      visitCountriesDesc: "Откройте для себя лучшие предложения в каждом городе, подобранные специально для вас. Погрузитесь в мир экономии и насладитесь непревзойденными впечатлениями.",
      needDirections: "Нужны направления ?",
      
      // Best Locations
      bestLocations: "Лучшие места",
      bookDeal: "Забронировать предпочтительное предложение здесь",
      
      // Contact
      makeReservationTitle: "Сделайте бронирование",
      discoverMore: "Узнать больше",
      phoneCall: "Позвонить по телефону",
      contactEmail: "Связаться с нами по электронной почте",
      visitOffices: "Посетить наши офисы",
      reservationForm: "Сделайте бронирование через эту форму",
      
      // CTA
      ctaTitle: "Готовы к следующему приключению?",
      ctaSubtitle: "Присоединяйтесь к тысячам довольных путешественников и откройте мир с ZamonTour",
      happyClients: "Довольных клиентов",
      yearsExperience: "Лет опыта",
      support: "Поддержка",
      contactUs: "Связаться с нами",
      
      // Footer
      footerDescription: "Ваш надежный партнер в путешествиях для незабываемых поездок по всему миру.",
      quickLinks: "Быстрые ссылки",
      allRightsReserved: "Все права защищены.",
      privacyPolicy: "Политика конфиденциальности",
      termsOfService: "Условия обслуживания",
      
      // Destination descriptions
      dubaiDesc: "Дубай - город и эмират в Объединенных Арабских Эмиратах, известный роскошными покупками, ультрасовременной архитектурой и яркой ночной жизнью.",
      antalyaDesc: "Анталья - самый быстрорастущий город в Турции, и туристы со всего мира открывают для себя его сказочное сочетание великолепных пляжей и традиционной турецкой культуры.",
      sharmDesc: "Шарм-эль-Шейх - центр туристической активности на Синайском полуострове и имеет лучшие в мире места для дайвинга.",
      istanbulDesc: "Стамбул - самый густонаселенный город Турции и ее культурный, экономический и исторический центр."
    }
  },
  uz: {
    translation: {
      // Navigation
      home: "Bosh sahifa",
      about: "Biz haqimizda",
      tours: "Turlar",
      contacts: "Kontaktlar",
      
      // Hero Section
      heroTitle: "Ajoyib yo'nalishlarni kashf eting",
      heroSubtitle: "Bizning mutaxassis sayohat xizmatlarimiz bilan dunyoning eng go'zal joylarini boshdan kechiring",
      
      // Destinations
      destinations: "Mashhur yo'nalishlar",
      istanbul: "Istanbul",
      antalya: "Antalya",
      dubai: "Dubay",
      sharmElSheikh: "Sharm El-Sheikh",
      goThere: "U yerga boring",
      exploreMore: "Ko'proq o'rganing",
      population: "Aholi soni",
      territory: "Hudud",
      avgPrice: "O'rtacha narx",
      
      // Weekly Offers
      weeklyOffers: "Har bir shahardagi eng yaxshi haftalik takliflar",
      weeklyOffersDesc: "Siz uchun maxsus tanlangan har bir shahardagi eng yaxshi haftalik takliflarni kashf eting. Tejash dunyosiga sho'ng'ing va tengsiz tajribalardan zavqlaning.",
      checkIns: "Ro'yxatdan o'tishlar",
      person: "kishi",
      dealIncludes: "Taklif o'z ichiga oladi:",
      daysTrip: "5 kunlik sayohat > Mehmonxona kiritilgan",
      airplaneBill: "Samolyot chiptasi kiritilgan",
      dailyPlaces: "Kundalik joylarni ziyorat qilish",
      makeReservation: "Bron qiling",
      
      // Visa Support
      visaSupport: "Viza yordami",
      visaSupportDesc: "Bizning mutaxassis viza yordamimiz bilan stresssiz sayohatni boshdan kechiring. Biz muammosiz yordam va keng qamrovli yo'l-yo'riq taqdim etamiz.",
      visaBenefits: "Bizning viza yordam xizmatimizning afzalliklari:",
      bestPrices: "Eng yaxshi narxlar",
      shortProcessing: "Qisqa qayta ishlash vaqti",
      trustworthy: "Ishonchli yordam",
      
      // Countries
      china: "Xitoy",
      hongKong: "Gonkong",
      european: "Yevropa(Shengen)",
      india: "Hindiston",
      japan: "Yaponiya",
      saudiArabia: "Saudiya Arabistoni",
      oman: "Ummon",
      usa: "AQSH",
      england: "Angliya",
      canada: "Kanada",
      europeanUnion: "Yevropa Ittifoqi",
      
      // Travel Services
      exploreDestinations: "Yo'nalishlarni osonlik bilan o'rganing",
      exploreDestinationsDesc: "Har bir shaharda temir yo'l va samolyot chiptalariga eng yaxshi takliflarni toping, siz uchun ehtiyotkorlik bilan tanlangan.",
      railwayTickets: "Biz bilan arzon temir yo'l chiptalar",
      railwayDesc: "Temir yo'l sarguzashtiga chiqing va butun dunyo bo'ylab yo'nalishlarni o'rganing. Manzarali landshaftlar, gavjum shaharlar yoki madaniy marvaridlar bo'ladimi.",
      airTravel: "Qiziqarli havo sayohati takliflarini kashf eting",
      airTravelDesc: "Havo sarguzashtiga chiqing va butun dunyo bo'ylab yo'nalishlarni o'rganing. Hayajonli landshaftlar, jonli shaharlar yoki madaniy xazinalar bo'ladimi.",
      
      // Countries Section
      visitCountries: "Hozir bizning mamlakatlarimizdan birini tashrif buyuring",
      visitCountriesDesc: "Siz uchun maxsus tanlangan har bir shahardagi eng yaxshi takliflarni kashf eting. Tejash dunyosiga sho'ng'ing va tengsiz tajribalardan zavqlaning.",
      needDirections: "Yo'nalishlar kerakmi ?",
      
      // Best Locations
      bestLocations: "Eng yaxshi joylar",
      bookDeal: "Afzal ko'rilgan taklifni shu yerda bron qiling",
      
      // Contact
      makeReservationTitle: "Bronlashni amalga oshiring",
      discoverMore: "Ko'proq kashf eting",
      phoneCall: "Telefon qo'ng'irog'i qiling",
      contactEmail: "Elektron pochta orqali biz bilan bog'laning",
      visitOffices: "Bizning ofislarimizga tashrif buyuring",
      reservationForm: "Ushbu forma orqali bronlash amalga oshiring",
      
      // CTA
      ctaTitle: "Keyingi sarguzashtingizga tayyormisiz?",
      ctaSubtitle: "Minglab mamnun sayohatchilar qatoriga qo'shiling va ZamonTour bilan dunyoni kashf eting",
      happyClients: "Mamnun mijozlar",
      yearsExperience: "Yillik tajriba",
      support: "Qo'llab-quvvatlash",
      contactUs: "Biz bilan bog'laning",
      
      // Footer
      footerDescription: "Butun dunyo bo'ylab unutilmas sayohatlar uchun ishonchli sayohat hamkoringiz.",
      quickLinks: "Tezkor havolalar",
      allRightsReserved: "Barcha huquqlar himoyalangan.",
      privacyPolicy: "Maxfiylik siyosati",
      termsOfService: "Xizmat ko'rsatish shartlari",
      
      // Destination descriptions
      dubaiDesc: "Dubay - Birlashgan Arab Amirliklari shahri va amirligi bo'lib, hashamatli xarid qilish, ultra zamonaviy me'morchilik va jonli tungi hayot bilan mashhur.",
      antalyaDesc: "Antalya - Turkiyaning eng tez rivojlanayotgan shahri bo'lib, butun dunyo turistlari uning ajoyib plyajlari va an'anaviy turk madaniyatining ajoyib aralashmasini kashf etmoqdalar.",
      sharmDesc: "Sharm El-Sheikh - Sinay yarim orolidagi turizm faoliyatining markazi va dunyodagi eng yaxshi sho'ng'in joylariga ega.",
      istanbulDesc: "Istanbul - Turkiyaning eng gavjum shahri va uning madaniy, iqtisodiy va tarixiy markazi."
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false // react already does escaping
    }
  });

export default i18n;

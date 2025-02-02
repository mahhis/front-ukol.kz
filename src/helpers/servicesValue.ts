type ServiceDetails = {
    title: string;
    price: number;

    seoTitle: string;
    description: string;
    seoH1: string;

    seoDescription: string;
    faq: any
    
  }
  
  export const serviceMapping: Record<string, Record<string, ServiceDetails>> = {
    injections: {
      intramuscularly: {
        title: 'Внутримышечный укол',
        price: 5000,
        description: 'Профессиональное выполнение внутримышечных инъекций опытными медсёстрами с соблюдением всех медицинских протоколов. Идеально для послеоперационного ухода, введения витаминов, антибиотиков и вакцин. Используем только стерильные одноразовые материалы, обеспечиваем безболезненное введение препаратов.',
   
        seoTitle: 'Внутримышечные уколы и инъекции на дому в Алматы: цена, вызов медсестры',
        seoDescription: 'Сделать внутримышечные инъекции на дому в Алматы по доступной цене. Вызов медсестры для уколов платно: профессионально, анонимно, срочный выезд. Платные медицинские услуги круглосуточно.',
        seoH1: 'Внутримышечные уколы на дому в Алматы',

        faq: [
          { 
            question: 'Какие препараты можно вводить внутримышечно на дому?',
            answer: 'Наши медсёстры проводят внутримышечные инъекции антибиотиков, витаминных комплексов, обезболивающих и других назначенных препаратов. Все материалы стерильны, а дозировка согласуется с вашим лечащим специалистом.'
          },
          {
            question: 'Как подготовиться к внутримышечному уколу в домашних условиях?',
            answer: 'Достаточно обеспечить хорошо освещённое место и подготовить назначение от вашего специалиста (при наличии). Медсестра привезёт всё необходимое: стерильные шприцы, антисептики и препараты.'
          },
          {
            question: 'Можно ли сделать внутримышечную инъекцию ребенку на дому?',
            answer: 'Да, наши медсёстры имеют опыт работы с детьми: используют специальные техники введения и сверхтонкие иглы для минимизации дискомфорта.'
          },
        ]
      },
      intravenous: {
        title: 'Внутривенный укол',
        price: 5000,
        description: 'Безопасное внутривенное введение лекарственных препаратов с индивидуальным подбором дозировки. Профессиональная установка катетеров, инфузионная терапия при обезвоживании, антибиотикотерапия. Контроль жизненных показателей во время процедуры.',
   
        seoTitle: 'Уколы и инъекции внутривенно на дому в Алматы: цена, вызов медсестры',
        seoDescription: 'Вызов медсестры для внутривенных инъекций: срочный выезд, профессионально, анонимно. Внутривенные уколы на дому в Алматы по доступной цене. Платные медицинские услуги круглосуточно от Ukol.kz',
        seoH1: 'Уколы внутривенно на дому в Алматы',

        faq: [
          { 
            question: 'Какие показания для внутривенных инъекций на дому?',
            answer: 'Внутривенное введение препаратов необходимо при инфузионной терапии, антибиотикотерапии, детокс-программах или экстренном восстановлении водно-электролитного баланса.'
          },
          {
            question: 'Как проходит установка капельницы в домашних условиях?',
            answer: 'Медсестра подберёт оптимальное место для введения катетера, проведёт антисептическую обработку и будет контролировать скорость введения препарата на протяжении всей процедуры.'
          },
          {
            question: 'Какие растворы используются для внутривенных инфузий?',
            answer: 'Применяем физраствор, глюкозу, витаминные коктейли, детокс-составы и другие препараты по назначению. Состав терапии согласовывается индивидуально.'
          },
        ]
      },
      subcutaneous: {
        title: 'Подкожный укол',
        price: 5000,
        description: 'Безболезненное введение препаратов подкожно с использованием ультратонких игл. Особенно востребовано для инсулинотерапии при диабете, введения гепарина, вакцин против гриппа и аллерген-специфической иммунотерапии (АСИТ).',
        
        seoTitle: 'Подкожные уколы и инъекции на дому в Алматы: цена, вызов медсестры',
        seoDescription: 'Сделать подкожные инъекции на дому в Алматы по доступной цене. Вызов медсестры для уколов платно: профессионально, анонимно, срочный выезд. Платные медицинские услуги круглосуточно.',
        seoH1: 'Подкожные уколы на дому в Алматы',

        faq: [
          { 
          question: 'Как правильно делать подкожные инъекции инсулина?',
          answer: 'Медсёстры используют шприц-ручки с ультратонкими иглами, обрабатывают зону введения антисептиком и контролируют дозировку согласно вашему протоколу лечения.'
        },
        {
          question: 'Какие особенности подкожных инъекций на дому?',
          answer: 'Для подкожного введения выбираются зоны с развитой подкожно-жировой клетчаткой (живот, бедро). Процедура занимает 5-7 минут и проводится с минимальным дискомфортом.'
        },
      ]
      }
    },


    drips: {
      poisoning: {
        title: 'Капельница от отравления',
        price: 15000,
        description: 'Скорая детоксикация организма при пищевых и алкогольных отравлениях. Инфузионные растворы для восстановления электролитного баланса, сорбенты, гепатопротекторы. Предупреждаем осложнения, снимаем интоксикационный синдром.',
        
        seoTitle: 'Капельница от отравления на дому в Алматы: срочный вызов медсестры',
        seoDescription: 'Срочная помощь при отравлении: капельницы на дому в Алматы. Вызов медсестры для постановки капельницы, детоксикация, доступные цены. Профессиональный уход, все специалисты с медицинским образованием.',
        seoH1: 'Капельница от отравления на дому в Алматы',
        
        faq: [
          { 
            question: 'Как быстро помогает капельница при пищевом отравлении?',
            answer: 'Инфузионная терапия начинает действовать сразу: восстанавливает водный баланс, снижает интоксикацию и нормализует давление. Облегчение наступает в течение 20-40 минут.'
          },
          {
            question: 'Какие препараты входят в состав детокс-капельницы?',
            answer: 'Используем сорбенты, гепатопротекторы, растворы электролитов и противорвотные средства. Состав подбирается исходя из симптоматики.'
          },
        ]
      },
      
      custom: {
        title: 'Капельница',
        price: 7000,
        description: 'Персонализированные инфузионные программы: витаминные коктейли (Мильгамма, Глутаргин), антиоксидантные комплексы, растворы для улучшения метаболизма. Составляем курс лечения с учётом диагноза и анализов пациента.',
        
        seoTitle: 'Капельницы на дому в Алматы — услуги медсестры поставить капельницу, низкие цены',
        seoDescription: 'Вызов медсестры на дом для постановки капельницы в Алматы. Только сертифицированный медицинский персонал: срочный выезд, капельницы на дому по доступной цене. Платные медицинские услуги, срочный выезд, работаем круглосуточно',
        seoH1: 'Капельницы на дому в Алматы',
        
        faq: [
          { 
            question: 'Какие витаминные комплексы можно вводить внутривенно?',
            answer: 'Популярные варианты: Мильгамма (группа B), глутаргин для детокса, магниевые составы против судорог и антиоксидантные коктейли с витамином C.'
          },
          {
            question: 'Как подобрать капельницу для укрепления иммунитета?',
            answer: 'Медсестра согласует с вами цели терапии, историю болезней и текущее состояние. На основе этого предложит оптимальный витаминный или иммуномодулирующий состав.'
          },
        ]
      }
    },
    nurse: {
      old: {
        title: 'Уход за пожилым человеком',
        price: 20000,
        description: 'Комплексный уход за возрастными пациентами: помощь в приёме лекарств, сопровождение к врачу, профилактика пролежней, измерение давления и сахара. Организация реабилитации после инсультов и переломов.',
        
        seoTitle: 'Уход за больными пожилого возраста на дому в Алматы — стоимость услуг',
        seoDescription: 'Профессиональный уход за стариками и больными пожилого возраста на дому в Алматы. Медсестры для капельниц, уколов, реабилитации после инсульта. Все специалисты с медицинским образованием',
        seoH1: 'Уход за больными пожилого возраста на дому в Алматы',
        
        faq: [
          { 
            question: 'Какие процедуры включает уход за пожилыми на дому?',
            answer: 'Помощь в гигиене, контроль приёма лекарств, измерение давления, профилактика пролежней и сопровождение на прогулках. Составляем индивидуальный план ухода.'
          },
          {
            question: 'Как организовать реабилитацию после инсульта дома?',
            answer: 'Медсёстры проводят пассивную гимнастику, массаж для предотвращения контрактур, помогают с разработкой речи и когнитивными упражнениями.'
          },
        ]
      },
      bed: {
        title: 'Уход за лежачим человеком',
        price: 20000,
        description: 'Специализированный уход с использованием противопролежневых матрасов, санацией ран, катетеризацией мочевого пузыря. Кормление через зонд, гигиенические процедуры, профилактика тромбозов.',
        
        seoTitle: 'Уход за лежачими больными на дому в Алматы: цены, платный медицинский уход',
        seoDescription: 'Профессиональный уход за лежачими и тяжелобольными пациентами на дому в Алматы. Медицинский уход, гигиена, уколы и инъекции. Доступные цены, специалисты с медицинским образованием',
        seoH1: 'Уход за лежачими больными на дому в Алматы',
        
        faq: [
          { 
            question: 'Какие методы профилактики пролежней применяются на дому?',
            answer: 'Используем противопролежневые матрасы, регулярно меняем положение тела, обрабатываем кожу спецсредствами и проводим массаж критических зон.'
          },
          {
            question: 'Как осуществляется гигиена лежачих больных?',
            answer: 'Проводим бережное подмывание, смену подгузников, обработку складок кожи и профилактику опрелостей с применением медицинских антисептиков.'
          },
        ],
      },
      event: {
        title: 'Медсопровождение мероприятий',
        price: 20000,
        description: 'Обеспечение медицинской безопасности на корпоративах, свадьбах, спортивных соревнованиях. В бригаде: врач-реаниматолог и медсёстры с аптечкой экстренной помощи и портативным оборудованием.',
        
        seoTitle: 'Медицинское сопровождение культурно-массовых и спортивных мероприятий в Алматы',
        seoDescription: 'Организация медицинского сопровождения культурно-массовых и спортивных мероприятий в Алматы. Услуги врачей и медсестер: в бригаде врач-реаниматолог и медсёстры с аптечкой экстренной помощи и портативным оборудованием. Доверьте здоровье гостей профессионалам – ukol.kz',
        seoH1: 'Медицинское сопровождение мероприятий в Алматы',
        
        faq: [
          { 
            question: 'Какие услуги включает медицинское сопровождение мероприятий?',
            answer: 'Дежурство медперсонала с аптечкой, оказание первой помощи при травмах, контроль состояния участников и транспортировка в стационар при необходимости.'
          },
          {
            question: 'Какое оборудование используют медики на мероприятиях?',
            answer: 'В комплекте: портативные дефибрилляторы, кислородные баллоны, наборы для остановки кровотечений и реанимации, носилки.'
          },
        ]
      },
    },
    detox: {
      alcohol: {
        title: 'Алкогольная детоксикация',
        price: 25000,
        description: 'Комплексное выведение из запоя с использованием капельниц на основе физраствора, гепатопротекторов и седативных препаратов. Купирование абстинентного синдрома, восстановление работы печени и ЦНС.',
        
        seoTitle: 'Алкогольная детоксикация на дому в Алматы: срочный вызов нарколога',
        seoDescription: 'Профессиональная детоксикация от алкоголя на дому в Алматы. Срочный выезд нарколога, капельницы, круглосуточная помощь. Доступные цены, анонимно, гарантия результата – ukol.kz',
        seoH1: 'Алкогольная детоксикация на дому в Алматы',

        faq: [
          { 
            question: 'Какие препараты применяют для вывода из запоя на дому?',
            answer: 'Используем седативные средства, гепатопротекторы, растворы для регидратации и витаминные комплексы. Все препараты вводятся внутривенно для быстрого эффекта.'
          },
          {
            question: 'Как проходит детоксикация при алкогольной интоксикации?',
            answer: 'Медик оценивает состояние пациента, ставит капельницу для очистки крови и восстановления сил, при необходимости использует аппаратные методики.'
          },
        ]
      },
      drug: {
        title: 'Наркотическая детоксикация',
        price: 25000,
        description: 'Экстренное выведение токсинов при передозировках и острых интоксикациях. Используем современные антидоты, аппаратную чистку крови (плазмаферез), поддерживающую терапию для восстановления организма.',
        
        seoTitle: 'Детоксикация наркозависимых на дому в Алматы. Срочный выезд нарколога',
        seoDescription: 'Профессиональная детоксикация наркозависимых на дому в Алматы от ukol.kz. Срочный выезд нарколога, очищение организма от наркотиков, анонимно и безопасно. Доступные цены, круглосуточная помощь',
        seoH1: 'Детоксикация наркозависимых на дому в Алматы',

        faq: [
          { 
            question: 'Какие методы применяют при детоксикации от наркотиков?',
            answer: 'Используем антидоты, инфузионную терапию, аппаратную очистку крови и препараты для стабилизации психического состояния. Процедуры проводятся под наблюдением.'
          },
          {
            question: 'Как оказать экстренную помощь при передозировке?',
            answer: 'Немедленно вызовите нашего специалиста. До его приезда обеспечьте пациенту доступ воздуха. Медик введёт антидот и проведёт реанимационные мероприятия.'
          },
        ]
      },
    },
    bandage: {
      regular: {
        title: 'Перевязка',
        price: 7000,
        description: 'Стерильная обработка послеоперационных швов, перевязки гнойных ран, дренирование абсцессов. Используем современные перевязочные материалы: альгинатные повязки, гидрогели, антисептические покрытия.',
        
        seoTitle: 'Вызов медсестры на дом для перевязки после операции в Алматы',
        seoDescription: 'Профессиональные перевязки на дому в Алматы от ukol.kz. Вызов медсестры для перевязки после операции, хирургические перевязки. Услуги платной медицинской помощи на дому по доступным ценам',
        seoH1: 'Перевязки на дому в Алматы',
        
        faq: [
          { 
            question: 'Какие материалы используют для перевязки трофических язв?',
            answer: 'Применяем атравматичные повязки с серебром, альгинатные покрытия и гидрогелевые матриксы для ускорения регенерации тканей.'
          },
          {
            question: 'Как обрабатывают послеоперационные швы на дому?',
            answer: 'Медсёстры аккуратно снимают старую повязку, дезинфицируют область шва, накладывают стерильный материал и дают рекомендации по уходу.'
          }
        ]
      },
    },
  };
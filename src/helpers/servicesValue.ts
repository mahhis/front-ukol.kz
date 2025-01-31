type ServiceDetails = {
    title: string;
    price: number;
    description: string;
    seoTitle: string;
    seoDescription: string;
    keywords: string;
    faq: any
    
  }
  
  export const serviceMapping: Record<string, Record<string, ServiceDetails>> = {
    injections: {
      intramuscularly: {
        title: 'Внутримышечный укол',
        price: 5000,
        description: 'Профессиональное выполнение внутримышечных инъекций опытными медсёстрами с соблюдением всех медицинских протоколов. Идеально для послеоперационного ухода, введения витаминов, антибиотиков и вакцин. Используем только стерильные одноразовые материалы, обеспечиваем безболезненное введение препаратов.',
        seoTitle: 'Внутримышечные уколы на дому 💉 Вызов медсестры 24/7 | [Город]',
        seoDescription: 'Квалифицированные внутримышечные инъекции на дому с выездом в течение часа! Опытные медсёстры с медицинской лицензией. Стерильные инструменты, безболезненное введение препаратов для взрослых и детей. Закажите услугу онлайн или по телефону!',
        keywords: 'укол на дому, внутримышечные инъекции, вызов медсестры, медицинские услуги на дому, введение вакцин, уколы антибиотиков',
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
        seoTitle: 'Внутривенные уколы и капельницы 💊 Выезд медсестры | [Город]',
        seoDescription: 'Экспресс-помощь при необходимости внутривенных инъекций! Капельницы для восстановления водного баланса, детокс-программы, витаминные коктейли. Работаем с пациентами любого возраста круглосуточно.',
        keywords: 'внутривенные уколы, капельница на дому, инфузионная терапия, установка катетера, детокс капельница',
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
        seoTitle: 'Подкожные уколы на дому 🩺 Медсестра с выездом | [Город]',
        seoDescription: 'Профессиональные подкожные инъекции инсулина и других препаратов на дому. Используем современные шприц-ручки и расходные материалы европейского качества. Срочный выезд в течение 60 минут!',
        keywords: 'подкожные уколы, инъекции инсулина, введение гепарина, АСИТ терапия, выезд медсестры',
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
        seoTitle: 'Капельница при отравлении 🚑 Детоксикация на дому | [Город]',
        seoDescription: 'Экстренная помощь при острых отравлениях: выезд бригады с капельницей за 40 минут! Используем сертифицированные препараты для быстрого вывода токсинов. Работаем анонимно 24/7.',
        keywords: 'капельница при отравлении, детоксикация на дому, помощь при интоксикации, выезд нарколога, капельница от похмелья',
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
        seoTitle: 'Индивидуальные капельницы 💎 Восстановление организма | [Город]',
        seoDescription: 'VIP-капельницы для укрепления иммунитета, восстановления после болезней и стрессов. В состав включены витамины группы B, магний, аминокислоты и ноотропные препараты. Закажите консультацию!',
        keywords: 'капельница на дому, витаминные капельницы, внутривенные вливания, капельница для иммунитета, оздоровительные капельницы',
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
        seoTitle: 'Сиделка для пожилых 👵 Профессиональный уход | [Город]',
        seoDescription: 'Квалифицированный уход за пожилыми людьми с деменцией, болезнью Паркинсона и возрастными изменениями. Подбор индивидуальной программы ухода, медицинское сопровождение 24/7.',
        keywords: 'уход за пожилыми, сиделка для пенсионера, медицинский уход на дому, реабилитация после инсульта, помощь при деменции',
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
        seoTitle: 'Уход за лежачими больными 🛌 Профессиональные сиделки | [Город]',
        seoDescription: 'Полный цикл медицинского обслуживания лежачих пациентов: от смены белья до реабилитационной гимнастики. Работаем с послеоперационными больными и пациентами с тяжёлыми диагнозами.',
        keywords: 'уход за лежачими больными, сиделка для лежачего, профилактика пролежней, уход за тяжелобольными, медицинский уход',
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
        seoTitle: 'Медицинское сопровождение мероприятий 🚨 Дежурные врачи | [Город]',
        seoDescription: 'Профессиональная медицинская страховка вашего мероприятия: реанимационное оборудование, экстренная помощь при травмах и острых состояниях, транспортировка в стационар при необходимости.',
        keywords: 'медицинское сопровождение, дежурный врач на мероприятии, скорая помощь на событиях, медицинская страховка мероприятий',
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
        seoTitle: 'Вывод из запоя на дому 🚫 Алкогольная детоксикация | [Город]',
        seoDescription: 'Экстренная помощь при алкогольной интоксикации: анонимный выезд нарколога, капельницы для восстановления организма, гарантия результата. Работаем круглосуточно без выходных.',
        keywords: 'вывод из запоя, алкогольная детоксикация, капельница от алкоголя, экстренная наркологическая помощь',
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
        seoTitle: 'Наркотическая детоксикация ⚠️ Срочный выезд врача | [Город]',
        seoDescription: 'Профессиональная помощь при наркотической интоксикации: быстрая детоксикация, стабилизация состояния, психологическая поддержка. Полная анонимность и конфиденциальность.',
        keywords: 'наркотическая детоксикация, вывод из состояния интоксикации, экстренная наркологическая помощь, детокс при передозировке',
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
        seoTitle: 'Медицинские перевязки на дому 🩹 Обработка ран | [Город]',
        seoDescription: 'Профессиональная перевязка любых типов ран на дому: трофические язвы, ожоги, послеоперационные швы. Применяем методики активного дренажа и атравматичные перевязочные системы.',
        keywords: 'перевязка на дому, обработка ран, медицинские перевязки, уход за послеоперационными швами, лечение трофических язв',
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
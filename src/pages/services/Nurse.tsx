import Head from 'preact-head';
import OldImg from '../../../img/services/nurse/old.svg';
import BedImg from '../../../img/services/nurse/bed.svg';
import BagImg from '../../../img/services/nurse/bag.svg';
import Header from 'components/Header';
import Footer from 'components/Footer';
import FAQ from 'components/FAQ';
import Order from 'components/Order';
import dayjs from 'dayjs';
import { useEffect } from 'preact/hooks';
import { useAtom } from 'jotai';
import currentOrderAtom from 'atoms/currentOrder';

const faq = [
  {
    question: 'Как быстро может приехать медсестра?',
    answer:
      'Наши квалифицированные медсестры готовы выехать в течение 1-2 часов после заявки. Работаем круглосуточно 7 дней в неделю, включая праздничные дни.',
  },
  {
    question: 'Какие процедуры входят в уход за лежачим больным?',
    answer:
      'Полный гигиенический уход, профилактика пролежней, кормление, контроль приема лекарств, медицинские процедуры по назначению врача, сопровождение на обследования.',
  },
  {
    question: 'Можно ли оформить услуги на ночное время?',
    answer:
      'Да, мы предоставляем услуги как в дневное, так и в ночное время. Стоимость ночного дежурства (с 22:00 до 8:00) +20% к базовой ставке.',
  },
  {
    question: 'Какая квалификация у ваших медсестер?',
    answer:
      'Все специалисты имеют среднее медицинское образование, сертификаты по сестринскому делу и не менее 3 лет практического опыта. Регулярно проходят повышение квалификации.',
  },
  {
    question: 'Что входит в дежурство на мероприятиях?',
    answer:
      'Контроль состояния участников, первая медицинская помощь, измерение давления и пульса, помощь при хронических заболеваниях, сопровождение в туалет для маломобильных.',
  },
];

export default function NurseServices() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  useEffect(() => {
    // Динамически обновляем содержимое <head>
    document.title = "Медсестры на дом - ukol.kz";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "ukol.kz - услуги профессиональных медсестер на дому. Капельницы, инъекции, перевязки, уход за пациентами. Квалифицированные специалисты, безопасность и комфорт.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "медсестра на дом, услуги медсестры, уход за больными, капельницы на дому, инъекции, перевязки, патронажная медсестра, медицинская помощь на дому";
    document.head.appendChild(metaKeywords);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.setAttribute('property', 'og:title');
    metaOgTitle.content = "ukol.kz - Медсестры на дом";
    document.head.appendChild(metaOgTitle);

    const metaOgDescription = document.createElement('meta');
    metaOgDescription.setAttribute('property', 'og:description');
    metaOgDescription.content = "Профессиональные услуги медсестер на дому от ukol.kz. Инъекции, капельницы, перевязки и уход за больными. Опытные специалисты, гарантия качества.";
    document.head.appendChild(metaOgDescription);

    const metaOgUrl = document.createElement('meta');
    metaOgUrl.setAttribute('property', 'og:url');
    metaOgUrl.content = "https://ukol.kz/services/nurse";
    document.head.appendChild(metaOgUrl);

    const metaOgImage = document.createElement('meta');
    metaOgImage.setAttribute('property', 'og:image');
    metaOgImage.content = "https://ukol.kz/images/nurse-preview.jpg";
    document.head.appendChild(metaOgImage);

    const linkCanonical = document.createElement('link');
    linkCanonical.rel = "canonical";
    linkCanonical.href = "https://ukol.kz/services/nurse";
    document.head.appendChild(linkCanonical);

    // Очистка при размонтировании компонента
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(metaKeywords);
      document.head.removeChild(metaOgTitle);
      document.head.removeChild(metaOgDescription);
      document.head.removeChild(metaOgUrl);
      document.head.removeChild(metaOgImage);
      document.head.removeChild(linkCanonical);
    };
  }, []);

  useEffect(() => {
    const setServiceDetails = async () => {
      setCurrentOrder({
        _id: '',
        title: '',
        address: '',
        flat: '',
        floor: '',
        amount: 0,
        phone: '',
        options: {
          isChild: false,
          isNeedInjection: false,
          isNeedWoman: false,
          isNeedPharmacy: false,
          isHaveDoctorsAppointment: false,
          isWithDrugsCocktail: false,
          isPremiumIntoxication: false,
          isWithDressingMaterial: false,
          isWithMaterialsPoisoning: false,
          photoURL: '',
          photo: undefined,
          daysForNurse: 0,
          message: '',
        },
        arrivalTime: {
          hours: dayjs().add(1, 'hour').format('HH'),
          minutes: dayjs().format('mm'),
          date: dayjs().format('YYYY-MM-DD'),
          isNearestHour: true
        },
        status: '',
      });


    };
    setServiceDetails();
  },[]);
  return (
    <main>

      <Header/>

      {/* Hero Section */}
      <section className="mb-6 mt-2 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-my-green/30 rounded-xl p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-4">
               Опытный медицинский уход от профильных медсестер
            </h1>
            <p className="text-lg text-black mb-6">
                Круглосуточные услуги по медицинскому уходу на дому. Опытные специалисты 
                с полным комплектом оборудования для профессиональной помощи.
            </p>
          </div>
        </div>
      </section>

      {/* Секции услуг */}
      <section className="space-y-16 px-4 text-black">
        {/* Уход за лежачими */}
        <div id="bedridden" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={BedImg} alt="Лежачие больные" className="w-12 h-12" />
               Уход за лежачим человеком
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Основные обязанности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Профилактика и обработка пролежней</li>
                  <li>Гигиенические процедуры полного цикла</li>
                  <li>Контроль жизненных показателей</li>
                  <li>Введение лекарств и инъекций</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Включено в стоимость:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Смена постельного белья</li>
                  <li>Использование противопролежневых средств</li>
                  <li>3-разовое кормление</li>
                  <li>Ежедневный медосмотр</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <div>
                <span className="text-xl font-bold block">20,000₸/8 часов</span>
              </div>
              <a 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg "
                href='/services/nurse/bed'>
                Перейти
              </a>
            </div>
          </div>
        </div>

        {/* Уход за пожилыми */}
        <div id="elderly" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={OldImg} alt="Пожилые люди" className="w-12 h-12" />
              Уход за пожилым человеком
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Основные обязанности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Сопровождение на прогулках</li>
                  <li>Помощь в бытовых вопросах</li>
                  <li>Контроль приема лекарств</li>
                  <li>Психологическая поддержка</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Дополнительные услуги:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Сопровождение в поликлинику</li>
                  <li>Выполнение медицинских назначений</li>
                  <li>Организация досуга</li>
                  <li>Ночное дежурство</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <div>
                <span className="text-xl font-bold block">20,000₸/8 часов</span>
              </div>
              <a 
                className="bg-my-green  text-black font-semibold px-6 py-2 rounded-lg "
                href='/services/nurse/old'>
                Перейти
              </a>
            </div>
          </div>
        </div>

        {/* Дежурство на мероприятиях */}
        <div id="events" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={BagImg} alt="Мероприятия" className="w-12 h-12" />
              Дежурство на мероприятиях
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Обязанности медсестры:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Экстренная медицинская помощь</li>
                  <li>Контроль состояния участников</li>
                  <li>Обработка ран и травм</li>
                  <li>Транспортировка при необходимости</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Для каких мероприятий:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Корпоративные события</li>
                  <li>Спортивные соревнования</li>
                  <li>Свадьбы и массовые гуляния</li>
                  <li>Детские праздники</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <div>
                <span className="text-xl font-bold block">20,000₸ / 8 часов</span>
              </div>
              <a 
                className="bg-my-green  text-black font-semibold px-6 py-2 rounded-lg"
                href='/services/nurse/event'>
                Перейти
              </a>
            </div>
          </div>
        </div>
      </section>

      <Order/> 


      {/* Преимущества */}
      <div className="space-y-16 px-4 text-black">
        <div className="rounded-lg p-6 my-8 bg-my-green/30">
          <h2 className="text-2xl font-bold mb-6">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">🏥 Медицинская лицензия</h3>
              <p>Все услуги оказываются по официальному договору</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">⏰ 24/7 Доступность</h3>
              <p>Круглосуточная служба поддержки и выезд</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">📚 Профессиональное обучение</h3>
              <p>Ежегодные курсы повышения квалификации персонала</p>
            </div>
          </div>
        </div>
      </div>

      <FAQ faqItems={faq}/>
      <Footer/>
    </main>
  );
}
import Head from 'preact-head';
import DripImg from '../../../img/services/drips/drip.svg';
import PoisonImg from '../../../img/services/drips/poison.svg';
import Header from 'components/Header';
import Footer from 'components/Footer';
import FAQ from 'components/FAQ';
import Order from 'components/Order';
import dayjs from 'dayjs';
import currentOrderAtom from 'atoms/currentOrder';
import { useAtom } from 'jotai';
import { useEffect } from 'preact/hooks';

const faq = [
  {
    question: 'Как быстро действует капельница?',
    answer:
      'Эффект наступает через 20-40 минут после начала процедуры. Полное действие развивается в течение 2-4 часов в зависимости от состава раствора.',
  },
  {
    question: 'Можно ли комбинировать разные коктейли?',
    answer:
      'Да, наши врачи подберут оптимальную комбинацию препаратов для достижения максимального эффекта с учетом вашего состояния.',
  },
];

export default function Drips() {
  const [currentOrder, setCurrentOrder] = useAtom(currentOrderAtom);
  useEffect(() => {
    // Динамически обновляем содержимое <head>
    document.title = "Капельницы на дому - ukol.kz";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "ukol.kz - профессиональные капельницы на дому. Лечение похмелья, восстановление после болезни, поддержка организма, выведение токсинов. Безопасно, качественно, анонимно.";
    document.head.appendChild(metaDescription);

    const metaKeywords = document.createElement('meta');
    metaKeywords.name = "keywords";
    metaKeywords.content = "капельницы на дому, капельницы от похмелья, восстановительные капельницы, очищение организма, инфузионная терапия, вывод токсинов, капельница при отравлении";
    document.head.appendChild(metaKeywords);

    const metaOgTitle = document.createElement('meta');
    metaOgTitle.setAttribute('property', 'og:title');
    metaOgTitle.content = "ukol.kz - Капельницы на дому";
    document.head.appendChild(metaOgTitle);

    const metaOgDescription = document.createElement('meta');
    metaOgDescription.setAttribute('property', 'og:description');
    metaOgDescription.content = "Профессиональные капельницы на дому от ukol.kz. Восстановление, выведение токсинов и поддержка здоровья под контролем специалистов.";
    document.head.appendChild(metaOgDescription);

    const metaOgUrl = document.createElement('meta');
    metaOgUrl.setAttribute('property', 'og:url');
    metaOgUrl.content = "https://ukol.kz/services/drips";
    document.head.appendChild(metaOgUrl);

    const metaOgImage = document.createElement('meta');
    metaOgImage.setAttribute('property', 'og:image');
    metaOgImage.content = "https://ukol.kz/images/drips-preview.jpg";
    document.head.appendChild(metaOgImage);

    const linkCanonical = document.createElement('link');
    linkCanonical.rel = "canonical";
    linkCanonical.href = "https://ukol.kz/services/drips";
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
  }, );
  return (
    <main>
      <Header/>

      {/* Hero Section */}
      <section className="mb-6 mt-2 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-my-green/30 rounded-xl p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-4">
              Все виды капельниц на дому
            </h1>
            <p className="text-lg text-black mb-6">
              Профессиональная помощь при проведении капельниц любой сложности. Квалифицированные медсестры выполнят процедуру в комфортных домашних условиях с использованием современных и безопасных медицинских препаратов.
            </p>
          </div>
        </div>
      </section>

      {/* Секции для каждого типа капельниц */}
      <section className="space-y-16 px-4 text-black">
    
        <div id="custom" className="scroll-mt-16">
            <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <img src={DripImg} alt="Индивидуальные" className="w-10 h-10" />
                Капельница
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Использование предоставленного вами раствора и препаратов</li>
                    <li>Точный контроль состояния пациента во время процедуры</li>
                    <li>Профессиональное подключение капельницы с соблюдением стандартов</li>
                    <li>Гарантия полной стерильности и безопасности</li>
                </ul>
                </div>
                <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Показания:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Восстановление после нагрузок или заболеваний</li>
                    <li>Реабилитация после оперативных вмешательств</li>
                    <li>Хронические состояния, требующие капельной терапии</li>
                    <li>Укрепление организма в рамках комплексного лечения</li>
                </ul>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
                <span className="text-xl font-bold">7,000₸</span>
                <a 
                   className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                   href='/services/drips/custom'>
                Перейти
                </a>
            </div>
            </div>
        </div>
       
        <div id="poisoning" className="scroll-mt-16">
            <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <img src={PoisonImg} alt="Отравление" className="w-10 h-10" />
                Капельница от отравления
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                <h3 className="text-xl font-semibold mb-4">Состав терапии:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Сорбенты нового поколения</li>
                    <li>Регидратационные растворы</li>
                    <li>Ферментные комплексы</li>
                    <li>Спазмолитики</li>
                </ul>
                </div>
                <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Действие:</h3>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Быстрая детоксикация</li>
                    <li>Восстановление ЖКТ</li>
                    <li>Предупреждение обезвоживания</li>
                    <li>Снятие болевого синдрома</li>
                </ul>
                </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
                <span className="text-xl font-bold">15,000₸</span>
                <a 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                href='/services/drips/poisoning'>
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
          <h2 className="text-2xl font-bold mb-6">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">🏥 Медицинский контроль</h3>
              <p>Постоянный мониторинг состояния во время процедуры</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">📋 Индивидуальный протокол</h3>
              <p>Подбор состава инфузии по вашим потребностям</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">⏱ Экономия времени</h3>
              <p>Полноценная терапия без посещения клиники</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-16 px-4 overflow-x-auto">
  <div className="text-black rounded-lg p-2 my-8">
    <h2 className="text-2xl font-bold mb-6">Сравнение видов капельниц</h2>
    <table className="w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-3 text-left">Параметр</th>
          <th className="p-3">Капельница</th>
         
          <th className="p-3">Капельница от отравления</th>
        </tr>
      </thead>
      <tbody>
        {/* Основное назначение */}
        <tr>
          <td className="p-3 font-semibold">Основное назначение</td>
          <td className="p-3">Восстановление после нагрузок, заболеваний или операций</td>
          <td className="p-3">Лечение пищевых или химических отравлений</td>
        </tr>

        {/* Состав раствора */}
        <tr className="bg-gray-50">
          <td className="p-3 font-semibold">Состав раствора</td>
          <td className="p-3">Используются предоставленные вами препараты или индивидуальный подбор</td>
          <td className="p-3">Сорбенты, регидратационные растворы, ферментные комплексы, спазмолитики</td>
        </tr>

        {/* Продолжительность */}
        <tr>
          <td className="p-3 font-semibold">Продолжительность</td>
          <td className="p-3">1-3 часа</td>
          <td className="p-3">1-2 часа</td>
        </tr>

        {/* Средняя стоимость */}
        <tr className="bg-gray-50">
          <td className="p-3 font-semibold">Стоимость</td>
          <td className="p-3">7,000₸</td>
          <td className="p-3">15,000₸</td>
        </tr>

        {/* Основной эффект */}
        <tr>
          <td className="p-3 font-semibold">Основной эффект</td>
          <td className="p-3">Восстановление организма, укрепление иммунитета</td>
          <td className="p-3">Детоксикация, восстановление ЖКТ, предупреждение обезвоживания</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

     
      <FAQ faqItems={faq}/>
      <Footer/>
    </main>
  );
}
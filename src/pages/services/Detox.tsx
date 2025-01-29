import Head from 'preact-head';
import AlcoholDetoxImg from '../../../img/services/detox/alcohol.svg';
import DrugDetoxImg from '../../../img/services/detox/drug.svg';
import Header from 'components/services/Header';
import Footer from 'components/Footer';
import FAQ from 'components/FAQ';
import { navigate } from 'wouter-preact/use-browser-location';

const faq = [
  {
    question: 'Как быстро приезжает специалист для детоксикации?',
    answer:
      'Наши специалисты приезжают в течение 40-60 минут после заявки. Мы работаем круглосуточно, включая выходные и праздничные дни. Время приезда зависит от вашего местоположения и текущей загрузки специалистов.',
  },
  {
    question: 'В чем отличие алкогольной и наркотической детоксикации?',
    answer:
      'Алкогольная детоксикация направлена на выведение этанола и его метаболитов, стабилизацию сердечной деятельности. Наркотическая детоксикация требует особого подхода в зависимости от типа вещества, включает специфические антидоты и более длительный мониторинг состояния.',
  },
  {
    question: 'Какие препараты используются при детоксикации?',
    answer:
      'Мы используем сертифицированные растворы для регидратации, витаминные комплексы, гепатопротекторы, седативные препараты. Все медикаменты подбираются индивидуально с учетом состояния пациента и противопоказаний.',
  },
  {
    question: 'Можно ли проводить детоксикацию при хронических заболеваниях?',
    answer:
      'Да, наши медики имеют опыт работы с пациентами с сопутствующими заболеваниями. Перед процедурой проводится экспресс-диагностика, при необходимости корректируется состав капельницы.',
  },

  {
    question: 'Оказываете ли вы помощь при запое?',
    answer:
      'Да, мы специализируемся на выведении из запоя любой продолжительности. Процедура включает инфузионную терапию, восстановление электролитного баланса и симптоматическое лечение.',
  },
  {
    question: 'Гарантируете ли вы анонимность?',
    answer:
      'Абсолютно. Все процедуры проводятся конфиденциально, медицинская документация не передается третьим лицам.',
  },
];

export default function Detox() {
  return (
    <main>
      <Head>
        <title>Детоксикация на дому | Экстренное вытрезвление и вывод из запоя</title>
        <meta 
          name="description" 
          content="Профессиональная детоксикация на дому: алкогольная и наркотическая. Круглосуточный выезд нарколога, анонимно, безопасные методики очищения организма." 
        />
        <meta 
          name="keywords" 
          content="детоксикация на дому, вывод из запоя, экстренное вытрезвление, наркотическая детоксикация, скорая наркологическая помощь, капельница от запоя" 
        />
      </Head>
      <Header/>

      {/* Hero Section */}
      <section className="mb-6 mt-2 px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-my-green/30 rounded-xl p-6">
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-black mb-4">
              Экстренная детоксикация на дому
            </h1>
            <p className="text-lg text-black mb-6">
              Круглосуточный выезд опытного специалиста для быстрого очищения организма 
              от алкоголя или наркотических веществ. Восстановление организма за 1-3 часа.
            </p>
          </div>
        </div>
      </section>

      {/* Навигация по типам детоксикации */}
      <nav className="mb-12 text-black grid md:grid-cols-3 gap-4 px-4">
        <p className="text-xl font-bold">
          Виды детоксикации:
        </p>
        <a href="#alcohol" className="border-2 border-black p-4 rounded-lg flex items-center gap-3">
          <img src={AlcoholDetoxImg} alt="Алкогольная" className="w-8 h-8" />
          <span className="font-semibold">Алкогольная детоксикация</span>
        </a>
        <a href="#drug" className="border-2 border-black p-4 rounded-lg flex items-center gap-3">
          <img src={DrugDetoxImg} alt="Наркотическая" className="w-8 h-8" />
          <span className="font-semibold">Наркотическая детоксикация</span>
        </a>
      </nav>

      {/* Секции детоксикации */}
      <section className="space-y-16 px-4 text-black">
        {/* Алкогольная */}
        <div id="alcohol" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={AlcoholDetoxImg} alt="Алкогольная" className="w-10 h-10" />
              Алкогольная детоксикация
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Инфузионная терапия физрастворами с витаминами</li>
                  <li>Восстановление электролитного баланса</li>
                  <li>Профилактика осложнений (отек мозга, остановка сердца)</li>
                  <li>Купирование абстинентного синдрома</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Показания:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Запой любой продолжительности</li>
                  <li>Острое алкогольное отравление</li>
                  <li>Подготовка к кодированию</li>
                  <li>Похмельный синдром с осложнениями</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <span className="text-xl font-bold">25,000₸</span>
              <button 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg hover:bg-my-green-dark transition"
                onClick={() => {navigate('/services/detox/alcohol')}}
                    >
                Заказать
              </button>
            </div>
          </div>
        </div>

        {/* Наркотическая */}
        <div id="drug" className="scroll-mt-16">
          <div className="border-2 border-black rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <img src={DrugDetoxImg} alt="Наркотическая" className="w-10 h-10" />
              Наркотическая детоксикация
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Особенности:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Ускоренное выведение токсинов</li>
                  <li>Специфические антидоты при опиатной интоксикации</li>
                  <li>Стабилизация психоэмоционального состояния</li>
                  <li>Круглосуточный мониторинг в первые сутки</li>
                </ul>
              </div>
              
              <div className="bg-my-green/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Показания:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Передозировка психоактивными веществами</li>
                  <li>Ломка (абстинентный синдром)</li>
                  <li>Комплексное лечение зависимости</li>
                  <li>Экстренное выведение из состояния интоксикации</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t-2 border-black pt-4">
              <span className="text-xl font-bold">25,000₸</span>
              <button 
                className="bg-my-green text-black font-semibold px-6 py-2 rounded-lg"
                onClick={() => {navigate('/services/detox/drug')}}
                >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <div className="space-y-16 px-4 text-black">
        <div className="rounded-lg p-6 my-8 bg-my-green/30">
          <h2 className="text-2xl font-bold mb-6">Наши преимущества</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">⏱ Круглосуточный выезд</h3>
              <p>Медик приедет в течение часа в любое время суток</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">🩺 Оборудование экспертного класса</h3>
              <p>Портативные ЭКГ, пульсоксиметры, экспресс-тесты</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-bold mb-2">🔒 Полная анонимность</h3>
              <p>Никакой постановки на учет и передач данных</p>
            </div>
          </div>
        </div>
      </div>

      {/* Таблица сравнения */}
      <div className="space-y-16 px-4 overflow-x-auto">
        <div className="text-black rounded-lg p-2 my-8">
          <h2 className="text-2xl font-bold mb-6">Сравнение методов детоксикации</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Параметр</th>
                <th className="p-3">Алкогольная</th>
                <th className="p-3">Наркотическая</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 font-semibold">Средняя продолжительность</td>
                <td className="p-3">2-4 часа</td>
                <td className="p-3">4-8 часов</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="p-3 font-semibold">Основной метод</td>
                <td className="p-3">Инфузионная терапия</td>
                <td className="p-3">УБОД (при опиатах)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Критический срок оказания</td>
                <td className="p-3">До 72 часов после последнего приема</td>
                <td className="p-3">До 12-24 часов</td>
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
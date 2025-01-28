import { useLocation } from 'wouter-preact';
import { trackClarityEvent } from 'App';
import StomachImg from '/img/service/stomach.svg';
import BedImg from '/img/service/bed.svg';
import OldImg from '/img/service/old.svg';
import PlacentalImg from '/img/service/placental.svg';
import InjectionImg from '/img/service/injection.svg';
import DripImg from '/img/service/drip.svg';
import DoctorImg from '/img/service/doctor.svg';
import NurseImg from '/img/service/nurse.svg';
import CocktailImg from '/img/service/cocktail.svg';
import BandagenImg from '/img/service/bandage.svg';
import PillsImg from '/img/service/pills.svg';


export const services = [
  { 
    title: 'Уколы на дому', 
    code: 'injections',
    price: 5000, 
    description: 'Быстрое и безопасное выполнение внутримышечных, подкожных и внутривенных уколов у вас дома.', 
    icon: InjectionImg 
  },
  { 
    title: 'Капельницы на дому', 
    code: 'drips', 
    price: 7_000,  
    description: 'Установка капельниц на дому: витаминные, от интоксикации или с вашими препаратами.',
    icon: DripImg 
  },
  { 
    title: 'Детоксикация на дому', 
    code: 'detox', 
    price: 25_000,
    description: 'Проводим алкогольную и наркотическую детоксикацию у вас дома: быстро, безопасно и анонимно.', 
    icon: PillsImg 
  },
  // { 
  //   title: 'Вывод из запоя', 
  //   code: 'detox', 
  //   price: 25_000,
  //   description: 'Детоксикация и восстановление с помощью капельницы от интоксикации.', 
  //   icon: PillsImg 
  // },
  { 
    title: 'Медсестра на дом', 
    code: 'nurse', 
    price: 20_000,
    description: 'Уход за лежачим пациентом, присмотр за пожилым или присутствие на мероприятиях: профессионально и с заботой.',
    icon: NurseImg 
  },
  // { 
  //   title: 'Уход за лежачими больными', 
  //   code: 'nurse', 
  //   price: 20_000,
  //   description: 'Чуткий и заботливый уход за лежачим больным',
  //   icon: BedImg 
  // },
  // { 
  //   title: 'Уход за пожилыми людьми', 
  //   code: 'nurse', 
  //   price: 20_000,
  //   description: 'Чуткий и заботливый уход за пожилым человеком',
  //   icon: OldImg 
  // },
  { 
    title: 'Перевязка на дому', 
    code: 'bandage/regular', 
    price: 7_000,
    description: 'Профессиональный уход за ранами для быстрого заживления и комфорта.',
    icon: BandagenImg 
  },
  // { 
  //   title: 'Витаминные коктейли в капельницах', 
  //   code: 'cocktails', 
  //   price: 12_000,
  //   description: 'Коктейли красоты и здоровья для быстрого восстановления организма.', 
  //   icon: CocktailImg 
  // },
  // { 
  //   title: 'Плацентарная терапия', 
  //   code: 'cocktails', 
  //   price: 12_000,
  //   description: 'Плацентарная терапия в домашних условиях', 
  //   icon: PlacentalImg 
  // },
  // { 
  //   title: 'Установка назогастрального зонда', 
  //   code: 'cocktails', 
  //   price: 12_000,
  //   description: 'Профессиональная установка назогастрального зонда', 
  //   icon: StomachImg 
  // },
  // { 
  //   title: 'Наркоглог на дом',
  //   code: 'doctor', 
  //   price: 20_000,
  //   description: 'Профессиональный врач приедет к вам для диагностики и лечения',
  //   icon: DoctorImg,
  // },
  // { 
  //   title: 'Пищевые отравления',
  //   code: 'food-poisoning', 
  //   price: 15_000,
  //   description: 'Лечение пищевых отравлений с помощью капельницы для восстановления.',
  //   icon: UtensilsIcon
  // },

    // { 
  //   title: 'Укол + Капельница', 
  //   code: 'injection-and-drip', 
  //   short_name: 'Укол + Капельница', 
  //   price: 8_000,
  //   msg: '', 
  //   description: 'Комплексная услуга: инъекция и капельница для максимального эффекта.', 
  //   icon: DropletIcon
  // },
];
export default function Service() {
  const [, navigate] = useLocation();

  const handleCardClick = (code: string) => {  
    trackClarityEvent('redirect_from_lending_we_help');
    navigate(`/services/${code}`);
  };

  return (
    <section id="services" className="py-8">
      <div className="text-center mb-5">
        <p className="text-3xl text-black font-bold uppercase">
          Вот с чем мы можем помочь
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(service.code)}
            className="bg-transparent border-2 border-black rounded-lg text-start mx-2 p-4 w-[400px]"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-10 h-10"
              />
              <h2 className="text-2xl text-black font-semibold">
                {service.title}
              </h2>
            </div>
            <p className="text-base font-semibold text-gray-600 mb-4">
              {service.description}
            </p>
            <div className="flex justify-between items-end ">
              <span className="text-xl sm:text-xl text-black font-bold py-2">
                от {new Intl.NumberFormat('en-US').format(service.price)}₸
              </span>
              <button
                onClick={() => handleCardClick(service.code)}
                className="bg-my-green rounded-lg px-6 py-2"
              >
                <span className="text-lg text-black font-semibold sm:text-xl">
                  выбрать
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


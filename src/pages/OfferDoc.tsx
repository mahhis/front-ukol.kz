import Header from 'components/Header';
import { useEffect } from 'preact/hooks';


export default function OfferDoc() {

  useEffect(() => {
    // Динамически обновляем содержимое <head>
    document.title = "Договор оферты — ukol.kz";

    const metaDescription = document.createElement('meta');
    metaDescription.name = "description";
    metaDescription.content = "Договор оферты сервиса — ukol.kz";
    document.head.appendChild(metaDescription);

    const linkCanonical = document.createElement('link');
    linkCanonical.rel = "canonical";
    linkCanonical.href = "https://ukol.kz/offer";
    document.head.appendChild(linkCanonical);

    // Очистка при размонтировании компонента
    return () => {
      document.head.removeChild(metaDescription);
      document.head.removeChild(linkCanonical);
    };
  }, []);

  return (
    <>
    <Header/>
    <div className="text-black m-4">
      <h1>Договор оферты</h1>
      <p><strong>Дата вступления в силу:</strong> 01.06.2024</p>
        <p>1. Общие положения</p>
        <p>1.1. Настоящий Договор публичной оферты (далее – "Договор") регулирует условия предоставления услуг через платформу Ukol.kz (далее – "Сайт"), расположенную на территории Республики Казахстан.</p>
        <p>1.2. Использование Сайта, включая подачу заявок на услуги, означает полное и безоговорочное согласие клиента (далее – "Клиент") с условиями данного Договора.</p>
        <p>1.3. Настоящий Договор является публичной офертой в соответствии со статьей 395 Гражданского кодекса Республики Казахстан.</p>
        <p>2. Услуги и исполнители</p>
        <p>2.1. Сайт предоставляет услуги по обеспечению взаимодействия между Клиентами и исполнителями (медицинскими сестрами, врачами и т.д., далее – "Исполнители") для предоставления медицинских услуг на дому, включая, но не ограничиваясь: капельница на дом, укол на дом, перевязка, лечение от алкогольной интоксикации и другие медицинские услуги на территории Республики Казахстан.</p>
        <p>2.2. Исполнители являются сертифицированными специалистами, имеющими необходимые квалификации и лицензии для оказания медицинских услуг в соответствии с законодательством Республики Казахстан. Сайт Ukol.kz не оказывает медицинские услуги и не несет ответственности за их качество и результаты.</p>
        <p>2.3. Исполнители обязаны оказывать услуги исключительно по назначению врача и должны отказаться от оказания услуг без соответствующего назначения.</p>
        <p>3. Оформление заявок и оплата</p>
        <p>3.1. Клиент может обратиться на контактный номер, указанный на Сайте, для оформления заявки на предоставление услуг.</p>
        <p>3.2. При обращении Клиента наш сервис Ukol.kz принимает заказ, обговаривает с Клиентом стоимость услуг и подтверждает условия оказания услуг.</p>
        <p>3.3. Стоимость услуг устанавливается Сайтом и доводится до сведения Клиента до передачи заказа Исполнителю.</p>
        <p>3.4. Заказ передается Исполнителю, который осуществляет выезд к Клиенту и исполняет заявку в согласованные сроки.</p>
        <p>3.5. После оказания услуг Клиент обязан оплатить полную стоимость услуг непосредственно Исполнителю.</p>
        <p>3.6. Исполнитель обязуется оплатить нашему сервису Ukol.kz вознаграждение согласно договоренностям, выставленному счету и условиям данного Договора.</p>
        <p>4. Права и обязанности сторон</p>
        <h4>4.1. Права и обязанности Клиента:</h4>
        <p>4.1.1. Клиент имеет право на получение услуг на территории Республики Казахстан в соответствии с условиями и сроками, согласованными с Ukol.kz.</p>
        <p>4.1.2. Клиент обязан предоставить Исполнителю полную и достоверную информацию, необходимую для оказания услуг.</p>
        <p>4.1.3. Клиент обязан оплатить полную стоимость услуг непосредственно Исполнителю по завершении услуг.</p>
        <p>4.1.4. Клиент несет ответственность за корректность и полноту предоставленной информации.</p>
        <h4>4.2. Права и обязанности Исполнителя:</h4>
        <p>4.2.1. Исполнитель обязуется оказать услуги в соответствии с квалификацией, лицензией и законодательством Республики Казахстан.</p>
        <p>4.2.2. Исполнитель несет полную ответственность за оказание услуг, включая медицинскую, юридическую и иную ответственность перед Клиентом на территории Республики Казахстан.</p>
        <p>4.2.3. Исполнитель обязуется оказывать услуги исключительно по назначению врача и отказаться от оказания услуг без назначения.</p>
        <p>4.2.4. Исполнитель обязан оплатить вознаграждение Сайту Ukol.kz в соответствии с договоренностями и выставленными счетами.</p>
        <h4>4.3. Права и обязанности Сайта:</h4>
        <p>4.3.1. Сайт обеспечивает платформу для подачи заявок и взаимодействия между Клиентами и Исполнителями на территории Республики Казахстан.</p>
        <p>4.3.2. Сайт не несет ответственности за качество, безопасность, результаты или законность услуг, оказываемых Исполнителями.</p>
        <p>4.3.3. Сайт не несет ответственности за любые убытки, ущерб или иные негативные последствия, связанные с услугами, оказываемыми Исполнителями на территории Республики Казахстан.</p>
        <p>4.3.4. Сайт устанавливает стоимость услуг и согласовывает их с Клиентом перед передачей заказа Исполнителю.</p>
        <p>5. Стоимость и оплата услуг</p>
        <p>5.1. Стоимость услуг устанавливается Сайтом и сообщается Клиенту при оформлении заявки.</p>
        <p>5.2. Оплата услуг осуществляется Клиентом непосредственно Исполнителю по завершении оказания услуг.</p>
        <p>5.3. Исполнитель обязуется оплатить вознаграждение Сайту Ukol.kz в соответствии с выставленными счетами и условиями данного Договора.</p>
        <p>6. Ответственность</p>
        <p>6.1. Клиент и Исполнитель несут полную ответственность за выполнение условий настоящего Договора и законодательства Республики Казахстан.</p>
        <p>6.2. Сайт не несет ответственности за действия или бездействие Исполнителей, в том числе за причиненный вред или ущерб, связанный с оказанием медицинских услуг на территории Республики Казахстан.</p>
        <p>7. Форс-мажор</p>
        <p>7.1. Стороны освобождаются от ответственности за полное или частичное неисполнение своих обязательств по настоящему Договору, если это вызвано обстоятельствами непреодолимой силы (форс-мажор).</p>
        <p>8. Прочие условия</p>
        <p>8.1. Настоящий Договор может быть изменен или дополнен Сайтом в одностороннем порядке с уведомлением Клиентов путем публикации на Сайте.</p>
        <p>8.2. Вопросы, не урегулированные настоящим Договором, регулируются в соответствии с законодательством Республики Казахстан.</p>
        <p>9. Контактная информация</p>
        <p>По всем вопросам, связанным с условиями настоящего Договора, обращайтесь по контактным номерам.</p>
        </div>
        </>
  );
}
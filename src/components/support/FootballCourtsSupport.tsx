import { useState } from "react";
import AccordionItem from "./Accordion";
import "src/components/support//SupportQuestions.css";

const FootballCourtsSupport = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1);

  const questions = [
    {
      id: 1,
      question: "Sahalara nasıl puan verebilirim?",
      answer:
        "Rezervasyonunuz tamamlandıktan sonra saha sayfasına gidip Puan Ver butonunu kullanarak puanlama yapabilirsiniz. Puanlama işlemi 1 ile 5 arasında bir skalada gerçekleşmektedir. Dilerseniz, deneyiminiz hakkında ek yorumlar da bırakabilirsiniz.",
    },
    {
      id: 2,
      question: "Saha hakkında inceleme yazabilir miyim?",
      answer:
        "Evet, saha deneyiminizi paylaşmak için rezervasyon sonrası inceleme bırakabilirsiniz. İncelemeleriniz, diğer kullanıcılar tarafından görülebilir ve sahayı geliştirmek için geri bildirim sağlamak amacıyla kullanılabilir. İnceleme yaparken, deneyimlerinizi detaylandırarak diğer kullanıcıların bilgi edinmesine yardımcı olabilirsiniz.",
    },
    {
      id: 3,
      question: "Saha hakkında yanıltıcı bir bilgi bulursam ne yapmalıyım?",
      answer:
        "Yanıltıcı veya eksik bir bilgi fark ederseniz, saha sayfasındaki Hata Bildir seçeneği ile bize bildirebilirsiniz. Bildirimleriniz, saha sayfasının güncellenmesine yardımcı olacak ve kullanıcı deneyimini iyileştirmek için dikkate alınacaktır. Geri bildirimlerinizi mümkün olduğunca detaylı bir şekilde yapmanız, sürecin hızlanmasına katkıda bulunacaktır.",
    },
    {
      id: 4,
      question: "Sahaların sunduğu ekstra hizmetler nelerdir? ",
      answer:
        "Soyunma odası, duş, otopark gibi ekstra hizmetler sunan sahalar hakkında detaylı bilgi, saha sayfasında yer almaktadır. Ayrıca, bazı sahalar özel antrenör hizmetleri, spor ekipmanları kiralama ve sağlıklı atıştırmalıklar gibi ek hizmetler de sunabilmektedir. Her sahanın sunduğu hizmetlerin listesi, kullanıcıların ihtiyaçlarına göre düzenlenmiştir.",
    },
    {
      id: 5,
      question: "Saha rezervasyonu iptal edilebilir mi? ",
      answer:
        "Evet, rezervasyonlarınızı iptal edebilirsiniz. Ancak iptal koşulları ve süreleri sahadan sahaya değişiklik gösterebilir. İptal işlemi için uygulama üzerinden rezervasyon geçmişinizi kontrol edebilir ve ilgili sahayı seçerek iptal edebilirsiniz.",
    },
  ];

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="support-questions">
      <div className="support-questions-box">
        <span className="support-questions-title">Sahalar</span>
      </div>
      <br />

      <div className="support-questions-wrapper">
        {questions.map((question) => (
          <AccordionItem
            key={question.id}
            id={question.id}
            question={question.question}
            answer={
              Array.isArray(question.answer) ? (
                <ul>
                  {question.answer.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                question.answer
              )
            }
            selectedQuestion={selectedQuestion}
            handleQuestionClick={handleQuestionClick}
          />
        ))}
      </div>
    </div>
  );
};

export default FootballCourtsSupport;

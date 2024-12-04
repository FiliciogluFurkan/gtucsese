import { useState } from "react";
import AccordionItem from "./Accordion";
import "src/components/support//SupportQuestions.css";
const Rezervation = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1);

  const questions = [
    {
      id: 1,
      question: "Nasıl halı saha rezervasyonu yaparım?",
      answer:
        "Anasayfada konumunuzu belirledikten sonra, size en yakın sahaları görüntüleyebilir ve rezervasyon yapabilirsiniz.HalıSahalar sayfasından ise il ve ilçe seçerek mevcut sahaları ve detaylarını görüntüleyebilirsiniz.",
    },
    {
      id: 2,
      question: "Rezervasyonumu nasıl iptal ederim?",
      answer:
        "Hesabım -> Rezervasyonlarım bölümünden aktif rezervasyonlarınızı iptal edebilirsiniz.",
    },
    {
      id: 3,
      question: "Rezervasyon iptali için geri ödeme alabilir miyim?",
      answer:
        "Halı sahaların iptal politakalarına bağlı olarak geri ödeme yapılabilir. Detayları rezervasyon sırasında görüntüleyebilirsiniz.",
    },
    {
      id: 4,
      question: "Rezervasyon için ödeme yöntemleri nelerdir? ",
      answer:
        "Kredi kartı, banka kartı ve çeşitli online ödeme yöntemleri kabul edilmektedir.",
    },
    {
      id: 5,
      question: "Rezervasyon onayımı ne zaman alırım? ",
      answer:
        "Rezervasyonunuz saha tarafından onaylandıktan sonra size e-posta ile bildirim gönderilecektir.",
    },
  ];

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="support-questions">
      <div className="support-questions-box">
        <span className="support-questions-title">Rezervasyonlarım</span>
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

export default Rezervation;

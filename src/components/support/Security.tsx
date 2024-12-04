import { useState } from "react";
import AccordionItem from "./Accordion";
import "src/components/support//SupportQuestions.css";

const Security = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1);

  const questions = [
    {
      id: 1,
      question: "Kişisel bilgilerim nasıl korunuyor?",
      answer:
        "Kişisel verileriniz, Kişisel Verilerin Korunması Kanunu (KVKK) ve GDPR gibi ulusal ve uluslararası veri koruma düzenlemeleri kapsamında korunmaktadır.",
    },
    {
      id: 2,
      question: "Ödeme bilgilerim güvende mi?",
      answer:
        "Evet, ödeme bilgileriniz SSL sertifikalı güvenli sunucular üzerinden işlenmekte ve hiçbir şekilde saklanmamaktadır.",
    },
    {
      id: 3,
      question: "Verilerimi nasıl silebilirim?",
      answer:
        "Hesap ayarları bölümünden tüm verilerinizi kalıcı olarak silebilirsiniz.",
    },
    {
      id: 4,
      question: "Verilerim üçüncü şahıslarla paylaşılır mı? ",
      answer:
        "Kişisel verileriniz, yalnızca hizmetin sağlanması amacıyla iş ortaklarımızla paylaşılabilir. Bunun dışında herhangi bir üçüncü tarafla paylaşılmaz.",
    },
    {
      id: 5,
      question: "Rezervasyon bilgilerim güvende mi? ",
      answer:
        "Evet, rezervasyon bilgileriniz güvenli sunucularda saklanır ve yalnızca rezervasyon süreci ile ilgili taraflarla paylaşılır.",
    },
  ];

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="support-questions">
      <div className="support-questions-box">
        <span className="support-questions-title">Gizlilik</span>
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

export default Security;

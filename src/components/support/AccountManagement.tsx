import { useState } from "react";
import AccordionItem from "./Accordion";
import "src/components/support//SupportQuestions.css";

const AccountManagement = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1);

  const questions = [
    {
      id: 1,
      question: "Nasıl üye olabilirim?",
      answer:
        "Ana sayfada sağ üst button içinde yer alan Kayıt Ol butonuna tıklayarak gerekli bilgileri doldurup, üyelik işleminizi tamamlayabilirsiniz.",
    },
    {
      id: 2,
      question: "Üyelik oluştururken hangi bilgileri vermem gerekiyor?",
      answer:
        "E-posta adresi, ad-soyad ve telefon numarası gibi temel iletişim bilgileri gerekmektedir.",
    },
    {
      id: 3,
      question: "Hesap bilgilerimi nasıl güncelleyebilirim?",
      answer:
        "Hesap Ayarları bölümüne girerek ad, soyad, telefon numarası gibi bilgilerinizi güncelleyebilirsiniz.",
    },
    {
      id: 4,
      question: "Şifremi nasıl sıfırlarım? ",
      answer:
        "Giriş sayfasındaki Şifremi Unuttum seçeneğini kullanarak, e-posta adresinize gelen talimatlar doğrultusunda şifrenizi sıfırlayabilirsiniz.",
    },
    {
      id: 5,
      question: "Telefon numaramı değiştirebilir miyim? ",
      answer:
        "Evet, Hesap Ayarları bölümünden telefon numaranızı güncelleyebilirsiniz.",
    },
  ];

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id);
  };

  return (
    <div className="support-questions">
      <div className="support-questions-box">
        <span className="support-questions-title">Hesap Yönetimi</span>
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

export default AccountManagement;

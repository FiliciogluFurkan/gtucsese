import { useState } from "react";
import AccordionItem from './Accordion'; 
import './../../css/support/supportcomponents/SupportQuestions.css'; 

const Campaigns = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1); 

 
  const questions = [
    { id: 1, question: "Kampanyalardan nasıl haberdar olabilirim?", answer: "Kampanyalar sayfasını ziyaret edebilir veya e-posta bültenimize abone olabilirsiniz." },
    { id: 2, question: "Bir kampanya kodunu nasıl kullanırım?", answer: "Rezervasyon sırasında Promosyon Kodu alanına kampanya kodunuzu girerek indirim kazanabilirsiniz." },
    { id: 3, question: "Kampanyalar ne kadar süre geçerlidir?", answer: "Her kampanyanın geçerlilik süresi kampanya detaylarında belirtilmiştir." },
    { id: 4, question: "Kampanya kodum çalışmıyorsa ne yapmalıyım? ", answer: "Kampanya kodunun geçerliliğini kontrol ettikten sonra sorun devam ederse, destek ekibimizle iletişime geçebilirsiniz." },
    { id: 5, question: "Kampanya kodlarını nereden bulabilirim? ", answer: "E-posta bültenlerimiz, sosyal medya hesaplarımız ve uygulama bildirimleri üzerinden kampanya kodlarına ulaşabilirsiniz." },
  ];

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id); 
  };

  return (
    <div className='support-questions'>
      <div className='support-questions-box'>
        <span className='support-questions-title'>Kampanyalar</span>
      </div>
      <br />

      <div className='support-questions-wrapper'>
                {questions.map((question) => (
                    <AccordionItem
                        key={question.id}
                        id={question.id}
                        question={question.question}
                        answer={Array.isArray(question.answer) ? (
                            <ul>
                                {question.answer.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            question.answer
                        )}
                        selectedQuestion={selectedQuestion}
                        handleQuestionClick={handleQuestionClick}
                    />
                ))}
            </div>
    </div>
  );
};

export default Campaigns;

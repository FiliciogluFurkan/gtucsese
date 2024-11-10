import { useState } from "react";
import AccordionItem from './Accordion'; 
import './../../css/support/supportcomponents/SupportQuestions.css'; 

const Support = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1); 

 
  const questions = [
    { id: 1, question: "Sahan Cepte Nedir?", answer: "Sahan Cepte, futbol severlerin kolayca halı saha bulup rezervasyon yapabilecekleri bir platformdur." },
    { id: 2, question: "Sahan Cepteyi kullanmak ücretli mi?", answer: "Sahan Cepte tamamen ücretsiz,tüm kullanıcalara açık bir platformdur.Extra hiçbir ücret ödemeden rezervasyonlarınızı kolaylıkla yapabilirsiniz." },
    { id: 3, question: "Platform üzerinden başka spor dalları için rezervasyon yapabilir miyim?", answer: "Şu anda sadece futbol sahaları için rezervasyon imkanı sunuyoruz, ancak ileride diğer spor dalları için de hizmet vermeyi planlıyoruz." },
    { id: 4, question: "Rezervasyon sırasında saha seçimini nasıl yaparım? ", answer: "Konumunuzu belirledikten sonra size en yakın sahaları görüntüleyebilir ve müsait olan bir sahada rezervasyon yapabilirsiniz." },
    { id: 5, question: "Bir sıkıntı olduğunda sizinle nasıl iletişime geçebilirim?", answer: "Herhangi bir sorun yaşadığınızda, bizimle e-posta, telefon, WhatsApp veya sosyal medya üzerinden 7/24 iletişime geçebilirsiniz. Saha rezervasyonları ise saha müsaitlik durumuna bağlı olarak yapılmaktadır." },
  ];

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id); 
  };

  return (
    <div className='support-questions'>
      <div className='support-questions-box'>
        <span className='support-questions-title'>Popüler Sorular</span>
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

export default Support;

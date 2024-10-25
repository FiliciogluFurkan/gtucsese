import { useState } from "react";
import AccordionItem from './Accordion'; 
import './../../css/support/supportcomponents/SupportQuestions.css'; 

const Communication = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1); 

 
  const questions = [
    { id: 1, question: "Sahan cepte iletişim bilgilerine nasıl ulaşabilirim", answer: [
      "Adres: Gebze Teknik Üniversitesi",
      "Tel: 0850 455 85 45",
      "E-posta: sahancepte_info@gmail.com"
    ] },

  ];

  const handleQuestionClick = (id: number) => {
    setSelectedQuestion(selectedQuestion === id ? null : id); 
  };

  return (
    <div className='support-questions'>
      <div className='support-questions-box'>
        <span className='support-questions-title'>İletişim</span>
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

export default Communication ;

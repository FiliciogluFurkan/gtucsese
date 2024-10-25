import { useState } from "react";
import AccordionItem from './Accordion';
import './../../css/support/supportcomponents/SupportQuestions.css'; 

const AboutSahanCepte = () => {
    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(1);

    const questions = [
        { id: 1, question: "Sahan Cepte Nedir?", answer: "Sahan Cepte, kullanıcıların belirli sahalara gitmeden önce hızlı ve kolay bir şekilde rezervasyon yapabilmelerini sağlayan bir online rezervasyon sistemidir." },
        { id: 2, question: "Sahan Cepte'de hangi sahalar geçerlidir?", answer: "Bu özellik, platformumuzda Sahan Cepte ile uyumlu olan sahalar için geçerlidir." },
        { id: 3, question: "Sahan Cepte ödemesi nasıl yapılır?", answer: "Ödeme işlemi tamamen güvenli bir ortamda gerçekleştirilir." },
        {
            id: 4,
            question: "Sahan Cepte'nin avantajları nelerdir?",
            answer: [
                ".Zaman kaybetmeden birkaç tıklamayla ödeme ve rezervasyon yapabilirsiniz.",
                ".Kredi kartı bilgilerinizi bir kez kaydettikten sonra tekrar tekrar kart bilgisi girmenize gerek kalmaz.",
                ".Müsaitlik azaldığında hızlı hareket edip sahada yerinizi ayırtabilirsiniz.",
                ".Ödeme işlemleri tamamen güvenli bir ortamda gerçekleşir ve kart bilgileriniz korunur."
            ]
        },
        {
            id: 5,
            question: "Sahan Cepte rezervasyonlarının iptal ve iade süreci nasıldır?",
            answer: [
                ".İptal süresi, tesisin belirlediği kurallar çerçevesinde farklılık gösterir. Rezervasyon yapmadan önce, ilgili tesisin iptal ve iade şartlarını mutlaka inceleyin.",
                ".İptal edilen rezervasyonlarda, ödeme iadesi tesisin iptal politikalarına göre yapılır.",
                ".Bazı tesisler, geç yapılan iptallerde veya belirli bir sürenin altındaki iptallerde ücret kesintisi uygulayabilir."
            ]
        },
        { id: 6, question: "Sahan Cepte ile yapılan rezervasyonu nasıl iptal ederim?", answer: "Rezervasyon iptalini kolayca uygulama veya web sitesi üzerinden gerçekleştirebilirsiniz." },
        { id: 7, question: "İptal süresine dikkat etmem gerekiyor mu?", answer: "Evet, sahaların belirlediği iptal süreleri mevcuttur." },
        { id: 8, question: "Sahan Cepte ile yapılan ödemeler için fatura alabilir miyim?", answer: "Evet, Sahan Cepte üzerinden yapılan ödemeler için, e-posta adresinize dijital fatura gönderilir." },
        { id: 9, question: "Sahan Cepte'de ödeme sırasında sorun yaşarsam ne yapmalıyım?", answer: "Ödeme sırasında bir sorun yaşarsanız, destek ekibimizle iletişime geçebilirsiniz." },
    ];

    const handleQuestionClick = (id: number) => {
        setSelectedQuestion(selectedQuestion === id ? null : id);
    };

    return (
        <div className='suppor-questions'>
            <div className='support-questions-box'>
                <span className='support-questions-title'>Sahan Cepte Hakkında</span>
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

export default AboutSahanCepte;

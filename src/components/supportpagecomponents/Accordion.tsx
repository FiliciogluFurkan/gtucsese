
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './../../css/support/supportcomponents/SupportQuestions.css'; 

interface AccordionItemProps {
  id: number;
  question: string;
  answer: string | React.ReactNode; // Güncelleme
  selectedQuestion: number | null;
  handleQuestionClick: (id: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ id, question, answer, selectedQuestion, handleQuestionClick }) => {
  return (
    <Accordion
      expanded={selectedQuestion === id} 
      onChange={() => handleQuestionClick(id)}
      className="custom-accordion"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${id}-content`}
        id={`panel${id}-header`}
        className={`accordion-title ${selectedQuestion === id ? 'selected' : ''}`} 
      >
        <span>{question}</span>
      </AccordionSummary>
      <AccordionDetails>
        <p className="accordion-content">{answer}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;

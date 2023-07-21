import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import { Question as QuestionType } from "../../constants/questions";
import { ExpandMore } from "@mui/icons-material";
import { Dispatch, SetStateAction } from "react";
import { PRIMARY_COLOR } from "../../main";

interface QuestionProps {
	question: QuestionType;
	activeId: number | false;
	setActiveId: Dispatch<SetStateAction<number | false>>;
}

const Question = ({ question, activeId, setActiveId }: QuestionProps) => {
	return (
		<Accordion
			expanded={question.id === activeId}
			onChange={(_, isExpanded) =>
				setActiveId(isExpanded ? question.id : false)
			}
			sx={{
				bgcolor:
					question.id === activeId ? PRIMARY_COLOR[500] : PRIMARY_COLOR[50],
				color: question.id === activeId ? "primary.contrastText" : undefined,
				transition: "0.3s",
			}}
		>
			<AccordionSummary
				expandIcon={
					<ExpandMore
						sx={{
							color:
								question.id === activeId ? "primary.contrastText" : undefined,
							transition: "0.3s",
						}}
					/>
				}
				aria-controls={`panel${question.id}a-content`}
				id={`panel${question.id}a-header`}
			>
				<Typography fontWeight="bold">{question.question}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Typography>{question.answer}</Typography>
			</AccordionDetails>
		</Accordion>
	);
};

export default Question;

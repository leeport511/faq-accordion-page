export interface TitleProps {
	title: string;
}

export interface QuestionsAndAnswers {
	id: number;
	question: string;
	answer: string;
}

export interface FaqQuestionAndAnswerItemProps {
	id: number;
	question: string;
	answer: string;
	isActive: boolean;
	onToggle: () => void;
	isLast: boolean;
}

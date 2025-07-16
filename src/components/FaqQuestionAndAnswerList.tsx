import { useState } from 'react';
import { questionsAndAnswers } from '../constants/QuestionsAndAnswer';
import type { QuestionsAndAnswers } from '../interfaces/interfaces';
import { FaqQuestionAndAnswerItem } from './FaqQuestionAndAnswerItem';

export const FaqQuestionAndAnswerList = () => {
	const [activeId, setActiveId] = useState<number | null>(null);

	return (
		<>
			{questionsAndAnswers.map(
				(
					{ id, question, answer }: QuestionsAndAnswers,
					index
				) => {
					return (
						<FaqQuestionAndAnswerItem
							key={id}
							id={id}
							question={question}
							answer={answer}
							isActive={activeId === id}
							onToggle={() =>
								setActiveId(
									activeId === id ? null : id
								)
							}
							isLast={
								index ===
								questionsAndAnswers.length - 1
							}
						/>
					);
				}
			)}
		</>
	);
};

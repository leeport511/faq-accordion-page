import IconPlus from '../../public/assets/images/icon-plus.svg';
import type { FaqQuestionAndAnswerItemProps } from '../interfaces/interfaces';
// import IconMinus from '../../public/assets/images/icon-minus.svg';

export const FaqQuestionAndAnswerItem = ({
	question,
	answer,
	isActive,
	onToggle,
	isLast,
}: FaqQuestionAndAnswerItemProps) => {
	return (
		<div className='mt-6'>
			<div className='mb-6'>
				<button
					className='flex items-center justify-between w-full cursor-pointer'
					onClick={onToggle}
				>
					<h4 className='text-purple950 text-left transition-all ease-in-out'>
						{question}
					</h4>
					<img
						src={IconPlus}
						alt='Plus'
						className='w-[30px] h-[30px] ml-6'
					/>
				</button>
			</div>
			{!isActive ? null : (
				<p className='text-sm text-purple600 leading-6'>
					{answer}
				</p>
			)}

			{!isLast && (
				<div className='border border-purple100 mt-6'></div>
			)}
		</div>
	);
};

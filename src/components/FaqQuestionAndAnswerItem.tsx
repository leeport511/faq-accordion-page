import IconPlus from '../../public/assets/images/icon-plus.svg';
import type { FaqQuestionAndAnswerItemProps } from '../interfaces/interfaces';
import IconMinus from '../../public/assets/images/icon-minus.svg';

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
					<h2 className='text-purple950 text-left font-semibold text-base md:text-lg transition-all ease-in-out hover:text-violet600'>
						{question}
					</h2>
					<img
						src={!isActive ? IconPlus : IconMinus}
						alt='Plus'
						className='w-[30px] h-[30px] ml-6'
					/>
				</button>
			</div>
			{!isActive ? null : (
				<p className='text-sm md:text-base text-purple600 leading-6'>
					{answer}
				</p>
			)}

			{!isLast && (
				<div className='border border-purple100 mt-6'></div>
			)}
		</div>
	);
};

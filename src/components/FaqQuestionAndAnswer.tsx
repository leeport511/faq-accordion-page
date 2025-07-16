import IconPlus from '../../public/assets/images/icon-plus.svg';
import IconMinus from '../../public/assets/images/icon-minus.svg';

export const FaqQuestionAndAnswer = () => {
	return (
		<>
			<div className='mb-6'>
				<div className='flex items-center justify-between mb-6'>
					<h4 className='text-purple950'>
						What is Frontend Mentor, and how will it help
						me?
					</h4>
					<img
						src={IconPlus}
						alt='Plus'
						className='w-[30px] h-[30px] ml-6'
					/>
				</div>
				<p className='text-sm text-purple600 leading-6'>
					Lorem ipsum dolor, sit amet consectetur
					adipisicing elit. Autem pariatur veniam vero,
					fugit illo dolorum quas ratione neque explicabo
					voluptas odit ipsa accusamus ducimus assumenda
					ipsum eveniet fugiat temporibus ipsam?
				</p>
			</div>
			<div className='border border-purple100'></div>
		</>
	);
};

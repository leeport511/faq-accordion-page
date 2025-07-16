import type { TitleProps } from '../interfaces/interfaces';
import IconStar from '../../public/assets/images/icon-star.svg';

export const AppTitle = ({ title }: TitleProps) => {
	return (
		<div className='flex items-center mb-6'>
			<img
				src={IconStar}
				alt='Star Icon'
				className='w-6 h-6 mr-6'
			/>
			<h2 className='text-purple950 text-[32px] font-bold'>
				{title}
			</h2>
		</div>
	);
};

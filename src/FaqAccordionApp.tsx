import BgMobile from '../public/assets/images/background-pattern-mobile.svg';
import BgDesktop from '/assets/images/background-pattern-desktop.svg';
import { FaqQuestionAndAnswerList } from './components/FaqQuestionAndAnswerList';
import { AppTitle } from './components/AppTitle';

function FaqAccordionApp() {
	return (
		<main className='bg-purple100 overflow-y-scroll w-screen h-screen flex flex-col items-center relative font-work-sans'>
			<div className='z-10'>
				<img
					src={BgMobile}
					alt='Background Pattern'
					className='md:hidden block w-screen'
				/>
				<img
					src={BgDesktop}
					alt='Background Pattern'
					className='md:block hidden w-full'
				/>
			</div>
			<section className='absolute z-20 top-32 w-[327px] md:w-[600px] rounded-[8px] p-6 md:p-10 bg-white'>
				<AppTitle title={'FAQs'} />
				<FaqQuestionAndAnswerList />
			</section>
		</main>
	);
}

export default FaqAccordionApp;

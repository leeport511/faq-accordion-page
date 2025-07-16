import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import FaqAccordionApp from './FaqAccordionApp.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<FaqAccordionApp />
	</StrictMode>
);

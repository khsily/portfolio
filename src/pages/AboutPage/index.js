import React from 'react';
import { useHistory } from "react-router-dom";

import './AboutPage.scss';
import { MenuBox, NeonSign } from '../../components';

const AboutPage = () => {
	const history = useHistory();
	
	return (
		<section className='page about-page'>
			about
		</section>
	);
}

export default AboutPage;
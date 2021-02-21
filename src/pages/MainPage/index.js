import React from 'react';
import { useHistory } from "react-router-dom";

import './MainPage.scss';
import { MenuBox, NeonSign } from '../../components';

const MainPage = () => {
	const history = useHistory();
	
	return (
		<section className='page main-page'>
			<div className='content-container'>
				<div className='menu-wrapper'>
					<NeonSign 
						className='name-title'
						text='@KHSILY' />
					<MenuBox 
						className='menu-about' 
						color='#705823' 
						size={{ w: 90, d: 60, h: 90 }}
						onClick={() => history.push('/about')}>ABOUT</MenuBox>
					<MenuBox 
						className='menu-toys' 
						color='#105863' 
						size={{ w: 70, d: 60, h: 120 }}
						onClick={() => history.push('/toys')}>TOYS</MenuBox>
					<MenuBox 
						className='menu-projects' 
						color='#305823' 
						size={{ w: 120, d: 70, h: 70 }}
						onClick={() => history.push('/projects')}>PROJECTS</MenuBox>
				</div>
			</div>
		</section>
	);
}

export default MainPage;
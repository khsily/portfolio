import React from 'react';
import { shadeColor } from '../../utils/Color';

import './MenuBox.scss';

/*
@param {Stirng} color : 색깔 코드
@param {Object} size : { width(가로), depth(세로), height(높이) }
@param {Boolean} disabled : 클릭 & 호버 애니메이션 등 상호작용 비활성화 여부
*/
const MenuBox = ({ color, size: { w, d, h }, disabled = false, contentFace = 'front', children, ...props }) => {
	const faceColor = {
		top: { backgroundColor: color },
		left: { backgroundColor: shadeColor(color, -30) },
		front: { backgroundColor: shadeColor(color, -60) },
		shadow: { backgroundColor: '#151515' },
	}
	
	const faceSize = {
		top: { width: w, height: d },
		left: { width: d, height: h },
		front: { width: w, height: h },
		shadow: { width: w, height: d * 2 },
	}
	
	const faceTransform = {
		top: { transform: `rotateX(90deg) translate3d(0, 0, ${d / 2}px)` },
		left: { transform: `rotateY(-90deg) translate3d(0, 0, ${d / 2}px)` },
		front: { transform: `translate3d(0, 0, ${d / 2}px)` },
		shadow: { transform: `rotateX(-90deg) translate3d(0, ${-(d)}px, ${h - d}px)` },
	}
	
	const getFaceStyle = (face) => {
		return {
			...faceColor[face],
			...faceSize[face],
			...faceTransform[face],
		}
	}
	
	return (
		<div {...props} className={`menubox ${disabled ? 'disabled': ''} ${props.className ? props.className : ''}`} style={{ width: w, height: h }}>
			<div className='face top' style={getFaceStyle('top')}>{contentFace === 'top' && children}</div>
			<div className='face left' style={getFaceStyle('left')}>{contentFace === 'left' && children}</div>
			<div className='face front' style={getFaceStyle('front')}>{contentFace === 'front' && children}</div>
			<div className='face shadow' style={getFaceStyle('shadow')}></div>
		</div>
	);
}

export default MenuBox;
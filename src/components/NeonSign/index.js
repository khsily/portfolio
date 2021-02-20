import React from 'react';

import './NeonSign.scss';

const NeonSign = ({ text, className, ...props }) => {
	return (
		<div className={`neon-sign glow ${className ? className : ''}`} {...props}>{text}</div>
	);
}

export default NeonSign;
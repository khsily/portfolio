import React from 'react';

import './NeonSign.scss';

const NeonSign = ({ text, className, ...props }) => {
	return (
		<pre className={`neon-sign glow ${className ? className : ''}`} {...props}>{text}</pre>
	);
}

export default NeonSign;
import { CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

const PreflightCSS = ({}) => {
	return (
		<>
			<CSSReset />
			<Global
				styles={css`
					#__next {
						min-height: 100vh;
					}
				`}
			/>
		</>
	);
};

export default PreflightCSS;

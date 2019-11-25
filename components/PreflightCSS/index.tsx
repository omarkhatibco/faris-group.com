import { CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

export const PreflightCSS: React.FC = () => {
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

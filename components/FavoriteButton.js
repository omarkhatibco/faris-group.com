import { Box, IconButton } from '@chakra-ui/core';
import { useLocalStorage } from 'react-use';
import { useMounted } from '~utls';

export const FavoriteButton = ({ size, id }) => {
	const isMounted = useMounted();
	const [favorite, setFavorite] = useLocalStorage('favorite-properties', []);

	const handleFavorite = () => {
		if (favorite.includes(id)) {
			setFavorite(favorite.filter(key => key !== id));
		} else {
			setFavorite([...new Set([...favorite, id])]);
		}
	};

	return (
		<Box px={2}>
			{isMounted && (
				<IconButton
					aria-label='اختر العملة المفضلة'
					isRound
					variant={favorite.includes(id) ? 'solid' : 'outline'}
					variantColor='green'
					icon={favorite.includes(id) ? 'love' : 'loveOutline'}
					onClick={() => handleFavorite()}
				/>
			)}
		</Box>
	);
};

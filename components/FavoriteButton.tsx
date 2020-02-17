import { Box, IconButton } from '@chakra-ui/core';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
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
					icon={favorite.includes(id) ? MdFavorite : MdFavoriteBorder}
					onClick={() => handleFavorite()}
				/>
			)}
		</Box>
	);
};

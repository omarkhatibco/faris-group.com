import { useTheme } from '@chakra-ui/core';
import Select from 'react-select';

export const MultiSelect = ({
	name,
	isLoading = false,
	options = [],
	isMulti = false,
	isClearable = true,
	placeholder,
	value,
	onChange,
}) => {
	const chakraTheme = useTheme();

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			color: chakraTheme.colors.black,
			backgroundColor: state.isFocused
				? chakraTheme.colors.gray[50]
				: state.isSelected
				? chakraTheme.colors.gray[100]
				: 'transparent',
			':active': {
				backgroundColor: chakraTheme.colors.gray[100],
			},
		}),
		placeholder: (provided, state) => ({
			...provided,
			color: chakraTheme.colors.gray[400],
		}),
		control: (provided, state) => ({
			...provided,
			backgroundColor: state.isFocused ? chakraTheme.colors.white : chakraTheme.colors.gray[100],
			borderColor: state.isFocused ? chakraTheme.colors.green[500] : chakraTheme.colors.gray[100],
			boxShadow: state.isFocused ? `0 0 0 1px ${chakraTheme.colors.green[500]}` : 'none',
			'&:hover': {
				borderColor: chakraTheme.colors.gray[200],
				backgroundColor: chakraTheme.colors.gray[200],
			},
		}),
		input: provided => ({
			...provided,
			color: chakraTheme.colors.black,
		}),
		indicatorSeparator: (provided, state) => {
			return {
				...provided,
				backgroundColor: chakraTheme.colors.gray[400],
			};
		},
		dropdownIndicator: (provided, state) => ({
			...provided,
			color: chakraTheme.colors.gray[400],
		}),
		loadingIndicator: (provided, state) => ({
			...provided,
			color: chakraTheme.colors.gray[400],
		}),
		clearIndicator: (provided, state) => ({
			...provided,
			color: chakraTheme.colors.gray[400],
		}),
		multiValue: (provided, state) => ({
			...provided,
			backgroundColor: chakraTheme.colors.gray[50],
		}),
	};
	return (
		<Select
			value={value}
			onChange={onChange}
			styles={customStyles}
			isLoading={isLoading}
			isClearable={isClearable}
			isRtl
			isSearchable
			inputId={name}
			name={name}
			options={options}
			isMulti={isMulti}
			placeholder={placeholder}
			noOptionsMessage={() => 'لا يوجد خيارات'}
			loadingMessage={() => 'جاري التحميل'}
		/>
	);
};

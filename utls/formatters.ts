export const formatNumber = number => {
	return new Intl.NumberFormat('ar-SY', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	}).format(number);
};

export const formatMoney = (number, currency) => {
	return new Intl.NumberFormat('ar-SY', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
		style: 'currency',
		currency,
		currencyDisplay: 'name',
	}).format(number);
};
export const formatMoneyPart = (number, currency) => {
	return new Intl.NumberFormat('ar-SY', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
		style: 'currency',
		currency,
		currencyDisplay: 'name',
	}).formatToParts(number);
};

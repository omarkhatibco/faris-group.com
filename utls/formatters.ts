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
export const formatMoneyPart = (number, currency, currencyDisplay = 'name') => {
	return new Intl.NumberFormat('ar-SY', {
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
		style: 'currency',
		currency,
		currencyDisplay,
	}).formatToParts(number);
};

export const formatYear = date => {
	const year = new Date(Date.parse(date)).getFullYear();
	return formatNumber(year).replace(/٬/g, '');
};

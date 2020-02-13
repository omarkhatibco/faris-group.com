import '@formatjs/intl-unified-numberformat/polyfill';
if (typeof Intl.NumberFormat.__addLocaleData === 'function') {
	Intl.NumberFormat.__addLocaleData(
		require('@formatjs/intl-unified-numberformat/dist/locale-data/ar-SY.json') // locale-data for en
	);
}

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

export const formatUnit = (number, unit) => {
	return new Intl.NumberFormat('ar-SY', {
		style: 'unit',
		unit,
		unitDisplay: 'long',
	}).format(number);
};

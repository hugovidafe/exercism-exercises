export const colorCode = (color: string) => COLORS.indexOf(color as (typeof COLORS)[number]);

export const COLORS = [
	'black',
	'brown',
	'red',
	'orange',
	'yellow',
	'green',
	'blue',
	'violet',
	'grey',
	'white',
] as const;

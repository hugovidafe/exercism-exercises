export function decodedResistorValue(colors: string[]): string {
	const colorValues: Record<string, number> = {
		black: 0,
		brown: 1,
		red: 2,
		orange: 3,
		yellow: 4,
		green: 5,
		blue: 6,
		violet: 7,
		grey: 8,
		white: 9,
	};

	let number = (colorValues[colors[0]] * 10 + colorValues[colors[1]]) * 10 ** colorValues[colors[2]];

	return number > 999 ? `${number / 1000} kiloohms` : `${number} ohms`;
}

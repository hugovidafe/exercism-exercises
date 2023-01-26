enum resistor {
	black = 0,
	brown = 1,
	red = 2,
	orange = 3,
	yellow = 4,
	green = 5,
	blue = 6,
	violet = 7,
	grey = 8,
	white = 9,
}

const resistorColor = (color: string): resistor => resistor[color as keyof typeof resistor];

export function decodedValue(bands: string[]): number {
	return Number(bands.slice(0, 2).map(resistorColor).join(''));
}

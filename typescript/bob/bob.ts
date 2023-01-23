export function hey(input: string): string {
	const inputTrim = input.trim();
	if (!inputTrim) return 'Fine. Be that way!';
	const isUpper = inputTrim === inputTrim.toUpperCase() && inputTrim !== inputTrim.toLowerCase();
	if (isUpper) return inputTrim.endsWith('?') ? "Calm down, I know what I'm doing!" : 'Whoa, chill out!';
	return inputTrim.endsWith('?') ? 'Sure.' : 'Whatever.';
}

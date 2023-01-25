export function toRna(dna: string): string {
	if (!/^[GCTA]*$/.test(dna)) throw new Error('Invalid input DNA.');
	const complements = new Map([
		['G', 'C'],
		['C', 'G'],
		['T', 'A'],
		['A', 'U'],
	]);
	return [...dna]
		.map(
			(nucleotide) =>
				complements.get(nucleotide) ||
				((): Error => {
					throw new Error('Invalid input DNA.');
				})(),
		)
		.join('');
}

export class Matrix {
	private matrix: number[][];

	constructor(matrix: string) {
		this.matrix = matrix.split('\n').map((row) => row.split(' ').map(Number));
	}

	get rows(): number[][] {
		return this.matrix;
	}

	get columns(): number[][] {
		return this.matrix[0].map((_, index) => this.matrix.map((row) => row[index]));
	}
}

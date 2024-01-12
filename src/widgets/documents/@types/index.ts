interface IDocument {
	id: React.Key;
	name: string;
	date: Date;
	file: {
		id: React.Key,
		ext: string,
	};
}

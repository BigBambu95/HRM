enum DocumentsType {
	FETCH_DOCUMENTS = 'documents/FETCH_DOCUMENTS',
	REMOVE_DOCUMENT = 'documents/REMOVE_DOCUMENT',
}

console.log(typeof DocumentsType.FETCH_DOCUMENTS === 'string')

export default DocumentsType

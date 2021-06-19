module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	moduleFileExtensions: ['ts', 'tsx', 'jsx', 'js', 'json', 'node'],
	modulePathIgnorePatterns: ['npm-cache'],
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
	snapshotSerializers: ['./node_modules/enzyme-to-json/serializer'],
	moduleNameMapper: {
		'\\.(css)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)?$': 'babel-jest',
	},
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
		},
	},
}

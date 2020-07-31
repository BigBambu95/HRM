module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 10,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'react/jsx-props-no-spreading': 'off',
		'import/no-unresolved': 'off',
		'react/prop-types': 'off',
		'class-methods-use-this': 'off',
		'no-underscore-dangle': 'off',
		'react/jsx-indent': 'off',
		'react/jsx-indent-props': 'off',
	},
}

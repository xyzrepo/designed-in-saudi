module.exports = {
    env: {
        node: true
    },
    extends: [
        'eslint:recommended',
        // 'plugin:vue/vue3-essential',
        // 'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
        'prettier'
    ],
    rules: {
        // override/add rules settings here, such as:
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/one-component-per-file': 'off',
        'vue/require-default-prop': 'off',
        'vue/valid-template-root': 'off',
        'vue/no-mutating-props': 'off',
        'vue/no-useless-template-attributes': 'off',
        'vue/no-v-html': 'off',
        'object-curly-newline': [
            'error',
            {
                ObjectExpression: 'never',
                ObjectPattern: { multiline: true },
                ImportDeclaration: 'never',
                ExportDeclaration: { multiline: true, minProperties: 3 }
            }
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never'
            }
        ],
        'vue/html-closing-bracket-spacing': [
            'error',
            {
                startTag: 'never',
                endTag: 'never',
                selfClosingTag: 'always'
            }
        ],
        'vue/v-on-event-hyphenation': [
            'error',
            'never',
            {
                autofix: false,
                ignore: ['update:modelValue']
            }
        ],
        'vue/block-tag-newline': [
            'error',
            {
                singleline: 'always',
                multiline: 'always',
                maxEmptyLines: 0,
                blocks: {
                    template: {
                        singleline: 'always',
                        multiline: 'always',
                        maxEmptyLines: 0
                    },
                    script: {
                        singleline: 'always',
                        multiline: 'always',
                        maxEmptyLines: 0
                    },
                    route: {
                        singleline: 'always',
                        multiline: 'always',
                        maxEmptyLines: 0
                    }
                }
            }
        ],
        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 10
                },
                multiline: {
                    max: 10
                }
            }
        ],
        'vue/first-attribute-linebreak': [
            'error',
            {
                singleline: 'ignore',
                multiline: 'ignore'
            }
        ]
    }
}

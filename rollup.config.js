import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import { terser } from "rollup-plugin-terser";
import { eslint } from "rollup-plugin-eslint";

const outputTypes = [
  { file: './es/index.js', format: 'es' },
  { file: './lib/index.js', format: 'cjs' },
  {
    file: './iife/firstMeaningPaint.js',
    format: 'iife',
    name: 'firstMeaningPaint'
  }
]

const tasks = outputTypes.map(output => ({
  input: './src/index.js',
  output,
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/env', {
            'useBuiltIns': 'usage',
            corejs: 3,
          }
        ],
      ],
    }),
    eslint(),
    resolve(),
    commonjs(),
    nodePolyfills(),
    terser({ compress: { drop_console: true } })
  ]
}))

export default tasks

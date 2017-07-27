import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  entry: './index.js',
  format: 'umd',
  moduleName: 'ifFunc',
  plugins: [
    babel(),
    uglify()
  ],
  dest: './dist/index.js'
}
export default {
  input: 'src/spt.js',
  output: [
    {
      format: 'umd',
      name: 'SPT',
      file: 'build/spt.js',
      indent: '\t'
    },
    {
      format: 'umd',
      name: 'SPT',
      file: 'examples/spt.js',
      indent: '\t'
    },
    {
      format: 'es',
      file: 'build/spt.module.js',
      indent: '\t'
    }
  ],
  watch: {
    include: 'src/**'
  }
};
const options = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-cssnext': {},
    'css-mqpacker': {}
  }
};

if (process.env.NODE_ENV === 'development') {
  options.map = { inline: true };
}

module.exports = options;

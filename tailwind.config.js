module.exports = {
    content: [
      "./src/**/*.{astro,html,js,jsx,ts,tsx,vue}",
      "./node_modules/flowbite/**/*.js", // Añade esta línea
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('flowbite/plugin'), // Añade esta línea
    ],
  };
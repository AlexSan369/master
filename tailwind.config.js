/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Aqui definimos a nossa paleta de cores customizada.
      // Agora podemos usar classes como `bg-background`, `text-primary`, etc.
      colors: {
        'background': '#0C0C0C',
        'primary': '#DCCA87',    // <-- ALTERADO de #FBBF24 para a cor correta
        'light': '#FFFFFF',
        'muted': '#AAAAAA',      // Cor para textos secundários
        'dark-text': '#0C0C0C', // Cor para textos em fundos claros     // Cinza claro para textos secundários (Tailwind Gray 300)
        'light-bg': '#F8F5F0',
      },
      // Aqui definimos as nossas fontes customizadas.
      // Para usar, precisamos importar a fonte no nosso `index.html`.
      fontFamily: {
        // A fonte 'Poppins' será a nossa fonte padrão para a classe `font-sans`.
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

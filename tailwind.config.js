module.exports = {
    theme: {
        extend: {
            colors: {
              dark_brownish: "#751300",
              light_brownish: "#CC4516",
              yellow: "#F89C1D",
              lightRed: "#FFF2E1",
              info: "#2F80ED",
              success: "#27AE60",
              warning: "#E2B93B",
              error: "#EB5757",
              black1: "#000000",
              black2: "#1D1D1D",
              black3: "#282828",
              white: "#FFFFFF",
              grey5: "#333333",
              grey4: "#4F4F4F",
              grey3: "#828282",
              grey2: "#BDBDBD",
              grey1: "#E0E0E0"
            }
        }
    },
    plugins: [],
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `composables/**/*.{js,ts}`,
      `plugins/**/*.{js,ts}`,
      `App.{js,ts,vue}`,
      `app.{js,ts,vue}`
    ],
    darkMode: 'class',
}
  
export const fonts = {
  greatVibes: `'Great Vibes', cursive`,
  montserrat: `'Montserrat', sans-serif`,
  raleway: `'Raleway', sans-serif`,
  aBeeZee: `'ABeeZee', sans-serif;`,
  dancingScript: `'Dancing Script', cursive`
};

export const colours = {
  background: "#FCF7F9",
  backgroundDarker: "#EBE4E6",
  primaryText: "#4A3838",
  secondaryText: "#FFAAAD",
  pink: "#D12148",
  boxShadow: "1px 5px 1em rgba(136, 136, 136, 0.5)",
  smallShadow: "1px 1px 0.4em rgba(136, 136, 136, 0.5)",
  darkerBoxShadow: "1px 5px 1em rgba(0, 0, 0, 0.5)",
  scroll: `::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: lightgray;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }`
};

//MEDIA QUERIES
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileTablet: "564px",
  tablet: "768px",
  tabletLaptop: "769px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1441px",
  desktopL: "2560px"
};
//IF mobile first use max-width
//IF desktop first use min-width
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileTablet: `(min-width: ${size.mobileTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletLaptop: `(min-width: ${size.tabletLaptop})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`
};

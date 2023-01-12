import Typography from "typography";
import GithubTheme from "typography-theme-github";

GithubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    "h1,h2,h3,h4,h5,h6": {
      marginTop: rhythm(1 / 2),
    },
    h1: {
      fontWeight: 900,
      letterSpacing: "-1px",
    },
  });
  GithubTheme.scaleRatio = 5 / 2;
  const typography = new Typography(GithubTheme)
  // Hot reload typography in development.
  if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles();
  }
  
  export default typography;
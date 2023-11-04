// Create a file (e.g., svgLoader.js) to import SVG files

// Define the context for the 'svgs' directory
const svgContext = require.context('', false, /\.svg$/);

// Create an array to store the imported SVG components
const svgArray = svgContext.keys().map(svgContext);

export default svgArray;

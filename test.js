const resizeOptimizeImages = require('resize-optimize-images');
 
(async () => {
	// Set the options.
	let path = __dirname + "/images/_DSC6794.png";
	let finalPath = __dirname + "/images/";
    const options = {
        images: [path, finalPath],
        width: 1000,
        quality: 90
    };
 
    // Run the module.
    await resizeOptimizeImages(options);
})();
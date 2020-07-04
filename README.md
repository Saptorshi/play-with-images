# play-with-images

_DSC6794.png 22MB is the original image

nvm use 10

run node index.js => triggers imagemin npm module => resulting image is stored in build/images => 22MB to less than 4MB depending on quality between 0.6-0.8

run node test.js => triggers resize-optimize-images npm module => resulting image is replaced in images/ folder => 22MB to less than 1.2MB depending on width parameter ~ 1000

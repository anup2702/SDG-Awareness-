const https = require('https');
const fs = require('fs');
const path = require('path');

// SDG images data
const images = [
  { id: 1, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-01.jpg' },
  { id: 2, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-02.jpg' },
  { id: 3, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-03.jpg' },
  { id: 4, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-04.jpg' },
  { id: 5, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-05.jpg' },
  { id: 6, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-06.jpg' },
  { id: 7, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-07.jpg' },
  { id: 8, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-08.jpg' },
  { id: 9, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-09.jpg' },
  { id: 10, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-10.jpg' },
  { id: 11, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-11.jpg' },
  { id: 12, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-12.jpg' },
  { id: 13, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-13.jpg' },
  { id: 14, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-14.jpg' },
  { id: 15, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-15.jpg' },
  { id: 16, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-16.jpg' },
  { id: 17, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-17.jpg' }
];

// Directory to save images
const publicImagesDir = path.join(__dirname, '../public/images');

// Create directory if it doesn't exist
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
  console.log(`Created directory: ${publicImagesDir}`);
}

// Download each image
images.forEach(image => {
  const filePath = path.join(publicImagesDir, `sdg${image.id}.png`);
  
  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`Image for SDG ${image.id} already exists, skipping...`);
    return;
  }
  
  console.log(`Downloading image for SDG ${image.id}...`);
  
  https.get(image.url, (response) => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download image for SDG ${image.id}: ${response.statusCode}`);
      return;
    }
    
    const fileStream = fs.createWriteStream(filePath);
    response.pipe(fileStream);
    
    fileStream.on('finish', () => {
      fileStream.close();
      console.log(`Downloaded image for SDG ${image.id}`);
    });
    
    fileStream.on('error', (err) => {
      fs.unlink(filePath, () => {}); // Delete the file if there was an error
      console.error(`Error saving image for SDG ${image.id}: ${err.message}`);
    });
  }).on('error', (err) => {
    console.error(`Error downloading image for SDG ${image.id}: ${err.message}`);
  });
});

console.log('Image download process started. Check the console for progress.'); 
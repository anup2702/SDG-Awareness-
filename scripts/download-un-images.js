const https = require('https');
const fs = require('fs');
const path = require('path');

// Official UN SDG image URLs
const images = [
  { number: 1, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-01.jpg' },
  { number: 2, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-02.jpg' },
  { number: 3, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-03.jpg' },
  { number: 4, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-04.jpg' },
  { number: 5, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-05.jpg' },
  { number: 6, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-06.jpg' },
  { number: 7, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-07.jpg' },
  { number: 8, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-08.jpg' },
  { number: 9, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-09.jpg' },
  { number: 10, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-10.jpg' },
  { number: 11, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-11.jpg' },
  { number: 12, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-12.jpg' },
  { number: 13, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-13.jpg' },
  { number: 14, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-14.jpg' },
  { number: 15, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-15.jpg' },
  { number: 16, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-16.jpg' },
  { number: 17, url: 'https://www.un.org/sustainabledevelopment/wp-content/uploads/2019/01/SDG_Icons-17.jpg' }
];

// Directory to save images
const publicImagesDir = path.join(__dirname, '../public/images');

// Create directory if it doesn't exist
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
  console.log(`Created directory: ${publicImagesDir}`);
}

// Download each image
images.forEach(({ number, url }) => {
  const filePath = path.join(publicImagesDir, `sdg${number}.jpg`);
  
  // Skip if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`Image for SDG ${number} already exists, skipping...`);
    return;
  }

  console.log(`Downloading image for SDG ${number}...`);
  
  https.get(url, (response) => {
    if (response.statusCode === 200) {
      const fileStream = fs.createWriteStream(filePath);
      response.pipe(fileStream);
      
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded image for SDG ${number}`);
      });
    } else {
      console.error(`Failed to download image for SDG ${number}: ${response.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading image for SDG ${number}:`, err.message);
  });
}); 
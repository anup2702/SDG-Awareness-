const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// SDG colors
const sdgColors = [
  '#E5243B', // SDG 1: No Poverty
  '#DDA63A', // SDG 2: Zero Hunger
  '#4C9F38', // SDG 3: Good Health and Well-being
  '#C5192D', // SDG 4: Quality Education
  '#FF3A21', // SDG 5: Gender Equality
  '#26BDE2', // SDG 6: Clean Water and Sanitation
  '#FCC30B', // SDG 7: Affordable and Clean Energy
  '#A21942', // SDG 8: Decent Work and Economic Growth
  '#FD6925', // SDG 9: Industry, Innovation and Infrastructure
  '#DD1367', // SDG 10: Reduced Inequalities
  '#FD9D24', // SDG 11: Sustainable Cities and Communities
  '#BF8B2E', // SDG 12: Responsible Consumption and Production
  '#3F7E44', // SDG 13: Climate Action
  '#0A97D9', // SDG 14: Life Below Water
  '#56C02B', // SDG 15: Life on Land
  '#00689D', // SDG 16: Peace, Justice and Strong Institutions
  '#19486A'  // SDG 17: Partnerships for the Goals
];

// Directory to save images
const publicImagesDir = path.join(__dirname, '../public/images');

// Create directory if it doesn't exist
if (!fs.existsSync(publicImagesDir)) {
  fs.mkdirSync(publicImagesDir, { recursive: true });
  console.log(`Created directory: ${publicImagesDir}`);
}

// Generate placeholder images for each SDG
for (let i = 0; i < 17; i++) {
  const sdgId = i + 1;
  const filePath = path.join(publicImagesDir, `sdg${sdgId}.png`);
  
  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`Image for SDG ${sdgId} already exists, skipping...`);
    continue;
  }
  
  console.log(`Generating image for SDG ${sdgId}...`);
  
  // Create a canvas
  const width = 500;
  const height = 500;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Fill background with SDG color
  ctx.fillStyle = sdgColors[i];
  ctx.fillRect(0, 0, width, height);
  
  // Add SDG number
  ctx.fillStyle = 'white';
  ctx.font = 'bold 200px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(sdgId.toString(), width / 2, height / 2);
  
  // Add "SDG" text
  ctx.font = 'bold 60px Arial';
  ctx.fillText('SDG', width / 2, height / 2 + 120);
  
  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(filePath, buffer);
  
  console.log(`Generated image for SDG ${sdgId}`);
}

console.log('All placeholder images have been generated.'); 
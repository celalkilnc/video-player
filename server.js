const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: 'https://[GITHUB_USERNAME].github.io'
}));

// Gizli video URL'si
const VIDEO_ID = "1wa4h6reZ0-3a_QHut_ooUqN23k9Q4xWE";
const VIDEO_URL = `https://drive.google.com/file/d/${VIDEO_ID}/preview`;

app.get('/video-proxy', (req, res) => {
  res.redirect(VIDEO_URL);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
}); 
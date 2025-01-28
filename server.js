const express = require('express');
const cors = require('cors');
const app = express();

// CORS ayarları
app.use(cors({
  origin: 'https://celalkilnc.github.io'
}));

// Gizli video bilgileri
const VIDEO_ID = "1lx8lx2whytW074tTZfPnh0RlD_fVI1CO";
const VIDEO_URL = `https://drive.google.com/file/d/${VIDEO_ID}/preview`;

// Proxy endpoint
app.get('/secure-video', (req, res) => {
  res.redirect(VIDEO_URL);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 
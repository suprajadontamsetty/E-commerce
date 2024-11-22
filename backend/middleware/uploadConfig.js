import multer from 'multer';
import path from 'path';

// Define storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // specify the folder for file uploads
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // generate a unique filename
  }
});

// Initialize multer with the storage configuration
export const upload = multer({ storage: storage });  // Named export

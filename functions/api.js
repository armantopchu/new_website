const express = require('express');
const bodyParser = require('body-parser');
const { generateWordFile } = require('./generateWord');  // Import your Word file generation function

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define your API endpoint
app.post('/generate-word', async (req, res) => {
  try {
    // Call your function to generate Word file using the request data
    const result = await generateWordFile(req.body);

    // Respond with success message or result
    res.json({ success: true, result });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

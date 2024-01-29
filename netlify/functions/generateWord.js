// functions/generateWord.js
const { spawnSync } = require('child_process');

exports.handler = async function(event, context) {
  try {
    // Run the Python script as a subprocess
    const result = spawnSync('python', ['generate_word_file.py']);
    
    if (result.error) {
      console.error('Error running generate_word_file.py:', result.error.message);
      return { statusCode: 500, body: 'Internal Server Error' };
    }

    console.log('generate_word_file.py executed successfully');
    return { statusCode: 200, body: 'Word file generated successfully' };
  } catch (error) {
    console.error('Error:', error.message);
    return { statusCode: 500, body: 'Internal Server Error' };
  }
}

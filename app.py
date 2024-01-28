from flask import Flask, render_template, request, jsonify
from generate_word_file import generate_word_file  # Import your Word file generation function

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit-form', methods=['POST'])
def submit_form():
    # Retrieve form data from the request
    data = request.form

    # Call your function to generate Word file using the form data
    generate_word_file(data)

    # Return a response (for simplicity, just echoing back the received data)
    return jsonify({'success': True, 'data': data})

if __name__ == '__main__':
    app.run(debug=True)

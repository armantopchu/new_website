from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit-form', methods=['POST'])
def submit_form():
    # Retrieve form data from the request
    data = request.get_json()

    # Extract relevant data (modify this based on your form structure)
    first_name = data.get('first_name')
    surname = data.get('surname')
    fee = data.get('fee')

    # Perform any processing with your existing Python code
    # ...

    # Return a response (for simplicity, just echoing back the received data)
    return jsonify({'success': True, 'data': data})

if __name__ == '__main__':
    app.run(debug=True)
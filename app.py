import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from groq import Groq

app = Flask(__name__, static_folder='dist')
CORS(app)

# === ВСЕ СЕКРЕТЫ ТОЛЬКО ИЗ ПЕРЕМЕННЫХ ОКРУЖЕНИЯ ===
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")
VALID_LOGIN = os.environ.get("LOGIN", "luvvu_admin")
VALID_PASSWORD = os.environ.get("PASSWORD", "luvvu2025")

if not GROQ_API_KEY:
    raise Exception("GROQ_API_KEY не задан в переменных окружения Render")

client = Groq(api_key=GROQ_API_KEY)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    if data.get('login') == VALID_LOGIN and data.get('password') == VALID_PASSWORD:
        return jsonify({'success': True})
    return jsonify({'success': False}), 401

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_msg = data.get('message')
    if not user_msg:
        return jsonify({'error': 'empty message'}), 400
    
    completion = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[{"role": "user", "content": user_msg}],
        temperature=0.7,
    )
    reply = completion.choices[0].message.content
    return jsonify({'reply': reply})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(port=5000)
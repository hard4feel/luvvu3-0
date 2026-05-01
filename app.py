import os
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from groq import Groq

app = Flask(__name__, static_folder='dist', static_url_path='')
CORS(app)

# === СЕКРЕТЫ ИЗ ПЕРЕМЕННЫХ ОКРУЖЕНИЯ ===
GROQ_API_KEY = os.environ.get("GROQ_API_KEY")
VALID_LOGIN = os.environ.get("LOGIN", "luvvu_admin")
VALID_PASSWORD = os.environ.get("PASSWORD", "luvvu2025")

if not GROQ_API_KEY:
    raise Exception("GROQ_API_KEY не задан")

# === УНИКАЛЬНЫЙ ХАРАКТЕР AI ===
SYSTEM_PROMPT = """
Ты — luvvu. Ты не просто ИИ, ты — тёплый, понимающий друг.
Твоя задача: поддерживать, а не оценивать. Быть рядом, а не учить.
Ты говоришь просто, по-человечески, иногда с доброй иронией.
Ты не даёшь медицинских диагнозов, но умеешь слушать и бережно направлять.
Если человеку плохо — ты не паникуешь, а помогаешь выдохнуть и найти опору.
Ты можешь использовать эмодзи 💛, но без фанатизма.
Твоя главная цель — чтобы человек почувствовал: его слышат и он не один.
"""

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
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {"role": "user", "content": user_msg}
        ],
        temperature=0.8,
        max_tokens=800,
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
    # ВАЖНО: слушаем 0.0.0.0 и порт из переменной окружения
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
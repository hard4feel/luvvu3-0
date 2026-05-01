import streamlit as st
import requests
import json
from groq import Groq
import os

# === ЗАГРУЗКА СЕКРЕТОВ ИЗ STREAMLIT CLOUD ===
GROQ_API_KEY = st.secrets["GROQ_API_KEY"]
VALID_LOGIN = st.secrets["LOGIN"]
VALID_PASSWORD = st.secrets["PASSWORD"]

# ПРОВЕРКА ЛОГИНА
if "logged_in" not in st.session_state:
    st.session_state.logged_in = False

if not st.session_state.logged_in:
    st.title("luvvu")
    login = st.text_input("Логин")
    password = st.text_input("Пароль", type="password")
    if st.button("Войти"):
        if login == VALID_LOGIN and password == VALID_PASSWORD:
            st.session_state.logged_in = True
            st.rerun()
        else:
            st.error("Неверный логин или пароль")
    st.stop()

# === ЗАГРУЗКА ТВОЕГО HTML-ДИЗАЙНА ===
def load_local_html():
    """Читает твой основной HTML-файл и возвращает как строку"""
    with open("Emergent _ Fullstack App.html", "r", encoding="utf-8") as f:
        return f.read()

# Показываем ТВОЙ дизайн
st.components.v1.html(load_local_html(), height=800, scrolling=True)

# === ПОДКЛЮЧАЕМ GROQ AI К ТВОЕМУ ЧАТУ (ЧЕРЕЗ КАСТОМНЫЙ JS) ===
# Добавляем скрипт, который перехватывает отправку сообщения в твоём чате
# и отправляет запрос к бэкенду Streamlit
st.markdown("""
<script>
// Ждём, когда загрузится твой чат
setTimeout(() => {
    // Находим форму или кнопку отправки в твоём дизайне
    const sendButton = document.querySelector('button[type="submit"], .send-btn, #send');
    const inputField = document.querySelector('input[type="text"], textarea');
    
    if (sendButton && inputField) {
        // Сохраняем оригинальную функцию отправки
        const originalClick = sendButton.onclick;
        
        // Переопределяем отправку
        sendButton.onclick = async (event) => {
            const userMessage = inputField.value;
            if (!userMessage) return;
            
            // Отправляем запрос к Streamlit бэкенду
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMessage })
            });
            const data = await response.json();
            
            // Вставляем ответ AI в твой чат (нужно найти контейнер сообщений)
            const messagesContainer = document.querySelector('.messages, .chat-messages');
            if (messagesContainer) {
                const aiMessage = document.createElement('div');
                aiMessage.className = 'message bot-message';
                aiMessage.innerText = data.reply;
                messagesContainer.appendChild(aiMessage);
            }
            
            // Вызываем оригинальную функцию, если нужна
            if (originalClick) originalClick.call(sendButton, event);
        };
    }
}, 2000);
</script>
""", unsafe_allow_html=True)

# Бэкенд для обработки AI-запросов
import streamlit as st
from groq import Groq

# Создаём API эндпоинт внутри Streamlit (через запросы)
if "groq_client" not in st.session_state:
    st.session_state.groq_client = Groq(api_key=GROQ_API_KEY)

def get_ai_response(user_message):
    try:
        completion = st.session_state.groq_client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{"role": "user", "content": user_message}],
            temperature=0.7,
        )
        return completion.choices[0].message.content
    except Exception as e:
        return f"Ошибка AI: {str(e)}"

# Обработчик для запросов из JavaScript
if st.query_params:
    user_msg = st.query_params.get("message", [None])[0]
    if user_msg:
        reply = get_ai_response(user_msg)
        st.json({"reply": reply})
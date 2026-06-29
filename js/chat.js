async function sendMessage() {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    const message = input.value.trim();
    if (!message) return;
    chatBox.innerHTML += `<div class="chat-message user"><div class="message-content">${message}</div></div>`;
    input.value = "";
    chatBox.innerHTML += `<div class="chat-message bot" id="loading"><div class="message-content">⏳ MentorGG AI sedang mengetik...</div></div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    try {
        const res = await fetch("http://127.0.0.1:8000/ai/chat", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message})});
        const data = await res.json();
        document.getElementById("loading").remove();
        chatBox.innerHTML += `<div class="chat-message bot"><div class="message-content">${data.response}</div></div>`;
    } catch(e) {
        document.getElementById("loading").remove();
        chatBox.innerHTML += `<div class="chat-message bot"><div class="message-content">Gagal terhubung ke server.</div></div>`;
    }
    chatBox.scrollTop = chatBox.scrollHeight;
}

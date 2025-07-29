document.addEventListener("DOMContentLoaded", async () => {
  const socket = io("http://localhost:5000");
  const messagesDiv = document.getElementById("messages");
  const input = document.getElementById("messageInput");
  const sendBtn = document.getElementById("sendBtn");

  const userId = "687f180b3c54c79b362fa409"; // You can make this dynamic from URL params
  let sessionId = "301613e3322c979773ef4638fcad7548";

  // Load user & session
  const userData = await getSingleUser(userId);
  if (userData.user) sessionId = userData.user.sessionId;

  // Load existing conversation
  const convData = await getConversation(sessionId);
  if (convData.conversation) {
    convData.conversation.messages.forEach((msg) => appendMessage(msg));
  }
console.log("conversat", convData)
  // Join socket room
  socket.emit("join", sessionId);

  // Listen for admin replies
  socket.on("admin-reply", (data) => {
    if (data.sessionId === sessionId)
      appendMessage({ sender: "admin", text: data.text });
  });

  // Listen for admin status changes
  socket.on("admin-status", (data) => {
    appendMessage({ sender: "status", text: data.message });
  });

  // Send message event
  const sendMessage = async () => {
    const message = input.value.trim();
    if (!message) return;

    appendMessage({ sender: "user", text: message });
    const res = await sendMessageAPI({ sessionId, userId, message });

    if (res.status === "bot_replied") {
      appendMessage({ sender: "bot", text: res.reply });
    }

    input.value = "";
  };

  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", (e) => e.key === "Enter" && sendMessage());

  // Append message to UI
  function appendMessage(msg) {
    const div = document.createElement("div");

    if (msg.sender === "status") {
      div.className = `text-center font-medium ${
        msg.text.includes("online") ? "text-green-500" : "text-red-500"
      }`;
      div.innerText = msg.text;
    } else {
      const isOwn = msg.sender === "user";
      div.className = `p-2 rounded-lg max-w-[70%] ${
        isOwn
          ? "bg-cyan-100 ml-auto text-right"
          : "bg-lime-100 mr-auto text-left"
      }`;
      div.innerHTML = `<strong>${msg.sender}</strong>: ${msg.text}`;
    }

    messagesDiv.appendChild(div);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
});

const BASE_URL = "http://localhost:5000/api";

async function getSingleUser(userId) {
  const res = await fetch(`${BASE_URL}/users/singleUser/${userId}`);
  return res.json();
}

async function getConversation(sessionId) {
  const res = await fetch(
    `${BASE_URL}/conversation/singleConversation/${sessionId}`
  );
  return res.json();
}

async function sendMessageAPI(data) {
  const res = await fetch(`${BASE_URL}/conversation/message`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

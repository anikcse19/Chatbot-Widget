document.addEventListener("DOMContentLoaded", () => {
  const welcomeDiv = document.getElementById("welcomeDiv");
  const messageDiv = document.getElementById("messageDiv");
  const chatDiv = document.getElementById("chatDiv");
  const openChatBtn = document.getElementById("openChatBtn");
  const chatIcon = document.getElementById("chatIcon");



openChatBtn.addEventListener("click", () => {
  const isAnyOpen =
    !welcomeDiv.classList.contains("hidden") ||
    !messageDiv.classList.contains("hidden") ||
    !chatDiv.classList.contains("hidden");

  if (isAnyOpen) {
    // Close all divs
    welcomeDiv.classList.add("hidden");
    messageDiv.classList.add("hidden");
    chatDiv.classList.add("hidden");

    chatIcon.src = "speech.png"; // back to open icon
    chatIcon.alt = "Open chat";
  } else {
    // Open welcome div only
    welcomeDiv.classList.remove("hidden");

    chatIcon.src = "close.png"; // change to close icon
    chatIcon.alt = "Close chat";
  }
});

  document.getElementById("messageBtn").addEventListener("click", () => {
    welcomeDiv.classList.add("hidden");
    messageDiv.classList.remove("hidden"); // keeps 'flex' class intact
  });

  document.getElementById("messageBtn2").addEventListener("click", () => {
    welcomeDiv.classList.add("hidden");
    messageDiv.classList.remove("hidden");
  });

  document.getElementById("welcomeBtn").addEventListener("click", () => {
    messageDiv.classList.add("hidden");
    welcomeDiv.classList.remove("hidden");
  });

  document.getElementById("welcomeBtn2").addEventListener("click", () => {
    messageDiv.classList.add("hidden");
    welcomeDiv.classList.remove("hidden");
  });

  document.getElementById("backBtn").addEventListener("click", () => {
    messageDiv.classList.add("hidden");
    welcomeDiv.classList.remove("hidden");
  });
  //   chat page
  document.getElementById("chatBtn").addEventListener("click", () => {
    messageDiv.classList.add("hidden");
    welcomeDiv.classList.add("hidden");
    chatDiv.classList.remove("hidden");
  });
  document.getElementById("chatBtn2").addEventListener("click", () => {
    messageDiv.classList.add("hidden");
    welcomeDiv.classList.add("hidden");
    chatDiv.classList.remove("hidden");
  });
  document.getElementById("chatBackBtn").addEventListener("click", () => {
    messageDiv.classList.add("hidden");
    chatDiv.classList.add("hidden");
    welcomeDiv.classList.remove("hidden");
  });
});

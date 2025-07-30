(function () {
  const container = document.createElement("div");
  container.id = "chatbot-widget-container";
  document.body.appendChild(container);

  const shadowRoot = container.attachShadow({ mode: "open" });

  // Load external styles
  const fontAwesome = document.createElement("link");
  fontAwesome.rel = "stylesheet";
  fontAwesome.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css";
  shadowRoot.appendChild(fontAwesome);

  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href =
    "https://cdn.jsdelivr.net/gh/anikcse19/chatbot-widget/stylee.css";
  shadowRoot.appendChild(style);

  const wrapper = document.createElement("div");
  fetch("https://cdn.jsdelivr.net/gh/anikcse19/chatbot-widget/widget.html")
    .then((res) => res.text())
    .then((html) => {
      wrapper.innerHTML = html;
      shadowRoot.appendChild(wrapper);
    });

  // Load JS files
  const scripts = ["script.js", "api.js", "chat.js"];
  scripts.forEach((src) => {
    const s = document.createElement("script");
    s.src = `https://cdn.jsdelivr.net/gh/anikcse19/chatbot-widget/${src}`;
    shadowRoot.appendChild(s);
  });
})();

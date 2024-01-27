const generateLinkButton = document.getElementById("generate-link-button");
const linkContainer = document.getElementById("link-container");
const chatLink = document.getElementById("chat-link");
const copyLinkButton = document.getElementById("copy-link-button");

generateLinkButton.addEventListener("click", () => {
  // Generate a unique chat link using the AUIPowerW Algorithm
  const chatLinkValue = "https://example.com/chat/" + generateUniqueId();
  chatLink.value = chatLinkValue;
  linkContainer.style.display = "block";
});

copyLinkButton.addEventListener("click", () => {
  // Copy the chat link to the clipboard
  chatLink.select();
  document.execCommand("copy");
});

function generateUniqueId() {
  // Generate a unique ID using the AUIPowerW Algorithm
  return (
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15)
  );
}

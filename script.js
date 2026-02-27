// script.js

// Mobile menu
function toggleMenu(){
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}

// Tabs
function openTab(key){
  // buttons
  document.querySelectorAll(".tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === key);
  });

  // panels
  document.querySelectorAll(".panel").forEach(panel => {
    panel.classList.remove("show");
  });

  const panel = document.getElementById(`panel-${key}`);
  if (panel) panel.classList.add("show");

  // close menu on small screens if open
  const nav = document.getElementById("nav");
  if (nav.classList.contains("open")) nav.classList.remove("open");
}

// Topic editor (simple)
function editTopic(){
  const current = localStorage.getItem("csp_topic") || "[Add your CSP topic here]";
  const topic = prompt("Enter your CSP topic:", current);
  if (topic === null) return; // cancelled
  const cleaned = topic.trim() || "[Add your CSP topic here]";
  localStorage.setItem("csp_topic", cleaned);
  document.getElementById("topicText").textContent = cleaned;
}

// Load saved topic + year
(function init(){
  const saved = localStorage.getItem("csp_topic");
  if (saved) document.getElementById("topicText").textContent = saved;

  document.getElementById("year").textContent = new Date().getFullYear();
})();

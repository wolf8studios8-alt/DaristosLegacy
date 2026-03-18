let nodeHistory = [];
let currentNodeName = 'Go back';

function initGame() {
  // Cargar desde LocalStorage si existe
  const savedNode = localStorage.getItem('daristos_currentNode');
  const savedHistory = localStorage.getItem('daristos_history');

  if (savedNode && storyData[savedNode]) {
    currentNodeName = savedNode;
    if (savedHistory) {
      nodeHistory = JSON.parse(savedHistory);
    }
  }
  renderNode(currentNodeName);
}

function renderNode(nodeName) {
  const node = storyData[nodeName];
  if (!node) return;

  currentNodeName = nodeName;
  
  // Guardar estado actual en LocalStorage
  localStorage.setItem('daristos_currentNode', currentNodeName);
  localStorage.setItem('daristos_history', JSON.stringify(nodeHistory));

  // Reiniciar la animación
  const storyContent = document.getElementById('story-content');
  storyContent.classList.remove('fade-in');
  void storyContent.offsetWidth; // Trigger reflow para reiniciar CSS animation
  storyContent.classList.add('fade-in');

  document.getElementById('story-text').innerHTML = node.text;
  
  const choicesContainer = document.getElementById('choices-container');
  choicesContainer.innerHTML = '';
  
  node.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.onclick = () => goToNode(choice);
    choicesContainer.appendChild(btn);
  });

  document.getElementById('back-btn').disabled = nodeHistory.length === 0;
}

function goToNode(nodeName) {
  nodeHistory.push(currentNodeName);
  renderNode(nodeName);
}

function goBack() {
  if (nodeHistory.length > 0) {
    const previousNode = nodeHistory.pop();
    renderNode(previousNode);
  }
}

function resetGame() {
  if(confirm("¿Estás seguro de que quieres borrar tu progreso y empezar de nuevo?")) {
    localStorage.removeItem('daristos_currentNode');
    localStorage.removeItem('daristos_history');
    nodeHistory = [];
    renderNode('Go back'); // Nodo inicial
  }
}

// Iniciar el juego al cargar la página
window.onload = initGame;

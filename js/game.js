let nodeHistory = [];
let currentNodeName = 'Go back';

function renderNode(nodeName) {
  const node = storyData[nodeName];
  if (!node) return;

  currentNodeName = nodeName;
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

// Start the game
renderNode('Go back');

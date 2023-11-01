export function insertAfter(newNode, targetNode, targetNodeClass) {
    targetNode.after(newNode);
    targetNode.classList.add(targetNodeClass);
}

export function generateError(text) {
    const p = document.createElement('p');
    p.className = 'error';
    p.innerText = text;
    return p;
}

export function removeError(node) {
    if (node) {
        node.previousSibling.classList.remove('error-border');
        node.remove();
    }
}
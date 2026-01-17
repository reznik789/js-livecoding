class JQueryNode {
  node;
  constructor(node) {
    this.node = node
  }
  appendClass(class) {
    if (typeof class !== 'string') return this;
    this.node.classList.add(class);
    return this;
  }
  setHTML(html) {
    if (typeof html !== 'string') return this;
    this.node.innerHTML = html;
    return this;
  }
  onClick(clb){
    if (typeof clb !== 'function') return this;
    this.node.addEventListener('click', clb);
    return this;
  }
}

function $(selector) {
  if (typeof selector !== "string") return null;
  const node = document.querySelector(selector);
  return !node ? null : new JQueryNode(node);
}



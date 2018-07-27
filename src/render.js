export default function render(node, container) {
  let dom;
  if (typeof node === 'string') {
    dom = document.createTextNode(node);
    container.appendChild(dom);
  } else if (node.type && typeof node.type === 'string') {
    dom = document.createElement(node.type);
    setAttrs(dom, node.attrs);
    container.appendChild(dom);
    node.children.forEach(element => {
      render(element, dom)
    });
  } else if (node.type && typeof node.type === "function") {
    const nodeInst = node.type();
    dom = document.createElement(nodeInst.type);
    setAttrs(dom, nodeInst.attrs);
    container.appendChild(dom);
    nodeInst.children.forEach(element => {
      render(element, dom)
    });
  }
}

const setAttrs = (dom, attrs) => {
  for (let name in attrs) {
    const value = attrs[name];
    if (name === 'className' ) {
      dom.setAttribute('class', value);
    } else {
      dom.setAttribute(name, value);
    }
  }
}
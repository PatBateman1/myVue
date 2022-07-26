/**
 * compile the dom string to actual dom
 * @param {*} template 
 * @param {*} parent 
 * @returns 
 */
export const compiler = function (template, parent) {
  if (template === '') return;
  let curr = '';
  const parents = [parent];

  for (let i = 0; i < template.length; i++) {
    if (template[i] === '<') {

      if (curr) {
        const textNode = document.createTextNode(curr);
        parents[parents.length - 1].appendChild(textNode);
        curr = '';
      }
    } else if (template[i] === '>') {
      if (curr.indexOf('/') === -1) {
        const currParentNode = parents[parents.length - 1];
        const newParentNode = document.createElement(curr);
        currParentNode.appendChild(newParentNode);
        parents.push(newParentNode);
      } else {
        parents.pop()
      }
      curr = '';
    } else {
      curr += template[i];
    }
  }
}

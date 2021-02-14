export default function getElementTyped<T extends HTMLElement>(selector: string, tagName: string): T | never {
  const element = document.querySelector(selector);

  if (!element) throw new Error("element can not found");

  const elementTagName = element.tagName;
  if (elementTagName == tagName) {
    return element as T;
  } else {
    throw new Error(`tagName does not match expected:${tagName} found:${elementTagName}`);
  }
}


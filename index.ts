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

// Arda tanrıkulu nun çözümü, fonksiyonu çağırırken tip belirtmeye gerek kalmıyor
//fonksiyon tipi tagName argümanından infer ediyor.
export function getElementTyped2<TElementName extends keyof HTMLElementTagNameMap, TElement extends HTMLElementTagNameMap[TElementName]>(selector: string, tagName: TElementName): TElement | never {
  const element = document.querySelector(selector);

  if (!element) throw new Error("element can not found");

  const elementTagName = element.tagName.toLowerCase();
  if (elementTagName == tagName) {
    return element as TElement;
  } else {
    throw new Error(`tagName does not match expected:${tagName} found:${elementTagName}`);
  }
}

//getElementTyped2("#user-input", "input");
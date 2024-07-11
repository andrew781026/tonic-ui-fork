let timeoutId: NodeJS.Timeout;

enum Position {
  TopLeft = 'top-left',
  Left = "left",
  BottomLeft = "bottom-left",
  Top = "top",
  Bottom = "bottom",
  TopRight = "top-right",
  Right = "right",
  BottomRight = "bottom-right",
}

interface openToastParams {
  el: HTMLElement,
  position: Position,
  delay: number,
  offset: Record<any, any> | string
}

const setOffset = (target: HTMLElement, position: Position, offset: Record<any, any> | string) => {

  // offset = { top:'4px', bottom:'4px', left:'4px', right:'4px' }
  // offset = '4px'

  const offsetObj = (typeof offset === 'string') ? {top: offset, bottom: offset, left: offset, right: offset} : offset;
  if (position.includes('top') && offsetObj.top) target.style.top = offsetObj.top;
  if (position.includes('left') && offsetObj.left) target.style.left = offsetObj.left;
  if (position.includes('bottom') && offsetObj.bottom) target.style.bottom = offsetObj.bottom;
  if (position.includes('right') && offsetObj.right) target.style.right = offsetObj.right;
}

export const openToast = ({el, position, delay = 2000, offset}: openToastParams) => {

  clearTimeout(timeoutId);
  const toastEl = el;
  if (!toastEl) return;

  toastEl.className = `fixed z-10 toast gap-1 rounded black ${position}`;
  setOffset(toastEl, position, offset);

  document.body.append(toastEl); // make element at root of body
  timeoutId = setTimeout(() => toastEl.classList.add('fade-in'));

  // on animate-end
  toastEl.addEventListener("animationend", (event) => {
    const ele = <HTMLElement>event.target;
    if (!ele) return;
    else if (ele.classList.contains('fade-in')) ele.className = `fixed z-10 toast gap-1 rounded black in ${position}`;
    else ele.className = `fixed z-10 toast gap-1 rounded black out ${position}`;
  });

  timeoutId = setTimeout(() => {
    // fade-out
    toastEl.className = `fixed z-10 toast gap-1 rounded black fade-out ${position}`
  }, delay);
}

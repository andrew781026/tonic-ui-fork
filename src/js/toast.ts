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

export const openToast = (ele: HTMLElement, position: Position, delay = 2000) => {

  clearTimeout(timeoutId);
  const toastEl = ele;
  if (!toastEl) return;

  toastEl.className = `fixed z-10 toast gap-1 rounded black ${position}`;
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

let timeoutId: NodeJS.Timeout;

export function openToast(position: string) {
  clearTimeout(timeoutId);
  const toastEl = <HTMLElement>document.querySelector('#toast');

  const animateInMap: {[index: string]:any}  = {
    'top-left': 'animate__backInLeft',
    'left': 'animate__backInLeft',
    'bottom-left': 'animate__backInLeft',
    'top': 'animate__backInDown',
    'bottom': 'animate__backInUp',
    'top-right': 'animate__backInRight',
    'right': 'animate__backInRight',
    'bottom-right': 'animate__backInRight',
  }

  const animateOutMap: {[index: string]:any}  = {
    'top-left': 'animate__backOutLeft',
    'left': 'animate__backOutLeft',
    'bottom-left': 'animate__backOutLeft',
    'top': 'animate__backOutUp',
    'bottom': 'animate__backOutDown',
    'top-right': 'animate__backOutRight',
    'right': 'animate__backOutRight',
    'bottom-right': 'animate__backOutRight',
  }

  const positionStyleMap: {[index: string]:any}  = {
    'top-left': 'left:0;top:0',
    'left': 'left:0;top:50%',
    'top': 'top:0;left:50%',
    'top-right': 'right:0;top:0',
    'right': 'right:0;top:50%;',
    'bottom': 'bottom:0;left:50%',
    'bottom-left': 'left:0;bottom:0',
    'bottom-right': 'right:0;bottom:0',
  }

  if (!toastEl) return;

  toastEl.className = `fixed z-10 toast gap-1 rounded animate__animated ${animateInMap[position]}`;
  // @ts-ignore
  toastEl.style = positionStyleMap[position];
  document.body.append(toastEl);
  timeoutId = setTimeout(() => {
    toastEl.className = `fixed z-10 toast gap-1 rounded animate__animated ${animateOutMap[position]}`
  }, 2000);
}

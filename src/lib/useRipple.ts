export const useRipple = (event: MouseEvent, theme: String) => {
  const button: HTMLElement = event.currentTarget;
  const {left, top} = button.getBoundingClientRect();
  if (button) {
    const scrollTop = window.pageYOffset
      || document.documentElement.scrollTop
      || document.body.scrollTop
      || 0;
    const scrollLeft = window.pageXOffset
      || document.documentElement.scrollLeft
      || document.body.scrollLeft
      || 0;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX + scrollLeft - (button.offsetLeft + radius)}px`;
    circle.style.top = `${event.clientY + scrollTop - (button.offsetTop + radius)}px`;
    circle.classList.add('init-button-ripple');
    const ripple = button.getElementsByClassName('init-button-ripple')[0];
    ripple && ripple.remove();
    theme !== 'link' && button.appendChild(circle);
  }
};

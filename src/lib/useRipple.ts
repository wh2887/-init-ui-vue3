export const useRipple = (event: MouseEvent, theme: String) => {
  const button = event.currentTarget;
  const circle = document.createElement('span');
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - (button.offsetLeft + radius)}px`;
  circle.style.top = `${event.clientY - (button.offsetTop + radius)}px`;
  circle.classList.add('init-button-ripple');
  const ripple = button.getElementsByClassName('init-button-ripple')[0];
  ripple && ripple.remove();
  theme !== 'link' && button.appendChild(circle);
};

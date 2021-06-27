export const animateCheck = () => {
  const svg = document.getElementById('check-animated-svg');
  svg?.classList.add('progress');
  setTimeout(() => {
    svg?.classList.toggle('progress');
    svg?.classList.toggle('ready');
  }, 3000);
};

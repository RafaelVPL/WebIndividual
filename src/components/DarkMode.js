const toggleDarkMode = () => {
  const isDarkMode = document.body.classList.toggle('dark-mode');
  localStorage.setItem('dark-mode', isDarkMode);
};

const initializeDarkMode = () => {
  const isDarkMode = localStorage.getItem('dark-mode') === 'true';
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    document.querySelector('.navbar').classList.add('dark-mode');
  }
};

export { toggleDarkMode, initializeDarkMode };
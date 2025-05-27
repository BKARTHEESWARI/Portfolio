
const links = document.querySelectorAll('a[href^="http"]');
links.forEach(link => {
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noopener noreferrer');
});
console.log("Portfolio site initialized");

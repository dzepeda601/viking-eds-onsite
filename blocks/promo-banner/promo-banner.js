export default function decorate(block) {
  // Set the background image as inline CSS on the block element
  const bgImageElement = block.querySelector(':scope > div:nth-of-type(1)');
  const backgroundImage = bgImageElement.querySelector('img').src;
  block.style.backgroundImage = `url(${backgroundImage})`;

  const textContent = block.querySelector(':scope > div:nth-of-type(2)');
  textContent.classList.add('content');

  // Remove parent element for background image
  bgImageElement.remove();
}
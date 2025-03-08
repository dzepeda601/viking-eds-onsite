import { makeVideo } from '../../scripts/scripts.js';

export default async function decorate(block) {  
  const videoSrc = block.querySelector('div a');

  videoSrc.href = videoSrc.text;
  makeVideo(block.querySelector('div'), videoSrc.href);
  videoSrc.remove();
}
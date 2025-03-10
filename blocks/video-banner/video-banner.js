import { makeVideo } from '../../scripts/scripts.js';

export default async function decorate(block) {  
  const videoSrc = block.querySelector('div a');
  videoSrc.href = videoSrc.href;
  makeVideo(block.querySelector('div'), videoSrc.href);
  videoSrc.remove();


  block.querySelector(':scope > div:nth-of-type(1)').classList.add('video-container');
  block.querySelector(':scope > div:nth-of-type(2)').classList.add('logo-container');
}
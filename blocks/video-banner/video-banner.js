import { makeVideo } from '../../scripts/scripts.js';

export default async function decorate(block) {  
  const videoSrc = block.querySelector('div a');

  const aem = 'https://author-p142507-e1463170.adobeaemcloud.com';
  const url = `${aem}${videoSrc.text}`;

  videoSrc.href = url;
  makeVideo(block.querySelector('div'), videoSrc.href);
  videoSrc.remove();
}
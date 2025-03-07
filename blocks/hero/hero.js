// import { makeVideo } from '../../scripts/scripts.js';

// const aem = 'https://author-p142507-e1463170.adobeaemcloud.com';

export default async function decorate(block) {  
  console.log("block: ", block);
  // // if (Object.values(block.classList).includes('video')) {
  //   const videoSrc = block.querySelector('div a');

  //   console.log("videoSrc: ", videoSrc)
  //   console.log("window.hlx.codeBasePath: ", window.hlx.codeBasePath)

  //   if(videoSrc.href.includes(window.hlx.codeBasePath) && window.hlx.codeBasePath) {
  //     videoSrc.href = videoSrc.text;
  //     console.log("bap bap")
  //   } else {
  //     //replace 
  //     videoSrc.href = `${aem}${videoSrc.text}`;
  //   }

  //   makeVideo(block.querySelector('div'), videoSrc.href);
  //   videoSrc.remove();
  // // }
}
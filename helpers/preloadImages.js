export const preloadImages = (sequencesNumber) => {
  const preloadedImages = {};
  for (let i = 1; i <= sequencesNumber; i++) {
    preloadImageX(i).then((res) => (preloadedImages[i] = res));
  }
  return preloadedImages;
};

export async function preloadImageX(frame) {
  let image = document.createElement("img");
  image.src = `/story_frames_min/${String(frame).padStart(4, "0")}.webp`;
  return image;
}

// export const imagesPreloader = (count) => {
//   const preloadedImages = {};
//   for (let i = 1; i < count; i++) {
//     preloader(pathGenerator(i)).then((image) => (preloadedImages[i] = image));
//   }
//   return preloadedImages;
// };

// const pathGenerator = (name) => {
//   return `/story_frames_min/${String(name).padStart(4, "0")}.webp`;
// };

// const preloader = (src) => {
//   return new Promise((res) => {
//     const image = new Image();
//     const onLoad = () => {
//       res(image);
//     };
//     image.addEventListener("load", onLoad, { once: true });
//     image.src = src;
//   });
// };

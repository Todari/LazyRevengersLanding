export const drawImage = (image, canvas, width, height) => {
  const ctx = canvas.getContext("2d");
  canvas.width = width;
  canvas.height = height;
  const yDiff = image.height - canvas.height;
  const customRatio = 60;

  if (canvas.width > canvas.height) {
    if (height < 480) {
      ctx.drawImage(
        image,
        0,
        0,
        image.width - canvas.width - customRatio * 4.5,
        canvas.height
      );
    } else {
      ctx.drawImage(
        image,
        (canvas.width - width) / 2,
        (canvas.height - height) / 2,
        width,
        height
      );
    }
  } else {
    ctx.drawImage(
      image,
      (canvas.width - (image.width - yDiff)) / 2,
      -customRatio,
      image.width - yDiff,
      canvas.height + customRatio
    );
  }
};

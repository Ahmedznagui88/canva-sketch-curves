const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1048, 1048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
  };
};

canvasSketch(sketch, settings);

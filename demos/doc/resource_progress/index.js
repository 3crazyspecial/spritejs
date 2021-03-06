const {Scene, Sprite, Label} = spritejs;
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1600,
  height: 800,
  // contextType: '2d',
});
const layer = scene.layer();

const images = [
  'https://p1.ssl.qhimg.com/t016dc86e4b2c9b83a4.jpg',
  'https://p0.ssl.qhimg.com/t01408bb4e2bed11d2e.jpg',
  'https://p2.ssl.qhimg.com/t014e6d3eddccf40638.jpg',
  'https://p2.ssl.qhimg.com/t014db3a8e2bf146c5b.jpg',
  'https://p4.ssl.qhimg.com/t01ff1bf2a37a741821.jpg',
  'https://p2.ssl.qhimg.com/t01dc1341ab5d0fe663.jpg',
  'https://p5.ssl.qhimg.com/t01a0acf6aa37d00f91.jpg',
  'https://p1.ssl.qhimg.com/t013b8514570a69a1c8.jpg',
  'https://p2.ssl.qhimg.com/t011c71494e6d98d92b.jpg',
  'https://p4.ssl.qhimg.com/t01ab40609e924d995c.jpg',
  'https://p0.ssl.qhimg.com/t01794495bebb84f47d.jpg',
  'https://p4.ssl.qhimg.com/t01a30bb66a9d11d624.jpg',
  'https://p4.ssl.qhimg.com/t01b3d2c0b0093a957d.jpg',
  'https://p0.ssl.qhimg.com/t010da5e7311c8dd3a9.jpg',
  'https://p5.ssl.qhimg.com/t0189dd547c322b2357.jpg',
  'https://p4.ssl.qhimg.com/t01feb50457ebbada10.jpg',
];

const label = new Label('加载中... 0 / 16');
label.attr({
  anchor: [0.5, 0.5],
  font: '36px Arial',
  lineHeight: 40,
  pos: [800, 300],
});

layer.append(label);

const button = new Label('点击加载');
button.attr({
  anchor: [0.5, 0.5],
  font: '44px Arial',
  pos: [800, 400],
  border: [2, 'black'],
  borderRadius: 12,
  padding: [10, 10],
});
layer.append(button);

async function loadRes() {
  button.remove();

  scene.addEventListener('preload', (evt) => {
    label.text = `加载中... ${evt.detail.loaded.length} / ${evt.detail.resources.length}`;
  });

  const imgs = await scene.preload(...images);

  label.remove();

  imgs.forEach((texture, i) => {
    const sprite = new Sprite();
    sprite.attr({
      texture,
      x: 55 + (i % 8) * 170,
      y: 150 + Math.floor(i / 8) * 200,
      size: [150, 150],
    });
    layer.append(sprite);
  });
}

button.addEventListener('mouseenter', (evt) => {
  scene.container.style.cursor = 'pointer';
});
button.addEventListener('mouseleave', (evt) => {
  scene.container.style.cursor = 'default';
});
button.addEventListener('mousedown', (evt) => {
  evt.target.attr('scale', 0.8);
});
button.addEventListener('mouseup', (evt) => {
  evt.target.attr('scale', 1);
  loadRes();
});
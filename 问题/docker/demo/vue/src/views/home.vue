<script setup>
import * as PIXI from "pixi.js";
import { OutlineFilter, GlowFilter } from "pixi-filters";

// 1.创建pixi画布应用
const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x1099bb,
  resolution: window.devicePixelRatio || 1,
  autoDensity: true, // 抗锯齿
});

// 2.将画布应用添加到DOM中
document.body.appendChild(app.view);

// 3.创建一个矩形
// 3.1 创建一个绘画实例
const rectangle = new PIXI.Graphics();

rectangle.lineStyle(4, 0xff0000, 1); // rectangle.lineStyle(线宽, 颜色, 透明度)
rectangle.beginFill(0x66ccff, 0.4); // 填充颜色 rectangle.beginFill(颜色, 透明度)
rectangle.drawRect(0, 0, 164, 64); // 绘制矩形 rectangle.drawRect(x,y,宽,高) 其中x和y相对于当前pixi画布应用的大小
rectangle.endFill(); // 结束绘制

// 图形缩放
rectangle.scale.set(2, 2); // rectangle.scale.set(x, y)
// 图形位移
rectangle.position.set(100, 100); // 相对于当前位置进行位移
// 图形旋转
rectangle.rotation = 0.5;
// 设置图形中心点
rectangle.pivot.set(82, 32);

// 4.将矩形添加舞台上(添加到app应用进行展示)
app.stage.addChild(rectangle);

/* ----------------------------------------END-------------------------------------------------------- */

// 创建一个圆形
const circle = new PIXI.Graphics();
circle.beginFill(0x66ccff, 0.9);
circle.drawCircle(0, 0, 32);
circle.endFill(); // 结束绘制
circle.position.set(300, 300);
app.stage.addChild(circle);

// 绘制圆角矩形
const roundedRectangle = new PIXI.Graphics();
roundedRectangle.beginFill(0x66ccff, 0.9);
roundedRectangle.drawRoundedRect(0, 0, 164, 64, 10); // 绘制圆角矩形 (x,y,宽度,高度,圆角半径)
roundedRectangle.endFill(); // 结束绘制
roundedRectangle.position.set(400, 400);
app.stage.addChild(roundedRectangle);

// 绘制椭圆
const ellipse = new PIXI.Graphics();
ellipse.beginFill(0x66ccff, 0.9);
ellipse.drawEllipse(0, 0, 164, 64); // 绘制椭圆 (x,y,宽度,高度)
ellipse.endFill(); // 结束绘制
ellipse.position.set(180, 500);
app.stage.addChild(ellipse);

// 绘制多边形
const polygon = new PIXI.Graphics();
polygon.beginFill(0x660000, 0.9);
polygon.drawPolygon([0, 0, 100, 0, 100, 100, 50, 150, 0, 100]); // 绘制多边形 数组中每两个元素是一组x和y坐标如[x1,y1,x2,y2,x3,y3] 其中每组坐标都是一个点坐标 这些点坐标在绘制结束后会以数组顺序进行连接然后绘制成图形
polygon.endFill(); // 结束绘制
polygon.position.set(50, 700);
app.stage.addChild(polygon);

// 绘制圆弧
const arc = new PIXI.Graphics();
arc.beginFill(0x660000, 0.9);
arc.arc(0, 0, 90, 0, Math.PI / 2, false); // (x,y,半径,起始角度,结束角度,是否逆时针)
arc.endFill(); // 结束绘制
arc.position.set(500, 100);
app.stage.addChild(arc);

// 绘制线段
const line = new PIXI.Graphics();
line.lineStyle(4, 0xff0000, 1);
line.moveTo(0, 0); // 设置线段起始点
line.lineTo(0, 100);
line.lineTo(50, 50);
line.lineTo(0, 0);
line.position.set(600, 100);
app.stage.addChild(line);

/* ----------------------------------------END-------------------------------------------------------- */

// 2-1. 创建一个纹理
const texture = PIXI.Texture.from("/favicon.ico");

// 2-2. 创建一个精灵
const vueIconSprite = new PIXI.Sprite(texture);

// 2-3. 设置图形中心点
vueIconSprite.anchor.set(0.5, 0.5);

// 设置缩放
vueIconSprite.scale.set(2, 2);

// 2-4. 设置精灵位置
vueIconSprite.x = app.screen.width / 2;
vueIconSprite.y = app.screen.height / 2;

app.stage.addChild(vueIconSprite);

/* ----------------------------------------END-------------------------------------------------------- */

// ticker实现动画(帧数定时器)
app.ticker.add((delta) => {
  // delta是每毫秒平均下来的帧数
  vueIconSprite.rotation += 0.01 * delta;
});

// 3-1. 添加交互事件方式
vueIconSprite.eventMode = "static"; // 设置交互事件的模式
vueIconSprite.on("click", () => {
  console.log(12);
});

// 鼠标移入移出
vueIconSprite.on("pointerenter", () => {
  vueIconSprite.alpha = 0.5;
});
vueIconSprite.on("pointerout", () => {
  vueIconSprite.alpha = 1;
});

// 给多边形添加事件
polygon.eventMode = "static";
polygon.on("click", () => {
  console.log(12);
});

/* ----------------------------------------END-------------------------------------------------------- */

// 4.1 异步加载资源

// 1-1. 添加单个资源
PIXI.Assets.add({
  alias: "one",
  src: "/1.png",
});
PIXI.Assets.add({
  alias: "two",
  src: "/2.png",
});

// 1-2. 加载资源 其中load参数为数组可以加载多个
PIXI.Assets.load(["one", "two"], (progress) => {
  // 加载进度
  console.log(progress);
}).then((texture) => {
  // 创建一个容器
  const container = new PIXI.Container();

  const one = new PIXI.Sprite(texture.one);
  const two = new PIXI.Sprite(texture.two);

  one.x = app.screen.width / 3;
  one.y = app.screen.height / 3;
  two.x = app.screen.width / 4;
  two.y = app.screen.height / 4;

  container.addChild(one);
  container.addChild(two);

  // 这个容器可以一次性将全部内容添加到舞台上
  app.stage.addChild(container);
});

// 2-1.添加一个名为scene_1场景资源
PIXI.Assets.addBundle("scene_1", {
  one: "/1.png",
  two: "/2.png",
});

// 2-2. 加载场景资源
PIXI.Assets.loadBundle("scene_1", (progress) => {
  console.log(progress);
}).then((texture) => {
  const container = new PIXI.Container();

  const one = new PIXI.Sprite(texture.one);
  const two = new PIXI.Sprite(texture.two);

  one.x = app.screen.width / 3;
  one.y = app.screen.height / 3;
  two.x = app.screen.width / 4;
  two.y = app.screen.height / 4;

  container.addChild(one);
  container.addChild(two);

  app.stage.addChild(container);
});

/* ----------------------------------------END-------------------------------------------------------- */

// 显示文字
const text = new PIXI.Text("HH", {
  fontFamily: "Arial",
  fontSize: 100,
  fill: 0xff0000,
  align: "center",
});

text.x = app.screen.width / 1.5;
text.y = app.screen.height / 1.5;

// 设置中心点
text.anchor.set(0.5, 0.5);
app.stage.addChild(text);

// PIXI.Sprite.from 是创建精灵的便捷方式不需要通过add和load方法来添加和加载资源
const bg = PIXI.Sprite.from("/bg.png");

bg.width = app.screen.width;
bg.height = app.screen.height;

// 将bg图片作为ellipse的背景图片
bg.mask = ellipse;

app.stage.addChild(bg);

/* ----------------------------------------END-------------------------------------------------------- */

// 创建模糊滤镜
const blurFilter = new PIXI.BlurFilter();
blurFilter.blur = 4; // 模糊度

// 创建轮廓滤镜
const outlineFilter = new OutlineFilter(5, 0xffff00); // (轮廓宽度，轮廓颜色)
// 创建发光滤镜
const glowFilter = new GlowFilter({
  distance: 30, // 光晕的距离
  outerStrength: 2.6, // 外部光晕的强度
  innerStrength: 0, // 内部光晕的强度
  color: 0xff0000,
  quality: 1, // 光晕效果的质量
});

vueIconSprite.filters = [blurFilter, glowFilter, outlineFilter];
</script>
<style scoped>
.ignore-sm {
  width: 50px;
  height: 50px;
  background-color: #888;
}

.ignore-home {
  width: 100px;
  height: 100px;
  background-color: red;
}
</style>

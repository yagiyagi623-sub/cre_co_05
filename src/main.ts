import p5 from "p5";

new p5((p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB, p.width, 100, 100);
  }

  p.draw = () => {
    p.clear();
    p.fill(p.mouseX, 100, 100);
    // マウスのx座標と色相を対応させた。
    p.circle(p.mouseX, p.mouseY, 100);
  }
})
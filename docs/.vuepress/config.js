module.exports = {
  base: "/GeogebraLesson/",
  themeConfig: {
    sidebar: "auto",
    repo: "wuyudi/GeogebraLesson",
    editLinks: true,
    sidebar: [
      {
        title: "1-10",
        collapsable: true,
        children: [
          ["/1-10/1 初识GeoGebra.md", "1 初识GeoGebra"],
          [
            "/1-10/2 绘制 y=A sin wx+t +k 的图像.md",
            "2 绘制 y=A sin(wx+t)+k 的图像",
          ],
          ["/1-10/3 正多面体展开图.md", "3 正多面体展开图"],
          [
            "/1-10/4 初识迭代列表，多边形，映射指令.md",
            "4 初识迭代列表，多边形，映射指令",
          ],
          ["/1-10/5 勾股螺旋.md", "5 勾股螺旋"],
          ["/1-10/6 圆锥曲线的蒙日圆.md", "6 圆锥曲线的蒙日圆"],
          ["/1-10/7 丹德林双球.md", "7 丹德林双球"],
          ["/1-10/8 单叶双曲面.md", "8 单叶双曲面"],
          ["/1-10/9 牟合方盖.md", "9 牟合方盖"],
          ["/1-10/10 沙漏形成正弦曲线.md", "10 沙漏形成正弦曲线"],
        ],
      },
    ],
  },
};
// yarn docs:dev

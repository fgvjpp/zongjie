<template>
  <div>
    <svg
      :height="100"
      :width="100"
      x-mlns="http://www.w3.org/200/svg"
      class="progress"
    >
      <circle
        v-for="(item, index) in arcArr"
        :key="index"
        :r="radius"
        :cx="50"
        :cy="50"
        :stroke="item.color"
        :stroke-dasharray="item.arcLength"
        :stroke-width="5"
        fill="none"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0.7, // 进度数值0 - 1
      radius: 40, // 圆形半径
      startColor: [160, 209, 236], // 用于渐变色的开始
      endColor: [179, 160, 236], // 用于渐变色的结束
    };
  },
  computed: {
    // 计算渐变公式
    arcArr() {
      if (this.progress === 0) return [];
      const circleLength = Math.floor(2 * Math.PI * this.radius);
      const progressLength = this.progress * circleLength;
      const step = 100; // 设置到100则已经比较难看出来颜色断层
      const gradientColor = (startRGB, endRGB, step) => {
        // 定义一个渐变颜色函数，根据给定的起始颜色、结束颜色和步数生成一个颜色数组
        // 返回一个由起始颜色到结束颜色之间渐变的颜色数组
        const startR = startRGB[0];
        const startG = startRGB[1];
        const startB = startRGB[2];
        const endR = endRGB[0];
        const endG = endRGB[1];
        const endB = endRGB[2];
        const sR = (endR - startR) / step;
        const sG = (endG - startG) / step;
        const sB = (endB - startB) / step;
        const colorArr = [];
        for (let i = 0; i < step; i++) {
          const color = `rgb(${Math.floor(sR * i + startR)},${Math.floor(
            sG * i + startG
          )},${Math.floor(sB * i + startB)})`;
          colorArr.push(color);
        }
        return colorArr;
      };
      const colorArr = gradientColor(this.startColor, this.endColor, step);
      // 计算每个步进中的弧长
      const arcLengthArr = colorArr.map((color, index) => ({
        arcLength: `${index * (progressLength / 100)},100000000`,
        color: color,
      }));
      arcLengthArr.reverse();
      return arcLengthArr;
    },
  },
};
</script>

<style>
.progress {
  transform: rotate(-90deg);
}

.progress-text {
  transform: rotate(90deg);
  transform-origin: 50% 50%;
}
</style>

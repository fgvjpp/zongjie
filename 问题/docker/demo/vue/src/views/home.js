export const machingSendId = (e) => {
  switch (+e.target.getAttribute("name")) {
    case 1:
      console.log("首页");
      break;
    case 2:
      console.log("客服");
      break;
    case 3:
      console.log("购物");
      break;
    case 4:
      console.log("哈哈");
      break;
    case 5:
      console.log("😄");
      break;
  }
};

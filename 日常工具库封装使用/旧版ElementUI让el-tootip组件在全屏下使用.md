```vue
<el-tooltip :append-to-body="false" v-appendToContainer="'.full_class'">
  <el-button>Light</el-button>
</el-tooltip>


:append-to-body="false" 设置false表示让用户自己实现自定义方法
v-appendToContainer="'.full_class'"  插入到指定元素
```

```js
// 自定义指令
export const appendToContainer = {
  bind(el, binding, vnode) {
    const appendPopper = () => {
      const container = binding.value 
        ? document.querySelector(binding.value) 
        : el.parentElement;
      
      const popper = vnode.componentInstance?.$refs.popper;
      if (popper && container && !container.contains(popper)) {
        container.appendChild(popper);
      }
    };

    el.addEventListener('mouseenter', appendPopper);
    el._appendPopper = appendPopper;
  },
  unbind(el) {
    el.removeEventListener('mouseenter', el._appendPopper);
    delete el._appendPopper;
  }
};
```


export default function reducer(preState, { type }) {
    // preState是上一次的状态值
    // 第二个参数传入一个对象 该对象中可以携带type类型表示当前函数需要做对应类型的处理
    switch (type) {
        case 'increment':
            return preState + 1;
        case 'decrement':
            return preState - 1;
        default:
            throw new Error('类型不存在');
    }
}

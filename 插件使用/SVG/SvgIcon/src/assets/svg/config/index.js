import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg component

/*
    以下代码是为了触发webpack的匹配规则
    因为使用webpack方法会触发webpack对文件后缀的匹配规则 如果当前的文件后缀匹配成功就会执行对应规则方法
    触发匹配规则方式：requireContext(filePath) 通过这种方式可以获取到模块的export default或者是文件的内容
*/
const requireContext = require.context('@/assets/svg', false, /\.svg$/)
requireAll(requireContext)


function requireAll(requireContext) {
    requireContext.keys().forEach(filePath => {

        // 两种写法
        // 一
        requireContext(filePath)

        // 二
        // console.log(requireContext(filePath));

        // 只要webpack能读到文件就能匹配上了
    })
}

Vue.component('svg-icon', SvgIcon)

import 'package:flutter/material.dart';

class MyRow extends StatelessWidget {
  const MyRow({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.cyan,
      height: 200,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly, // 主轴方向对齐方式
        crossAxisAlignment: CrossAxisAlignment.start, // 侧轴
        children: [
          Container(
            width: 80,
            height: 80,
            color: const Color.fromARGB(255, 133, 112, 51),
          ),
          Container(
            width: 80,
            height: 80,
            color: Colors.green,
          ),
          Container(
            width: 80,
            height: 80,
            color: Colors.blueAccent,
          )
        ],
      ),
    );
  }
}

class MyRow2 extends StatelessWidget {
  const MyRow2({super.key});

  @override
  Widget build(BuildContext context) {
    // flex布局
    return Container(
      width: double.infinity,
      height: 400,
      margin: const EdgeInsets.fromLTRB(0, 30, 0, 30), // EdgeInsets设置间距(padding也支持该方法)
      color: Colors.brown,
      child: Flex( // 3.这里组件可以改成Row和Column都行
      direction: Axis.horizontal, // 排列方向   horizontal横轴排列
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          flex: 2,
          child: Container(
            color: Colors.blue,
            width: 100,
            height: 100,
          ),
        ),
        Expanded(
          flex: 1,
          child: Container(
            color: Colors.green,
            width: 100,
            height: 100,
          ),
        ),
      ],
    ),
    );
  }
}

// 细节!!!
// 1.Row和Column组件这两个组件中的children里也可以使用Expanded组件
// 2.因为Row相当于横轴排列  Column侧轴 所以可以省略Flex组件

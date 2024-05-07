import 'package:flutter/material.dart';

class Banners extends StatelessWidget {
  Banners({super.key});

  final List<MaterialColor> colorList = [
    Colors.amber,
    Colors.orange,
    Colors.blue,
    Colors.deepPurple,
    Colors.green
  ];

  @override
  Widget build(BuildContext context) {
    final bWidth = MediaQuery.of(context).size.width;

    return SizedBox(
        height: 200,
        child: ListView.builder( // ListView.builder可以进行循环创建多个组件 并返回一个由ListView组件包裹的内容
          scrollDirection: Axis.horizontal, // 修改滚动方向
          itemCount: colorList.length,  // 循环次数
          itemBuilder: (context, index) {  // 创建组件
            return Container(
              width: bWidth,
              color: colorList[index],
              child: Center(
                child: Text('我是内容 ${index + 1}'),
              ),
            );
          },
        ));
  }
}

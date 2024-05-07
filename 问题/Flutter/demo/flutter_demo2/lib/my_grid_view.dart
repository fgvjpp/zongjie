import 'package:flutter/material.dart';

class MyGridView extends StatelessWidget {
  const MyGridView({super.key});

  @override
  Widget build(BuildContext context) {
    return GridView.builder(
      itemCount: 10, // 设置item的数量

      // 有2种布局方式
      // SliverGridDelegateWithMaxCrossAxisExtent ---> maxCrossAxisExtent 根据设置的宽度占比决定屏幕每行显示数量
      // SliverGridDelegateWithFixedCrossAxisCount ---> crossAxisCount 根据设置的数量决定屏幕每行显示数量
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 2, // 设置每行显示的item数量
        mainAxisSpacing: 10, // 设置主轴方向的间距
        crossAxisSpacing: 10, // 设置交叉轴方向的间距
        childAspectRatio: 1, // 设置item宽高比
      ),
      itemBuilder: (context, index) {
        // 构建每个item
        return Container(
          height: 25,
          color: Colors.amberAccent,
        );
      },
    );
  }
}

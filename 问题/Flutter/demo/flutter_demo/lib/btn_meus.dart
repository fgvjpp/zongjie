import 'package:flutter/material.dart';

import 'ele_button.dart';

// 4-1.StatelessWidget是用来布局静态容器的 要想布局动态就需要鼠标选中StatelessWidget如何右键重构StatefulWidget即可
class BtnMeus extends StatelessWidget {
  final void Function(int) menuOneClick;
  final List<String> menuName;

  const BtnMeus({super.key, required this.menuOneClick, required this.menuName});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity, // 表示长度无限拉满
      color: Colors.cyan,
      child: Column(
        children: [
          ...menuName.map((e) {
            // map遍历渲染widget组件
            int index = menuName.indexOf(e); // 获取索引
            return EleButton(
              menuOneClick: menuOneClick,
              menuName: menuName,
              menuIndex: index,
            );
          }).toList()
        ],
      ),
    );
  }
}

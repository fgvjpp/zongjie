import 'package:flutter/material.dart';

import './Icons/my_demo_icons.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: const Text('我是标题'),
      ),
      body: ListView(children: [
        ListTile(
          leading: Icon(MyDemoIcons.getIconData('gouwuche')),
          title: const Text('购物车'),
        )
      ]),
      bottomNavigationBar: BottomNavigationBar(
        items: [
          BottomNavigationBarItem(
            icon: Icon(MyDemoIcons.getIconData('gouwuche')),
            label: '首页',
          ),
          const BottomNavigationBarItem(
            icon: Icon(Icons.search),
            label: '搜索',
          ),
          const BottomNavigationBarItem(
            icon: Icon(IconData(0xe63f, fontFamily: 'myDemoIcons')),
            label: '我的',
          ),
        ],
        selectedItemColor: Colors.blue, // 选中项目的颜色
      ),
    ));
  }
}

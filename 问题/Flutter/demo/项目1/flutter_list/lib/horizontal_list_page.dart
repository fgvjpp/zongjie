import 'package:flutter/material.dart';

const cityNames = [
  '北京',
  '上海',
  '广州',
  '深圳',
  '杭州',
  '苏州',
  '成都',
  '武汉',
  '郑州',
  '洛阳',
  '厦门',
  '青岛',
  '拉萨'
];

///水平滚动的列表
class HorizontalListPage extends StatelessWidget {
  const HorizontalListPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    const title = '水平';
    return MaterialApp(
      title: title,
      home: Scaffold(
        appBar: AppBar(
          title: const Text(title),
        ),
        body: SizedBox(
          height: 200,
          child: ListView(
            scrollDirection: Axis.horizontal,
            children: _buildList(),
          ),
        ),
      ),
    );
  }

  List<Widget> _buildList() {
    return cityNames.map((city) => _item(city)).toList();
  }

  Widget _item(String city) {
    return Container(
      width: 160,
      margin: const EdgeInsets.only(right: 5),
      alignment: Alignment.center,
      decoration: const BoxDecoration(color: Colors.amber),
      child: Text(
        city,
        style: const TextStyle(color: Colors.white, fontSize: 20),
      ),
    );
  }
}

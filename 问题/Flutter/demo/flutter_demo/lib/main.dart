import 'package:flutter/material.dart';

import 'images_applay.dart';
import 'btn_meus.dart';
import 'banner.dart';
import 'my_row.dart';
import 'Icons/my_demo_icons.dart'; // 自定义字体图标

class Peson {
  String name;
  int age;

  // 1.这样写相当于js中的constructor()初始化方法
  Peson(this.name, this.age); // 2.传参进来后程序会自动的给 String name和int age变量 赋值
}

class Peson2 {
  String name;
  int age;

  // required表示必填
  Peson2({required this.name, required this.age}); // 4.使用命名传参方式传入的
}

class Peson3 {
  // 5.如果没有初始化进行赋值就必须要给默认值
  String name = '';
  int age = 0;

  Peson3.specialMethod() {
    name = '特殊方法名字';
    age = 100;
  }
}

// app启动时执行的入口函数
void main() {
  // 不需要像js中new Peson()创建实例 只需要Peson()即可
  var peson1 = Peson('Lis', 20);
  var peson2 = Peson2(name: 'Lis', age: 20); // 3.命名传参方式
  var peson3 = Peson3.specialMethod();
  // peson1
  print(peson1.name);
  print(peson1.age);
  // peson2
  print(peson2.name);
  print(peson2.age);
  // peson3
  print(peson3.name);
  print(peson3.age);

  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

// 1-1.如果对原对象中的方法做修改时需要使用该声明
  @override
  State<MyApp> createState() => _MyAppState(); // 1-2.这是对原方法的返回值做了修改 所以才使用
}

// 3-1.final和const使用场景
// final和const都是为了声明不可变的变量,从而达到提升性能的目的
// final 必须在函数初始化时才能声明，并且一旦赋值后，不能再次赋值; 比如在函数中定义final是不行的
// const 必须定义的是100%确定的值 而且赋予的值不能在调用时才能拿到的值（比如map、indexOf这些方法时返回的值属于调用时才能拿到）
// 但是final和const定义的数组和对象这些可以通过方法来向内部添加数据 只不过不能重新向变量赋值而已

// late表示该变量需要通过其它方式进行初始化 但必须保证在第一次访问使用该变量之前必须进行初始化

// 使用 _ 可以将数据变成私有属性 外部不可读取
class _MyAppState extends State<MyApp> {
  // 定义图片地址集合
  final List<String> _imageList = ['assets/1.png', 'assets/2.png'];
  int _currentIndex = 0; // 4.2 所以不能使用final

  void menuOneClick(int index) {
    setState(() {
      // 4-2.只要处于StatelessWidget类下的StatelessWidget类调用setState方法也会更新视图
      // 4-3.只有在StatefulWidget下才能调用setState来更新视图
      _currentIndex = index; // 4.1因为修改了_currentIndex
    });
  }

  @override // 1-3.这也是对原方法的返回值做了修改 所以才使用
  Widget build(BuildContext context) {
    // 定义菜单名集合
    // 3-2.这里使用final原因是map在调用时才能拿到值所以只能使用final不能用const
    final List<String> menuNameList = _imageList.map((e) {
      int index = _imageList.indexOf(e); // 获取索引
      return '菜单名$index';
    }).toList(); // 使用map方法遍历原数组返回新数组，最后必须调用.toList()

    // MaterialApp用来创建一个包含各种APP功能主题的根组件 (比如路由、创建app标题等)
    return MaterialApp(
        // Scaffold用来创建布局页面各种元素
        home: Scaffold(
      appBar: AppBar(
        title: const Text('一张图片'),
      ),
      // 左侧栏目
      drawer: const Drawer(
        child: Column(
          children: [
            DrawerHeader(
              decoration: BoxDecoration(
                  color: Colors.amber,
                  image: DecorationImage(
                      fit: BoxFit.cover, // 将图片铺满容器
                      image: NetworkImage(
                          'https://up.enterdesk.com/edpic_source/0d/fd/56/0dfd56f3d744002ed3718e37860352f9.jpeg'))),
              child: Stack(
                children: [
                  Positioned(
                      bottom: 0,
                      left: 70,
                      child: Row(
                        children: [
                          CircleAvatar(
                            backgroundColor: Colors.amberAccent,
                            backgroundImage: NetworkImage(
                                'https://img0.baidu.com/it/u=4278216090,542028317&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'),
                          ),
                          Text(
                            '会员用户',
                            style: TextStyle(
                                color: Color.fromARGB(255, 255, 255, 255)),
                          )
                        ],
                      ))
                ],
              ),
            ),
            ListTile(
              title: Text('用户中心'),
              leading: CircleAvatar(
                child: Icon(Icons.people),
              ),
            ),
            Divider(), // 创建一条横线
          ],
        ),
      ),
      body: ListView(
        children: [
          ImageDisplay(
            // Widget组件化
            _imageList[_currentIndex],
            '一张图片',
          ),
          Banners(),
          ListTile(
            leading: Icon(MyDemoIcons.getIconData('gouwuche')),
            title: const Text('购物车'),
          ),
          const Divider(),
          const MyRow(),
          const MyRow2(),
          BtnMeus(menuOneClick: menuOneClick, menuName: menuNameList),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType
            .fixed, // 底部导航栏Item超过3个以上必须配置 让所有Item能自适应屏幕宽度来显示
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
            icon: Icon(null), // 隐藏Icon方式
            label: '消息',
          ),
          const BottomNavigationBarItem(
            icon: Icon(IconData(0xe63f, fontFamily: 'myDemoIcons')),
            label: '我的',
          ),
          const BottomNavigationBarItem(
            icon: Icon(IconData(0xe63f, fontFamily: 'myDemoIcons')),
            label: '我的',
          ),
        ],
        selectedItemColor: Colors.blue, // 选中项目的颜色
      ),
      // 浮动按钮
      floatingActionButton: Container(
        width: 60,
        height: 60,
        margin: const EdgeInsets.only(top: 10),
        padding: const EdgeInsets.all(5),
        decoration: BoxDecoration(
            color: const Color.fromARGB(216, 255, 255, 255),
            borderRadius: BorderRadius.circular(30)),
        child: FloatingActionButton(
          elevation: 0, // 阴影调节
          backgroundColor: Colors.orange,
          onPressed: () {
            print('点击了');
          },
          child: const Icon(Icons.add),
        ),
      ),
      // 配置浮动按钮位置
      floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
    ));
  }
}

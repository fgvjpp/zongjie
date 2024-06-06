import 'package:flutter/material.dart';

///各节对应的源码文件：
/// data_type.dart - Flutter之Dart常用数据类型
/// function_learn.dart - 带你解锁Flutter中常用的Dart方法类型
/// data_type.dart - 带你了解Dart泛型在Flutter中的应用
/// flutter_skill.dart - 有哪些可以用在Flutter上的编程技巧？

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter必备Dart基础',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter必备Dart基础'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  MyHomePageState createState() => MyHomePageState();
}

class MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: const Text("Flutter必备Dart基础"),
    );
  }
}

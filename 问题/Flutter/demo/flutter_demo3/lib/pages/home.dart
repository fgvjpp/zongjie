import 'package:flutter/material.dart';

// 定位布局
class HomePages extends StatelessWidget {
  const HomePages({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('我是标题'),
      ),
      body: Container(
          width: double.infinity,
          height: 300,
          color: const Color.fromARGB(255, 114, 112, 107),
          child: Stack(
            children: [
              Positioned(
                  left: 0,
                  right: 0,
                  child: Container(
                    height: 50,
                    color: Colors.amberAccent,
                    child: const Center(
                      child: Text('左'),
                    ),
                  )),
              Positioned(
                  right: 0,
                  top: 60,
                  bottom: 0,
                  child: Container(
                    width: 50,
                    height: 50,
                    color: Colors.greenAccent,
                    child: const Center(
                      child: Text('右'),
                    ),
                  )),
            ],
          )),
    );
  }
}

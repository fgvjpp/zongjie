import 'package:flutter/material.dart';

import './my_grid_view.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const Home();
  }
}

class Home extends StatelessWidget {
  const Home({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const SizedBox(
            width: double.infinity,
              child: Text(
            'Grid布局方式',
            textAlign: TextAlign.center,
          )),
        ),
        body: const MyGridView(),
      ),
    );
  }
}

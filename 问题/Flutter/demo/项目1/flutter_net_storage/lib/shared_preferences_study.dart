import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';

///基于shared_preferences实现计数器
class SPCounterWidget extends StatefulWidget {
  const SPCounterWidget({super.key});

  @override
  CounterState createState() => CounterState();
}

class CounterState extends State<SPCounterWidget> {
  String countString = '';
  String localCount = '';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        useMaterial3: false,
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text('基于shared_preferences实现计数器'),
        ),
        body: Column(
          children: <Widget>[
            ElevatedButton(
                onPressed: _incrementCounter,
                child: const Text('Increment Counter')),
            ElevatedButton(
                onPressed: _getCounter, child: const Text('Get Counter')),
            Text(
              countString,
              style: const TextStyle(fontSize: 20),
            ),
            Text(
              'result：$localCount',
              style: const TextStyle(fontSize: 20),
            ),
          ],
        ),
      ),
    );
  }

  _incrementCounter() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      countString = "$countString 1";
    });
    int counter = (prefs.getInt('counter') ?? 0) + 1;
    await prefs.setInt('counter', counter);
  }

  _getCounter() async {
    SharedPreferences prefs = await SharedPreferences.getInstance();
    setState(() {
      localCount = prefs.getInt('counter').toString();
    });
  }
}

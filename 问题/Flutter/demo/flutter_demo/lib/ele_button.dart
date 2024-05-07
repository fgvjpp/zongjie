import 'package:flutter/material.dart';

class EleButton extends StatelessWidget {
  final void Function(int) menuOneClick;
  final List<String> menuName;
  final int menuIndex;

  const EleButton(
      {super.key,
      required this.menuOneClick,
      required this.menuName,
      required this.menuIndex,
      String? kfakfafi
      });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () => menuOneClick(menuIndex),
      style: ElevatedButton.styleFrom(
          backgroundColor: Colors.deepOrange,
          foregroundColor: Colors.brown,
          minimumSize: const Size(double.infinity, 50)),
      child: Text(menuName[menuIndex]),
    );
  }
}

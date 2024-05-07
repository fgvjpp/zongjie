import 'package:flutter/material.dart';

class ImageDisplay extends StatelessWidget {
  final String imgPrame;
  final String imageDescription;

  const ImageDisplay(this.imgPrame, this.imageDescription, {super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          Image(
            image: AssetImage(imgPrame),
            width: 200, // 设置图片的宽度为 200
            height: 300,
          ),
          Text(
            imageDescription,
            style: const TextStyle(fontSize: 30, color: Colors.amber),
          )
        ],
      ),
    );
  }
}

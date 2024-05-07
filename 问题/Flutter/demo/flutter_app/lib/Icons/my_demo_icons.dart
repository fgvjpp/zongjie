import 'package:flutter/material.dart';

class MyDemoIcons {
  static const Map<String, int> _iconMap = {
    'gouwuchekong': 0xe600,
    'gouwuche': 0xe63f,
    'gouwuche1': 0xe801,
    'gouwuche2': 0xe60a,
    'gouwuche3': 0xe652,
    // 在这添加更多图标
  };

  static final Map<String, IconData> _saveIconData = {};

  static IconData getIconData(String name) {
    if (!_saveIconData.containsKey(name)) {
      final int codePoint = _iconMap[name] ?? 0xe600;
      _saveIconData[name] = IconData(codePoint, fontFamily: 'myDemoIcons');
    }
    return _saveIconData[name]!; // 非空判断 因为对象获取时有可能为空，编辑器不知道所以使用 "！" 给它声明表示当前一定不为空
  }
}

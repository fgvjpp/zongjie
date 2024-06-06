import 'package:flutter_dart_learn/oop_learn.dart';

///Dart泛型
///泛型：
///通俗理解：泛型主要是解决类、接口、方法的复用性、以及对不特定数据类型的支持
void main() {
  Cache<String> cache1 = Cache();
  cache1.setItem("cache1", "cache1 value"); //泛型作用：类型检查约束类比：List<String>
  String? string1 = cache1.getItem("cache1");
  print('string1:$string1');

  Cache<int> cache2 = Cache();
  cache2.setItem("cache2", 1008);
  int? int1 = cache2.getItem("cache2");
  print(int1);

  Member<Student> member = Member(Student('985', 'jack', 26));
  print(member.fixedName());
}

///泛型类
///泛型类主要作用：提高代码的复用度
class Cache<T> {
  final Map<String, T> _cached = {};

  void setItem(String key, T value) {
    _cached[key] = value;
  }

  ///泛型方法
  T? getItem(String key) {
    return _cached[key];
  }
}
///有时候你在实现类似通用接口的泛型中，期望的类型是某些特定类型时，这时可以使用类型约束
class Member<T extends Person> {
  final T _person;

  ///泛型作用：约束参数类型
  Member(this._person);

  String fixedName() {
    return 'fixed:${_person.name}';
  }
}

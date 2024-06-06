///面向对象的编程技巧
///一：封装、继承、多态
///善于封装、大到功能模块的封装、类的封装与抽象、小到方法的封装，封装的目的在于复用和易于扩展和维护
///不要在一个方法体中堆砌太多代码
///二：点点点的技巧
///在类的世界里：万物皆对象；1点查看对象有哪些方法和属性；2点看源码；3点探究竟；
void main() {
  //请看控制台输出
  flutterSkill();
}

void flutterSkill() {
  List? list;
  bool? isOpen;

  ///Dart编程小技巧1：安全的调用
  ///对于不确定是否为空的对象可以通过?.的方式来方位它的属性和方法以防止空异常如： a?.foo()
  print(list?.length); //善用?.防止空异常
  ///Dart编程小技巧2：设置默认值
  print(isOpen ?? false); //善用??设置默认值

  list = [];
  list.add(0);
  list.add('');
  list.add(null);

  ///Dart编程小技巧3：简化判断
  if (list[0] == null || list[0] == '' || list[0] == 0) {
    print('list[0] is empty');
  }
  if ([null, '', 0].contains(list[0])) {
    print('list[0] is empty');
  }

  ///作业：Dart: 最佳实践 https://dart.dev/guides/language/effective-dart/usage
}

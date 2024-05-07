// 1.定义接口
abstract class A {
  String name = '';
  num add(num name);
}

// 1.定义接口
abstract class B {
  int age = 0;
  set();
}

// 2.implements将Cba函数体内限制成A,B格式
class Cba<T> implements A, B {
  Cba(this.name, this.age, this.a);
  T a;

  @override
  String name;

  @override
  num add(num name) {
    return name;
  }

  @override
  int age;

  @override
  set() {
    return a;
  }
}

void main() {
  var a = Cba<String>('123', 30, 'KIOs');
  a.add(int.parse(a.name));
}

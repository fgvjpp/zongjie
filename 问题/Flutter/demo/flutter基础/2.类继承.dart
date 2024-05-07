class Cba {
  String name;

  Cba({required this.name});
}

// 1.执行顺序
class Abc extends Cba {
  
  // 3.Abc({required String name})进行接收
  Abc({required String name}) : super(name: name); // 4.super(name: name)调用父类构造器并传入参数
}

void main() {
  // 2. 传入参数
  var a = Abc(name: 'Lisa');
  print(a.name);
}

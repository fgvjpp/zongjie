class Person {
  // late表示可以允许在构造函数内进行初始化Person.unknownAge
  late String name;
  late int age;

  // 默认构造函数
  Person(this.name, this.age); // 初始化方式一 传入直接赋值

  // 命名构造函数：从Map中创建Person对象
  // Map<String, dynamic> Map是对象类型 String表示对象的键值类型 dynamic表示对象里所有的值类型可以是任意的
  Person.fromJson(Map<String, dynamic> json) // 初始化方式二 使用 ：号
      : name = json['name'] ?? 'Unknown',
        age = json['age'] ?? 0;

  // 命名构造函数：创建一个未知年龄的Person对象
  Person.unknownAge(String name) {
    // 初始化方式三  构造函数内进行初始化  初始化的变量需使用late   
    name = name;
    age = -1;
  }
}

void main() {
  // 使用默认构造函数创建Person对象
  var person1 = Person('Alice', 30);
  print('Person 1: ${person1.name}, ${person1.age} years old');

  // 使用命名构造函数从Map创建Person对象
  var person2 = Person.fromJson({'name': 'Bob', 'age': 25});
  print('Person 2: ${person2.name}, ${person2.age} years old');

  // 使用命名构造函数创建未知年龄的Person对象
  var person3 = Person.unknownAge('Charlie');
  print('Person 3: ${person3.name}, ${person3.age} years old');
}

// 类型
String str = '123456'; // 字符串
int n = 1; // 整数
double n1 = 1.5; // 浮点数
num n2 = 1.892; // 支持浮点数和整数
bool b = false; // 布尔值
List<String> arr = []; // 数组
Map object = {}; // Map（js中的对象类型）

int strNum = int.parse(str); // 字符串转换数字
var nStr = n.toString(); // 数字转换字符串

Map maps = {"name": 123}; // 定义对象方式
int a = maps['name']; // 获取方式

// 数组循环方法有 forEach map where any every
// where相当于js中的fliter方法
// any相当于js中的some方法

void main() {
  print(a);
}

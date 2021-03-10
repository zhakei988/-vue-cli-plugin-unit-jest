# -vue-cli-plugin-unit-jest
VUE单元测试

vue-cli4在创建项目的时候会让用户选择是否添加测试依赖包，我经常用的就是这个jest，现在留下点痕迹

https://vue-test-utils.vuejs.org/zh/ 中文api
文档里安装啥的都有，很全面
相对于jest本身用法差不多，只不过是专门给vue设计的，所以有部分出入

目前遇到一个小麻烦 setMethods 要废弃了，真的是很麻烦
我暂时的处理方案是：
var nev = jest.spyOn(_this, 'bindScroll');
_this.bindScroll();
expect(nev).toHaveBeenCalled();
不能像以前了直接就
wrapper.setMethods({ bindScroll: jest.fn() })


传个小栗子请看 example.spec.js

里面包含了基本的断言啥的基本够用，还有外链的函数怎么mock，就这样了有空再来唠叨唠叨

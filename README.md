# node-views

����һ�¸�Ŀ¼�µ�build.js����<br/>

### Yorkieͬ�㽲
�ⲻ��һ����̬ģ����������<br/>
�ⲻ��һ��node����<br/>
��ʵGTemplatesBuilder��һ������node������Closure Template����չ���ߣ�ʹ������ɵ��ʽ����.soy�Ŀ��ա�

### ʲô��Closure Template
������������һ��ǰ��ģ�棬������jquery.tmpl��Ŀǰ������artTemplate�ȶ�̬ģ�������ȣ�����һ�����۲��۵ؿ���ģ���⣬��Ϊ���Ǿ�̬�ġ�����ģ���ļ��ڷ������˾ͱ�������ģ�溯������Щ�������ڸ�Ч��"+="�ַ���������<br/>
�������ܸ�������ǰ��ģ����ɫ�Ļ������ٷ���һ�����ͣ�In contrast to traditional templating systems, in which you must create one monolithic template per page, you can think of Closure Templates as small components that you compose to form your user interface.<br/>
��������Closure Template,������<a target="_blank" href="https://developers.google.com/closure/templates/">����</a>

### ��ô,����ʹ�ã�
Step1: ��ȷ�����Ѿ�֪������ʹ��Closure Template���㹻�˽�����<br/>
Step2: ��������build.json
```
   {
        "name": "����Ӧ�û���վ������",
        "version" "�汾��",
        "appdir": "GTemplatesBuilder�ļ�������������Ŀ���ļ�(����)",
        "buildMode": "debug|release",
        "buildPathList": [
             {
                 "description": "...",
                 "from": "scripts/modules/templates/{*.soy}",
                 "to": "scripts/modules/templates/{*.js}",
                 "style": "skin/themes/1/{*.css}"
             }
        ]
    }
```
ע�⼸�㣺
```
1. buildModeĬ����debug��ʹ�ü򵥵ı������̣���ʹ��release���˱����⣬�����Ա������ļ�ʹ��Closure Compiler��һ����ѹ����
�Ӷ������������������ļ���С��<br/>
2. ��buildPathList��������Ҫ�������ļ���ÿһ������Ԫ�ض�Ӧ��һ��package������from������ģ���ļ�(.soy)��to��Ӧ�������ɵ�
js·�������ǵ�ֵ��ʹ��ͨ���������������ļ���������Ҫע������ģ���ļ���js�ļ����ļ�������ͬ�ġ�description��styleĿǰ��
�Ǳ���������ѡ�
```
Step3: node��Ŀ�е�build.js���������������󣬶�������ʾ��cmd�����С�

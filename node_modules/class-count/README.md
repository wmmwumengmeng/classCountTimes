# node_module/class-count   
###### node_module下的class-count模块即为统计类名使用次数的组件

/**
 * 检测统计类名在项目文件中的使用次数情况，样式文件中的class名在项目包中的html,js等文件中的使用情况和累计次数的统计
 * @author wumengmeng
 * @description 了解通用css文件中类名的使用情况，以便高效的做优化处理
 * @git地址  https://github.com/wmmwumengmeng/classCountTimes
 * npm地址   https://www.npmjs.com/package/class-count
 * npm包名   class-count
 * npm install class-count
 **/

# 1）git实例解读操作过程：
###### (a):命令行执行 npm install class-count
###### (b):命令行执行 node index.js既可，(index.js为入口文件接收底层方法util.classCountTimes.js导出的结果；);将会导出dist目录下的exportClassUse.js文件结果；test目录下为标签样式文件实例。




# 2）npm下载调用解读：
###### npm install class-count,之后在自己的使用文件如下调用：

###### const classCountTimes = require('class-count');
###### classCountTimes.init({
######     floderUrl: './test',
######     fileNameList: ['wxml'],
######     cssName: './test/common.wxss',
######     exportFileName: './dist/exportClassUse.js'
###### }, (data) => {
######     let result = '';
######     // 本地路径前缀，导出时去除，留下项目路径即可
######     let localUrl = 'E:/study/doverjs-master/classCountTimes/classCountTimes/';  
######     for (let i = 0; i < data.length; i++) {
######         let url = '';
######         for (let j = 0; j < data[i].file.length; j++) {
######             url += '   ' + data[i].file[j].url.substring(localUrl.length, data[i].file[j].url.length) + ' -----文件内出现次数' + data[i].file[j].count + '\n';
######         }
######         result += i + 1 + '：类名：' + data[i].className + ' -----文件使用次数:' + data[i].file.length + '\n' + url + '\n';
######     }
######     // 导出文件内容
######     classCountTimes.exportFile(result);
###### });







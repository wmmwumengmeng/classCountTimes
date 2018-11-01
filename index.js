const classCountTimes = require('class-count');
classCountTimes.init({
    floderUrl: './test',
    fileNameList: ['wxml'],
    cssName: './test/common.wxss',
    exportFileName: './dist/exportClassUse.js'
}, (data) => {
    let result = '';
    // 本地路径前缀，导出时去除，留下项目路径即可
    let localUrl = 'E:/study/doverjs-master/classCountTimes/classCountTimes/';  
    for (let i = 0; i < data.length; i++) {
        let url = '';
        for (let j = 0; j < data[i].file.length; j++) {
            url += '   ' + data[i].file[j].url.substring(localUrl.length, data[i].file[j].url.length) + ' -----文件内出现次数' + data[i].file[j].count + '\n';
        }
        result += i + 1 + '：类名：' + data[i].className + ' -----文件使用次数:' + data[i].file.length + '\n' + url + '\n';
    }
    // 导出文件内容
    classCountTimes.exportFile(result);
});

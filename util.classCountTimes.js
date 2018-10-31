/**
 * 检测类名在项目文件中的使用情况
 * @author wumengmeng
 * @description 了解通用css文件中类名的使用情况，以便高效的做优化处理
 * @git地址  https://github.com/wmmwumengmeng/classCountTimes
 */
// 数组对象参数说明
// let conObj = [{
//     className: '', // 每个类名
//     file: [ // 每个类名文件使用列表
//         {
//             url: '', // 每个类名使用文件url
//             count: 0 // 每个类名在文件中使用的次数
//         }
//     ]
// },...]

const fs = require('fs');
const path = require('path'); 
// const filePath = ''; // 解析需要遍历的文件夹
let classCountTimes = {
    default: {}, // 默认参数设置
    data: {
        filePath: '', // 解析需要遍历的文件夹
        classArr: [], // 类名数组
        conObj: [], // 查询结果对象
        classObj: { // 每个类名对象属性
            className: '', // 每个类名
            file: []
        },
        resultConObj: [], // conObj数据的升序排列后结果
        exportConData: '' // 导出内容
    },
    init(data, callbackfn) {
        // 初始化配置数据
        this.setData(data, callbackfn);
        // 类名数组
        this.getClassArr();
        // 文件遍历,搜索类名使用情况,赋值conObj
        this.fileDisplay(this.data.filePath);
        // 对数据conObj进行升序排列
        this.bubbleSort(this.data.conObj);
        // 导出内容
        this.exportCon(this.data.conObj);
        // 导出文件
    },
    /**
     * 初始化数据
     * @param {传参} params 
     * @param {获取到搜索类名结果后的回调方法} callbackfn 
     */
    setData(params, callbackfn) {
        this.default = {
            floderUrl: params.floderUrl || '', // 遍历文件包路径
            fileNameList: params.fileNameList || [], // 检测文件后缀类型
            exportFileName: params.exportFileName || 'exportClassCountTimes.js', // 导出文件名称
            cssName: params.cssName || '', // class所在的文件名称
            callbackfn: callbackfn // 获取到搜索类名结果后的回调方法
        };
        this.data.filePath = path.resolve(this.default.floderUrl);
    },
    // 类名数组
    getClassArr() {
        const data = fs.readFileSync(this.default.cssName, 'utf8');
        this.data.classArr = data.match(/\.[a-z0-9\.-]+(\s|\{|\:|\[|\,)/g);
        for (let i = 0; i < this.data.classArr.length; i++) {
            // 深拷贝改变对象classObj指针
            this.data.conObj.push(JSON.parse(JSON.stringify(this.data.classObj)));
        }
    },
    // 文件遍历,搜索类名使用情况,赋值conObj
    fileDisplay(filePath) {
        // 根据文件路径读取文件，返回文件列表
        const files = fs.readdirSync(filePath);
        // 遍历读取到的文件列表
        files.forEach((filename) => {
            // 获取当前文件的绝对路径
            const filedir = path.join(filePath, filename);
            // 根据文件路径获取文件信息，返回一个fs.Stats对象
            const stats = fs.statSync(filedir);
            const isFile = stats.isFile(); // 是文件
            const isDir = stats.isDirectory(); // 是文件夹
            // 遍历需要检索的文件后缀类型
            let fileNameList = this.default.fileNameList;
            let isFileName;
            for (let i = 0; i < fileNameList.length; i++) {
                if (i === 0) {
                    isFileName = filename.substring(filename.length - fileNameList[i].length, filename.length) === fileNameList[i];
                } else {
                    isFileName = isFileName || filename.substring(filename.length - fileNameList[i].length, filename.length) === fileNameList[i];
                }
            }
            if (isFile && isFileName) {
                // 读取文件内容
                const content = fs.readFileSync(filedir, 'utf-8');
                // 匹配类名
                for (let i = 0; i < this.data.classArr.length; i++) {
                    let sClass = this.data.classArr[i].substring(1, this.data.classArr[i].length - 1);
                    let sClass1 = sClass + '"';
                    let sClass2 = sClass + ' ';
                    let sClass3 = sClass + '\'';
                    let sClassNew = content.match(sClass1) || content.match(sClass2) || content.match(sClass3);
                    this.data.conObj[i].className = sClass;
                    if (sClassNew) {   
                        this.data.conObj[i].file.push({
                            url: filedir,
                            count: content.match(new RegExp('' + sClassNew, 'g')).length
                        });
                    }

                }
            }
            if (isDir) {
                // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
                this.fileDisplay(filedir); 
            }
        });
    },
    // 对数据conObj进行升序排列
    bubbleSort(conObj) {
        for (let i = 0; i < conObj.length - 1; i++) {
            for (let j = i + 1; j < conObj.length; j++) {
                // 如果前面的数据比后面的大就交换
                if (conObj[i].file.length > conObj[j].file.length) {
                    var temp = conObj[i];
                    conObj[i] = conObj[j];
                    conObj[j] = temp;
                }
            }
        }
        this.data.resultConObj = conObj;
    },
    // 导出内容格式调整
    exportCon(conObj) {
        this.default.callbackfn && this.default.callbackfn(conObj);
    },
    // 输出文件
    exportFile(exportConData) {
        fs.writeFile(this.default.exportFileName, exportConData, { encoding: 'utf-8' }, function(err) {
            if (err) {
                console.log('文件写入失败');
            } else {
                console.log('所有使用的文件写入成功');
            }
        });
    }
};
module.exports = classCountTimes;
 
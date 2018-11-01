module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "amd": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 2018,
    },
    "rules": {
        /*
        * 书写格式
        */
        // 缩进: 4空格
        "indent": [2, 4, {
                "SwitchCase": 1
            }
        ],
        // 换行检查
        "linebreak-style": 0,
        // 字符串引号:单引号
        "quotes": [2, "single"],
        // console.log检查
        "no-console": 0,
        // 空代码块检查
        "no-empty": 1,
        // object花括号内必须保证有空格
        "object-curly-spacing": [2, "always"],
        // 关键字前后必须保证有一个空格
        "keyword-spacing": 2,
        // object 冒号和值之间必须至少有一个空格
        "key-spacing": "error",
        // block前保证至少有一个空格
        "space-before-blocks": [2, "always"],
        // 空行不允许超过4行
        "no-multiple-empty-lines": [1, {
            "max": 2
        }],
        // 逗号分隔符后要有一个空格
        "comma-spacing": 2,
        // 中缀运算符前后必须加空格
        "space-infix-ops": [2, {
                "int32Hint": false
            }
        ],
        // 箭头函数加空格
        "arrow-spacing": 2,
        // 总是添加分号
        "semi": [2, "always"],
        // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格
        "array-bracket-spacing": [2, "never"],
        // 峰驼命名格式
        "camelcase": 2,
        // 不允许空格和 tab 混合缩进
        "no-mixed-spaces-and-tabs": 2,
        // 不允许使用嵌套的三元表达式
        "no-nested-ternary": 0,
        // 要求箭头函数体使用大括号
        "arrow-body-style": 2,
        // 要求箭头函数的参数使用圆括号
        "arrow-parens": 2,
        "arrow-spacing": [2, {
            "before": true,
            "after": true
        }],

        /*
        * 语法检查
        */
        // switch case 不需要花括号
        "no-case-declarations": 0,
        // switch case允许下落
        "no-fallthrough": 0,
        // 禁止使用var
        "no-var": 2,
        // 限制圈复杂度，也就是类似if else能连续接多少个
        "complexity": [2, {
            "max": 100
        }],
        // 强制回调函数最大嵌套深度 5层
        "max-nested-callbacks": [1, 5],
        // 强制一行的最大长度
        "max-len": [1, 200],
        // 禁止出现空函数.如果一个函数包含了一条注释，它将不会被认为有问题。
        "no-empty-function": 2,
        // 禁止扩展原生类型
        "no-extend-native": 2,
        // 禁止在循环中出现 function 声明和表达式
        "no-loop-func": 1,
        // 禁止出现未使用过的表达式
        "no-unused-expressions": 0,
        // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        "no-undef": 2,
        // 禁止出现未使用过的变量
        "no-unused-vars": [2, {
            "vars": "all",
            "args": "none"
        }],
        // 不允许在变量定义之前使用它们
        "no-use-before-define": 0,
        // 禁止修改 const 声明的变量
        "no-const-assign": 2,
        // 禁止类成员中出现重复的名称
        "no-dupe-class-members": 2,
        // 要求使用 let 或 const 而不是 var
        "no-var": 0,

        /*
        * 最佳实践
        */
        // 使用 === 替代 == allow-null允许null和undefined==
        "eqeqeq": [2, "allow-null"],
        // 不允许对 function 的参数进行重新赋值
        "no-param-reassign": 0,
        // 强制在parseInt()使用基数参数
        "radix": 2,
        "no-else-return": 2
    },

    "globals": {
        "wx": false,
        'Behavior': false,
        "Component": false,
        "Page": false,
        "App": false,
        "getCurrentPages": false,
        "Promise": false,
        "getApp": false
    }
};
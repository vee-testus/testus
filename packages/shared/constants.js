exports.TEST_LIBRARIES = [
    'jest', 
    'jasmine', 
    'karma'
];

exports.DEFAULT_TESTUSCONFIG = {
    entry: {
        dirPath: '', // 所需监听的文件夹路径，相对于根目录
        extFiles: ['js'], // 所需监听的文件类型
        excludes: [], // 不需要的文件或文件夹
    },
    output: {
        dirPath: 'tests', // 导出的测试文件目录，默认为根目录下的tests文件夹下，相对于根目录
        middleName: 'spec', // 导出文件的中间名称
    },
    options: {
        // 所依赖测试库的配置
        libName: 'jest', // 默认使用jest测试
        libConfig: {

        }
    },
    plugins: [

    ], // 插件
}
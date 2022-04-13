/**
 * middleware的执行也是在这个阶段
 */
const doctrine = require('doctrine');


module.exports = (args) => {
    console.log('transform', args);

    return {
        tree: [
            {
                name: 'a',
                type: 'directory',
                content: undefined,
                ext: undefined,
                children: [
                    {
                        name: '1',
                        type: 'file',
                        ext: 'js',
                        content: `const { sum1 } = require('../../src/a/1.js');

                        test('测试sum1函数', () => {
                            expect(sum1(1, 2)).toBe(3);
                        });`,
                        children: null
                    }
                ]
            },
            {
                name: 'b',
                type: 'directory',
                content: undefined,
                ext: undefined,
                children: [
                    {
                        name: 'c',
                        type: 'directory',
                        content: undefined,
                        ext: undefined,
                        children: [
                            {
                                name: '1',
                                type: 'file',
                                ext: 'js',
                                content: `const { sum1 } = require('../../src/a/1.js');

                                test('测试sum1函数', () => {
                                    expect(sum1(1, 2)).toBe(3);
                                });`,
                                children: null
                            }
                        ]
                    },
                    {
                        name: 'd',
                        type: 'directory',
                        content: undefined,
                        ext: undefined,
                        children: [
                            {
                                name: 'e',
                                type: 'directory',
                                content: undefined,
                                ext: undefined,
                                children: [
                                    {
                                        name: '4',
                                        type: 'file',
                                        ext: 'js',
                                        content: '',
                                        children: null
                                    },
                                    {
                                        name: '5',
                                        type: 'file',
                                        ext: 'js',
                                        content: '',
                                        children: null
                                    }
                                ]
                            },
                            {
                                name: '3',
                                type: 'file',
                                content: '',
                                ext: 'js',
                                children: null
                            }
                        ]
                    },
                ]
            },
        ],
        targetName: 'tests',
        middleName: 'spec',
        libName: 'jest',
        options: {

        },
        middlewares: [

        ]
    };
}
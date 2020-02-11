/**

 * @author cll

 * @date 2020/2/11 11:26

 */
const { override, fixBabelImports ,addLessLoader} = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
           javascriptEnabled: true,
           modifyVars: { '@primary-color': '#1DA57A' },
    }),
);
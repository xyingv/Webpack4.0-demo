const path=require('path');
const Htmlwebpackplugin=require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports={
    mode:'production',
    devtool:'source-map',
    entry:{
        main:'./src/index.js'
    },
    devServer:{
        contentBase:'./dist',
        open:true,
        // proxy:{} // 可跨域
        // port:'8080 //本地打开的端口
    },
    output: {
        publicPath:'/',//打包生成文件路径没有问题
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new Htmlwebpackplugin({
        template:'src/index.html'
        }),
        new CleanWebpackPlugin()
    ],
    module:{
        rules:[{
            test:/\.(gif|png|jpg)$/,
            use:{
                loader:'url-loader',
                options:{
                    name:'[name]_[hash].[ext]',
                    outputPath:'image/',
                    limit:204800
                }
            }
        },{
            test:/\.scss$/,
            use:['style-loader',
            {
                loader: 'css-loader',
                options:{
                    importLoaders: 2,
                    modules:true
                }
            }
            ,'sass-loader','postcss-loader']
        },{
            test:/\.(eot|ttf|svg)$/,
            use:{
                loader:'file-loader'
            }
        }]
    }
}
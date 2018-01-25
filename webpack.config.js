var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry:[
        "babel-polyfill",
        "react-hot-loader/patch",
        __dirname+"/app/index.js"
    ],
    output:{
        path:__dirname+"/static",
        filename:"bundle.js"
    },
    devtool:"eval-source-map",
  

    devServer:{
        contentBase:"./",
        historyApiFallback:true,
        inline:true,
        hot:true
    },
    
    // module:{
    //     rules:[
    //         {
    //             use:{
    //                 loader:'babel-loader',
    //                 options:{
    //                     presets:['env','react']
    //                 }
    //             },
    //             exclude:/node_modules/
    //         }
    //     ],
    //     loaders:[
    //         {
    //             test:/\.(js|jsx)$/,
    //             exclude:/node_modules/,
    //             loaders:["babel-loader"],
    //         }
    //     ]
    // }

        module:{
            loaders:[
                {
                    test:/\.js$/,
                    exclude:/node_modules/,
                    loaders:['babel-loader']
                }
            ]
        },
        plugins:[
            new HtmlWebpackPlugin({  
                template: __dirname + "/index.html"  
            }),  
            new webpack.HotModuleReplacementPlugin() 
        ]

};
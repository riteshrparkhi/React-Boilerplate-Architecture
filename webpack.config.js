//entry point is which is app.js
const path=require('path');


//output final bundle
module.exports = {
 entry:'./src/app.js',      //bootstraper file
 output:{                   //output file with joining public folder
     path:path.join(__dirname,'public'),
     filename:'bundle.js'
 },
 module:{
     rules:[{
         loader:'babel-loader',
         test:/\.js$/,
         exclude:/node_modules/
     },{
         test:/\.s?css$/,
         use: [    //use it to load array of values
             'style-loader',
             'css-loader',
             'sass-loader'
         ]
         
     }]
 },
 devtool:'cheap-module-eval-source-map', //This for development helps to locate exact error js file,
 devServer:{
    contentBase:path.join(__dirname,"public")
 }
}

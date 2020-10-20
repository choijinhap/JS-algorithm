const path = require('path')

module.exports={
    mode: 'production',
    entry:'./src/app.js',
    output:{
        filename: 'app.js',
        path:path.resolve(__dirname,'assets','scripts'),
        publicPath: 'assets/scripts/'
    },
    //for production
    devtool:'cheap-source-map'
    

};

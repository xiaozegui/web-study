const mongoose = require('mongoose')
const db_url = 'mongodb://localhost:27017/h5-study'
mongoose.connect(db_url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
})

mongoose.connection.on('connected', function () {    
    console.log('Mongoose connection open to ' + db_url);  
});

mongoose.connection.on('disconnected', function () {    
    console.log('Mongoose connection disconnected');  
}); 

const UserSchema = new mongoose.Schema({
    username:{type:String,unique:true,require:true},
    password:{type:String,require:true},
    gender:{type:String,default:'男'},
    birthday:{type:String,default:'1990-01-01'},
    location:{type:String,default:'shantou'},
    specialsign:{type:String,default:'day day up'},
    role:{type:Number,default:1}
})

const User = mongoose.model('User',UserSchema)


const ChartSchema = new mongoose.Schema({
    username:{type:String},
    page:{type:String},
    content:{type:String},
    time:{type:String}
})

const Chart = mongoose.model('Chart',ChartSchema)

// mongoose.disconnect();
//  User.db.dropCollection('users')
// Chart.db.dropCollection('charts')

module.exports = {User,Chart,mongoose}
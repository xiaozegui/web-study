const {User,Chart} = require('./models')
var express = require('express');
var app = express();
const secret = '123456'
const jwt = require('jsonwebtoken')
app.use(express.json())

//查询多个
app.get('/api/users', async (req, res)=>{
   const users = await User.find();
   res.send({
     status:200,
     users,
     message:'查询成功'
    });
});
//查询一个
app.post('/api/user', async (req, res)=>{
  const user = await User.findOne({
    username:req.body.username
  });
  res.send({
    status:200,
    user,
    message:'查询成功'
   });
});
//user更新一个
app.post('/api/updateuser', async (req, res)=>{
    const user = await User.findOneAndUpdate({
    username:req.body.username},
    {$set:{
      gender:req.body.gender,
      birthday:req.body.birthday,
      location:req.body.location,
      specialsign:req.body.specialsign
    }},
    {new:true}
    );
  res.send({
    status:200,
    user,
    message:'更新成功'
   });
});
//更新用户密码
app.post('/api/updatepassword', async (req, res)=>{
  const user1 = await User.findOne({
    username:req.body.username
  });
  if(!user1){
    return res.send({
      status:422,
      message:'username is no exsist'
    })
  }
  if(!(req.body.oldpassword == user1.password)){
    return res.send({
      status:422,
      message:'oldpassword is error'
    })
  }
  const user = await User.findOneAndUpdate({
  username:req.body.username},
  {$set:{
    password:req.body.password
  }},
  {new:true}
  );
res.send({
  status:200,
  user,
  message:'更新成功'
 });
});
//chart更新一个
app.post('/api/updatechart',async (req,res)=>{
  const chart = await Chart.findByIdAndUpdate({
    _id:req.body._id},
    {$set:{
      content:req.body.content,
      time:req.body.time
    }},
    {new:true}
    );
  res.send({
    status:200,
    chart,
    message:'更新成功'
   });
})
//chart删除一个
app.post('/api/deletechart',async (req,res)=>{
  // console.log(req.body.username,req.body.page);
  const chart = await Chart.findByIdAndDelete({
    _id:req.body._id
  });
  res.send({
    status:200,
    chart,
    message:'删除成功'
   });
})


//user删除一个
const medium = async (req, res,next)=>{
  const charts = await Chart.deleteMany({
  username:req.body.username
  });
  console.log(charts);
  next();
}

app.post('/api/deleteuser',medium,async (req, res)=>{
  const user = await User.findOneAndDelete({
    username:req.body.username
  });
  res.send({
    status:200,
    user,
    message:'删除成功'
   });
});

//查询所有chart
app.get('/api/charts',async (req,res)=>{
  const charts = await Chart.find();
  res.send({
    status:200,
    charts,
    message:'查询成功'
   });
})
//查询username chart
app.post('/api/usernamecharts',async (req,res)=>{
  // console.log(req.body.username,req.body.page);
  const charts = await Chart.find({
    username:req.body.username
  });
  res.send({
    status:200,
    charts,
    message:'查询成功'
   });
})
//查找一个chart
app.post('/api/chart',async (req,res)=>{
  // console.log(req.body.username,req.body.page);
  const chart = await Chart.findOne({
    username:req.body.username,
    page:req.body.page
  });
  res.send({
    status:200,
    chart,
    message:'查询成功'
   });
})

//获取pagechart
app.post('/api/pagechart',async (req,res)=>{
  // console.log(req.body.username,req.body.page);
  const charts = await Chart.find({
    page:req.body.page
  });
  res.send({
    status:200,
    charts,
    message:'查询成功'
   });
})
//注册
app.post('/api/register',async(req,res)=>{
  // console.log(req.body)
  const user = await User.create({
    username:req.body.username,
    password:req.body.password,
    gender:req.body.gender,
    birthday:req.body.birthday,
    location:req.body.location,
    specialsign:req.body.specialsign,
    role:req.body.role
  })
  res.send({
    status:200,
    user,
    message:'注册成功'
   });
})

//插入
app.post('/api/insertchart',async (req,res)=>{
  console.log(req.body.time);  
  const chart = await Chart.create({
      username:req.body.username,
      page:req.body.page,
      content:req.body.content,
      time:req.body.time
    })
    res.send({
      status:200,
      chart,
      message:'插入成功'
     })
})

//登录
app.post('/api/login',async (req,res)=>{
  console.log(req.body.username);
  const user = await User.findOne({
    username:req.body.username
  });
  console.log(!user)
  if(!user){
    return res.send({
      status:422,
      message:'username is no exsist'
    })
  }
  console.log(req.body.password,user.password);
  if(!(req.body.password == user.password)){
    return res.send({
      status:422,
      message:'password is invalidable'
    })
  }

  //生成token

  const token = jwt.sign({
    id:String(user._id)
  },secret)
  res.send({
    message:"登录成功",
    status:200,
    user,
    token
  })
})

//token获取用户
app.post('/api/tokenuser',async(req,res)=>{
  const raw = req.body.token;
  const {id} = jwt.verify(raw,secret);
  // console.log(tokenData)
  const user = await User.findById(id);
  res.send({
    message:"获取用户信息成功",
    status:200,
    user
  });
}) 


//中间件
const auth = async(req,res,next)=>{
  const raw = String(req.headers.authorization).split(' ').pop()
  const {id} = jwt.verify(raw,secret)
  // console.log(tokenData)
  req.user = await User.findById(id)
  next()
}

//请求带验证
app.get('/api/profile',auth,async (req,res)=>{
  res.send(req.user)
})

//查看username重复
app.post('/api/checkusername',async (req,res)=>{
  const user = await User.findOne({
    username:req.body.username
  });
  if(!user){
    return res.send({
      status:200,
      message:'username is ok'
    })
  }else{
    return res.send({
      status:422,
      message:'username is exists'
    })
  }
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

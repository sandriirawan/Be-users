const Pool = require('../config/db')

const findEmail = (email) =>{
    return  new Promise ((resolve,reject)=> 
    Pool.query(`SELECT * FROM users WHERE email='${email}'`,(error,result)=>{
      if(!error){
        resolve(result)
      }else{
        reject(error)
      }
    })
    )
}

const createUser = (data)=>{
const {id,email,passwordHash,fullname,role}= data
return  new Promise ((resolve,reject)=> 
Pool.query(`INSERT INTO users (id,email,password,fullname,role) VALUES ('${id}','${email}','${passwordHash}','${fullname}','${role}')`,(error,result)=>{
      if(!error){
        resolve(result)
      }else{
        reject(error)
      }
    })
    )
  }
  
  const allUser = () => {
    return Pool.query(
      `SELECT * FROM users`
    )
  }


module.exports = {
    findEmail,
    createUser,
    allUser,
}
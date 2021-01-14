require('dotenv').config();
const mysql = require('mysql');

exports.handler = async (event) => {
    const con = mysql.createConnection({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });
    con.connect(err => {
        if(err)
            return console.log("erroe");
        console.log("connected");
    });
    

    const batch = +event.queryStringParameters.batch
    const student = +event.queryStringParameters.student

    
    if(event.httpMethod ===  'POST')
    {
        con.query(`insert into StudentBatchRelation values (${batch},${student})`, 
            (err, data) =>{
                if (err) 
                    return err;
                return {'message': 'data Inserted'}; 
      });
    }
};
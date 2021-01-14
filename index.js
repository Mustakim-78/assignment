require('dotenv').config();
const mysql = require('mysql');

const fetch = async (event) => {
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
    

    // const batch = +event.queryStringParameters.batch
    // const student = +event.queryStringParameters.student

    const batch = 101;
    const student = 201
    con.query(`insert into StudentBatchRelation values (${batch},${student})`, 
        (err, data) =>{
            if (err) 
                return err;
            console.log( {'message': 'data Inserted'}); 
      });
    // if(event.httpMethod ===  'POST')
    // {
    //     con.query(`insert into StudentBatchRelation values (${batch},${student})`, 
    //         (err, data) =>{
    //             if (err) 
    //                 return err;
    //             return {'message': 'data Inserted'}; 
    //   });
    // }
};
fetch();
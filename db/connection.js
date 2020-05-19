const connection = mysql.createConnection({
    host: "localhost",
    port: PORT,
    user: "root",
    password: process.env.PASSWORD,
    database: "employee_trackerDB"
  });

  connection.connect(function(err) {
    if (err) throw err;
    queryUser();
  });
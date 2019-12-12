function connect()
{
    var MongoClient = require('mongodb').MongoClient;
    const url = "mongodb://localhost:27017";
    MongoClient.connect(url, {useNewUrlParser : true, useUnifiedTopology : true}).then((client) => 
    {
        console.log("Connected Successfully");
        var values = [
            {name : 'Khanyisa', surname : 'Mbukutshe'},
            {name : 'Steve', surname : 'Harvey'},
            {name : 'Jim', surname : 'Kwik'},
            {name : 'Denzel', surname : 'Washington'},
            {name : 'Napoleon', surname : 'Hill'}
        ];
        var res = client.db('Match').collection('Persons');
        res.insertMany(values);
        res.find({}).toArray((err, results) => {
            console.dir(results);
        });
        console.log("Read all data");
    }).catch(err => { 
        console.log(err);
    });
}
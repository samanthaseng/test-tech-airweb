const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbFile = 'DATABASE.sqlite';

const queryDatabase = async (options) => {
    const { method, sql } = options;

    const db = new sqlite3.Database(path.resolve('database', dbFile), sqlite3.OPEN_READONLY, (err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Connected to the database.');
    });

    if (method === 'ALL') {     
        return new Promise((resolve, reject) => {
            const result = [];

            db.each(sql, (err, row) => {
                if (err) {
                    reject(err); 
                } else {
                    result.push(row); 
                }
            }, (err, n) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(result); 
                }
            });
        });
    }
    
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Close the database connection.');
    });
}

module.exports = { queryDatabase };

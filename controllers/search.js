import connection from '../dao/dao.js';

export const search = (req, res) => {
    var queryString = req.query.query;
    var query = queryString.split(',');
    console.log(query);
    var sql = `SELECT name, url FROM faculty WHERE `;
    for (var i in query) {
        var q = query[i];
        q = q.trim();
        q = q.replaceAll('*', '.*');
        var regex = `\"( |,)+${q}( |,)+\"`;
        sql = sql.concat(`area REGEXP ${regex} OR `);
    }
    sql = sql.slice(0, -4);
    sql = sql.concat(';');
    console.log(sql);
    connection.query(sql, (err, data) => {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            res.status(404).send('Failed');
            return;
        }
        // console.log(data);
        res.status(200).json(data);
    });
}
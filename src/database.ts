import  {createPool} from 'mysql2/promise';

export function  conect(){


createPool({
     host: 'localhost',
    user: 'root',
    database: 'node_mysql_ts',
    connectionLimit:10

});

}
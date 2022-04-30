import http from 'http';
import fs from 'fs';
import 'dotenv/config';

const { APP_LOCALHOST, APP_PORT } = process.env;

let datas = JSON.parse(fs.readFileSync('./src/Data/datas.json', 'utf8'));

const server = http.createServer((req, res) => {
    const url = req.url;

    // if(req.method === 'OPTIONS'){
    //     res.writeHead(200, {
    //         "Content-Type": "application/json",
    //         'Access-Control-Allow-Origin': 'http://localhost:3000'
    //     });
    //     res.end();
    //     return;
    // }
    // if (url == '/favicon.ico'){
    //     res.writeHead(200, { 'Content-Type': 'image/x-icon' });
    //     res.end();
    //     return;
    // }
    if (url == '/scoring') {
        res.writeHead(200, {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        });
        let body = '';
        req.on('data', data =>  {
            body += data;
        });
        req.on('end', () => {
            
            body = JSON.parse(body)
            console.log(body);
            const data = JSON.stringify(body);
            fs.writeFile("./src/Data/datas.json", data, (err) => {
                if (err)
                    console.log(err);
                else {
                    console.log("File written successfully\n");
                }
            });
        })
    }
    else {
        res.writeHead(302, {
            location: '/'
        });
        res.end();
    }
    return;
});
server.listen(APP_PORT, APP_LOCALHOST, () => {
    console.log(`Server running at http://${APP_LOCALHOST}:${APP_PORT}`);
});
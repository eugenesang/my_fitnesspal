const express = require('express');
const cors = require('cors')
const os = require('os');
const route = require('./router.js');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

route(app);


const port = process.env.PORT || 4321;
app.listen(port, () => {
    const interfaces = os.networkInterfaces();
    let localNetworkIP = '';
    for (const iface of Object.values(interfaces)) {
        for (const alias of iface) {
            if (alias.family === 'IPv4' && !alias.internal) {
                localNetworkIP = alias.address;
            }
        }
    }
    console.log(`Server running at http://localhost:${port}`);
    console.log(`Local network IP address: http://${localNetworkIP}:${port}`);
});
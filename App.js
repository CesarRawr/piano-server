import client from './src/services/MQTTClient.js';
import express from 'express';
import bodyParser from 'body-parser';
import router from './src/routes/router.js';

const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

client.subscribe("getOutOfMyTopicBtch", { qos:1 });

app.listen(port);
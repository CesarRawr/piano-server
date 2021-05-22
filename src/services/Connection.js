import MongoClient from 'mongodb';

const uri = "mongodb+srv://Cesar:Lassoteveo10@cluster0.cgsce.mongodb.net/piano?retryWrites=true&w=majority";
const client = MongoClient.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

await client.connect();

export default client;
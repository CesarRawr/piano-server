import client from '../services/Connection.js';
import assert from 'assert';

const collection = client.db('piano').collection('notes');

let Notes = ({
	getAll: (req, res, next) => {
		collection.find({}).toArray((err, docs) => {
			assert.equal(null, err);
			res.status(200).json(docs);
		});
	},
	addNote: (note) => {
		collection.insertOne(note, (err, r) => {
			assert.equal(null, err);
			console.log(r.insertedCount);
		});
	}
});

export default Notes;

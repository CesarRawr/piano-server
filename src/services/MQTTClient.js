import mqtt from 'mqtt';
import Notes from '../controllers/Notes.js';

const client = mqtt.connect('mqtt://broker.emqx.io', {
	clientId: "MasterSword"
});

client.on('message', (topic, message, packet) => {
	const note = JSON.parse(message);
	// Looking for type
	if (!!(note.type) === false) {
		Notes.addNote(note);
	}
});

client.on("error", (error) => {
	console.log(error);
});

client.on("connect", () => {
	console.log("Connected");
});

export default client;
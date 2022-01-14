import { MongoClient } from 'mongodb';

async function handler(request, response) {
    if (request.method === 'POST') {
        const data = request.body;

        const client = await MongoClient.connect('mongodb+srv://admin:E6qmK7MEjAHdp2qT@cluster0.uidga.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();

        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        await client.close();

        return response.status(201).json({
            message: 'Meetup inserted!',
        });
    }
}

export default handler;

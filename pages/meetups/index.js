import MeetupList from '../../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

function Meetups(props) {
    return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
    const client = await MongoClient.connect('mongodb+srv://admin:E6qmK7MEjAHdp2qT@cluster0.uidga.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    await client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 10,
    };
}

export default Meetups;

import MeetupList from '../../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

function Meetups(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="Browse a huge list of meetups" />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
}

export async function getServerSideProps() {
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
        }
    };
}

export default Meetups;

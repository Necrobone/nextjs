import MeetupDetail from '../../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import { Fragment } from 'react';
import Head from 'next/head';

function Meetup(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetup.title}</title>
                <meta name="description" content={props.meetup.description} />
            </Head>
            <MeetupDetail
                title={props.meetup.title}
                image={props.meetup.image}
                address={props.meetup.address}
                description={props.meetup.description}
            />
        </Fragment>

    );
}

export async function getStaticPaths(filter, options) {
    const client = await MongoClient.connect('mongodb+srv://admin:E6qmK7MEjAHdp2qT@cluster0.uidga.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    await client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({ params: { id: meetup._id.toString() } })),
    };
}

export async function getStaticProps(context) {
    // fetch
    const meetupId = context.params.id;

    const client = await MongoClient.connect('mongodb+srv://admin:E6qmK7MEjAHdp2qT@cluster0.uidga.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetup = await meetupsCollection.findOne({ _id: ObjectId(meetupId) });

    await client.close();

    return {
        props: {
            meetup: {
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
            },
        },
    };
}

export default Meetup;

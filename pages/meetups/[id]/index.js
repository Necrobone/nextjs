import MeetupDetail from '../../../components/meetups/MeetupDetail';

function Meetup() {
    return <MeetupDetail
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg"
        title="A First Meetup"
        address="Some address5, 12345 Some City"
        description="This is a first meetup!"
    />;
}

export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    id: 'm1',
                },
            },
            {
                params: {
                    id: 'm2',
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    // fetch
    const meetupId = context.params.id;

    console.log(meetupId);

    return {
        props: {
            meetupData: {
                id: meetupId,
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
                title: 'A First Meetup',
                address: 'Some address5, 12345 Some City',
                description: 'This is a first meetup!',
            },
        },
    };
}

export default Meetup;

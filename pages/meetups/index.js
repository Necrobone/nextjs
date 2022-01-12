import MeetupList from '../../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address5, 12345 Some City',
        description: 'This is a first meetup!',
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address10, 54321 Another City',
        description: 'This is a second meetup!',
    },
];

function Meetups() {
    return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default Meetups;

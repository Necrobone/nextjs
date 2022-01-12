import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function Add() {
    function addMeetupHandler(meetup) {
        console.log(meetup);
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default Add;

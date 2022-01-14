import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

function Add() {
    const router = useRouter();

    async function addMeetupHandler(meetup) {
        const response = await fetch('/api/add', {
            method: 'POST',
            body: JSON.stringify(meetup),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();

        await router.push('/meetups');
    }

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default Add;

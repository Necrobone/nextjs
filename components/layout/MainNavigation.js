import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/meetups'>All Meetups</Link>
                    </li>
                    <li>
                        <Link href='/meetups/add'>Add New Meetup</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;

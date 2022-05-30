import dynamic from 'next/dynamic';

const StreamPlayer = dynamic(() => import('../components/player/stream'), {
    ssr: false
});

import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={ styles.container }>
            <StreamPlayer channel="pokemon" />
        </div>
    )
}
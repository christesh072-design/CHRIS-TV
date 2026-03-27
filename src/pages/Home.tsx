import React from 'react';
import './Home.css'; // Assuming you have a CSS file for styling

const Home = () => {
    return (
        <div className="home">
            <header className="header">
                <h1>Welcome to CHRIS TV</h1>
            </header>
            <main className="content">
                <section className="live-matches">
                    <h2>Live Matches</h2>
                    <ul>
                        <li>{new Date().toLocaleString()}</li>
                        <li>Match 1: Team A vs Team B</li>
                        <li>Match 2: Team C vs Team D</li>
                        <li>Match 3: Team E vs Team F</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default Home;

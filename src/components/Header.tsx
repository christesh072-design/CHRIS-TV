import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#2c3e50', color: 'white' }}>
                <h1>CHRIS TV</h1>
                <nav>
                    <ul style={{ listStyleType: 'none', display: 'flex', margin: 0, padding: 0 }}>
                        <li style={{ margin: '0 15px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
                        <li style={{ margin: '0 15px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
                        <li style={{ margin: '0 15px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Programs</a></li>
                        <li style={{ margin: '0 15px' }}><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

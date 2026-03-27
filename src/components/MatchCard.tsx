import React from 'react';
import './MatchCard.css'; // Assuming you want to style this component using CSS

interface MatchCardProps {
    date: string;
    homeTeam: string;
    awayTeam: string;
    homeScore?: number;
    awayScore?: number;
    isLive?: boolean;
}

const MatchCard: React.FC<MatchCardProps> = ({ date, homeTeam, awayTeam, homeScore, awayScore, isLive }) => {
    return (
        <div className={`match-card ${isLive ? 'live' : ''}`}>  
            <div className="match-date">{new Date(date).toLocaleString()}</div>
            <div className="match-teams">
                <div className="team home-team">
                    <span className="team-name">{homeTeam}</span>
                    {homeScore !== undefined && <span className="team-score">{homeScore}</span>}
                </div>
                <div className="team away-team">
                    <span className="team-name">{awayTeam}</span>
                    {awayScore !== undefined && <span className="team-score">{awayScore}</span>}
                </div>
            </div>
        </div>
    );
};

export default MatchCard;
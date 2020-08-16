import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import './styles.css';
import api from '../../services/api';
import Select from '../../components/Select';
import MatchesItem from '../../components/MatchesItem';
import Rank from '../Rank';
import RankTable from '../Rank';

export interface Standing {
    season?: {
        currentMatchday: number;
        endDate: Date;
        startDate: Date;
    }
    standings:  Array<{
        table: Array<{
            team: {
                id: number
                name: string;
            }   
        }>,
    }>;
}

function Landing() {
    const [league, setLeague] = useState('');
    const [rank, setRank] = useState<Standing>({standings: []});
    const [competitions, setCompetitions] = useState([]);

    useEffect(() => {
        api.get('competitions?plan=TIER_ONE').then(response => {
            setCompetitions(response.data.competitions);
        });
    }, []);

    useEffect(() => {
        async function requestData() {
            const response = await api.get(`competitions/${league}/standings?standingType=TOTAL`);
            setRank(response.data);
        }

        if (league !== "") {
            requestData();
        }
    }, [league]);

    return (
        <div className="container">
            <Menu/>
            <Select
                name="Competições"
                value={league}
                onChange={(e) => setLeague(e.target.value)}
                options={competitions}
            />
            <main>
                <RankTable rank={rank}></RankTable>
                <div id="page-landing-content">
                    <div className="matches">
                        <MatchesItem />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Landing;
import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import './styles.css';
import api from '../../services/api';
import Select from '../../components/Select';
import RankTable from '../Rank';
import EmptyList from '../../components/EmptyList';

export interface Standing {
    competition?: {
        name: string;
        area: {
            name: string
        }
    },
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

    function Content() {
        if (!rank.standings.length) {
            return <EmptyList/>;
        }

        return <RankTable rank={rank} />
    }
    return (
        <>
            <Menu/>
            <Select
                name="Competições"
                value={league}
                onChange={(e) => setLeague(e.target.value)}
                options={competitions}
            />
            <h3 className="title-name">
                {rank.competition?.area.name} {' '}
                {rank.competition?.name}
            </h3>
            <div id="page-landing-content">
                <Content/>
            </div>
        </>
    )
}

export default Landing;
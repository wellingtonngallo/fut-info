import React from 'react';
import { Standing } from '../Landing';
import './styles.css';

interface RankTableProps {
    rank: Standing;
}

interface Team {
    name: string
}

interface TableItems {
    id: number;
    draw: number;
    lost: number;
    points: number;
    position: number;
    won: number;
    playedGames: number;
    team: Team;
}

const RankTable: React.FC<RankTableProps> = ({ rank }) => {
    return (
        <table className="table-stading" data-testid="rank-table">
            <thead>
                <tr>
                    <th colSpan={2}>Classificação</th>
                    <th className="table-center">P</th>
                    <th className="table-center">J</th>
                    <th className="table-center">V</th>
                    <th className="table-center">E</th>
                    <th className="table-center">D</th>
                </tr>
            </thead>
            <tbody>
                {
                    rank?.standings.map((team: any) => {     
                        return (
                            
                                team.table.map((item: TableItems) => {
                                    return (
                                        <tr key={item.id} data-testid="content-table">
                                            <td>{item.position}</td>
                                            <td>{item.team.name}</td>
                                            <td className="table-center">{item.points}</td>
                                            <td className="table-center">{item.playedGames}</td>
                                            <td className="table-center">{item.won}</td>
                                            <td className="table-center">{item.draw}</td>
                                            <td className="table-center">{item.lost}</td>
                                        </tr>
                                    )
                                })
                                
                        
                        )
                    })  
                }
            </tbody>
        </table>
    )
}

export default RankTable;
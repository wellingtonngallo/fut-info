import React from 'react';
import { Standing } from '../Landing';
import './styles.css';

interface RankTableProps {
    rank: Standing;
}

const RankTable: React.FC<RankTableProps> = ({ rank }) => {
    return (
        <table className="table-stading">
            <thead>
                <th colSpan={2}>Classificação</th>
                <th className="table-center">P</th>
                <th className="table-center">J</th>
                <th className="table-center">V</th>
                <th className="table-center">E</th>
                <th className="table-center">D</th>
            </thead>
            <tbody>
                {
                    rank?.standings.map((team: any) => {           
                        return (
                            
                                team.table.map((item: any) => {
                                    return (
                                        <tr key={item.id}>
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
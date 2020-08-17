import React from 'react';
import './styles.css';

function EmptyList() {
    return (
        <div className="empty-list" data-testid="empty-list">
           Utilize o filtro acima para selecionar a competição desejada.
        </div>
    )
}

export default EmptyList;
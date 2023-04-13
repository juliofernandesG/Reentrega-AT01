import React from 'react';
import './EngineeringAreas.modules.css';

function EngineeringAreas() {
    const areas = [
        { name: 'Desenvolvimento de software', percentage: 63.3 },
        { name: 'Pesquisa e desenvolvimento', percentage: 45.7 },
        { name: 'Engenharia de sistemas', percentage: 35.2 },
        { name: 'Engenharia de controle e automação', percentage: 29.6 },
        { name: 'Engenharia de redes e telecomunicações', percentage: 25.4 },
        { name: 'Engenharia de hardware', percentage: 24.5 },
        { name: 'Gerenciamento de projetos', percentage: 23.9 },
        { name: 'Engenharia de qualidade', percentage: 19.6 },
        { name: 'Segurança da informação', percentage: 18.9 },
        { name: 'Ensino e pesquisa acadêmica', percentage: 18.3 },
    ];

    return (
        <div className="engineering-areas-container">
            <h2>Top 10 Áreas de Trabalho do Engenheiro de Computação</h2>
            <div className="engineering-areas-list-container">
                <ul className="engineering-areas-list">
                    {areas.map((area, index) => (
                        <li key={index}>
                            <div className="area-name">{area.name}</div>
                            <div className="area-percentage">{area.percentage}%</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EngineeringAreas;

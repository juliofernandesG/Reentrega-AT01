import React from 'react';
import './ProgrammingLanguages.modules.css';

function ProgrammingLanguages() {
    const languages = [
        { name: 'JavaScript', percentage: 69.8 },
        { name: 'Python', percentage: 41.7 },
        { name: 'Java', percentage: 41.1 },
        { name: 'TypeScript', percentage: 23.6 },
        { name: 'C#', percentage: 23.5 },
        { name: 'PHP', percentage: 22.3 },
        { name: 'C++', percentage: 20.6 },
        { name: 'Ruby', percentage: 8.4 },
        { name: 'Swift', percentage: 6.6 },
        { name: 'Objective-C', percentage: 5.4 },
    ];

    return (
        <div className="programming-languages-container">
            <h2>Top 10 Linguagens de Programação</h2>
            <div className="programming-languages-list-container">
                <ul className="programming-languages-list">
                    {languages.map((language, index) => (
                        <li key={index}>
                            <div className="language-name">{language.name}</div>
                            <div className="language-percentage">{language.percentage}%</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProgrammingLanguages;

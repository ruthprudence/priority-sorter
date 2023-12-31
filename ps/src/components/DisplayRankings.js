import React from 'react';

const DisplayRankings = ({ scores }) => {
  // Sort items by score, include all items
  const sortedChoices = Object.entries(scores).sort((a, b) => b[1] - a[1]);

  return (
    <div>      
      <table>
        <thead>
          <tr>
            <th>Ranking</th>
            <th>Item</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedChoices.map(([choice, score], index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{choice}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayRankings;

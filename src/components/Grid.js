import React, { useState, useEffect, useCallback } from 'react';

const Grid = ({ users, resetGame }) => {
    const [position, setPosition] = useState([5, 0]);

    const moveDot = useCallback(({ name, gender }) => {
        let [x, y] = position;
        const nameLength = name.length;

        if (gender === 'male') {
            if (nameLength % 2 === 0) {
                x = x - 1; // Move up if name length is even
            } else {
                y = y + 1; // Move right if name length is odd
            }
        } else {
            if (nameLength % 2 === 0) {
                x = x + 1; // Move down if name length is even
            } else {
                y = y - 1; // Move left if name length is odd
            }
        }

        // Boundary check
        if (x < 0 || x > 5 || y < 0 || y > 5) {
            resetGame();
        } else {
            setPosition([x, y]);
            console.log("Dot moved to:", [x, y]);
        }
    }, [position, resetGame]);

    useEffect(() => {
        if (users.length > 0) {
            const latestUser = users[users.length - 1];
            moveDot(latestUser);
        }
    }, [users, moveDot]);

    return (
        <div className="grid">
            {[...Array(36)].map((_, index) => {
                const isActive = index === position[0] * 6 + position[1];
                return (
                    <div 
                        key={index} 
                        className={isActive ? 'active' : ''}
                    />
                );
            })}
        </div>
    );
};

export default Grid;

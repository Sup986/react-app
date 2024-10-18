import React, { useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/randomuser';
const API_KEY = 'Ie6g4ViLqIwUpCKmPViL0A==lIXwIiTOsxgU37j3'; // Replace with your actual API key

const UserList = ({ addUser }) => {
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(API_URL, {
                    headers: {
                        'X-Api-Key': API_KEY
                    }
                });

                // Log the full API response to understand its structure
                console.log("API Response:", response.data);

                // Extract the name and convert 'sex' to 'gender'
                const name = response.data.name; // Adjusted based on your response
                const sex = response.data.sex; // Adjusted based on your response
                const gender = sex === "M" ? "male" : sex === "F" ? "female" : "unknown";

                if (name && gender) {
                    console.log(`Adding user: ${name}, ${gender}`);
                    addUser({ name, gender });
                } else {
                    console.warn("Unexpected API response structure:", response.data);
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        // Fetch initially and then every 30 seconds
        fetchUser();
        const intervalId = setInterval(fetchUser, 30000);

        return () => clearInterval(intervalId);
    }, [addUser]);

    return null;
};

export default UserList;

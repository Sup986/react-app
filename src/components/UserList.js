import React, { useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://dummyjson.com/users/1'; // Replace the placeholder with an actual user ID

const UserList = ({ addUser }) => {
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(API_URL);

                console.log("API Response:", response.data);

                const name = response.data.firstName + ' ' + response.data.lastName; // Adjust based on response structure
                const gender = response.data.gender; // Assuming 'gender' exists in the response

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

import React, { useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://dummyjson.com/users/1'; 

const UserList = ({ addUser }) => {
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(API_URL);

                console.log("API Response:", response.data);

                const name = response.data.firstName + ' ' + response.data.lastName; 
                const gender = response.data.gender; 

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

import axios from 'axios';

const API_URL = 'https://api.api-ninjas.com/v1/randomuser';
const API_KEY = 'Ie6g4ViLqIwUpCKmPViL0A==lIXwIiTOsxgU37j3'; // Directly embedded API key

class UserController {
    static async fetchUser() {
        try {
            const response = await axios.get(API_URL, {
                headers: {
                    'X-Api-Key': API_KEY
                }
            });
            const { name, gender } = response.data;
            return { name, gender };
        } catch (error) {
            console.error("Error fetching user:", error);
            return null;
        }
    }
}

// Make sure this is a default export
export default UserController;


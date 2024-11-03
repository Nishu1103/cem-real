import axios from 'axios';

// Base URL for the registration endpoint
const baseURL = 'http://localhost:4000/api/v1/auth/register'; // Replace with actual base URL if different

// Sample client data template
const clients = Array.from({ length: 20}, (_, index) => ({
    firstName: `FirstName${index + 1}`,
    lastName: `LastName${index + 1}`,
    username: `client${index + 1}`,
    phone: `123456789${index % 10}`,
    email: `client${index + 1}@gmail.com`,
    password: `password${index + 1}`,
    city: `City${index + 1}`,
    role: 'client'
}));

// Register each client
const registerClients = async () => {
    for (const client of clients) {
        try {
            const response = await axios.post(baseURL, client);
            console.log(`Registered ${client.username}:`, response.data.message);
        } catch (error) {
            console.log(error)
            console.error(`Error registering ${client.username}:`, error.response?.data?.message || error.message);
        }
    }
};

// Run the registration script
registerClients();

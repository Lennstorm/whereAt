import axios from 'axios';

export async function fetchEvents() {
    try {
        const response = await axios.get('https://santosnr6.github.io/Data/events.json');
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        return [];
    }
}
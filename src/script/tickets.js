import axios from "axios";
import { fetchEvents } from "./api";

export async function fetchEventTickets(ticketCounts) {
    try {
      const eventsData = await fetchEvents();
      const events = eventsData.filter(event => ticketCounts[event.id] > 0);

      const combinedData = events.map(event => ({
        ...event,
        ticketCount: ticketCounts[event.id]
      }));
      return combinedData;
      // return events;
    } catch (error) {
      console.error('Error fetching event tickets data', error);
      return [];
    }
  }
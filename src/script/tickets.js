import { fetchEvents } from "./api";

export async function fetchEventTickets(ticketCounts) {
  try {
    const eventsData = await fetchEvents();

    // Kontrollera om ticketCounts innehåller några biljetter
    const hasTickets = Object.values(ticketCounts).some(count => count > 0);

    if (hasTickets) {
      // Om det finns biljetter, filtrera eventsData baserat på ticketCounts
      const events = eventsData.filter(event => ticketCounts[event.id] > 0);

      // Skapa kombinerad data med ticketCount för varje event
      const combinedData = events.map(event => ({
        ...event,
        ticketCount: ticketCounts[event.id]
      }));

      return combinedData;
    } else {      
      console.log(combinedData)
      // Om inga biljetter finns, returnera en tom array
      return [];
    }
  } catch (error) {
    console.error('Error fetching event tickets data', error);
    return [];
  }
}

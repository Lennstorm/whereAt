export async function fetchEventTickets(ticketCounts) {
    try {
      const eventsData = await fetchEvents();
      const events = eventsData.events.filter(event => ticketCounts[event.id] > 0);
      return events;
    } catch (error) {
      console.error('Error fetching event tickets data', error);
      return [];
    }
  }
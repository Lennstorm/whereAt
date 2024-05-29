import { create } from 'zustand';

const useTicketStore = create((set) => ({
  eventTickets: [],
  setEventTickets: (tickets) => {
    console.log('Sätter biljetter i store:', tickets); // Lägg till denna rad för felsökning
    set({ eventTickets: tickets });
  },
}));

export default useTicketStore;

import { create } from 'zustand';

const savedData = JSON.parse(localStorage.getItem('ticketStore'));


const useStore = create((set) => ({
  ticketCounts: savedData ? savedData.ticketCounts : {},
  addToCart: (eventId, count) => {
    set((state) => {
      const newTicketCounts = { ...state.ticketCounts, [eventId]: count };
      localStorage.setItem('ticketStore', JSON.stringify({ ticketCounts: newTicketCounts }));
      return { ticketCounts: newTicketCounts };
    });
  },
    decreaseTicketQuantity: (eventId, currentCount) => {
    set({ ticketCounts: { ...useStore.getState().ticketCounts, [eventId]: Math.max(0, currentCount - 1) } });
    localStorage.setItem('ticketStore', JSON.stringify({ ticketCounts: useStore.getState().ticketCounts  }));    
  },
  increaseTicketQuantity: (eventId, currentCount) => {
    set({ ticketCounts: { ...useStore.getState().ticketCounts, [eventId]: Math.max(0, currentCount + 1) } });
    localStorage.setItem('ticketStore', JSON.stringify({ ticketCounts: useStore.getState().ticketCounts }));
  },
  calculateTotalPrice: (event, ticketQuantity) => {
    return event ? event.price * ticketQuantity : 0;
  },
}));

export default useStore;




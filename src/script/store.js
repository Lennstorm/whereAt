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
    set((state) => {
      const updatedCount = Math.max(0, currentCount - 1);
      const newTicketCounts = { ...state.ticketCounts, [eventId]: updatedCount };
      localStorage.setItem('ticketStore', JSON.stringify({ ticketCounts: newTicketCounts }));
      return { ticketCounts: newTicketCounts };
    });
  },
  increaseTicketQuantity: (eventId, currentCount) => {
    set((state) => {
      const updatedCount = Math.max(0, currentCount + 1);
      const newTicketCounts = { ...state.ticketCounts, [eventId]: updatedCount };
      localStorage.setItem('ticketStore', JSON.stringify({ ticketCounts: newTicketCounts }));
      return { ticketCounts: newTicketCounts };
    });
  },
  calculateTotalPrice: (event, ticketQuantity) => {
    return event ? event.price * ticketQuantity : 0;
  },

  emptyCart: () => {
    set((state) => {
      const newTicketCounts = {};
      localStorage.removeItem('ticketStore');
      return { ...state, ticketCounts: newTicketCounts };
    });
  },
}));

export default useStore;
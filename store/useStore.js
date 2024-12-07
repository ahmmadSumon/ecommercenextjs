import { create } from 'zustand';

const useCartStore = create((set) => ({
  // Cart state
  items: [],
  addItem: (item) => {
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        };
      } else {
        return { items: [...state.items, { ...item, quantity: 1 }] };
      }
    });
  },
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
  updateItemQuantity: (itemId, newQuantity) => {
    const parsedQuantity = Math.max(parseInt(newQuantity.toString(), 10), 1);
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity: parsedQuantity } : item
      ),
    }));
  },
  incrementQuantity: (itemId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decrementQuantity: (itemId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      ),
    })),

  // Wishlist state
  wishlist: [],
  addToWishlist: (item) => {
    set((state) => {
      if (!state.wishlist.some((i) => i.id === item.id)) {
        return { wishlist: [...state.wishlist, item] };
      }
      return state; // Prevent duplicates
    });
  },
  removeFromWishlist: (itemId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== itemId),
    })),
}));

export default useCartStore;

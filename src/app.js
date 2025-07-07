document.addEventListener("alpine:init", () => {
  // Produk
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Tapai Singkong", img: "tape.jpg", price: 40000 },
      { id: 2, name: "Basreng", img: "basreng.jpg", price: 30000 },
      { id: 3, name: "Kue Talas Bogor", img: "cake.png", price: 125000 },
      { id: 4, name: "Kripik Talas Bogor", img: "chips.png", price: 30000 },
    ],
  }));

  // Keranjang belanja
  Alpine.store("shopping", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItems) {
      const cartItem = this.items.find((item) => item.id === newItems.id);
      if (!cartItem) {
        this.items.push({ ...newItems, quantity: 1, total: newItems.price });
        this.quantity++;
        this.total += newItems.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItems.id) return item;
          item.quantity++;
          item.total = item.price * item.quantity;
          this.quantity++;
          this.total += item.price;
          return item;
        });
      }
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id == id);
      if (cartItem && cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) return item;
          item.quantity--;
          item.total = item.price * item.quantity;
          this.quantity--;
          this.total -= item.price;
          return item;
        });
      } else {
        this.items = this.items.filter((item) => item.id !== id);
        if (cartItem) {
          this.quantity--;
          this.total -= cartItem.price;
        }
      }
    },
  });

  // Modal store
  Alpine.store("modal", {
    show: false,
    productId: null,
    open(id) {
      this.productId = id;
      this.show = true;
      const modal = document.getElementById(`item-detail-modal${id}`);
      if (modal) modal.classList.add("active");
    },
    close() {
      if (this.productId) {
        const modal = document.getElementById(
          `item-detail-modal${this.productId}`
        );
        if (modal) modal.classList.remove("active");
      }
      this.show = false;
      this.productId = null;
    },
  });
});

// Format ke rupiah
const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};

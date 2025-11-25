import { signal, computed, effect, Injectable } from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = signal<CartItem[]>([
    { name: 'Laptop', price: 12000, quantity: 1 },
    { name: 'Souris', price: 150, quantity: 2 }
  ]);

  totalPrice = computed(() =>
    this.cartItems().reduce( // reduce() sert à transformer un tableau en une seule valeur.
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  );

  constructor() {
    effect(() => {
      console.log('Nouveau total :', this.totalPrice());
    });
  }

  addItem(product: { name: string; price: number }) {
    this.cartItems.update(items => [
      ...items,
      { ...product, quantity: 1 }
    ]);
  }

  incrementQty(i: number) {
    this.cartItems.update(items => {
      items[i].quantity++;
      return [...items];
    });
  }

  decrementQty(i: number) {
    this.cartItems.update(items => {
      if (items[i].quantity > 1) items[i].quantity--;
      return [...items];
    });
  }
}

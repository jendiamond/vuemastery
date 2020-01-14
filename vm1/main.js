var app = new Vue({
  el: '#app',
  data: {
    product: 'Animal Paw Crew Socks',
    description: 'Creepily realistic cat foot socks.',
    image: './assets/tabby.jpg',
    url: 'https://www.whatonearthcatalog.com/CT8119.html',
    inventory: 100,
    onSale: true,
    details: ["100% polyester", "Machine washable and dryable", "Printed in the USA", "One size fits up to Men's 13", "Buy 2 or More and Save 20%!"],
    variants: [
      { variantId: 'CT8119-tabby',
        variantAnimal: 'Tabby',
        variantImage: './assets/tabby.jpg'
      },
      { variantId: 'CT8119-tiger',
        variantAnimal: 'Tiger',
        variantImage: './assets/tiger.jpg'
      },
      { variantId: 'CT8119-tabby',
        variantAnimal: 'Yellow Tabby',
        variantImage: './assets/yellow_tabby.jpg'
      },
      { variantId: 'CT8119-leopard',
        variantAnimal: "Leopard",
        variantImage: './assets/leopard.jpg'
      },
    ],
    sizes: ["small","medium","large"],
    cart: 0,
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    deleteFromCart() {
      this.cart -= 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
})

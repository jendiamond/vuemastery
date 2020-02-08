var app = new Vue({
  el: '#app',
  data: {
    product: 'Animal Paw Crew Socks',
    brand: 'What on Earth',
    description: 'Creepily realistic cat foot socks.',
    selectedVariant: 0,
    url: 'https://www.whatonearthcatalog.com/CT8119.html',
    inventory: 100,
    details: ["100% polyester", "Machine washable and dryable", "Printed in the USA", "One size fits up to Men's 13", "Buy 2 or More and Save 20%!"],
    variants: [
      { variantId: 'CT8119-tabby',
        variantAnimal: 'Tabby',
        variantImage: './assets/tabby.jpg',
        variantColor: '#CDB7B5', //mistyrose
        variantQuantity: 3,
        onSale: true
      },
      { variantId: 'CT8119-tiger',
        variantAnimal: 'Tiger',
        variantImage: './assets/tiger.jpg',
        variantColor: '#EE7942', //sienna
        variantQuantity: 13,
        onSale: false
      },
      { variantId: 'CT8119-yellowtabby',
        variantAnimal: 'Yellow Tabby',
        variantImage: './assets/yellow_tabby.jpg',
        variantColor: '#E9C2A6', //light wood
        variantQuantity: 7,
        onSale: true
      },
      { variantId: 'CT8119-leopard',
        variantAnimal: "Leopard",
        variantImage: './assets/leopard.jpg',
        variantColor: '#FCE6C9', //eggshell
        variantQuantity: 0,
        onSale: false
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
    updateProduct(index) {
      this.selectedVariant = index
      console.log(index)
    }
  },
  computed: {
    title() {
      return this.brand + ' -  ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock(){
      return this.variants[this.selectedVariant].variantQuantity
    },
    onSale() {
      return this.title + ' '
    }
  }
})

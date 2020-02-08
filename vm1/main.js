Vue.component( 'product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
    template: `
      <ul>
        <li v-for="detail in details">{{ detail }}</li> 
      </ul>
    `
})
Vue.component( 'product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
      <div class="product">
        <div class="product-image">
          <a :href="url" target="_blank rel=noopener"><img :src="image"></a>
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p>{{ description }}</p>
          <button v-on:click="addToCart"
                      :disabled="!inStock"
                      :class="{ disabledButton: !inStock }">
                      Add to Cart
          </button>
          <br>
          <button v-on:click="deleteFromCart">Delete From Cart</button>
          <div class="cart">
            <p>Cart({{cart}})</p>
          </div>
          <p v-if="inventory > 10"
            :disabled-stock="!inStock"
            :class="{ disabledStock: !inStock }">
              In Stock
          </p>
          <p v-else-if="inventory < 10 && inventory > 0">Almost out of Stock</p>
          <p v-else >Out of Stock</p>
          <p>Shipping: {{ shipping }}</p>
          <p>User is premium: {{ premium }}</p>
          <p v-if="onSale">{{ onSale }}ON SALE NOW! 🛍</p>
          <hr>
          <product-details :details="details"></product-details>
          <hr>
          <p><strong>Animals:</strong></p>
          <div v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="color-box"
            :style="{ backgroundColor: variant.variantColor }" >
            <p @mouseover="updateProduct(index)">{{ variant.variantAnimal }}</p>
          </div>
          <hr>
          <h3>Sizes</h3>
          <ul>
            <li v-for="size in sizes">{{ size }}</li>
          </ul>
        </div>
      </div>
  `,
  data() {
    return {
      product: 'Animal Paw Crew Socks',
      brand: 'What on Earth',
      description: 'Creepily realistic cat foot socks.',
      details: ["100% polyester", "Machine washable and dryable", "Printed in the USA", "One size fits up to Men's 13", "Buy 2 or More and Save 20%!"],
      selectedVariant: 0,
      url: 'https://www.whatonearthcatalog.com/CT8119.html',
      inventory: 100,
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
    }
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
    },
    shipping() {
      if (this.premium){
        return "Free shipping"
      }
      else {
        return '$2.99'
      }
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
  }
})

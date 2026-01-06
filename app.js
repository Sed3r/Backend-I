class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        if (this.products.some(product => product.code === code)) {
            console.error("Todos los campos son obligatorios");
            return;
        }

        const codeExists = this.products.some(product => product.code === code);
        if (codeExists) {
            console.error("El código ya existe");
            return;
        }

        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
        this.nextId++;
    }

    getProducts() {
        return this.products;
    }
    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.error("Not Found");
            return;
        }
        return product;
    }
}


// Ejemplo de uso
const manager = new ProductManager();
manager.addProduct({
    title: "Mouse Gamer",
    description: "Mouse gamer con luces RGB",
    price: 29.99,
    thumbnail: "http://example.com/mouse.jpg",
    code: "MG01",
    stock: 100
});

console.log(manager.getProducts());
console.log(manager.getProductById(1));
console.log(manager.getProductById(2)); // Debería mostrar "Not Found"
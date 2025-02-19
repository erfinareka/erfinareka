// Factory function untuk membuat objek produk
function createProduct(name, price, specifications) {
    return {
        name: name,
        price: price,
        specifications: specifications,
        displayInfo: function() {
            console.log(`Nama Produk: ${this.name}`);
            console.log(`Harga: ${this.price}`);
            console.log(`Spesifikasi: ${this.specifications}`);
            console.log('-------------------------');
        }
    };
}

// Membuat beberapa produk
const product1 = createProduct(
    'Laptop',
    15000000,
    'Intel i7, 16GB RAM, 512GB SSD'
);

const product2 = createProduct(
    'Smartphone',
    5000000,
    '6.5 inch, 128GB Storage, 5000mAh Battery'
);

const product3 = createProduct(
    'Tablet ',
    3000000,
    '10 inch, 4GB RAM, 64GB Storage'
);

// Menampilkan informasi produk
product1.displayInfo();
product2.displayInfo();
product3.displayInfo();
import mongoode from 'mongoose';

const productSchema = new mongoode.Schema({
    productId: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    altNames: {
        type: [String],
        default: []
    },
    price: {
        type: Number,
        required: true
    },
    labelledPrice: {
        type: Number
    },category: {
        type: String,
        default:"others"
    },
    images: {
        type: [String],
        default: ["https://source.unsplash.com/600x400/?laptop"]
    },
    isVisible: {
        type: Boolean,
        default: true,
        required: true
    },
    brand: {
        type: String,
        default: "Generic",
    },
    model: {
        type: String,
        default: "Standard"
    }
}
);

const Product = mongoode.model('Product', productSchema);

export default Product;

        
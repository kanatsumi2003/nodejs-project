import mongoose, {Schema, Document} from "mongoose";

interface Product extends Document {
    name: string;
    quantity: string;
    price: Number;
    image: String;
}

const productSchema: Schema = new Schema (
    {
    name: { 
        type: String,
        required: [true, "Please enter your product"]
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true
    },    
},
{
    timestamps: true
}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

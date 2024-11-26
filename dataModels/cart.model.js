const mongoose = require("mongoose");

// Định nghĩa schema cho ShoppingCart
const shoppingCartSchema = mongoose.Schema({
    isOrdered: { // Trạng thái giỏ hàng đã được đặt hàng hay chưa
        type: Boolean,
        default: false, // Mặc định chưa đặt hàng
    },
    userId: { // Tham chiếu đến tài khoản của người dùng
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Account",
        required: true, // Đảm bảo không thể thiếu
    },
    items: [ // Danh sách món ăn trong giỏ hàng
        {
            menuItem: { // Tham chiếu đến món ăn
                type: mongoose.SchemaTypes.ObjectId,
                ref: "MenuItem",
                required: true, // Đảm bảo phải có món ăn
            },
            quantity: { // Số lượng món ăn
                type: Number,
                default: 1, // Mặc định là 1
                min: 1, // Không cho phép giá trị nhỏ hơn 1
            },
        },
    ],
}, {
    timestamps: true, // Tự động thêm createdAt và updatedAt
});

// Xuất model với tên mới
module.exports = mongoose.model("ShoppingCart", shoppingCartSchema);

const mongoose = require("mongoose");

// Định nghĩa schema cho Order
const orderSchema = mongoose.Schema({
    customerName: { // Tên khách hàng
        type: String,
        required: [true, "Customer name is required"],
    },
    deliveryAddress: { // Địa chỉ giao hàng
        type: String,
        required: [true, "Delivery address is required"],
    },
    contactNumber: { // Số điện thoại liên hệ
        type: String,
        required: [true, "Contact number is required"],
        match: [/^\d{10,12}$/, "Phone number must be 10-12 digits"], // Đảm bảo đúng định dạng
    },
    totalAmount: { // Tổng số tiền
        type: Number,
        required: [true, "Total amount is required"], // Sửa lỗi chính tả từ "requried"
    },
    paymentMethod: { // Phương thức thanh toán
        type: String,
        enum: ["Online", "On Delivery"],
        default: "On Delivery",
    },
    isPaid: { // Trạng thái thanh toán
        type: Boolean,
        default: false,
    },
    orderStatus: { // Trạng thái đơn hàng
        type: String,
        enum: ["pending", "confirmed", "shipped", "received"], // Đổi các trạng thái thành dạng rõ ràng hơn
        default: "pending",
    },
    cartId: { // Tham chiếu đến giỏ hàng
        type: mongoose.SchemaTypes.ObjectId,
        ref: "ShoppingCart", // Đổi tên tham chiếu để phù hợp với schema "cart"
        required: true, // Đảm bảo giỏ hàng không được để trống
    },
}, {
    timestamps: true, // Tự động thêm createdAt và updatedAt
});

// Xuất model với tên mới
module.exports = mongoose.model("Order", orderSchema);

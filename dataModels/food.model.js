const mongoose = require("mongoose");

// Định nghĩa schema cho MenuItem
const menuItemSchema = mongoose.Schema({
    itemName: { // Tên món ăn
        type: String,
        required: true,
        unique: true,
    },
    itemPrice: { // Giá món ăn
        type: Number,
        required: true, // Sửa lỗi chính tả
    },
    imageUrl: { // URL hình ảnh món ăn
        type: String,
        required: true,
    },
    location: { // Địa chỉ cung cấp món ăn
        type: String,
        required: true, // Sửa lỗi chính tả
    },
    categoryId: { // Tham chiếu đến danh mục
        type: mongoose.SchemaTypes.ObjectId,
        ref: "category",
        required: true, // Thêm yêu cầu trường này không được để trống
    },
}, {
    timestamps: true, // Tự động thêm createdAt và updatedAt
});

// Xuất model với tên mới
module.exports = mongoose.model("MenuItem", menuItemSchema);

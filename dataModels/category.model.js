const mongoose = require("mongoose");

// Định nghĩa schema cho Category
const categorySchema = new mongoose.Schema({
    categoryName: { // Tên danh mục
        type: String,
        required: true,
        unique: true, // Đảm bảo không trùng lặp
    },
    imageUrl: { // URL hình ảnh đại diện của danh mục
        type: String,
        required: true, // Bắt buộc phải có
    },
}, {
    timestamps: true, // Tự động thêm trường createdAt và updatedAt
});

// Xuất model với tên tùy chỉnh
module.exports = mongoose.model("Category", categorySchema);

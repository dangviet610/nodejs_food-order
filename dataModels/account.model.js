const mongoose = require("mongoose");

// Định nghĩa schema cho UserAccount
const userAccountSchema = mongoose.Schema({
    username: { // Tên đăng nhập
        type: String,
        required: [true, "Username is required"],
        unique: true, // Đảm bảo không trùng lặp
    },
    password: { // Mật khẩu đã được mã hóa
        type: String,
        required: [true, "Password is required"],
    },
    phoneNumber: { // Số điện thoại liên hệ
        type: String,
        required: [true, "Phone number is required"],
        match: [/^\d{10,12}$/, "Phone number must be 10-12 digits"], // Đảm bảo đúng định dạng
    },
    address: { // Địa chỉ người dùng
        type: String,
        required: [true, "Address is required"],
    },
    role: { // Vai trò người dùng
        type: String,
        enum: ["admin", "user", "manager"], // Thêm vai trò "manager"
        default: "user", // Mặc định là người dùng thường
    },
}, {
    timestamps: true, // Tự động thêm trường createdAt và updatedAt
});

// Xuất model với tên mới
module.exports = mongoose.model("UserAccount", userAccountSchema);

const mongoose = require("mongoose");

// Kết nối cơ sở dữ liệu
const initializeDatabase = async () => {
    try {
        const dbURI = "mongodb://localhost:27017/food-order";
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("🚀 Database connection established successfully!");
    } catch (err) {
        console.error("❌ Failed to connect to the database:", err.message);
    }
};

// Xuất kết nối để sử dụng trong các file khác
module.exports = initializeDatabase;

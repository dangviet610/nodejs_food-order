const express = require("express");
const app = express();

// Import và sử dụng file cấu hình routes
require("./endpoints/index")(app);

// Cấu hình port và khởi chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

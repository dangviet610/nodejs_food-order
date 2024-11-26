// const express = require("express");
// const app = express();
// const connectDB = require("./configs/database");
// const router = require("./routers");
// const setupRoutes = require('./routers/index'); // Import router


// app.use(express.json());
// app.use(express.urlencoded({extended: true}));  

// // Cấu hình EJS làm template engine
// app.set('view engine', 'ejs');
// app.set('views', './views'); // Đường dẫn đến thư mục views

// // Gọi hàm setupRoutes và truyền đối tượng app vào
// setupRoutes(app); // Thiết lập các route

// connectDB();
// router(app);

// app.listen(3000, ()=>{
//     console.log("Server run at port 3000");
// })
const express = require('express');
const categoryModel = require('./dataModels/category.model'); // Đảm bảo bạn đã import model đúng
const foodModel = require('./dataModels/food.model'); // Đảm bảo bạn đã import model đúng
const setupRoutes = require('./endpoints/index'); // Import router
const connectDB = require("./configurations/database");
const router = require("./endpoints");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));  

// Cấu hình view
app.set('views', './views'); // Đường dẫn đến thư mục views
app.set('view engine', 'ejs');

// Route cho đường dẫn gốc
app.get('/', async (req, res) => {
    try {
        const categories = await categoryModel.find(); // Lấy danh sách categories từ cơ sở dữ liệu
        console.log(categories); // Kiểm tra dữ liệu categories
        const foods = await foodModel.find(); // Lấy danh sách foods từ cơ sở dữ liệu
        res.render('index', { categories, foods }); // Truyền categories và foods vào view
    } catch (err) {
        console.error('Failed to fetch data', err);
        res.status(500).send('Internal Server Error');
    }
});


// Gọi hàm setupRoutes và truyền đối tượng app vào
setupRoutes(app); // Thiết lập các route

connectDB();
router(app);

// Khởi động server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server run at port ${PORT}`);
});
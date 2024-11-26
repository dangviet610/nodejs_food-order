const express = require("express");
const foodRoutes = express.Router();

// Import các handlers đã cá nhân hóa
const {
    addMenuItem,
    fetchMenuItems,
    modifyMenuItem,
    removeMenuItem,
    renderMenuItemsView,
} = require("../handlers/food.handlers");

// Định nghĩa các routes cho món ăn
foodRoutes
    .route("/")
    .get(fetchMenuItems) // Lấy danh sách món ăn
    .post(addMenuItem); // Thêm món ăn mới

foodRoutes
    .route("/:id")
    .put(modifyMenuItem) // Cập nhật món ăn theo ID
    .delete(removeMenuItem); // Xóa món ăn theo ID

// Route render giao diện các món ăn
foodRoutes
    .route("/view")
    .get(renderMenuItemsView); // Render danh sách món ăn ra giao diện

module.exports = foodRoutes;

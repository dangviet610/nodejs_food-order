const express = require("express");
const categoryRoutes = express.Router();

// Import các handlers đã cá nhân hóa
const {
    addCategory,
    fetchCategories,
    modifyCategory,
    removeCategory,
    renderCategoryView,
} = require("../handlers/category.handlers");

categoryRoutes
    .route("/")
    .get(fetchCategories) // Lấy danh sách danh mục
    .post(addCategory); // Thêm danh mục mới

categoryRoutes
    .route("/:id")
    .put(modifyCategory) // Cập nhật danh mục
    .delete(removeCategory); // Xóa danh mục
    
module.exports = categoryRoutes;

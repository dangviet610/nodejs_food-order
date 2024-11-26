// Import model danh mục
const Category = require("../dataModels/category.model");

module.exports = {
    // Thêm danh mục mới
    addCategory: async (req, res) => {
        try {
            const categoryData = req.body;
            const newCategory = await Category.create(categoryData);
            return res.status(201).json({
                success: true,
                message: "New category added successfully!",
                data: newCategory,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to create category.",
                error: error.message,
            });
        }
    },

    // Lấy danh sách tất cả danh mục
    fetchCategories: async (req, res) => {
        try {
            const categories = await Category.find();
            return res.status(200).json({
                success: true,
                message: "Categories retrieved successfully!",
                data: categories,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch categories.",
                error: error.message,
            });
        }
    },

    // Cập nhật thông tin danh mục
    modifyCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const updatedData = req.body;
            const updatedCategory = await Category.findByIdAndUpdate(
                categoryId,
                updatedData,
                { new: true }
            );

            if (!updatedCategory) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found.",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Category updated successfully!",
                data: updatedCategory,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to update category.",
                error: error.message,
            });
        }
    },

    // Xóa danh mục
    removeCategory: async (req, res) => {
        try {
            const categoryId = req.params.id;
            const deletedCategory = await Category.findByIdAndDelete(categoryId);

            if (!deletedCategory) {
                return res.status(404).json({
                    success: false,
                    message: "Category not found.",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Category deleted successfully!",
                data: deletedCategory,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to delete category.",
                error: error.message,
            });
        }
    },

    // Render danh mục ra view
    renderCategoryView: async (req, res) => {
        try {
            const categories = await Category.find(); // Lấy danh sách danh mục từ database
            res.render("categories/cards", { categories }); // Render view với danh sách danh mục
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};

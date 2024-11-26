// Import model món ăn
const MenuItem = require("../dataModels/food.model");

module.exports = {
    // Thêm món ăn mới
    addMenuItem: async (req, res) => {
        try {
            const menuItemData = req.body;
            const newMenuItem = await MenuItem.create(menuItemData);
            return res.status(201).json({
                success: true,
                message: "New menu item added successfully!",
                data: newMenuItem,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to create menu item.",
                error: error.message,
            });
        }
    },

    // Lấy danh sách tất cả món ăn
    fetchMenuItems: async (req, res) => {
        try {
            const menuItems = await MenuItem.find();
            return res.status(200).json({
                success: true,
                message: "Menu items retrieved successfully!",
                data: menuItems,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to fetch menu items.",
                error: error.message,
            });
        }
    },

    // Cập nhật món ăn
    modifyMenuItem: async (req, res) => {
        try {
            const menuItemId = req.params.id;
            const updatedData = req.body;
            const updatedMenuItem = await MenuItem.findByIdAndUpdate(
                menuItemId,
                updatedData,
                { new: true }
            );

            if (!updatedMenuItem) {
                return res.status(404).json({
                    success: false,
                    message: "Menu item not found.",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Menu item updated successfully!",
                data: updatedMenuItem,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to update menu item.",
                error: error.message,
            });
        }
    },

    // Xóa món ăn
    removeMenuItem: async (req, res) => {
        try {
            const menuItemId = req.params.id;
            const deletedMenuItem = await MenuItem.findByIdAndDelete(menuItemId);

            if (!deletedMenuItem) {
                return res.status(404).json({
                    success: false,
                    message: "Menu item not found.",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Menu item deleted successfully!",
                data: deletedMenuItem,
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Failed to delete menu item.",
                error: error.message,
            });
        }
    },

    // Render danh sách món ăn ra giao diện
    renderMenuItemsView: async (req, res) => {
        try {
            const menuItems = await MenuItem.find(); // Lấy danh sách món ăn từ database
            res.render("foods/cards", { menuItems }); // Render view với danh sách món ăn
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};

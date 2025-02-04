import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

interface Category {
  id: string;
  name: string;
  image: string;
  productCount: number;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: "1",
      name: "Electronics",
      image: "https://picsum.photos/200",
      productCount: 15,
    },
    {
      id: "2",
      name: "Furniture",
      image: "https://picsum.photos/201",
      productCount: 8,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleAddCategory = (category: Omit<Category, "id" | "productCount">) => {
    const newCategory = {
      ...category,
      id: Math.random().toString(36).substring(7),
      productCount: 0,
    };
    setCategories([...categories, newCategory]);
    setIsModalOpen(false);
  };

  const handleEditCategory = (category: Omit<Category, "productCount">) => {
    setCategories(
      categories.map((c) =>
        c.id === category.id ? { ...category, productCount: c.productCount } : c
      )
    );
    setIsModalOpen(false);
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter((c) => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Categories</h1>
          <p className="text-lg text-gray-500">Manage your product categories</p>
        </div>
        <button
          onClick={() => {
            setSelectedCategory(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Category
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <div className="p-6 space-y-4">
              <div className="aspect-square relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm text-gray-500">
                  {category.productCount} products
                </p>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => {
                    setSelectedCategory(category);
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Pencil className="w-4 h-4" />
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">
                  {selectedCategory ? "Edit Category" : "Add Category"}
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const category = {
                    name: formData.get("name") as string,
                    image: formData.get("image") as string,
                    ...(selectedCategory && { id: selectedCategory.id }),
                  };
                  if (selectedCategory) {
                    handleEditCategory(category as Omit<Category, "productCount">);
                  } else {
                    handleAddCategory(category);
                  }
                }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    defaultValue={selectedCategory?.name}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image URL
                  </label>
                  <input
                    id="image"
                    name="image"
                    defaultValue={selectedCategory?.image}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div className="flex justify-end gap-2 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {selectedCategory ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
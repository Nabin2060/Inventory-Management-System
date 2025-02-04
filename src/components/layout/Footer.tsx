export function Footer() {
    return (
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Inventory Management System. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
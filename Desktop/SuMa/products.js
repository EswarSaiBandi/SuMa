document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#products-section #searchInput");
    const categoryFilter = document.querySelector("#products-section #categoryFilter");
    const sortFilter = document.querySelector("#products-section #sortFilter");
    const productContainer = document.querySelector("#products-section #productContainer");

    function filterProducts() {
        const searchText = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const products = document.querySelectorAll("#products-section .product-card");

        products.forEach(product => {
            const productName = product.getAttribute("data-name").toLowerCase();
            const productCategory = product.getAttribute("data-category");

            const matchesSearch = productName.includes(searchText);
            const matchesCategory = selectedCategory === "all" || productCategory === selectedCategory;

            product.style.display = matchesSearch && matchesCategory ? "block" : "none";
        });
    }

    function sortProducts() {
        const sortValue = sortFilter.value;
        const products = Array.from(document.querySelectorAll("#products-section .product-card"));

        products.sort((a, b) => {
            const priceA = parseFloat(a.getAttribute("data-price"));
            const priceB = parseFloat(b.getAttribute("data-price"));
            const nameA = a.getAttribute("data-name").toLowerCase();
            const nameB = b.getAttribute("data-name").toLowerCase();

            if (sortValue === "price-asc") return priceA - priceB;
            if (sortValue === "price-desc") return priceB - priceA;
            if (sortValue === "name-asc") return nameA.localeCompare(nameB);
            if (sortValue === "name-desc") return nameB.localeCompare(nameA);
            return 0;
        });

        productContainer.innerHTML = "";
        products.forEach(product => productContainer.appendChild(product));
    }

    searchInput.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);
    sortFilter.addEventListener("change", sortProducts);
});

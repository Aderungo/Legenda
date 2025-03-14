const searchInput = document.getElementById('searchInput');
    const products = document.querySelectorAll('.hitscont1');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.toLowerCase();

        products.forEach(product => {
            const productName = product.querySelector('.bigname p').textContent.toLowerCase();
            const productDescription = product.querySelector('.vlad p').textContent.toLowerCase();

            if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
                product.style.display = 'flex'; 
            } else {
                product.style.display = 'none'; 
            }
        });
    });


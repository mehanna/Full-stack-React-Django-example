import requests

# Product data
products = [
    {
        "name": "Product 1",
        "description": "This is the first product",
        "cost": "9.99",
        "action": "Add to cart"
    },
    {
        "name": "Product 2",
        "description": "This is the second product", 
        "cost": "19.99",
        "action": "Add to cart"
    },
    {
        "name": "Product 3",
        "description": "This is the third product",
        "cost": "29.99", 
        "action": "Add to cart"
    }
]

# Add products to API
for product in products:
    response = requests.post("http://localhost:8000/api/products/", json=product)
    if response.status_code == 201:
        print(f"Added: {product['name']}")
    else:
        print(f"Failed to add: {product['name']}")
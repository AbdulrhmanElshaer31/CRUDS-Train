// This file contains CRUDS opreation for products
const apiUrl = 'https://fakestoreapi.com';

//Get all products

export async function getAllProducts() {
    try {
        const request = await fetch(`${apiUrl}/products`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });
        const response = await request.json();
        if (!request.ok) {
            return {
                message: "Can't laod products please refresh the page!",
                success: false,
        
            }
        }
            console.log(response);
            
            return {
                message: "Products loaded successfully!",
                success: true,
                data:response
            }
    } catch(err) {
            console.error("Error: ",err);
        return {
                message: "internet connection error",
                success: false,
               
            }
    }
}

//Get product by id

export async function getProductById(id) {
    try {
        const request = await fetch(`${apiUrl}/products/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        });
        const response = await request.json();
        if (!request.ok) {
            return {
                message: "Can't laod product data please refresh the page!",
                success: false,
            }
        }
            return {
                message: "Product data loaded successfully!",
                success: true,
                data:response
            }
    } catch(err) {
            console.error("Error: ",err);
        return {
                message: "internet connection error",
                success: false,
            }
    }
}

//Create product

export async function creatProduct( title, price, description, category, image ) {
    try {
        const request = await fetch(`${apiUrl}/products`, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({
                title,
                price,
                description,
                category,
                image
            }) 
        })

        if (!request.ok) {
            return {
                message: "Failed to add product please try Again later",
                success: false
            }
        }
        return {
            message: "Product added successfully!",
            success: true
        }
    } catch (error) {
        console.error("error: ", error);
                return {
                message: "Please check internet connection!",
                success: false
            }
        
    }
    
}

//Edit product

export async function editProduct( title, price, description, category, image,id) {
    try {
        const request = await fetch(`${apiUrl}/products/${id}`, {
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify({
                title,
                price,
                description,
                category,
                image
            }) 
        })
        if (!request.ok) {
            return {
                message: "Failed to edit product please try Again later",
                success: false
            }
        }
        return {
            message: "Product edited successfully!",
            success: true
        }
    } catch (error) {
        console.error("error: ", error);
                return {
                message: "Please check internet connection!",
                success: false
            }
        
    }
    
}

//Delete product

export async function deleteProduct(id) {
    try {
        const request = await fetch(`${apiUrl}/products/${id}`, {method: "DELETE"})
        if (!request.ok) {
            return {
                message: "Failed to delete product please try Again later",
                success: false
            }
        }
        return {
            message: "Product deleted successfully!",
            success: true
        }
    } catch (error) {
        console.error("error: ", error);
                return {
                message: "Please check internet connection!",
                success: false
            }
        
    }
    
}


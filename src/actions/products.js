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
      data: response
    }
  } catch (err) {
    console.error("Error: ", err);
    return {
      message: "internet connection error",
      success: false,
               
    }
  }
}
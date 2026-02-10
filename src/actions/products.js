const baseUrl = "https://aefgkdxaustxossfirqh.supabase.co/rest/v1/products";
const headers = {
  "Content-Type": "application/json",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
};

export async function addProduct(title, price, category, image, description) {
  try {
    const request = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        title: title,
        price: price,
        category: category,
        image: image,
        description: description,
      }),
    });
    const response = await request.json();
    if (!request.ok) {
      return null;
    }
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getProducts() {
  try {
    const request = await fetch(`${baseUrl}`, {
      method: "GET",
      headers: headers,
    });
    const response = await request.json();
    if (!request.ok) {
      return null;
    }
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function productById(id) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "GET",
      headers: headers,
    });
    const response = await request.json();
    if (!request.ok) {
      return null;
    }
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateProductTitle(id, title) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        title: title,
      }),
    });
    const response = await request.json();
    if (!request.ok) {
      return null;
    }
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateProductPrice(id, price) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        price: price,
      }),
    });
    const response = await request.json();
    if (!request.ok) {
      return null;
    }
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateProductCategory(id, category) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        category: category,
      }),
    });
    const response = await request.json();
    if (!request.ok) {
      return null;
    }
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateProductImage(id, image) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        image: image,
      }),
    });
    const response = await request.json();
    if (!request.ok) {
      return null;
    }
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateProductDescription(id, description) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        description: description,
      }),
    });
    const response = await request.json();
    if (!request.ok) {
      return null;
    }
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteProduct(id) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "DELETE",
      headers: headers,
    });
    const response = await request.json();
    if (!request.ok) {
      return null;
    }
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const headers = {
  "Content-Type": "application/json",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
};

export async function createCart(_userId) {
  try {
    const request = await fetch(
      "https://aefgkdxaustxossfirqh.supabase.co/rest/v1/carts",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ user_id: _userId }),
      },
    );
    if (!request.ok) return null;
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function addProductToCart(cart_id, product_id, quantity) {
  try {
    const request = await fetch(
      "https://aefgkdxaustxossfirqh.supabase.co/rest/v1/cart_products",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          cart_id: cart_id,
          product_id: product_id,
          quantity: quantity,
        }),
      },
    );
    if (!request.ok) return null;
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateQuantity(id, quantity) {
  try {
    const request = await fetch(
      `https://aefgkdxaustxossfirqh.supabase.co/rest/v1/cart_products?id=eq.${id}`,
      {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify({
          quantity: quantity,
        }),
      },
    );
    if (!request.ok) return null;
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteProductFromCart(id) {
  try {
    const request = await fetch(
      `https://aefgkdxaustxossfirqh.supabase.co/rest/v1/cart_products?id=eq.${id}`,
      {
        method: "DELETE",
        headers: headers,
      },
    );
    if (!request.ok) return null;
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

const BASE_URL = "https://aefgkdxaustxossfirqh.supabase.co/rest/v1/carts";

export async function getCarts() {
  try {
    const request = await fetch(BASE_URL, {
      method:"GET",
            headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20"
            }
    });
    if (!request.ok) return null;
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getCartById(id) {
  try {
    const request = await fetch(`${BASE_URL}?id=eq.${id}`, {
      method:"GET",
            headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20"
            }
    });
    if (!request.ok) return null;
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function createCart(_userId, _products, _date = new Date().toISOString()) {
  try {
    const request = await fetch(BASE_URL, {
      method: "POST",
      headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20"
      },
      body: JSON.stringify({
        userId: _userId,
        date: _date,
        products: _products
      })
    });
    if (!request.ok) return null;
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function updateCart(id, _userId, _products, _date = new Date().toISOString()) {
  try {
    const request = await fetch(`${BASE_URL}?id=eq.${id}`, {
      method: "PUT",
      headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20"
      },
      body: JSON.stringify({
        userId: _userId,
        date: _date,
        products: _products
      })
    });
    if (!request.ok) return null;
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteCart(id) {
  try {
    const request = await fetch(`${BASE_URL}?id=eq.${id}`, {
      method: "DELETE"
    });
    if (!request.ok) return null;
    const response = await request.json();
    return response;
  } catch (err) {
    console.error(err);
    return null;
  }
}

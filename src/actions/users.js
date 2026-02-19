const baseUrl = "https://aefgkdxaustxossfirqh.supabase.co/rest/v1/users";
const headers = {
  "Content-Type": "application/json",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
};

export async function createUser(username, email, password, role) {
  try {
    const request = await fetch(`${baseUrl}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        role: role,
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

export async function userById(id) {
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

export async function updateUserName(id, username) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        username: username,
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

export async function updateEmail(id, email) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        email: email,
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

export async function updatePassword(id, password) {
  try {
    const request = await fetch(`${baseUrl}?id=eq.${id}`, {
      method: "PATCH",
      headers: headers,
      body: JSON.stringify({
        password: password,
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

export async function deleteUser(id) {
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

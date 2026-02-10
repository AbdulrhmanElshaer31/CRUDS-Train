const headers = {
  "Content-Type": "application/json",
  apikey:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
};

export async function login(username, password) {
  try {
    const request = await fetch(
      "https://aefgkdxaustxossfirqh.supabase.co/rest/v1/rpc/auth_login",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
          _username: username,
          _password: password,
        }),
      },
    );
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

export async function logout(token) {
  try {
    const request = await fetch(
      "https://aefgkdxaustxossfirqh.supabase.co/rest/v1/auth_tokens?token=eq." +
        token,
      {
        method: "DELETE",
        headers: headers,
      },
    );
    if (!request.ok) {
      return false;
    }
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
}

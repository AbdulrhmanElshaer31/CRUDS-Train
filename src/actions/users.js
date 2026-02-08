export async function users(){
    try {
        const request = await fetch('https://aefgkdxaustxossfirqh.supabase.co/rest/v1/users', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20"
            }
        })
        const response = await request.json();
        if (!request.ok) {
            return null;
        }
        console.log(response);
        return response;
    } catch(err) {
        console.error(err);
        return null;
    }
}


export async function userById(id){
    try {
        const request = await fetch(`https://aefgkdxaustxossfirqh.supabase.co/rest/v1/users?id=eq.${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20"
            }
        })
        const response = await request.json();
        if (!request.ok) {
            return null;
        }
        console.log(response);
        return response;
    } catch(err) {
        console.error(err);
        return null;
    }
}


export async function createUser(_username, _email, _password){
    try {
        const request = await fetch('https://aefgkdxaustxossfirqh.supabase.co/rest/v1/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20"
            },
            body: JSON.stringify({
                username: _username,
                email: _email,
                password: _password
            })
        })
        const response = await request.json();
        if (!request.ok) {
            return null;
        }
        console.log(response);
        return response;
    } catch(err) {
        console.error(err);
        return null;
    }
}


export async function updateUser(id, _username, _email, _password){
    try {
        const request = await fetch(`https://aefgkdxaustxossfirqh.supabase.co/rest/v1/users?id=eq.${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20"
            },
            body: JSON.stringify({
                username: _username,
                email: _email,
                password: _password
            })
        })
        const response = await request.json();
        if (!request.ok) {
            return null;
        }
        console.log(response);
        return response;
    } catch(err) {
        console.error(err);
        return null;
    }
}


export async function deleteUser(id){
    try {
        const request = await fetch(`https://aefgkdxaustxossfirqh.supabase.co/rest/v1/users?id=eq.${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZmdrZHhhdXN0eG9zc2ZpcnFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0NjU5MjMsImV4cCI6MjA4NjA0MTkyM30.L4kUCFnOp8xyLmgr6KcGk5_cpSSooU2Lj997buHsL20"
            }
        })
        const response = await request.json();
        if (!request.ok) {
            return null;
        }
        console.log(response);
        return response;
    } catch(err) {
        console.error(err);
        return null;
    }
}
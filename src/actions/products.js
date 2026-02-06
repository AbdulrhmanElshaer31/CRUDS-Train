export async function product() {
    try {
        const request = await fetch('https://fakestoreapi.com/products', {
            method:"GET"
        })
        const response = await request.json();
        if (!request.ok) {
            return null;
        }
        console.log(response);
        
        return response;
    } catch (err) {
        console.error(err);
        
    }
}



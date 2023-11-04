async function getData(api, method, apiKey) {
    const res = await fetch(api, {
        method,
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Data(api) {
    const apiKey = 'your-api-key-here';
    const data = await getData(api, 'GET', apiKey);

    return data;
}
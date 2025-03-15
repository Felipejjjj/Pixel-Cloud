async function read(resource, id) {
    resource = id
      ? `${API_URL}/${resource}?id=eq.${id}`
      : `${API_URL}/${resource}`;
   
    const options = {
      headers: {
        apikey: API_TOKEN,
        Authorization: `Bearer ${API_TOKEN}`,
      },
      method: 'GET',
    };
   
    const res = await fetch(resource, options);
   
    return await res.json();
}

async function update(resource, id, data) {
    resource = `${API_URL}/${resource}?id=eq.${id}`;
   
    const options = {
      headers: {
        apikey: API_TOKEN,
        Authorization: `Bearer ${API_TOKEN}`,
        Prefer: 'return=representation',
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
      body: JSON.stringify(data),
    };
   
    const res = await fetch(resource, options);
   
    const updatedData = await res.json();
   
    return updatedData?.[0];
}

async function remove(resource, id) {
    resource = `${API_URL}/${resource}?id=eq.${id}`;
   
    const options = {
      headers: {
        apikey: API_TOKEN,
        Authorization: `Bearer ${API_TOKEN}`,
      },
      method: 'DELETE',
    };
   
    const res = await fetch(resource, options);
   
    return res.ok;
}

export default {read, update, remove}
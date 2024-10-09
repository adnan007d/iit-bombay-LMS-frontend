async function getBooks(page, admin) {
  const res = await myFetch(`/api/books/${admin ? "admin" : ""}?page=${page}`);
  if (!res.ok) {
    return alert("Error while fetching books");
  }
  return await res.json();
}

async function borrowBook(bookId) {
  const res = await myFetch(`/api/borrows/${bookId}`, {
    method: "POST",
  });

  if (!res.ok) {
    const error = await res.json();
    return alert(error.message);
  }

  return res;
}

async function returnBook(bookId) {
  const res = await myFetch(`/api/borrows/${bookId}/return`, {
    method: "POST",
  });
  if (!res.ok) {
    const error = await res.json();
    return alert(error.message);
  }
  return res;
}

async function getHistory(page, type) {
  const res = await myFetch(`/api/borrows/history?page=${page}&type=${type}`);

  if (!res.ok) {
    return alert("Error while fetching history");
  }
  return await res.json();
}

async function getABook(id) {
  const res = await myFetch(`/api/books/admin/${id}`);
  if (!res.ok) {
    console.error(await res.json());
    return;
  }
  return await res.json();
}

async function deleteBook(id) {
  const res = await myFetch(`/api/books/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const error = await res.json();
    return alert(error.message);
  }
  return await res.json();
}

async function getBookHistory(id, page) {
  const res = await myFetch(`/api/borrows/history/books/${id}?page=${page}`);
  if (!res.ok) {
    return alert("Error while fetching history");
  }
  return await res.json();
}

async function getUserHistory(id, page) {
  const res = await myFetch(`/api/borrows/history/users/${id}?page=${page}`);
  if (!res.ok) {
    return alert("Error while fetching history");
  }
  return await res.json();
}

async function getAUser(id) {
  const res = await myFetch(`/api/users/${id}`);
  if (!res.ok) {
    console.error(await res.json());
    return;
  }
  return await res.json();
}

async function getUsers(page) {
  const res = await myFetch(`/api/users?page=${page}`);
  if (!res.ok) {
    return alert("Error while fetching users");
  }
  return await res.json();
}

async function deleteSelf() {
  const res = await myFetch("/api/users", {
    method: "DELETE",
  });
  if (!res.ok) {
    const error = await res.json();
    return alert(error.message);
  }
  return await res.json();
}

async function deleteUser(id) {
  const res = await myFetch(`/api/users/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const error = await res.json();
    return alert(error.message);
  }
  return await res.json();
}

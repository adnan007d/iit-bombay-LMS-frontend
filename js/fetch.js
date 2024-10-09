async function myFetch(path, options) {
  const url = "https://iit-bombay-lms-backend.onrender.com" + path;
  const token = localStorage.getItem("token");

  const response = await fetch(url, {
    ...options,
    credentials: "include",
    headers: {
      ...options?.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401) {
    localStorage.removeItem("token");
    if (
      window.location.pathname.startsWith("/login") &&
      window.location.pathname.startsWith("/signup")
    ) {
      window.location.href = "/login";
    }
  }

  if (response.headers.get("authorization")) {
    console.log("Here");
    localStorage.setItem("token", response.headers.get("authorization"));
  }

  return response;
}

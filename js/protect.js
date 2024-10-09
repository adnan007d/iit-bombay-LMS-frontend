const unProtectedRoutes = ["signup", "login"];
let user = null;
(async function () {
  const token = localStorage.getItem("token");
  if (unProtectedRoutes.includes(window.location.pathname.split("/")[1])) {
    if (token) {
      window.location.href = "/";
    }
    return;
  }

  if (!token) {
    window.location.href = "/login";
    return;
  }

  const res = await myFetch("/api/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.ok) {
    user = await res.json();

    if (
      window.location.pathname.startsWith("/admin") &&
      user.role !== "LIBRARIAN"
    ) {
      window.location.href = "/";
    }

    const event = new CustomEvent("userPopulated", { detail: user });
    document.dispatchEvent(event);
  }
})();

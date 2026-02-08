// src/services/api.js

const API_BASE = "http://localhost:8000";

export async function apiRequest(
  path,
  method = "GET",
  body = null,
  token = null
) {
  const headers = { "Content-Type": "application/json" };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  return response.json();
}
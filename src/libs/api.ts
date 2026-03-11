// src/lib/api.ts

import { stackServerApp } from "@/stack/server";


export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  
  // Lấy token từ Stack Auth (Ví dụ trên Server)
  const user = await stackServerApp.getUser();
  const token = user?.id; // Hoặc accessToken tùy cấu hình Stack Auth

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: defaultHeaders,
  });

  if (response.status === 401) {
    // Xử lý logic khi hết hạn token tại đây
  }

  return response;
}
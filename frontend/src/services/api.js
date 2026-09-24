const API_BASE_URL = '/api';

/**
 * Fetch products with optional query params (page, limit, category, keyword, sort, etc.)
 */
export const fetchProducts = async (params = {}) => {
  try {
    const query = new URLSearchParams();
    Object.entries(params).forEach(([key, val]) => {
      if (val !== undefined && val !== null && val !== '') {
        query.append(key, val);
      }
    });

    const res = await fetch(`${API_BASE_URL}/products?${query.toString()}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('API Error fetching products, falling back to local data:', err);
    return null;
  }
};

/**
 * Fetch featured products
 */
export const fetchFeaturedProducts = async (limit = 8) => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/featured?limit=${limit}`);
    if (!res.ok) throw new Error('Failed to fetch featured');
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn('API Error fetching featured products:', err);
    return null;
  }
};

/**
 * Fetch all categories
 */
export const fetchCategories = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`);
    if (!res.ok) throw new Error('Failed to fetch categories');
    const data = await res.json();
    return data.categories || data;
  } catch (err) {
    console.warn('API Error fetching categories:', err);
    return [];
  }
};

/**
 * Fetch single product details
 */
export const fetchProductById = async (idOrSlug) => {
  try {
    const res = await fetch(`${API_BASE_URL}/products/${idOrSlug}`);
    if (!res.ok) throw new Error('Failed to fetch product details');
    const data = await res.json();
    return data.product || data;
  } catch (err) {
    console.warn('API Error fetching product by id:', err);
    return null;
  }
};

/* ─── Auth API ─── */
const authHeaders = () => {
  const token = localStorage.getItem('ZYRIVO_token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

export const apiFirebaseLogin = async (phone, name = '') => {
  const res = await fetch(`${API_BASE_URL}/auth/firebase-login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, name }),
  });
  return res.json();
};

export const apiSendOtp = async (phone) => {
  const res = await fetch(`${API_BASE_URL}/auth/send-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone }),
  });
  return res.json();
};

export const apiVerifyOtp = async (phone, otp) => {
  const res = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, otp }),
  });
  return res.json();
};

export const apiLogin = async (email, password) => {
  const res = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const apiRegister = async (name, email, password, role = 'supplier') => {
  const res = await fetch(`${API_BASE_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role }),
  });
  return res.json();
};

export const apiGetProfile = async () => {
  const res = await fetch(`${API_BASE_URL}/auth/profile`, {
    headers: authHeaders(),
  });
  return res.json();
};

export const apiUpdateProfile = async (data) => {
  const res = await fetch(`${API_BASE_URL}/auth/profile`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const apiLogout = async () => {
  await fetch(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
    headers: authHeaders(),
  });
  localStorage.removeItem('ZYRIVO_token');
  localStorage.removeItem('ZYRIVO_user');
};

/* ─── Admin API Services ─── */
export const apiAdminCreateProduct = async (productData) => {
  const res = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(productData),
  });
  return res.json();
};

export const apiAdminUpdateProduct = async (id, productData) => {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify(productData),
  });
  return res.json();
};

export const apiAdminDeleteProduct = async (id) => {
  const res = await fetch(`${API_BASE_URL}/products/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  });
  return res.json();
};

export const apiAdminGetAllOrders = async () => {
  const res = await fetch(`${API_BASE_URL}/orders`, {
    headers: authHeaders(),
  });
  return res.json();
};

export const apiAdminUpdateOrderStatus = async (id, status) => {
  const res = await fetch(`${API_BASE_URL}/orders/${id}/status`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify({ status }),
  });
  return res.json();
};

export const apiAdminGetAllCustomers = async () => {
  const res = await fetch(`${API_BASE_URL}/auth/users`, {
    headers: authHeaders(),
  });
  return res.json();
};

/* ─── Customer Orders API Services ─── */
export const apiCreateOrder = async (orderData) => {
  const res = await fetch(`${API_BASE_URL}/orders`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(orderData),
  });
  return res.json();
};

export const apiGetMyOrders = async () => {
  const res = await fetch(`${API_BASE_URL}/orders/myorders`, {
    headers: authHeaders(),
  });
  return res.json();
};

export const apiGetOrderById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/orders/${id}`, {
    headers: authHeaders(),
  });
  return res.json();
};

export const apiCancelMyOrder = async (id) => {
  const res = await fetch(`${API_BASE_URL}/orders/${id}/cancel`, {
    method: 'PUT',
    headers: authHeaders(),
  });
  return res.json();
};




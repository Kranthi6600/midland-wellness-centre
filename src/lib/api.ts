const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "https://midlandwellnesscentre.com/api/public";
const CLIENT_ID = "61132aab-628b-44db-ac60-455914ec31ba";

export interface ServiceItem {
  id: string;
  client_id: string;
  category_id: string | null;
  title: string;
  slug: string;
  description: string | null;
  content: string | null;
  thumbnail: string | null;
  thumbnail_alt: string | null;
  fee: number | null;
  fee_currency: string | null;
  fee_label: string | null;
  service_code: string | null;
  duration: string | null;
  tags: string[] | null;
  active: boolean;
  featured: boolean;
  rating: number;
  reviews_count: number;
  views: number;
  created_at: string;
  updated_at: string;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  open_graph_title: string | null;
  open_graph_description: string | null;
  open_graph_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  twitter_image: string | null;
  canonical_url: string | null;
  robots_meta: string | null;
  schema_type: string | null;
  seo_score: number | null;
  target_keywords: string | null;
  cta_heading: string | null;
  cta_body: string | null;
  cta_button_text: string | null;
  cta_button_url: string | null;
  allow_social_share: boolean;
  wehoware_service_categories: {
    id: string;
    name: string;
    slug: string;
  } | null;
}

export interface ServiceDetail extends ServiceItem {
  related_blogs: {
    id: string;
    title: string;
    slug: string;
    thumbnail: string | null;
    excerpt: string | null;
  }[];
  faqs: {
    id: string;
    question: string;
    answer: string;
    display_order: number;
  }[];
  faq_schema: object | null;
  service_schema: object | null;
  breadcrumb_schema: object | null;
}

export interface Pagination {
  totalItems: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ServiceListSchema {
  item_list: object | null;
  collection_page: object | null;
}

export interface ServicesResponse {
  data: ServiceItem[];
  pagination: Pagination;
  schema?: ServiceListSchema;
}

export async function fetchServices(params?: {
  page?: number;
  limit?: number;
  search?: string;
  categoryId?: string;
  featured?: boolean;
  sortBy?: string;
  sortOrder?: string;
}): Promise<ServicesResponse> {
  const searchParams = new URLSearchParams();
  searchParams.set("clientId", CLIENT_ID);
  // Default to FIFO: oldest services first.
  searchParams.set("sortBy", "created_at");
  searchParams.set("sortOrder", "asc");

  if (params) {
    if (params.page) searchParams.set("page", String(params.page));
    if (params.limit) searchParams.set("limit", String(params.limit));
    if (params.search) searchParams.set("search", params.search);
    if (params.categoryId) searchParams.set("categoryId", params.categoryId);
    if (params.featured !== undefined) searchParams.set("featured", String(params.featured));
    if (params.sortBy) searchParams.set("sortBy", params.sortBy);
    if (params.sortOrder) searchParams.set("sortOrder", params.sortOrder);
  }

  const res = await fetch(`${API_BASE}/services?${searchParams.toString()}`, {
    cache: "no-store",
  } as RequestInit);

  if (!res.ok) {
    throw new Error(`Failed to fetch services: ${res.status}`);
  }

  const json = await res.json();

  // Normalize: API may return flat array, { data: [...] }, or { services: [...] }
  const data: ServiceItem[] = Array.isArray(json)
    ? json
    : Array.isArray(json.data)
      ? json.data
      : Array.isArray(json.services)
        ? json.services
        : [];

  // Safety net: ensure FIFO ordering even if the API ignores sort params.
  data.sort(
    (a: ServiceItem, b: ServiceItem) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  const pagination: Pagination = json.pagination || {
    totalItems: data.length,
    page: 1,
    limit: 100,
    totalPages: 1,
  };

  const schema: ServiceListSchema | undefined = json.schema
    ? {
        item_list: json.schema.item_list ?? null,
        collection_page: json.schema.collection_page ?? null,
      }
    : undefined;

  return { data, pagination, schema };
}

export async function fetchServiceBySlug(slug: string): Promise<ServiceDetail> {
  // Try the dedicated slug endpoint first.
  try {
    const res = await fetch(
      `${API_BASE}/services/${slug}?clientId=${CLIENT_ID}`,
      { cache: "no-store" } as RequestInit
    );

    if (res.ok) {
      const json = await res.json();
      const item = Array.isArray(json.data) ? json.data[0] : json.data || json;
      if (item && item.slug) {
        if (!item.service_schema && json.service_schema) item.service_schema = json.service_schema;
        if (!item.breadcrumb_schema && json.breadcrumb_schema) item.breadcrumb_schema = json.breadcrumb_schema;
        if (!item.faq_schema && json.faq_schema) item.faq_schema = json.faq_schema;
        return item;
      }
    }
  } catch {
    // fall through to list lookup
  }

  // Fallback: fetch the full list and match by slug.
  const listRes = await fetch(
    `${API_BASE}/services?clientId=${CLIENT_ID}&limit=100`,
    { cache: "no-store" } as RequestInit
  );

  if (!listRes.ok) {
    throw new Error(`Failed to fetch service: ${listRes.status}`);
  }

  const listJson = await listRes.json();
  const match = (listJson.data || []).find(
    (s: ServiceItem) => s.slug === slug
  );

  if (!match) {
    throw new Error(`Service not found for slug: ${slug}`);
  }

  const detail = match as ServiceDetail;
  detail.service_schema = detail.service_schema ?? null;
  detail.breadcrumb_schema = detail.breadcrumb_schema ?? null;
  detail.faq_schema = detail.faq_schema ?? null;
  return detail;
}

export async function fetchServiceFaqs(slug: string): Promise<{
  data: {
    id: string;
    question: string;
    answer: string;
    display_order: number;
  }[];
}> {
  const res = await fetch(
    `${API_BASE}/services/${slug}/faqs?clientId=${CLIENT_ID}`,
    { cache: "no-store" } as RequestInit
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch FAQs: ${res.status}`);
  }

  return res.json();
}

/* ----------------------------- Blogs ----------------------------- */

export interface BlogItem {
  id: string;
  client_id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  thumbnail: string | null;
  thumbnail_alt: string | null;
  status: string;
  category_id: string | null;
  featured: boolean;
  read_time: number | null;
  views: number;
  likes: number;
  tags: string[] | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
  meta_title: string | null;
  meta_description: string | null;
  meta_keywords: string | null;
  open_graph_title: string | null;
  open_graph_description: string | null;
  open_graph_image: string | null;
  twitter_title: string | null;
  twitter_description: string | null;
  twitter_image: string | null;
  canonical_url: string | null;
  robots_meta: string | null;
  schema_type: string | null;
  seo_score: number | null;
  target_keywords: string | null;
  show_toc: boolean;
  show_author_box: boolean;
  cta_heading: string | null;
  cta_body: string | null;
  cta_button_text: string | null;
  cta_button_url: string | null;
  allow_social_share: boolean;
  wehoware_blog_categories: {
    id: string;
    name: string;
  } | null;
}

export interface BlogDetail extends BlogItem {
  related_services: {
    id: string;
    title: string;
    slug: string;
    thumbnail: string | null;
    description: string | null;
    fee: number | null;
    fee_currency: string | null;
  }[];
  faqs: {
    id: string;
    question: string;
    answer: string;
    display_order: number;
  }[];
  faq_schema: object | null;
  blog_schema: object | null;
  breadcrumb_schema: object | null;
}

export interface BlogListSchema {
  item_list: object | null;
  collection_page: object | null;
}

export interface BlogsResponse {
  data: BlogItem[];
  pagination: Pagination;
  schema?: BlogListSchema;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug?: string;
}

export async function fetchBlogs(params?: {
  page?: number;
  limit?: number;
  search?: string;
  category?: string;
  featured?: boolean;
  sortBy?: string;
  sortOrder?: string;
}): Promise<BlogsResponse> {
  const searchParams = new URLSearchParams();
  searchParams.set("clientId", CLIENT_ID);
  // Default to FIFO: oldest posts first.
  searchParams.set("sortBy", "created_at");
  searchParams.set("sortOrder", "asc");

  if (params) {
    if (params.page) searchParams.set("page", String(params.page));
    if (params.limit) searchParams.set("limit", String(params.limit));
    if (params.search) searchParams.set("search", params.search);
    if (params.category) searchParams.set("category", params.category);
    if (params.featured !== undefined) searchParams.set("featured", String(params.featured));
    if (params.sortBy) searchParams.set("sortBy", params.sortBy);
    if (params.sortOrder) searchParams.set("sortOrder", params.sortOrder);
  }

  const res = await fetch(`${API_BASE}/blogs?${searchParams.toString()}`, {
    cache: "no-store",
  } as RequestInit);

  if (!res.ok) {
    throw new Error(`Failed to fetch blogs: ${res.status}`);
  }

  const json = await res.json();

  // Normalize: API may return flat array, { data: [...] }, or { blogs: [...] }
  const data: BlogItem[] = Array.isArray(json)
    ? json
    : Array.isArray(json.data)
      ? json.data
      : Array.isArray(json.blogs)
        ? json.blogs
        : [];

  // Safety net: ensure FIFO ordering even if the API ignores sort params.
  data.sort(
    (a: BlogItem, b: BlogItem) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
  );

  const pagination: Pagination = json.pagination || {
    totalItems: data.length,
    page: 1,
    limit: 100,
    totalPages: 1,
  };

  const schema: BlogListSchema | undefined = json.schema
    ? {
        item_list: json.schema.item_list ?? null,
        collection_page: json.schema.collection_page ?? null,
      }
    : undefined;

  return { data, pagination, schema };
}

export async function fetchBlogBySlug(slug: string): Promise<BlogDetail> {
  // Try the dedicated slug endpoint first.
  try {
    const res = await fetch(
      `${API_BASE}/blogs/${slug}?clientId=${CLIENT_ID}`,
      { cache: "no-store" } as RequestInit
    );

    if (res.ok) {
      const json = await res.json();
      const item =
        json.data && !Array.isArray(json.data)
          ? json.data
          : json.blog
            ? json.blog
            : Array.isArray(json.data)
              ? json.data[0]
              : Array.isArray(json.blogs)
                ? json.blogs[0]
                : json;
      if (item && item.slug) {
        if (!item.blog_schema && json.blog_schema) item.blog_schema = json.blog_schema;
        if (!item.breadcrumb_schema && json.breadcrumb_schema) item.breadcrumb_schema = json.breadcrumb_schema;
        if (!item.faq_schema && json.faq_schema) item.faq_schema = json.faq_schema;
        return item;
      }
    }
  } catch {
    // fall through to list lookup
  }

  // Fallback: fetch the full list and match by slug.
  const listRes = await fetch(
    `${API_BASE}/blogs?clientId=${CLIENT_ID}&limit=100`,
    { cache: "no-store" } as RequestInit
  );

  if (!listRes.ok) {
    throw new Error(`Failed to fetch blog: ${listRes.status}`);
  }

  const listJson = await listRes.json();
  const list = Array.isArray(listJson)
    ? listJson
    : Array.isArray(listJson.data)
      ? listJson.data
      : Array.isArray(listJson.blogs)
        ? listJson.blogs
        : [];
  const match = list.find((b: BlogItem) => b.slug === slug);

  if (!match) {
    throw new Error(`Blog not found for slug: ${slug}`);
  }

  const detail = match as BlogDetail;
  detail.blog_schema = detail.blog_schema ?? null;
  detail.breadcrumb_schema = detail.breadcrumb_schema ?? null;
  detail.faq_schema = detail.faq_schema ?? null;
  return detail;
}

export async function fetchBlogCategories(): Promise<{ data: BlogCategory[] }> {
  const res = await fetch(
    `${API_BASE}/blogs/categories?clientId=${CLIENT_ID}`,
    { cache: "no-store" } as RequestInit
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch blog categories: ${res.status}`);
  }

  return res.json();
}

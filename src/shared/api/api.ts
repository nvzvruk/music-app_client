type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

export async function makeRequest<T>(
  url: string,
  method: RequestMethod,
  data?: object
): Promise<T | { error: string }> {
  const requestConfig: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify(data) : undefined,
  }

  const response = await fetch(process.env.API_URL + url, requestConfig)

  if (!response.ok) {
    return { error: 'Some error' }
    // throw new Error(`Request failed with status: ${response.status}`)
  }

  return await response.json()
}

export async function get<T>(url: string): Promise<T> {
  return await makeRequest<T>(url, 'GET')
}

export function post<T>(url: string, data: object): Promise<T> {
  return makeRequest<T>(url, 'POST', data)
}

export function put<T>(url: string, data: object): Promise<T> {
  return makeRequest<T>(url, 'PUT', data)
}

export function del<T>(url: string): Promise<T> {
  return makeRequest<T>(url, 'DELETE')
}

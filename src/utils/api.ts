// Utility functions for API calls with error handling

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
    public response?: any
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_BASE_URL}/api${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    };

    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new ApiError(
        data.message || `HTTP error! status: ${response.status}`,
        response.status,
        data
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    // Network or other errors
    throw new ApiError(
      error instanceof Error ? error.message : 'An unknown error occurred',
      0
    );
  }
}

// Food Prices API
export const foodPricesApi = {
  async getFoodPrices() {
    return apiRequest<any[]>('/harga-pangan');
  },

  async addFoodPrice(data: { name: string; price: string; date: string }) {
    return apiRequest<any>('/harga-pangan', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};

// Poll API
export const pollApi = {
  async getPollResults() {
    return apiRequest<{
      options: any[];
      totalVotes: number;
    }>('/poll');
  },

  async submitVote(selectedOption: string) {
    return apiRequest<{
      options: any[];
      totalVotes: number;
      votedOption: string;
    }>('/poll', {
      method: 'POST',
      body: JSON.stringify({ selectedOption }),
    });
  },

  async resetPoll() {
    return apiRequest<{
      options: any[];
      totalVotes: number;
    }>('/poll', {
      method: 'DELETE',
    });
  },
};

// Generic error handler for components
export function handleApiError(error: unknown): string {
  if (error instanceof ApiError) {
    return error.message;
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return 'An unexpected error occurred';
}

// Loading state helper
export function createLoadingState<T>(initialData?: T) {
  return {
    data: initialData || null,
    loading: false,
    error: null as string | null,
  };
}

// Retry mechanism for failed requests
export async function retryRequest<T>(
  requestFn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000
): Promise<T> {
  let lastError: Error;

  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await requestFn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unknown error');
      
      if (i === maxRetries) {
        throw lastError;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
    }
  }

  throw lastError!;
}

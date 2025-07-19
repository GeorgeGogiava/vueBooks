export interface ErrorType {
  status: number;
  message?: string[];  
  type?: string;       
}

export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: ErrorType;
}


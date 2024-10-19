/**
 * Base interface for API
 */
export interface Base<T> {
    result?: T;
    statusCode?: number;
    message?: string;
  }
  
  /**
   * Interface for API options
   */
  export interface APIRequestOptions {
    baseURL?: string;
    url: string;
    method: string;
    data?: RequestDataType;
    headers?: RequestHeadersType;
  }
  
  /**
   * Base model for API response
   */
  export type BaseResponse<T = unknown> = Base<T> & {
    isSuccess: boolean;
    error?: string;
    code?: string;
  };
  
  /**
   * Response API model
   */
  export type APIResponse<T = unknown, K = unknown> = BaseResponse<T> & K;
  
  /**
   * Request API model
   */
  export type RequestDataType<T = unknown> = T;
  
  /**
   * Request API header model
   */
  export type RequestHeadersType<T = unknown> = T;
  
  /**
   * Define type of toast
   */
  type Type = 'Error' | 'Warning' | 'Info' | 'Success' | 'Default';
  
  /**
   * Toast model
   */
  export type Toast = {
    message: string;
    type?: Type;
    isShow: boolean;
    duration?: number;
  };
  
  export type PaginatorParamsModel = {
    pageNumber: number;
    pageSize: number;
    columns: string[];
    sortType: number; // 1: ASC, 2: DESC
  };
import api from '@/api/axios'
import { Author,AuthorCreateDto,AuthorDeleteResponse, AuthorUpdateDto,AuthorInsertResult,AuthorUpdateResponse} from '@/types/author'
import {ApiResponse} from '@/types/api-response'

// 🔽 Fetch all authors
export const fetchAuthors = async (): Promise<ApiResponse<Author[]>> => {
  try {
    const res = await api.get('/authots-test')
    return res.data
  } catch (error: any) {
    return {
      success: false,
      error: {
        status: error.response?.status || 500,
        message: error.message,
      },
    }
  }
}

// 🔽 Create a new author
export const createAuthor = async (
  data: AuthorCreateDto
): Promise<ApiResponse<Author>> => {
  try {
    const res = await api.post('/authots-test', data)
    return res.data
  } catch (error: any) {
    return {
      success: false,
      error: {
        status: error.response?.status || 500,
        message: error.message,
      },
    }
  }
}

// 🔽 Update an author
export const updateAuthor = async (
  id: number,
  data: AuthorCreateDto
): Promise<ApiResponse<AuthorUpdateResponse>> => {
  try {
    const res = await api.patch(`/authots-test/${id}`, data)
    return res.data
  } catch (error: any) {
    return {
      success: false,
      error: {
        status: error.response?.status || 500,
        message: error.message,
      },
    }
  }
}

// 🔽 Delete an author
export const deleteAuthor = async (
  id: number
): Promise<ApiResponse<AuthorDeleteResponse>> => {
  try {
    const res = await api.delete(`/authots-test/${id}`)
    return res.data
  } catch (error: any) {
    return {
      success: false,
      error: {
        status: error.response?.status || 500,
        message: error.message,
      },
    }
  }
}

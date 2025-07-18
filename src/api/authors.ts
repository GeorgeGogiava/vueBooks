import api from './axios'

export const fetchAuthors = async () => {
  try {
    const response = await api.get('/authots-test')
    return response.data
  } catch (error) {
    console.error('❌ Failed to fetch authors:', error)
    return { success: false, data: [] }
  }
}


export const createAuthor = async (data: { fullname: string }) => {
  try {
    const response = await api.post('/authots-test', data)
    return response.data
  } catch (error) {
    console.error('❌ Failed to create author:', error)
    return { success: false }
  }
}
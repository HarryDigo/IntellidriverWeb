import { api } from '@services'

export const getRanking = async (spots) => {
  try {
    const res = await api.get(`/user/ranking/${spots}`)

    return res.data
  } catch (err) {
    console.error('Error fetching ranking', err)
  }
}
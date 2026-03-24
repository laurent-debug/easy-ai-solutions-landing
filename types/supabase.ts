export type ContactRequest = {
  id?: string
  first_name: string
  email: string
  message: string
  created_at?: string
  status?: 'PENDING' | 'PROCESSED'
}

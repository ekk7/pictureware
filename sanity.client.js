import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '3r5uek5s', 
  dataset: 'pictureware',
  apiVersion: '2025-01-11', // use a recent date
  useCdn: true,
})
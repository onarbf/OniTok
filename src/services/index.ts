import { supabase } from './supabase.ts'

export const getVideos = async (): Promise<any> => {
  const { data, error } = await supabase
    .from('videos')
    .select(`*,user(
      id,
      avatar,
      username
    ))`)

  return [error, data]
}

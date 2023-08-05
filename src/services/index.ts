import { supabase } from './supabase.ts'

export const getVideos = async (): Promise<any> => {
  const { data, error } = await supabase
    .from('videos')
    .select('*,profile_id(*)')

  console.log(data)
  return [error, data]
}

export const createUser = async ({ email, password, passwordRepeated }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })

  return [error, data]
}

export const loginUser = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  return [error, data]
}

export const uploadVideo = async ({ videoFile }) => {
  const filename = self.crypto.randomUUID()
  const { data, error } = await supabase.storage.from('videos').upload(`${filename}.mp4`, videoFile)
  console.log(data, error)
  return [error, data]
}

// export const publishVideo = async ({ videoSrc, description }) => {

// }

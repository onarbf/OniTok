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
  console.log(data, error)
  return [error, data]
}

export const updateUser = async ({ email, profile_id }) => {
  const { data, error } = await supabase.auth.updateUser({
    email,
    profile_id
  })
  console.log(data, error)
  return [error, data]
}

export const createProfile = async ({ user_id, email }) => {
  const username = email.substring(0, email.indexOf('@'))
  const { data, error } = await supabase.from('profiles').insert({
    user_id,
    username,
    avatar: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png'
  })
  console.log(data, error)
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
  const videoSrc = `${import.meta.env.VITE_SUPABASE_URL_STORAGE}/${filename}.mp4`
  return [error, videoSrc]
}

export const publishVideo = async ({ videoSrc, description }) => {
  const session = await supabase.auth.getSession()
  const { data, error } = await supabase.from('videos').insert([
    {
      description,
      songTitle: 'almuerzo mental',
      src: videoSrc,
      albumCover: 'https://p77-sg.tiktokcdn.com/aweme/100x100/tos-alisg-v-2774/oIAzRUManEC2CdJdCseAQaZjfBbTkABEDGg1tn.jpeg',
      user_id: session.data.session?.user.id
    }
  ]).select()
}

interface Video {
  id: number
  username: string
  description: string
  likes: number
  comments: number
  shares: number
  song: string
  albumCover: string
  src: string
  user: any
}

interface User {
  username: string
  avatar: string
}

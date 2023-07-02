type UserDescription = {
  short_self_intro: string,
}

export interface User {
  id: Number,
  name: string,
  icon?: string,
  desc?: UserDescription,
  email?: string,
}
type UserDescription = {
  short_self_intro: string,
}

export type User = {
  name: string,
  icon?: string,
  desc?: UserDescription
}
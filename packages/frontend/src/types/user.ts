type UserDescription = {
  short_self_intro: string,
}

export type User = {
  id: BigInteger,
  name: string,
  icon?: string,
  desc?: UserDescription
}
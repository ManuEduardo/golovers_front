export type Rule =
  | 'required'
  | 'nullable'
  | 'password'
  | 'confirmation'
  | 'email'
  | 'numeric'
  | `min:${number}`
  | `max:${number}`
  | `digits:${number}`
  | `decimal:${number},${number}`

type Rule2 = `${Rule}|${Rule}`
type Rule3 = `${Rule}|${Rule2}`
type Rule4 = `${Rule2}|${Rule2}`

export type Validation = {
  attr: string
  rules: Rule | Rule2 | Rule3 | Rule4
}

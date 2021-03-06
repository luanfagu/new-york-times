type Multimedia = {
  url: string
}

type NewsType = {
  title: string
  abstract: string
  url: string
  multimedia: Multimedia[]
}

export type { NewsType }
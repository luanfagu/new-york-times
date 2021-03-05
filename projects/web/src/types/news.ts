type Multimedia = {
  url: string
}

type NewsType = {
  title: string
  abstract: string
  url: string
  section: string
  multimedia: Multimedia[]
}

export type { NewsType }
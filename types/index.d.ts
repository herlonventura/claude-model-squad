export type Lang = 'pt' | 'en' | 'es'
export type Model = 'haiku' | 'sonnet' | 'opus'

export type Suggestion = {
  model: Model
  reason: string
  current: string
  message: string
  same: boolean
  stronger: boolean
}

export type Help = {
  model: Model
  phase: 'working' | 'done' | 'error'
  start: number
  end: number
}

// A question held before it reaches the model, waiting for the user's choice.
export type Held = {
  text: string
  context: string
  model: Model
}

declare module 'claude-code' {
  interface PluginState {
    'model-squad': {
      suggestion: Suggestion | null
      status: string
      help: Help | null
      held: Held | null
      lang: Lang
    }
  }
}

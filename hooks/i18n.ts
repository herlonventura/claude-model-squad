// UI strings in Portuguese, English and Spanish. The language follows what the user writes.

import type { Lang, Model } from '../types'
export type { Lang, Model }

export const NAMES: Record<Model, string> = { haiku: 'Haiku', sonnet: 'Sonnet', opus: 'Opus' }

type Persona = { title: string; emoji: string; line: string }

export const PERSONAS: Record<Lang, Record<Model, Persona>> = {
  pt: {
    haiku: { title: 'Operário Haiku', emoji: '🔧', line: 'Deixa comigo! Serviço rápido: resolvo num instante e gasto pouco.' },
    sonnet: { title: 'Gerente Sonnet', emoji: '💼', line: 'Serviço do dia a dia: faço bem feito, no prazo e sem estourar o orçamento.' },
    opus: { title: 'Sargento Opus', emoji: '🎖️', line: 'Missão pesada! Para trabalho técnico e difícil, chame quem resolve.' },
  },
  en: {
    haiku: { title: 'Haiku the Worker', emoji: '🔧', line: 'Leave it to me! Quick job: done in a flash and cheap.' },
    sonnet: { title: 'Sonnet the Manager', emoji: '💼', line: 'Everyday work: done right, on time and on budget.' },
    opus: { title: 'Sergeant Opus', emoji: '🎖️', line: 'Heavy mission! For hard technical work, call the one who delivers.' },
  },
  es: {
    haiku: { title: 'Obrero Haiku', emoji: '🔧', line: '¡Déjamelo a mí! Trabajo rápido: lo resuelvo en un instante y barato.' },
    sonnet: { title: 'Gerente Sonnet', emoji: '💼', line: 'Trabajo del día a día: bien hecho, a tiempo y sin pasarse del presupuesto.' },
    opus: { title: 'Sargento Opus', emoji: '🎖️', line: '¡Misión pesada! Para trabajo técnico y difícil, llama a quien resuelve.' },
  },
}

export const T = {
  pt: {
    paneTitle: 'Model Squad',
    waiting: 'A equipe está esperando seu primeiro pedido...',
    evaluating: 'Avaliando a tarefa...',
    evalFailed: 'Não consegui avaliar agora.',
    ideal: (n: string) => `${n} é o ideal para esta tarefa. Pode seguir.`,
    cheaper: (n: string) => `${n} é suficiente para esta tarefa. Troque e economize.`,
    stronger: (n: string) => `Esta tarefa pede o ${n}.`,
    presents: (t: string) => `${t} se apresenta!`,
    why: 'Por quê:',
    alreadyOn: (n: string) => `✅ Você já está com o ${n}. Pode seguir!`,
    inUse: 'Em uso agora:',
    howToSwitch: (n: string) => `🔁 Para trocar: clique no nome do modelo embaixo da caixa de mensagem e escolha ${n}.`,
    held: (t: string) => `${t}: "Essa é comigo!"`,
    heldText: (n: string) => `Segurei sua pergunta. Ela pede o ${n}.`,
    paused: '⏸️ Contagem parada. Troque no seletor de modelo (embaixo da caixa de mensagem) e depois clique em "Enviar de novo".',
    countdown: (s: number, cur: string) => `⏳ Em ${s}s o ${cur} segue sozinho.`,
    askHelp: (n: string) => `🆘 Pedir ajuda ao ${n} (só esta vez)`,
    resend: '📨 Enviar de novo (já troquei)',
    willSwitch: (n: string) => `🔁 Vou mudar para o ${n}`,
    goOn: (cur: string) => `▶️ Seguir com o ${cur}`,
    helperNote: 'O ajudante dá uma segunda opinião, mas não abre arquivos.',
    working: (t: string, s: number) => `${t} está trabalhando na sua pergunta... ${s}s`,
    done: (t: string, s: number) => `✅ ${t} terminou em ${s}s! A resposta está na conversa.`,
    helpFailed: (t: string) => `Não consegui chamar o ${t}. Tente de novo ou mude de modelo.`,
    toastHeld: (s: number) => `Pergunta segurada por ${s}s: escolha no painel ao lado.`,
    drop: (t: string, s: number) => `Pergunta segurada: o ${t} é mais indicado. Escolha no painel ao lado (em ${s}s o modelo atual segue sozinho).`,
    toastDone: (t: string) => `✅ ${t} terminou! A resposta está na conversa.`,
    helpMessage: (q: string, t: string, n: string, a: string) =>
      `${q}\n\n---\nPedi ajuda ao ${t} pelo painel para esta pergunta. A resposta dele:\n\n${a}\n\n---\nUse a resposta do ${n} como base. Não refaça o trabalho: só me diga, em poucas linhas, se concorda e o que acrescentaria.`,
    currentModel: 'modelo atual',
    opened: 'Painel "Model Squad" aberto.',
  },
  en: {
    paneTitle: 'Model Squad',
    waiting: 'The squad is waiting for your first request...',
    evaluating: 'Evaluating the task...',
    evalFailed: "Couldn't evaluate right now.",
    ideal: (n: string) => `${n} is the right fit for this task. Carry on.`,
    cheaper: (n: string) => `${n} is enough for this task. Switch and save.`,
    stronger: (n: string) => `This task calls for ${n}.`,
    presents: (t: string) => `${t} reporting!`,
    why: 'Why:',
    alreadyOn: (n: string) => `✅ You're already on ${n}. Carry on!`,
    inUse: 'In use now:',
    howToSwitch: (n: string) => `🔁 To switch: click the model name below the message box and pick ${n}.`,
    held: (t: string) => `${t}: "This one's mine!"`,
    heldText: (n: string) => `I held your question. It calls for ${n}.`,
    paused: '⏸️ Countdown paused. Switch in the model picker (below the message box), then click "Send again".',
    countdown: (s: number, cur: string) => `⏳ In ${s}s ${cur} carries on by itself.`,
    askHelp: (n: string) => `🆘 Ask ${n} for help (just this once)`,
    resend: "📨 Send again (I've switched)",
    willSwitch: (n: string) => `🔁 I'll switch to ${n}`,
    goOn: (cur: string) => `▶️ Carry on with ${cur}`,
    helperNote: "The helper gives a second opinion, but it doesn't open files.",
    working: (t: string, s: number) => `${t} is working on your question... ${s}s`,
    done: (t: string, s: number) => `✅ ${t} finished in ${s}s! The answer is in the chat.`,
    helpFailed: (t: string) => `Couldn't reach ${t}. Try again or switch models.`,
    toastHeld: (s: number) => `Question held for ${s}s: choose in the side panel.`,
    drop: (t: string, s: number) => `Question held: ${t} is a better fit. Choose in the side panel (in ${s}s the current model carries on).`,
    toastDone: (t: string) => `✅ ${t} finished! The answer is in the chat.`,
    helpMessage: (q: string, t: string, n: string, a: string) =>
      `${q}\n\n---\nI asked ${t} for help from the panel for this question. Their answer:\n\n${a}\n\n---\nUse ${n}'s answer as the base. Don't redo the work: just tell me, in a few lines, whether you agree and what you'd add.`,
    currentModel: 'current model',
    opened: '"Model Squad" panel opened.',
  },
  es: {
    paneTitle: 'Model Squad',
    waiting: 'El equipo está esperando tu primer pedido...',
    evaluating: 'Evaluando la tarea...',
    evalFailed: 'No pude evaluar ahora.',
    ideal: (n: string) => `${n} es el ideal para esta tarea. Sigue adelante.`,
    cheaper: (n: string) => `${n} es suficiente para esta tarea. Cambia y ahorra.`,
    stronger: (n: string) => `Esta tarea pide ${n}.`,
    presents: (t: string) => `¡${t} se presenta!`,
    why: 'Por qué:',
    alreadyOn: (n: string) => `✅ Ya estás con ${n}. ¡Sigue adelante!`,
    inUse: 'En uso ahora:',
    howToSwitch: (n: string) => `🔁 Para cambiar: haz clic en el nombre del modelo debajo del cuadro de mensaje y elige ${n}.`,
    held: (t: string) => `${t}: "¡Esta es mía!"`,
    heldText: (n: string) => `Retuve tu pregunta. Pide ${n}.`,
    paused: '⏸️ Cuenta pausada. Cambia en el selector de modelo (debajo del cuadro de mensaje) y luego haz clic en "Enviar de nuevo".',
    countdown: (s: number, cur: string) => `⏳ En ${s}s ${cur} sigue solo.`,
    askHelp: (n: string) => `🆘 Pedir ayuda a ${n} (solo esta vez)`,
    resend: '📨 Enviar de nuevo (ya cambié)',
    willSwitch: (n: string) => `🔁 Voy a cambiar a ${n}`,
    goOn: (cur: string) => `▶️ Seguir con ${cur}`,
    helperNote: 'El ayudante da una segunda opinión, pero no abre archivos.',
    working: (t: string, s: number) => `${t} está trabajando en tu pregunta... ${s}s`,
    done: (t: string, s: number) => `✅ ¡${t} terminó en ${s}s! La respuesta está en el chat.`,
    helpFailed: (t: string) => `No pude llamar a ${t}. Inténtalo de nuevo o cambia de modelo.`,
    toastHeld: (s: number) => `Pregunta retenida por ${s}s: elige en el panel lateral.`,
    drop: (t: string, s: number) => `Pregunta retenida: ${t} es más indicado. Elige en el panel lateral (en ${s}s el modelo actual sigue solo).`,
    toastDone: (t: string) => `✅ ¡${t} terminó! La respuesta está en el chat.`,
    helpMessage: (q: string, t: string, n: string, a: string) =>
      `${q}\n\n---\nPedí ayuda a ${t} desde el panel para esta pregunta. Su respuesta:\n\n${a}\n\n---\nUsa la respuesta de ${n} como base. No rehagas el trabajo: solo dime, en pocas líneas, si estás de acuerdo y qué añadirías.`,
    currentModel: 'modelo actual',
    opened: 'Panel "Model Squad" abierto.',
  },
} satisfies Record<Lang, Record<string, unknown>>

/** Language guess before the first request: the system locale, else English. */
export function defaultLang(): Lang {
  try {
    const loc = Intl.DateTimeFormat().resolvedOptions().locale.toLowerCase()
    if (loc.startsWith('pt')) return 'pt'
    if (loc.startsWith('es')) return 'es'
  } catch {
    // no Intl: fall through
  }
  return 'en'
}

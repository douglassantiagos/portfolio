import { CircleNotch } from 'phosphor-react'

export function Loading() {
  return (
    <div className="w-[132px] h-5 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
    </div>
  )
}
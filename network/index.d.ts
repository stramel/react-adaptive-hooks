export type EffectiveConnectionType = 'slow-2g' | '2g' | '3g' | '4g'

export function useNetworkStatus(): { unsupported: true } |  {
  effectiveConnectionType: EffectiveConnectionType
}

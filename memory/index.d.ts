export function useMemoryStatus(): { unsupported: true } |  {
  deviceMemory: number,
  totalJSHeapSize: number | null,
  usedJSHeapSize: number | null,
  jsHeapSizeLimit: number | null
}

export const log = (...args: any[]) => {
  const now = new Date().toISOString();
  console.log(`[${now}]:`, ...args)
}
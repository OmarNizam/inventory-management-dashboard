// src/app/composables/stores/navbarStore.ts

export const usePageTitle = () => {
  return useState<string>('pageTitle', () => '')
}

export const useSearchQuery = () => {
  return useState<string>('searchQuery', () => '')
}

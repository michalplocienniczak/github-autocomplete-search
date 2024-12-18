import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query"
import { PropsWithChildren } from "react"

const queryClient = new QueryClient()

const QueryClientProvider = ({ children }: PropsWithChildren) => (
  <ReactQueryClientProvider client={queryClient}>{children}</ReactQueryClientProvider>
)

export default QueryClientProvider

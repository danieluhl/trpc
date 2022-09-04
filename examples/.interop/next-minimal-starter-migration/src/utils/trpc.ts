import { createReactQueryHooks, createReactQueryHooksProxy } from '@trpc/react';
import type { AppRouter } from '../pages/api/trpc/[trpc]';

export const trpc = createReactQueryHooks<AppRouter>();
// => { useQuery: ..., useMutation: ...}

export const proxy = createReactQueryHooksProxy(trpc);
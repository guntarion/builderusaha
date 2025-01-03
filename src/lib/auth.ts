// src\lib\auth.ts
// src/lib/auth.ts

import { getServerSession } from 'next-auth';
import { authConfig } from './auth.config';

export const auth = () => getServerSession(authConfig);

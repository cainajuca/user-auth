import { Request } from 'express';

export * from './authentication';
export * from './authorization';
export * from './refresh-token';
export * from './reset-password';

export interface AuthenticatedRequest extends Request {
    userId?: string;
    username?: string;
    role?: string;
}

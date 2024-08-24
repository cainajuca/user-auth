import jwt from 'jsonwebtoken';

export interface JwtPayload {
  _id: string;
  username: string;
  role: string;
}

export const secretKey = process.env.JWT_SECRET;

export function generateToken(payload: JwtPayload): string {
	return jwt.sign(payload, secretKey, { expiresIn: '7d' });
}

/* eslint-disable prettier/prettier */
import { z } from 'zod';

// Zod schema for User
export const userValidationSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(1, 'Name is required'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters'),
  role: z.enum(['user', 'admin']),
  isBlocked: z.boolean().optional(),
});

export const userSchema = {
  userValidationSchema,
};

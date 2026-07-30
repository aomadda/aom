import { z } from 'zod'

export const DEPARTMENTS = [
  'Operating',
  'Commercial',
  'Engineering',
  'S&T',
  'Personnel',
  'Accounts',
  'Mechanical',
  'Electrical',
  'Others',
] as const

export const PREPARING_POSTS = [
  'AOM',
  'ACM',
  'ADEN',
  'APO',
  'ADSTE',
  'ADEE',
  'AFM',
  'Others',
] as const

export const registerSchema = z.object({
  fullName: z
    .string({ error: 'Full name is required' })
    .trim()
    .min(1, 'Full name is required')
    .min(2, 'Full name must be at least 2 characters')
    .max(80, 'Full name is too long')
    .regex(/^[a-zA-Z\s.'-]+$/, 'Full name can only contain letters and spaces'),
  designation: z
    .string({ error: 'Designation is required' })
    .trim()
    .min(1, 'Designation is required')
    .min(2, 'Designation must be at least 2 characters')
    .max(80, 'Designation is too long'),
  department: z
    .string({ error: 'Department is required' })
    .min(1, 'Department is required')
    .pipe(
      z.enum(DEPARTMENTS, {
        error: 'Please select a valid department',
      }),
    ),
  preparingPost: z
    .string({ error: 'Preparing the Post is required' })
    .min(1, 'Preparing the Post is required')
    .pipe(
      z.enum(PREPARING_POSTS, {
        error: 'Please select a valid post',
      }),
    ),
  division: z
    .string({ error: 'Division is required' })
    .trim()
    .min(1, 'Division is required')
    .min(2, 'Division must be at least 2 characters')
    .max(80, 'Division is too long'),
  zone: z
    .string({ error: 'Zone is required' })
    .trim()
    .min(1, 'Zone is required')
    .min(2, 'Zone must be at least 2 characters')
    .max(80, 'Zone is too long'),
  mobileNumber: z
    .string({ error: 'Mobile number is required' })
    .trim()
    .min(1, 'Mobile number is required')
    .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  email: z
    .string({ error: 'Email is required' })
    .trim()
    .min(1, 'Email is required')
    .toLowerCase()
    .email('Enter a valid email address')
    .max(120, 'Email is too long'),
  password: z
    .string({ error: 'Password is required' })
    .min(1, 'Password is required')
    .min(8, 'Password must be at least 8 characters')
    .max(72, 'Password is too long')
    .regex(/[A-Za-z]/, 'Password must include a letter')
    .regex(/[0-9]/, 'Password must include a number'),
})

export const loginSchema = z.object({
  identifier: z
    .string({ error: 'Email or mobile number is required' })
    .trim()
    .min(1, 'Email or mobile number is required')
    .refine(
      (value) => {
        const normalized = value.toLowerCase()
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)
        const isMobile = /^[6-9]\d{9}$/.test(value)
        return isEmail || isMobile
      },
      {
        message: 'Enter a valid email or 10-digit mobile number',
      },
    ),
  password: z
    .string({ error: 'Password is required' })
    .min(1, 'Password is required')
    .max(72, 'Password is too long'),
})

export const adminLoginSchema = z.object({
  email: z
    .string({ error: 'Email is required' })
    .trim()
    .min(1, 'Email is required')
    .toLowerCase()
    .email('Enter a valid email address'),
  password: z
    .string({ error: 'Password is required' })
    .min(1, 'Password is required')
    .max(72, 'Password is too long'),
})

const passwordSchema = z
  .string({ error: 'Password is required' })
  .min(1, 'Password is required')
  .min(8, 'Password must be at least 8 characters')
  .max(72, 'Password is too long')
  .regex(/[A-Za-z]/, 'Password must include a letter')
  .regex(/[0-9]/, 'Password must include a number')

export const forgotPasswordSchema = z
  .object({
    email: z
      .string({ error: 'Email is required' })
      .trim()
      .min(1, 'Email is required')
      .toLowerCase()
      .email('Enter a valid email address'),
    mobileNumber: z
      .string({ error: 'Mobile number is required' })
      .trim()
      .min(1, 'Mobile number is required')
      .regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
    newPassword: passwordSchema,
    confirmPassword: z
      .string({ error: 'Confirm password is required' })
      .min(1, 'Confirm password is required'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type RegisterInput = z.infer<typeof registerSchema>
export type LoginInput = z.infer<typeof loginSchema>
export type AdminLoginInput = z.infer<typeof adminLoginSchema>
export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>

export function formatZodErrors(error: z.ZodError): Record<string, string> {
  const fieldErrors: Record<string, string> = {}
  for (const issue of error.issues) {
    const key = issue.path[0]
    if (typeof key === 'string' && !fieldErrors[key]) {
      fieldErrors[key] = issue.message
    }
  }
  return fieldErrors
}

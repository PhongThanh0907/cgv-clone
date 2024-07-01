import * as z from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email không hợp lệ'),
  password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
});

export const registerSchema = z.object({
    email: z.string().email('Email không hợp lệ'),
    password: z.string().min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
    name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
    phone: z.string().min(10, 'Số điện thoại phải có ít nhất 10 ký tự'),
  });

export type AuthFormInputs = z.infer<typeof registerSchema>;
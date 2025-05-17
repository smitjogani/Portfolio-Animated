import { z } from "zod";

export const QuestionSchema = z.object({
  title: z
    .string()
    .trim()
    .min(5, "Title must be at least 5 characters long")
    .max(130, "Title cannot exceed 130 characters"),
  email: z.string().trim().email(),
  phone: z
    .string()
    .min(8, "Phone number is too short")
    .max(15, "Phone number is too long")
    .regex(/^\+?[0-9\s\-()]*$/, "Invalid phone number format"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(200, "Message cannot exceed 200 characters"),
});

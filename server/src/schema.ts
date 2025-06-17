
import { z } from 'zod';

// Todo schema with proper field handling
export const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  created_at: z.coerce.date() // Automatically converts string timestamps to Date objects
});

export type Todo = z.infer<typeof todoSchema>;

// Input schema for creating todos
export const createTodoInputSchema = z.object({
  title: z.string().min(1, 'Title cannot be empty') // Validate that title is not empty
});

export type CreateTodoInput = z.infer<typeof createTodoInputSchema>;

// Input schema for updating todo completion status
export const updateTodoCompletionInputSchema = z.object({
  id: z.number(),
  completed: z.boolean()
});

export type UpdateTodoCompletionInput = z.infer<typeof updateTodoCompletionInputSchema>;

// Input schema for deleting todos
export const deleteTodoInputSchema = z.object({
  id: z.number()
});

export type DeleteTodoInput = z.infer<typeof deleteTodoInputSchema>;

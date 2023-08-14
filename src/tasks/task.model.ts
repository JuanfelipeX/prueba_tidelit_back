// src/tasks/task.model.ts
export interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
}

export interface CreateTaskDto {
  title: string;
  description: string;
}

export interface UpdateTaskDto {
  title?: string;
  description?: string;
  done?: boolean;
}

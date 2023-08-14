// src/tasks/tasks.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Task, CreateTaskDto, UpdateTaskDto } from './task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Task {
    const task = this.tasks.find(task => task.id === id);

    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    return task;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const newTask: Task = {
      id: this.tasks.length + 1,
      title: createTaskDto.title,
      description: createTaskDto.description,
      done: false,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: number, updateTaskDto: UpdateTaskDto): Task {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    this.tasks[taskIndex] = {
      ...this.tasks[taskIndex],
      ...updateTaskDto,
    };

    return this.tasks[taskIndex];
  }

  deleteTask(id: number): void {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if (taskIndex === -1) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }

    this.tasks.splice(taskIndex, 1);
  }
}

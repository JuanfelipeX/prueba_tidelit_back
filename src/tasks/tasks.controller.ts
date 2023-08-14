// src/tasks/tasks.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateTaskDto, UpdateTaskDto } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getTasks() {
    return this.tasksService.getAllTasks();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getTaskById(@Param('id') id: number) {
    return this.tasksService.getTaskById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  updateTask(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    this.tasksService.deleteTask(id);
  }
}

/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { Task } from './interfaces/task';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getTasks(): Promise<Task[]> {
    return this.taskService.getTasks()
  }

  @Get(':id')
  getTask(@Param('id') id: string): Promise<Task> {
    return this.taskService.getTask(id)
  }

  @Post()
  postTastk(@Body() task: CreateTaskDto): Promise<string> {
    return this.taskService.createTask(task);
  }

  @Delete(':id')
  deleteTastk(@Param('id') id): string {
    return 'task deleted number: ' + id;
  }

  @Put(':id')
  putTastk(@Body() Task: CreateTaskDto, @Param('id') id): string {
    console.log(Task);
    console.log(id)
    return 'task modifyed';
  }
}

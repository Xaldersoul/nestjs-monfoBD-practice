import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './interfaces/task';
import { Model } from 'mongoose';
import { CreateTaskDto } from './dto/createTask.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel('Task') private TaskModel: Model<Task>) {}

  async getTasks() {
    return await this.TaskModel.find();
  }

  async getTask(id: string) {
    return await this.TaskModel.findById(id);
  }

  async createTask(task: CreateTaskDto) {
    const newTask = new this.TaskModel(task);
    await newTask.save();
    return 'task Created!';
  }
}

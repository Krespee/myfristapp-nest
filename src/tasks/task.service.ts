import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
  name: string;
  age: number;
}

@Injectable()
export class TaskService {
  private tasks = [];

  getTasks() {
    return this.tasks;
  }
  getTask(id: number) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
        return new NotFoundException(`Task with id ${id} not found`)
    }
        return taskFound
  }

  createTask(task: CreateTaskDto) {
    console.log(this.tasks);
    this.tasks.push({
      ...task,
      id: this.tasks.length + 1,
    });
    return task;
  }
  updateTask(task: UpdateTaskDto) {
    console.log(task)
    return ['1', '2', '3'];
  }
  deleteTask() {
    return ['1', '2', '3'];
  }
  updateStatusTask() {
    return ['1', '2', '3'];
  }
}

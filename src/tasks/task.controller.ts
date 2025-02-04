import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/task')
@ApiTags('task')
export class TaskController {
  taskService: TaskService;
  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }

  @Get()
  @ApiOperation({ summary: 'Get all tasks' })
  @ApiResponse({ status: 200, description: 'Return all tasks.' })
  @ApiResponse({ status: 403, description: 'Forbiden' })
  getAllTask(@Query() query: any) {
    return this.taskService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.taskService.getTask(parseInt(id));
  }

  @Post()
  @ApiOperation({ summary: 'Create a task' })
  createTask(@Body() task: CreateTaskDto) {
    return this.taskService.createTask(task);
  }

  @Put()
  updateTask(@Body() task: UpdateTaskDto) {
    return this.taskService.updateTask(task);
  }

  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }

  @Patch()
  updateTaskStatus() {
    return this.taskService.updateStatusTask();
  }
}

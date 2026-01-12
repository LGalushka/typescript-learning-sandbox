import { TaskStatus, TaskPriority, UserRole } from "./enums.js";

/**
 * Обновленный интерфейс User с ролью
 */

interface BaseEntity {
  id: number;
  createdAt: Date;    // Когда создан
  updatedAt: Date;    // Когда обновлен
}

interface User extends BaseEntity {
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;     //Теперь используем enum вместо string
}

/**
 * Обновленные интерфейс Task со статусом
 */
interface Task extends BaseEntity {
  title: string;
  description: string;
  userId: number;
  status: TaskStatus;     //Enum вместо boolean completed
  priority: TaskPriority;   //Enum вместо number
}

export type { User, Task}
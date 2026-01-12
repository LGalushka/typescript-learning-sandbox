import type { Task, User } from "./types.js";
import { TaskStatus, TaskPriority, UserRole } from "./enums.js";
import { TaskMeneger } from "./task-manager.js";

// ==== СОЗДАНИЕ ПОЛЬЗОВАТЕЛЕЙ С РАЗНЫМИ РОЛЯМИ ====

const admin: User = {
  id: 1,
  name: "Админ Админов",
  email: "admin@company.com",
  role: UserRole.Admin,
  createdAt: new Date(),
  updatedAt: new Date()
};

const developer: User = {
  id: 2,
  name: "Иван Разработчиков",
  email: "ivan@company.com",
  role: UserRole.Developer,
  createdAt: new Date(),
  updatedAt: new Date()
};

const viewer: User = {
  id: 3,
  name: "Петр Наблюдателев",
  email: "petr@company.com",
  role: UserRole.Viewer,
  createdAt: new Date(),
  updatedAt: new Date(),
}

// ==== СОЗДАНИЕ ЗАДАЧ ====
const tasks: Task[] = [
  {
    id: 1,
    title: "Исправить критический баг",
    description: "Приложение падает при входе",
    userId:developer.id,
    status: TaskStatus.InProgress,
    priority: TaskPriority.Critical,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 2,
    title: "Добавить новую фичу",
    description: "Реализовать экспорт в PDF",
    userId: developer.id,
    status: TaskStatus.Todo,
    priority: TaskPriority.Medium,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 3,
    title: "Обновить документацию",
    description: "Описать новое API",
    userId: developer.id,
    status: TaskStatus.Done,
    priority:TaskPriority.Low,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// ==== ИЗПОЛЬЗОВАНИЕ TasrManager ==== 

const manager = new TaskMeneger();

console.log("=== Фильтрация задач ==== \n");

//Получить задачи в работе
const inProgressTasks = manager.filterByStatus(tasks, TaskStatus.InProgress);
console.log(`Задач в работе: ${inProgressTasks.length}`);
inProgressTasks.forEach(task => {
  console.log(`  - ${task.title}`);  
});

//Получить высокоприоритетные задачи
const urgentTasks = manager.getHighPriorityTasks(tasks);
console.log(`\nВажных задач: ${urgentTasks.length}`);
urgentTasks.forEach(task => {
  const emoji = manager.getPriorityEmoji(task.priority);
  console.log(`  ${emoji} ${task.title}`);  
});

console.log("\n===== ИЗМЕНЕНИЕ СТАТУСОВ =====\n");

//Разработчик переводит задачу в Review
const task2 = tasks[1]!;
const result2 = manager.changeStatus(task2, TaskStatus.InProgress, viewer);
if(typeof result2 === 'string') {
  console.log(`❌${result2}`);  
}else {
  console.log(`✅ Задача обновлена`);  
}





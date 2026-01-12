/**
 * Перечисление статусов задачи
 * Задача проходит через эти состояния в процессе выполнения
 */
enum TaskStatus {
  Todo = "TODO",                //Задача в очереди
  InProgress = "IN_PROGRESS",   //Задача в работе
  Review = "REVIEW",            //Задача на проверке
  Done = "DONE",                //Задача завершена
  Cancelled = "CANCELLED"       //Задача отменена
}

/**
 * Перечисление приоритетов задачи
 */
enum TaskPriority {
  Low = 1,
  Medium = 2,
  High = 3,
  Critical = 4
}

/**
 * Перечисление ролей пользователей
 */
enum UserRole {
  Admin = "ADMIN",            // Администратор (полный доступ)
  Manager = "MANAGER",        //Менеджер (управление проектами)
  Developer = "DEVELOPER",    // Разработчик (работа с задачами
  Viewer = "VIEWER"           //Наблюдатель (только чтение)
}

export { TaskStatus, TaskPriority, UserRole } 



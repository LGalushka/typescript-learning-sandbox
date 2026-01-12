import type { Task, User} from './types.js';
import { TaskStatus, TaskPriority, UserRole } from './enums.js';

/**
 * Класс для управления задачами
 */

class TaskMeneger {
  /**
   * Изменить статус задачи
   * @param task - Задача для изменения
   * @param newStatus - Новый статус
   * @param user - Пользователь, выполняющий действие
   * @returns Обновленная задача или ошибка
   */

  changeStatus(
    task: Task,
    newStatus: TaskStatus,
    user: User,
  ): Task | string {
    
    //Проверка прав доступа
    if(user.role === UserRole.Viewer) {
      return "Ошибка: Наблюдатели не могут изменять задачи";
    }

    //Бизнес-правило: нельзя вернуть задачу из Done и Todo
    if(task.status === TaskStatus.Done && newStatus === TaskStatus.Todo) {
      return "Ошибка: Нельзя вернуть завершенную задачу в очередь";
    }

    //Бизнес-правило: только Admin и Manager могут отменять задачи
    if(
      newStatus === TaskStatus.Cancelled &&
      user.role !== UserRole.Admin &&
      user.role !== UserRole.Manager
    ) {
      return "Ошибка: Недостаточно прав для отмены задачи";
    }

    //Все хорошо - обновляем статус
    return {
      ...task,
      status: newStatus,
      updatedAt: new Date()
    };
  }
  /**
   * Получить задачи по статусу
   * @param tasks - Массив всех задач
   * @param status - Фильтр по статусу
   */
  filterByStatus(tasks: Task[], status: TaskStatus): Task[] {
    return tasks.filter(task=> task.status === status);
  }

  /**
   * Получить задачи высокого приоритета
   * @param tasks - Массив всех задач
   */
  getHighPriorityTasks(tasks: Task[]): Task[] {
    return tasks.filter(
      task=>
        task.priority === TaskPriority.High ||
      task.priority === TaskPriority.Critical
    );
  }

  /**
   * Получить Человекочитаемое название статуса
   * @param status - Статус задачи
   */
  getStatusLabel(status: TaskStatus): string {
    switch(status) {
      case TaskStatus.Todo:
        return "К выполнению";
      case TaskStatus.InProgress:
        return "В работе";
      case TaskStatus.Review:
        return "На проверке";
      case TaskStatus.Done:
        return "Завершено";
      case TaskStatus.Cancelled:
        return "Отменено";
      default:
        //TypeScript проверит, что мы обработали все случаи!
        const exhaustiveCheck: never = status;
        return exhaustiveCheck;
    }
  }
  /***
   * Получить эмодзи для приоритета
   * @param priority - Приоритет задачи
   */
  getPriorityEmoji(priority: TaskPriority): string {
    switch(priority) {
      case TaskPriority.Low:
        return "🟢";
      case TaskPriority.Medium:
        return "🟡";
      case TaskPriority.High:
        return "🟠";
      case TaskPriority.Critical:
        return "🔴";
      default:
        const exhaustiveCheck: never = priority;
        return exhaustiveCheck;
    }
  }
}

export { TaskMeneger};
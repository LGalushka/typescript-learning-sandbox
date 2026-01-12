// Type может описывать простые типы
type ID = number | string; //ID может быть числои ИЛИ строкой

//Type может описывать объекты (как interface)
type User = {
  if: ID;
  name: string;
  email: string;
}

// Type может описывать объединения
type Status = "active" | "inactive" | "pending";

//Type может описывать функции
type Logger = (messdge: string) => void;

//Базовый интерфейс - общие свойства для всех пользователей
interface BasePerson {
  id: number;
  name: string;
  email: string;
}

//Интерфейс студента РАСШИРЯЕТ базовый
//Студент наследует id, name, email И добавляет свои поля
interface Student extends BasePerson {
  studentId: string;  //Номер студенческого билета
  course: number;     //Курс обучения
  university: string;   //Название университета
}

//Интерфейс преподавалетя ТОЖЕ  расширяет базовый
interface Teacher extends BasePerson {
  employeeId: string;     // ID сотрудника
  department: string;     //Кафедра
  subjects: string[];     //Предметы которые ведет
}

// Использование
const student: Student = {
  id: 1,
  name: "Мария",
  email: "maria@uni.com",
  studentId: "STU-2024-001",
  course: 2,
  university: "МГУ"
}

const teacher: Teacher = {
  id: 2,
  name: "Петр Иванивич",
  email: "pet@uni.com",
  employeeId: "EMP-123",
  department: "Информатика",
  subjects: ["TypeScriot", "JavaScript", "React"]
}

// Можно расширять несколько интерфейсов одновременно
interface Timestamps {
  createAt: Date;
  updateAt: Date;
}

interface Auditable {
  createdBy: string;
  modifiedBy: string;
}

//Интерфейс User наследует ОБА интерфейса
interface IUser extends Timestamps, Auditable {
  id: number;
  name: string
}

// ✅ ХОРОШО: все возможные значения определены
enum UserStatus {
  Active,
  Inactive,
  Pending,
  Blocked
}

function setStatus(status: UserStatus) {
  if(status === UserStatus.Active) {
    console.log("Пользователь активен");
  }
}

setStatus(UserStatus.Active)
setStatus(UserStatus.Blocked)

//Числовые enum (по умолчанию)
enum Direction {
  Up,
  Down,
  Left,
  Right
}

//можно задавать начальное значение
enum EStatus {
  Draft = 1,
  Published,
  Archived
}

//Можно задать все значения вручную
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500
}

//Строковый emun (более читаемый)
enum LogLevel {
  Error = "ERROR",
  Warning = "WARNING",
  Info = "INFO",
  Debug = "DEBUG"
}

function log(level: LogLevel, message: string) {
  console.log(`[${level}] ${message}`)
}

log(LogLevel.Error, "Произошла ошибка!")

// ✅ ХОРОШО: типы вынесены, код читаемый
type UserRole = "admin" | "user" | "guest"

type RUser = {
  id: number;
  name: string;
  email: string;
  role: UserRole;
};

type ProcessResult = {
  succedd: boolean;
  message: string;
}

//Объединение примитивов
type IDs = string | number;

//Объединение литералов (похоже на enum, но проще)
type Theme = "light" | "dark" | "auto";

// Сложные структуры
type ApiResponse<T> = {
  data: T;
  status: number;
  message:string;
}

//Функциональные типы
type Validator = (value: string) => boolean;
type EventHandler = (event: Event) => void;

// Кортежи (tuple) - массив фиксированной длины с типами
type Coordinates = [number, number];  // [широта, долгота]
type RGB = [number, number, number]; // [ red, green, blue]

//называть типы понятно
// Плохо
type T = string;
type Date = any;

// ХОРОШО
type UserId = string;
type UserProfile = {
  name: string;
  avatar: string;
}

//Документируйте сложные типы:
/**
 * Представляет пользователя системы
 * @property id - Уникальный идентификатор
 * @property name - Полное имя пользователя
 * @property role - Роль в системе (влият на права доступа)
 */

interface UserR {
  id: number;
  name: string;
  role: UserRole;
}

// ==== БАЗОВЫЕ ИНТЕРФЕЙСЫ =====
/**
 * Базовый интерфейс для всех сущностей с ID
 * Любой объект в нашей системе имеет уникальный идектификатор
 */

interface BaseEntity {
  id: number;
  createdAt: Date;    // Когда создан
  updatedAt: Date;    // Когда обновлен
}

/**
 * Интерфейс пользователя
 * Описывает структуру данных о пользователе системы
 */

interface UserNow extends BaseEntity {
  name: string;   // Имя пользователя
  email: string;  // Email (уникальный)
  avatar?: string;  //URL аватар (необязательно)
}

/**
 * Интерфейс задачи
 * Описывает структуру задачи в системе
 */
interface Task extends BaseEntity {
  title: string;    // Название задачи
  description: string;    //Описание задачи
  userId: number;     //ID пользователя-владельца
  completed: boolean;   //Завершена ли задача
}

//export {BaseEntity, UserNow, Task};

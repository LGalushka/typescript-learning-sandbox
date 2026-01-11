type User = {
  id: number;
  name: string;
  email?: string; // Опциональное полу, может отсутсвовать
};

const user1: User = { id: 1, name: "Liliya"} // Ошибки нет хотя email отсутствует
const user2: User = { id: 2, name: "Ivan", email: "iven@text.com"};

const skills: string[] = ["JavaScript", "TypeScript", "React"];
const luckyNumbers: Array<number> = [7, 10, 22];

// Union: ID может быть либо числом, либо строкой
let userId: number | string = 101;
userId = "ID-550";

//Literal + Union: Статус заказа может быть ТОЛЬКО одним из этих трех слов
type Status = "loading" | "success" | "error";

let currentStatus: Status = "loading";
//currentStatus = "finished"; // Ошибка! TS скажет, что такого статуса не существует

type Laptop = {
  brand: string;
  ram: number;
  isTouchscreen?: boolean;
  ports: string[];
  os: "windows" | "macos" | "linux";
}

const product: Laptop = { brand: "MaxPromi", ram: 12547, isTouchscreen: true, ports: ["usd", "typescr"], os: "windows"}
console.log(product)

const shopInventory: Laptop[] = [
  { brand: "Apple", ram: 16, ports: ["usb-c"], os: "macos"},
  { brand: "Dell", ram: 32, isTouchscreen: true, ports: ["ndmi", "usb"], os: "windows"}
]

type Product = {
  title: string;
  price: number;
}

type Discount = {
  discountPercent: number;
};

//Склеиваем их!
type SaleProduct = Product & Discount;

const blackFridayDeal: SaleProduct = {
  title: "Клавиатура",
  price: 5000,
  discountPercent: 20 // Обязательно должны быть поля из ОБОИХ  типов
};


type UserNew = {
  id: number;
  login: string;
};

type Admin = UserNew & {
  role: "superadmin" | "moderator";   // Используем Literal + Intersection
}

const boss: Admin = {
  id: 0,
  login: "BigBoss",
  role: "superadmin"
}

type Service = {
  name: string;
  price: number;
}

type Insurance =  {
  isFull: boolean;
}

type SaleProducts = Service & Insurance

const premiumService: SaleProducts = {
  name: "Доставка",
  price: 5000,
  isFull: true
}

const servicesList: (Service | SaleProducts)[] =[
  { name: "Мытье окон", price: 1000},
  { name: "Поднятие век", price: 4000, isFull: false}
] 

console.log(premiumService)
console.log(servicesList)


// 1. Типизируем аргументы и возвращаемое значение (после двоеточия)
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

// 2. Стрелочные функции
const logMessage = (message: string): void => {
  console.log("Log:", message)
};

function getServiceInfo(item: Service): string {
  return `Услуга: ${item.name}, цена: ${item.price} руб.`;
}

servicesList.forEach(item => {
  console.log(getServiceInfo(item));
})

servicesList.map(item=> {
  console.log(getServiceInfo(item))
})

function applyDiscount(price: number, discount?: number): number {
    if(discount) {
    return price - (price * discount / 100);
    }else {
      return price;
    }
}

console.log(applyDiscount(45))
console.log(applyDiscount(45, 10))
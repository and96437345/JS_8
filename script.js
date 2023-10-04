// Задание 1
// Реализовать класс, описывающий простой маркер. В классе
// должны быть следующие компоненты:
// ■ поле, которое хранит цвет маркера;
// ■ поле, которое хранит количество чернил в маркере (в процентах);
// ■ метод для печати (метод принимает строку и выводит
// текст соответствующим цветом; текст выводится до тех
// пор, пока в маркере есть чернила; один не пробельный
// символ – это 0,5% чернил в маркере).
// Реализовать класс, описывающий заправляющийся маркер,
// унаследовав его от простого маркера и добавив метод для заправки
// маркера.
// Продемонстрировать работу написанных методов.

// class Marker {
//     constructor(color) {
//       this.color = color;
//       this.ink = 1;
//     }  
//     print(stringToPrint) {
//         let quantitySymbol = stringToPrint.length;
//         let quantitySpaces = stringToPrint.split(' ').length - 1;
//         let inkNeed = (quantitySymbol-quantitySpaces)*.005;
//         if (this.ink >= inkNeed) {
//             document.write(`<p style="color: ${this.color};">${stringToPrint}</p>`);
//             this.ink -=inkNeed;
//         } else {
//             document.write('недостаточно чернил! ');
//         }
//     }  
// }
// let redMarker = new Marker("red");
// redMarker.print('Тест печати красного маркера');
// redMarker.print('Тест печати красного маркера');
// redMarker.print('Тест печати красного маркера');
// redMarker.print('Тест печати красного маркера');
// redMarker.print('Тест печати красного маркера');
// redMarker.print('Тест печати красного маркера');
// redMarker.print('Тест печати красного маркера');
// redMarker.print('Тест печати красного маркера');
// redMarker.print('Тест печати красного маркера');


// class RefillMarker extends Marker {
//     refill() {
//         this.ink = 1;
//         document.write('Маркер заправлен ')
//     }
// }
// let greenMarker = new RefillMarker('green');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.refill();
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');
// greenMarker.print('Тест печати зеленого маркера');



// Задание 2
// Реализуйте класс ExtendedDate, унаследовав его от стандартного класса Date и добавив следующие возможности:
// ■ метод для вывода даты (числа и месяца) текстом;
// ■ метод для проверки – это прошедшая дата или будущая
// (если прошедшая, то метод возвращает false; если будущая или текущая, то true);
// ■ метод для проверки – високосный год или нет;
// ■ метод, возвращающий следующую дату.
// Создайте объект класса ExtendedDate и выведите на экран
// результаты работы новых методов.

// class ExtendedDate extends Date{
//     dateToText() {
//         console.log(`${this.getDate()}.${this.getMonth()+1}.${this.getFullYear()}`);
//     }
//     verifyDate(day, month, year) {
//         let date1 = new Date(year,(month-1),day);
//         let dateNow = new Date();
//         if (date1 >= dateNow) {
//             return true;
//         } else return false;
//     }
//     verifyLeapYear(year) {
//         if ((year % 400) == 0 || (year % 4) == 0 && (year % 100) != 0) {
//             return true;
//         } else return false;
//     }
//     nextDate(day, month, year) {
//         let nextDate = new Date(year,(month-1),day);
//         nextDate.setDate(nextDate.getDate()+1);
//         return (`${nextDate.getDate()}.${nextDate.getMonth()+1}.${nextDate.getFullYear()}`);
//     }
// }

// let extendedDate1 = new ExtendedDate();
// extendedDate1.dateToText();

// console.log(extendedDate1.verifyDate(4,10,2023));
// console.log(extendedDate1.verifyLeapYear(2020));
// console.log(extendedDate1.nextDate(31,12,2022));



// Задание 3
// Реализовать класс Employee, описывающий работника, и создать массив работников банка.
// Реализовать класс EmpTable для генерации html кода таблицы
// со списком работников банка. Массив работников необходимо
// передавать через конструктор, а получать html код с помощью
// метода getHtml().
// Создать объект класса EmpTable и вывести на экран результат
// работы метода getHtml().











// Задание 4
// Реализовать класс StyledEmpTable, который наследуется от
// класса EmpTable. Добавить метод getStyles(), который возвращает
// строку со стилями для таблицы в тегах style. Переопределить
// метод getHtml(), который добавляет стили к тому, что возвращает
// метод getHtml() из родительского класса.
// Создать объект класса StyledEmpTable и вывести на экран
// результат работы метода getHtml().
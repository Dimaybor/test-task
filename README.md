# Тестове завдання

## Ініціалізація проекту

* Для того, щоб запустити проект, та встановити всі залежності, команда :

```
$ npm install

```

### Фото-мініатюри

У цій версії виконання тестового завдання, мініатюри фото були виконані за допомогою css. 
Для того щоб отримати форму прямокутник та трикутник, вихідне фото обрізалось до відповідних форм, за допомогою властивостей css.
Найважче було отримати зображення у формі трикутника. Спочатку пробував зробити прозорий трикутник за допомогою _border_ , та спозиціонувати по центрі елементу, щоб отримати прозорий виріз у формі трикутника. Але оскільки background всієї сторінки градієнтний, то не вдалось отримати адекватного результату. Тому вирішив форму трикутника отрмати за допомогою _clip-path_ .

### Про виконання

* Для виконання роботи, використовувався css препроцесор Stylus. Для роботи з html використовувався html препроцесор Pug.
* Всі зображення мініфіковані за допомогою плагіна gulp-image.
* Всі зображення виконані на сторінці з використанням responsive images.
* Css файли мініфіковані за допомогою плагіна gulp-cssnano.
* Html файл валідний. Перевірялось на : https://validator.w3.org
* При написанні використовувались стандарти найменування селекторів по BEM технології, та code guide @mdo для написання css.
* Верстка адаптивна. 








$(document).ready(function () {
    let city = ["Москва", "Санкт-Петербург", "Новосибирск", "Екатеринбург", "Нижний Новгород", "Казань", "Челябинск", "Омск", "Самара", "Ростов-на-Дону", "Уфа", "Красноярск", "Пермь", "Воронеж", "Волгоград", "Краснодар", "Саратов", "Тюмень", "Ижевск", "Барнаул", "Ульяновск", "Иркутск", "Хабаровск", "Ярославль", "Владивосток", "Томск", "Оренбург", "Новокузнецк", "Рязань", "Пенза", "Липецк", "Киров", "Тула", "Калининград", "Курск", "Севастополь", "Ставрополь", "Сочи", "Тверь", "Симферополь", "Калуга", "Смоленск", "Брянск", "Ялта"];

    let name = ["Александр", "Алексей", "Андрей", "Артем", "Виктор", "Даниил", "Дмитрий", "Егор", "Илья", "Кирилл", "Максим", "Марк", "Михаил", "Роман", "Степан", "Тимофей", " Ярослав", "Артем", "Артур", "Дамир", "Данил", "Егор", "Илья", "Роман", "Александра", "Алиса", "Анастасия", "Анна", "Арина", "Валерия", "Варвара", "Вероника", "Виктория", "Дарья", "Ева", "Екатерина", "Елизавета", "Кира", "Маргарита", "Мария", "Полина", "София", "Таисия", "Ульяна"];

    function yved() {
        document.querySelectorAll('.yvedt')[0].innerHTML = name[Math.floor(Math.random() * name.length)] + ", г." + city[Math.floor(Math.random() * city.length)] + ", сделал(а) заказ на сумму: 1790р";
        document.querySelectorAll('.online_1')[0].innerHTML = Math.floor(11 + Math.random() * (19 + 1 - 11));
        $('.yved').fadeIn(500).delay(6000).fadeOut(500);
    }
    setInterval(function () {
        yved();
    }, Math.floor(36 + Math.random() * (48 + 1 - 36)) * 1000);
});

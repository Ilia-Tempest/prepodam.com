$( function() {
  var availableTags = [
  "Биология",
  "Анатомия",
  "Биоинформатика",
  "Биология на английском языке",
  "Биотехнология",
  "Биофизика",
  "Ботаника",
  "ВНО по биологии",
  "ВОУД по биологии",
  "ВПР по биологии",
  "Генетика",
  "Гистология",
  "ЕГЭ по биологии",
  "Зоология",
  "Микробиология",
  "Молекулярная биология",
  "Общая биология",
  "ОГЭ по биологии",
  "Олимпиады по биологии",
  "Почвоведение",
  "Природоведение",
  "Физиология",
  
 " Бухгалтерский учет",
 " 1",
 " Делопроизводство",
 "Документооборот",
 " МСФ",
 " Налоговый учёт",
 " Упрощённая система налогообложения",
 " Управленческий учёт",
  "Финансовый учёт",
  
"  Высшая математика",
 " Аналитическая геометрия",
"  Векторное исчисление",
 " Вычислительная математика",
 " Дискретная математика",
 " Дифференциальная геометриия",
 " Дифференциальные уравнениия",
 " Интегральные уравнения",
 " Исследование операции",
 " Комплексный анализ",
 " Линейная алгебра",
"  Математическая логика",
 " Математический анализ",
"  Математическое программирование",
 " Статистика",
"  Тензорное исчисление",
"  Теория вероятностей",
 " Теория рядов",
 " Теория чисел",
 " Топология",
 " Уравнения математической физики",
 " Финансовая математики",
 " Функциональный анализ",
  
  "География",
 " ВПР по географии",
 " Геолог",
 " ЕГЭ по географии",
 " Краеведение",
 " Навигация",
 " ОГЭ по географии",
 " Олимпиады по географии",
 " Страноведение",
 " Физическая география",
 " Экономическая география",
  
  "Дизайн",
  "Веб-дизайн",
  "3D-моделирование",
 " Графический дизайн",
 " Дизайн полиграфии",
 " Дизайн упаковки",
 " Иллюстраторы",
 " Разработка фирменного стиля",
  
  "ИЗО",
 " Академический рисунок",
 " Аэрография",
 " Граффити",
 " Живопись",
 " Иллюстрация",
 " Каллиграфия",
 " Коллаж",
 " Композиция (ИЗО)",
 " Леттеринг",
 " Мультипликация",
 " Основы перспективы",
 " Пластическая анатомия",
 " Подготовка в художественное училище",
 " Подготовка в художественную школу",
 " Подготовка в художественный вуз",
 " Подготовка к художественным конкурсам, выставкам",
 " Правополушарное рисование",
 " Рисование карандашом",
 " Скетчинг",
 " Скульптура",
 " Флористика",
 " Художественная графика",
 " Художественные экзамены",
 " Цветоведение",
  
  "Инженерия",
 " Авиамоделирование",
  "Газодинамика",
  "Гидравлика",
  "Метрология",
  "Прикладная механика",
  "Радиотехника",
  "Сметное дело",
  "Сопротивление материалов",
  "Строительная механика",
  "Строительные конструкции",
  "ТАУ",
  "Теория механизмов и машин",
  "Теплоэнергетика",
  "Техническая механика",
  "ТРИЗ",
 " Электроника",
  "Электротехника",
  
  "Иностранные языки",
"  Английский язык",
 " Белорусский язык",
"  Украинский язык",
  "Испанский язык",
 " Итальянский язык",
  "Китайский язык",
"  Немецкий язык",
  "Португальский язык",
 " Французский язык",
 " Японский язык",
  
  "Интернет-маркетинг" ,
 " CRM-маркетинг",
  "Email-маркетинг",
 " SMM-продвижение",
 " Продвижение во Вконтакте",
 " Продвижение в Facebook",
 " Продвижение в Instagram",
"  Контекстная реклама в Google Adwords",
 " Контекстная реклама в Яндекс.Директ",
 " Контент-маркетинг",
 " Лидогенерация",
 " Настройка Google Analytics",
 " Настройка Яндекс.Метрики",
 " Настройка Яндекс.Маркета",
 " Ремаркетинг",
 " Таргетированная реклама",
 " Тизерная реклама",
  
"  Информатика",
 " Microsoft Office Access",
  "Microsoft Office Excel",
 " Microsoft Office Outlook",
 " Microsoft Office PowerPoint",
 " Microsoft Office Project",
 " Microsoft Office Word",
 " ВНО по информатике",
 " ВОУД по информатике",
 " ДПА по информатике",
 " ЕГЭ по информатике",
 " ОГЭ по информатике",
 " Олимпиады по информатике",
  "Операционные системы",
 " ЕНТ по информатике",
 " Информационная безопасность",
  "Информационные технологии",
  "Компьютерная вёрстка",
  "Microsoft SQL Server",
  "MySQL",
  
"  История",
"  Археология",
"  ВПР по истории",
 " Всемирная история",
 " ЕГЭ по истории",
 " История Беларуси",
 " История искусств",
 " История Казахстана",
 " История религии",
" История России",
 " История Украины",
 " Источниковедение",
 " Музееведение",
 " МХК",
 " ОГЭ по истории",
 " Олимпиады по истории",
 " ЦТ по всемирной истории новейшего времени",
  
 " Литература",
"  ВНО по литературе",
 " ВОУД по литературе",
"  ДВИ по литературе",
"  ДПА по литературе",
 " ЕГЭ по литературе",
 " ЕНТ по литературе",
 " Зарубежная литература",
"  Казахская литература",
 " КТА по литературе",
 " Литературное мастерство",
 " ОГЭ по литературе",
 " Олимпиады по литературе",
 " ПГК по литературе",
"  Русская литература",
 " Украинская литература",
 "ОГЭ по английскому языку",
 "ЕГЭ по английскому языку",
 "ОГЭ по испанскому языку",
 "ЕГЭ по испанскому языку",
 "ЕГЭ по китайскому языку",
 "ОГЭ по немецкому языку",
" ЕГЭ по немецкому языку",
" ОГЭ по французскому языку",
" ЕГЭ по французскому языку",
" ЕГЭ по обществознанию",
 " Логопедия",
 " Алалия",
 " Артикуляционная гимнастика",
 " Афазия",
 " Брадилалия",
 " Дизартрия",
"  Дизорфография",
 " Дисграфия",
"  Дискалькулия",
"  Дислалия",
"  Дислексия",
 " Дисфония",
 " Заикание",
 " Коррекционная педагогика",
 " Коррекция нарушений устной и письменной речи",
 " Логопедический массаж",
 " Логопеды для взрослых",
 " Логоритмика",
 " ОНР",
 " Пальчиковая гимнастика",
 " Постановка звуков",
 " Развитие речевого дыхания",
  "Развитие речи",
 " Развитие фонематического слуха",
 " Ринолалия",
"  Тахилалия",
"  ФФНР",
  
  "Маркетинг",
 " B2B-маркетинг",
 " PR-менеджмент",
  "Реклама в СМИ",
 " Брендинг",
 " Брендбук",
  "Нейминг",
 " Ребрендинг",
 " Маркетинговая стратегия",
 " Медиапланирование",
 " Стратегия продвижения",
 " Маркетинговые исследования",
 " Анализ бизнеса",
 " Анализ рынка",
 " Маркетинговый анализ",
 " Телемаркетинг",
 " Мессенджер-рассылки",
 " Смс-рассылки",
 " Социальные опросы",
 " Трейд-маркетинг",
 " Мерчандайзинг",
  
 " Математика",
 " Алгебра",
 " ВПР по математике",
 " Геометрия",
 " Планиметрия",
 " Стереометрия",
 " ЕГЭ по математике",
 " ЕГЭ по математике",
 " Логика",
  "Математика на английском языке",
 " Математика на немецком языке",
 " Ментальная арифметика",
 " ОГЭ по математике",
 " Олимпиады по математике",
 " Элементарная математика",
  
 " Менеджмент",
 " Антикризисное управление",
"  Гостиничное дело",
 " Государственное и муниципальное управление",
 " Инвестиционный менеджмент",
 " Инновационный менеджмент",
 " Логистика",
 " Менеджмент на английском языке",
 " Менеджмент организации",
 " Производственный менеджмент",
 " Риск-менеджмент",
 " Стратегический менеджмент",
 " Теория управления",
 " Управление качеством",
 " Управление персоналом",
 " Управление проектами",
  "Финансовый менеджмент",
  
 " Медицина",
 " Акушерство",
 " Ветеринария",
 " Иммунология",
 " Общественное здоровье и здравоохранение",
 " Паразитология",
 " Патологическая анатомия",
 " Патологическая физиология",
 " Пропедевтика внутренних болезней",
 " Топографическая анатомия",
  "Фармакология",
  "Фармакогнозия",
  "Эмбриология",
  
 " Музыка",
"  Аккомпанирование",
"  Анализ музыкальных форм",
"  Аранжировка",
"  Дирижирование",
"  Дошкольное музыкальное развитие",
"  Звукорежиссура",
 " Игра на гитаре",
 " История музыки",
 " Концертмейстерское искусство",
 " Музыкальная импровизация",
 " Музыкальная информатика",
 " Музыкальная композиция",
 " Нотные редакторы",
 " Подготовка в музыкальное училище",
 " Подготовка в музыкальную школу",
 " Подготовка в музыкальные вузы",
 " Подготовка к музыкальным конкурсам",
 " Постановка рук",
  "Ритмика",
  "Сольфеджио",
  "Теория музыки",

 " Начальное образование",
 " ВПР по математике в 4 классе",
 " ВПР по окружающему миру",
 " ВПР по русскому языку в 4 классе",
"  Литературное чтение",
"  Окружающий мир",
"  Подготовка к итоговому тестированию",
"  Русская классическая школа",
"  Система Д.Б. Эльконина - В.В. Давыдова",
"  Система Л.В. Занкова",
"  Традиционная система",

  "Обществознание",
 " Культурология",
 " ОБЖ",
 " ОГЭ по обществознанию",
 " Олимпиады по обществознанию",
  "ПГК по обществознанию",
  "Политология",
  "Религиоведение",
  "Социология",
  "Теория международных отношений",
  
 " Педагогика",
"  Андрагогика",
 " Артпедагогика",
"  Дошкольная педагогика",
 " Коррекционная педагогика",
 " Лечебная педагогика",
 " Общая педагогика",
 " Педагогика высшей школы",
 " Педагогика дополнительного образования",
 " Педагогика среднего специального образования",
 " Производственная педагогика",
 " Социальная педагогика",
 " Специальная педагогика",
 " Сравнительная педагогика",
 " Школьная педагогика",
  
 " Программирование",
 " Microsoft Access",
 " СУБД Cassandra",
 " СУБД Microsoft SQL Server",
 " СУБД MongoDB",
 " СУБД MySQL",
 " СУБД Neo4j",
 " СУБД NoSQL",
"  СУБД Oracle",
 " СУБД PostgreSQL",
  "СУБД Redis",
"  СУБД SQL",
"СУБД SQLite",
 "Внедрение ERP-системы",
 " Программирование в Excel",
 " Разработка веб-приложений",
 " Разработка игр",
"  Разработка на Java",
"  Разработка на Spring",
"  Разработка чат-ботов",
"  Разработка на C",
"  Разработка на C#",
"  Разработка на .NET",
"  Разработка на C++",
"  Разработка на CSS",
 " Разработка на Delphi",
  "Разработка на Go",
 " Разработка на HTML5",
"  Разработка на JavaScript",
"  Разработка на jQuery",
 " Разработка на React",
 " Разработка на TypeScript",
 " Разработка на Vue",
 " Разработка на Pascal",
 " Разработка на PHP",
"  Разработка на Laravel",
 " Разработка на Symfony",
 " Разработка на Yii",
 " Разработка на Python",
 " Разработка на Django",
 " Разработка на Ruby",
 " Разработка на Ruby on Rails",
 " Установка онлайн-кассы",
 " Хостинг",
  
 " Программирование 1С",
 " Настройка 1С Бухгалтерии",
 " Настройка 1С ЗУП",
 " Настройка 1С Предприятия",
 " Настройка 1С Розницы",
 " Настройка 1С Торговля-Склад",
 " Настройка отчётов 1С",
 " Настройка печатных форм 1С",
 " Настройка сервера 1С",
  "Обмен данными 1С",
  
 " Психология",
 " Арт-терапия",
 " Гештальт-терапия",
"  Детская психология",
 " Клиническая психология",
 " Нейропсихология",
"  Педагогическая психология",
 " Подростковая психология",
 " Поиск решения проблем взаимоотношений",
 " Прикладная психология",
 " Профайлинг",
 " Профориентация",
 " Психоанализ",
 " Психологическая диагностика",
 " Психологическая коррекция",
  "Психологическое консультирование",
 " Психология личности",
 " Психология развития",
 " Семейная психология",
 " Социальная психология",
 " Конфликтология",
 " Спортивная психология",
 " Экономическая психология",
 
 " Работа с текстами",
 " Библиография",
 " Журналистика",
 " Контент-менеджмент",
"  SEO-копирайтинг",
 " SMM-копирайтинг",
 " Рерайтинг",
 " Набор нотного текста",
  "Транскрибация",
  
 " Русский язык",
 " ВПР по русскому языку",
 " Древнерусский язык",
 " ЕГЭ по русскому языку",
  "Итоговое сочинение",
 " Коррекция почерка",
  "КТА по русскому языку",
 " ОГЭ по русскому языку",
  "Олимпиады по русскому языку",
 " Старославянский язык",
 " Стилистика русского языка",
 " ЦТ по русскому языку",
  
 " Создание сайтов",
"  Landing page",
"  WAP-сайт",
 " Аренда сайтов",
 " Вёрстка сайтов",
"  Внедрение CRM",
 " Перенос сайта на другую CMS",
 " Калькулятор для сайта",
 " Корпоративный сайт",
 " Настройка API",
"  Подключение платёжных систем",
 " Регистрация домена",
 " Сайт-портфолио",
 " Слайдер для сайта",
 " Создание интернет-магазина",
 " Настройка OpenCart",
 " Настройка PrestaShop",
 " Настройка VirtueMart",
 " Создание сайта-каталога",
 " Создание информационного сайта",
 " Создание промо-сайта",
 " Создание сайта на Bitrix",
 " Создание сайта на Drupal",
 " Создание сайта на Joomla",
  "Создание сайта на MODx",
  "Создание сайта на PHP",
  "Создание сайта на Tilda",
  "Создание сайта на uCoz",
  "Создание сайта-визитки",
  "Создание сайтов на WordPress",
  
 " Строительство",
 " Геодезия",
 " Геология",
 " Водоснабжение и водоотведение",
 " Инженерная графика",
 " Инженерное обеспечение строительства ",
 " Инженерные системы зданий и сооружений ",
 " Компьютерное сопровождение профессиональной деятельности",
 " Металлические конструкции",
"  Метрология",
"  Механика грунтов",
"  Основы архитектуры и строительных конструкций ",
"  Основы организации и управления в строительстве",
"  Перспектива и тени",
 " Сертификация и контроль качества ",
"  Сопротивление материалов",
 " Строительная физика ",
 " Строительные материалы",
 " Стандартизация",
 " Теоретическая механика",
  "Теплогазоснабжение и вентиляция ",
 " Технологические процессы в строительстве",
 " Техническая механика",
  "Электротехника и электроснабжение",
  
" Физик",
" Астрофизик" , 
"Атомная физика",
" ВНО по физике",
" ВОУД по физике",
" ВПР по физике",
" ДВИ по физике",
" ДПА по физике",
" ЕГЭ по физике",
" ЕНТ по физике"  ,
"Квантовая механика" , 
"КТА по физике",
" Математическая физика" , 
"Механика",
" Молекулярная физика"  ,
"Общая физика"  ,
"ОГЭ по физике" ,

"Олимпиады по физике",
"  ПГК по физике",
"  Теоретическая физика",
" Термодинамика"  ,
"Физика на английском язык",
 " Физика элементарных части",
" ЦТ по физике",
  "Экскурсии по физике",
  "Электродинамика",
  "ядерная физика",
  
" Физическая культура и спорт",
" Армрестлинг",
" Бодибилдинг",
" Бокс",
" Карате",
" Кикбоксинг",
" Кроссфит ",
" Легкая атлетика",
" ОФП",
" Самбо",
" Тяжёлая атлетика",
" Фитнес",
  
" Филологи",
" Культура речи",
"Лексикологи",
"Литературное редактирование",
" Обучение перевод",
"Социолингвистик",
" Этимологи",
  
 " Философия",
 " Социальная антропология",
 " Естествознание",
 " История и философия науки",
 " История философии",
 " Концепции современного естествознания",
 " Онтология",
 " Социальная философия",
 " Эстетика",
 " Этика",
  
  "Химия",
 " Аналитическая химия",
 " Биоорганическая химия",
 " Биохимия",
 " ВОУД по химии",
 " ВПР по химии",
 " ЕГЭ по химии",
 " ЕНТ по химии",
 " Квантовая химия",
 " Неорганическая химия",
 " Общая химия",
 " ОГЭ по химии",
 " Олимпиады по химии",
 " Органическая химия",
 " Фармацевтическая химия",
 " Физическая химия",
 " Химия на английском языке",
 " ЦТ по химии",
 " Экскурсии по химии",
  
 " Черчение",
  "Начертательная геометрия",
  "Инженерная графика",
  
 "Экономик",
 "Банковское дел",
  "Бизнес-планирование",
 "Биржевое дело",
   "Бюджетная система",
  "Государственное регулирование экономики",
"  Государственные и муниципальные финансы",
"  Имитационное моделирование",
 " История экономики",
 " Макроэкономика",
"  Математические методы в экономике",
"  Международная экономика",
 " Микроэкономика",
"  Налоги и налогооблажение",
"  Олимпиады по экономике",
 " Рынок ценных бумаг",
 " Теория игр",
 " Товароведение",
"  Эконометрика",
"  Экономика на английском языке",
"  Экономика предприятия",
 " Экономический анализ",
 " Финансовый анализ",
  "Финансы и кредит",
  "CFA",
  
  "Юриспруденция",
  "История государства и права ",
  "Криминалистика",
  "Отраслевые юридические науки",
"  Административное право",
 " Гражданское право",
 " Корпоративное право",
 " Жилищное право",
"  Земельное право",
 " Коммерческое право",
"  Конституционное право",
 " Медицинское право",
 " Международное право",
 " Муниципальное право",
 " Налоговое право",
 "Право социального обеспечения",
"  Предпринимательское право",
"  Процессуальное право",
 " Семейное право",
 " Страховое право",
 " Таможенное право",
 " Трудовое право",
"  Уголовное право",
 " Финансовое право",
 " Экологическое право",
  "Теория государства и права",
"Управление запасами и затратами в раздел «Менеджмент».",
"1С: Бухгалтерия",
"1С: Документооборот",
"1С: Зарплата и Управление персоналом",
"1С: Комплексная автоматизация",
"1С: Предприятие",
"1С: Управление торговлей в раздел Бухгалтерский учет",
"Аудит",
"Инвестиции",
"Деньги, кредит, банки",
"Финансы организаций",
"Финансовые рынки и инструменты",
"Оценка бизнеса",
"Оценка инвестиционных проектов",
"Коммерческая деятельность",
"Национальная экономика",
"Региональная экономика",
"Статистика",
"Планирование и бюджетирование",
"Ценообразование",
"Экономическая информатика",
"Экономика персонала",
"Экономика природопользования",
"Экономическая теория в раздел Экономика",
"Туризм",
"Картография",
"Рекреационная география в раздел География",
  
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );


    

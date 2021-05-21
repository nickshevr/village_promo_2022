const data = [
    {
        name: 'Николай Блохин',
        answers: [
            'Российский хирург-онколог, организатор Горьковского института восстановительной хирургии',
            'Известный кардиохирург. Разработал множество новых хирургических методик лечения легких и сердца'
        ],
        rightAnswer: 0,
        notRight: 'Нет, это заслуга другого нижегородского врача, Бориса Королева',
    },
     {
        name: 'Владимир Даль',
        answers: [
            'Автор «Главного толкового словаря русского языка»',
            'Создатель первого сборника русских пословиц и «Толкового словаря живого великорусского языка», на составление которого ушло 53 года'
        ],
        rightAnswer: 1,
        onlyDesktop: true,
        notRight: 'Не совсем верно! В Нижнем Новгороде Даль довел обработку толкового словаря до буквы «П». В Нижнем была завершена многолетняя работа Даля по собиранию русских пословиц для издания, ставшего энциклопедией русской мудрости',
    },
    {
        name: 'Максим Дмитриев',
        answers: [
            'Директор завода «Красное Сормово» в Великую Отечественную войну. Организовал ряд предприятий и объединений Госснаба в том числе для обеспечения региона машиностроительной и электротехнической продукцией',
            'Уникальный фотограф, создавший фотоцикл о Волге и Поволжье длиной в десятилетие, снимки из которого используются в большинстве научных изданий по истории региона и России XIX века',
          
        ],
        rightAnswer: 1,
        notRight: 'Ошибка! Это заслуги другого нашего земляка, Ефима Эммануиловича Рубинчика',
    },
    {
        name: 'Борис Мокроусов',
        answers: [
            'Композитор, который начал сочинять мелодии еще школьником. Автор песен, ставших советской классикой: «Милый мой живет в Казани», «Одинокая гармонь», «Вологда», «Песенка фронтового шофера»',
            'Музыкант, теоретик искусства, который во время учебы в нижегородской школе Русского музыкального общества, в девять лет сам смастерил скрипку. Автор музыки к первой футуристической опере, где в качестве декораций был впервые показан «Черный квадрат» Казимира Малевича'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Это судьба другого талантливого нижегородца, вы еще встретите его имя в нашем бинго',
    },
     {
        name: 'Владимир Короленко',
        answers: [
            'Писатель, автор известного сборника «Дети подземелья», заслуживший признание своей правозащитной деятельностью как в годы царской власти, так и в период Гражданской войны и советской власти',
            'Писатель-реалист, публицист, редактор неофициальной части «Нижегородских губернских ведомостей». Практически вся его жизнь и даже псевдоним были связаны с Нижним Новгородом'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Это заслуга другого героя из нашего бинго, может быть найдете и угадаете его прямо сейчас?',
    },
    {
        name: 'Надежда Суслова',
        gender: 1,
        answers: [
            'Советский физик, доктор физико-математических наук, профессор, бессменный директор НИРФИ в течении 16 лет, за которые ученые широко раздвинули рамки радиофизики и получили важные научные результаты, имеющие мировое значение',
            'Первая из русских женщин, ставшая врачом. Будучи дочерью бывшего крепостного, сумела обойти запреты на получение медицинского образования для женщин и получила диплом доктора медицины и хирургии',
           
        ],
        rightAnswer: 1,
        notRight: 'Не угадали! Это заслуги не менее выдающейся нижегородки, Марии Греховой',
    },
    {
        name: 'Александр Харитонов',
        answers: [
            'Главный архитектор Нижнего Новгорода с 1993 по 1998 год, добившийся запрета на строительство типовых панельных домов на историко-архитектурной заповедной территории исторического центра ',
            'Нижегородский архитектор-реставратор, курировал восстановление Нижегородского Кремля'
        ],
        rightAnswer: 0,
        notRight: 'Не верно! Восстановление кремля курировал архитектор-реставратор Святослав Агафонов',
    },
    {
        name: 'Михаил Матюшин',
        answers: [
           'Нижегородский фотограф XIX-XX веков, основоположник жанра художественной фотографии, член Русского фотографического общества           ',
           'Музыкант, теоретик искусства, который во время учебы в нижегородской школе Русского музыкального общества, в девять лет сам смастерил скрипку. Автор музыки к первой футуристической опере, где в качестве декораций был впервые показан «Черный квадрат» Казимира Малевича             ',
            
        ],
        rightAnswer: 1,
        notRight: 'Михаил, конечно, увлекался и фотографией и даже посвятил цикл фото своей второй жене, но страна запомнит его как одного из лидеров русского авангарда ',
    },
    {
        name: 'Бугровы',
        answers: [
           'Династия купцов-старообрядцев, ставшая крупнейшими соле- и хлебоподрядчиками в стране ',
           'Династия нижегородских предпринимателей, активных благотворителей и деятелей культуры ',
            
        ],
        rightAnswer: 0,
        notRight: 'Ошибка! Благотворительностью и культурой больше славилась династия Рукавишниковых, также достойная памяти',
    },
    {
        name: 'Пётр Нестеров',
        answers: [
            'Русский военный летчик, штабс-капитан. Основоположник высшего пилотажа           ',
            'Купец в XIX веке прославившийся своими прогрессивными идеями в организации бизнеса     '
        ],
        rightAnswer: 0,
        notRight: 'Ну что ж вы! Имя Нестерова должно ассоциироваться в Нижнем только с захватывающими полетами',
    },
    {
        name: 'Надежда Ламанова ',
        gender: 1,
        answers: [
            'Первый российский и советский модельер, художник театрального костюма, «Поставщик двора Ея Императорского Величества»            ',
            'Первая из русских женщин, ставшая врачом             '
        ],
        rightAnswer: 0,
        notRight: 'Ошибка! Вы перепутали Надежду с ее тезкой, Надеждой Сусловой         ',
    },
    {
        name: 'Николай Лобачевский',
        answers: [
            'Конструктор и организатор работ по созданию ядерных реакторов и оборудования для атомной промышленности  ',
            'Российский математик, один из создателей неевклидовой геометрии, деятель университетского образования и народного просвещения           '
        ],
        rightAnswer: 1,
        notRight: 'Не угадали! Видимо в вашем кабинете математики в школе не было портрета Лобачевского, как у многих нижегородских школьников и студентов        ',
    },
    {
        name: ' Виктор Коноваленко',
        answers: [
            'Советский хоккеист, заслуженный мастер спорта СССР, вратарь сборной СССР и горьковского «Торпедо», двукратный олимпийский чемпион, многократный чемпион мира и Европы            ',
            'Советский кораблестроитель, создатель судов на подводных крыльях, экранопланов и экранолетов. Конструктор яхт, призер всесоюзных соревнований, мастер спорта СССР             '
        ],
        rightAnswer: 0,
        notRight: 'Какая ошибка! Яхтенный спорт и кораблестроение - это про Ростислава Алексеева         ',
    },
    {
        name: 'Августин Бетанкур         ',
        answers: [
            'Государственный деятель, ученый, архитектор. Руководил строительством ярмарки и разрабатывал генеральный план Нижнего Новгорода             ',
            'Купец-старообрядец, основатель одной из самых знаменитых среди дореволюционных купеческих фамилий Нижнего Новгорода             '
        ],
        rightAnswer: 0,
        notRight: 'Ошибка! Попробуйте угадать другую линию в нашем бинго         ',
    },
    {
        name: 'Евгений Евстигнеев',
        answers: [
            'Советский драматург, директор нижегородского драмтеатра на протяжении десяти лет             ',
            'Советский и российский актер театра и кино, педагог, народный артист СССР, почти все роли в кино которого стали классикой           '
        ],
        rightAnswer: 1,
        notRight: 'Ошибочка! Вы наверняка видели памятник Евстигнееву у драмтеатра и может даже терли ему нос на удачу, но он был актером, а не драматургом       ',
    },
     {
        name: 'Николай Добролюбов',
        answers: [
            'Известный литературный критик, публицист, революционный демократ, чье имя носит лингвистический университет             ',
            'Писатель, автор многих романов и театральных драм, в том числе драмы «Гроза», назвавший свою героиню «Лучом света в темном царстве»           '
        ],
        rightAnswer: 0,
        notRight: 'Ошибка! Добролюбов, прежде всего, критик, а «Грозу» написал Островский    ',
    },
    {
        name: 'Василий Виллуан',
        answers: [
            'Музыкант, композитор, дирижер, педагог, основоположник профессионального музыкального образования в Нижнем Новгороде             ',
            'Нижегородский фотограф XIX-XX веков, зачинатель российской публицистической фотожурналистики, член Русского фотографического общества             '
        ],
        rightAnswer: 0,
        notRight: 'Вы ошиблись. Здесь речь о фотографе Дмитриеве, зато теперь есть шанс угадать другую ячейку!         ',
    },
    {
        name: 'Ирина Блохина        ',
        gender: 1,
        answers: [
            'Развивала научное направление по созданию лечебных и профилактических иммунологических препаратов на основе естественных защитных факторов организма             ',
            'Была первой женщиной хирургом, развивала восстановительную пластическую хирургию             '
        ],
        rightAnswer: 0,
        notRight: 'Не верно! Возможно вас с толку сбил старший брат Ирины, Николай Николаевич - это он занимался восстановительной хирургией и безусловно достоин быть одним из главных героев города         !         ',
    },
    {
        name: 'Анатолий Мариенгоф',
        answers: [
            'Государственный деятель, ученый, архитектор. Руководил строительством ярмарки и разрабатывал генеральный план Нижнего Новгорода ',
            'Русский поэт, теоретик искусства, прозаик и драматург, мемуарист, основавший вместе с Есениным поэтическое объединение имажинистов            ',
          
        ],
        rightAnswer: 1,
        notRight: 'Не верно. Действительно жаль, что не многие знают о роли Мариенгофа в русской модернистской поэзии. Надеемся, проект «Имя Нижнего»  это исправит         ',
    },
    {
        name: 'Игорь Африкантов ',
        answers: [
            'Конструктор и организатор работ по созданию ядерных реакторов и оборудования для атомной промышленности            ',
            'Советский физик, доктор физико-математических наук, профессор, долгое время - директор НИРФИ            '
        ],
        rightAnswer: 0,
        notRight: 'Не верно. Директором НИРФИ была удивительная женщина-физик, Мария Грехова         ',
    },
    {
        name: 'Милий Балакирев ',
        answers: [
            'Писатель-реалист, публицист, редактор «Нижегородских губернских ведомостей»           ',
            'Русский композитор, пианист, дирижер, педагог, глава «Могучей кучки», объединения организованного вместе с Мусоргским, Римским-Корсаковым,  Бородиным и Кюи          '
        ],
        rightAnswer: 1,
        notRight: 'Не верно. Разве вы не знали, что Нижегородское музыкальное училище носит имя Балакирева?         ',
    },
     {
        name: ' Ростислав Алексеев        ',
        answers: [
            'Советский физик, доктор физико-математических наук, профессор, основатель нижегородского Политеха         ',
            'Советский кораблестроитель, создатель судов на подводных крыльях, экранопланов и экранолетов. Конструктор яхт, призер всесоюзных соревнований, мастер спорта СССР            '
        ],
        rightAnswer: 1,
        notRight: 'Ошибочка, в 2007 году Нижегородскому государственному техническому университету было присвоено имя Р. Е. Алексеева, но он не является его основателем      ',
    },
    {
        name: ' Дмитрий Агеев        ',
        answers: [
            'Ученый и педагог в области радиотехники: развил теорию кодового разделения сигналов при радиоприеме           ',
            'Педагог, основоположник профессионального музыкального и художественного образования в Нижнем Новгороде           '
        ],
        rightAnswer: 0,
        notRight: 'Вы ошиблись. Попробуйте ячейки из другого ряда         ',
    },
    {
        name: ' Андрей Печерский ',
        answers: [
            'Писатель-реалист, публицист. Наиболее известен дилогией «В лесах» и «На горах», в которой детально описаны быт и обычаи нижегородских купцов-старообрядцев',
            'Композитор, автор советских песен, ставших народными хитами'
        ],
        rightAnswer: 0,
        notRight: 'Не верно! Есть в нашем бинго и композиторы. Найдете?         ',
    },
    {
        name: ' Андрей Карелин         ',
        answers: [
            'Советский архитектор, автор проекта постройки нескольких нижегородских театров.             ',
            'Русский художник и фотограф XIX-XX веков, основоположник жанра художественной фотографии, член Русского фотографического общества.            ',
           
        ],
        rightAnswer: 1,
        notRight: 'Не верно! Многие ли знают сегодня, что нижегородец Карелин основал художественную фотографию? Надеемся, проект «Имя Нижнего» исправит ситуацию.         ',
    },
];

export default data;

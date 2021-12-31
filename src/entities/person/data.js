const data = [
    {
        name: 'Врач',
        question: 'Влад давно работает в больнице и даже несколько раз дежурил в саму новогоднюю ночь. Последний год с несколькими новыми волнами пандемии был для Влада, работающего в ковиднике, мягко говоря, непростым, и все его мечты сейчас только об отдыхе и покое. Конечно, восстановить нервы ему не помешало бы, как и многим. Что же Влад хочет на этот Новый год?',
        answers: [
            'Xbox series x',
            'Бросить курить'
        ],
        rightAnswer: 1,
        notRight: 'Ошибка! Конечно, видеоигры — отличный способ расслабиться, но Влад как врач, не считает уход от реальности действенным средством и думает, что стоит начать восстановление с отказа от вредной привычки, поэтому будет рад любому средству или совету, который поможет ему бросить курить.',
    },
    {
        name: 'Скейтер',
        question: 'Паша катается на скейте с 2016 года. Год для него был классным, помимо прочего, он выпустил свою собственную коллекцию летних футболок Hatypa. Что же хочет Паша на Новый год?',
        answers: [
            'Колеса SpitFire F1',
            'Ручной станок для шелкографии'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Паша очень вдохновлен своим новым хобби и доволен тем, что первая партия его мерча зашла его друзьям-скейтерам на ура, но все же заветная мечта для него — прокачка родного скейта, чтобы в новом году наработать еще больше классных трюков и выиграть больше контестов.',
    },
    {
        name: 'Таксист',
        question: 'Андрей Владимирович 13 лет работал в финансовой структуре, но зарплата упала, и он решил подзаработать в востребованной сейчас сфере перевозок по городу. Особенно ему нравится в новой работе возможность свободного графика. Ведь работа работой, но со временем начинаешь все больше ценить моменты с близкими. Чего желает Андрей Владимирович в новом году?',
        answers: [
            'Навестить родных на крайнем севере',
            'Встретить свою единственную',

        ],
        rightAnswer: 1,
        notRight: 'Не угадали. Водитель такси, Андрей Владимирович, признался нам, что уже три года совсем один, и больше всего мечтает о большой любви и «той самой единственной».',
    },
    {
        name: 'Хозяйка табачного магазина',
        question: 'Легендарную тетю Нелю знает вся культурная тусовка города, даже те, кто совсем-совсем не курит. Неля Рашидовна очень радеет за то, чтобы жители наносили меньше вреда своему здоровью и остерегались «химии». Что же она хочет получить на Новый год?',
        answers: [
            'Старинную кубинскую трубку в свою коллекцию',
            'Помещение под свой новый проект'
        ],
        rightAnswer: 1,
        notRight: 'Не угадали! В последний год Неля Рашидовна, как всегда, занималась развитием своего дела с душой — поменяла название лавки на «Мир трубок», придумала слоган «Выбирайте лучшее, выбирайте классику!» и планирует открытие новых проектов, подробностями о которых пока не поделилась, опасаясь, что «не сбудется». ',
    },
    {
        name: 'Фотограф',
        question: 'В последние годы фотографии Никиты стали особенно популярны. Преображающийся к 800-летию Нижний блистал на них во всей красе и масштабе с высоты птичьего полета. Чего может желать талантливый фотограф в Новом году?',
        answers: [
            'Бесконечный аккумулятор для фотоаппарата',
            'Квартиру-трешку с видом на Стрелку'
        ],
        rightAnswer: 0,
        notRight: 'Жаль, не реально, но верно! / Если честно, трешка с видом на Стрелку тоже входит в большие мечты Никиты, но у настоящего волшебного Деда Мороза он бы загадал для себя настоящее чудо — бесконечный аккумулятор для фотоаппарата, чтобы продолжать радовать жителей  #НеЗемнымиФотографиями ',
    },
    {
        name: 'Пышмастер',
        question: 'Саша работает пышмастером во «Вспышке» на Алексеевской (то есть, делает те самые пончики-пышки) уже три года. В 2021 она наконец записала свой музыкальный альбом, который активно готовит к релизу, а еще признается, что благодаря творчеству смогла побороть длительное депрессивное состояние. Что хочет Саша в подарок?',
        answers: [
            'Миди-клавиатуру',
            'Годовую подписку на Ableton',

        ],
        rightAnswer: 0,
        notRight: 'Ошибочка! Саше повезло: у нее есть приятель-продюсер, который сам пишет музыку, а также знакомые со студией, где можно сделать запись и обработку новых треков, поэтому серьезные программы ей не столь нужны. А вот компактная клавиатура, на которой можно набрасывать мелодии новых сочиненных песен, очень пригодится. ',
    },
    {
        name: 'Школьник',
        question: 'Арсений учится в пятом классе и смышлен не по годам. Особенно ему интересно разбираться во всех технических вопросах, понимать, как работают мобильные устройства и программы. В уходящем году ему даже довелось тестировать одну игру на развитие устного счета. Чего же хочет самый маленький герой нашего спецпроекта в качестве подарка на Новый год?',
        answers: [
            'Радиоуправляемый вертолет',
            'Новый ноутбук'
        ],
        rightAnswer: 1,
        notRight: 'Арсений считает, что из игрушек он уже вырос, а вот чтобы изучать различные программки, легкий и удобный компьютер, который можно возить с собой, да еще и с хорошими техническими характеристиками, не помешает. ',
    },
    {
        name: 'Танцор',
        question: 'Аня профессионально танцует уже более десяти лет. В этом году она стала преподавателем по танцам для младшей группы и собирается развиваться в этом направлении и дальше. О каком подарке она мечтает?',
        answers: [
            'Творческая видеосъемка',
            'Образовательный курс для спортивных тренеров',

        ],
        rightAnswer: 0,
        notRight: 'Аня обнаружила, что находит общий язык с учениками так легко, будто всю жизнь была педагогом. Ей очень хочется все больше мотивировать учеников и коллег готовыми поставленными хореографическими идеями, поэтому она мечтает о большой полноценной творческой съемке своей новой танцевальной работы.',
    },
    {
        name: 'Парикмахер',
        question: 'Катя, как парикмахер, в профессии уже два года. В этом году стала старшим мастером в парикмахерской «Ракета». Что подарим Кате на Новый год?',
        answers: [
            'Новая машинка для стрижки',
            'Запуск собственного обучающего курса',

        ],
        rightAnswer: 0,
        notRight: 'Ошибочка! Скромная Катя не стала особо ничего объяснять, ей просто нужна новая машинка, чтобы развивать технику в коротких стрижках, а остальное, считает девушка, придет со временем само, если быть преданным и увлеченным своим делом.',
    },
    {
        name: 'Шеф-повар',
        question: 'Антон — молодой и талантливый шеф, главное событие этого года для него — новая рабочая семья, обретение новой команды в уже легендарной неаполитанской пиццерии Юла.Pizza. За время работы он уже разработал для «Юлы» несколько успешных новинок, а также вместе с командой организовал несколько благотворительных бранчей и не намерен на этом останавливаться. Что же должен найти Антон под елочкой на пороге 2022-го?',
        answers: [
            'Литые диски на машину',
            'Путевка на море'
        ],
        rightAnswer: 0,
        notRight: 'Мимо! Отпуск – это, конечно, хорошо, но пока развивающийся повар, как сейчас говорят, «в потоке», ему важен больше ежедневный комфорт, как в работе, так и в быту. Помимо основной деятельности, Антон — автолюбитель, который с радостью подвозит коллег до дома после затянувшегося рабочего дня, а потому ему важно, чтобы машина была в порядке, и он не жалеет для своего «Логана» обновок.',
    },
    {
        name: 'Смотритель в Арсенале',
        question: 'Светлана — очень преданный своей работе человек, и сама посчитала, что в 2021 году на охрану современного искусства в Арсенале она потратила 1672 часа (или 209 дней)! Особенно она довольна тем, что за это время в скетчбуке смотрителя появились автографы-рисунки художников Максима Има, Алексея Старкова, Владимира Чернышёва, Сергея Филатова, Игоря Самолёта и Андрея Кузькина. А за 156 нерабочих дней она побывала в 12 городах, 33 музеях, на 58 выставках, событиях, спектаклях, 12 экскурсиях и экскурсионных турах. Какой подарок планирует сделать себе Светлана?',
        answers: [
            'Поездка в Стамбул',
            'Курс по искусствоведению и кураторской работе'
        ],
        rightAnswer: 0,
        notRight: 'А вот и нет! Светлана рассчитала: чтобы 156 дней в году активно и роскошно отдыхать, нужно 209 дней баловаться искусством именно как времяпрепровождением. Кстати, желанный подарок она уже организовала себе сама и действительно на праздники летит в Стамбул! ',
    },
    {
        name: 'Психолог',
        question: 'Людмила – психолог уже 12 лет. Год запомнился ей тем, что она получила диплом о повышении квалификации. Время диктует свои правила, и, конечно, многие сессии с клиентами перешли в онлайн, Людмила втянулась в формат проведения открытых трансляций, в которых может дать советы всем своим подписчикам, помочь тем, кто пока не нашел время на полноценную терапию. Какой же подарок для нее более желанный в этом году?',
        answers: [
            'iPhone 13Pro',
            'Сертификат на посещение йога-студии'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Все достаточно прозаично и логично! Для хороших трансляций нужна хорошая и компактная техника. Да и что скрывать, последние айфоны еще и очень симпатичные.',
    },
    {
        name: 'Водитель трамвая',
        question: 'Алексей работает водителем уже шесть лет, работу он искренне любит, все в ней его умиротворяет, хоть и устает он порой изрядно. Особенно любит Алексей праздничный период, когда трамваи украшают, и ты едешь сквозь город, будто добавляя прохожим новогоднего настроения. Да и туристов катается больше — они добавляют атмосферы. Что же он ждет в подарок?',
        answers: [
            'Гарнитура для телефона',
            'Обновить гардероб'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Внешний вид человека-трамвая его совершенно не беспокоит, и Алексей спокойно ездит в своей привычной скромной куртке, а вот чтобы в дороге было удобно и безопасно отвечать родным в экстренном случае иногда по телефону или слушать одним ухом музыку, гарнитура очень актуальна. ',
    },
    {
        name: 'Бармен «Селедки»',
        question: 'Коля — из того самого поколения молодой «Селедки и кофе» начала времен, когда еще неразлучен был имидж культурной газеты и бара, на входе всегда было можно найти свежий номер «Селедки», а тусовки будто основывались на принципе «в тесноте, да не в обиде». После двухлетнего перерыва Коля вернулся в Селедку, чтобы немного подработать и поддержать бар в непростые ковидные времена. Интересно, что же он хочет получить в подарок?',
        answers: [
            'Первый взнос на ипотеку',
            'Беспроводные наушники'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Как серьезный и взрослый парень, Коля мечтает о собственной квартире и настроен накопить и взять ипотеку в новом году.',
    },
    {
        name: 'Певец с Покровки',
        question: 'Роман раньше держал собственную кондитерскую лавочку с конфетами и пирожными на перекрестке Алексеевской и Пискунова, и уже тогда, в теплое время года, он периодически выставлял на улицу колонку и упражнялся в публичном пении. Как-то вышло, что петь для прохожих стало постоянным хобби Романа и, как он сам утверждает, жизнь без этого уже не мила. Не все в городе одобряют подобное вокальное творчество, но игнорировать существование такого уличного артиста как городское явление — сложно. Что же загадал наш герой на Новый год?',
        answers: [
            'Теплый пуховик',
            'Новый вокальный микрофон'
        ],
        rightAnswer: 0,
        notRight: 'Вот и нет! На самом деле Романа вполне устраивает техническое оснащение его выступлений. А вот мороз весьма портит ситуацию, поэтому певец мечтает о новеньком супертеплом пуховике. ',
    },
    {
        name: 'Стрит-артист',
        question: 'Никита давно перестал быть только нижегородским уличным художником и обрел федеральное и международное признание. На его авторский фестиваль стрит-арта в Нижний съезжаются лучшие уличные художники. А еще он уже выпустил не один авторский фильм о стрит-арте. Чего же он может желать в этот Новый год?',
        answers: [
            'Выпустить печатное издание про уличное искусство в Нижнем',
            'Открыть новую большую мастерскую'
        ],
        rightAnswer: 0,
        notRight: 'Мимо! Художник мечтает именно о том, чтобы выпустить книгу! Это проект, над которым Никита работал последние несколько лет, собирая архивные материалы про локальный стрит-арт и граффити. Будем надеяться, что в 2022 он и правда выйдет в свет!',
    }
];

export default data;

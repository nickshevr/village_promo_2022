const data = [
    {
        name: 'Врач',
        answers: [
            'xbox series x',
            'бросить курить'
        ],
        rightAnswer: 1,
        notRight: 'Ошибка! Конечно, видеоигры — отличный способ расслабиться, но Влад как врач, не считает уход от реальности действенным средством и думает, что стоит начать восстановление с отказа от вредной привычки, поэтому будет рад любому средству или совету, который поможет ему бросить курить.',
    },
    {
        name: 'Скейтер',
        answers: [
            'колеса SpitFire F1',
            'ручной станок для шелкографии'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Паша очень вдохновлен своим новым хобби и доволен тем, что первая партия его мерча зашла его друзьям-скейтерам на ура, но все же заветная мечта для него — прокачка родного скейта, чтобы в новом году наработать еще больше классных трюков и выиграть больше контестов.',
    },
    {
        name: 'Таксист',
        answers: [
            'навестить родных на крайнем севере',
            'встретить свою единственную',

        ],
        rightAnswer: 1,
        notRight: 'Не угадали. Водитель такси, Андрей Владимирович, признался нам, что уже три года совсем один, и больше всего мечтает о большой любви и «той самой единственной».',
    },
    {
        name: 'Хозяйка «табачки» на Алексеевской',
        answers: [
            'Старинную кубинскую трубку в свою коллекцию',
            'Помещение под свой новый проект'
        ],
        rightAnswer: 1,
        notRight: 'Не угадали! В последний год Неля Рашидовна, как всегда, занималась развитием своего дела с душой — поменяла название лавки на «Мир трубок», придумала слоган «Выбирайте лучшее, выбирайте классику!» и планирует открытие новых проектов, подробностями о которых пока не поделилась, опасаясь, что «не сбудется».',
    },
    {
        name: 'Фотограф',
        answers: [
            'бесконечный аккумулятор для фотоаппарата',
            'квартиру-трешку с видом на Стрелку'
        ],
        rightAnswer: 0,
        notRight: 'Если честно, трешка с видом на Стрелку тоже входит в большие мечты Никиты, но у настоящего волшебного Деда Мороза он бы загадал для себя настоящее чудо - бесконечный аккумулятор для фотоаппарата, чтобы продолжать радовать жителей  #НеЗемнымиФотографиями',
    },
    {
        name: 'Пышмастер',
        answers: [
            'Миди-клавиатуру',
            'Годовую подписку на Ableton',

        ],
        rightAnswer: 0,
        notRight: 'Ошибочка! Саше повезло: у нее есть приятель, продюсер, который сам пишет музыку, а также есть знакомые со студией, где можно сделать запись и обработку новых треков, поэтому серьезные программы ей не столь нужны. А вот компактная клавиатура, на которой можно набрасывать мелодии новых сочиненных песен, очень пригодится.',
    },
    {
        name: 'Школьник',
        answers: [
            'Радиоуправляемый вертолет',
            'Новый ноутбук'
        ],
        rightAnswer: 1,
        notRight: 'Арсений считает, что из игрушек он уже вырос, а вот чтобы изучать различные программки, легкий и удобный компьютер, который можно возить с собой, да еще и с хорошими техническими характеристиками, не помешает.',
    },
    {
        name: 'Танцор',
        answers: [
            'Творческая видеосъемка',
            'Образовательный курс для спортивных тренеров',

        ],
        rightAnswer: 0,
        notRight: 'Ошибка! Аня обнаружила, что находит общий язык с учениками так легко, будто всю жизнь была педагогом. Ей очень хочется все больше мотивировать учеников и коллег готовыми поставленными хореографическими идеями, поэтому она мечтает о большой полноценной творческой съемке своей новой танцевальной работы.',
    },
    {
        name: 'Парикмахер',
        answers: [
            'Новая машинка для стрижки',
            'Запуск собственного обучающего курса',

        ],
        rightAnswer: 0,
        notRight: 'Ошибочка! Скромная Катя не стала особо ничего объяснять, ей просто нужна новая машинка, чтобы развивать технику в коротких стрижках, а остальное, считает, придет со временем само, если быть преданным и увлеченным своим делом.',
    },
    {
        name: 'Шеф-повар',
        answers: [
            'Литые диски на машину',
            'Путевка на море'
        ],
        rightAnswer: 0,
        notRight: 'Мимо! Отпуск это, конечно, хорошо, но пока развивающийся повар, как сейчас говорят — “в потоке”: ему важен больше ежедневный комфорт, как в работе, так и в быту. Помимо основной деятельности, Антон — автолюбитель, который с радостью подвозит коллег до дома после затянувшегося рабочего дня, а потому ему важно, чтобы машина была в порядке и не жалеет для своего “Логана” обновок.',
    },
    {
        name: 'Смотритель в Арсенале',
        answers: [
            'Поездка в Стамбул',
            'Курс по искусствоведению и кураторской работе'
        ],
        rightAnswer: 0,
        notRight: 'А вот и нет! Светлана рассчитала: чтобы 156 дней в году активно и роскошно отдыхать, нужно 209 дней баловаться искусством именно как времяпрепровождением. Кстати, желанный подарок она уже организовала себе сама и действительно на праздники летит в Стамбул!',
    },
    {
        name: 'Психолог',
        answers: [
            'iPhone 13Pro',
            'Сертификат на посещение йога-студии'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Все достаточно прозаично и логично! Для хороших трансляций нужна хорошая и компактная техника. Да и что скрывать, последние айфоны еще и очень симпатичные.',
    },
    {
        name: 'Водитель трамвая',
        answers: [
            'Гарнитура для телефона',
            'Обновить гардероб'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Внешний вид человека-трамвая его совершенно не беспокоит, и Алексей спокойно ездит в своей привычной скромной куртке, а вот чтобы в дороге было удобно и безопасно отвечать родным в экстренном случае иногда по телефону или слушать одним ухом музыку, гарнитура очень актуальна.',
    },
    {
        name: 'Бармен «Селедки»',
        answers: [
            'Первый взнос на ипотеку',
            'Беспроводные наушники'
        ],
        rightAnswer: 0,
        notRight: 'Не угадали! Как серьезный и взрослый парень, Коля мечтает о собственной квартире и настроен накопить и взять ипотеку в новом году.',
    },
    {
        name: 'Певец с покровки',
        answers: [
            'Теплый пуховик',
            'Новый вокальный микрофон'
        ],
        rightAnswer: 0,
        notRight: 'Вот и нет! На самом деле Романа вполне устраивает техническое оснащение его выступлений. А вот мороз весьма портит ситуацию, поэтому певец мечтает о новеньком супер-теплом пуховике.',
    },
    {
        name: 'Стрит-артист',
        answers: [
            'Выпустить печатное издание про уличное искусство в Нижнем',
            'Открыть новую большую мастерскую'
        ],
        rightAnswer: 0,
        notRight: 'Мимо! Художник мечтает именно о том, чтобы выпустить книгу! Это проект, над которым Никита работал последние несколько лет, собирая архивные материалы про локальный стрит-арт и граффити. Будем надеяться, что в 2022 он и правда выйдет в свет!',
    }
];

export default data;

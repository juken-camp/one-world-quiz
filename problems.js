const problemDatabase = {
    // 中学1年生 Lesson1 - 文の基本
    grade1_lesson1_word_order: [
        {
            q: "私は音楽が好きです。",
            ans: "I like music.",
            exp: "英語では（主語 + 動詞 + 目的語）の語順になります。「私は」がI、「好きです」がlike、「音楽を」がmusicですね。"
        },
        {
            q: "私はピアノを演奏します。",
            ans: "I play the piano.",
            exp: "英語では（主語 + 動詞 + 目的語）の順番で文を作ります。楽器の前には必ずtheをつけることも覚えておきましょう。"
        }
    ],

    grade1_lesson1_sentence_types: [
        {
            q: "「体育はわくわくします」を英語にしなさい。",
            ans: "P.E. is exciting.",
            exp: "「何はどんなだ」を表す文は（主語 + be動詞 + 形容詞/名詞）の形になります。P.E.は体育という意味ですね。"
        },
        {
            q: "「キング先生は私たちの英語の先生です」を英語にしなさい。",
            ans: "Ms. King is our English teacher.",
            exp: "「何は何だ」を表す文は（主語 + be動詞 + 名詞）の形になります。Ms.は女性の先生につける敬称ですね。"
        },
        {
            q: "「私は日本食が好きです」を英語にしなさい。",
            ans: "I like Japanese food.",
            exp: "「何は〜する」を表す文は（主語 + 動詞 + 目的語）の形になります。likeは「好む」という動詞ですね。"
        }
    ],

    grade1_lesson1_personal_statements: [
        {
            q: "「私はシドニー出身です」を英語にしなさい。",
            ans: "I am from Sydney.",
            exp: "「私は〜出身です」は（I am from 〜）で表します。fromは「〜から」という意味の前置詞ですね。"
        },
        {
            q: "「あなたはカナダ出身ですか」を英語にしなさい。",
            ans: "Are you from Canada?",
            exp: "be動詞の疑問文は（be動詞 + 主語 + 〜?）の語順になります。疑問文では語順が変わることを覚えましょう。"
        },
        {
            q: "「私は理科が好きです」を英語にしなさい。",
            ans: "I like science.",
            exp: "一般動詞を使う文は（主語 + 動詞 + 目的語）の語順になります。scienceは「理科」という意味ですね。"
        }
    ],

    grade1_lesson1_various_questions: [
        {
            q: "「あなたのいちばん好きな教科は何ですか」を英語にしなさい。",
            ans: "What is your favorite subject?",
            exp: "「何は〜ですか」の疑問文は（What + be動詞 + 主語?）の語順になります。favoriteは「お気に入りの」ですね。"
        },
        {
            q: "「あなたはどこに住んでいますか」を英語にしなさい。",
            ans: "Where do you live?",
            exp: "一般動詞の疑問文は（疑問詞 + do/does + 主語 + 動詞の原形?）の語順になります。whereは「どこ」ですね。"
        },
        {
            q: "「あなたの誕生日はいつですか」を英語にしなさい。",
            ans: "When is your birthday?",
            exp: "「いつ」を尋ねる疑問文は（When + be動詞 + 主語?）の語順になります。whenは時を表す疑問詞ですね。"
        }
    ],

    grade1_lesson1_requests: [
        {
            q: "「コーヒーをください」を英語にしなさい。",
            ans: "Coffee, please.",
            exp: "「〜をください」は（〜, please.）で表します。pleaseは「お願いします」という丁寧な表現ですね。"
        },
        {
            q: "「私のためにギターを演奏してください」を英語にしなさい。",
            ans: "Please play the guitar for me.",
            exp: "「〜してください」は（Please + 動詞の原形〜）で表します。for meは「私のために」という意味ですね。"
        }
    ],

    // 中学1年生 Lesson2 - 代名詞
    grade1_lesson2_she_he_it: [
        {
            q: "「あちらはキング先生です。彼女は英語の先生です」の2文目を英語にしなさい。",
            ans: "She is an English teacher.",
            exp: "女性を指すときは代名詞（she）を使います。一度名前が出た人は代名詞で表すのが自然ですね。"
        },
        {
            q: "「ボブは私の兄です。彼は野球が好きです」の2文目を英語にしなさい。",
            ans: "He likes baseball.",
            exp: "男性を指すときは代名詞（he）を使います。三人称単数なのでlikesにsがつくことも注意しましょう。"
        },
        {
            q: "「木の下のネコを見て。それはケンのネコです」の2文目を英語にしなさい。",
            ans: "It is Ken's cat.",
            exp: "動物や物を指すときは代名詞（it）を使います。Ken'sは「ケンの」という所有格ですね。"
        }
    ],

    grade1_lesson2_pronoun_questions: [
        {
            q: "「彼女はオーストラリア出身ですか」を英語にしなさい。",
            ans: "Is she from Australia?",
            exp: "代名詞を使った疑問文も（be動詞 + 主語 + 〜?）の語順になります。sheは女性を表す主格の代名詞ですね。"
        }
    ],

    grade1_lesson2_this_that: [
        {
            q: "「こちらはボブです」を英語にしなさい。",
            ans: "This is Bob.",
            exp: "近くにいる人を紹介するときは（This is 〜）を使います。thisは「これ・この」という近いものを指しますね。"
        },
        {
            q: "「あちらは加藤先生です」を英語にしなさい。",
            ans: "That is Mr. Kato.",
            exp: "遠くにいる人を紹介するときは（That is 〜）を使います。thatは「あれ・あの」という遠いものを指しますね。"
        }
    ],

    grade1_lesson2_this_that_questions: [
        {
            q: "「あれはあなたのイヌですか」を英語にしなさい。",
            ans: "Is that your dog?",
            exp: "遠くにあるものについて尋ねるときは（Is that 〜?）を使います。疑問文ではbe動詞が前に出ますね。"
        }
    ],

    grade1_lesson2_we_you_they: [
        {
            q: "「私たちはテニスが大好きです」を英語にしなさい。",
            ans: "We love tennis.",
            exp: "「私たち」は代名詞（we）で表します。loveは「大好き」という強い気持ちを表す動詞ですね。"
        },
        {
            q: "「彼らは私のクラスメートです」を英語にしなさい。",
            ans: "They are my classmates.",
            exp: "複数の人を指すときは代名詞（they）を使います。複数なのでbe動詞はareになりますね。"
        }
    ],

    grade1_lesson2_can_usage: [
        {
            q: "「私の父は4つの言語を話すことができます」を英語にしなさい。",
            ans: "My father can speak four languages.",
            exp: "「〜することができる」は（can + 動詞の原形）で表します。canの後は必ず動詞の原形ですね。"
        },
        {
            q: "「あなたはチェスをすることができますか」を英語にしなさい。",
            ans: "Can you play chess?",
            exp: "canを使った疑問文は（Can + 主語 + 動詞の原形?）の語順になります。助動詞の疑問文の基本形ですね。"
        },
        {
            q: "「昼間、私たちは星を見ることができません」を英語にしなさい。",
            ans: "In the daytime we can't see stars.",
            exp: "canの否定文は（can't (cannot) + 動詞の原形）で表します。can'tはcannotの短縮形ですね。"
        }
    ],

    grade1_lesson2_some_any: [
        {
            q: "「私はハムスターを何匹か飼っています」を英語にしなさい。",
            ans: "I have some hamsters.",
            exp: "肯定文では「いくつかの」を表すのに（some）を使います。someは肯定文で使うのが基本ですね。"
        },
        {
            q: "「私はどんなペットも飼っていません」を英語にしなさい。",
            ans: "I don't have any pets.",
            exp: "否定文では「どんな〜も」を表すのに（any）を使います。anyは否定文・疑問文で使いますね。"
        },
        {
            q: "「あなたはサッカーについての本を何か持っていますか」を英語にしなさい。",
            ans: "Do you have any books about soccer?",
            exp: "疑問文では「何か〜」を表すのに（any）を使います。疑問文でもanyを使うことを覚えましょう。"
        }
    ],

    // 中学1年生 Lesson3 - 一般動詞
    grade1_lesson3_general_verbs: [
        {
            q: "次のうち、体の動きや動作を表す動詞はどれですか。",
            ans: "play",
            exp: "（play）は「〜をする、演奏する」という体の動きを表す動詞です。動作を表す動詞の代表例ですね。"
        },
        {
            q: "次のうち、気持ちや心の働きを表す動詞はどれですか。",
            ans: "know",
            exp: "（know）は「〜を知っている」という心の働きを表す動詞です。感情や思考を表す動詞の一つですね。"
        }
    ],

    grade1_lesson3_verb_s_es: [
        {
            q: "「ケンタは野球が好きです」を英語にしなさい。",
            ans: "Kenta likes baseball.",
            exp: "三人称単数（he, she, it）が主語のとき、一般動詞に（s）または（es）をつけます。大切なルールですね。"
        },
        {
            q: "「キング先生は日本で英語を教えています」を英語にしなさい。",
            ans: "Ms. King teaches English in Japan.",
            exp: "三人称単数の主語の場合、動詞teachは（teaches）になります。語尾にesがつくパターンですね。"
        }
    ],

    grade1_lesson3_verb_s_es_rules: [
        {
            q: "動詞「try」の三人称単数形は何ですか。",
            ans: "tries",
            exp: "子音字 + y で終わる動詞は、（yをiに変えてes）をつけます。tryは子音字tの後にyがありますね。"
        },
        {
            q: "動詞「have」の三人称単数形は何ですか。",
            ans: "has",
            exp: "（have）は不規則変化で（has）になります。よく使う動詞なので必ず覚えておきましょう。"
        },
        {
            q: "動詞「wash」の三人称単数形は何ですか。",
            ans: "washes",
            exp: "（sh）で終わる動詞には（es）をつけます。音の関係でsだけでは発音しにくいからですね。"
        }
    ],

    grade1_lesson3_noun_singular_plural: [
        {
            q: "「ペン」の複数形は何ですか。",
            ans: "pens",
            exp: "普通の名詞の複数形は語尾に（s）をつけます。これが複数形の基本ルールですね。"
        },
        {
            q: "数えられない名詞はどれですか。",
            ans: "water",
            exp: "（water）は液体で数えられない名詞です。液体・気体・物質名詞は数えられませんね。"
        }
    ],

    grade1_lesson3_plural_rules: [
        {
            q: "「baby」の複数形は何ですか。",
            ans: "babies",
            exp: "子音字 + y で終わる名詞は、（yをiに変えてes）をつけます。babyのyの前はbという子音字ですね。"
        },
        {
            q: "「tomato」の複数形は何ですか。",
            ans: "tomatoes",
            exp: "（o）で終わる名詞の多くは（es）をつけます。ただし例外もあるので注意が必要ですね。"
        },
        {
            q: "「city」の複数形は何ですか。",
            ans: "cities",
            exp: "子音字 + y で終わる名詞は、（yをiに変えてes）をつけます。cityのyの前はtという子音字ですね。"
        }
    ],

    grade1_lesson3_pronoun_i: [
        {
            q: "「私はテニスが好きです」で使う「私」はどれですか。",
            ans: "I",
            exp: "主語として使う場合の「私」は（I）です。文の主語になるときは必ずIを使いますね。"
        }
    ],

    grade1_lesson3_pronoun_cases: [
        {
            q: "「彼」の主語以外での形は何ですか。",
            ans: "him",
            exp: "「彼を/彼に」は（him）で表します。主語以外で使うときの代名詞を目的格といいますね。"
        },
        {
            q: "「私たち」の主語以外での形は何ですか。",
            ans: "us",
            exp: "「私たちを/私たちに」は（us）で表します。weが主格、usが目的格という関係ですね。"
        }
    ],

    // 中学1年生 Lesson4 - 過去形
    grade1_lesson4_past_statements: [
        {
            q: "私は昨日、テレビでサッカーの試合を見ました",
            ans: "I watched a soccer game on TV yesterday.",
            exp: "過去のことを表すときは動詞を過去形にします。（watch）の過去形は（watched）ですね。"
        },
        {
            q: "それはよい試合でした。",
            ans: "It was a good game.",
            exp: "be動詞の過去形：（is）と（am）の過去形は（was）、（are）の過去形は（were）です。"
        }
    ],

    grade1_lesson4_past_questions: [
        {
            q: "あなたはそれを見ましたか",
            ans: "Did you watch it?",
            exp: "一般動詞の過去の疑問文は（Did + 主語 + 動詞の原形?）の形になります。動詞は原形に戻りますね。"
        },
        {
            q: "アヤは忙しかったですか",
            ans: "Was Aya busy?",
            exp: "be動詞の過去の疑問文は（Was/Were + 主語 + 〜?）の形になります。be動詞が前に出ますね。"
        }
    ],

    grade1_lesson4_past_negative: [
        {
            q: "カズヤはサッカーをしませんでした",
            ans: "Kazuya didn't play soccer.",
            exp: "一般動詞の過去の否定文は（didn't + 動詞の原形）で表します。動詞は原形に戻すことを忘れずに。"
        },
        {
            q: "それはわくわくしませんでした",
            ans: "It wasn't exciting.",
            exp: "be動詞の過去の否定文は（wasn't/weren't + 〜）で表します。wasn'tはwas notの短縮形ですね。"
        }
    ],

    // 中学1年生 Lesson5 - 現在進行形
    grade1_lesson5_present_continuous: [
        {
            q: "タロウはテレビを見ているところです",
            ans: "Taro is watching TV.",
            exp: "現在進行形は（be動詞 + 動詞の-ing形）で「〜しているところ」を表します。今まさに行っている動作ですね。"
        },
        {
            q: "タロウとジロウはテニスをしているところです",
            ans: "Taro and Jiro are playing tennis.",
            exp: "主語が複数の場合、be動詞は（are）を使います。複数主語には必ずareですね。"
        }
    ],

    grade1_lesson5_present_continuous_negative: [
        {
            q: "タロウは本を読んでいません",
            ans: "Taro is not reading a book.",
            exp: "現在進行形の否定文は（be動詞 + not + 動詞の-ing形）で表します。be動詞の否定形ですね。"
        }
    ],

    grade1_lesson5_present_continuous_questions: [
        {
            q: "タロウは本を読んでいるのですか",
            ans: "Is Taro reading a book?",
            exp: "現在進行形の疑問文は（be動詞 + 主語 + 動詞の-ing形?）で表します。be動詞の疑問文の形ですね。"
        },
        {
            q: "タロウは何をしているのですか",
            ans: "What is Taro doing?",
            exp: "「何をしているのですか」は（What + be動詞 + 主語 + doing?）で表します。doingは特別な形ですね。"
        }
    ],

    // 中学1年生 Lesson6 - 疑問詞
    grade1_lesson6_why_because: [
        {
            q: "あなたはなぜ冬が好きなのですか",
            ans: "Why do you like winter?",
            exp: "理由を尋ねるときは（Why + do/does + 主語 + 動詞の原形?）を使います。whyは理由を聞く疑問詞ですね。"
        },
        {
            q: "上の質問に対する答え「スキーが好きだからです」を英語にしなさい。",
            ans: "Because I like skiing.",
            exp: "理由を答えるときは（Because + 主語 + 動詞）を使います。becauseは理由を表す接続詞ですね。"
        }
    ],

    grade1_lesson6_how_often: [
        {
            q: "タロウはどのくらいよくスキーに行きますか",
            ans: "How often does Taro go skiing?",
            exp: "頻度を尋ねるときは（How often + does/do + 主語 + 動詞の原形?）を使います。頻度を聞く表現ですね。"
        },
        {
            q: "私は1週間に2回テニスをします",
            ans: "I play tennis twice a week.",
            exp: "「2回」は（twice）で表します。一回はonce、2回はtwice、3回以上はthree timesですね。"
        }
    ],

    grade1_lesson6_which_who_whose: [
        {
            q: "あなたはどの季節が好きですか",
            ans: "Which season do you like?",
            exp: "複数の選択肢から選ぶときは（Which + 名詞 + do/does + 主語 + 動詞の原形?）を使います。選択の疑問詞ですね。"
        },
        {
            q: "あなたの数学の先生はだれですか",
            ans: "Who is your math teacher?",
            exp: "人を尋ねるときは（Who + be動詞 + 〜?）を使います。whoは人を聞く疑問詞ですね。"
        },
        {
            q: "これはだれのノートですか",
            ans: "Whose notebook is this?",
            exp: "所有を尋ねるときは（Whose + 名詞 + be動詞 + 〜?）を使います。whoseは所有を聞く疑問詞ですね。"
        }
    ],

    // 中学1年生 Lesson7 - 助動詞
    grade1_lesson7_must_prohibition: [
        {
            q: "あなたはあした早く起きなくてはいけません",
            ans: "You must get up early tomorrow.",
            exp: "「〜しなければならない」は（must + 動詞の原形）で表します。強い義務を表す助動詞ですね。"
        },
        {
            q: "あなたは学校に遅れてはいけません",
            ans: "You must not be late for school.",
            exp: "「〜してはいけない」は（must not + 動詞の原形）で表します。禁止を表す表現ですね。"
        }
    ],

    grade1_lesson7_have_to_necessity: [
        {
            q: "あなたはこの部屋であなたの靴を脱ぐ必要があります",
            ans: "You have to take off your shoes in this room.",
            exp: "「〜する必要がある」は（have to + 動詞の原形）で表します。客観的な必要性を表しますね。"
        },
        {
            q: "あなたは今、あなたの宿題をする必要がありません",
            ans: "You don't have to do your homework now.",
            exp: "「〜する必要がない」は（don't have to + 動詞の原形）で表します。必要性がないという意味ですね。"
        }
    ],

    grade1_lesson7_may_able_to: [
        {
            q: "タロウは今、おふろに入っているかもしれません",
            ans: "Taro may be taking a bath now.",
            exp: "「〜かもしれない」は（may + 動詞の原形）で表します。可能性を表す助動詞ですね。"
        },
        {
            q: "私の父は3つの言語を話すことができます",
            ans: "My father is able to speak three languages.",
            exp: "「〜することができる」は（be able to + 動詞の原形）でも表せます。canと同じ意味の表現ですね。"
        }
    ],

    // 中学1年生 Lesson8 - 未来表現
    grade1_lesson8_be_going_to: [
        {
            q: "私はあしたテニスをする予定です",
            ans: "I'm going to play tennis tomorrow.",
            exp: "予定を表すときは（be going to + 動詞の原形）を使います。計画や予定を表す未来表現ですね。"
        },
        {
            q: "あなたはあしたテニスをする予定ですか",
            ans: "Are you going to play tennis tomorrow?",
            exp: "be going toの疑問文は（be動詞 + 主語 + going to + 動詞の原形?）です。be動詞の疑問文の形ですね。"
        }
    ],

    grade1_lesson8_will_prediction: [
        {
            q: "あしたは雨が降るでしょう",
            ans: "It will be rainy tomorrow.",
            exp: "予想を表すときは（will + 動詞の原形）を使います。話者の推測や予想を表す未来表現ですね。"
        },
        {
            q: "あしたは雪が降らないでしょう",
            ans: "It won't snow tomorrow.",
            exp: "willの否定形は（won't）または（will not）です。won'tはwill notの短縮形ですね。"
        }
    ],

    grade1_lesson8_should: [
        {
            q: "あなたはこの本を読むべきです",
            ans: "You should read this book.",
            exp: "「〜すべきだ」は（should + 動詞の原形）で表します。アドバイスや提案を表す助動詞ですね。"
        }
    ],

    // 中学1年生 Lesson9 - There is/are文
    grade1_lesson9_there_is_are: [
        {
            q: "私の家の近くには病院が1つあります",
            ans: "There is a hospital near my house.",
            exp: "「〜に…がある」は（There is/are + 名詞 + 場所）で表します。単数の場合は（is）を使いますね。"
        },
        {
            q: "この都市には図書館が2つあります",
            ans: "There are two libraries in this city.",
            exp: "複数の場合は（are）を使います。名詞が複数なのでlibrariesと複数形になりますね。"
        }
    ],

    grade1_lesson9_there_is_are_questions: [
        {
            q: "その部屋にはエアコンが1台ありますか",
            ans: "Is there an air conditioner in the room?",
            exp: "There is/areの疑問文は（Is/Are there + 名詞 + 場所?）になります。be動詞が前に出ますね。"
        },
        {
            q: "あなたのクラスには男子が何人いますか",
            ans: "How many boys are there in your class?",
            exp: "「いくつありますか」は（How many + 複数名詞 + are there + 場所?）で表します。数を聞く疑問文ですね。"
        }
    ],

     grade1_lesson9_look_sound: [
        {
            q: "タロウは眠そうに見えます",
            ans: "Taro looks sleepy.",
            exp: "「〜そうに見える」は（look + 形容詞）で表します。lookは感覚動詞で、後ろに形容詞をとりますね。"
        },
        {
            q: "それはよさそうに聞こえます",
            ans: "That sounds nice.",
            exp: "「〜そうに聞こえる」は（sound + 形容詞）で表します。soundも感覚動詞の一つですね。"
        }
    ],

    // 中学2年生 Review Lesson - 1年生の復習
    grade2_review_lesson_have_to_must_review: [
        {
            q: "私たちはテストの勉強をしなければなりません",
            ans: "We have to study for the test.",
            exp: "（have to + 動詞の原形）で「〜しなければならない」を表します。客観的な必要性を表現しますね。"
        },
        {
            q: "私は今、お皿を洗う必要はありません",
            ans: "I don't have to wash the dishes now.",
            exp: "（don't have to）は「〜する必要がない」という意味です。（must not）とは意味が違うので注意しましょう。"
        },
        {
            q: "私たちはお互いを助けなくてはなりません",
            ans: "We must help each other.",
            exp: "（must + 動詞の原形）で話し手の強い命令や義務を表します。話し手の意志が強く表れる表現ですね。"
        }
    ],

    grade2_review_lesson_future_review: [
        {
            q: "私の兄はもうすぐ17歳になります",
            ans: "My brother is going to be seventeen soon.",
            exp: "（be going to）は既に決まっている予定や計画を表します。確実性の高い未来を表現しますね。"
        },
        {
            q: "明日、京都は曇りでしょう",
            ans: "It will be cloudy in Kyoto tomorrow.",
            exp: "（will）は単純な未来の予想を表します。話者の推測や予想を表現する際に使いますね。"
        }
    ],

    grade2_review_lesson_there_is_are_review: [
        {
            q: "机の上に本が1冊あります",
            ans: "There is a book on the desk.",
            exp: "（There is + 単数名詞）で「〜がある」を表します。特定されていないものの存在を表現しますね。"
        },
        {
            q: "私の家族には5人います",
            ans: "There are five people in my family.",
            exp: "（There are + 複数名詞）で「〜がいる/ある」を表します。複数のものや人の存在を表現しますね。"
        }
    ],

    grade2_review_lesson_there_is_are_transformation: [
        {
            q: "There is a big park in my town. の書き換えとして正しいものは？",
            ans: "My town has a big park.",
            exp: "（There is/are）の文は（have）を使って書き換えることができます。主語を場所にして表現を変えますね。"
        }
    ],

    // 中学2年生 Lesson1 - 目的語2つ/接続詞that
    grade2_lesson1_double_object: [
        {
            q: "私の父は私にこの本を買ってくれました",
            ans: "My father bought me this book.",
            exp: "（buy + 人 + もの）の語順で「人にものを買う」を表します。人が先、ものが後の順番ですね。"
        },
        {
            q: "私はあした、あなたにEメールを送りましょう",
            ans: "I'll send you an email tomorrow.",
            exp: "（send + 人 + もの）の語順で「人にものを送る」を表します。sendも2つの目的語をとる動詞ですね。"
        },
        {
            q: "どうぞ私にあなたのお気に入りの歌手を教えてください",
            ans: "Please tell me your favorite singer.",
            exp: "（tell + 人 + もの）の語順で「人にものを教える/話す」を表します。tellも人を先に置きますね。"
        }
    ],

    grade2_lesson1_that_opinion: [
        {
            q: "私は、サッカーはとてもわくわくすると思います",
            ans: "I think that soccer is very exciting.",
            exp: "（think that + 文）で「〜だと思う」を表します。thatは意見や考えを導く接続詞ですね。"
        },
        {
            q: "私は、タロウはサッカーが大好きなことを知っています",
            ans: "I know that Taro likes soccer very much.",
            exp: "（know that + 文）で「〜ということを知っている」を表します。thatは省略可能ですが、あると分かりやすいですね。"
        },
        {
            q: "私は、数学は難しいとは思いません",
            ans: "I don't think math is difficult.",
            exp: "（I don't think）は「〜だとは思わない」という否定的な意見を表します。否定の表現方法ですね。"
        }
    ],

    grade2_lesson1_that_feeling: [
        {
            q: "私はあなたに再会してうれしいです",
            ans: "I'm glad that I met you again.",
            exp: "（I'm glad that + 文）で「〜してうれしい」を表します。喜びの気持ちとその理由を表現しますね。"
        },
        {
            q: "遅れてすみません",
            ans: "I'm sorry I'm late.",
            exp: "（I'm sorry (that) + 文）で謝罪の気持ちとその理由を表します。thatは省略されることが多いですね。"
        }
    ],

    // 中学2年生 Lesson2 - 過去進行形/接続詞
    grade2_lesson2_past_continuous: [
        {
            q: "私はそのとき音楽を聞いていました",
            ans: "I was listening to music then.",
            exp: "（was/were + 動詞のing形）で過去進行形を作ります。過去のある時点で進行中だった動作を表しますね。"
        },
        {
            q: "私の父と母はそのときテレビを見ていました",
            ans: "My father and mother were watching TV then.",
            exp: "複数の主語には（were）を使います。複数主語での過去進行形の基本パターンですね。"
        }
    ],

    grade2_lesson2_when_conjunction: [
        {
            q: "子どもだったとき、私は大阪に住んでいました",
            ans: "When I was a child, I lived in Osaka.",
            exp: "（When + 主語 + 動詞）で「〜するとき」を表します。時を表す接続詞として使われますね。"
        },
        {
            q: "私が10歳のとき、私の家族は東京に引っ越しました",
            ans: "When I was ten, my family moved to Tokyo.",
            exp: "when節は文の前にも後にも置けますが、前に置く場合はコンマが必要です。文の構造に注意しましょう。"
        }
    ],

    grade2_lesson2_if_because: [
        {
            q: "もし今度の日曜日に晴れたら、野球をしましょうよ",
            ans: "If it is sunny next Sunday, let's play baseball.",
            exp: "if節では未来のことでも現在形を使います。条件を表す接続詞の重要なルールですね。"
        },
        {
            q: "病気だったので、私は昨日学校に行きませんでした",
            ans: "I didn't go to school yesterday because I was sick.",
            exp: "（because + 主語 + 動詞）で理由を表します。理由を表す接続詞として基本的な表現ですね。"
        }
    ],

    // 中学2年生 Lesson3 - 不定詞
    grade2_lesson3_infinitive_noun: [
        {
            q: "私は北海道を訪れたいです",
            ans: "I want to visit Hokkaido.",
            exp: "（want to + 動詞の原形）で「〜したい」を表します。願望を表す不定詞の名詞的用法ですね。"
        },
        {
            q: "私は野球選手になりたいです",
            ans: "I want to be a baseball player.",
            exp: "（want to be + 名詞）で「〜になりたい」を表します。将来の夢や希望を表現する際に使いますね。"
        },
        {
            q: "タロウは毎日英語を勉強しようと努力します",
            ans: "Taro tries to study English every day.",
            exp: "（try to + 動詞の原形）で「〜しようと努力する」を表します。努力や試みを表現しますね。"
        }
    ],

    grade2_lesson3_infinitive_adverb: [
        {
            q: "私の母は卵をいくつか買うためにその店に行きました",
            ans: "My mother went to the shop to buy some eggs.",
            exp: "（to + 動詞の原形）で目的「〜するために」を表します。不定詞の副詞的用法で目的を示しますね。"
        },
        {
            q: "私は英語の先生になるために一生懸命に勉強するつもりです",
            ans: "I will study hard to be an English teacher.",
            exp: "（to be）で「〜になるために」という目的を表します。将来の目標に向かう目的を表現しますね。"
        }
    ],

    grade2_lesson3_infinitive_adjective: [
        {
            q: "私は今日、テレビを見る時間がありません",
            ans: "I have no time to watch TV today.",
            exp: "（名詞 + to + 動詞の原形）で「〜するための…」を表します。不定詞の形容詞的用法ですね。"
        },
        {
            q: "私は飲むための冷たい飲みものがほしいです",
            ans: "I want something cold to drink.",
            exp: "（something + 形容詞 + to + 動詞の原形）の語順になります。somethingを修飾する形容詞と不定詞ですね。"
        }
    ],

    // 中学2年生 Lesson4 - 動名詞
    grade2_lesson4_gerund_object: [
        {
            q: "私は昨日、この本を読み終えました",
            ans: "I finished reading this book yesterday.",
            exp: "（finish + 動名詞）で「〜することを終える」を表します。finishの後は動名詞をとりますね。"
        },
        {
            q: "私の兄はテレビゲームをすることが好きです",
            ans: "My brother likes playing video games.",
            exp: "（like + 動名詞）で「〜することが好き」を表します。好みを表す際の基本的な表現ですね。"
        }
    ],

    grade2_lesson4_gerund_subject: [
        {
            q: "テニスをすることはとてもおもしろいです",
            ans: "Playing tennis is a lot of fun.",
            exp: "動名詞が主語になり、三人称単数として扱われます。動名詞の主語としての使い方ですね。"
        },
        {
            q: "この川で泳ぐことは危険です",
            ans: "Swimming in this river is dangerous.",
            exp: "動名詞句が主語になっています。動名詞句全体で一つの主語として機能しますね。"
        }
    ],

    grade2_lesson4_teach_tell_that: [
        {
            q: "母は私に、他人に親切にすることは大切だと教えました",
            ans: "My mother taught me that being kind to others is important.",
            exp: "（teach + 人 + that + 文）で「人に〜ということを教える」を表します。教える内容をthat節で表現しますね。"
        },
        {
            q: "ケンタは私に、京都を訪れる予定だと伝えました",
            ans: "Kenta told me that he was going to visit Kyoto.",
            exp: "（tell + 人 + that + 文）で「人に〜ということを伝える」を表します。伝える内容をthat節で示しますね。"
        }
    ],

    // 中学2年生 Lesson5 - 不定詞の発展
    grade2_lesson5_how_to_what_to: [
        {
            q: "私はチェスのやり方を知りません",
            ans: "I don't know how to play chess.",
            exp: "（how to + 動詞の原形）で「〜の仕方」を表します。方法や手順を表す疑問詞+不定詞ですね。"
        },
        {
            q: "私はタロウに何と言えばよいかわかりませんでした",
            ans: "I didn't know what to say to Taro.",
            exp: "（what to + 動詞の原形）で「何を〜すべきか」を表します。選択や判断を表す表現ですね。"
        }
    ],

    grade2_lesson5_it_is_to: [
        {
            q: "30分でこの宿題をすることは私には難しいです",
            ans: "It is difficult for me to do this homework in 30 minutes.",
            exp: "（It is + 形容詞 + for + 人 + to + 動詞の原形）で「人にとって〜することは…だ」を表します。"
        },
        {
            q: "この川で泳ぐことは危険です",
            ans: "It is dangerous to swim in this river.",
            exp: "（It is + 形容詞 + to + 動詞の原形）で「〜することは…だ」を表します。一般的な判断を示しますね。"
        }
    ],

    grade2_lesson5_teach_ask_how_to: [
        {
            q: "ボブは私にジャック・オ・ランタンのつくり方を教えました",
            ans: "Bob taught me how to make a jack-o'-lantern.",
            exp: "（teach + 人 + how to + 動詞の原形）で「人に〜の仕方を教える」を表します。技術や方法を教える表現ですね。"
        },
        {
            q: "あの男性は私に図書館への行き方をたずねました",
            ans: "That man asked me how to get to the library.",
            exp: "（ask + 人 + how to + 動詞の原形）で「人に〜の仕方をたずねる」を表します。質問や依頼の表現ですね。"
        }
    ],

    // 中学2年生 Lesson6 - 比較
    grade2_lesson6_comparative: [
        {
            q: "タロウの犬は私の犬よりも大きいです",
            ans: "Taro's dog is larger than mine.",
            exp: "（比較級 + than）で「〜よりも…だ」を表します。2つのものを比べる基本的な表現ですね。"
        },
        {
            q: "私には、理科は数学よりも難しいです",
            ans: "Science is more difficult than math to me.",
            exp: "長い語は（more + 原級 + than）で比較級を作ります。3音節以上の形容詞の比較級ですね。"
        }
    ],

    grade2_lesson6_superlative: [
        {
            q: "タロウはその5人の少年の中でいちばん速く走ることができます",
            ans: "Taro can run the fastest of the five boys.",
            exp: "（the + 最上級 + of）で「〜の中でいちばん…だ」を表します。範囲を示すofを使いますね。"
        },
        {
            q: "日本でいちばん人気のある歌手は誰ですか",
            ans: "Who is the most popular singer in Japan?",
            exp: "（the most + 原級 + in）で「〜の中でいちばん…な」を表します。場所を示すinを使いますね。"
        }
    ],

    grade2_lesson6_as_as: [
        {
            q: "タロウはジロウと同じくらい上手に英語を話すことができます",
            ans: "Taro can speak English as well as Jiro.",
            exp: "（as + 原級 + as）で「〜と同じくらい…だ」を表します。同等比較の基本的な表現ですね。"
        },
        {
            q: "私は犬よりも猫のほうが好きです",
            ans: "I like cats better than dogs.",
            exp: "（like A better than B）で「BよりもAのほうが好き」を表します。好みの比較表現ですね。"
        }
    ],

    grade2_lesson6_comparison_rules: [
        {
            q: "big の比較級・最上級は？",
            ans: "bigger - biggest",
            exp: "短母音+子音字で終わる語は（子音字を重ねてer, est）をつけます。bigは短い単語の変化パターンですね。"
        },
        {
            q: "interesting の比較級は？",
            ans: "more interesting",
            exp: "長い語は（more/most）を使って比較級・最上級を作ります。3音節以上の形容詞の基本ルールですね。"
        }
    ],

    grade2_lesson6_comparison_transformation: [
        {
            q: "My dog is smaller than Taro's. の書き換えは？",
            ans: "Taro's dog is larger than mine.",
            exp: "比較の主語と目的語を入れ替えて反対の意味の形容詞を使います。比較文の書き換えテクニックですね。"
        }
    ],

    grade2_lesson6_comparison_notes: [
        {
            q: "Ken is as old as Emi. の意味は？",
            ans: "ケンはエミと同じくらいの年齢です。",
            exp: "（as old as）は年齢が同じであることを表し、実際の年齢に関係なく使えます。年齢比較の表現ですね。"
        }
    ],

    // 中学2年生 Lesson7 - 受動態
    grade2_lesson7_passive_voice: [
        {
            q: "英語は世界の多くの国で使われています",
            ans: "English is used in many countries in the world.",
            exp: "（be動詞 + 過去分詞）で受動態を作ります。動作を受ける側を主語にする表現ですね。"
        },
        {
            q: "この歌は多くの人に愛されています",
            ans: "This song is loved by many people.",
            exp: "（be動詞 + 過去分詞 + by）で「〜によって…される」を表します。動作主をbyで示しますね。"
        }
    ],

    grade2_lesson7_passive_questions: [
        {
            q: "この本は夏目漱石によって書かれました",
            ans: "This book was written by Natsume Soseki.",
            exp: "過去の受動態は（was/were + 過去分詞）で表します。過去に行われた動作の受動態ですね。"
        },
        {
            q: "この本はだれによって書かれましたか",
            ans: "Who was this book written by?",
            exp: "（疑問詞 + be動詞 + 主語 + 過去分詞 + by）の語順になります。受動態の疑問文の基本形ですね。"
        }
    ],

    grade2_lesson7_passive_modal: [
        {
            q: "富士山は冬にここから見えます",
            ans: "Mt. Fuji can be seen from here in winter.",
            exp: "（助動詞 + be + 過去分詞）で受動態を作ります。助動詞と受動態の組み合わせですね。"
        },
        {
            q: "この事実はすぐに多くの人に知られるでしょう",
            ans: "This fact will be known to many people soon.",
            exp: "（will be + 過去分詞）で未来の受動態を表します。未来に起こる動作の受動態ですね。"
        }
    ],

    grade2_lesson7_past_participle_rules: [
        {
            q: "play の過去分詞は？",
            ans: "played",
            exp: "規則動詞の過去分詞は過去形と同じで（(e)d）をつけます。規則変化の基本パターンですね。"
        },
        {
            q: "take の過去分詞は？",
            ans: "taken",
            exp: "不規則動詞の過去分詞は覚える必要があります。take-took-takenの変化パターンですね。"
        }
    ],

    grade2_lesson7_passive_transformation: [
        {
            q: "They sang the song. を受動態に書き換えると？",
            ans: "The song was sung by them.",
            exp: "能動態の目的語を主語にして、（be動詞+過去分詞）で受動態を作ります。能動態から受動態への変換ですね。"
        }
    ],

    // 中学2年生 Lesson8 - 間接疑問文/感嘆文
    grade2_lesson8_indirect_questions_know: [
        {
            q: "私はあなたの誕生日がいつか知りません",
            ans: "I don't know when your birthday is.",
            exp: "間接疑問では（主語+動詞）の語順になります。疑問詞の後は平叙文の語順に変わりますね。"
        },
        {
            q: "私はだれがこの手紙を書いたのか知っています",
            ans: "I know who wrote this letter.",
            exp: "疑問詞が主語の場合は語順が変わりません。whoが主語として機能している間接疑問ですね。"
        },
        {
            q: "私はタロウがどこに住んでいるか知りません",
            ans: "I don't know where Taro lives.",
            exp: "間接疑問では（疑問詞+主語+動詞）の語順になります。間接疑問文の基本的な語順ですね。"
        }
    ],

    grade2_lesson8_indirect_questions_tell: [
        {
            q: "ケンタは私に、そのテストがどのくらい難しかったかを話しました",
            ans: "Kenta told me how difficult the test was.",
            exp: "（how + 形容詞 + 主語 + 動詞）の語順になります。程度を表すhowを使った間接疑問ですね。"
        },
        {
            q: "どうぞ私に、ここから駅までどれくらいか教えてください",
            ans: "Please tell me how far it is from here to the station.",
            exp: "（how far + 主語 + 動詞）の語順で間接疑問を作ります。距離を表すhow farの間接疑問ですね。"
        }
    ],

    grade2_lesson8_exclamatory: [
        {
            q: "なんて簡単な仕事なのでしょう",
            ans: "What an easy job!",
            exp: "（What + a/an + 形容詞 + 名詞!）で感嘆文を作ります。驚きや感動を表す基本的な感嘆文ですね。"
        },
        {
            q: "なんてかっこいいのでしょう",
            ans: "How cool!",
            exp: "（How + 形容詞!）で感嘆文を作ります。形容詞だけを強調する感嘆文の形ですね。"
        }
    ],

    // 中学2年生 Lesson9 - 動詞の様々な使い方
    grade2_lesson9_make_call: [
        {
            q: "その知らせは私を幸せな気持ちにしました",
            ans: "The news made me happy.",
            exp: "（make + 人 + 形容詞）で「人を〜な気持ちにする」を表します。感情の変化を表す表現ですね。"
        },
        {
            q: "私たちはこの花を英語でローズと呼びます",
            ans: "We call this flower a rose in English.",
            exp: "（call + 人・もの + 名詞）で「〜と呼ぶ」を表します。名前や呼び方を表す動詞の使い方ですね。"
        }
    ],

    grade2_lesson9_want_ask_to: [
        {
            q: "私はあなたに、この歌を英語で歌ってほしいです",
            ans: "I want you to sing this song in English.",
            exp: "（want + 人 + to + 動詞の原形）で「人に〜してほしい」を表します。他人への願望を表現しますね。"
        },
        {
            q: "私は父に、カレーを料理してほしいと頼みました",
            ans: "I asked my father to cook curry.",
            exp: "（ask + 人 + to + 動詞の原形）で「人に〜するよう頼む」を表します。依頼を表す基本的な表現ですね。"
        }
    ],

    grade2_lesson9_let_help: [
        {
            q: "私の冬休みについて話させてください",
            ans: "Let me talk about my winter vacation.",
            exp: "（let + 人 + 動詞の原形）で「人が〜することを許す」を表します。許可を求める丁寧な表現ですね。"
        },
        {
            q: "ボブは私が英語の宿題をするのを手伝ってくれました",
            ans: "Bob helped me do my English homework.",
            exp: "（help + 人 + 動詞の原形）で「人が〜することを手伝う」を表します。手助けを表す基本的な表現ですね。"
        }
    ],

    // 中学3年生 Review Lesson - 2年生の復習
    grade3_review_lesson_how_to_what_to_review: [
        {
            q: "あなたはその登場人物の描き方を知っていますか",
            ans: "Do you know how to draw the character?",
            exp: "（how to + 動詞の原形）で「〜の仕方」を表します。方法や技術を表す疑問詞+不定詞ですね。"
        },
        {
            q: "私は次に何をすべきか知りません",
            ans: "I don't know what to do next.",
            exp: "（what to + 動詞の原形）で「何を〜すべきか」を表します。選択や判断を表す表現ですね。"
        }
    ],

    grade3_review_lesson_make_call_review: [
        {
            q: "人々はその塔をビッグ・ベンと呼んでいます",
            ans: "People call the tower Big Ben.",
            exp: "（call + もの + 名前）で「〜を…と呼ぶ」を表します。名前や愛称を表す動詞の使い方ですね。"
        },
        {
            q: "その知らせは私を悲しませます",
            ans: "The news makes me sad.",
            exp: "（make + 人 + 形容詞）で「人を〜な気持ちにする」を表します。感情の変化を表現する重要な構文ですね。"
        }
    ],

    grade3_review_lesson_it_is_to_review: [
        {
            q: "私のバランスを保つことは私には困難でした",
            ans: "It was hard for me to keep my balance.",
            exp: "（It is + 形容詞 + for + 人 + to + 動詞の原形）で「人にとって〜することは…だ」を表します。"
        }
    ],

    // 中学3年生 Lesson1 - 現在完了形(1)
    grade3_lesson1_present_perfect_completion: [
        {
            q: "私はちょうど旅行の計画をつくり終えたところです",
            ans: "I have just finished making plans for a trip!",
            exp: "（have + 過去分詞 + just）で完了「ちょうど〜したところ」を表します。現在完了形の完了用法ですね。"
        },
        {
            q: "タロウはすでに彼の部屋を掃除してしまいました",
            ans: "Taro has already cleaned his room.",
            exp: "（have + already + 過去分詞）で「すでに〜してしまった」を表します。完了を強調する副詞alreadyですね。"
        }
    ],

    grade3_lesson1_present_perfect_experience: [
        {
            q: "私はUFOを2回見たことがあります",
            ans: "I have seen a UFO twice.",
            exp: "（have + 過去分詞）で経験「〜したことがある」を表します。現在完了形の経験用法の基本形ですね。"
        },
        {
            q: "私は一度も富士山に登ったことがありません",
            ans: "I have never climbed Mt. Fuji.",
            exp: "（have never + 過去分詞）で「一度も〜したことがない」を表します。否定の経験を表現しますね。"
        }
    ],

    grade3_lesson1_present_perfect_experience_questions: [
        {
            q: "あなたは今までに北海道に行ったことがありますか？",
            ans: "Have you ever been to Hokkaido?",
            exp: "（Have + 主語 + ever + 過去分詞）で経験の疑問文を作ります。everは経験を聞くときの重要な副詞ですね。"
        },
        {
            q: "はい、あります。／いいえ、ありません。",
            ans: "Yes, I have. / No, I haven't.",
            exp: "現在完了形の疑問文には（have/has）で答えます。助動詞で答えるのが現在完了形の特徴ですね。"
        }
    ],

    // 中学3年生 Lesson2 - 現在完了形(2)
    grade3_lesson2_present_perfect_continuation: [
        {
            q: "私は10年間、日本に住んでいます",
            ans: "I have lived in Japan for 10 years.",
            exp: "（have + 過去分詞 + for）で継続「〜の間ずっと」を表します。期間を表すforと組み合わせますね。"
        },
        {
            q: "私は子どもだったとき以来タロウを知っています",
            ans: "I have known Taro since I was a child.",
            exp: "（have + 過去分詞 + since）で「〜以来ずっと」を表します。起点を表すsinceと組み合わせますね。"
        }
    ],

    grade3_lesson2_present_perfect_continuation_questions: [
        {
            q: "あなたはどのくらい日本に住んでいますか？",
            ans: "How long have you lived in Japan?",
            exp: "（How long + have + 主語 + 過去分詞）で継続期間を聞きます。継続用法での期間を問う疑問文ですね。"
        },
        {
            q: "12年間です",
            ans: "For 12 years.",
            exp: "期間を答える時は（For）を使います。継続期間を表すforの基本的な使い方ですね。"
        }
    ],

    grade3_lesson2_present_perfect_continuous: [
        {
            q: "彼はけさからずっとテレビゲームをしています",
            ans: "He has been playing video games since this morning.",
            exp: "（have been + 動詞のing形）で動作の継続を表します。現在完了進行形で動作の継続を強調しますね。"
        },
        {
            q: "キング先生は2015年から、日本でずっと英語を教えています",
            ans: "Ms. King has been teaching English in Japan since 2015.",
            exp: "現在完了進行形で動作の継続を強調します。継続している動作をより生き生きと表現できますね。"
        }
    ],

    // 中学3年生 Lesson3 - 後置修飾
    grade3_lesson3_participle_present: [
        {
            q: "門の前に立っている男性は警察官です",
            ans: "The man standing in front of the gate is a police officer.",
            exp: "（名詞 + 動詞のing形）で「〜している…」を表します。現在分詞による後置修飾の基本形ですね。"
        },
        {
            q: "あそこでテニスをしている少年を見なさい",
            ans: "Look at the boy playing tennis over there.",
            exp: "現在分詞が名詞を後ろから修飾します。進行中の動作を表現する後置修飾ですね。"
        }
    ],

    grade3_lesson3_participle_past: [
        {
            q: "この本にはロンドンで撮られた多くの写真が載っています",
            ans: "This book has a lot of pictures taken in London.",
            exp: "（名詞 + 過去分詞）で「〜された…」を表します。過去分詞による後置修飾で受動の関係を示しますね。"
        },
        {
            q: "メキシコで話されている言語はスペイン語です",
            ans: "The language spoken in Mexico is Spanish.",
            exp: "過去分詞が名詞を後ろから修飾します。受動的な関係を表現する後置修飾ですね。"
        }
    ],

    grade3_lesson3_relative_pronoun_omission: [
        {
            q: "これは私がロンドンで買った本です",
            ans: "This is the book I bought in London.",
            exp: "目的格の関係代名詞は省略できます。関係代名詞を省略したより自然な表現ですね。"
        },
        {
            q: "父が私にくれたプレゼントは素敵なカメラでした",
            ans: "The present my father gave me was a nice camera.",
            exp: "関係代名詞が省略された後置修飾です。目的格の関係代名詞の省略は日常的によく使われますね。"
        }
    ],

    // 中学3年生 Lesson4 - 関係代名詞
    grade3_lesson4_relative_pronoun_who: [
        {
            q: "それはすばらしい道具をつくったある男性についての本です",
            ans: "It's a book about a man who made a wonderful tool.",
            exp: "人を先行詞とする場合は（who）を使います。人を表す先行詞には主格のwhoが基本ですね。"
        },
        {
            q: "長い髪をした女性を見てごらん",
            ans: "Look at the woman who has long hair.",
            exp: "主格の関係代名詞（who）が主語の働きをします。関係代名詞が文の主語として機能しますね。"
        }
    ],

    grade3_lesson4_relative_pronoun_which: [
        {
            q: "彼は多くの国で使われている道具をつくりました",
            ans: "He made a tool which is used in many countries.",
            exp: "物を先行詞とする場合は（which）を使います。物や動物を表す先行詞にはwhichを使いますね。"
        },
        {
            q: "ジロウはとても上手に泳げるイヌを飼っています",
            ans: "Jiro has a dog which swims well.",
            exp: "動物を先行詞とする場合も（which）を使えます。動物もwhichで受けることができますね。"
        }
    ],

    grade3_lesson4_relative_pronoun_object: [
        {
            q: "私が昨日読んだ本はとてもおもしろかったです",
            ans: "The book that I read yesterday was very interesting.",
            exp: "目的格の関係代名詞（that）を使って表現できます。目的格は省略も可能な関係代名詞ですね。"
        }
    ],

    // 中学3年生 Lesson5 - 仮定法
    grade3_lesson5_subjunctive_1: [
        {
            q: "1,000万円持っていたら、私は世界一周旅行をするのになあ",
            ans: "If I had 10 million yen, I would travel around the world.",
            exp: "（If + 過去形, 主語 + would + 原形）で仮定法過去を作ります。実現の可能性が低い仮定を表しますね。"
        },
        {
            q: "もし私に兄弟がいたら、私は彼とテニスをするのになあ",
            ans: "If I had a brother, I would play tennis with him.",
            exp: "実際にはいない兄弟について仮定しています。現実とは異なる状況を仮定する仮定法過去ですね。"
        }
    ],

    grade3_lesson5_subjunctive_2: [
        {
            q: "もし私がお金持ちだったら、学校に行けない子どもたちを助けるのになあ",
            ans: "If I were rich, I would help children who cannot go to school.",
            exp: "仮定法過去では主語に関係なく（were）を使うのが原則です。仮定法でのbe動詞の特別な形ですね。"
        },
        {
            q: "もし私があなただったら、私はそのようなことをしないのになあ",
            ans: "If I were you, I wouldn't do such a thing.",
            exp: "（If I were you）は「もし私があなたの立場だったら」という決まった表現です。アドバイスでよく使いますね。"
        }
    ],

    grade3_lesson5_subjunctive_3: [
        {
            q: "私がお金持ちだったらなあ",
            ans: "I wish I were rich.",
            exp: "（I wish + 仮定法過去）で実現困難な願望を表します。現実とは違う願いを表現する構文ですね。"
        },
        {
            q: "私がドイツ語をじょうずに話せたらなあ",
            ans: "I wish I could speak German well.",
            exp: "（I wish I could）で能力についての願望を表します。実現困難な能力への憧れを表現しますね。"
        }
    ],

    // 中学3年生 Lesson6 - 後置修飾と関係代名詞のまとめ
    grade3_lesson6_postposition_ing: [
        {
            q: "あそこでテニスをしている少年を見なさい",
            ans: "Look at the boy playing tennis over there.",
            exp: "現在分詞による後置修飾は関係代名詞を使って書き換えできます。より簡潔で自然な表現方法ですね。"
        }
    ],

    grade3_lesson6_postposition_past_participle: [
        {
            q: "私の父はイギリス製の自動車を2台持っています",
            ans: "My father has two cars made in England.",
            exp: "過去分詞による後置修飾も関係代名詞で書き換えできます。「イギリスで作られた車」という意味ですね。"
        }
    ],

    grade3_lesson6_postposition_omission: [
        {
            q: "これは私が3年前に描いた絵です",
            ans: "This is a picture I painted three years ago.",
            exp: "目的格の関係代名詞は省略されることが多いです。会話では省略形がより自然に聞こえますね。"
        }
    ],

    grade3_lesson6_relative_summary: [
        {
            q: "漱石は『坊っちゃん』を書いた小説家でした",
            ans: "Soseki was the novelist who wrote Botchan.",
            exp: "人を先行詞とする主格の関係代名詞には（who）を使います。人の職業や特徴を説明する基本的な構文ですね。"
        }
    ],

    grade3_lesson6_sentence_transformation: [
        {
            q: "The language spoken in Australia is English. の関係代名詞を使った書き換えは？",
            ans: "The language they speak in Australia is English.",
            exp: "過去分詞による後置修飾は目的格の関係代名詞の省略形に書き換えできます。文の構造を変える書き換え技法ですね。"
        }
    ]
};
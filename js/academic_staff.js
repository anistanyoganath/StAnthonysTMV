const teachers = [
'Mrs.A.Augustine-2003-English',
'Mrs.V.Ramesh-2005-Hindu culture',
'Mr.S.Pradeepan-2005-ICT,GIT',
'Mrs.K.Anupama-2006-Tamil,Tamil Lit',
'Mrs.R.Kavithanjali-2009-Primary',
'Mrs.K.Kamaleswary-2011-Arts,PTS,Commerce',
'Mrs.J.Jecintha-2012-Primary',
'Mrs.V.Leela-2012-Primary',
'Mrs.S.Pushpamala-2012-Tamil,ICT',
'Mrs.H.Neeladchi-2012-Hinduism,Tamil, History,LC',
'Mrs.B.Nandakumar-2013-Tamil,Tamil Lit',
'Mrs.C.Prabagar-2013-H.Econ,Art,PTS',
'Mrs.T.P.Sundaresan-2013-Science,Health Science',
'Mrs.C.K.C.Jude-2013-Primary',
'Mrs.N.C.N.Fernando-2013-Economics',
'Mrs.I.Kuhendran-2014-English',
'Mrs.P.Thilagam-2014-Primary',
'Miss.W.M.A.Dilrukshi-2014-Sinhala',
'Mrs.U.Muralee-2015-Primary',
'Mrs.N.Sakunthala-2015-Maths',
//'Mrs.R.Subashini',
'Mrs.R.Yogaletchumi-2016-Primary',
'Mrs.S.M.SaraswathiDevi-2016-Poltical Science, Health Science',
'Mrs.V.Srichandran-2016-Tamil, Pts, History, G.K',
'Miss.L.Jayakala-2016-English',
'Mrs.S.Uma-2016-Science, Health science',
'Mrs.T.Dhanushini-2016-Geography,History',
'Mrs.G.Thilagaswari-2016-English',
'Mr.A.Ronyrajan-2016-Christianity, Geography, History',
'Mrs.P.Venkadaramani-2017-Music,Religion',
'Mrs.S.Subashini-2017-Art',
'Mr.V.Athavan-2017-Drama',
'Mrs.D.Kavitha-2017-ICT,History',
'Miss.T.M.Patricia-2017-Religion',
'Mr.K.Sutharshan-2017-Accounts',
'Mrs.A.J.Arul Rajan-2018-Accounts',
'Mrs.M.E.I.Wimalasena-2018-Tamil',
'Mrs.S.Jeyamary-2018-Home Economics',
'Mrs.A.Helen Rose-2019-Primary',
//'Miss.V.Subashini-',
'Mrs.K.Yasotha-2019-Dance',
'Mrs.D.Basil-2020-Primary',
'Mr.S.Ramanathan-2020-History',
'Mr.S.Anthonysami-2020-Primary',
//'Mrs.S.Yogakumari',
'Mrs.R.Yogakumari-2020-History, Geography, Civil',
'Miss.M.R.Raheema-2021-English'
];
for (teacher of teachers) {
    document.getElementById('teachers-table').innerHTML+=
    `<div class="table-row">
        <div class="country">${teacher.split('-')[0]}</div>
        <div class="percentage"><a href="#">${teacher.split('-')[2]}</a></div>
        <div class="visit">${teacher.split('-')[1]}</div>
     </div>`
}

const prefects = [
    'U.Yuwan Kumar-A/L(2021)-Prefect',
    'A.Yoganath-A/L(2021)-Head Prefect',
    'R.Siranjeevi-A/L(2021)-Prefect',
    'D.Anton-A/L(2021)-Prefect',
    'E.Mathew-A/L(2021)-Prefect',
    'V.David-A/L(2021)-Prefect',
    'P.Sasidharan-A/L(2021)-Prefect',
    'V.Akila-A/L(2021)-Prefect',
    'S.Indu-A/L(2021)-Prefect',
    'V.Abishek-A/L(2022)-Prefect',
    'K.Krishanthan-A/L(2022)-Prefect',
    'S.Dilakshi-A/L(2022)-Prefect',
    'S.Nandani-A/L(2022)-Prefect',
    'S.Durshika-A/L(2022)-Prefect',
    'P.Kanjana-A/L(2022)-Prefect',
    'R.Jerusha-A/L(2022)-Prefect',
    'R.Ruth Dilshani-A/L(2022)-Head Prefect',
    'A.Roshan-A/L(2022)-Prefect',
    'Jesuran-A/L(2022)-Prefect',
    'Dinesh Gajan-A/L(2022)-Prefect',
    'C.Kishan-A/L(2022)-Prefect',
    'K.Nivedika-A/L(2022)-Prefect',
    'S.Kishani-A/L(2022)-Prefect',
    'Jenny-A/L(2022)-Prefect',
    'J.Priyanka-A/L(2022)-Prefect',
    'C.Abilashani-A/L(2022)-Prefect',
    'R.Lodia-A/L(2022)-Prefect',
    'S.Jothika-A/L(2022)-Prefect',
    'Thanuja-A/L(2022)-Prefect',
    'S.Anitha-11A-Prefect',
    'V.Abilasha-11A-Prefect',
    'V.Dilukshani-11A-Prefect',
    'C.Stella-11B-Prefect',
    'J.Deshani-11B-Prefect',
    'S.Sarangi-11B-Prefect',
    'R.F.Hensalin-10A-Helper',
    'S.Sivatharani-10A-Helper',
    'M.Saranya-10A-Helper',
    'A.Krishan Kumar-10A-Helper',
    'J.Agileshwaran-10A-Helper',
    'S.Yaswini-10B-Helper',
    'R.Abinaya-10B-Helper',
    'S.Ariya-10B-Helper',
    'A.Andrew-10B-Helper',
    'Lonika-10B-Helper',
    'Yoshodini-10B-Helper',
    'S.Lashani-10B-Helper',
    'keerthika-9A-Helper',
    'Hifa-9A-Helper',
    'V.Vindiya-9A-Helper',
    'Kristhika-9A-Helper',
    'Vinothini-9A-Helper',
    'R.Jude Soloman-9B-Helper',
    'M.N.Nuzran-9B-Helper'
    
    
];                                            
for (prefect of prefects){
    document.getElementById('prefects-table').innerHTML+=
   `<div class="table-row">
        <div class="country">${prefect.split('-')[0]}</div>
        <div class="visit">${prefect.split('-')[1]}</div>
        <div class="percentage"><a href="#">${prefect.split('-')[2]}</a></div>
    </div>`
}                                             
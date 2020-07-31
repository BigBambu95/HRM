const workers = [
  {
    id: 1,
    name: 'Кирилл Зайцев',
    profession: 'UI/UX дизайнер',
    email: 'kirill.zaycev@gmail.com',
    phone: '8 (999) 999-99-99',
    department: 'Разработка',
    office: 'Ростов-на-Дону',
    avatar: 'https://s3-alpha-sig.figma.com/img/d0eb/c21d/2d1c34371e75b7aa01d307de087e7a12?Expires=1562544000&Signature=E5T3-wP8TkHHCeyZF00VQWO5mZz6xA~jOLpWRvDB5q6j9RgcnOqe39DQTuDU8N-yEVCfLvynzUe7Rs0xDNrc80Tw12df1-K3R955aZ2i9FHctyWHjGZI66w7iFpFpwYuyh~7L9upOeAiTrTnVi3BT9~i4gtBR43fIUIf6Yrtj309eHCFW2YQXRdoWFJyUD5N~G~gxYkrEBzNTr6jL~JHYOtLr5otvyX6TsolJevCRM-d5aCn33YkWe9IGVOF8LlvYOyn5wifmbmdsCoNRij3Bq9fcSNXBAseV5jaoOQhiyTU6EVtMRxaro~eXFDZq-mvxQJpz9D5SRBhVPDqtK5kMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    status: 'mission',
    information: [
      {
        2019: [
          {
            July: {
              hourlySalary: 1000,
              hoursWorked: 120,
              kpi: 96,
              otherFees: 20000,
              lateness: 2,
              absenteeism: 0,
            },
            April: {
              hourlySalary: 900,
              hoursWorked: 110,
              kpi: 90,
              otherFees: 15000,
              lateness: 0,
              absenteeism: 0,
            },
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Андрей Кольман',
    profession: 'Front-end разработчик',
    email: 'andrey@gmail.com',
    phone: '8 (999) 999-99-99',
    department: 'Разработка',
    office: 'Москва',
    avatar: 'https://pp.userapi.com/c623900/v623900028/626c3/TJ9tAywL4lo.jpg',
    status: 'work',
    information: [
      {
        id: 1,
        July: {
          hourlySalary: 1000,
          hoursWorked: 120,
          kpi: 96,
          otherFees: 10000,
          lateness: 2,
          absenteeism: 0,
        },
      },

    ],
    documents: [
      {
        name: 'Ксерокопия паспорта',
        path: '',
      },
      {
        name: 'Договор',
        path: '',
      },
      {
        name: 'Тестовая работа',
        path: '',
      },
    ],
    history: [
      {
        name: 'Увеличили часовую ставку',
        date: '15.11.18',
      },
      {
        name: 'Прошел испытательный срок',
        date: '12.09.18',
      },
      {
        name: 'Устроился на работу',
        date: '12.08.18',
      },
    ],
  },
  {
    id: 3,
    name: 'Сергей Тёркин',
    profession: 'UI/UX дизайнер',
    email: 'sergey.terkin@gmail.com',
    phone: '8 (999) 999-99-99',
    department: 'Разработка',
    office: 'Ростов-на-Дону',
    avatar: 'https://s3-alpha-sig.figma.com/img/63f6/1550/38e2c38f4216d60a5e3fd8515c1e2d83?Expires=1562544000&Signature=YU2~jVMZ9H~qbGmH2hObqoOcd3a6lWzmieAltdHJnY0t1UCi-LcYcNRBG2N0KqO9~dahXONKbiNo6o3M-Jo3gLCLsYxjHmxl52kyBkXXSjv6WRgG3CPTrrIuClNx6BCX8ne5LXwJAcDOXpYxJC5qB~EDyE7kHY7KySH5w83ap7RyyeiMWAtrXI~4VQ9XUlW3NxZPJ8wbO6rCOiBfePySnZ3v2eIYHepMpX-3Qfiyr-wAt9UMOY2iuIukvMNRnI099kVgk5vVaUqv3Zk-~sARNJxeSifYvL8TOZh5bBF-4OXJ2Op~kA-dQvpTtX~mzWQga5z28pMmxkNwSTzqPao5FA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    status: 'vacation',
    information: [
      {
        id: 1,
        July: {
          hourlySalary: 800,
          hoursWorked: 100,
          kpi: 90,
          otherFees: 10000,
          lateness: 3,
          absenteeism: 0,
        },
      },

    ],
  },
  {
    id: 4,
    name: 'Василиса Прекрасная',
    profession: 'Менеджер по продажам',
    email: 'Vasilisa.prelest@gmail.com',
    phone: '8 (999) 999-99-99',
    department: 'Продажи',
    office: 'Москва',
    avatar: 'https://s3-alpha-sig.figma.com/img/4486/9335/5b3f0040fee45e3319a4a6925804e602?Expires=1562544000&Signature=EGuf1SGNSl6yUkXWbFhQm1k~fmXuFCOo6UVo7IuRk7dHvt4l-ne5VwM~lnxhIdrP60vxetMuzQhc3lcvCGRbGcMgrCC5HlE2qjtp2IXiVcuW20hTCzcU4rnewKceyBLdH6NXMIxp9noj6vwV9T92DRWHR9oSPbsgP5-GoQb3m1TNKMhAmaLz1P8nl9k3Do1yxVfFFYyHAQPN0reuWcJNSJR0YQQ~ulV8wzvMiJ3GMPN7cFPgTBc4c5gJwD4JOPmCLgB8t~q5GcnTZ5qepCAAE2T5GrAeaRgFS7i3AUj7nC0-ki6zLHtHERuSbVuXuHYEi0cI2RQkDo37kUEqjRKglA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    status: 'reason',
    information: [
      {
        id: 1,
        July: {
          hourlySalary: 750,
          hoursWorked: 130,
          kpi: 93,
          otherFees: 15000,
          lateness: 4,
          absenteeism: 1,
        },
      },
    ],
  },
  {
    id: 5,
    name: 'Алиса Коробкова',
    profession: 'Проектировщик',
    email: 'Alica@gmail.com',
    phone: '8 (999) 999-99-99',
    department: 'Разработка',
    office: 'Ростов-на-Дону',
    avatar: 'https://s3-alpha-sig.figma.com/img/f6d8/7828/6a0a8006ab70414348791b540e1df644?Expires=1563753600&Signature=f8XwKAP2nmSxAToknCH5SRoJumcPpHG9jX16-8tscRxhFznt83G8SsJjvJQ42zJagiwtFQ2tVVWaia9y2FUQCVvzwjkHFQDpjEHPHnLWdXY713sRmtaH3nLQ-iQux8NP3gkojqeVZ2g9rSfb0IDDRsBp-FsT~MN9E8RqvglMYE6TMm2PGpSC1sByKPJ5Ww0pkeOZhNMaoIdpFSC0Ui52jFGlppwHfnF3J3BfR8DNt2rnpeTk6Q5BUmTymkf4cz5TWVZ8svLGREugR7hSuJJ4YnqjUcujGiYZzr-j1VSNyltTYKLed8n1s-rm540NTbpIt5Tk~ngiicEp1S080PRoLg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
    status: 'vacation',
    information: [
      {
        id: 1,
        July: {
          hourlySalary: 1000,
          hoursWorked: 120,
          kpi: 96,
          otherFees: 5000,
          lateness: 2,
          absenteeism: 0,
        },
      },

    ],
  },
];

export default workers 
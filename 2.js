const data =
    {
        "group": "bbmo",
        "students": [
            {
                "name": "Bazenga Marjello",
                "bd": "27.04.2000",
                "lessons": [{
                    "title": "YPI",
                    "date": "2023-06-18",
                    "Professor": "Sachkov V.E.",
                    "Score": "3"
                },
                    {
                        "title": "Machine Learning",
                        "date": "2023-07-01",
                        "Professor": "Kazachok A.V.",
                        "Score": "5"
                    },{
                        "title": "TOFU",
                        "date": "2023-06-23",
                        "Professor": "Pantuhin D.V",
                        "Score": "5"
                    }
                ]
            },{
                "name": "Kurganov Ilya",
                "bd": "27.07.2000",
                "lessons": [{
                    "title": "YPI",
                    "date": "2023-06-18",
                    "Professor": "Sachkov V.E.",
                    "Score": "4"
                },
                    {
                        "title": "Machine Learning",
                        "date": "2023-07-01",
                        "Professor": "Kazachok A.V.",
                        "Score": "5"
                    },{
                        "title": "TOFU",
                        "date": "2023-06-23",
                        "Professor": "Pantuhin D.V",
                        "Score": "5"
                    }
                ]
            },{
                "name": "Kutnyahov Artem",
                "bd": "27.05.2000",
                "lessons": [{
                    "title": "YPI",
                    "date": "2023-06-18",
                    "Professor": "Sachkov V.E.",
                    "Score": "3"
                },
                    {
                        "title": "Machine Learning",
                        "date": "2023-07-01",
                        "Professor": "Kazachok A.V.",
                        "Score": "3"
                    },{
                        "title": "TOFU",
                        "date": "2023-06-23",
                        "Professor": "Pantuhin D.V",
                        "Score": 3
                    }
                ]
            }
        ]

    }

    function notBefore(date){
       data.students.map(i=>{
           i.lessons.map(d=>{
               if(new Date(d.date)>new Date(date)){
                   console.log(i.name, d.title, d.date)
               }
           })
       })
    }
    notBefore("2023-06-18")
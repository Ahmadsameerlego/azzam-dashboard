export const ProductService = {



    getDoctors(){
        return[
            {
              "_id": {
                "$oid": "64ae5a13be2fca4b544f6359"
              },
              "name": "Adam",
              "phone": "01122934861",
              "email": "adam@gmail.com",
              "avatar": "default.png",
              "language": "ar",
              "status": "active",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 86,
              "active": true,
              "activationCode": "",
              "description": "جراحة",
              "time": "",
              "price": 200,
              "isAvailable": true,
              "isApproved": false,
              "city": {
                "$oid": "638a0c0c6395be5ead78e998"
              },
              "center": {
                "$oid": "64b4fcc1bdca29316c73d0c0"
              },
              "specialization": {
                "$oid": "64ac06385b74b6505477339c"
              },
              "userType": "doctor",
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              },
              "appointments": [],
              "createdAt": {
                "$date": "2023-07-12T07:45:23.668Z"
              },
              "updatedAt": {
                "$date": "2023-08-31T08:56:31.348Z"
              },
              "averageRating": 0,
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64b69af4a44d8e5eb038f740"
              },
              "description": {
                "ar": "دور الأخصائى الإجتماعى فى علاج الإدمان أن يقوم بالإتصال بأسرة المريض وتهيئتها حتى تقوم بالتعاون مع فريق العلاج عند عودته إلى الأسرة بعد الشفاء. يجب أن يقوم الأخصائى الإجتماعى بشرح تام لأسرة المدمن عن أسباب إنحرافه وما هى الدوافع التى جعلت منه مدمن وما الضغوط النفسية التى تؤثر به بالسلب.",
                "en": "The role of a social worker in addiction treatment is to contact the patient's family and prepare them so that they cooperate with the treatment team upon his return to the family after recovery. The social worker must fully explain to the addict's family the reasons for his delinquency and what motivations made him addicted and what psychological stress affects him negatively."
              },
              "name": "emad",
              "phone": "0200200200",
              "email": "emad@gmail.com",
              "avatar": "image421689688820756.png",
              "language": "ar",
              "status": "active",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 440,
              "active": true,
              "activationCode": "",
              "averageRating": 3.5,
              "time": "30",
              "price": 200,
              "isAvailable": true,
              "isApproved": false,
              "city": {
                "$oid": "64b3fad223389f0f2071ee4f"
              },
              "specialization": {
                "$oid": "64ac06385b74b6505477339c"
              },
              "userType": "doctor",
              "appointments": [
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f742"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "2023/08/27",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-3",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/3",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "07:00 PM",
                      "endTime": "07:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "07:30 PM",
                      "endTime": "08:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "08:00 PM",
                      "endTime": "08:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "08:30 PM",
                      "endTime": "09:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:00 PM",
                      "endTime": "09:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 PM",
                      "endTime": "10:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 PM",
                      "endTime": "10:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 PM",
                      "endTime": "11:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f743"
                  },
                  "day": "mon",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "2023/08/21",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/4",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f744"
                  },
                  "day": "tue",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f745"
                  },
                  "day": "wed",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f746"
                  },
                  "day": "thu",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "2023/09/29",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/29",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-28",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f747"
                  },
                  "day": "fri",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "2023/07/21",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "2023/09/01",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/01",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f748"
                  },
                  "day": "sat",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                }
              ],
              "center": {
                "$oid": "64b4ef0cb97b954508f1b9bd"
              },
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              },
              "createdAt": {
                "$date": "2023-07-18T14:00:20.935Z"
              },
              "updatedAt": {
                "$date": "2023-09-04T07:03:17.478Z"
              },
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64be32dd5151bd06c0ecc665"
              },
              "description": {
                "ar": "دور الأخصائى الإجتماعى فى علاج الإدمان أن يقوم بالإتصال بأسرة المريض وتهيئتها حتى تقوم بالتعاون مع فريق العلاج عند عودته إلى الأسرة بعد الشفاء. يجب أن يقوم الأخصائى الإجتماعى بشرح تام لأسرة المدمن عن أسباب إنحرافه وما هى الدوافع التى جعلت منه مدمن وما الضغوط النفسية التى تؤثر به بالسلب.",
                "en": "The role of a social worker in addiction treatment is to contact the patient's family and prepare them so that they cooperate with the treatment team upon his return to the family after recovery. The social worker must fully explain to the addict's family the reasons for his delinquency and what motivations made him addicted and what psychological stress affects him negatively."
              },
              "name": "mooo",
              "phone": "0512342632",
              "email": "moo@gmail.com",
              "avatar": "image181690186461182.png",
              "language": "ar",
              "status": "delete",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 56,
              "active": false,
              "activationCode": "123456",
              "averageRating": 0,
              "time": "30",
              "price": 200,
              "isAvailable": true,
              "isApproved": true,
              "city": {
                "$oid": "64b3fad223389f0f2071ee4f"
              },
              "specialization": {
                "$oid": "64ac05bb5b74b6505477337a"
              },
              "userType": "doctor",
              "appointments": [
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc667"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc668"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "startTime": "07:00 PM",
                      "endTime": "11:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc669"
                  },
                  "day": "mon",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66a"
                  },
                  "day": "tue",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66b"
                  },
                  "day": "wed",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66c"
                  },
                  "day": "thu",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66d"
                  },
                  "day": "fri",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66e"
                  },
                  "day": "sat",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                }
              ],
              "center": {
                "$oid": "64b4ef0cb97b954508f1b9bd"
              },
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              },
              "createdAt": {
                "$date": "2023-07-24T08:14:21.390Z"
              },
              "updatedAt": {
                "$date": "2023-08-31T08:56:31.356Z"
              },
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64c267825986914f141f377e"
              },
              "description": {
                "ar": "",
                "en": ""
              },
              "name": "",
              "phone": "",
              "email": "hamaza@gmail.com",
              "avatar": "default.png",
              "language": "ar",
              "status": "active",
              "deviceType": "ios",
              "deviceId": "Ac124",
              "countryCode": "",
              "isNotify": true,
              "notifyCount": 55,
              "active": false,
              "activationCode": "",
              "averageRating": 0,
              "time": "",
              "price": 0,
              "isAvailable": true,
              "isApproved": false,
              "socialId": "ABC1432",
              "userType": "doctor",
              "appointments": [],
              "createdAt": {
                "$date": "2023-07-27T12:48:02.656Z"
              },
              "updatedAt": {
                "$date": "2023-08-31T08:56:31.365Z"
              },
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              }
            },
            {
              "_id": {
                "$oid": "64d35a8adf5d122d8439b5ef"
              },
              "description": {
                "ar": "aaaaaaaaaaaaaaaaaaaaaa",
                "en": "aaaaaaaaaaaaaaaaaa"
              },
              "name": "ALi",
              "phone": "0512342631",
              "email": "omar2@gmail.com",
              "avatar": "image291691574018941.png",
              "language": "ar",
              "status": "active",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 11,
              "active": true,
              "activationCode": "",
              "averageRating": 0,
              "time": "20",
              "price": 1000,
              "isAvailable": true,
              "isApproved": false,
              "city": {
                "$oid": "64b7b1616e8076229cbb976e"
              },
              "specialization": {
                "$oid": "64ac0c97e5aa0d468ccfc773"
              },
              "userType": "doctor",
              "appointments": [
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f742"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:20 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:20 AM",
                      "endTime": "09:40 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:40 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:20 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:20 AM",
                      "endTime": "10:40 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:40 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:20 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:20 AM",
                      "endTime": "11:40 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:40 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:20 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:20 PM",
                      "endTime": "12:40 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:40 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:20 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:20 PM",
                      "endTime": "01:40 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:40 PM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f743"
                  },
                  "day": "mon",
                  "range": [
                    {
                      "bookedDate": "2023/08/21",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "2023/08/21",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f744"
                  },
                  "day": "tue",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f745"
                  },
                  "day": "wed",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f746"
                  },
                  "day": "thu",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f747"
                  },
                  "day": "fri",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "2023/07/21",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f748"
                  },
                  "day": "sat",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                }
              ],
              "center": {
                "$oid": "64b4ef0cb97b954508f1b9bd"
              },
              "country": {
                "$oid": "64b4fde15e73dbfc5154760b"
              },
              "createdAt": {
                "$date": "2023-07-18T14:00:20.935Z"
              },
              "updatedAt": {
                "$date": "2023-08-20T07:35:47.831Z"
              },
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64ae5a13be2fca4b544f6359"
              },
              "name": "Adam",
              "phone": "01122934861",
              "email": "adam@gmail.com",
              "avatar": "default.png",
              "language": "ar",
              "status": "active",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 86,
              "active": true,
              "activationCode": "",
              "description": "جراحة",
              "time": "",
              "price": 200,
              "isAvailable": true,
              "isApproved": false,
              "city": {
                "$oid": "638a0c0c6395be5ead78e998"
              },
              "center": {
                "$oid": "64b4fcc1bdca29316c73d0c0"
              },
              "specialization": {
                "$oid": "64ac06385b74b6505477339c"
              },
              "userType": "doctor",
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              },
              "appointments": [],
              "createdAt": {
                "$date": "2023-07-12T07:45:23.668Z"
              },
              "updatedAt": {
                "$date": "2023-08-31T08:56:31.348Z"
              },
              "averageRating": 0,
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64b69af4a44d8e5eb038f740"
              },
              "description": {
                "ar": "دور الأخصائى الإجتماعى فى علاج الإدمان أن يقوم بالإتصال بأسرة المريض وتهيئتها حتى تقوم بالتعاون مع فريق العلاج عند عودته إلى الأسرة بعد الشفاء. يجب أن يقوم الأخصائى الإجتماعى بشرح تام لأسرة المدمن عن أسباب إنحرافه وما هى الدوافع التى جعلت منه مدمن وما الضغوط النفسية التى تؤثر به بالسلب.",
                "en": "The role of a social worker in addiction treatment is to contact the patient's family and prepare them so that they cooperate with the treatment team upon his return to the family after recovery. The social worker must fully explain to the addict's family the reasons for his delinquency and what motivations made him addicted and what psychological stress affects him negatively."
              },
              "name": "emad",
              "phone": "0200200200",
              "email": "emad@gmail.com",
              "avatar": "image421689688820756.png",
              "language": "ar",
              "status": "active",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 440,
              "active": true,
              "activationCode": "",
              "averageRating": 3.5,
              "time": "30",
              "price": 200,
              "isAvailable": true,
              "isApproved": false,
              "city": {
                "$oid": "64b3fad223389f0f2071ee4f"
              },
              "specialization": {
                "$oid": "64ac06385b74b6505477339c"
              },
              "userType": "doctor",
              "appointments": [
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f742"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "2023/08/27",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-3",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/3",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "07:00 PM",
                      "endTime": "07:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "07:30 PM",
                      "endTime": "08:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "08:00 PM",
                      "endTime": "08:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "08:30 PM",
                      "endTime": "09:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:00 PM",
                      "endTime": "09:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 PM",
                      "endTime": "10:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 PM",
                      "endTime": "10:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 PM",
                      "endTime": "11:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f743"
                  },
                  "day": "mon",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "2023/08/21",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/4",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f744"
                  },
                  "day": "tue",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f745"
                  },
                  "day": "wed",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f746"
                  },
                  "day": "thu",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "2023/09/29",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/29",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-28",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f747"
                  },
                  "day": "fri",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "2023/07/21",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "2023/09/01",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/01",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f748"
                  },
                  "day": "sat",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                }
              ],
              "center": {
                "$oid": "64b4ef0cb97b954508f1b9bd"
              },
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              },
              "createdAt": {
                "$date": "2023-07-18T14:00:20.935Z"
              },
              "updatedAt": {
                "$date": "2023-09-04T07:03:17.478Z"
              },
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64be32dd5151bd06c0ecc665"
              },
              "description": {
                "ar": "دور الأخصائى الإجتماعى فى علاج الإدمان أن يقوم بالإتصال بأسرة المريض وتهيئتها حتى تقوم بالتعاون مع فريق العلاج عند عودته إلى الأسرة بعد الشفاء. يجب أن يقوم الأخصائى الإجتماعى بشرح تام لأسرة المدمن عن أسباب إنحرافه وما هى الدوافع التى جعلت منه مدمن وما الضغوط النفسية التى تؤثر به بالسلب.",
                "en": "The role of a social worker in addiction treatment is to contact the patient's family and prepare them so that they cooperate with the treatment team upon his return to the family after recovery. The social worker must fully explain to the addict's family the reasons for his delinquency and what motivations made him addicted and what psychological stress affects him negatively."
              },
              "name": "mooo",
              "phone": "0512342632",
              "email": "moo@gmail.com",
              "avatar": "image181690186461182.png",
              "language": "ar",
              "status": "delete",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 56,
              "active": false,
              "activationCode": "123456",
              "averageRating": 0,
              "time": "30",
              "price": 200,
              "isAvailable": true,
              "isApproved": true,
              "city": {
                "$oid": "64b3fad223389f0f2071ee4f"
              },
              "specialization": {
                "$oid": "64ac05bb5b74b6505477337a"
              },
              "userType": "doctor",
              "appointments": [
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc667"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc668"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "startTime": "07:00 PM",
                      "endTime": "11:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc669"
                  },
                  "day": "mon",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66a"
                  },
                  "day": "tue",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66b"
                  },
                  "day": "wed",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66c"
                  },
                  "day": "thu",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66d"
                  },
                  "day": "fri",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66e"
                  },
                  "day": "sat",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                }
              ],
              "center": {
                "$oid": "64b4ef0cb97b954508f1b9bd"
              },
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              },
              "createdAt": {
                "$date": "2023-07-24T08:14:21.390Z"
              },
              "updatedAt": {
                "$date": "2023-08-31T08:56:31.356Z"
              },
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64c267825986914f141f377e"
              },
              "description": {
                "ar": "",
                "en": ""
              },
              "name": "",
              "phone": "",
              "email": "hamaza@gmail.com",
              "avatar": "default.png",
              "language": "ar",
              "status": "active",
              "deviceType": "ios",
              "deviceId": "Ac124",
              "countryCode": "",
              "isNotify": true,
              "notifyCount": 55,
              "active": false,
              "activationCode": "",
              "averageRating": 0,
              "time": "",
              "price": 0,
              "isAvailable": true,
              "isApproved": false,
              "socialId": "ABC1432",
              "userType": "doctor",
              "appointments": [],
              "createdAt": {
                "$date": "2023-07-27T12:48:02.656Z"
              },
              "updatedAt": {
                "$date": "2023-08-31T08:56:31.365Z"
              },
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              }
            },
            {
              "_id": {
                "$oid": "64d35a8adf5d122d8439b5ef"
              },
              "description": {
                "ar": "aaaaaaaaaaaaaaaaaaaaaa",
                "en": "aaaaaaaaaaaaaaaaaa"
              },
              "name": "ALi",
              "phone": "0512342631",
              "email": "omar2@gmail.com",
              "avatar": "image291691574018941.png",
              "language": "ar",
              "status": "active",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 11,
              "active": true,
              "activationCode": "",
              "averageRating": 0,
              "time": "20",
              "price": 1000,
              "isAvailable": true,
              "isApproved": false,
              "city": {
                "$oid": "64b7b1616e8076229cbb976e"
              },
              "specialization": {
                "$oid": "64ac0c97e5aa0d468ccfc773"
              },
              "userType": "doctor",
              "appointments": [
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f742"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:20 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:20 AM",
                      "endTime": "09:40 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:40 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:20 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:20 AM",
                      "endTime": "10:40 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:40 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:20 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:20 AM",
                      "endTime": "11:40 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:40 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:20 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:20 PM",
                      "endTime": "12:40 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:40 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:20 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:20 PM",
                      "endTime": "01:40 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:40 PM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f743"
                  },
                  "day": "mon",
                  "range": [
                    {
                      "bookedDate": "2023/08/21",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "2023/08/21",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f744"
                  },
                  "day": "tue",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f745"
                  },
                  "day": "wed",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f746"
                  },
                  "day": "thu",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f747"
                  },
                  "day": "fri",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "2023/07/21",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f748"
                  },
                  "day": "sat",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                }
              ],
              "center": {
                "$oid": "64b4ef0cb97b954508f1b9bd"
              },
              "country": {
                "$oid": "64b4fde15e73dbfc5154760b"
              },
              "createdAt": {
                "$date": "2023-07-18T14:00:20.935Z"
              },
              "updatedAt": {
                "$date": "2023-08-20T07:35:47.831Z"
              },
              "sessionCount": 0
            },
             {
              "_id": {
                "$oid": "64ae5a13be2fca4b544f6359"
              },
              "name": "Adam",
              "phone": "01122934861",
              "email": "adam@gmail.com",
              "avatar": "default.png",
              "language": "ar",
              "status": "active",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 86,
              "active": true,
              "activationCode": "",
              "description": "جراحة",
              "time": "",
              "price": 200,
              "isAvailable": true,
              "isApproved": false,
              "city": {
                "$oid": "638a0c0c6395be5ead78e998"
              },
              "center": {
                "$oid": "64b4fcc1bdca29316c73d0c0"
              },
              "specialization": {
                "$oid": "64ac06385b74b6505477339c"
              },
              "userType": "doctor",
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              },
              "appointments": [],
              "createdAt": {
                "$date": "2023-07-12T07:45:23.668Z"
              },
              "updatedAt": {
                "$date": "2023-08-31T08:56:31.348Z"
              },
              "averageRating": 0,
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64b69af4a44d8e5eb038f740"
              },
              "description": {
                "ar": "دور الأخصائى الإجتماعى فى علاج الإدمان أن يقوم بالإتصال بأسرة المريض وتهيئتها حتى تقوم بالتعاون مع فريق العلاج عند عودته إلى الأسرة بعد الشفاء. يجب أن يقوم الأخصائى الإجتماعى بشرح تام لأسرة المدمن عن أسباب إنحرافه وما هى الدوافع التى جعلت منه مدمن وما الضغوط النفسية التى تؤثر به بالسلب.",
                "en": "The role of a social worker in addiction treatment is to contact the patient's family and prepare them so that they cooperate with the treatment team upon his return to the family after recovery. The social worker must fully explain to the addict's family the reasons for his delinquency and what motivations made him addicted and what psychological stress affects him negatively."
              },
              "name": "emad",
              "phone": "0200200200",
              "email": "emad@gmail.com",
              "avatar": "image421689688820756.png",
              "language": "ar",
              "status": "active",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 440,
              "active": true,
              "activationCode": "",
              "averageRating": 3.5,
              "time": "30",
              "price": 200,
              "isAvailable": true,
              "isApproved": false,
              "city": {
                "$oid": "64b3fad223389f0f2071ee4f"
              },
              "specialization": {
                "$oid": "64ac06385b74b6505477339c"
              },
              "userType": "doctor",
              "appointments": [
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f742"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "2023/08/27",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-3",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/3",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "07:00 PM",
                      "endTime": "07:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "07:30 PM",
                      "endTime": "08:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "08:00 PM",
                      "endTime": "08:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "08:30 PM",
                      "endTime": "09:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:00 PM",
                      "endTime": "09:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 PM",
                      "endTime": "10:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 PM",
                      "endTime": "10:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 PM",
                      "endTime": "11:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f743"
                  },
                  "day": "mon",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "2023/08/21",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/4",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f744"
                  },
                  "day": "tue",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f745"
                  },
                  "day": "wed",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f746"
                  },
                  "day": "thu",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "2023/09/29",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/29",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-28",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f747"
                  },
                  "day": "fri",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "2023/07/21",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "2023/09/01",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "2023/09/01",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f748"
                  },
                  "day": "sat",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "2023-09-30",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                }
              ],
              "center": {
                "$oid": "64b4ef0cb97b954508f1b9bd"
              },
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              },
              "createdAt": {
                "$date": "2023-07-18T14:00:20.935Z"
              },
              "updatedAt": {
                "$date": "2023-09-04T07:03:17.478Z"
              },
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64be32dd5151bd06c0ecc665"
              },
              "description": {
                "ar": "دور الأخصائى الإجتماعى فى علاج الإدمان أن يقوم بالإتصال بأسرة المريض وتهيئتها حتى تقوم بالتعاون مع فريق العلاج عند عودته إلى الأسرة بعد الشفاء. يجب أن يقوم الأخصائى الإجتماعى بشرح تام لأسرة المدمن عن أسباب إنحرافه وما هى الدوافع التى جعلت منه مدمن وما الضغوط النفسية التى تؤثر به بالسلب.",
                "en": "The role of a social worker in addiction treatment is to contact the patient's family and prepare them so that they cooperate with the treatment team upon his return to the family after recovery. The social worker must fully explain to the addict's family the reasons for his delinquency and what motivations made him addicted and what psychological stress affects him negatively."
              },
              "name": "mooo",
              "phone": "0512342632",
              "email": "moo@gmail.com",
              "avatar": "image181690186461182.png",
              "language": "ar",
              "status": "delete",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 56,
              "active": false,
              "activationCode": "123456",
              "averageRating": 0,
              "time": "30",
              "price": 200,
              "isAvailable": true,
              "isApproved": true,
              "city": {
                "$oid": "64b3fad223389f0f2071ee4f"
              },
              "specialization": {
                "$oid": "64ac05bb5b74b6505477337a"
              },
              "userType": "doctor",
              "appointments": [
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc667"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc668"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "startTime": "07:00 PM",
                      "endTime": "11:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc669"
                  },
                  "day": "mon",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66a"
                  },
                  "day": "tue",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66b"
                  },
                  "day": "wed",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66c"
                  },
                  "day": "thu",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66d"
                  },
                  "day": "fri",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64be32dd5151bd06c0ecc66e"
                  },
                  "day": "sat",
                  "range": [
                    {
                      "startTime": "09:00 AM",
                      "endTime": "05:00 PM"
                    }
                  ]
                }
              ],
              "center": {
                "$oid": "64b4ef0cb97b954508f1b9bd"
              },
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              },
              "createdAt": {
                "$date": "2023-07-24T08:14:21.390Z"
              },
              "updatedAt": {
                "$date": "2023-08-31T08:56:31.356Z"
              },
              "sessionCount": 0
            },
            {
              "_id": {
                "$oid": "64c267825986914f141f377e"
              },
              "description": {
                "ar": "",
                "en": ""
              },
              "name": "",
              "phone": "",
              "email": "hamaza@gmail.com",
              "avatar": "default.png",
              "language": "ar",
              "status": "active",
              "deviceType": "ios",
              "deviceId": "Ac124",
              "countryCode": "",
              "isNotify": true,
              "notifyCount": 55,
              "active": false,
              "activationCode": "",
              "averageRating": 0,
              "time": "",
              "price": 0,
              "isAvailable": true,
              "isApproved": false,
              "socialId": "ABC1432",
              "userType": "doctor",
              "appointments": [],
              "createdAt": {
                "$date": "2023-07-27T12:48:02.656Z"
              },
              "updatedAt": {
                "$date": "2023-08-31T08:56:31.365Z"
              },
              "country": {
                "$oid": "64ae5989a2f2fd0c04737761"
              }
            },
            {
              "_id": {
                "$oid": "64d35a8adf5d122d8439b5ef"
              },
              "description": {
                "ar": "aaaaaaaaaaaaaaaaaaaaaa",
                "en": "aaaaaaaaaaaaaaaaaa"
              },
              "name": "ALi",
              "phone": "0512342631",
              "email": "omar2@gmail.com",
              "avatar": "image291691574018941.png",
              "language": "ar",
              "status": "active",
              "deviceType": "",
              "deviceId": "ABC123",
              "countryCode": "+966",
              "isNotify": true,
              "notifyCount": 11,
              "active": true,
              "activationCode": "",
              "averageRating": 0,
              "time": "20",
              "price": 1000,
              "isAvailable": true,
              "isApproved": false,
              "city": {
                "$oid": "64b7b1616e8076229cbb976e"
              },
              "specialization": {
                "$oid": "64ac0c97e5aa0d468ccfc773"
              },
              "userType": "doctor",
              "appointments": [
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f742"
                  },
                  "day": "sun",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:20 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:20 AM",
                      "endTime": "09:40 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:40 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:20 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:20 AM",
                      "endTime": "10:40 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:40 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:20 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:20 AM",
                      "endTime": "11:40 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:40 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:20 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:20 PM",
                      "endTime": "12:40 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:40 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:20 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:20 PM",
                      "endTime": "01:40 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:40 PM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f743"
                  },
                  "day": "mon",
                  "range": [
                    {
                      "bookedDate": "2023/08/21",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "2023/08/21",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f744"
                  },
                  "day": "tue",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f745"
                  },
                  "day": "wed",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f746"
                  },
                  "day": "thu",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f747"
                  },
                  "day": "fri",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "2023/07/21",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    }
                  ]
                },
                {
                  "_id": {
                    "$oid": "64b69af4a44d8e5eb038f748"
                  },
                  "day": "sat",
                  "range": [
                    {
                      "bookedDate": "",
                      "startTime": "09:00 AM",
                      "endTime": "09:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "09:30 AM",
                      "endTime": "10:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:00 AM",
                      "endTime": "10:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "10:30 AM",
                      "endTime": "11:00 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:00 AM",
                      "endTime": "11:30 AM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "11:30 AM",
                      "endTime": "12:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:00 PM",
                      "endTime": "12:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "12:30 PM",
                      "endTime": "01:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:00 PM",
                      "endTime": "01:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "01:30 PM",
                      "endTime": "02:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:00 PM",
                      "endTime": "02:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "02:30 PM",
                      "endTime": "03:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:00 PM",
                      "endTime": "03:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "03:30 PM",
                      "endTime": "04:00 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:00 PM",
                      "endTime": "04:30 PM"
                    },
                    {
                      "bookedDate": "",
                      "startTime": "04:30 PM",
                      "endTime": "05:00 PM"
                    }
                  ]
                }
              ],
              "center": {
                "$oid": "64b4ef0cb97b954508f1b9bd"
              },
              "country": {
                "$oid": "64b4fde15e73dbfc5154760b"
              },
              "createdAt": {
                "$date": "2023-07-18T14:00:20.935Z"
              },
              "updatedAt": {
                "$date": "2023-08-20T07:35:47.831Z"
              },
              "sessionCount": 0
            },
            ]
    },
    getProductsMini() {
        return Promise.resolve(this.getDoctors());
    },

    getProductsSmall() {
        return Promise.resolve(this.getProductsData().slice(0, 10));
    },

    getProducts() {
        return Promise.resolve(this.getProductsData());
    },

    getProductsWithOrdersSmall() {
        return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
    },

    getProductsWithOrders() {
        return Promise.resolve(this.getProductsWithOrdersData());
    }
};


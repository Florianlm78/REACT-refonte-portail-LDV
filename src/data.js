// 20200930084849
// https://ical-to-json.herokuapp.com/convert.json?url=https%3A%2F%2Fical.devinci.me%2Fical_student%2F9e8bc0416a9a1ed1b4cb00b0b58dead5

export const stockData =
[{
    "vcalendar": [
      {
        "method": "PUBLISH",
        "prodid": "-//ALV SIM V2//French Time//EN",
        "x-wr-calname": "Calendrier Alexis BOUGY",
        "x-wr-caldesc": "Calendrier Alexis BOUGY ",
        "x-wr-timezone": "Europe/Paris",
        "version": "2.0",
        "vtimezone": [
          {
            "tzid": "Europe/Paris",
            "daylight": [
              {
                "tzoffsetfrom": "+0100",
                "tzoffsetto": "+0200",
                "tzname": "CEST",
                "dtstart": "19700329T020000",
                "rrule": {
                  "freq": "YEARLY",
                  "bymonth": "3",
                  "byday": "-1SU"
                }
              }
            ],
            "standard": [
              {
                "tzoffsetfrom": "+0200",
                "tzoffsetto": "+0100",
                "tzname": "CET",
                "dtstart": "19701025T030000",
                "rrule": "FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU"
              }
            ]
          }
        ]
      }
    ],
    "success": true
  }]
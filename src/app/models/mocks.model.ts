export const autocompleteResponseMock = [
    {
      "Version": 1,
      "Key": "308526",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Madrid",
      "Country": {
        "ID": "ES",
        "LocalizedName": "Spain"
      },
      "AdministrativeArea": {
        "ID": "MD",
        "LocalizedName": "Madrid"
      }
    },
    {
      "Version": 1,
      "Key": "108179",
      "Type": "City",
      "Rank": 55,
      "LocalizedName": "Madrid",
      "Country": {
        "ID": "CO",
        "LocalizedName": "Colombia"
      },
      "AdministrativeArea": {
        "ID": "CUN",
        "LocalizedName": "Cundinamarca"
      }
    },
    {
      "Version": 1,
      "Key": "262718",
      "Type": "City",
      "Rank": 55,
      "LocalizedName": "Madridejos",
      "Country": {
        "ID": "PH",
        "LocalizedName": "Philippines"
      },
      "AdministrativeArea": {
        "ID": "CEB",
        "LocalizedName": "Cebu"
      }
    },
    {
      "Version": 1,
      "Key": "303860",
      "Type": "City",
      "Rank": 62,
      "LocalizedName": "Madridejos",
      "Country": {
        "ID": "ES",
        "LocalizedName": "Spain"
      },
      "AdministrativeArea": {
        "ID": "CM",
        "LocalizedName": "Castile-La Mancha"
      }
    },
    {
      "Version": 1,
      "Key": "266174",
      "Type": "City",
      "Rank": 65,
      "LocalizedName": "Madrid",
      "Country": {
        "ID": "PH",
        "LocalizedName": "Philippines"
      },
      "AdministrativeArea": {
        "ID": "SUR",
        "LocalizedName": "Surigao del Sur"
      }
    },
    {
      "Version": 1,
      "Key": "3415106",
      "Type": "City",
      "Rank": 75,
      "LocalizedName": "Madridejos",
      "Country": {
        "ID": "PH",
        "LocalizedName": "Philippines"
      },
      "AdministrativeArea": {
        "ID": "CEB",
        "LocalizedName": "Cebu"
      }
    },
    {
      "Version": 1,
      "Key": "1457495",
      "Type": "City",
      "Rank": 82,
      "LocalizedName": "Madridanos",
      "Country": {
        "ID": "ES",
        "LocalizedName": "Spain"
      },
      "AdministrativeArea": {
        "ID": "CL",
        "LocalizedName": "Castile and Leon"
      }
    },
    {
      "Version": 1,
      "Key": "3387039",
      "Type": "City",
      "Rank": 85,
      "LocalizedName": "Madrid",
      "Country": {
        "ID": "CA",
        "LocalizedName": "Canada"
      },
      "AdministrativeArea": {
        "ID": "SK",
        "LocalizedName": "Saskatchewan"
      }
    },
    {
      "Version": 1,
      "Key": "2328920",
      "Type": "City",
      "Rank": 85,
      "LocalizedName": "Madrid",
      "Country": {
        "ID": "ES",
        "LocalizedName": "Spain"
      },
      "AdministrativeArea": {
        "ID": "AN",
        "LocalizedName": "Andalusia"
      }
    },
    {
      "Version": 1,
      "Key": "237575",
      "Type": "City",
      "Rank": 85,
      "LocalizedName": "Madrid",
      "Country": {
        "ID": "MX",
        "LocalizedName": "Mexico"
      },
      "AdministrativeArea": {
        "ID": "COL",
        "LocalizedName": "Colima"
      }
    }
  ]

export const currentConditionResponseMock = [
  {
    "LocalObservationDateTime": "2021-05-02T03:25:00+07:00",
    "EpochTime": 1619900700,
    "WeatherText": "Some clouds",
    "WeatherIcon": 36,
    "HasPrecipitation": false,
    "PrecipitationType": null,
    "IsDayTime": false,
    "Temperature": {
      "Metric": {
        "Value": 24.5,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 76,
        "Unit": "F",
        "UnitType": 18
      }
    },
    "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/current-weather/3431644?lang=en-us",
    "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/current-weather/3431644?lang=en-us"
  }
]

export const fiveDaysCastResponseMock = {
  "Headline": {
    "EffectiveDate": "2021-05-02T07:00:00+07:00",
    "EffectiveEpochDate": 1619913600,
    "Severity": 5,
    "Text": "A thunderstorm Sunday",
    "Category": "thunderstorm",
    "EndDate": "2021-05-02T19:00:00+07:00",
    "EndEpochDate": 1619956800,
    "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/extended-weather-forecast/3431644?lang=en-us",
    "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?lang=en-us"
  },
  "DailyForecasts": [
    {
      "Date": "2021-05-02T07:00:00+07:00",
      "EpochDate": 1619913600,
      "Temperature": {
        "Minimum": {
          "Value": 74,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 89,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 15,
        "IconPhrase": "Thunderstorms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Night": {
        "Icon": 15,
        "IconPhrase": "Thunderstorms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Moderate"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=1&lang=en-us",
      "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=1&lang=en-us"
    },
    {
      "Date": "2021-05-03T07:00:00+07:00",
      "EpochDate": 1620000000,
      "Temperature": {
        "Minimum": {
          "Value": 74,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 89,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 15,
        "IconPhrase": "Thunderstorms",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Night": {
        "Icon": 38,
        "IconPhrase": "Mostly cloudy",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=2&lang=en-us",
      "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=2&lang=en-us"
    },
    {
      "Date": "2021-05-04T07:00:00+07:00",
      "EpochDate": 1620086400,
      "Temperature": {
        "Minimum": {
          "Value": 74,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 93,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Night": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=3&lang=en-us",
      "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=3&lang=en-us"
    },
    {
      "Date": "2021-05-05T07:00:00+07:00",
      "EpochDate": 1620172800,
      "Temperature": {
        "Minimum": {
          "Value": 74,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 88,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Night": {
        "Icon": 12,
        "IconPhrase": "Showers",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Light"
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=4&lang=en-us",
      "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=4&lang=en-us"
    },
    {
      "Date": "2021-05-06T07:00:00+07:00",
      "EpochDate": 1620259200,
      "Temperature": {
        "Minimum": {
          "Value": 74,
          "Unit": "F",
          "UnitType": 18
        },
        "Maximum": {
          "Value": 89,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Day": {
        "Icon": 7,
        "IconPhrase": "Cloudy",
        "HasPrecipitation": true,
        "PrecipitationType": "Rain",
        "PrecipitationIntensity": "Heavy"
      },
      "Night": {
        "Icon": 8,
        "IconPhrase": "Dreary",
        "HasPrecipitation": false
      },
      "Sources": [
        "AccuWeather"
      ],
      "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=5&lang=en-us",
      "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=5&lang=en-us"
    }
  ]
}
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

export const autoCompleteForWordTel = [
  {
    "Version": 1,
    "Key": "215854",
    "Type": "City",
    "Rank": 31,
    "LocalizedName": "Tel Aviv",
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "TA",
      "LocalizedName": "Tel Aviv"
    },
    "CurrentConditions": [{
        "LocalObservationDateTime": "2021-05-08T03:06:00+03:00",
        "EpochTime": 1620432360,
        "WeatherText": "Clear",
        "WeatherIcon": 33,
        "HasPrecipitation": false,
        "PrecipitationType": null,
        "IsDayTime": false,
        "Temperature": {
          "Metric": {
            "Value": 18.5,
            "Unit": "C",
            "UnitType": 17
          },
          "Imperial": {
            "Value": 65,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
      }],
      "FiveDaysForecast": {
        "Headline": {
          "EffectiveDate": "2021-05-09T08:00:00+03:00",
          "EffectiveEpochDate": 1620536400,
          "Severity": 5,
          "Text": "Possible danger of dehydration and heat stroke while doing strenuous activities Sunday",
          "Category": "heat",
          "EndDate": "2021-05-09T20:00:00+03:00",
          "EndEpochDate": 1620579600,
          "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
        },
        "DailyForecasts": [
          {
            "Date": "2021-05-08T07:00:00+03:00",
            "EpochDate": 1620446400,
            "Temperature": {
              "Minimum": {
                "Value": 22.9,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 30.1,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 1,
              "IconPhrase": "Sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 33,
              "IconPhrase": "Clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?unit=c&lang=en-us"
          },
          {
            "Date": "2021-05-09T07:00:00+03:00",
            "EpochDate": 1620532800,
            "Temperature": {
              "Minimum": {
                "Value": 22.3,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 32.5,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 4,
              "IconPhrase": "Intermittent clouds",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 35,
              "IconPhrase": "Partly cloudy",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
          },
          {
            "Date": "2021-05-10T07:00:00+03:00",
            "EpochDate": 1620619200,
            "Temperature": {
              "Minimum": {
                "Value": 21,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 27.2,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 4,
              "IconPhrase": "Intermittent clouds",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 34,
              "IconPhrase": "Mostly clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
          },
          {
            "Date": "2021-05-11T07:00:00+03:00",
            "EpochDate": 1620705600,
            "Temperature": {
              "Minimum": {
                "Value": 20.3,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 27.3,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 1,
              "IconPhrase": "Sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 33,
              "IconPhrase": "Clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
          },
          {
            "Date": "2021-05-12T07:00:00+03:00",
            "EpochDate": 1620792000,
            "Temperature": {
              "Minimum": {
                "Value": 20.1,
                "Unit": "C",
                "UnitType": 17
              },
              "Maximum": {
                "Value": 26.1,
                "Unit": "C",
                "UnitType": 17
              }
            },
            "Day": {
              "Icon": 1,
              "IconPhrase": "Sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 34,
              "IconPhrase": "Mostly clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
          }
        ]
      }
  },
  {
    "Version": 1,
    "Key": "3431644",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Telanaipura",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JA",
      "LocalizedName": "Jambi"
    },
    "CurrentConditions":[{
      "LocalObservationDateTime": "2021-05-08T07:10:00+07:00",
      "EpochTime": 1620432600,
      "WeatherText": "Cloudy",
      "WeatherIcon": 7,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 24.6,
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
    }],
    "FiveDaysForecast": {
      "Headline": {
        "EffectiveDate": "2021-05-11T07:00:00+07:00",
        "EffectiveEpochDate": 1620691200,
        "Severity": 5,
        "Text": "A thunderstorm Tuesday",
        "Category": "thunderstorm",
        "EndDate": "2021-05-11T19:00:00+07:00",
        "EndEpochDate": 1620734400,
        "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/extended-weather-forecast/3431644?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-05-09T07:00:00+07:00",
          "EpochDate": 1620518400,
          "Temperature": {
            "Minimum": {
              "Value": 24.1,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 33.8,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 15,
            "IconPhrase": "Thunderstorms",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-10T07:00:00+07:00",
          "EpochDate": 1620604800,
          "Temperature": {
            "Minimum": {
              "Value": 24.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 34.2,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 15,
            "IconPhrase": "Thunderstorms",
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
          "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-11T07:00:00+07:00",
          "EpochDate": 1620691200,
          "Temperature": {
            "Minimum": {
              "Value": 24.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 30.4,
              "Unit": "C",
              "UnitType": 17
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
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-12T07:00:00+07:00",
          "EpochDate": 1620777600,
          "Temperature": {
            "Minimum": {
              "Value": 23.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 31,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Night": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-13T07:00:00+07:00",
          "EpochDate": 1620864000,
          "Temperature": {
            "Minimum": {
              "Value": 23.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 30.8,
              "Unit": "C",
              "UnitType": 17
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
          "MobileLink": "http://m.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=5&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telanaipura/3431644/daily-weather-forecast/3431644?day=5&unit=c&lang=en-us"
        }
      ]
    }
  },
  {
    "Version": 1,
    "Key": "300558",
    "Type": "City",
    "Rank": 45,
    "LocalizedName": "Telok Blangah New Town",
    "Country": {
      "ID": "SG",
      "LocalizedName": "Singapore"
    },
    "AdministrativeArea": {
      "ID": "05",
      "LocalizedName": "South West"
    },
    "CurrentConditions": [{
      "LocalObservationDateTime": "2021-05-08T08:15:00+08:00",
      "EpochTime": 1620432900,
      "WeatherText": "Clouds and sun",
      "WeatherIcon": 4,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 27.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 82,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/current-weather/300558?lang=en-us",
      "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/current-weather/300558?lang=en-us"
    }],
    "FiveDaysForecast": {
      "Headline": {
        "EffectiveDate": "2021-05-09T13:00:00+08:00",
        "EffectiveEpochDate": 1620536400,
        "Severity": 5,
        "Text": "A thunderstorm Sunday afternoon",
        "Category": "thunderstorm",
        "EndDate": "2021-05-09T19:00:00+08:00",
        "EndEpochDate": 1620558000,
        "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/extended-weather-forecast/300558?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-05-09T07:00:00+08:00",
          "EpochDate": 1620514800,
          "Temperature": {
            "Minimum": {
              "Value": 26.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.7,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 17,
            "IconPhrase": "Partly sunny w/ t-storms",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-10T07:00:00+08:00",
          "EpochDate": 1620601200,
          "Temperature": {
            "Minimum": {
              "Value": 26.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 17,
            "IconPhrase": "Partly sunny w/ t-storms",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-11T07:00:00+08:00",
          "EpochDate": 1620687600,
          "Temperature": {
            "Minimum": {
              "Value": 26.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Heavy"
          },
          "Night": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Heavy"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-12T07:00:00+08:00",
          "EpochDate": 1620774000,
          "Temperature": {
            "Minimum": {
              "Value": 26.4,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.1,
              "Unit": "C",
              "UnitType": 17
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
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-13T07:00:00+08:00",
          "EpochDate": 1620860400,
          "Temperature": {
            "Minimum": {
              "Value": 26.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Night": {
            "Icon": 36,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=5&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/sg/telok-blangah-new-town/300558/daily-weather-forecast/300558?day=5&unit=c&lang=en-us"
        }
      ]
    }
  },
  {
    "Version": 1,
    "Key": "325876",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Telford",
    "Country": {
      "ID": "GB",
      "LocalizedName": "United Kingdom"
    },
    "AdministrativeArea": {
      "ID": "TFW",
      "LocalizedName": "Telford and Wrekin"
    },
    "CurrentConditions": [{
      "LocalObservationDateTime": "2021-05-08T01:12:00+01:00",
      "EpochTime": 1620432720,
      "WeatherText": "Cloudy",
      "WeatherIcon": 7,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 5.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 42,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/gb/telford/tf3-2/current-weather/325876?lang=en-us",
      "Link": "http://www.accuweather.com/en/gb/telford/tf3-2/current-weather/325876?lang=en-us"
    }],
    "FiveDaysForecast": {
      "Headline": {
        "EffectiveDate": "2021-05-09T14:00:00+01:00",
        "EffectiveEpochDate": 1620565200,
        "Severity": 5,
        "Text": "Expect showers Sunday afternoon",
        "Category": "rain",
        "EndDate": "2021-05-09T20:00:00+01:00",
        "EndEpochDate": 1620586800,
        "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/extended-weather-forecast/325874?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-05-08T07:00:00+01:00",
          "EpochDate": 1620453600,
          "Temperature": {
            "Minimum": {
              "Value": 10.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 16.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 18,
            "IconPhrase": "Rain",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-09T07:00:00+01:00",
          "EpochDate": 1620540000,
          "Temperature": {
            "Minimum": {
              "Value": 8.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 18.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-10T07:00:00+01:00",
          "EpochDate": 1620626400,
          "Temperature": {
            "Minimum": {
              "Value": 7.7,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 15.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 14,
            "IconPhrase": "Partly sunny w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-11T07:00:00+01:00",
          "EpochDate": 1620712800,
          "Temperature": {
            "Minimum": {
              "Value": 6.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 15.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 14,
            "IconPhrase": "Partly sunny w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-12T07:00:00+01:00",
          "EpochDate": 1620799200,
          "Temperature": {
            "Minimum": {
              "Value": 7.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 14.6,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
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
          "MobileLink": "http://m.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=5&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/gb/leatherhead/kt22-7/daily-weather-forecast/325874?day=5&unit=c&lang=en-us"
        }
      ]
    }
  },
  {
    "Version": 1,
    "Key": "169072",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Telavi",
    "Country": {
      "ID": "GE",
      "LocalizedName": "Georgia"
    },
    "AdministrativeArea": {
      "ID": "KA",
      "LocalizedName": "Kakheti"
    },
    "CurrentConditions": [{
      "LocalObservationDateTime": "2021-05-08T04:11:00+04:00",
      "EpochTime": 1620432660,
      "WeatherText": "Mostly cloudy",
      "WeatherIcon": 38,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 12.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 54,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/current-weather/169072?lang=en-us",
      "Link": "http://www.accuweather.com/en/ge/telavi/169072/current-weather/169072?lang=en-us"
    }],
    "FiveDaysForecast": {
      "Headline": {
        "EffectiveDate": "2021-05-09T13:00:00+04:00",
        "EffectiveEpochDate": 1620550800,
        "Severity": 3,
        "Text": "Expect showers Sunday afternoon",
        "Category": "rain",
        "EndDate": "2021-05-09T19:00:00+04:00",
        "EndEpochDate": 1620572400,
        "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/extended-weather-forecast/169072?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-05-08T07:00:00+04:00",
          "EpochDate": 1620442800,
          "Temperature": {
            "Minimum": {
              "Value": 13.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 21.9,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 14,
            "IconPhrase": "Partly sunny w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-09T07:00:00+04:00",
          "EpochDate": 1620529200,
          "Temperature": {
            "Minimum": {
              "Value": 6.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 24.1,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 13,
            "IconPhrase": "Mostly cloudy w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Heavy"
          },
          "Night": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-10T07:00:00+04:00",
          "EpochDate": 1620615600,
          "Temperature": {
            "Minimum": {
              "Value": 4.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 13.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 2,
            "IconPhrase": "Mostly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-11T07:00:00+04:00",
          "EpochDate": 1620702000,
          "Temperature": {
            "Minimum": {
              "Value": 5.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 16.2,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-12T07:00:00+04:00",
          "EpochDate": 1620788400,
          "Temperature": {
            "Minimum": {
              "Value": 11,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 22.6,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/ge/telavi/169072/daily-weather-forecast/169072?day=4&unit=c&lang=en-us"
        }
      ]
    }
  },
  {
    "Version": 1,
    "Key": "230611",
    "Type": "City",
    "Rank": 51,
    "LocalizedName": "Telsiai",
    "Country": {
      "ID": "LT",
      "LocalizedName": "Lithuania"
    },
    "AdministrativeArea": {
      "ID": "TE",
      "LocalizedName": "Telšiai"
    },
    "CurrentConditions": [{
      "LocalObservationDateTime": "2021-05-08T03:18:00+03:00",
      "EpochTime": 1620433080,
      "WeatherText": "Rain and snow",
      "WeatherIcon": 29,
      "HasPrecipitation": true,
      "PrecipitationType": "Mixed",
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 0.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 34,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/current-weather/230611?lang=en-us",
      "Link": "http://www.accuweather.com/en/lt/telsiai/230611/current-weather/230611?lang=en-us"
    }],
    "FiveDaysForecast": {
      "Headline": {
        "EffectiveDate": "2021-05-09T08:00:00+03:00",
        "EffectiveEpochDate": 1620536400,
        "Severity": 3,
        "Text": "Expect showers Sunday",
        "Category": "rain",
        "EndDate": "2021-05-09T20:00:00+03:00",
        "EndEpochDate": 1620579600,
        "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/extended-weather-forecast/230611?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-05-08T07:00:00+03:00",
          "EpochDate": 1620446400,
          "Temperature": {
            "Minimum": {
              "Value": -0.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 7.2,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-09T07:00:00+03:00",
          "EpochDate": 1620532800,
          "Temperature": {
            "Minimum": {
              "Value": 8.1,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 12.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 14,
            "IconPhrase": "Partly sunny w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-10T07:00:00+03:00",
          "EpochDate": 1620619200,
          "Temperature": {
            "Minimum": {
              "Value": 11.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 21.9,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-11T07:00:00+03:00",
          "EpochDate": 1620705600,
          "Temperature": {
            "Minimum": {
              "Value": 10,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 22.9,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-12T07:00:00+03:00",
          "EpochDate": 1620792000,
          "Temperature": {
            "Minimum": {
              "Value": 9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 22.6,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=4&unit=c&lang=en-us"
        }
      ]
    }
  },
  {
    "Version": 1,
    "Key": "2723742",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Telégrafo",
    "Country": {
      "ID": "BR",
      "LocalizedName": "Brazil"
    },
    "AdministrativeArea": {
      "ID": "PA",
      "LocalizedName": "Pará"
    },
    "CurrentConditions": [{
      "LocalObservationDateTime": "2021-05-07T21:10:00-03:00",
      "EpochTime": 1620432600,
      "WeatherText": "Clear",
      "WeatherIcon": 33,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 25,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 77,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/br/telegrafo/2723742/current-weather/2723742?lang=en-us",
      "Link": "http://www.accuweather.com/en/br/telegrafo/2723742/current-weather/2723742?lang=en-us"
    }],
    "FiveDaysForecast" : {
      "Headline": {
        "EffectiveDate": "2021-05-09T08:00:00+03:00",
        "EffectiveEpochDate": 1620536400,
        "Severity": 3,
        "Text": "Expect showers Sunday",
        "Category": "rain",
        "EndDate": "2021-05-09T20:00:00+03:00",
        "EndEpochDate": 1620579600,
        "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/extended-weather-forecast/230611?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-05-08T07:00:00+03:00",
          "EpochDate": 1620446400,
          "Temperature": {
            "Minimum": {
              "Value": -0.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 7.2,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 12,
            "IconPhrase": "Showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-09T07:00:00+03:00",
          "EpochDate": 1620532800,
          "Temperature": {
            "Minimum": {
              "Value": 8.1,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 12.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 14,
            "IconPhrase": "Partly sunny w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-10T07:00:00+03:00",
          "EpochDate": 1620619200,
          "Temperature": {
            "Minimum": {
              "Value": 11.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 21.9,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-11T07:00:00+03:00",
          "EpochDate": 1620705600,
          "Temperature": {
            "Minimum": {
              "Value": 10,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 22.9,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 33,
            "IconPhrase": "Clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-12T07:00:00+03:00",
          "EpochDate": 1620792000,
          "Temperature": {
            "Minimum": {
              "Value": 9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 22.6,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 1,
            "IconPhrase": "Sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/lt/telsiai/230611/daily-weather-forecast/230611?day=4&unit=c&lang=en-us"
        }
      ]
    }
  },
  {
    "Version": 1,
    "Key": "186933",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Tela",
    "Country": {
      "ID": "HN",
      "LocalizedName": "Honduras"
    },
    "AdministrativeArea": {
      "ID": "AT",
      "LocalizedName": "Atlántida"
    },
    "CurrentConditions": [{
      "LocalObservationDateTime": "2021-05-07T18:20:00-06:00",
      "EpochTime": 1620433200,
      "WeatherText": "Cloudy",
      "WeatherIcon": 7,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 27.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 82,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/current-weather/186933?lang=en-us",
      "Link": "http://www.accuweather.com/en/hn/tela/186933/current-weather/186933?lang=en-us"
    }],
    "FiveDaysForecast": {
      "Headline": {
        "EffectiveDate": "2021-05-12T07:00:00-06:00",
        "EffectiveEpochDate": 1620824400,
        "Severity": 5,
        "Text": "A thunderstorm Wednesday",
        "Category": "thunderstorm",
        "EndDate": "2021-05-12T19:00:00-06:00",
        "EndEpochDate": 1620867600,
        "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/extended-weather-forecast/186933?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-05-08T07:00:00-06:00",
          "EpochDate": 1620478800,
          "Temperature": {
            "Minimum": {
              "Value": 22.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.8,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 17,
            "IconPhrase": "Partly sunny w/ t-storms",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-09T07:00:00-06:00",
          "EpochDate": 1620565200,
          "Temperature": {
            "Minimum": {
              "Value": 23.1,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-10T07:00:00-06:00",
          "EpochDate": 1620651600,
          "Temperature": {
            "Minimum": {
              "Value": 23.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-11T07:00:00-06:00",
          "EpochDate": 1620738000,
          "Temperature": {
            "Minimum": {
              "Value": 24.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-12T07:00:00-06:00",
          "EpochDate": 1620824400,
          "Temperature": {
            "Minimum": {
              "Value": 24.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=5&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=5&unit=c&lang=en-us"
        }
      ]
    }
  },
  {
    "Version": 1,
    "Key": "3453754",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Telaga Asih",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JB",
      "LocalizedName": "West Java"
    },
    "CurrentConditions": [{
      "LocalObservationDateTime": "2021-05-08T07:25:00+07:00",
      "EpochTime": 1620433500,
      "WeatherText": "Partly sunny",
      "WeatherIcon": 3,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 27.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 81,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/id/telaga-asih/3453754/current-weather/3453754?lang=en-us",
      "Link": "http://www.accuweather.com/en/id/telaga-asih/3453754/current-weather/3453754?lang=en-us"
    }],
    "FiveDaysForecast": {
      "Headline": {
        "EffectiveDate": "2021-05-12T07:00:00-06:00",
        "EffectiveEpochDate": 1620824400,
        "Severity": 5,
        "Text": "A thunderstorm Wednesday",
        "Category": "thunderstorm",
        "EndDate": "2021-05-12T19:00:00-06:00",
        "EndEpochDate": 1620867600,
        "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/extended-weather-forecast/186933?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-05-08T07:00:00-06:00",
          "EpochDate": 1620478800,
          "Temperature": {
            "Minimum": {
              "Value": 22.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.8,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 17,
            "IconPhrase": "Partly sunny w/ t-storms",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-09T07:00:00-06:00",
          "EpochDate": 1620565200,
          "Temperature": {
            "Minimum": {
              "Value": 23.1,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-10T07:00:00-06:00",
          "EpochDate": 1620651600,
          "Temperature": {
            "Minimum": {
              "Value": 23.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 3,
            "IconPhrase": "Partly sunny",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-11T07:00:00-06:00",
          "EpochDate": 1620738000,
          "Temperature": {
            "Minimum": {
              "Value": 24.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-12T07:00:00-06:00",
          "EpochDate": 1620824400,
          "Temperature": {
            "Minimum": {
              "Value": 24.2,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 32.3,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=5&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/hn/tela/186933/daily-weather-forecast/186933?day=5&unit=c&lang=en-us"
        }
      ]
    }
  },
  {
    "Version": 1,
    "Key": "3453755",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Telagamurni",
    "Country": {
      "ID": "ID",
      "LocalizedName": "Indonesia"
    },
    "AdministrativeArea": {
      "ID": "JB",
      "LocalizedName": "West Java"
    },
    "CurrentConditions": [{
      "LocalObservationDateTime": "2021-05-08T07:25:00+07:00",
      "EpochTime": 1620433500,
      "WeatherText": "Partly sunny",
      "WeatherIcon": 3,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 27.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 81,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/current-weather/3453755?lang=en-us",
      "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/current-weather/3453755?lang=en-us"
    }],
    "FiveDaysForecast" :{
      "Headline": {
        "EffectiveDate": "2021-05-09T13:00:00+07:00",
        "EffectiveEpochDate": 1620540000,
        "Severity": 5,
        "Text": "Expect showers Sunday afternoon",
        "Category": "rain",
        "EndDate": "2021-05-09T19:00:00+07:00",
        "EndEpochDate": 1620561600,
        "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/extended-weather-forecast/3453755?unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?unit=c&lang=en-us"
      },
      "DailyForecasts": [
        {
          "Date": "2021-05-09T07:00:00+07:00",
          "EpochDate": 1620518400,
          "Temperature": {
            "Minimum": {
              "Value": 24.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 34.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 14,
            "IconPhrase": "Partly sunny w/ showers",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Night": {
            "Icon": 35,
            "IconPhrase": "Partly cloudy",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=1&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=1&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-10T07:00:00+07:00",
          "EpochDate": 1620604800,
          "Temperature": {
            "Minimum": {
              "Value": 24.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 35.4,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 6,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": false
          },
          "Night": {
            "Icon": 34,
            "IconPhrase": "Mostly clear",
            "HasPrecipitation": false
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=2&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=2&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-11T07:00:00+07:00",
          "EpochDate": 1620691200,
          "Temperature": {
            "Minimum": {
              "Value": 25.3,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 34.9,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": false
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
          "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=3&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=3&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-12T07:00:00+07:00",
          "EpochDate": 1620777600,
          "Temperature": {
            "Minimum": {
              "Value": 25.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 34.8,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 4,
            "IconPhrase": "Intermittent clouds",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Heavy"
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=4&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=4&unit=c&lang=en-us"
        },
        {
          "Date": "2021-05-13T07:00:00+07:00",
          "EpochDate": 1620864000,
          "Temperature": {
            "Minimum": {
              "Value": 25.9,
              "Unit": "C",
              "UnitType": 17
            },
            "Maximum": {
              "Value": 34.1,
              "Unit": "C",
              "UnitType": 17
            }
          },
          "Day": {
            "Icon": 7,
            "IconPhrase": "Cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Moderate"
          },
          "Night": {
            "Icon": 38,
            "IconPhrase": "Mostly cloudy",
            "HasPrecipitation": true,
            "PrecipitationType": "Rain",
            "PrecipitationIntensity": "Light"
          },
          "Sources": [
            "AccuWeather"
          ],
          "MobileLink": "http://m.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=5&unit=c&lang=en-us",
          "Link": "http://www.accuweather.com/en/id/telagamurni/3453755/daily-weather-forecast/3453755?day=5&unit=c&lang=en-us"
        }
      ]
    }
  }
]
export const autoCompleteForWordT = [
  {
      "Version": 1,
      "Key": "226396",
      "Type": "City",
      "Rank": 10,
      "LocalizedName": "Tokyo",
      "Country": {
          "ID": "JP",
          "LocalizedName": "Japan"
      },
      "AdministrativeArea": {
          "ID": "13",
          "LocalizedName": "Tokyo"
      }
  },
  {
      "Version": 1,
      "Key": "106770",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Taiyuan",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "SX",
          "LocalizedName": "Shanxi"
      }
  },
  {
      "Version": 1,
      "Key": "106780",
      "Type": "City",
      "Rank": 11,
      "LocalizedName": "Tianjin",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "TJ",
          "LocalizedName": "Tianjin"
      }
  },
  {
      "Version": 1,
      "Key": "58491",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Tongren",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "GZ",
          "LocalizedName": "Guizhou"
      }
  },
  {
      "Version": 1,
      "Key": "102324",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Tangshan",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "HE",
          "LocalizedName": "Hebei"
      }
  },
  {
      "Version": 1,
      "Key": "59573",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Taizhou",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "JS",
          "LocalizedName": "Jiangsu"
      }
  },
  {
      "Version": 1,
      "Key": "60198",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Tongliao",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "NM",
          "LocalizedName": "Inner Mongolia"
      }
  },
  {
      "Version": 1,
      "Key": "106571",
      "Type": "City",
      "Rank": 13,
      "LocalizedName": "Tai'an",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "SD",
          "LocalizedName": "Shandong"
      }
  },
  {
      "Version": 1,
      "Key": "58055",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "Tianshui",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "GS",
          "LocalizedName": "Gansu"
      }
  },
  {
      "Version": 1,
      "Key": "2333653",
      "Type": "City",
      "Rank": 15,
      "LocalizedName": "Taizhou",
      "Country": {
          "ID": "CN",
          "LocalizedName": "China"
      },
      "AdministrativeArea": {
          "ID": "ZJ",
          "LocalizedName": "Zhejiang"
      }
  }
]
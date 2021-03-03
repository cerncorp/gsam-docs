define({ "api": [
  {
    "type": "get",
    "url": "/v1/analytics/channel/engage",
    "title": "Channel Get Engage",
    "version": "1.0.0",
    "name": "Channel_Get_Engage",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel engage</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.03.03 04:00:30\",\n        \"duration\": \"2020.09.01 ~ 2020.09.14\",\n        \"engage\": {\n            \"duration\": \"2020.09.01 ~ 2020.09.14\",\n            \"data\": [\n                {\n                    \"views_count\": 5265706,\n                    \"likes_count\": 133908,\n                    \"dislikes_count\": 1976,\n                    \"comments_count\": 6486,\n                    \"shares_count\": 15946,\n                    \"engage_count\": 158316,\n                    \"engage_rate\": 3,\n                    \"bookmarked_count\": 69375,\n                    \"likes_weight\": 2.5,\n                    \"dislikes_weight\": 0,\n                    \"likes_diff\": -67818,\n                    \"dislikes_diff\": -1313,\n                    \"comments_diff\": -4,\n                    \"shares_diff\": -4088,\n                    \"engage_diff\": -73223,\n                    \"bookmarked_diff\": -21597,\n                    \"engage_rate_diff\": -0.6\n                }\n            ]\n        },\n        \"engage_by_time\": [\n            {\n                \"hhmi\": \"0000\",\n                \"engage_count\": 5199\n            },\n            ...\n        ]\n        ...\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/engage"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/engage-by-date",
    "title": "Channel Get Engage-by-date",
    "version": "1.0.0",
    "name": "Channel_Get_Engage-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel engage-by-date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>date(default)|month|year, ex: date</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"duration\": \"2020.09.01 ~ 2020.09.14\",\n        \"list\": [\n            {\n                \"yyyymmdd\": \"20200901\",\n                \"engage_count\": 10550,\n                \"previous_engage_count\": 12022\n            },\n            {\n                \"yyyymmdd\": \"20200902\",\n                \"engage_count\": 10441,\n                \"previous_engage_count\": 9845\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/engage-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/engage-detail",
    "title": "Channel Get Engage-detail",
    "version": "1.0.0",
    "name": "Channel_Get_Engage-detail",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel engage-detail</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.03.03 04:00:30\",\n        \"duration\": \"2020.09.01 ~ 2020.09.14\",\n        \"list\": [\n            {\n                \"yyyymmdd\": \"20200914\",\n                \"day_name\": \"월\",\n                \"engage_count\": 17907,\n                \"engage_rate\": 4.4,\n                \"views_count\": 399716,\n                \"likes_count\": 15767,\n                \"dislikes_count\": 203,\n                \"comments_count\": 731,\n                \"shares_count\": 1206,\n                \"bookmarked_count\": 6143\n            },\n            ...\n        ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel/engage-detail?page=1\",\n            \"from\": 1,\n            \"last_page\": 1,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel/engage-detail?page=1\",\n            \"next_page_url\": null,\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel/engage-detail\",\n            \"per_page\": 50,\n            \"prev_page_url\": null,\n            \"to\": 14,\n            \"total\": 14\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/engage-detail"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/impression-by-date",
    "title": "Channel Get Impression-by-date",
    "version": "1.0.0",
    "name": "Channel_Get_Impression-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel impression-by-date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>date(default)|month|year, ex: date</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"duration\": \"2020.09.01 ~ 2020.09.14\",\n        \"list\": [\n            {\n                \"yyyymmdd\": \"20200901\",\n                \"likes_count\": 8450,\n                \"dislikes_count\": 160\n            },\n            {\n                \"yyyymmdd\": \"20200902\",\n                \"likes_count\": 8289,\n                \"dislikes_count\": 170\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/impression-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/",
    "title": "Channel Get Many",
    "version": "1.0.0",
    "name": "Channel_Get_Many",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel- statistics list</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: &quot;2020-09-03&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>, ex: &quot;2020-09-20&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>accumulated(default)|others</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"base_date\": \"2020.09.20\",\n        \"list\": [\n            {\n                \"id\": 11,\n                \"name\": \"New-에라오\",\n                \"logo\": \"https://sns-dev-static.gemiso.com/images/channels/1611830076.png\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"Y\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"Y\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.01.14 14:00:17\",\n                \"updated_at\": \"2021.01.28 19:34:46\",\n                \"rank\": 1,\n                \"publish_count\": 15484,\n                \"views_count\": 412805679,\n                \"subscribers_count\": 749180,\n                \"estimated_revenue\": 598658598,\n                \"estimated_watched_hour\": 18229943.25,\n                \"rank_diff\": 0,\n                \"publish_count_diff\": 46,\n                \"views_diff\": 6273289,\n                \"subscribers_diff\": 14130,\n                \"revenue_diff\": 9677722,\n                \"watched_hour_diff\": 352816.05,\n                \"platforms\": [\n                    \"yt\",\n                    \"fb\",\n                    \"in\",\n                    \"tw\"\n                ]\n            },\n            ...\n        ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel?page=1\",\n            \"from\": 1,\n            \"last_page\": 2,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel?page=2\",\n            \"next_page_url\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel?page=2\",\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel\",\n            \"per_page\": 10,\n            \"prev_page_url\": null,\n            \"to\": 10,\n            \"total\": 12\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/playlist-views-by-date",
    "title": "Channel Get Playlist-views-by-date",
    "version": "1.0.0",
    "name": "Channel_Get_Playlist-views-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel statistics-Playlist hits by date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated|duration_and_accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>date(default)|month|year, ex: date</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 74,\n                \"channel_id\": 7,\n                \"platform_id\": 1,\n                \"sns_playlist_id\": \"PL9hiMmjtznrO8ASpjwTwnXikzOe_Z5HBp\",\n                \"title\": \"두시탈출 컬투쇼 UCC컨테스트\",\n                \"description\": \"컬투도 웃겼다! \\r\\n기발한 컬투쇼 UCC컨테스트 영상들 보고 가세요~\",\n                \"default_language_code\": null,\n                \"thumbnail_color\": null,\n                \"thumbnail_id\": 373,\n                \"open_state\": \"O\",\n                \"creater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2012.11.27 13:48:25\",\n                \"updated_at\": \"2021.02.05 00:08:59\",\n                \"rank\": 1,\n                \"views_count\": \"9054\",\n                \"views_weight\": \"0.5054\"\n            },\n            ...\n           ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel/views-playlist?page=1\",\n            \"from\": 1,\n            \"last_page\": 1,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel/views-playlist?page=1\",\n            \"next_page_url\": null,\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel/views-playlist\",\n            \"per_page\": 9999,\n            \"prev_page_url\": null,\n            \"to\": 77,\n            \"total\": 77\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/playlist-views-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/publish",
    "title": "Channel Get Publish",
    "version": "1.0.0",
    "name": "Channel_Get_Publish",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Video statistics list</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>&quot;views_rank&quot;|&quot;likes_rank&quot;|&quot;comments_rank&quot;|&quot;shares_rank&quot;|&quot;watched_rank&quot;|&quot;engage_rank&quot;, ex: views_rank+asc</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>accumulated(default)|others, ex: accumulated</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "departments",
            "description": "<p>the department list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"base_date\": \"2021.02.27\",\n        \"list\": [\n            {\n                \"id\": 5276,\n                \"sns_post_id\": \"xhbPbaAcjJs\",\n                \"channel_id\": 7,\n                \"platform_id\": 1,\n                \"metadata_id\": 5277,\n                \"thumbnail_id\": 117925,\n                \"state\": 4,\n                \"open_state\": \"O\",\n                \"on_monitoring\": \"N\",\n                \"is_live\": \"N\",\n                \"views\": 34985409,\n                \"likes\": 614095,\n                \"hates\": 16028,\n                \"shared\": 45006,\n                \"comments\": 25982,\n                \"playtimes\": 104,\n                \"duration\": 214,\n                \"publisher_id\": 1,\n                \"published_at\": \"2017.07.07 11:27:12\",\n                \"last_sync_at\": \"2021.01.28 21:47:43\",\n                \"last_analytics_sync_at\": \"2021.03.01 04:32:46\",\n                ...\n            }\n        ]\n            \n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/publish"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/publish-by-date",
    "title": "Channel Get Publish-by-date",
    "version": "1.0.0",
    "name": "Channel_Get_Publish-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Video Statistics-Publishing Views by Date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"yyyymmdd\": \"20210130\",\n            \"rank_1_views_count\": \"37651\",\n            \"rank_2_views_count\": \"5954\",\n            \"rank_3_views_count\": \"5435\",\n            \"rank_4_views_count\": \"2728\",\n            \"rank_5_views_count\": \"3818\"\n        },\n        {\n            \"yyyymmdd\": \"20210131\",\n            \"rank_1_views_count\": \"31868\",\n            \"rank_2_views_count\": \"5314\",\n            \"rank_3_views_count\": \"4459\",\n            \"rank_4_views_count\": \"2362\",\n            \"rank_5_views_count\": \"3450\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/publish-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/reach",
    "title": "Channel Get Reach",
    "version": "1.0.0",
    "name": "Channel_Get_Reach",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel Statistics-Reach</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"duration\": \"2020.09.01 ~ 2020.09.08\",\n        \"list\": [\n            {\n                \"yyyymmdd\": \"20200901\",\n                \"show_count\": 0,\n                \"watch_rate\": 0\n            },\n            {\n                \"yyyymmdd\": \"20200902\",\n                \"show_count\": 0,\n                \"watch_rate\": 0\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/reach"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/reach-by-date",
    "title": "Channel Get Reach-by-date",
    "version": "1.0.0",
    "name": "Channel_Get_Reach-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel statistics-Reach trend by date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>date(default)|month|year, ex: date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"duration\": \"2020.09.01 ~ 2020.09.08\",\n        \"list\": [\n            {\n                \"yyyymmdd\": \"20200901\",\n                \"show_count\": 0,\n                \"watch_rate\": 0\n            },\n            {\n                \"yyyymmdd\": \"20200902\",\n                \"show_count\": 0,\n                \"watch_rate\": 0\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/reach-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/reach-by-traffic-source",
    "title": "Channel Get Reach-by-traffic-source",
    "version": "1.0.0",
    "name": "Channel_Get_Reach-by-traffic-source",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel reach-by-traffic-source</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.03.03 04:00:30\",\n        \"duration\": \"2020.10.01 ~ 2020.10.24\",\n        \"list\": [\n            {\n                \"term\": \"twitter.com\",\n                \"views_count\": 1440,\n                \"views_weight\": 17.2,\n                \"estimated_watched_hour\": 79.9,\n                \"estimated_watched_weight\": 19.9\n            },\n            {\n                \"term\": \"Google Search\",\n                \"views_count\": 980,\n                \"views_weight\": 11.7,\n                \"estimated_watched_hour\": 30.4,\n                \"estimated_watched_weight\": 7.6\n            },\n            ...\n        ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel/reach-by-traffic-source?page=1\",\n            \"from\": 1,\n            \"last_page\": 1,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel/reach-by-traffic-source?page=1\",\n            \"next_page_url\": null,\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/analytics/channel/reach-by-traffic-source\",\n            \"per_page\": 50,\n            \"prev_page_url\": null,\n            \"to\": 40,\n            \"total\": 40\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/reach-by-traffic-source"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/revenue",
    "title": "Channel Get Revenue",
    "version": "1.0.0",
    "name": "Channel_Get_Revenue",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel revenue</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.03.03 04:00:30\",\n        \"duration\": \"2020.09.01 ~ 2020.09.30\",\n        \"revenue\": {\n            \"duration\": \"2020.09.01 ~ 2020.09.30\",\n            \"statistics\": [\n                {\n                    \"estimated_revenue\": 14371684,\n                    \"estimated_ad_revenue\": 13382081,\n                    \"estimated_ad_revenue_weight\": 93.1,\n                    \"estimated_red_partner_revenue\": 989603,\n                    \"estimated_red_revenue_weight\": 6.8,\n                    \"estimated_trade_revenue\": 0,\n                    \"estimated_trade_revenue_weight\": 0,\n                    \"gross_revenue\": 24328982,\n                    \"gross_revenue_weight\": 169.2\n                }\n            ]\n        },\n        \"revenue_by_date\": {\n            \"duration\": \"2020.09.01 ~ 2020.09.30\",\n            \"data\": [...]\n        },\n        \"revenue_ad_type_by_date\": {\n            \"duration\": \"2020.09.01 ~ 2020.09.30\",\n            \"list\": [...]\n        },\n        \"revenue_by_ad_type\": {\n            \"duration\": \"2020.09.01 ~ 2020.09.30\",\n            \"data\": [...]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/revenue"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/subscribers",
    "title": "Channel Get Subscribers",
    "version": "1.0.0",
    "name": "Channel_Get_Subscribers",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel Statistics-Subscribers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.03.03 04:00:30\",\n        \"duration\": \"2020.09.01 ~ 2020.09.08\",\n        \"subscribers\": {\n            \"statistics\": {\n                \"subscribers_count\": 7245,\n                \"subscribers_gained\": 9825,\n                \"subscribers_lost\": 2580,\n                \"total_subscribers_count\": 742538\n            },\n            \"duration\": \"2020.09.01 ~ 2020.09.08\"\n        },\n        \"subscribers_attendance_rate\": [\n            {\n                \"type\": \"non-subscribers\",\n                \"views_count\": 3344621,\n                \"likes_count\": 71969\n            },\n            {\n                \"type\": \"subscribers\",\n                \"views_count\": 131941,\n                \"likes_count\": 8672\n            }\n        ],\n        \"subscribers_by_date\": [\n            {\n                \"yyyymmdd\": \"20200908\",\n                \"subscribers_count\": 742538,\n                \"subscribers_gained\": 1133,\n                \"subscribers_lost\": 332,\n                \"views_count\": 356810,\n                \"likes_count\": 10269,\n                \"dislikes_count\": 144,\n                \"shares_count\": 972\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/subscribers"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/subscribers-by-date",
    "title": "Channel Get Subscribers-by-date",
    "version": "1.0.0",
    "name": "Channel_Get_Subscribers-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel subscribers-by-date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>date(default)|month|year, ex: date</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"duration\": \"2021.01.29 ~ 2021.02.27\",\n        \"list\": [\n            {\n                \"yyyymmdd\": \"20210129\",\n                \"subscribers_gained\": 1077600,\n                \"subscribers_lost\": 248234\n            },\n            {\n                \"yyyymmdd\": \"20210130\",\n                \"subscribers_gained\": 1078406,\n                \"subscribers_lost\": 248456\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/subscribers-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/summary",
    "title": "Channel Get Summary",
    "version": "1.0.0",
    "name": "Channel_Get_Summary",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel summary</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;, &quot;fb&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.03.03 04:00:30\",\n        \"duration\": \"2020.09.06 ~ 2020.09.06\",\n        \"accumulated_analytics\": {\n            \"publish_count\": 15447,\n            \"views_count\": 408402457,\n            \"subscribers_count\": 741005,\n            \"estimated_revenue\": 591861431,\n            \"estimated_watched\": 64787178900,\n            \"traffic_source_count\": 20929508,\n            \"show_count\": 0,\n            \"watch_count\": 0,\n            \"cpm\": 4257.2,\n            \"rpm\": 1449.2,\n            \"ad_sell_rate\": 60.25\n        },\n        \"new_analytics\": {\n            \"publish_count\": 1,\n            \"views_count\": 396009,\n            \"subscribers_count\": 739,\n            \"estimated_revenue\": 545298,\n            \"estimated_watched\": 80266320,\n            \"traffic_source_count\": 35648,\n            \"show_count\": 0,\n            \"watch_count\": 0,\n            \"cpm\": 3211.95,\n            \"rpm\": 1376.95,\n            \"ad_sell_rate\": 71.25\n        },\n       ...\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/summary"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/top/{count}/{order}",
    "title": "Channel Get Top",
    "version": "1.0.0",
    "name": "Channel_Get_Top",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel ranking list inquiry</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>default: 5, on params</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>&quot;views&quot;|&quot;subscribers&quot;|&quot;likes&quot;|&quot;revenue&quot;(default), on params</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 7,\n                \"name\": \"SBS Radio - 에라오\",\n                \"logo\": \"https://yt3.ggpht.com/a/AATXAJzkb55OXEMCRguVIUthlHiZv_QNaQ4XbokyiWVKAQ=s88-c-k-c0xffffffff-no-rj-mo\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"Y\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"Y\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.28 14:07:39\",\n                \"updated_at\": \"2020.08.28 14:07:39\",\n                \"rank\": 1,\n                \"publish_count\": 15830,\n                \"views_count\": 455354337,\n                \"likes_count\": 6414181,\n                \"subscribers_count\": 845946,\n                \"estimated_revenue\": 668362745,\n                \"platforms\": [\n                    \"yt\",\n                    \"fb\"\n                ]\n            },\n            ...\n        ],\n        \"base_date\": \"2021.02.27\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/top/{count}/{order}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/views",
    "title": "Channel Get Views",
    "version": "1.0.0",
    "name": "Channel_Get_Views",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel views</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.03.03 04:00:30\",\n        \"duration\": \"2021.01.29 ~ 2021.02.27\",\n        \"views\": {\n            \"statistics\": {\n                \"views_count\": 455354337\n            },\n            \"base_date\": \"2021.02.27\"\n        },\n        \"views_by_date\": {},\n        \"views_by_weekdays\": [],\n        \"views_by_hour\": []\n       ...\n        \n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/views"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/views-by-date",
    "title": "Channel Get Views-by-date",
    "version": "1.0.0",
    "name": "Channel_Get_Views-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel statistics- views by date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated|duration_and_accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>date(default)|month|year, ex: date</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"duration\": \"2020.08.01 ~ 2020.08.08\",\n        \"list\": [\n            {\n                \"yyyymmdd\": \"20200801\",\n                \"views_count\": 409483,\n                \"previous_views_count\": 640527\n            },\n            {\n                \"yyyymmdd\": \"20200802\",\n                \"views_count\": 399972,\n                \"previous_views_count\": 416197\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/views-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/watch",
    "title": "Channel Get Watch",
    "version": "1.0.0",
    "name": "Channel_Get_Watch",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics channel watch</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.03.03 04:00:30\",\n        \"duration\": \"2021.01.29 ~ 2021.02.27\",\n        \"watch\": {\n            \"estimated_watched_hour\": 502777.95,\n            \"diff\": 25883.633333999955,\n            \"base_date\": \"2021.02.27\"\n        },\n        \"watch_by_date\": {\n            \"duration\": \"2021.01.29 ~ 2021.02.27\",\n            \"list\": [\n                {\n                    \"yyyymmdd\": \"20210129\",\n                    \"estimated_watched_hour\": 16384,\n                    \"previous_estimated_watched_hour\": 14440.85\n                },\n                ...\n            ]\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/watch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/watch-by-date",
    "title": "Channel Get Watch-by-date",
    "version": "1.0.0",
    "name": "Channel_Get_Watch-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel statistics-Trend of viewing information by date</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>date(default)|month|year, ex: date</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"duration\": \"2020.08.01 ~ 2020.09.08\",\n        \"list\": [\n            {\n                \"yyyymmdd\": \"20200801\",\n                \"estimated_watched_hour\": 19460.8,\n                \"previous_estimated_watched_hour\": 22215.1\n            },\n            {\n                \"yyyymmdd\": \"20200802\",\n                \"estimated_watched_hour\": 18895.85,\n                \"previous_estimated_watched_hour\": 47583.15\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/watch-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/channel/views-playlist",
    "title": "Channel Get views-playlist",
    "version": "1.0.0",
    "name": "Channel_Get_views-playlist",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel statistics- views-playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "start_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "end_date",
            "description": "<p>Date, ex: 2020-09-06</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>duration(default)|accumulated|duration_and_accumulated, ex: duration</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>ex: 10</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>ex: 1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list, ex: [6,7]</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>ex: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"duration\": \"2020.01.01 ~ 2020.12.31\",\n        \"list\": [\n            {\n                \"yyyy\": \"2020\",\n                \"views_count\": 1506535\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/channel/views-playlist"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/comments",
    "title": "Group Get Comments",
    "version": "1.0.0",
    "name": "Group_Get_Comments",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group comments</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/comments",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/comments"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/comments-by-date",
    "title": "Group Get Comments-by-date",
    "version": "1.0.0",
    "name": "Group_Get_Comments-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group comments-by-date</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/comments-by-date",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/comments-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/likes",
    "title": "Group Get Likes",
    "version": "1.0.0",
    "name": "Group_Get_Likes",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group likes</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/likes",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/likes"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/likes-by-date",
    "title": "Group Get Likes-by-date",
    "version": "1.0.0",
    "name": "Group_Get_Likes-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group likes-by-date</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/likes-by-date",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/likes-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/",
    "title": "Group Get Many",
    "version": "1.0.0",
    "name": "Group_Get_Many",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/{id}",
    "title": "Group Get One",
    "version": "1.0.0",
    "name": "Group_Get_One",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group {id}</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/{id}",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/revenue",
    "title": "Group Get Revenue",
    "version": "1.0.0",
    "name": "Group_Get_Revenue",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group revenue</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/revenue",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/revenue"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/revenue-by-ad-type",
    "title": "Group Get Revenue-by--ad-type",
    "version": "1.0.0",
    "name": "Group_Get_Revenue-by--ad-type",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group revenue-by--ad-type</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/revenue-by-ad-type",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/revenue-by-ad-type"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/revenue-by-date",
    "title": "Group Get Revenue-by-date",
    "version": "1.0.0",
    "name": "Group_Get_Revenue-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group revenue-by-date</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/revenue-by-date",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/revenue-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/shares",
    "title": "Group Get Shares",
    "version": "1.0.0",
    "name": "Group_Get_Shares",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group shares</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/shares",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/shares"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/shares-by-date",
    "title": "Group Get Shares-by-date",
    "version": "1.0.0",
    "name": "Group_Get_Shares-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group shares-by-date</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/shares-by-date",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/shares-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/tags",
    "title": "Group Get Tags",
    "version": "1.0.0",
    "name": "Group_Get_Tags",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group tags</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/tags",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/tags"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/trend",
    "title": "Group Get Trend",
    "version": "1.0.0",
    "name": "Group_Get_Trend",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group trend</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/trend",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/trend"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/views",
    "title": "Group Get Views",
    "version": "1.0.0",
    "name": "Group_Get_Views",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group views</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/views",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/views"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/views-by-date",
    "title": "Group Get Views-by-date",
    "version": "1.0.0",
    "name": "Group_Get_Views-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group views-by-date</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/views-by-date",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/views-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/views-by-traffic-source",
    "title": "Group Get Views-by-traffic-source",
    "version": "1.0.0",
    "name": "Group_Get_Views-by-traffic-source",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group views-by-traffic-source</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/views-by-traffic-source",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/views-by-traffic-source"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/group/watch",
    "title": "Group Get Watch",
    "version": "1.0.0",
    "name": "Group_Get_Watch",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics group watch</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/group/watch",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/group/watch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/comments",
    "title": "Publish Get Comments",
    "version": "1.0.0",
    "name": "Publish_Get_Comments",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish comments</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/comments",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/comments"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/comments-by-date",
    "title": "Publish Get Comments-by-date",
    "version": "1.0.0",
    "name": "Publish_Get_Comments-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish comments-by-date</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/comments-by-date",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/comments-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/likes",
    "title": "Publish Get Likes",
    "version": "1.0.0",
    "name": "Publish_Get_Likes",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish likes</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/likes",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/likes"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/",
    "title": "Publish Get Many",
    "version": "1.0.0",
    "name": "Publish_Get_Many",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/{id}",
    "title": "Publish Get One",
    "version": "1.0.0",
    "name": "Publish_Get_One",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get analytics publish {id}</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/{id}",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/revenue",
    "title": "Publish Get Revenue",
    "version": "1.0.0",
    "name": "Publish_Get_Revenue",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish revenue</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/revenue",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/revenue"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/revenue-by-ad-type",
    "title": "Publish Get Revenue-by-ad-type",
    "version": "1.0.0",
    "name": "Publish_Get_Revenue-by-ad-type",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish revenue-by-ad-type</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/revenue-by-ad-type",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/revenue-by-ad-type"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/revenue-by-date",
    "title": "Publish Get Revenue-by-date",
    "version": "1.0.0",
    "name": "Publish_Get_Revenue-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish revenue-by-date</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/revenue-by-date",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/revenue-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/shares",
    "title": "Publish Get Shares",
    "version": "1.0.0",
    "name": "Publish_Get_Shares",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish shares</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/shares",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/shares"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/shares-by-date",
    "title": "Publish Get Shares-by-date",
    "version": "1.0.0",
    "name": "Publish_Get_Shares-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish shares-by-date</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/shares-by-date",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/shares-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/summary",
    "title": "Publish Get Summary",
    "version": "1.0.0",
    "name": "Publish_Get_Summary",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish summary</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/summary",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/summary"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/tags",
    "title": "Publish Get Tags",
    "version": "1.0.0",
    "name": "Publish_Get_Tags",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish tags</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/tags",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/tags"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/top/{count}/{order}",
    "title": "Publish Get Top",
    "version": "1.0.0",
    "name": "Publish_Get_Top",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish top/{count}/{order}</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/top/{count}/{order}",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/top/{count}/{order}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/trend",
    "title": "Publish Get Trend",
    "version": "1.0.0",
    "name": "Publish_Get_Trend",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish trend</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/trend",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/trend"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/views",
    "title": "Publish Get Views",
    "version": "1.0.0",
    "name": "Publish_Get_Views",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish views</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/views",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/views"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/views-by-date",
    "title": "Publish Get Views-by-date",
    "version": "1.0.0",
    "name": "Publish_Get_Views-by-date",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish views-by-date</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/views-by-date",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/views-by-date"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/views-by-traffic-source",
    "title": "Publish Get Views-by-traffic-source",
    "version": "1.0.0",
    "name": "Publish_Get_Views-by-traffic-source",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish views-by-traffic-source</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/views-by-traffic-source",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/views-by-traffic-source"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/watch",
    "title": "Publish Get Watch",
    "version": "1.0.0",
    "name": "Publish_Get_Watch",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish watch</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/watch",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/watch"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/publish/sync-publish-statistics",
    "title": "Publish Get sync-publish-statistics",
    "version": "1.0.0",
    "name": "Publish_Get_sync-publish-statistics",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics publish sync-publish-statistics</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/publish/sync-publish-statistics",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/publish/sync-publish-statistics"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/report/{platform}",
    "title": "Report Get Platform",
    "version": "1.0.0",
    "name": "Report_Get_Platform",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics report {platform}</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/report/{platform}",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/report/{platform}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/report/tags",
    "title": "Report Get Tags",
    "version": "1.0.0",
    "name": "Report_Get_Tags",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics report tags</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/report/tags",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/report/tags"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/report/tags-by-page",
    "title": "Report Get Tags-by-page",
    "version": "1.0.0",
    "name": "Report_Get_Tags-by-page",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics report tags-by-page</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/report/tags-by-page",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/report/tags-by-page"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/report/trend",
    "title": "Report Get Trend",
    "version": "1.0.0",
    "name": "Report_Get_Trend",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>analytics report trend</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/analytics/report/trend",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/report/trend"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/summary/",
    "title": "Summary Get",
    "version": "1.0.0",
    "name": "Summary_Get",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Statistics-Overview</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.03.03 04:00:30\",\n        \"publishings\": {\n            \"base_date\": \"2021.02.27\",\n            \"duration\": \"lifetime\",\n            \"data\": {\n                \"total_publish_count\": 18654,\n                \"diff\": 1\n            }\n        },\n        \"publishings_by_date\": {},\n        \"subscribers\": {\n            \"base_date\": \"2021.02.27\",\n            \"duration\": \"lifetime\",\n            \"data\": {\n                \"total_subscriber_count\": 929660,\n                \"diff\": 618\n            }\n        },\n        \"subscribers_by_date\": {\n            \"duration\": \"2021.01.29 ~ 2021.02.27\",\n            \"data\": []\n        },\n        \"impressions\": {\n            \"base_date\": \"2021.02.27\",\n            \"duration\": \"lifetime\",\n            \"data\": {\n                \"total_views_count\": 467212244,\n                \"total_likes_count\": 6555754,\n                \"total_dislikes_count\": 126068\n            }\n        },\n        \"impressions_by_date\": {\n            \"duration\": \"2021.01.29 ~ 2021.02.27\",\n            \"data\": []\n        },\n        \"countries\": {\n            \"duration\": \"2020.11.27 ~ 2021.02.27\",\n            \"data\": [ ]\n        },\n        \"platforms\": {\n            \"duration\": \"2020.11.27 ~ 2021.02.27\",\n            \"data\": []\n        },\n        \"channels\": {\n            \"list\": [],\n            \"base_date\": \"2021.02.27\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/summary/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/analytics/summary/top/{count}/{order}",
    "title": "Summary Get Top",
    "version": "1.0.0",
    "name": "Summary_Get_Top",
    "group": "Analytics",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Video Statistics-Ranking</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "count",
            "description": "<p>default: 5, on params</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "order",
            "description": "<p>&quot;new&quot;|&quot;revenue&quot;|&quot;views&quot;(default), on params</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"base_date\": \"2021.02.27\",\n        \"list\": [\n            {\n                \"id\": 5276,\n                \"sns_post_id\": \"xhbPbaAcjJs\",\n                \"channel_id\": 7,\n                \"platform_id\": 1,\n                \"metadata_id\": 5277,\n                \"thumbnail_id\": 117925,\n                \"state\": 4,\n                \"open_state\": \"O\",\n                \"on_monitoring\": \"N\",\n                \"is_live\": \"N\",\n                \"views\": 34985409,\n                \"likes\": 614095,\n                \"hates\": 16028,\n                \"shared\": 45006,\n                \"comments\": 25982,\n                \"playtimes\": 104,\n                \"duration\": 214,\n                \"publisher_id\": 1,\n                \"published_at\": \"2017.07.07 11:27:12\",\n                \"last_sync_at\": \"2021.01.28 21:47:43\",\n                \"last_analytics_sync_at\": \"2021.03.01 04:32:46\",\n                \"creater_id\": 25,\n                \"updater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.09.23 14:10:10\",\n                \"updated_at\": \"2021.03.03 00:05:24\",\n                \"rank\": 1,\n                \"views_count\": 35058409,\n                \"estimated_revenue\": 15300939,\n                \"channel\": {\n                    \"id\": 7,\n                    \"name\": \"SBS Radio - 에라오\",\n                    \"logo\": \"https://yt3.ggpht.com/a/AATXAJzkb55OXEMCRguVIUthlHiZv_QNaQ4XbokyiWVKAQ=s88-c-k-c0xffffffff-no-rj-mo\",\n                    \"logo_clip_yn\": \"N\",\n                    \"use_logo_clip_yn\": \"Y\",\n                    \"logo_clip_url\": null,\n                    \"logo_thumbnail_yn\": \"N\",\n                    \"use_logo_thumbnail_yn\": \"Y\",\n                    \"logo_thumbnail_url\": null,\n                    \"sns_download_speed\": \"2\",\n                    \"active_yn\": \"Y\",\n                    \"creater_id\": 2,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2020.08.28 14:07:39\",\n                    \"updated_at\": \"2020.08.28 14:07:39\"\n                },\n                \"platform\": {\n                    \"id\": 1,\n                    \"short_name\": \"yt\",\n                    \"name\": \"Youtube\",\n                    \"image_url\": \"https://sns-dev-static.gemiso.com/images/platforms/cli-yt.png\",\n                    \"active_yn\": \"Y\",\n                    \"deleted_at\": null\n                },\n                \"thumbnail\": {\n                    \"id\": 117925,\n                    \"archive_id\": null,\n                    \"sequence\": 0,\n                    \"url\": \"https://i.ytimg.com/vi/xhbPbaAcjJs/mqdefault.jpg\",\n                    \"original_url\": \"https://i.ytimg.com/vi/xhbPbaAcjJs/maxresdefault.jpg\",\n                    \"file_name\": \"https://i.ytimg.com/vi/xhbPbaAcjJs/maxresdefault.jpg\",\n                    \"creater_id\": 2,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2021.01.28 21:47:49\",\n                    \"updated_at\": \"2021.01.28 21:47:49\"\n                },\n                \"metadata\": {\n                    \"id\": 5277,\n                    \"title\": \"블랙핑크(BLACKPINK), 마지막처럼 [SBS 박소현의 러브게임]\",\n                    \"description\": \"2017년7월5일,박소현의 러브게임\\nhttp://radio.sbs.co.kr/lovegame/\",\n                    \"default_audio_language_code\": \"ko\",\n                    \"open_comment\": \"open\",\n                    \"order_comment\": \"recent\",\n                    \"category_id\": 10,\n                    \"for_child\": \"N\",\n                    \"for_adult\": \"N\",\n                    \"location\": null,\n                    \"sharable\": \"Y\",\n                    \"ppl\": \"N\",\n                    \"notice_ppl\": \"N\",\n                    \"analytics_proposal\": null,\n                    \"creater_id\": 25,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2020.09.23 14:10:10\",\n                    \"updated_at\": \"2021.01.28 21:47:49\",\n                    \"subtitles_stat\": []\n                }\n            },\n            ...\n           ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/analytics.js",
    "groupTitle": "Analytics",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/analytics/summary/top/{count}/{order}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/archive/{id}/download",
    "title": "Download Asset",
    "version": "1.0.0",
    "name": "Download_Asset",
    "group": "Archive",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Download original video</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>archive id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response File:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/archive.js",
    "groupTitle": "Archive",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/archive/{id}/download"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/archive/",
    "title": "Get All",
    "version": "1.0.0",
    "name": "Get_All",
    "group": "Archive",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Archive list inquiry</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user, on params</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "params = {\n   \"page\":1,\n   \"page_size\":10,\n   \"duration\":{\n      \"start_date\":\"2020-12-10\",\n      \"end_date\":\"2021-01-12\",\n      \"scope\":\"published_at\"\n   },\n   \"platforms\":[],\n   \"departments\":[],\n   \"channels\":[],\n   \"keyword\":{\n      \"keyword\":\"\",\n      \"scope\":[\"\"]\n   },\n   \"order\":\"created_at\",\n   \"state\":[]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>archive file list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"result\": true,\n  \"locale\": \"ko\",\n  \"message\": null,\n  \"data\": {\n      \"paging\": {\n          \"current_page\": 1,\n          \"first_page_url\": \"http://localhost/v1/archive?page=1\",\n          \"from\": 1,\n          \"last_page\": 4,\n          \"last_page_url\": \"http://localhost/v1/archive?page=4\",\n          \"next_page_url\": \"http://localhost/v1/archive?page=2\",\n          \"path\": \"http://localhost/v1/archive\",\n          \"per_page\": 10,\n          \"prev_page_url\": null,\n          \"to\": 10,\n          \"total\": 36\n      },\n      \"list\": [\n          {\n              \"id\": 473,\n              \"title\": \"[고뉴브] 2021년 1월 13일 (수) '가습기 살균제' SK케미칼, 애경산업 前 대표들 1심 무죄 / 신규확진 537명..BTJ 열방센터 집단감염 확산/ 코로나 이익공유제?\",\n              \"description\": \"#고현준의뉴스브리핑 #고뉴브 #SBS라디오 #시교라\\n\\n▶ 고고뉴스 / 손지은서울신문 정치부 기자\\n▶ 주요 뉴스브리핑 / 박순봉 경향신문 정치부 기자...\",\n              \"duration\": 3413,\n              \"thumbnail_id\": 99708,\n              \"uploaded_file_id\": 370,\n              \"status\": \"P\",\n              \"creater_id\": 9,\n              \"updater_id\": 9,\n              \"deleted_at\": null,\n              \"created_at\": \"2021.01.13 10:12:21\",\n              \"updated_at\": \"2021.01.13 10:53:42\",\n              \"archive_id\": 473,\n              \"publish_cnt\": 1,\n              \"youtube\": 1,\n              \"facebook\": 0,\n              \"instagram\": 0,\n              \"twitter\": 0,\n              \"last_published_at\": \"2021-01-12 05:43:23\",\n              \"live_cnt\": 0,\n              \"preview\": \"https://sns-dev-static.gemiso.com/movies/previews/1610499940.mp4\",\n              \"thumbnail\": {\n                  \"id\": 99708,\n                  \"archive_id\": 473,\n                  \"sequence\": 1,\n                  \"url\": \"https://sns-dev-static.gemiso.com/images/thumbnails/1610499940_001_w265.jpg\",\n                  \"original_url\": \"https://sns-dev-static.gemiso.com/images/scenes/1610499940_001.jpg\",\n                  \"file_name\": \"1610499940_001.jpg\",\n                  \"creater_id\": 1,\n                  \"deleted_at\": null,\n                  \"created_at\": \"2021.01.13 10:18:39\",\n                  \"updated_at\": \"2021.01.13 10:18:39\"\n              },\n              \"uploader\": {\n                  \"id\": 9,\n                  \"user_id\": \"antonio\",\n                  \"name\": \"염종훈\",\n                  \"tel\": \"02-1111-2223\",\n                  \"locale\": \"ko\",\n                  \"profile_id\": 159,\n                  \"active_yn\": \"Y\",\n                  \"last_logined_at\": \"2021.01.12 15:42:54\",\n                  \"deleted_at\": null,\n                  \"created_at\": \"2020.08.14 08:27:58\",\n                  \"updated_at\": \"2021.01.12 06:42:54\",\n                  \"is_admin\": true\n              },\n              \"uploaded_file\": {\n                  \"id\": 370,\n                  \"file_path\": \"/movies/\",\n                  \"file_name\": \"collect_1610499940.mp4\",\n                  \"save_file_name\": \"1610499940.mp4\",\n                  \"file_size\": 1043669022,\n                  \"creater_id\": 9,\n                  \"deleted_at\": null,\n                  \"created_at\": \"2021.01.13 10:12:21\",\n                  \"updated_at\": \"2021.01.13 10:12:21\"\n              },\n              \"archive_media\": [\n                  {\n                  \n                      \"id\": 1251,\n                      \"publish_id\": 20405,\n                      \"archive_id\": 473,\n                      \"order\": 1,\n                      \"in\": 0,\n                      \"out\": 3413,\n                      \"file_path\": \"/movies/\",\n                      \"file_name\": \"1610499940.mp4\",\n                      \"file_size\": 1043669022,\n                      \"duration\": 3413,\n                      \"preview\": \"https://sns-dev-static.gemiso.com/movies/previews/1610499940.mp4\",\n                      \"status\": \"C\",\n                      \"creater_id\": 2,\n                      \"deleted_at\": null,\n                      \"created_at\": \"2021.01.13 11:31:59\",\n                      \"updated_at\": \"2021.01.13 11:31:59\"\n                  }\n              ]\n          }\n\n      ]\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/archive.js",
    "groupTitle": "Archive",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/archive/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/archive/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Archive",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>archive id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of archive file</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 531,\n        \"title\": \"the fox\",\n        \"description\": \"fox fox fox\",\n        \"duration\": 14,\n        \"thumbnail_id\": 159826,\n        \"uploaded_file_id\": 486,\n        \"status\": \"P\",\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.23 15:48:58\",\n        \"updated_at\": \"2021.02.23 15:49:01\",\n        \"thumbnail\": {\n            \"id\": 159826,\n            \"archive_id\": 531,\n            \"sequence\": 1,\n            \"url\": \"https://sns-dev-static.gemiso.com/images/thumbnails/1614062938_w265.jpg\",\n            \"original_url\": \"https://sns-dev-static.gemiso.com/images/scenes/1614062938.jpg\",\n            \"file_name\": \"1614062938.jpg\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.02.23 15:49:01\",\n            \"updated_at\": \"2021.02.23 15:49:01\"\n        },\n        \"uploader\": {\n            \"id\": 2,\n            \"user_id\": \"admin\",\n            \"name\": \"관리자\",\n            \"tel\": \"11111\",\n            \"locale\": \"ko\",\n            \"profile_id\": 367,\n            \"active_yn\": \"Y\",\n            \"last_logined_at\": \"2021.02.23 13:30:58\",\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.14 08:27:58\",\n            \"updated_at\": \"2021.02.23 04:30:58\",\n            \"is_admin\": true\n        },\n        \"updater\": {\n            \"id\": 2,\n            \"user_id\": \"admin\",\n            \"name\": \"관리자\",\n            \"tel\": \"11111\",\n            \"locale\": \"ko\",\n            \"profile_id\": 367,\n            \"active_yn\": \"Y\",\n            \"last_logined_at\": \"2021.02.23 13:30:58\",\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.14 08:27:58\",\n            \"updated_at\": \"2021.02.23 04:30:58\",\n            \"is_admin\": true\n        },\n        \"publishings\": [],\n        \"lives\": [],\n        \"uploaded_file\": {\n            \"id\": 486,\n            \"file_path\": \"/movies/\",\n            \"file_name\": \"fox.mp4\",\n            \"save_file_name\": \"1614062938.mp4\",\n            \"file_size\": 1554735,\n            \"creater_id\": 2,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.02.23 15:48:58\",\n            \"updated_at\": \"2021.02.23 15:48:58\"\n        },\n        \"thumbnails\": [\n            {\n                \"id\": 159826,\n                \"archive_id\": 531,\n                \"sequence\": 1,\n                \"url\": \"https://sns-dev-static.gemiso.com/images/thumbnails/1614062938_w265.jpg\",\n                \"original_url\": \"https://sns-dev-static.gemiso.com/images/scenes/1614062938.jpg\",\n                \"file_name\": \"1614062938.jpg\",\n                \"creater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.02.23 15:49:01\",\n                \"updated_at\": \"2021.02.23 15:49:01\"\n            }\n        ],\n        \"archive_media\": [\n            {\n                \"id\": 1441,\n                \"publish_id\": null,\n                \"archive_id\": 531,\n                \"order\": 0,\n                \"in\": 0,\n                \"out\": 14,\n                \"file_path\": \"/movies/\",\n                \"file_name\": \"1614062938.mp4\",\n                \"file_size\": 1554735,\n                \"duration\": 14,\n                \"preview\": \"https://sns-dev-static.gemiso.com/movies/previews/1614062938.mp4\",\n                \"status\": \"C\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.02.23 15:49:01\",\n                \"updated_at\": \"2021.02.23 15:49:04\"\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/archive.js",
    "groupTitle": "Archive",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/archive/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/archive/{id}/download/preview",
    "title": "Get Preview",
    "version": "1.0.0",
    "name": "Get_One_Preview",
    "group": "Archive",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Archive-Download preview video</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>archive id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response File:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/archive.js",
    "groupTitle": "Archive",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/archive/{id}/download/preview"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/archive/{id}/thumbnail/{thumbnail_id}",
    "title": "Patch A Thumbnail",
    "version": "1.0.0",
    "name": "Patch_A_Thumbnail",
    "group": "Archive",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Archive-Designate representative thumbnail</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>archive id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "thumbnail_id",
            "description": "<p>the thumbnail id is designated</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 513,\n        \"title\": \"1597142361.mp4\",\n        \"description\": null,\n        \"duration\": 24,\n        \"thumbnail_id\": 99707,\n        \"uploaded_file_id\": 430,\n        \"status\": \"C\",\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.09 11:24:00\",\n        \"updated_at\": \"2021.02.23 17:45:19\",\n        \"thumbnail\": {\n            \"id\": 99707,\n            \"archive_id\": null,\n            \"sequence\": 0,\n            \"url\": \"https://i9.ytimg.com/vi/uFvZolIXg0Q/mqdefault_live.jpg?sqp=CJST-f8F&rs=AOn4CLCQR3rhsVpsXV0h1JB0y3o95-yrFw\",\n            \"original_url\": \"https://i9.ytimg.com/vi/uFvZolIXg0Q/maxresdefault_live.jpg?sqp=CJST-f8F&rs=AOn4CLD15uHk7ZK5a9QQ07yt6Kl2xaraHQ\",\n            \"file_name\": \"https://i9.ytimg.com/vi/uFvZolIXg0Q/maxresdefault_live.jpg?sqp=CJST-f8F&rs=AOn4CLD15uHk7ZK5a9QQ07yt6Kl2xaraHQ\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.01.13 10:15:42\",\n            \"updated_at\": \"2021.01.13 10:15:42\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/archive.js",
    "groupTitle": "Archive",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/archive/{id}/thumbnail/{thumbnail_id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/archive/remove-multi",
    "title": "Post Remove-multi",
    "version": "1.0.0",
    "name": "Post_Remove-multi",
    "group": "Archive",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Archive batch deletion</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ids",
            "description": "<p>user id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"ids\":[531]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n    \"trace\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/archive.js",
    "groupTitle": "Archive",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/archive/remove-multi"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/archive/{id}",
    "title": "Put One",
    "version": "1.0.0",
    "name": "Put_One",
    "group": "Archive",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put One</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/archive/{id}",
        "type": "json"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the archive id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>video title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>video content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "thumbnail_id",
            "description": "<p>archive id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"title\": \"the fox\",\n    \"description\": \"fox video content\",\n    \"thumbnail_id\": 98798    \n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of archive file</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 531,\n        \"title\": \"테스트\",\n        \"description\": \"테스트 영상으로 설명 교체\",\n        \"duration\": 14,\n        \"thumbnail_id\": 98798,\n        \"uploaded_file_id\": 486,\n        \"status\": \"P\",\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.23 15:48:58\",\n        \"updated_at\": \"2021.02.23 17:15:40\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/archive.js",
    "groupTitle": "Archive",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/archive/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/archive/upload",
    "title": "Upload One",
    "version": "1.0.0",
    "name": "Upload_One",
    "group": "Archive",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Archive upload</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>required|file|mimetypes:video/x-ms-asf,video/x-flv,video/mp4,application/x-mpegURL,video/MP2T,video/3gpp,video/quicktime,video/x-msvideo,video/x-ms-wmv,video/avi</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of archive file</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of archive file</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Video title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Video content</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Processing status (D | P | R | C) ???</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"title\": \"the fox\",\n        \"description\": \"fox fox fox\",\n        \"status\": \"P\",\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"updated_at\": \"2021.02.23 15:48:58\",\n        \"created_at\": \"2021.02.23 15:48:58\",\n        \"id\": 531,\n        \"uploaded_file_id\": 486\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"result\": false,\n    \"code\": 422,\n    \"locale\": \"ko\",\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n        \"file\": [\n            \"file은(는) 필수값 입니다.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/archive.js",
    "groupTitle": "Archive",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/archive/upload"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/",
    "title": "Auth",
    "version": "1.0.0",
    "name": "Auth",
    "group": "Auth",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Authenticated user information inquiry</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer  {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": \"성공\",\n    \"data\": {\n        \"id\": 2,\n        \"user_id\": \"admin\",\n        \"name\": \"관리자\",\n        \"tel\": \"11111\",\n        \"locale\": \"ko\",\n        \"profile_id\": 367,\n        \"alram_settings\": {}...},\n        \"active_yn\": \"Y\",\n        \"last_logined_at\": \"2021.02.19 12:37:46\",\n        \"deleted_at\": null,\n        \"created_at\": \"2020.08.14 08:27:58\",\n        \"updated_at\": \"2021.02.19 03:37:46\",\n        \"use_analytics_dashboard\": true,\n        \"profile_url\": \"https://sns-dev-static.gemiso.com/images/profiles/1609824865.PNG\",\n        \"recent_notifications\": [...],\n        \"roles\": {...},\n        \"profile\": {\n            \"id\": 367,\n            \"file_path\": \"/images/profiles/\",\n            \"file_name\": \"gsma-logo.PNG\",\n            \"save_file_name\": \"1609824865.PNG\",\n            \"file_size\": 11179,\n            \"creater_id\": 9,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.01.05 14:34:25\",\n            \"updated_at\": \"2021.01.05 14:34:25\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/auth/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/auth/login",
    "title": "Auth Login",
    "version": "1.0.0",
    "name": "Auth_Login",
    "group": "Auth",
    "permission": [
      {
        "name": "Everyone"
      }
    ],
    "description": "<p>login and get access_token</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of user, on params</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>access token of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": \"성공\",\n    \"data\": {\n        \"access_token\": \"eyJ0eXAiOiJKV1QiL...\",\n        \"refresh_token\": \"eyJ0eXAiOiJKV1QiL...\",\n        \"token_type\": \"bearer\",\n        \"expires_in\": 86400,\n        \"id\": 2,\n        \"user_id\": \"admin\",\n        \"name\": \"관리자\",\n        \"tel\": \"11111\",\n        \"locale\": \"ko\",\n        \"profile_id\": 367,\n     ...}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"message\": \"입력한 정보가 일치하지 않습니다. 다시 확인해 주세요.\",\n    \"data\": null,\n    \"errors\": \"입력한 정보가 일치하지 않습니다. 다시 확인해 주세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/auth/login"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/logout",
    "title": "Auth Logout",
    "version": "1.0.0",
    "name": "Auth_Logout",
    "group": "Auth",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer  {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "description": "<p>Logout</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": \"Successfully logged out\",\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Token could not be parsed from the request.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/auth/logout"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/auth/refresh",
    "title": "Auth Refresh",
    "version": "1.0.0",
    "name": "Auth_Refresh",
    "group": "Auth",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>refresh token</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer  {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": \"성공\",\n    \"data\": {\n        \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc25zLWRldi1hcGkuZ2VtaXNvLmNvbVwvdjFcL2F1dGhcL3JlZnJlc2giLCJpYXQiOjE2MTM3MDU4NjYsImV4cCI6MTYxMzc5Mjk0NCwibmJmIjoxNjEzNzA2NTQ0LCJqdGkiOiJKamxEM21NaTdNeGVvdHZpIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.uxLiSSgYtCDY7xceT6ErivSlGyGFpgoAhiibjDb6edw\",\n        \"refresh_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc25zLWRldi1hcGkuZ2VtaXNvLmNvbVwvdjFcL2F1dGhcL3JlZnJlc2giLCJpYXQiOjE2MTM3MDU4NjYsImV4cCI6MTYxMzc5Mjk0NCwibmJmIjoxNjEzNzA2NTQ0LCJqdGkiOiJKamxEM21NaTdNeGVvdHZpIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.uxLiSSgYtCDY7xceT6ErivSlGyGFpgoAhiibjDb6edw\",\n        \"token_type\": \"bearer\",\n        \"expires_in\": 86400\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 403 Forbidden\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"message\": \"인증이 만료되었습니다.\\\\n다시 로그인 해 주시기 바랍니다.\",\n    \"data\": null,\n    \"errors\": \"Token could not be parsed from the request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/auth.js",
    "groupTitle": "Auth",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/auth/refresh"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/categories/{platform}",
    "title": "Get Categories",
    "version": "1.0.0",
    "name": "Get_Categories",
    "group": "Categories",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get video categories from platform_slug</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "platform",
            "description": "<p>yt, fb, in, tw (Youtube, Facebook, Instagram, Twitter)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.id",
            "description": "<p>the ID of the video category</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.platform_id",
            "description": "<p>the ID of the platform</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.title",
            "description": "<p>the title of the video category</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 20,\n            \"platform_id\": 1,\n            \"title\": \"게임\"\n        },\n        {\n            \"id\": 28,\n            \"platform_id\": 1,\n            \"title\": \"과학기술\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/apidocs.js",
    "groupTitle": "Categories",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/categories/{platform}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/channels/",
    "title": "Create a Channel",
    "version": "1.0.0",
    "name": "Create_a_Channel",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Create a Channel</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>a image url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n\t\"name\": \"테스트 채널\",\n   \"logo\":\"https://sns-dev-static.gemiso.com/images/channels/1613636304.png\",\n\t\"logo_clip_yn\": \"N\",\n\t\"use_logo_clip_yn\": \"N\",\n\t\"logo_clip\": null,\n\t\"logo_thumbnail_yn\": \"N\",\n\t\"use_logo_thumbnail_yn\": \"N\",\n\t\"logo_thumbnail\": null,\n\t\"active_yn\": \"Y\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"name\": \"테스트 채널\",\n        \"logo\": \"https://sns-dev-static.gemiso.com/images/channels/1613636304.png\",\n        \"logo_clip_yn\": \"N\",\n        \"use_logo_clip_yn\": \"N\",\n        \"logo_clip_url\": null,\n        \"logo_thumbnail_yn\": \"N\",\n        \"use_logo_thumbnail_yn\": \"N\",\n        \"logo_thumbnail_url\": null,\n        \"sns_download_speed\": \"2\",\n        \"active_yn\": \"Y\",\n        \"creater_id\": 2,\n        \"updated_at\": \"2021.03.01 12:04:53\",\n        \"created_at\": \"2021.03.01 12:04:53\",\n        \"id\": 22\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Array to string conversion\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/channels/{id}/{platform}/revoke-sns-token",
    "title": "Delete Revoke-sns-token",
    "version": "1.0.0",
    "name": "Delete_Revoke-sns-token",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete Revoke-sns-token</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/revoke-sns-token",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/revoke-sns-token"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/channels/all",
    "title": "Get Channels All",
    "version": "1.0.0",
    "name": "Get_All",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get All</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>response format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "params = {\"page_size\":10,\"order\":\"name asc\",\"keyword\": {\"keyword\":\"\",\"scope\": [\"name\"]},\"platforms\":[]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>channel list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 8,\n                \"name\": \"[철파엠] 김영철의 파워 FM 공식계정\",\n                \"logo\": \"https://yt3.ggpht.com/a/AATXAJzJuxpRMXHw0DXGav4swsYBuy-LHrSkibZ74hSD=s88-c-k-c0xffffffff-no-rj-mo\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"Y\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"Y\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.28 14:07:39\",\n                \"updated_at\": \"2020.09.08 14:40:18\",\n                \"publishings_count\": 677,\n                \"platforms\": [\n                    \"yt\"\n                ]\n            },\n            ...\n            ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/channels?page_size=10&page=1\",\n            \"from\": 1,\n            \"last_page\": 2,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/channels?page_size=10&page=2\",\n            \"next_page_url\": \"https://sns-dev-api.gemiso.com/v1/channels?page_size=10&page=2\",\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/channels\",\n            \"per_page\": 10,\n            \"prev_page_url\": null,\n            \"to\": 10,\n            \"total\": 11\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/all"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/channels/",
    "title": "Get Channels",
    "version": "1.0.0",
    "name": "Get_Channels",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel-List Search</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>response format</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "params = {\n   \"page\":1,\n   \"page_size\":10,\n   \"duration\":{\n      \"start_date\":\"2020-12-10\",\n      \"end_date\":\"2021-01-12\",\n      \"scope\":\"published_at\"\n   },\n   \"platforms\":[],\n   \"keyword\":{\n      \"keyword\":\"\",\n      \"scope\":[\"\"]\n   },\n   \"active_yn\":\"Y\",\n   \"order\":\"created_at asc\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>channel list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 8,\n                \"name\": \"[철파엠] 김영철의 파워 FM 공식계정\",\n                \"logo\": \"https://yt3.ggpht.com/a/AATXAJzJuxpRMXHw0DXGav4swsYBuy-LHrSkibZ74hSD=s88-c-k-c0xffffffff-no-rj-mo\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"Y\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"Y\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.28 14:07:39\",\n                \"updated_at\": \"2020.09.08 14:40:18\",\n                \"publishings_count\": 677,\n                \"platforms\": [\n                    \"yt\"\n                ]\n            },\n            ...\n            ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/channels?page_size=10&page=1\",\n            \"from\": 1,\n            \"last_page\": 2,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/channels?page_size=10&page=2\",\n            \"next_page_url\": \"https://sns-dev-api.gemiso.com/v1/channels?page_size=10&page=2\",\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/channels\",\n            \"per_page\": 10,\n            \"prev_page_url\": null,\n            \"to\": 10,\n            \"total\": 11\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/channels/fb/pages",
    "title": "Get FB Pages",
    "version": "1.0.0",
    "name": "Get_FB_Pages",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get FB Pages</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Trying to access array offset on value of type null\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/fb/pages"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/channels/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>channel id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>channel list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 6,\n        \"name\": \"G-SAM\",\n        \"logo\": \"https://yt3.ggpht.com/ytc/AAUvwnj6ND3SJfMuyieVD8pPIbm2yp9vHrO3cOVek8_1=s88-c-k-c0x00ffffff-no-rj\",\n        \"logo_clip_yn\": \"N\",\n        \"use_logo_clip_yn\": \"N\",\n        \"logo_clip_url\": null,\n        \"logo_thumbnail_yn\": \"N\",\n        \"use_logo_thumbnail_yn\": \"N\",\n        \"logo_thumbnail_url\": null,\n        \"sns_download_speed\": \"2\",\n        \"active_yn\": \"Y\",\n        \"creater_id\": 1,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.08.28 14:07:39\",\n        \"updated_at\": \"2021.02.18 17:50:03\",\n        \"platform_settings\": [\n            {\n                \"id\": 3,\n                \"channel_id\": 6,\n                \"platform_id\": 3,\n                \"sns_id\": \"17841438975556696\",\n                \"upload_playlist_id\": null,\n                \"sns_token_info\": {\n                    \"access_token\": \"EAANojJJo6aoBAD3QYtZCSub8ZBxjNFYZAgfZBeSFjYDUfTdP81fSaes3qu56Qi7a5cXpUodfnWW1INU2O5rmqwOA6RTWJ5EZCDWa0N6QJTAWj6jsMZARUzH65rW7ljoWZBZA0leaXdlyYfhSXN53bUXQPCFbmxSRDQME68ZAlSDErOt0RwUzqFMRaPrD6KUzbtwwZD\",\n                    \"id\": \"17841438975556696\",\n                    \"token_type\": \"longterm_page_token\",\n                    \"user_id\": \"136952828032590\"\n                },\n                \"icon_url\": \"https://scontent-ssn1-1.xx.fbcdn.net/v/t51.2885-15/106729026_268255611146654_6441712696030922200_n.jpg?_nc_cat=102&ccb=3&_nc_sid=86c713&_nc_ohc=NA84-GqFrk8AX_bmX-_&_nc_ht=scontent-ssn1-1.xx&oh=ec9e25be53d1a695833043b52a6ab3bc&oe=605BC8F2\",\n                \"cover_url\": null,\n                \"default_category_id\": null,\n                \"default_language_code\": \"ko\",\n                \"default_translatable_language_code\": \"ko,en,vi,fr,zh,ja,id,ru,it,es,pt,de,th,tr\",\n                \"default_open_state\": \"O\",\n                \"default_title\": \"testtest\",\n                \"default_description\": \"aaaaaaaaaaaaa\",\n                \"default_tags\": null,\n                \"upload_options\": null,\n                \"channel_created_at\": null,\n                \"sync_publish_days_diff\": 0,\n                \"sync_download_days_diff\": 0,\n                \"sync_analytics_yn\": \"N\",\n                \"image_sync_at\": \"2021.02.24 17:31:03\",\n                \"publish_sync_at\": \"2021.03.01 00:00:46\",\n                \"playlist_sync_at\": null,\n                \"channel_analytics_sync_at\": \"2021.03.01 04:00:21\",\n                \"publish_analytics_sync_at\": \"2021.02.24 17:31:20\",\n                \"creater_id\": 2,\n                \"created_at\": \"2020.08.31 12:52:48\",\n                \"updated_at\": \"2021.03.01 04:00:21\",\n                \"translatables\": [\n                    {\n                        \"code\": \"de\",\n                        \"name\": \"독일어\",\n                        \"use_yn\": \"Y\"\n                    },\n                    {\n                        \"code\": \"en\",\n                        \"name\": \"영어\",\n                        \"use_yn\": \"Y\"\n                    },\n                    ...\n                ],\n                \"sync_publish_yn\": \"N\",\n                \"sync_download_yn\": \"N\",\n                \"platform\": {\n                    \"id\": 3,\n                    \"short_name\": \"in\",\n                    \"name\": \"Instagram\",\n                    \"image_url\": \"https://sns-dev-static.gemiso.com/images/platforms/cli-insta.png\",\n                    \"active_yn\": \"Y\",\n                    \"deleted_at\": null\n                },\n                \"language\": {\n                    \"code\": \"ko\",\n                    \"name\": \"한국어\",\n                    \"use_yn\": \"Y\"\n                }\n            },\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Trying to get property 'platform_settings' of non-object\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/channels/{id}/{platform}",
    "title": "Get Platform",
    "version": "1.0.0",
    "name": "Get_Platform",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get Platform Infomation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>channel id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>platform slug are (yt | fb | in | tw), on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Redirect URI must be absolute\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/channels/{id}/{platform}/get-auth-url",
    "title": "Get auth-url",
    "version": "1.0.0",
    "name": "Get_auth-url",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get-auth-url</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Redirect URI must be absolute\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/get-auth-url"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/channels/{id}/{platform}/set-channel-image",
    "title": "Patch Set-channel-image",
    "version": "1.0.0",
    "name": "Patch_Set-channel-image",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Set the platform image as the channel representative image</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>channel id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>platform slug are (yt | fb | in | tw), on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Undefined offset: 0\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/set-channel-image"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/channels/{id}/{platform}/sync-channel-image",
    "title": "Patch Sync-channel-image",
    "version": "1.0.0",
    "name": "Patch_Sync-channel-image",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Synchronize the channel (page) image posted on the platform.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>channel id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>platform slug are (yt | fb | in | tw), on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 8,\n        \"channel_id\": 6,\n        \"platform_id\": 1,\n        \"sns_id\": \"UCva7Z0b-Uw3EDX6BojHmYpA\",\n        \"upload_playlist_id\": \"UUva7Z0b-Uw3EDX6BojHmYpA\",\n        \"icon_url\": \"https://yt3.ggpht.com/ytc/AAUvwnj6ND3SJfMuyieVD8pPIbm2yp9vHrO3cOVek8_1=s88-c-k-c0x00ffffff-no-rj\",\n        \"cover_url\": null,\n        \"default_category_id\": 19,\n        \"default_language_code\": \"ko\",\n        \"default_translatable_language_code\": \"ko,en,vi,fr,zh,ja,id,ru,it,es,pt,de,th,tr\",\n        \"default_open_state\": \"O\",\n        \"default_title\": \"[GSAM] 기본제목\",\n        \"default_description\": \"G-SAM 에서 생성한 컨텐츠 입니다.\",\n        \"default_tags\": \"GSAM,제머나이\",\n        \"upload_options\": {\n            \"ad_type\": [\n                \"display\"\n            ],\n            \"ad_break\": [\n                \"midroll\"\n            ]\n        },\n        \"channel_created_at\": \"2020.05.26 17:45:12\",\n        \"sync_publish_days_diff\": 30,\n        \"sync_download_days_diff\": 0,\n        \"sync_analytics_yn\": \"Y\",\n        \"image_sync_at\": \"2021.03.01 12:52:40\",\n        \"publish_sync_at\": \"2021.03.01 12:43:40\",\n        \"playlist_sync_at\": \"2021.03.01 12:43:41\",\n        \"channel_analytics_sync_at\": \"2021.03.01 04:00:27\",\n        \"publish_analytics_sync_at\": \"2021.03.01 04:30:29\",\n        \"creater_id\": 2,\n        \"created_at\": \"2020.08.31 12:52:48\",\n        \"updated_at\": \"2021.03.01 12:52:40\",\n        \"translatables\": [\n            {\n                \"code\": \"de\",\n                \"name\": \"독일어\",\n                \"use_yn\": \"Y\"\n            },\n            {\n                \"code\": \"en\",\n                \"name\": \"영어\",\n                \"use_yn\": \"Y\"\n            },\n            ...\n        ],\n        \"sync_publish_yn\": \"Y\",\n        \"sync_download_yn\": \"N\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Undefined offset: 0\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/sync-channel-image"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/channels/{id}/{platform}/sync-channel-statistics",
    "title": "Patch Sync-channel-statistics",
    "version": "1.0.0",
    "name": "Patch_Sync-channel-statistics",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel-Manual collection of channel statistics</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>channel id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>platform slug are (yt | fb | in | tw), on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "patch-body:",
          "content": "{\n    \"start_date\": \"2021-01-01\",\n    \"end_date\": \"2021-01-01\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Undefined offset: 0\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/sync-channel-statistics"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/channels/{id}/{platform}/sync-publish",
    "title": "Patch Sync-publish",
    "version": "1.0.0",
    "name": "Patch_Sync-publish",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel-Manual collection of platform posts (synchronization)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>channel id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>platform slug are (yt | fb | in | tw), on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "patch-Body",
          "content": "{\n    \"days\": 7\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Undefined offset: 0\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/sync-publish"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/channels/{id}/{platform}/sync-publish-statistics",
    "title": "Patch Sync-publish-statistics",
    "version": "1.0.0",
    "name": "Patch_Sync-publish-statistics",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel-Manual collection of video statistics</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>channel id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "platform",
            "description": "<p>platform slug are (yt | fb | in | tw), on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "patch-body:",
          "content": "{\n    \"start_date\": \"2021-01-01\",\n    \"end_date\": \"2021-01-01\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Undefined offset: 0\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/sync-publish-statistics"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/channels/remove-multi",
    "title": "Post Remove-multi",
    "version": "1.0.0",
    "name": "Post_Remove-multi",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Post Remove-multi</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>channel id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n    \"ids\": [23]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/remove-multi"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/channels/update-multi",
    "title": "Put Update-multi",
    "version": "1.0.0",
    "name": "Put_Update-multi",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put Update-multi</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>channel id list</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active_yn",
            "description": "<p>active or not (Y|N)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Put-Body",
          "content": "{\n    \"ids\": [4,5],\n    \"data\": {\n        \"active_yn\": \"Y\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/update-multi"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/channels/{id}/{platform}/update-sns-token",
    "title": "Put Update-sns-token",
    "version": "1.0.0",
    "name": "Put_Update-sns-token",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put Update-sns-token</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/update-sns-token",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}/{platform}/update-sns-token"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/channels/{id}",
    "title": "Update One",
    "version": "1.0.0",
    "name": "Update_One",
    "group": "Channels",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Update One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>channel id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "logo",
            "description": "<p>a image url</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Put-Body",
          "content": "{\n\t\"id\": 7,\n\t\"logo\": \"https://sns-dev-static.gemiso.com/images/channels/1613636304.png\",\n\t\"name\": \"G-SAM 테스트 채널\",\n\t\"logo_clip_yn\": \"N\",\n\t\"use_logo_clip_yn\": \"N\",\n\t\"logo_clip_url\": null,\n\t\"logo_thumbnail_yn\": \"N\",\n\t\"use_logo_thumbnail_yn\": \"N\",\n\t\"logo_thumbnail_url\": null,\n\t\"sync_days_diff\": 7,\n\t\"last_sync_at\": null,\n\t\"active_yn\": \"Y\",\n\t\"creater_id\": 1,\n\t\"deleted_at\": null,\n\t\"created_at\": null,\n\t\"updated_at\": null,\n\t\"platform_settings\": [\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Array to string conversion\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/channels.js",
    "groupTitle": "Channels",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/channels/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/dashboard/analytics",
    "title": "Get Analytics",
    "version": "1.0.0",
    "name": "Get_Analytics",
    "group": "Dashboard",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Dashboard information inquiry for statistics manager</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "scope",
            "description": "<p>(Required) (day (default)|week|month) base period</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.02.22 04:00:24\",\n        \"summary\": {\n            \"views_count\": 463928811,\n            \"subscribers_count\": 922127,\n            \"estimated_revenue\": 691479176,\n            \"channel_count\": 11\n        },\n        \"views\": {\n            \"duration\": \"2021.02.12 ~ 2021.02.18\",\n            \"list\": [],\n        },\n        \"today_schedule\": {\n            \"channels\": [],\n        \"summary\": {\n            \"publish\": 1,\n            \"live\": 0\n        },\n        \"list\": [],\n        \"now\": \"2021-02-22 12:00:31\"\n    },\n    \"analytics\": {\n        \"subscribers\": {\n            \"count\": 4621,\n            \"list\": []\n        },\n        \"views\": {\n            \"count\": 2135705,\n            \"list\": []\n        },\n        \"impression\": {\n            \"rate\": 0,\n            \"list\": []\n        },\n        \"engage\": {\n            \"rate\": 2.9,\n            \"list\": []\n        },\n        \"duration\": \"2021.02.12 ~ 2021.02.18\"\n    },\n    \"outcomes\": {\n        \"list\": [],\n        \"base_date\": \"2021.02.18\"\n    }\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/dashboard.js",
    "groupTitle": "Dashboard",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/dashboard/analytics"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/dashboard/",
    "title": "Get Dashboard",
    "version": "1.0.0",
    "name": "Get_Dashboard",
    "group": "Dashboard",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Dashboard information inquiry (with channel of user) for content workers</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"update_date\": \"2021.02.22 04:00:24\",\n        \"publish_summary\": [\n            {\n                \"temporary_saved\": 62,\n                \"postings\": 166,\n                \"publish_failed\": 3\n            }\n        ],\n        \"recent_notice\": [\n        ],\n        \"thisweek_scheduled\": {},\n        \"views\": {},\n        \"new\": [],\n        \"summary-by-date\": {},\n        \"by-platform\": {},\n        \"ranking-subscribers-top5\": {},\n        \"ranking-views-top5\": {},\n        \"ranking-likes-top5\": {},\n        \"by-country\": {}\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/dashboard.js",
    "groupTitle": "Dashboard",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/dashboard/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/dashboard/scheduled",
    "title": "Get Schedule",
    "version": "1.0.0",
    "name": "Get_Schedule",
    "group": "Dashboard",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Inquiry about publishing schedule information (default: this week's posting schedule) of channels of user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel id array, on params (ex: [6,7,8])</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "channels",
            "description": "<p>Publishing schedule information of the channels</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"channels\": [\n            {\n                \"id\": 8,\n                \"name\": \"[철파엠] 김영철의 파워 FM 공식계정\",\n                \"logo\": \"https://yt3.ggpht.com/a/AATXAJzJuxpRMXHw0DXGav4swsYBuy-LHrSkibZ74hSD=s88-c-k-c0xffffffff-no-rj-mo\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"Y\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"Y\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.28 14:07:39\",\n                \"updated_at\": \"2020.09.08 14:40:18\",\n                \"platforms\": [\n                    \"yt\"\n                ],\n                \"selected\": \"Y\"\n            },\n            ...\n        ],\n        \"summary\": {\n            \"publish\": 0,\n            \"live\": 0\n        },\n        \"list\": [],\n        \"now\": \"2021-02-22 11:37:28\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"result\": \"fail\",\n  \"message\": \"invalid input\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/dashboard.js",
    "groupTitle": "Dashboard",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/dashboard/scheduled"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/departments/",
    "title": "Create One",
    "version": "1.0.0",
    "name": "Create_One",
    "group": "Departments",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Create One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"name\": \"테스트부서\",\n        \"description\": \"테스트부서설명\",\n        \"channels\": [ 1, 2, 3, 4, 5],\n        \"active_yn\": \"Y\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the department id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"name\": \"테스트부서\",\n        \"description\": \"테스트부서설명\",\n        \"active_yn\": \"Y\",\n        \"creater_id\": 2,\n        \"updated_at\": \"2021.02.25 10:35:01\",\n        \"created_at\": \"2021.02.25 10:35:01\",\n        \"id\": 41\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/departments.js",
    "groupTitle": "Departments",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/departments/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/departments/{id}",
    "title": "Delete One",
    "version": "1.0.0",
    "name": "Delete_One",
    "group": "Departments",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the department id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>department id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/departments.js",
    "groupTitle": "Departments",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/departments/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/departments/all",
    "title": "Get All Departments",
    "version": "1.0.0",
    "name": "Get_All_Departments",
    "group": "Departments",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get All Departments</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>the search parameters</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\"page_size\":10,\"order\":\"created_at desc\",\"keyword\": {\"keyword\":\"\",\"scope\": [\"name\"]}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of departments</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 10,\n            \"name\": \"테스트부서\",\n            \"description\": \"테스트설명\",\n            \"active_yn\": \"Y\",\n            \"creater_id\": null,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.25 17:20:01\",\n            \"updated_at\": \"2020.08.25 17:20:01\"\n        },\n        {\n            \"id\": 19,\n            \"name\": \"매경차장님 테스트\",\n            \"description\": \"매경차장님 테스트1123\",\n            \"active_yn\": \"Y\",\n            \"creater_id\": null,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.28 16:07:12\",\n            \"updated_at\": \"2021.01.06 17:29:58\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/departments.js",
    "groupTitle": "Departments",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/departments/all"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/departments/",
    "title": "Get Departments",
    "version": "1.0.0",
    "name": "Get_Departments",
    "group": "Departments",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Channel group (department) list inquiry</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>the department list of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 40,\n                \"name\": \"11\",\n                \"description\": \"11\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 63,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.02.09 13:03:19\",\n                \"updated_at\": \"2021.02.09 13:03:19\",\n                \"users_count\": 0,\n                \"channels\": [\n                    {\n                        \"id\": 8,\n                        \"name\": \"[철파엠] 김영철의 파워 FM 공식계정\",\n                        \"logo\": \"https://yt3.ggpht.com/a/AATXAJzJuxpRMXHw0DXGav4swsYBuy-LHrSkibZ74hSD=s88-c-k-c0xffffffff-no-rj-mo\",\n                        \"logo_clip_yn\": \"N\",\n                        \"use_logo_clip_yn\": \"Y\",\n                        \"logo_clip_url\": null,\n                        \"logo_thumbnail_yn\": \"N\",\n                        \"use_logo_thumbnail_yn\": \"Y\",\n                        \"logo_thumbnail_url\": null,\n                        \"sns_download_speed\": \"2\",\n                        \"active_yn\": \"Y\",\n                        \"creater_id\": 2,\n                        \"deleted_at\": null,\n                        \"created_at\": \"2020.08.28 14:07:39\",\n                        \"updated_at\": \"2020.09.08 14:40:18\",\n                        \"pivot\": {\n                            \"department_id\": 40,\n                            \"channel_id\": 8\n                        }\n                    }\n                ]\n            },\n            ...\n        ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/departments?page_size=10&page=1\",\n            \"from\": 1,\n            \"last_page\": 2,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/departments?page_size=10&page=2\",\n            \"next_page_url\": \"https://sns-dev-api.gemiso.com/v1/departments?page_size=10&page=2\",\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/departments\",\n            \"per_page\": 10,\n            \"prev_page_url\": null,\n            \"to\": 10,\n            \"total\": 19\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/departments.js",
    "groupTitle": "Departments",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/departments/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/departments/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Departments",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>ID of department, on params</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 40,\n        \"name\": \"11\",\n        \"description\": \"11\",\n        \"active_yn\": \"Y\",\n        \"creater_id\": 63,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.09 13:03:19\",\n        \"updated_at\": \"2021.02.09 13:03:19\",\n        \"users\": [],\n        \"channels\": [\n            {\n                \"id\": 8,\n                \"name\": \"[철파엠] 김영철의 파워 FM 공식계정\",\n                \"logo\": \"https://yt3.ggpht.com/a/AATXAJzJuxpRMXHw0DXGav4swsYBuy-LHrSkibZ74hSD=s88-c-k-c0xffffffff-no-rj-mo\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"Y\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"Y\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.28 14:07:39\",\n                \"updated_at\": \"2020.09.08 14:40:18\",\n                \"pivot\": {\n                    \"department_id\": 40,\n                    \"channel_id\": 8\n                },\n                \"platforms\": [\n                    \"yt\"\n                ]\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Call to a member function toArray() on null\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/departments.js",
    "groupTitle": "Departments",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/departments/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/departments/remove-multi",
    "title": "Post Remove-multi",
    "version": "1.0.0",
    "name": "Post_Remove-multi",
    "group": "Departments",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Post Remove-multi</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>the department id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"ids\": [44, 45]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>department id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/departments.js",
    "groupTitle": "Departments",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/departments/remove-multi"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/departments/{id}",
    "title": "Put One",
    "version": "1.0.0",
    "name": "Put_One",
    "group": "Departments",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the department id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n        \"name\": \"테스트부서1\",\n        \"description\": \"테스트부서설명\",\n        \"channels\": [ 1, 2, 4, 5],\n        \"active_yn\": \"Y\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the department id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 40,\n        \"name\": \"테스트부서1\",\n        \"description\": \"테스트부서설명\",\n        \"active_yn\": \"Y\",\n        \"creater_id\": 63,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.09 13:03:19\",\n        \"updated_at\": \"2021.02.25 10:58:51\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/departments.js",
    "groupTitle": "Departments",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/departments/{id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/departments/update-multi",
    "title": "Put Update-multi",
    "version": "1.0.0",
    "name": "Put_Update-multi",
    "group": "Departments",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put Update-multi</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>the department id list</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>the active_yn(Y|N), channels(Number[] type) information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"ids\": [46,47],\n    \"data\": {\n        \"active_yn\": \"Y\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>department id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/departments.js",
    "groupTitle": "Departments",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/departments/update-multi"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/downloads/{id}",
    "title": "Delete One",
    "version": "1.0.0",
    "name": "Delete_One",
    "group": "Downloads",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the download job id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the download job id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>the download job id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"The HTTP status code \\\"42000\\\" is not valid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/downloads.js",
    "groupTitle": "Downloads",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/downloads/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/downloads/",
    "title": "Get Many",
    "version": "1.0.0",
    "name": "Get_Many",
    "group": "Downloads",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get Many</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>the response-format parameters</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "params={\"page\":2, \"page_size\":5}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>the download job list of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 13,\n                \"channel_id\": 6,\n                \"title\": \"아카이브 자산화 되지 않는 것\",\n                \"description\": \"아카이브 자산화 되지 않는 것 내용\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.02.03 14:36:52\",\n                \"updated_at\": \"2021.02.03 14:36:52\",\n                \"total_jobs\": 4,\n                \"finished_jobs\": 0,\n                \"num\": 12,\n                \"download_jobs_id\": 13,\n                \"finished_at\": null,\n                \"state\": \"F\"\n            },\n            ...\n            ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/downloads?page=1\",\n            \"from\": 1,\n            \"last_page\": 2,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/downloads?page=2\",\n            \"next_page_url\": \"https://sns-dev-api.gemiso.com/v1/downloads?page=2\",\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/downloads\",\n            \"per_page\": 10,\n            \"prev_page_url\": null,\n            \"to\": 10,\n            \"total\": 12\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/downloads.js",
    "groupTitle": "Downloads",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/downloads/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/downloads/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Downloads",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the download job id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of a download job</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 4,\n        \"channel_id\": 6,\n        \"title\": \"테스트 아카이브 자산화 작업 4\",\n        \"description\": \"테스트 아카이브 자산화 작업 4 내용\",\n        \"creater_id\": 9,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.11.27 17:55:50\",\n        \"updated_at\": \"2020.11.27 17:55:50\",\n        \"publishings\": [\n            {\n                \"id\": 17808,\n                \"sns_post_id\": \"5-p3g-IZgc8\",\n                \"channel_id\": 6,\n                \"platform_id\": 1,\n                \"metadata_id\": 17813,\n                \"thumbnail_id\": 71607,\n                \"state\": 4,\n                \"open_state\": \"O\",\n                \"on_monitoring\": \"N\",\n                \"is_live\": null,\n                \"views\": 177,\n                \"likes\": 1,\n                \"hates\": 0,\n                \"shared\": 0,\n                \"comments\": 0,\n                \"playtimes\": 75,\n                \"duration\": 112,\n                \"publisher_id\": 1,\n                \"published_at\": \"2020.11.08 22:05:41\",\n                \"last_sync_at\": \"2020.12.08 00:01:00\",\n                \"last_analytics_sync_at\": \"2021.02.25 04:30:19\",\n                \"creater_id\": 1,\n                \"updater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.11.09 00:00:52\",\n                \"updated_at\": \"2021.02.25 04:30:19\",\n                \"pivot\": {\n                    \"download_jobs_id\": 4,\n                    \"publish_id\": 17808,\n                    \"state\": \"F\",\n                    \"job_id\": 256165,\n                    \"started_at\": \"2020-11-27 17:55:52\",\n                    \"finished_at\": null\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>the download job id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"message\": \"resource not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/downloads.js",
    "groupTitle": "Downloads",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/downloads/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/downloads/",
    "title": "Post Asset",
    "version": "1.0.0",
    "name": "Post_Asset",
    "group": "Downloads",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Post Asset</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>the download job title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>the download job content</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "publishings",
            "description": "<p>archive id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"title\": \"테스트 아카이브 자산화 작업 3\",\n    \"description\": \"테스트 아카이브 자산화 작업 3 내용\",\n    \"publishings\" : [18450, 19133, 19134]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the download job id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"title\": \"테스트 아카이브 자산화 작업 3\",\n        \"description\": \"테스트 아카이브 자산화 작업 3 내용\",\n        \"channel_id\": 6,\n        \"creater_id\": 2,\n        \"updated_at\": \"2021.02.25 12:10:47\",\n        \"created_at\": \"2021.02.25 12:10:47\",\n        \"id\": 14\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/downloads.js",
    "groupTitle": "Downloads",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/downloads/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/downloads/remove-multi",
    "title": "Post Remove-multi",
    "version": "1.0.0",
    "name": "Post_Remove-multi",
    "group": "Downloads",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Post Remove-multi</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>the download job id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"ids\": [15, 16]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>download job</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/downloads.js",
    "groupTitle": "Downloads",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/downloads/remove-multi"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/downloads/retry-multi",
    "title": "Post Retry-multi",
    "version": "1.0.0",
    "name": "Post_Retry-multi",
    "group": "Downloads",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Retry-multi the download job</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ids",
            "description": "<p>ID of the download job</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"ids\": [17,16]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\nundone",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/downloads.js",
    "groupTitle": "Downloads",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/downloads/retry-multi"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/downloads/stop-multi",
    "title": "Post Stop-multi",
    "version": "1.0.0",
    "name": "Post_Stop-multi",
    "group": "Downloads",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Stop-multi the download job</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ids",
            "description": "<p>ID of the download job</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"ids\": [14]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\nundone",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>download job</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Property [publishings] does not exist on this collection instance.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/downloads.js",
    "groupTitle": "Downloads",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/downloads/stop-multi"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/downloads/{id}",
    "title": "Put One",
    "version": "1.0.0",
    "name": "Put_One",
    "group": "Downloads",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the download job id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"title\": \"테스트 아카이브 자산화 작업 3\",\n    \"description\": \"테스트 아카이브 자산화 작업 3 내용\",\n    \"publishings\" : [18450, 19133, 19134]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the download job id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 14,\n        \"channel_id\": 6,\n        \"title\": \"테스트 아카이브 자산화 작업 3\",\n        \"description\": \"테스트 아카이브 자산화 작업 3 내용\",\n        \"creater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.25 12:10:47\",\n        \"updated_at\": \"2021.02.25 12:10:47\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/downloads.js",
    "groupTitle": "Downloads",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/downloads/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/groups/",
    "title": "Create A Group",
    "version": "1.0.0",
    "name": "Create_A_Group",
    "group": "Groups",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Content group creation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>the image file</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>the image file</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "publishings",
            "description": "<p>publishing list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"title\": \"테스트 통계 그룹\",\n    \"description\": \"테스트를 위한 통계 그룹\",\n    \"publishings\": [153, 154, 155, 156, 157]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of group</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"title\": \"테스트 통계 그룹\",\n        \"description\": \"테스트를 위한 통계 그룹\",\n        \"channel_group_id\": 10,\n        \"creater_id\": 2,\n        \"updated_at\": \"2021.02.24 12:58:58\",\n        \"created_at\": \"2021.02.24 12:58:58\",\n        \"id\": 35\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Undefined",
            "description": "<p>index publishings</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Undefined index: publishings\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/groups.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/groups/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/groups/{id}",
    "title": "Delete One",
    "version": "1.0.0",
    "name": "Delete_One",
    "group": "Groups",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete One</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the group id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"message\": \"resource not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/groups.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/groups/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/groups/",
    "title": "Get Many",
    "version": "1.0.0",
    "name": "Get_Many",
    "group": "Groups",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Statistics Group-List Search: Paging inquiry of all content group list</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>the</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "params={\"page_size\":10,\"order\":\"created_at desc\",\"keyword\": {\"keyword\":\"\",\"scope\": []}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 25,\n                \"channel_group_id\": 10,\n                \"title\": \"SBS 라디오 TOP PLAYBACK CPM\",\n                \"description\": \"SBS 라디오 TOP PLAYBACK CPM\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.10.16 12:28:56\",\n                \"updated_at\": \"2020.10.16 12:28:56\",\n                \"publishings_count\": 20\n            },\n            {\n                \"id\": 24,\n                \"channel_group_id\": 10,\n                \"title\": \"SBS 라디오 TOP CPM\",\n                \"description\": \"SBS 라디오 TOP100 정보 \",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.10.16 12:28:46\",\n                \"updated_at\": \"2020.10.16 12:28:46\",\n                \"publishings_count\": 24\n            }\n        ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/groups?page_size=10&order=created_at%20desc&keyword%5Bkeyword%5D=&page=1\",\n            \"from\": 1,\n            \"last_page\": 1,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/groups?page_size=10&order=created_at%20desc&keyword%5Bkeyword%5D=&page=1\",\n            \"next_page_url\": null,\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/groups\",\n            \"per_page\": 10,\n            \"prev_page_url\": null,\n            \"to\": 9,\n            \"total\": 9\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/groups.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/groups/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/groups/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Groups",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Content group lookup by id</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>channel group id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 25,\n        \"channel_group_id\": 10,\n        \"title\": \"SBS 라디오 TOP PLAYBACK CPM\",\n        \"description\": \"SBS 라디오 TOP PLAYBACK CPM\",\n        \"creater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.10.16 12:28:56\",\n        \"updated_at\": \"2020.10.16 12:28:56\",\n        \"publishings\": [\n            {\n                \"id\": 689,\n                \"sns_post_id\": \"k-BuCAS0lIs\",\n                \"channel_id\": 9,\n                \"platform_id\": 1,\n                \"metadata_id\": 690,\n                \"thumbnail_id\": 39233,\n                \"state\": 4,\n                \"open_state\": \"O\",\n                \"on_monitoring\": \"N\",\n                \"is_live\": null,\n                \"views\": 589,\n                \"likes\": 12,\n                \"hates\": 1,\n                \"shared\": 3,\n                \"comments\": 0,\n                \"playtimes\": 816,\n                \"duration\": 3220,\n                \"publisher_id\": 1,\n                \"published_at\": \"2020.08.27 16:15:08\",\n                \"last_sync_at\": \"2020.11.09 20:37:57\",\n                \"last_analytics_sync_at\": \"2021.02.21 04:34:03\",\n                \"creater_id\": 1,\n                \"updater_id\": 35,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.09.21 19:27:28\",\n                \"updated_at\": \"2021.02.24 00:01:55\",\n                \"pivot\": {\n                    \"statistic_group_id\": 25,\n                    \"publish_id\": 689\n                },\n                \"metadata\": {\n                    \"id\": 690,\n                    \"title\": \"[허지웅쇼] 8/27[목] 히스토리 월드 - '조선왕조실록'\",\n                    \"description\": \"SBS 허지웅쇼 \\n2020년 8월 27일 목요일 생방송\\n\\n#허지웅쇼 #썬킴 #신병주\\n\\n[히스토리 월드 - '조선왕조실록']\\n▶ 조선왕조실록에도 기록되어 있는 전염병! 조선시대에도 전염병 극복법은 '격리'\\n▶ 천연두가 없었으면 드라마 '장희빈'도 없었다?!\\n▶ 당시 왕이 실록을 볼 수 없게 한 이유는? 그렇지만 실록을 봤던 유일한 왕은?!\\n▶ 실록을 전국의 산에 보관했던 이유는? 정족산, 오대산, 적상산, 태백산에 보관했던 실록!\\n\\n#썬킴교수님 #야사달인 #신병주교수님 #역사저널그날\\n#조선왕조실록 #사관 #전염병 #장희빈 #천연두\\n#신입사관구해령 #조선시대 #블랙박스 #연산군\",\n                    \"default_audio_language_code\": null,\n                    \"open_comment\": \"open\",\n                    \"order_comment\": \"recent\",\n                    \"category_id\": 25,\n                    \"for_child\": \"N\",\n                    \"for_adult\": \"N\",\n                    \"location\": null,\n                    \"sharable\": \"Y\",\n                    \"ppl\": \"N\",\n                    \"notice_ppl\": \"N\",\n                    \"analytics_proposal\": null,\n                    \"creater_id\": 25,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2020.09.21 19:27:28\",\n                    \"updated_at\": \"2020.09.25 17:17:32\",\n                    \"subtitles_stat\": []\n                },\n                \"thumbnail\": {\n                    \"id\": 39233,\n                    \"archive_id\": null,\n                    \"sequence\": 0,\n                    \"url\": \"https://i.ytimg.com/vi/k-BuCAS0lIs/mqdefault.jpg\",\n                    \"original_url\": \"https://i.ytimg.com/vi/k-BuCAS0lIs/maxresdefault.jpg\",\n                    \"file_name\": \"https://i.ytimg.com/vi/k-BuCAS0lIs/maxresdefault.jpg\",\n                    \"creater_id\": 35,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2020.11.09 20:38:00\",\n                    \"updated_at\": \"2020.11.09 20:38:00\"\n                },\n                \"archive_media\": [],\n                \"media\": [\n                    {\n                        \"id\": 38802,\n                        \"publish_id\": 689,\n                        \"publish_media_url\": \"https://www.youtube.com/embed/k-BuCAS0lIs\",\n                        \"publish_link_url\": \"https://www.youtube.com/watch?v=k-BuCAS0lIs\",\n                        \"poster_url\": \"https://i.ytimg.com/vi/k-BuCAS0lIs/mqdefault.jpg\",\n                        \"media_type\": \"video\",\n                        \"order\": 1,\n                        \"creater_id\": 35,\n                        \"deleted_at\": null,\n                        \"created_at\": \"2020.11.09 20:38:00\",\n                        \"updated_at\": \"2020.11.09 20:38:00\"\n                    }\n                ]\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>group id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"message\": \"resource not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/groups.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/groups/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/groups/remove-multi",
    "title": "Post Remove-multi",
    "version": "1.0.0",
    "name": "Post_Remove-multi",
    "group": "Groups",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Post Remove-multi statistic group</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>The available group id list will be deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"ids\": [40,41,42]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/groups.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/groups/remove-multi"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/groups/{id}",
    "title": "Put One",
    "version": "1.0.0",
    "name": "Put_One",
    "group": "Groups",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Content group modification</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the group id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"title\": \"테스트 통계 그룹 1\",\n    \"description\": \"테스트를 위한 통계 그룹 11\",\n    \"publishings\": [153, 154, 155, 156]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"message\": \"resource not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/groups.js",
    "groupTitle": "Groups",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/groups/{id}"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/live/{id}",
    "title": "Delete One",
    "version": "1.0.0",
    "name": "Delete_One",
    "group": "Live",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>not yet implemented</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/live.js",
    "groupTitle": "Live",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/live/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/live/",
    "title": "Get All",
    "version": "1.0.0",
    "name": "Get_All",
    "group": "Live",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Live channel list paging inquiry</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>The page, page_size, duration,... information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "params = {\"page\":1,\"page_size\":10,\"duration\":{\"start_date\":\"\",\"end_date\":\"\",\"scope\":\"\"},\"departments\":[],\"channels\":[],\"keyword\":{\"keyword\":\"\",\"scope\":[\"\"]},\"order\":\"created_at desc\",\"state\":[]}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"sql\": \"select `tb_archive_lives`.*, (select count(*) from `tb_archives` inner join `tb_archive_live_pv` on `tb_archives`.`id` = `tb_archive_live_pv`.`archive_id` where `tb_archive_lives`.`id` = `tb_archive_live_pv`.`live_id` and `tb_archives`.`deleted_at` is null) as `archives_count`, (select sum(duration) from `tb_archives` inner join `tb_archive_live_pv` on `tb_archives`.`id` = `tb_archive_live_pv`.`archive_id` where `tb_archive_lives`.`id` = `tb_archive_live_pv`.`live_id` and `tb_archives`.`deleted_at` is null) as `total_duration` from `tb_archive_lives` where `tb_archive_lives`.`deleted_at` is null order by `created_at` desc limit 10 offset 0\",\n        \"list\": [\n            {\n                \"id\": 1,\n                \"channel_id\": 6,\n                \"platform_id\": 1,\n                \"live_setting_id\": null,\n                \"title\": \"테스트 생방송 1\",\n                \"description\": \"테스트 생방송 1\",\n                \"publish_at\": \"2020-12-01 11:00:00\",\n                \"state\": \"R\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.11.17 13:54:59\",\n                \"updated_at\": \"2020.11.17 13:54:59\",\n                \"archives_count\": 1,\n                \"total_duration\": 61,\n                \"channel\": {\n                    \"id\": 6,\n                    \"name\": \"G-SAM\",\n                    \"logo\": \"https://yt3.ggpht.com/ytc/AAUvwnj6ND3SJfMuyieVD8pPIbm2yp9vHrO3cOVek8_1=s88-c-k-c0x00ffffff-no-rj\",\n                    \"logo_clip_yn\": \"N\",\n                    \"use_logo_clip_yn\": \"N\",\n                    \"logo_clip_url\": null,\n                    \"logo_thumbnail_yn\": \"N\",\n                    \"use_logo_thumbnail_yn\": \"N\",\n                    \"logo_thumbnail_url\": null,\n                    \"sns_download_speed\": \"2\",\n                    \"active_yn\": \"Y\",\n                    \"creater_id\": 1,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2020.08.28 14:07:39\",\n                    \"updated_at\": \"2021.02.18 17:50:03\"\n                }\n            }\n        ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/live?page=1\",\n            \"from\": 1,\n            \"last_page\": 1,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/live?page=1\",\n            \"next_page_url\": null,\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/live\",\n            \"per_page\": 10,\n            \"prev_page_url\": null,\n            \"to\": 2,\n            \"total\": 2\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/live.js",
    "groupTitle": "Live",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/live/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/live/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Live",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/live/{id}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>not yet implemented</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/live.js",
    "groupTitle": "Live",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/live/{id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/live/{id}",
    "title": "Put One",
    "version": "1.0.0",
    "name": "Put_One",
    "group": "Live",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>not yet implemented</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/live.js",
    "groupTitle": "Live",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/live/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/countries",
    "title": "Get Countries",
    "version": "1.0.0",
    "name": "Get_Countries",
    "group": "Localization",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Country List Search</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code",
            "description": "<p>the code of the country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.country",
            "description": "<p>the country name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"code\": \"GH\",\n            \"country\": \"가나\"\n        },\n        {\n            \"code\": \"GA\",\n            \"country\": \"가봉\"\n        }, ...\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/localization.js",
    "groupTitle": "Localization",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/countries"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/languages",
    "title": "Get Languages",
    "version": "1.0.0",
    "name": "Get_Languages",
    "group": "Localization",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Search available languages</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code",
            "description": "<p>the code of language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>the name of language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.use_yn",
            "description": "<p>use yes/no</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"code\": \"gl\",\n            \"name\": \"갈리시아어\",\n            \"use_yn\": \"Y\"\n        },\n        {\n            \"code\": \"gu\",\n            \"name\": \"구자라트어\",\n            \"use_yn\": \"Y\"\n        }, ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/localization.js",
    "groupTitle": "Localization",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/languages"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/youtube-languages",
    "title": "Get Youtube-languages",
    "version": "1.0.0",
    "name": "Get_Youtube-languages",
    "group": "Localization",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>You can get the language for YouTube</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code",
            "description": "<p>the code of language</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>the name of language</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"code\": \"gl\",\n            \"name\": \"갈리시아어\"\n        },\n        {\n            \"code\": \"gu\",\n            \"name\": \"구자라트어\"\n        },\n        {\n            \"code\": \"el\",\n            \"name\": \"그리스어\"\n        }, ...\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/localization.js",
    "groupTitle": "Localization",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/youtube-languages"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/country",
    "title": "Get Country",
    "version": "1.0.0",
    "name": "Get_country",
    "group": "Localization",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Country List Search</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code",
            "description": "<p>the code of the country</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.country",
            "description": "<p>the country name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"code\": \"GH\",\n            \"country\": \"가나\"\n        },\n        {\n            \"code\": \"GA\",\n            \"country\": \"가봉\"\n        }, ...\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/localization.js",
    "groupTitle": "Localization",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/country"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/localization/translate",
    "title": "Post Localization Translate",
    "version": "1.0.0",
    "name": "Post_Localization_Translate",
    "group": "Localization",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Run Google Translate</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Char[2]",
            "optional": false,
            "field": "from_language_code",
            "description": "<p>From language code</p>"
          },
          {
            "group": "Parameter",
            "type": "Char[2]",
            "optional": false,
            "field": "to_language_code",
            "description": "<p>To language code</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "text",
            "description": "<p>from_language_code array to be translated</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"from_language_code\": \"ko\",\n    \"to_language_code\": \"ja\",\n    \"text\" : [\n        \"안녕하세요.\",\n        \"반갑습니다.\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "from_language_code",
            "description": "<p>from language code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "to_language_code",
            "description": "<p>to language code</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "text",
            "description": "<p>Texts to be translated</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "translate",
            "description": "<p>Text Array has been translated by google</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"from_language_code\": \"ko\",\n        \"to_language_code\": \"ja\",\n        \"text\": [\n            \"안녕하세요.\",\n            \"반갑습니다.\"\n        ],\n        \"translate\": [\n            \"こんにちは。\",\n            \"うれしいです。\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 400 Bad Request\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 400,\n    \"message\": \"{\\n  \\\"error\\\": {\\n    \\\"code\\\": 400,\\n    \\\"message\\\": \\\"Invalid Value\\\",\\n    \\\"errors\\\": [\\n      {\\n        \\\"message\\\": \\\"Invalid Value\\\",\\n        \\\"domain\\\": \\\"global\\\",\\n        \\\"reason\\\": \\\"invalid\\\"\\n      }\\n    ]\\n  }\\n}\\n\",\n    \"trace\": [...]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/localization.js",
    "groupTitle": "Localization",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/localization/translate"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/menu/all",
    "title": "Get All",
    "version": "1.0.0",
    "name": "Get_All",
    "group": "Menu",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>View all menus (including inactive menus)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Array of Menus and Submenus</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"code\": \"publishing\",\n            \"parent_code\": null,\n            \"sequence\": 1,\n            \"url\": \"/publish\",\n            \"description\": \"퍼브리싱\",\n            \"use_shortcut\": \"N\",\n            \"active_yn\": \"Y\",\n            \"all_child_menu\": [\n                {\n                    \"code\": \"publishing-list\",\n                    \"parent_code\": \"publishing\",\n                    \"sequence\": 1,\n                    \"url\": \"/publish\",\n                    \"description\": \"퍼브리싱 현황\",\n                    \"use_shortcut\": \"Y\",\n                    \"active_yn\": \"Y\",\n                    \"all_child_menu\": [],\n                    \"permissions\": {\n                        \"read\": true,\n                        \"update\": true,\n                        \"delete\": true\n                    }\n                },\n                {\n                    \"code\": \"publishing-schedule\",\n                    \"parent_code\": \"publishing\",\n                    \"sequence\": 2,\n                    \"url\": \"/publish/schedule\",\n                    \"description\": \"퍼브리싱 일정\",\n                    \"use_shortcut\": \"Y\",\n                    \"active_yn\": \"Y\",\n                    \"all_child_menu\": [],\n                    \"permissions\": {\n                        \"read\": true,\n                        \"update\": true,\n                        \"delete\": true\n                    }\n                },\n                {\n                    \"code\": \"publishing-playlist\",\n                    \"parent_code\": \"publishing\",\n                    \"sequence\": 3,\n                    \"url\": \"/publish/playlist\",\n                    \"description\": \"퍼브리싱 재생목록\",\n                    \"use_shortcut\": \"Y\",\n                    \"active_yn\": \"Y\",\n                    \"all_child_menu\": [],\n                    \"permissions\": {\n                        \"read\": true,\n                        \"update\": true,\n                        \"delete\": true\n                    }\n                }\n            ],\n            \"permissions\": {\n                \"read\": true\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/menu.js",
    "groupTitle": "Menu",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/menu/all"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/menu/",
    "title": "Get List",
    "version": "1.0.0",
    "name": "Get_List",
    "group": "Menu",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Menu-Inquiry of authorized user's menu</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>Array of Menus and Submenus</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"result\": true,\n  \"locale\": \"ko\",\n  \"message\": null,\n  \"data\": [\n      {\n          \"code\": \"publishing\",\n          \"parent_code\": null,\n          \"sequence\": 1,\n          \"url\": \"/publish\",\n          \"description\": \"퍼브리싱\",\n          \"use_shortcut\": \"N\",\n          \"active_yn\": \"Y\",\n          \"child_menu\": [\n              {\n                  \"code\": \"publishing-list\",\n                  \"parent_code\": \"publishing\",\n                  \"sequence\": 1,\n                  \"url\": \"/publish\",\n                  \"description\": \"퍼브리싱 현황\",\n                  \"use_shortcut\": \"Y\",\n                  \"active_yn\": \"Y\",\n                  \"child_menu\": []\n              },\n              {\n                  \"code\": \"publishing-schedule\",\n                  \"parent_code\": \"publishing\",\n                  \"sequence\": 2,\n                  \"url\": \"/publish/schedule\",\n                  \"description\": \"퍼브리싱 일정\",\n                  \"use_shortcut\": \"Y\",\n                  \"active_yn\": \"Y\",\n                  \"child_menu\": []\n              },\n              {\n                  \"code\": \"publishing-playlist\",\n                  \"parent_code\": \"publishing\",\n                  \"sequence\": 3,\n                  \"url\": \"/publish/playlist\",\n                  \"description\": \"퍼브리싱 재생목록\",\n                  \"use_shortcut\": \"Y\",\n                  \"active_yn\": \"Y\",\n                  \"child_menu\": []\n              }\n          ]\n      },\n      {\n          \"code\": \"live\",\n          \"parent_code\": null,\n          \"sequence\": 2,\n          \"url\": \"/liveChannel\",\n          \"description\": \"라이브 채널\",\n          \"use_shortcut\": \"N\",\n          \"active_yn\": \"Y\",\n          \"child_menu\": [\n              {\n                  \"code\": \"live-list\",\n                  \"parent_code\": \"live\",\n                  \"sequence\": 1,\n                  \"url\": \"/liveChannel\",\n                  \"description\": \"라이브 채널\",\n                  \"use_shortcut\": \"Y\",\n                  \"active_yn\": \"Y\",\n                  \"child_menu\": []\n              }\n          ]\n      },\n      ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/menu.js",
    "groupTitle": "Menu",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/menu/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/menu/shortcuts",
    "title": "Get Shortcuts",
    "version": "1.0.0",
    "name": "Get_Shortcuts",
    "group": "Menu",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Shortcut menu inquiry</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"result\": true,\n  \"locale\": \"ko\",\n  \"message\": null,\n  \"data\": [\n      {\n          \"code\": \"live-list\",\n          \"parent_code\": \"live\",\n          \"sequence\": 1,\n          \"url\": \"/liveChannel\",\n          \"description\": \"라이브 채널\",\n          \"use_shortcut\": \"Y\",\n          \"active_yn\": \"Y\"\n      },\n      {\n          \"code\": \"archive-list\",\n          \"parent_code\": \"archive\",\n          \"sequence\": 1,\n          \"url\": \"/archive\",\n          \"description\": \"아카이브\",\n          \"use_shortcut\": \"Y\",\n          \"active_yn\": \"Y\"\n      },\n      ...\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/menu.js",
    "groupTitle": "Menu",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/menu/shortcuts"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/monitoring/",
    "title": "Get Many",
    "version": "1.0.0",
    "name": "Get_Many",
    "group": "Monitoring",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>List inquiry monitors SNS Post</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": true,
            "field": "paging",
            "description": "<p>the ID of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "list",
            "description": "<p>SNS Post list</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "list.id",
            "description": "<p>the ID of SNS Post</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"paging\": { ... },\n        \"list\": [\n              {\n                \"id\": 36577,\n                \"sns_post_id\": \"FXiMeGf0GoA\",\n                \"channel_id\": 6,\n                \"platform_id\": 1,\n                \"metadata_id\": 36612,\n                \"thumbnail_id\": 158371,\n                ... },\n                 ]\n             }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 400 Bad Request\n{\n\"result\": false,\n\"locale\": \"ko\",\n\"code\": 400,\n\"message\": \"...\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/monitoring.js",
    "groupTitle": "Monitoring",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/monitoring/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/monitoring/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Monitoring",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get a SNS Post Detail</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>SNS Post</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"publish\": {\n            \"id\": 36567,\n            \"sns_post_id\": \"Q8bm3piVlpg\",\n            \"channel_id\": 9,\n            \"platform_id\": 1,\n            \"metadata_id\": 36602,\n            \"thumbnail_id\": 158478,\n            \"state\": 4,\n            \"open_state\": \"O\",\n            \"on_monitoring\": \"Y\",\n            \"is_live\": \"N\",\n            \"views\": 1664,\n            \"likes\": 13,\n            \"hates\": 9,\n            \"shared\": 0,\n            \"comments\": 14,\n            \"playtimes\": 0,\n            \"duration\": 789,\n            \"publisher_id\": 1,\n            \"published_at\": \"2021.02.18 20:00:06\",\n            \"last_sync_at\": \"2021.02.20 00:01:08\",\n            \"last_analytics_sync_at\": \"2021.02.20 12:50:16\",\n            \"creater_id\": 1,\n            \"updater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.02.19 00:01:39\",\n            \"updated_at\": \"2021.02.20 12:50:16\",\n            \"is_collected\": \"Y\",\n            \"has_archive\": false,\n            \"channel\": {\n                \"id\": 9,\n                \"name\": \"SBS 시사교양 라디오 – 시교라\",\n                \"logo\": \"https://yt3.ggpht.com/a/AATXAJwN8e1PTm5BEbzjdVcl1EJrDhEWxR9SogRpMbsVIg=s88-c-k-c0xffffffff-no-rj-mo\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"Y\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"Y\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.28 14:07:39\",\n                \"updated_at\": \"2020.09.08 14:43:08\",\n                \"recommend_tags\": [\n                    \"정치\",\n                    \"시사\",\n                    \"라디오\",\n                    \"이재익\",\n                    \"고현준\",\n                    \"시사교양\",\n                    \"정치쇼\",\n                    \"SBS\",\n                    \"sbs라디오\",\n                    \"이철희\"\n                ]\n            },\n            \"platform_setting\": {\n                \"id\": 14,\n                \"channel_id\": 9,\n                \"platform_id\": 1,\n                \"sns_id\": \"UCLv3v82YNNsa8EsxrcPMjGQ\",\n                \"upload_playlist_id\": \"UULv3v82YNNsa8EsxrcPMjGQ\",\n                \"icon_url\": \"https://yt3.ggpht.com/a/AATXAJwN8e1PTm5BEbzjdVcl1EJrDhEWxR9SogRpMbsVIg=s88-c-k-c0xffffffff-no-rj-mo\",\n                \"cover_url\": \"https://yt3.ggpht.com/hr3pMH10E6ZLRkhPwoacjlcwh9NSWpVCNfZNccBeyornWxNX0WAxlvHWyjNUo0KltrTwKwgvhA=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj\",\n                \"default_category_id\": null,\n                \"default_language_code\": \"ko\",\n                \"default_translatable_language_code\": \"ko,en,vi,fr,zh,ja,id,ru,it,es,pt,de,th,tr\",\n                \"default_open_state\": \"O\",\n                \"default_title\": null,\n                \"default_description\": null,\n                \"default_tags\": null,\n                \"upload_options\": null,\n                \"channel_created_at\": \"2016.12.15 20:08:43\", \n                 ...\n            },\n            \"archives\": [],\n            \"platform\": {\n                \"id\": 1,\n                \"short_name\": \"yt\",\n                \"name\": \"Youtube\",\n                \"image_url\": \"https://sns-dev-static.gemiso.com/images/platforms/cli-yt.png\",\n                \"active_yn\": \"Y\",\n                \"deleted_at\": null\n            },\n            \"metadata\": {\n                \"id\": 36602,\n                \"title\": \"빌 게이츠도 원전이 필요하다는데 탈원전 정책은 맞는 것인가? 빌 게이츠 책, 직접 읽어봤다 [이철희의 정치쇼]\",\n                \"description\": \"'탄소 제로'를 위해 원전이 필요하다는 빌 게이츠의 인터뷰가 보도된 후 탈원전 정책을 비판하는 목소리가 커지고 있는 상황. 빌 게이츠 책을 두고 보궐선거 후보들 사이에서 갑론을박까지 펼쳐지고 있는데... 그래서! 직접 빌 게이츠 책을 읽어본 김준일 '전지적' 기자. \\n빌 게이츠는 어떤 의미로 원자력이 필요하다는 얘기를 한 걸까요?\\n\\n- 김준일 뉴스톱 대표\\n\\n#빌게이츠 #탈원전 #탄소중립 #이철희의정치쇼\",\n                \"default_audio_language_code\": \"ko\",\n                \"open_comment\": \"open\",\n                \"order_comment\": \"recent\",\n                \"category_id\": 25,\n                \"for_child\": \"N\",\n                \"for_adult\": \"N\",\n                \"location\": null,\n                \"sharable\": \"Y\",\n                 ...\n            },\n            \"thumbnails\": [],\n            \"thumbnail\": {\n                \"id\": 158478,\n                \"archive_id\": null,\n                \"sequence\": 0,\n                \"url\": \"https://i.ytimg.com/vi/Q8bm3piVlpg/mqdefault.jpg\",\n                \"original_url\": \"https://i.ytimg.com/vi/Q8bm3piVlpg/maxresdefault.jpg\",\n                \"file_name\": \"https://i.ytimg.com/vi/Q8bm3piVlpg/maxresdefault.jpg\",\n                \"creater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.02.20 00:01:09\",\n                \"updated_at\": \"2021.02.20 00:01:09\"\n            },\n            \"publisher\": {\n                \"id\": 1,\n                \"user_id\": \"system\",\n                \"name\": \"System\",\n                \"tel\": null,\n                \"locale\": \"ko\",\n                \"profile_id\": null,\n                \"active_yn\": \"N\",\n                \"last_logined_at\": null,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.14 08:27:58\",\n                \"updated_at\": \"2020.08.14 08:27:58\",\n                \"is_admin\": false\n            },\n            \"playlist\": [\n                {\n                    \"id\": 97,\n                    \"channel_id\": 9,\n                    \"platform_id\": 1,\n                    \"sns_playlist_id\": \"PLSL0Srvxbj-Wtww2qM296mpU0XTw8k0qc\",\n                    \"title\": \"[이철희의 정치쇼] 월~금 09:05~11:00\",\n                    \"description\": \"\",\n                    \"default_language_code\": null,\n                    \"thumbnail_color\": null,\n                    \"thumbnail_id\": 465,\n                    \"open_state\": \"O\",\n                    \"creater_id\": 1,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2020.06.01 09:16:33\",\n                    \"updated_at\": \"2020.12.18 11:03:51\",\n                    \"playlistitem\": {\n                        \"publish_id\": 36567,\n                        \"playlist_id\": 97,\n                        \"sns_playlist_item_id\": \"UExTTDBTcnZ4YmotV3R3dzJxTTI5Nm1wVTBYVHc4azBxYy40MEE4MzM5MDQwOUEyQUZB\",\n                        \"sequence\": 0,\n                        \"added_at\": \"2021-02-18 06:55:58\"\n                    }\n                }\n            ],\n            \"media\": [\n                {\n                    \"id\": 156788,\n                    \"publish_id\": 36567,\n                    \"publish_media_url\": \"https://www.youtube.com/embed/Q8bm3piVlpg\",\n                    \"publish_link_url\": \"https://www.youtube.com/watch?v=Q8bm3piVlpg\",\n                    \"poster_url\": \"https://i.ytimg.com/vi/Q8bm3piVlpg/mqdefault.jpg\",\n                    \"media_type\": \"video\",\n                    \"order\": 1,\n                    \"creater_id\": 1,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2021.02.20 00:01:09\",\n                    \"updated_at\": \"2021.02.20 00:01:09\"\n                }\n            ],\n            \"archive_media\": [],\n            \"creater\": {\n                \"id\": 1,\n                \"user_id\": \"system\",\n                \"name\": \"System\",\n                \"tel\": null,\n                \"locale\": \"ko\",\n                \"profile_id\": null,\n                \"active_yn\": \"N\",\n                \"last_logined_at\": null,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.14 08:27:58\",\n                \"updated_at\": \"2020.08.14 08:27:58\",\n                \"is_admin\": false\n            },\n            \"updater\": {\n                \"id\": 1,\n                \"user_id\": \"system\",\n                \"name\": \"System\",\n                \"tel\": null,\n                \"locale\": \"ko\",\n                \"profile_id\": null,\n                \"active_yn\": \"N\",\n                \"last_logined_at\": null,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.14 08:27:58\",\n                \"updated_at\": \"2020.08.14 08:27:58\",\n                \"is_admin\": false\n            }\n        },\n        \"update_date\": \"2021.02.20 12:50:16\",\n        \"channel_average\": {\n            \"average_views\": 5355,\n            \"average_likes\": 69,\n            \"average_comments\": 43,\n            \"average_shared\": 6\n        },\n        \"by-time\": [\n            {\n                \"yyyymmdd\": \"20210219\",\n                \"hhmi\": \"0200\",\n                \"views_count\": 164,\n                \"likes_count\": 0,\n                \"comments_count\": 0,\n                \"shares_count\": 0,\n                \"average_views\": 23,\n                \"average_likes\": 0,\n                \"average_comments\": 0,\n                \"average_shared\": 0\n            },\n            ...\n            ],\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/monitoring.js",
    "groupTitle": "Monitoring",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/monitoring/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/notice/",
    "title": "Create Notice",
    "version": "1.0.0",
    "name": "Create_Notice",
    "group": "Notice",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Create Notice</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Post-Body:",
          "content": "{\n    \"title\": \"테스트 공지사항 2\",\n    \"description\": \"테스트 공지사항2 내용\",\n    \"category_id\": 1,\n    \"is_top\": \"N\",\n    \"departments\" : [18,23],\n    \"active_yn\" : \"Y\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"title\": \"테스트 공지사항 2\",\n        \"description\": \"테스트 공지사항2 내용\",\n        \"category_id\": 1,\n        \"is_top\": \"N\",\n        \"active_yn\": \"Y\",\n        \"updater_id\": 2,\n        \"creater_id\": 2,\n        \"updated_at\": \"2021.02.26 16:30:27\",\n        \"created_at\": \"2021.02.26 16:30:27\",\n        \"id\": 33\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"The HTTP status code \\\"23000\\\" is not valid.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/notice.js",
    "groupTitle": "Notice",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/notice/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/notice/{id}",
    "title": "Delete One",
    "version": "1.0.0",
    "name": "Delete_One",
    "group": "Notice",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>notice id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/notice.js",
    "groupTitle": "Notice",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/notice/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/notice/",
    "title": "Get Many",
    "version": "1.0.0",
    "name": "Get_Many",
    "group": "Notice",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get Many</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>(optional) page (default 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page_size",
            "description": "<p>(optional) page size (default 10)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Get-Parameter:",
          "content": "params={\"page\": 1, \"page_size\": 10,\"departments\":[],\"keyword\":{\"keyword\":\"\",\"scope\":[]}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n            {\n                \"id\": 11,\n                \"category_id\": 1,\n                \"is_top\": \"N\",\n                \"title\": \"테스트 공지사항 2\",\n                \"description\": \"테스트 공지사항2 내용\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 2,\n                \"updater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.01.18 11:28:45\",\n                \"updated_at\": \"2021.01.18 11:28:45\",\n                \"departments_count\": 2,\n                \"category\": {\n                    \"id\": 1,\n                    \"name\": \"그룹 공지\",\n                    \"active_yn\": \"Y\",\n                    \"created_at\": \"2020.11.23 18:16:31\",\n                    \"updated_at\": \"2020.11.23 18:16:31\"\n                },\n                \"writer\": {\n                    \"id\": 2,\n                    \"user_id\": \"admin\",\n                    \"name\": \"관리자\",\n                    \"tel\": \"11111\",\n                    \"locale\": \"ko\",\n                    \"profile_id\": 367,\n                    \"active_yn\": \"Y\",\n                    \"last_logined_at\": \"2021.02.26 13:23:35\",\n                    \"deleted_at\": null,\n                    \"created_at\": \"2020.08.14 08:27:58\",\n                    \"updated_at\": \"2021.02.26 04:23:35\",\n                    \"is_admin\": true\n                },\n                \"department_top1\": [\n                    {\n                        \"id\": 18,\n                        \"name\": \"업데이트 테스트\",\n                        \"description\": \"업데이트 테스트123\",\n                        \"active_yn\": \"N\",\n                        \"creater_id\": null,\n                        \"deleted_at\": null,\n                        \"created_at\": \"2020.08.26 17:27:08\",\n                        \"updated_at\": \"2020.11.05 14:59:19\",\n                        \"pivot\": {\n                            \"notice_id\": 11,\n                            \"department_id\": 18\n                        }\n                    }\n                ]\n            },\n            ...\n        ],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/notice?page=1\",\n            \"from\": 1,\n            \"last_page\": 1,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/notice?page=1\",\n            \"next_page_url\": null,\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/notice\",\n            \"per_page\": 10,\n            \"prev_page_url\": null,\n            \"to\": 4,\n            \"total\": 4\n        },\n        \"params\": {\n            \"departments\": [],\n            \"keyword\": {\n                \"keyword\": \"\",\n                \"scope\": []\n            },\n            \"page_size\": 10,\n            \"page\": 1\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/notice.js",
    "groupTitle": "Notice",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/notice/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/notice/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Notice",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 3,\n        \"category_id\": 1,\n        \"is_top\": \"N\",\n        \"title\": \"테스트 공지사항 2\",\n        \"description\": \"테스트 공지사항2 내용 -2\",\n        \"active_yn\": \"Y\",\n        \"creater_id\": 9,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.11.23 18:19:13\",\n        \"updated_at\": \"2021.01.18 11:35:10\",\n        \"category\": {\n            \"id\": 1,\n            \"name\": \"그룹 공지\",\n            \"active_yn\": \"Y\",\n            \"created_at\": \"2020.11.23 18:16:31\",\n            \"updated_at\": \"2020.11.23 18:16:31\"\n        },\n        \"departments\": [\n            {\n                \"id\": 18,\n                \"name\": \"업데이트 테스트\",\n                \"description\": \"업데이트 테스트123\",\n                \"active_yn\": \"N\",\n                \"creater_id\": null,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.26 17:27:08\",\n                \"updated_at\": \"2020.11.05 14:59:19\",\n                \"pivot\": {\n                    \"notice_id\": 3,\n                    \"department_id\": 18\n                }\n            },\n            {\n                \"id\": 24,\n                \"name\": \"ch6\",\n                \"description\": \"에라오,GSAM\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": null,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.11.06 19:50:01\",\n                \"updated_at\": \"2021.02.05 16:11:38\",\n                \"pivot\": {\n                    \"notice_id\": 3,\n                    \"department_id\": 24\n                }\n            }\n        ],\n        \"writer\": {\n            \"id\": 9,\n            \"user_id\": \"antonio\",\n            \"name\": \"염종훈\",\n            \"tel\": \"02-1111-2223\",\n            \"locale\": \"ko\",\n            \"profile_id\": 159,\n            \"active_yn\": \"Y\",\n            \"last_logined_at\": \"2021.02.24 11:38:22\",\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.14 08:27:58\",\n            \"updated_at\": \"2021.02.24 02:38:22\",\n            \"is_admin\": true\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/notice.js",
    "groupTitle": "Notice",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/notice/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/notice/remove-multi",
    "title": "Post Remove-multi",
    "version": "1.0.0",
    "name": "Post_Remove-multi",
    "group": "Notice",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Post Remove-multi</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>notice id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n    \"ids\": [6, 10]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/notice.js",
    "groupTitle": "Notice",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/notice/remove-multi"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/notice/{id}",
    "title": "Put One",
    "version": "1.0.0",
    "name": "Put_One",
    "group": "Notice",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>notice id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Put-Body",
          "content": "{\n    \"title\": \"테스트 공지사항 2\",\n    \"description\": \"테스트 공지사항2 내용 -2\",\n    \"category_id\": 1,\n    \"is_top\": \"N\",\n    \"departments\" : [18,24],\n    \"active_yn\" : \"Y\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 31,\n        \"category_id\": 1,\n        \"is_top\": \"N\",\n        \"title\": \"테스트 공지사항 2\",\n        \"description\": \"테스트 공지사항2 내용 -2\",\n        \"active_yn\": \"Y\",\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.26 16:01:19\",\n        \"updated_at\": \"2021.02.26 16:18:26\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/notice.js",
    "groupTitle": "Notice",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/notice/{id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/notice/update-multi",
    "title": "Put Update-multi",
    "version": "1.0.0",
    "name": "Put_Update-multi",
    "group": "Notice",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put Update-multi</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>notice id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Put-Body",
          "content": "{\n    \"ids\": [6, 10],\n    \"data\": {\n        \"active_yn\": \"N\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/notice.js",
    "groupTitle": "Notice",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/notice/update-multi"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/notification/",
    "title": "Get Notification",
    "version": "1.0.0",
    "name": "Get_Notification",
    "group": "Notification",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Notification-List Search</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>The page, page_size, class,... information</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "params = {\"page\":1,\"page_size\":5,\"class\":\"notice\",\"keyword\":\"테스트\",\"duration\":{\"start_date\":\"\",\"end_date\":\"\"}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [],\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/notification?page=1\",\n            \"from\": null,\n            \"last_page\": 1,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/notification?page=1\",\n            \"next_page_url\": null,\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/notification\",\n            \"per_page\": 5,\n            \"prev_page_url\": null,\n            \"to\": null,\n            \"total\": 0\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/apidocs.js",
    "groupTitle": "Notification",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/notification/"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/notification/mark-as-read",
    "title": "Post Mark-as-read",
    "version": "1.0.0",
    "name": "Post_Mark-as-read",
    "group": "Notification",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Notification mark as read of the user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": 53\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/apidocs.js",
    "groupTitle": "Notification",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/notification/mark-as-read"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/playlist/{id}/add-publish",
    "title": "Add Publishing",
    "version": "1.0.0",
    "name": "Add_Publishing",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Playlist- Add publishing to playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>playlist id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n    \"publish\": [\n        19685\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/{id}/add-publish"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/playlist/{id}",
    "title": "Delete Playlist",
    "version": "1.0.0",
    "name": "Delete_Playlist",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete Playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>playlist id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/playlist/all",
    "title": "Get All Playlist",
    "version": "1.0.0",
    "name": "Get_All_Playlist",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get All Playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/all"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/playlist/{id}/list",
    "title": "Get List",
    "version": "1.0.0",
    "name": "Get_List",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Playlist-View Public List</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>playlist id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 36623,\n            \"sns_post_id\": \"uJUlYdPMpII\",\n            \"channel_id\": 9,\n            \"platform_id\": 1,\n            \"metadata_id\": 36658,\n            \"thumbnail_id\": 162158,\n            \"state\": 4,\n            \"open_state\": \"O\",\n            \"on_monitoring\": \"N\",\n            \"is_live\": \"N\",\n            \"views\": 342,\n            \"likes\": 15,\n            \"hates\": 0,\n            \"shared\": 0,\n            \"comments\": 0,\n            \"playtimes\": 0,\n            \"duration\": 2846,\n            \"publisher_id\": 1,\n            \"published_at\": \"2021.02.23 15:57:22\",\n            \"last_sync_at\": \"2021.03.01 00:01:44\",\n            \"last_analytics_sync_at\": \"2021.03.01 10:00:24\",\n            \"creater_id\": 1,\n            \"updater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.02.24 00:01:16\",\n            \"updated_at\": \"2021.03.01 10:00:24\",\n            \"playlistitem\": {\n                \"playlist_id\": 254,\n                \"publish_id\": 36623,\n                \"sns_playlist_item_id\": \"UExTTDBTcnZ4YmotWFQ2NzVTVHNHZ3JzQTZESzB6WlBqMC41NkI0NEY2RDEwNTU3Q0M2\",\n                \"sequence\": 0,\n                \"added_at\": \"2021-02-24 01:36:47\"\n            },\n            \"thumbnail\": {\n                \"id\": 162158,\n                \"archive_id\": null,\n                \"sequence\": 0,\n                \"url\": \"https://i.ytimg.com/vi/uJUlYdPMpII/mqdefault.jpg\",\n                \"original_url\": \"https://i.ytimg.com/vi/uJUlYdPMpII/maxresdefault.jpg\",\n                \"file_name\": \"https://i.ytimg.com/vi/uJUlYdPMpII/maxresdefault.jpg\",\n                \"creater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.03.01 00:01:51\",\n                \"updated_at\": \"2021.03.01 00:01:51\"\n            },\n            \"metadata\": {\n                \"id\": 36658,\n                \"title\": \"[정철진의 목돈연구소] 부자되는 가장 확실한 방법! 인싸들의 재테크 비법은 바로 여기에서!\",\n                \"description\": \"2021년 2월 23일 (화) 정철진의 목돈연구소\\n\\n구현진의 식스센스\\n- 유가 폭등, 정말 너까지 이럴래?\\n- 일본 중국 다 올랐는데 우리만 왕따야ㅜ.ㅜ\\n- 10만전자라더니 이러다 7만전자로?\\n- 금리는 오르는데 왜 달러는 약세로?\\n\\n이진우의 투레이더\\n(출연 : 이진우 GFM연구소 소장)\\n- 미국 국채 금리가 왜 중요한가?\\n- 미국 국채 금리가 오르는 이유는?\\n- 미국 국채 금리 중에서 10년물 국채 금리가 모든 것의 지표로 쓰인다\\n- 미국 국채 금리는 계속 오를까?\\n\\n목돈연구소 특별 초대석\\n(출연 : 박상현 하이투자증권 전문위원)\\n- “테크노믹스 시대의 부의 지도” 저자\\n- 왜 플랫폼 기업이나 혁신기업이 코로나 이후 급등했을까?\\n- 지금 고평가 논란인 대형 기술주, 더 간다 걱정마라\\n- 반도체 슈퍼사이클이다, 결국 삼성전자는 더 오른다\",\n                \"default_audio_language_code\": \"ko\",\n                \"open_comment\": \"open\",\n                \"order_comment\": \"recent\",\n                \"category_id\": 22,\n                \"for_child\": \"N\",\n                \"for_adult\": \"N\",\n                \"location\": null,\n                \"sharable\": \"Y\",\n                \"ppl\": \"N\",\n                \"notice_ppl\": \"N\",\n                \"analytics_proposal\": null,\n                \"creater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.02.24 00:01:16\",\n                \"updated_at\": \"2021.02.25 00:01:18\",\n                \"subtitles_stat\": []\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/{id}/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/playlist/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>playlist id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 255,\n        \"channel_id\": 6,\n        \"platform_id\": 1,\n        \"sns_playlist_id\": \"PLqEIYksVjSsUF6h_6a7AnucIAH9rluq47\",\n        \"title\": \"API재생목록생성 테스트2\",\n        \"description\": \"API 생성시 재생목록이 정상적으로 재생되는지 테스트2\",\n        \"default_language_code\": \"ko\",\n        \"thumbnail_color\": \"#FFFFFF\",\n        \"thumbnail_id\": 56140,\n        \"open_state\": \"C\",\n        \"creater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.26 17:57:27\",\n        \"updated_at\": \"2021.02.26 17:57:27\",\n        \"channel\": {\n            \"id\": 6,\n            \"name\": \"G-SAM\",\n            \"logo\": \"https://yt3.ggpht.com/ytc/AAUvwnj6ND3SJfMuyieVD8pPIbm2yp9vHrO3cOVek8_1=s88-c-k-c0x00ffffff-no-rj\",\n            \"logo_clip_yn\": \"N\",\n            \"use_logo_clip_yn\": \"N\",\n            \"logo_clip_url\": null,\n            \"logo_thumbnail_yn\": \"N\",\n            \"use_logo_thumbnail_yn\": \"N\",\n            \"logo_thumbnail_url\": null,\n            \"sns_download_speed\": \"2\",\n            \"active_yn\": \"Y\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.28 14:07:39\",\n            \"updated_at\": \"2021.02.18 17:50:03\"\n        },\n        \"platform\": {\n            \"id\": 1,\n            \"short_name\": \"yt\",\n            \"name\": \"Youtube\",\n            \"image_url\": \"https://sns-dev-static.gemiso.com/images/platforms/cli-yt.png\",\n            \"active_yn\": \"Y\",\n            \"deleted_at\": null\n        },\n        \"thumbnail\": {\n            \"id\": 56140,\n            \"archive_id\": null,\n            \"sequence\": 0,\n            \"url\": \"https://i.ytimg.com/vi/3JDY8IouuBI/hqdefault.jpg\",\n            \"original_url\": \"https://i.ytimg.com/vi/3JDY8IouuBI/hqdefault.jpg\",\n            \"file_name\": \"https://i.ytimg.com/vi/3JDY8IouuBI/hqdefault.jpg\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.11.19 00:00:49\",\n            \"updated_at\": \"2021.01.08 00:01:04\"\n        },\n        \"publishings\": [],\n        \"default_language\": {\n            \"code\": \"ko\",\n            \"name\": \"한국어\",\n            \"use_yn\": \"Y\"\n        },\n        \"localized\": [],\n        \"tags\": [\n            \"GSAM\",\n            \"제머나이\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/playlist/",
    "title": "Get Playlist",
    "version": "1.0.0",
    "name": "Get_Playlist",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get Playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channel_id",
            "description": "<p>channel id</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "keyword",
            "description": "<p>keyword filter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "duration",
            "description": "<p>duration filter</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "order",
            "description": "<p>sort by updated_at</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "page_all",
            "description": "<p>if false, it will check the param['page_size'] out</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Put-Body",
          "content": "{\"channels\":[9],\"page_all\":true}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n                    {\n                        \"id\": 254,\n                        \"channel_id\": 9,\n                        \"platform_id\": 1,\n                        \"sns_playlist_id\": \"PLSL0Srvxbj-XT675STsGgrsA6DK0zZPj0\",\n                        \"title\": \"[정철진의 목돈연구소] 매일 20:05 ~ 21:00\",\n                        \"description\": \"\",\n                        \"default_language_code\": null,\n                        \"thumbnail_color\": null,\n                        \"thumbnail_id\": 160591,\n                        \"open_state\": \"O\",\n                        \"creater_id\": 1,\n                        \"deleted_at\": null,\n                        \"created_at\": \"2021.02.24 10:36:15\",\n                        \"updated_at\": \"2021.02.26 00:01:49\",\n                        \"publishings_count\": 2,\n                        \"publishings\": [],\n                        \"channel\": {},\n                        \"thumbnail\": {}\n                    },\n                    ...\n                ],\n        \"paging\": [\n            {\n                \"id\": 254,\n                \"channel_id\": 9,\n                \"platform_id\": 1,\n                \"sns_playlist_id\": \"PLSL0Srvxbj-XT675STsGgrsA6DK0zZPj0\",\n                \"title\": \"[정철진의 목돈연구소] 매일 20:05 ~ 21:00\",\n                \"description\": \"\",\n                \"default_language_code\": null,\n                \"thumbnail_color\": null,\n                \"thumbnail_id\": 160591,\n                \"open_state\": \"O\",\n                \"creater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.02.24 10:36:15\",\n                \"updated_at\": \"2021.02.26 00:01:49\",\n                \"publishings_count\": 2,\n                \"publishings\": [],\n                \"channel\": {},\n                \"thumbnail\": {}\n            },\n            ...\n        ],\n        \"params\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/playlist/with-publish/{publish_id}",
    "title": "Get Playlist With PublishID",
    "version": "1.0.0",
    "name": "Get_Playlist_With_PublishID",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Retrieve playlists included as publishing ID</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>publish id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n     ...\n     ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/with-publish/{publish_id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/playlist/{id}/move-publish",
    "title": "Move-publish",
    "version": "1.0.0",
    "name": "Move-publish",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Playlist-change the order of publishing</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>playlist id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n    \"publish\": [{\n        \"id\": 19388,\n        \"from_sequence\": 4,\n        \"to_sequence\": 1\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Trying to get property 'publishings' of non-object\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/{id}/move-publish"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/playlist/",
    "title": "Post Playlist",
    "version": "1.0.0",
    "name": "Post_Playlist",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Post Playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "platform_id",
            "description": "<p>platform id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "channel_id",
            "description": "<p>channel id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n\t\"platform_id\": 1,\n\t\"channel_id\": 6,\n\t\"title\": \"API재생목록생성 테스트2\",\n\t\"description\": \"API 생성시 재생목록이 정상적으로 재생되는지 테스트2\",\n    \"thumbnail_color\": \"#FFFFFF\",\n\t\"thumbnail_id\": 56140,\n\t\"open_state\":\"C\",\n\t\"tags\": [\"GSAM\", \"제머나이\"],\n    \"localized\": [\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"platform_id\": 1,\n        \"channel_id\": 6,\n        \"title\": \"API재생목록생성 테스트2\",\n        \"description\": \"API 생성시 재생목록이 정상적으로 재생되는지 테스트2\",\n        \"thumbnail_color\": \"#FFFFFF\",\n        \"thumbnail_id\": 56140,\n        \"open_state\": \"C\",\n        \"default_language_code\": \"ko\",\n        \"sns_playlist_id\": \"PLqEIYksVjSsUF6h_6a7AnucIAH9rluq47\",\n        \"creater_id\": 2,\n        \"updated_at\": \"2021.02.26 17:57:27\",\n        \"created_at\": \"2021.02.26 17:57:27\",\n        \"id\": 255,\n        \"publishings\": [],\n        \"tags\": [\n            \"GSAM\",\n            \"제머나이\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/playlist/{id}",
    "title": "Put Playlist",
    "version": "1.0.0",
    "name": "Put_Playlist",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put Playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>playlist id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Put-Body",
          "content": "{\n\t\"platform_id\": 1,\n\t\"channel_id\": 6,\n\t\"title\": \"테스트4 재생목록\",\n\t\"description\": \"테스트 재생목록 4\",\n    \"default_language_code\": \"ko\",\n\t\"thumbnail_color\": \"#FFFFFF\",\n\t\"thumbnail_id\": 56140,\n\t\"open_state\":\"O\",\n\t\"tags\": [\"GSAM\", \"제머나이\"],\n  \"localized\": [\n        {\n            \"language_code\": \"ko\",\n            \"title\": \"테스트4 재생목록 !!!\",\n            \"description\": \"테스트4 재생목록 !!!\"\n        },\n        {\n            \"language_code\": \"en\",\n            \"title\": \"Test Playlist 4\",\n            \"description\": \"Localization test 4.\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 255,\n        \"channel_id\": 6,\n        \"platform_id\": 1,\n        \"sns_playlist_id\": \"PLqEIYksVjSsUF6h_6a7AnucIAH9rluq47\",\n        \"title\": \"테스트4 재생목록\",\n        \"description\": \"테스트 재생목록 4\",\n        \"default_language_code\": \"ko\",\n        \"thumbnail_color\": \"#FFFFFF\",\n        \"thumbnail_id\": 56140,\n        \"open_state\": \"O\",\n        \"creater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.26 17:57:27\",\n        \"updated_at\": \"2021.02.26 19:08:03\",\n        \"publishings\": [],\n        \"tags\": [\n            \"GSAM\",\n            \"제머나이\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/playlist/{id}/remove-publish",
    "title": "Remove-publish",
    "version": "1.0.0",
    "name": "Remove-publish",
    "group": "Playlist",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Playlist-Delete publishing from playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>playlist id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n    \"publish\": [\n        19685\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"The HTTP status code \\\"21000\\\" is not valid.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/playlist.js",
    "groupTitle": "Playlist",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/playlist/{id}/remove-publish"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/playlist/{id}/add-publish",
    "title": "Playlist-Add Publishing",
    "version": "1.0.0",
    "name": "Add_Publishing",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Add Publishing To Playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the playlist id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"publish\": [\n        19685\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n    \"trace\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist/{id}/add-publish"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/",
    "title": "Publish-Create One",
    "version": "1.0.0",
    "name": "Create_One",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Creating a publishing (archive registration image)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>user id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n    \"archives\": [473],\n    \"publishing_channels\":[\n        {\n            \"channel\": {\n                \"id\": 6\n            },\n            \"platform\": {\n                \"id\": 1\n            }\n        },\n        {\n            \"channel\": {\n                \"id\": 6\n            },\n            \"platform\": {\n                \"id\":2\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 36708,\n            \"sns_post_id\": null,\n            \"channel_id\": 6,\n            \"platform_id\": 1,\n            \"metadata_id\": 36744,\n            \"thumbnail_id\": 99708,\n            \"state\": 0,\n            \"open_state\": \"O\",\n            \"on_monitoring\": null,\n            \"is_live\": \"N\",\n            \"views\": 0,\n            \"likes\": 0,\n            \"hates\": 0,\n            \"shared\": 0,\n            \"comments\": 0,\n            \"playtimes\": 0,\n            \"duration\": null,\n            \"publisher_id\": 9,\n            \"published_at\": null,\n            \"last_sync_at\": null,\n            \"last_analytics_sync_at\": null,\n            \"creater_id\": 9,\n            \"updater_id\": 9,\n            \"deleted_at\": \"1980.01.01 00:00:00\",\n            \"created_at\": \"2021.03.01 16:36:05\",\n            \"updated_at\": \"2021.03.01 16:36:05\",\n            \"is_collected\": \"N\",\n            \"has_archive\": true,\n            ...\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 402 Payment Required\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 402,\n    \"message\": \"아카이브 자산화가 되지 않은 게시물은 재배포 할 수 없습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/playlist",
    "title": "Playlist-Create One",
    "version": "1.0.0",
    "name": "Create_a_playlist",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Create a playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "ids",
            "description": "<p>user id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"platform_id\": 1,\n\t\"channel_id\": 6,\n\t\"title\": \"API재생목록생성 테스트2\",\n\t\"description\": \"API 생성시 재생목록이 정상적으로 재생되는지 테스트2\",\n    \"thumbnail_color\": \"#FFFFFF\",\n\t\"thumbnail_id\": 56140,\n\t\"open_state\":\"C\",\n\t\"tags\": [\"GSAM\", \"제머나이\"],\n    \"localized\": [\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"platform_id\": 1,\n        \"channel_id\": 6,\n        \"title\": \"API재생목록생성 테스트2\",\n        \"description\": \"API 생성시 재생목록이 정상적으로 재생되는지 테스트2\",\n        \"thumbnail_color\": \"#FFFFFF\",\n        \"thumbnail_id\": 56140,\n        \"open_state\": \"C\",\n        \"default_language_code\": \"ko\",\n        \"sns_playlist_id\": \"PLqEIYksVjSsU2tkXqh31m8Zl-vPChmLn9\",\n        \"creater_id\": 2,\n        \"updated_at\": \"2021.03.02 17:18:22\",\n        \"created_at\": \"2021.03.02 17:18:22\",\n        \"id\": 257,\n        \"publishings\": [],\n        \"tags\": [\n            \"GSAM\",\n            \"제머나이\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/publish/{id}/bookmark/remove",
    "title": "Bookmark-Delete",
    "version": "1.0.0",
    "name": "Delete_Bookmark",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Delete bookmark</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"The HTTP status code \\\"23000\\\" is not valid.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/bookmark/remove"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/publish/{publish_id}/localization/",
    "title": "Localization-Delete Many",
    "version": "1.0.0",
    "name": "Delete_Localization_Many",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Localization-Delete all public multilingual metadata</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "localized_id",
            "description": "<p>the multilingual metadata id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Trying to get property 'metadata_id' of non-object\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/localization/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/publish/{publish_id}/localization/{localized_id}",
    "title": "Localization-Delete One",
    "version": "1.0.0",
    "name": "Delete_Localization_One",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete multilingual metadata information.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "localized_id",
            "description": "<p>the multilingual metadata id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Trying to get property 'metadata_id' of non-object\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/localization/{localized_id}"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/publish/playlist/{id}",
    "title": "Playlist-Delete One",
    "version": "1.0.0",
    "name": "Delete_One",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>playlist id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Trying to get property 'channel_id' of non-object\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/playlist/{id}",
    "title": "Playlist-Get One",
    "version": "1.0.0",
    "name": "Get_A_Playlist",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get a playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the playlist id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 254,\n        \"channel_id\": 9,\n        \"platform_id\": 1,\n        \"sns_playlist_id\": \"PLSL0Srvxbj-XT675STsGgrsA6DK0zZPj0\",\n        \"title\": \"[정철진의 목돈연구소] 매일 20:05 ~ 21:00\",\n        \"description\": \"\",\n        \"default_language_code\": null,\n        \"thumbnail_color\": null,\n        \"thumbnail_id\": 160591,\n        \"open_state\": \"O\",\n        \"creater_id\": 1,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.02.24 10:36:15\",\n        \"updated_at\": \"2021.03.01 11:03:29\",\n        \"channel\": {\n            \"id\": 9,\n            \"name\": \"SBS 시사교양 라디오 – 시교라\",\n            \"logo\": \"https://yt3.ggpht.com/a/AATXAJwN8e1PTm5BEbzjdVcl1EJrDhEWxR9SogRpMbsVIg=s88-c-k-c0xffffffff-no-rj-mo\",\n            \"logo_clip_yn\": \"N\",\n            \"use_logo_clip_yn\": \"Y\",\n            \"logo_clip_url\": null,\n            \"logo_thumbnail_yn\": \"N\",\n            \"use_logo_thumbnail_yn\": \"Y\",\n            \"logo_thumbnail_url\": null,\n            \"sns_download_speed\": \"2\",\n            \"active_yn\": \"Y\",\n            \"creater_id\": 2,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.28 14:07:39\",\n            \"updated_at\": \"2020.09.08 14:43:08\"\n        },\n        \"platform\": {\n            \"id\": 1,\n            \"short_name\": \"yt\",\n            \"name\": \"Youtube\",\n            \"image_url\": \"https://sns-dev-static.gemiso.com/images/platforms/cli-yt.png\",\n            \"active_yn\": \"Y\",\n            \"deleted_at\": null\n        },\n        \"thumbnail\": {\n            \"id\": 160591,\n            \"archive_id\": null,\n            \"sequence\": 0,\n            \"url\": \"https://i.ytimg.com/vi/uJUlYdPMpII/hqdefault.jpg\",\n            \"original_url\": \"https://i.ytimg.com/vi/uJUlYdPMpII/hqdefault.jpg\",\n            \"file_name\": \"https://i.ytimg.com/vi/uJUlYdPMpII/hqdefault.jpg\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.02.25 00:01:52\",\n            \"updated_at\": \"2021.02.25 00:01:52\"\n        },\n        \"publishings\": [...],\n        \"default_language\": null,\n        \"localized\": [],\n        \"tags\": []\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/gets",
    "title": "Publish-Get All",
    "version": "1.0.0",
    "name": "Get_All",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>put publish gets</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>publish id list</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 17541,\n            \"sns_post_id\": null,\n            \"channel_id\": 6,\n            \"platform_id\": 2,\n            \"metadata_id\": 17542,\n            \"thumbnail_id\": 17765,\n            \"state\": 0,\n            \"open_state\": \"O\",\n            \"on_monitoring\": null,\n            \"is_live\": null,\n            \"views\": 0,\n            \"likes\": 0,\n            \"hates\": 0,\n            \"shared\": 0,\n            \"comments\": 0,\n            \"playtimes\": 0,\n            \"duration\": null,\n            \"publisher_id\": 9,\n            \"published_at\": \"2020.10.16 17:17:00\",\n            \"last_sync_at\": null,\n            \"last_analytics_sync_at\": null,\n            \"creater_id\": 9,\n            \"updater_id\": 9,\n            \"deleted_at\": \"2020.10.16 18:05:32\",\n            \"created_at\": \"2020.10.16 10:34:18\",\n            \"updated_at\": \"2020.10.16 17:38:41\",\n            \"is_collected\": \"N\",\n            \"has_archive\": false,\n            \"channel\": {\n                \"id\": 6,\n                \"name\": \"G-SAM 테스트 채널\",\n                \"logo\": \"https://sns-dev-static.gemiso.com/images/channels/1613636304.png\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"N\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"N\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.28 14:07:39\",\n                \"updated_at\": \"2021.03.01 12:17:53\"\n            },\n            ...\n        },\n        {\n            \"id\": 17542,\n            \"sns_post_id\": \"VMbfalWLiIc\",\n            \"channel_id\": 6,\n            \"platform_id\": 1,\n            \"metadata_id\": 17543,\n            \"thumbnail_id\": 17867,\n            \"state\": 4,\n            \"open_state\": \"O\",\n            \"on_monitoring\": \"N\",\n            \"is_live\": null,\n            \"views\": 0,\n            \"likes\": 0,\n            \"hates\": 0,\n            \"shared\": 0,\n            \"comments\": 0,\n            \"playtimes\": 0,\n            \"duration\": 102,\n            \"publisher_id\": 9,\n            \"published_at\": \"2020.10.16 15:02:46\",\n            \"last_sync_at\": \"2020.10.16 15:10:12\",\n            \"last_analytics_sync_at\": null,\n            \"creater_id\": 9,\n            \"updater_id\": 1,\n            \"deleted_at\": \"2020.10.16 15:40:29\",\n            \"created_at\": \"2020.10.16 13:55:20\",\n            \"updated_at\": \"2020.10.16 15:10:12\",\n            \"is_collected\": \"N\",\n            \"has_archive\": true,\n            \"channel\": {\n                \"id\": 6,\n                \"name\": \"G-SAM 테스트 채널\",\n                \"logo\": \"https://sns-dev-static.gemiso.com/images/channels/1613636304.png\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"N\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"N\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.28 14:07:39\",\n                \"updated_at\": \"2021.03.01 12:17:53\"\n            },\n            ...\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoData",
            "description": "<p>No results were found</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/gets"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/playlist/all",
    "title": "Playlist-Get All",
    "version": "1.0.0",
    "name": "Get_All_Playlist",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get All Playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 6,\n            \"channel_id\": 7,\n            \"platform_id\": 1,\n            \"sns_playlist_id\": \"PL9hiMmjtznrOH0isy6nBIGbhxl_j7rGxv\",\n            \"title\": \"[파워FM] 딘딘의 Music High\",\n            \"description\": \"\",\n            \"default_language_code\": null,\n            \"thumbnail_color\": null,\n            \"thumbnail_id\": 305,\n            \"open_state\": \"O\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.24 13:33:06\",\n            \"updated_at\": \"2021.02.05 00:02:43\"\n        },\n        {\n            \"id\": 7,\n            \"channel_id\": 7,\n            \"platform_id\": 1,\n            \"sns_playlist_id\": \"PL9hiMmjtznrPD5C3DasUsBFqAznfG6IZE\",\n            \"title\": \"[러브FM] 이재익의 시사특공대\",\n            \"description\": \"\",\n            \"default_language_code\": null,\n            \"thumbnail_color\": null,\n            \"thumbnail_id\": 306,\n            \"open_state\": \"O\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.07.17 14:39:25\",\n            \"updated_at\": \"2021.02.05 00:02:44\"\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist/all"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/{publish_id}/localization/by-language/{language_code}",
    "title": "Localization-Get By Language",
    "version": "1.0.0",
    "name": "Get_By_Language",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Public multilingual metadata lookup (language structure)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language_code",
            "description": "<p>the language code , on param</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata_id",
            "description": "<p>the metadata ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"en\": {\n            \"id\": 33,\n            \"metadata_id\": 33,\n            \"title\": \"Quasi fugit quaerat architecto libero.\",\n            \"description\": \"Occaecati qui omnis veritatis perspiciatis dolore. Et deserunt officia consequuntur nobis...\",\n            \"creater_id\": 2,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.14 17:28:06\",\n            \"updated_at\": \"2020.08.14 17:28:06\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/localization/by-language/{language_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/channel",
    "title": "Publish-Get Channel",
    "version": "1.0.0",
    "name": "Get_Channel",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Viewing the list of publishing channels</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "platforms",
            "description": "<p>example: [&quot;yt&quot;]</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": \"8-yt\",\n            \"channel\": {\n                \"id\": 8,\n                \"name\": \"[철파엠] 김영철의 파워 FM 공식계정\",\n                \"logo\": \"https://yt3.ggpht.com/a/AATXAJzJuxpRMXHw0DXGav4swsYBuy-LHrSkibZ74hSD=s88-c-k-c0xffffffff-no-rj-mo\",\n                \"logo_clip_yn\": \"N\",\n                \"use_logo_clip_yn\": \"Y\",\n                \"logo_clip_url\": null,\n                \"logo_thumbnail_yn\": \"N\",\n                \"use_logo_thumbnail_yn\": \"Y\",\n                \"logo_thumbnail_url\": null,\n                \"sns_download_speed\": \"2\",\n                \"active_yn\": \"Y\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.28 14:07:39\",\n                \"updated_at\": \"2020.09.08 14:40:18\",\n                \"platform_settings\": [...]\n            },\n            \"platform\": {\n                \"id\": 1,\n                \"short_name\": \"yt\",\n                \"name\": \"Youtube\",\n                \"image_url\": \"https://sns-dev-static.gemiso.com/images/platforms/cli-yt.png\",\n                \"active_yn\": \"Y\",\n                \"deleted_at\": null\n            }\n        },\n       \n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/channel"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/{id}/history",
    "title": "Publish-Get History",
    "version": "1.0.0",
    "name": "Get_History",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Editing history of publishing</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of publishing history</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 260754,\n            \"publish_id\": 33111,\n            \"history_type\": \"publish\",\n            \"description\": \"역수집 등록\",\n            \"creater_id\": 1,\n            \"created_at\": \"2021.02.05 13:07:10\",\n            \"updated_at\": \"2021.02.05 13:07:10\",\n            \"creater\": {\n                \"id\": 1,\n                \"user_id\": \"system\",\n                \"name\": \"System\",\n                \"tel\": null,\n                \"locale\": \"ko\",\n                \"profile_id\": null,\n                \"active_yn\": \"N\",\n                \"last_logined_at\": null,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.08.14 08:27:58\",\n                \"updated_at\": \"2020.08.14 08:27:58\",\n                \"is_admin\": false\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/history"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/{publish_id}/localization/{language_code}",
    "title": "Localization-Get Language",
    "version": "1.0.0",
    "name": "Get_Language",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing - Public multilingual metadata lookup</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "language_code",
            "description": "<p>the language code, on param</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "metadata_id",
            "description": "<p>the metadata ID</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 33,\n            \"metadata_id\": 33,\n            \"language_code\": \"en\",\n            \"title\": \"Quasi fugit quaerat architecto libero.\",\n            \"description\": \"Occaecati qui omnis veritatis perspiciatis dolore. Et deserunt officia consequuntur nobis dolor enim et quibusdam.\\\\n\\\\nCorrupti suscipit et cum enim officia sapiente et. Adipisci quo dolor eaque hic perferendis. Error dolor blanditiis placeat minima. Consequatur omnis cum qui.\\\\n\\\\nPraesentium eligendi debitis totam. Laboriosam debitis enim hic occaecati consequatur. Non sit sint sequi in non nihil.\",\n            \"creater_id\": 2,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.14 17:28:06\",\n            \"updated_at\": \"2020.08.14 17:28:06\",\n            \"language\": {\n                \"code\": \"en\",\n                \"name\": \"영어\",\n                \"use_yn\": \"Y\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/localization/{language_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/",
    "title": "Publish-Get List",
    "version": "1.0.0",
    "name": "Get_List",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-List Lookup</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"mode\":\"list\",\n    \"page\":1,\n    \"page_size\":5,\n    \"bookmark\":false,\n    \"order\":\"created_at desc\",\n    \"duration\":{\n        \"start_date\":\"\",\n        \"end_date\":\"\",\n        \"scope\":\"\"\n    },\n    \"platforms\":[\n        \n    ],\n    \"channels\":[\n        6\n    ],\n    \"state\":[\n        \n    ],\n    \"keyword\":{\n        \"keyword\":\"\",\n        \"scope\":[\n            \n        ]\n    },\n    \"views\":{\n        \"threshold\":\"\",\n        \"order\":\"below\"\n    },\n    \"likes\":{\n        \"threshold\":\"\",\n        \"order\":\"below\"\n    },\n    \"comments\":{\n        \"threshold\":\"\",\n        \"order\":\"below\"\n    },\n    \"playtimes\":{\n        \"threshold\":\"\",\n        \"order\":\"below\"\n    },\n    \"status\":[\n        \n    ],\n    \"asset\":\"Y\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"paging\": {\n            \"current_page\": 1,\n            \"first_page_url\": \"https://sns-dev-api.gemiso.com/v1/publish?page=1\",\n            \"from\": 1,\n            \"last_page\": 44,\n            \"last_page_url\": \"https://sns-dev-api.gemiso.com/v1/publish?page=44\",\n            \"next_page_url\": \"https://sns-dev-api.gemiso.com/v1/publish?page=2\",\n            \"path\": \"https://sns-dev-api.gemiso.com/v1/publish\",\n            \"per_page\": 5,\n            \"prev_page_url\": null,\n            \"to\": 5,\n            \"total\": 218\n        },\n        \"list\": [\n            {\n                \"id\": 36635,\n                \"sns_post_id\": \"GK94ICDRbg4\",\n                \"channel_id\": 6,\n                \"platform_id\": 1,\n                \"metadata_id\": 36671,\n                \"thumbnail_id\": 162020,\n                \"state\": 4,\n                \"open_state\": \"O\",\n                \"on_monitoring\": \"N\",\n                \"is_live\": \"N\",\n                \"views\": 1,\n                \"likes\": 0,\n                \"hates\": 0,\n                \"shared\": 0,\n                \"comments\": 0,\n                \"playtimes\": 0,\n                \"duration\": 24,\n                \"publisher_id\": 9,\n                \"published_at\": \"2021.02.24 17:34:50\",\n                \"last_sync_at\": \"2021.03.01 00:00:45\",\n                \"last_analytics_sync_at\": \"2021.03.01 13:00:23\",\n                \"creater_id\": 9,\n                \"updater_id\": 1,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.02.24 17:34:17\",\n                \"updated_at\": \"2021.03.01 13:00:23\",\n                \"is_collected\": \"N\",\n                \"bookmarked\": false,\n                \"has_archive\": true,\n                \"channel\": {\n                    \"id\": 6,\n                    \"name\": \"G-SAM 테스트 채널\",\n                    \"logo\": \"https://sns-dev-static.gemiso.com/images/channels/1613636304.png\",\n                    \"logo_clip_yn\": \"N\",\n                    \"use_logo_clip_yn\": \"N\",\n                    \"logo_clip_url\": null,\n                    \"logo_thumbnail_yn\": \"N\",\n                    \"use_logo_thumbnail_yn\": \"N\",\n                    \"logo_thumbnail_url\": null,\n                    \"sns_download_speed\": \"2\",\n                    \"active_yn\": \"Y\",\n                    \"creater_id\": 1,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2020.08.28 14:07:39\",\n                    \"updated_at\": \"2021.03.01 12:17:53\"\n                },\n                \"platform\": {\n                    \"id\": 1,\n                    \"short_name\": \"yt\",\n                    \"name\": \"Youtube\",\n                    \"image_url\": \"https://sns-dev-static.gemiso.com/images/platforms/cli-yt.png\",\n                    \"active_yn\": \"Y\",\n                    \"deleted_at\": null\n                },\n                \"metadata\": {\n                    \"id\": 36671,\n                    \"title\": \"[GSAM] 기본제목\",\n                    \"description\": \"G-SAM 에서 생성한 컨텐츠 입니다.\",\n                    \"default_audio_language_code\": \"ko\",\n                    \"open_comment\": \"open\",\n                    \"order_comment\": \"recent\",\n                    \"category_id\": 19,\n                    \"for_child\": \"N\",\n                    \"for_adult\": \"N\",\n                    \"location\": null,\n                    \"sharable\": \"Y\",\n                    \"ppl\": \"N\",\n                    \"notice_ppl\": \"N\",\n                    \"analytics_proposal\": null,\n                    \"creater_id\": 9,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2021.02.24 17:34:17\",\n                    \"updated_at\": \"2021.02.24 17:34:17\",\n                    \"subtitles_stat\": []\n                },\n                \"thumbnail\": {\n                    \"id\": 162020,\n                    \"archive_id\": null,\n                    \"sequence\": 0,\n                    \"url\": \"https://i.ytimg.com/vi/GK94ICDRbg4/mqdefault.jpg\",\n                    \"original_url\": \"https://i.ytimg.com/vi/GK94ICDRbg4/maxresdefault.jpg\",\n                    \"file_name\": \"https://i.ytimg.com/vi/GK94ICDRbg4/maxresdefault.jpg\",\n                    \"creater_id\": 1,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2021.03.01 00:00:45\",\n                    \"updated_at\": \"2021.03.01 00:00:45\"\n                },\n                \"media\": [\n                    {\n                        \"id\": 160277,\n                        \"publish_id\": 36635,\n                        \"publish_media_url\": \"https://www.youtube.com/embed/GK94ICDRbg4\",\n                        \"publish_link_url\": \"https://www.youtube.com/watch?v=GK94ICDRbg4\",\n                        \"poster_url\": \"https://i.ytimg.com/vi/GK94ICDRbg4/mqdefault.jpg\",\n                        \"media_type\": \"video\",\n                        \"order\": 1,\n                        \"creater_id\": 1,\n                        \"deleted_at\": null,\n                        \"created_at\": \"2021.03.01 00:00:45\",\n                        \"updated_at\": \"2021.03.01 00:00:45\"\n                    }\n                ],\n                \"archive_media\": [\n                    {\n                        \"id\": 1447,\n                        \"publish_id\": 36635,\n                        \"archive_id\": 535,\n                        \"order\": 1,\n                        \"in\": 0,\n                        \"out\": 24,\n                        \"file_path\": \"/movies/\",\n                        \"file_name\": \"1614155657.mp4\",\n                        \"file_size\": 62122622,\n                        \"duration\": 24,\n                        \"preview\": \"https://sns-dev-static.gemiso.com/movies/previews/1614155657.mp4\",\n                        \"status\": \"C\",\n                        \"creater_id\": 9,\n                        \"deleted_at\": null,\n                        \"created_at\": \"2021.02.24 17:34:23\",\n                        \"updated_at\": \"2021.02.24 17:34:35\"\n                    }\n                ],\n                \"publisher\": {\n                    \"id\": 9,\n                    \"user_id\": \"antonio\",\n                    \"name\": \"염종훈\",\n                    \"tel\": \"02-1111-2223\",\n                    \"locale\": \"ko\",\n                    \"profile_id\": 159,\n                    \"active_yn\": \"Y\",\n                    \"last_logined_at\": \"2021.02.24 11:38:22\",\n                    \"deleted_at\": null,\n                    \"created_at\": \"2020.08.14 08:27:58\",\n                    \"updated_at\": \"2021.02.24 02:38:22\",\n                    \"is_admin\": true,\n                    \"departments\": [\n                        {\n                            \"id\": 10,\n                            \"name\": \"테스트부서\",\n                            \"description\": \"테스트설명\",\n                            \"active_yn\": \"Y\",\n                            \"creater_id\": null,\n                            \"deleted_at\": null,\n                            \"created_at\": \"2020.08.25 17:20:01\",\n                            \"updated_at\": \"2020.08.25 17:20:01\",\n                            \"pivot\": {\n                                \"user_id\": 9,\n                                \"department_id\": 10\n                            }\n                        }\n                    ]\n                },\n                \"bookmarked_users\": []\n            },\n            ...\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/{id}",
    "title": "Publish-Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>publishing id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 33,\n        \"sns_post_id\": null,\n        \"channel_id\": 2,\n        \"platform_id\": 1,\n        \"metadata_id\": 33,\n        \"thumbnail_id\": 9,\n        \"state\": 5,\n        \"open_state\": \"C\",\n        \"on_monitoring\": null,\n        \"is_live\": null,\n        \"views\": 29602,\n        \"likes\": 7169,\n        \"hates\": 4689,\n        \"shared\": 832,\n        \"comments\": 627,\n        \"playtimes\": 0,\n        \"duration\": null,\n        \"publisher_id\": 2,\n        \"published_at\": \"2020.08.08 14:28:04\",\n        \"last_sync_at\": null,\n        \"last_analytics_sync_at\": null,\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.08.14 17:28:04\",\n        \"updated_at\": \"2020.08.14 17:28:04\",\n        \"is_collected\": \"N\",\n        \"has_archive\": false,\n ...\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/playlist",
    "title": "Playlist-Get List",
    "version": "1.0.0",
    "name": "Get_Playlist_List",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get Playlist List</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "channels",
            "description": "<p>the channel list</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "page_all",
            "description": "<p>true if want to get all, false: using page and page_size in params instead</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "params={\"channels\":[6],\"page_all\":true}}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 171,\n            \"channel_id\": 6,\n            \"platform_id\": 1,\n            \"sns_playlist_id\": \"PLqEIYksVjSsXm9HVa1ZNQ_G2IuDbLM1EU\",\n            \"title\": \"테스트입니다.\",\n            \"description\": \"테스트입니다.\",\n            \"default_language_code\": null,\n            \"thumbnail_color\": null,\n            \"thumbnail_id\": 132686,\n            \"open_state\": \"O\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.02.01 15:32:06\",\n            \"updated_at\": \"2021.02.24 11:06:11\",\n            \"publishings_count\": 2,\n            ...\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/playlist/{id}/list",
    "title": "Playlist-Get Publishing List",
    "version": "1.0.0",
    "name": "Get_Publishing_List",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Playlist-View Publishing List</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the playlist id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 5397,\n            \"sns_post_id\": \"69NGENR6DuE\",\n            \"channel_id\": 7,\n            \"platform_id\": 1,\n            \"metadata_id\": 5398,\n            \"thumbnail_id\": 118043,\n            \"state\": 4,\n            \"open_state\": \"O\",\n            \"on_monitoring\": \"N\",\n            \"is_live\": \"N\",\n            \"views\": 416,\n            \"likes\": 6,\n            \"hates\": 1,\n            \"shared\": 8,\n            \"comments\": 0,\n            \"playtimes\": 46,\n            \"duration\": 112,\n            \"publisher_id\": 1,\n            \"published_at\": \"2017.06.20 16:13:32\",\n            \"last_sync_at\": \"2021.01.28 21:48:30\",\n            \"last_analytics_sync_at\": \"2021.03.01 04:32:41\",\n            \"creater_id\": 25,\n            \"updater_id\": 2,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.09.23 14:10:20\",\n            \"updated_at\": \"2021.03.02 00:01:28\",\n            \"playlistitem\": {\n                \"playlist_id\": 33,\n                \"publish_id\": 5397,\n                \"sns_playlist_item_id\": \"UEw5aGlNbWp0em5yTUoyMDlzM1hfSHhiRWVZcXBRX0xjNi41NkI0NEY2RDEwNTU3Q0M2\",\n                \"sequence\": 0,\n                \"added_at\": \"2017-06-20 07:13:39\"\n            },\n            \"thumbnail\": {\n                \"id\": 118043,\n                \"archive_id\": null,\n                \"sequence\": 0,\n                \"url\": \"https://i.ytimg.com/vi/69NGENR6DuE/mqdefault.jpg\",\n                \"original_url\": \"https://i.ytimg.com/vi/69NGENR6DuE/maxresdefault.jpg\",\n                \"file_name\": \"https://i.ytimg.com/vi/69NGENR6DuE/maxresdefault.jpg\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.01.28 21:48:44\",\n                \"updated_at\": \"2021.01.28 21:48:44\"\n            },\n            \"metadata\": {\n                \"id\": 5398,\n                \"title\": \"안재욱, 컨디션 조절은 어떤 식으로? [SBS김흥국, 안선영의 아싸 라디오]\",\n                \"description\": \"[SBS김흥국, 안선영의 아싸 라디오]\\n안재욱, 컨디션 조절은 어떤 식으로?\\n링크 주소 : http://radio.sbs.co.kr/assaradio/\",\n                \"default_audio_language_code\": null,\n                \"open_comment\": \"open\",\n                \"order_comment\": \"recent\",\n                \"category_id\": 10,\n                \"for_child\": \"N\",\n                \"for_adult\": \"N\",\n                \"location\": null,\n                \"sharable\": \"Y\",\n                \"ppl\": \"N\",\n                \"notice_ppl\": \"N\",\n                \"analytics_proposal\": null,\n                \"creater_id\": 25,\n                \"deleted_at\": null,\n                \"created_at\": \"2020.09.23 14:10:20\",\n                \"updated_at\": \"2020.11.09 19:57:17\",\n                \"subtitles_stat\": []\n            }\n        },\n        ...\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist/{id}/list"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/{publish_id}/subtitle/list/{language_code}",
    "title": "Subtitle-Get Subtitle List",
    "version": "1.0.0",
    "name": "Get_Subtitle_List",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Subtitles-Search for publishing subtitles</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "Char[2]",
            "optional": false,
            "field": "language_code",
            "description": "<p>the language code, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Trying to get property 'metadata_id' of non-object\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/subtitle/list/{language_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/{publish_id}/subtitle/list-by-language/{language_code}",
    "title": "Subtitle-Get Subtitle List-by-language",
    "version": "1.0.0",
    "name": "Get_Subtitle_List-by-language",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Subtitles-Search for publishing subtitles (structure by language)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "Char[2]",
            "optional": false,
            "field": "language_code",
            "description": "<p>the language code, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Trying to get property 'metadata_id' of non-object\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/subtitle/list-by-language/{language_code}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/playlist/with-publish/{publish_id}",
    "title": "Playlist-Get With Publish ID",
    "version": "1.0.0",
    "name": "Get_With_Publish_ID",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Retrieve playlists included as publishing ID</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>the publish id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist/with-publish/{publish_id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/playlist/{id}/move-publish",
    "title": "Playlist-Move Publishing",
    "version": "1.0.0",
    "name": "Move_Publishing",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Move Publish From Playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the playlist id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"publish\": [{\n        \"id\": 19388,\n        \"from_sequence\": 4,\n        \"to_sequence\": 1\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n    \"trace\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist/{id}/move-publish"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/publish/{id}/thumbnail/{thumbnail_id}",
    "title": "Publish-Patch A Thumbnail",
    "version": "1.0.0",
    "name": "Patch_A_Thumbnail",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Designation of representative image</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "thumbnail_id",
            "description": "<p>the thumbnail id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 33,\n        \"sns_post_id\": null,\n        \"channel_id\": 2,\n        \"platform_id\": 1,\n        \"metadata_id\": 33,\n        \"thumbnail_id\": 99707,\n        \"state\": 5,\n        \"open_state\": \"C\",\n        \"on_monitoring\": null,\n        \"is_live\": null,\n        \"views\": 29602,\n        \"likes\": 7169,\n        \"hates\": 4689,\n        \"shared\": 832,\n        \"comments\": 627,\n        \"playtimes\": 0,\n        \"duration\": null,\n        \"publisher_id\": 2,\n        \"published_at\": \"2020.08.08 14:28:04\",\n        \"last_sync_at\": null,\n        \"last_analytics_sync_at\": null,\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.08.14 17:28:04\",\n        \"updated_at\": \"2021.03.02 11:33:10\",\n        \"thumbnail\": {\n            \"id\": 99707,\n            \"archive_id\": null,\n            \"sequence\": 0,\n            \"url\": \"https://i9.ytimg.com/vi/uFvZolIXg0Q/mqdefault_live.jpg?sqp=CJST-f8F&rs=AOn4CLCQR3rhsVpsXV0h1JB0y3o95-yrFw\",\n            \"original_url\": \"https://i9.ytimg.com/vi/uFvZolIXg0Q/maxresdefault_live.jpg?sqp=CJST-f8F&rs=AOn4CLD15uHk7ZK5a9QQ07yt6Kl2xaraHQ\",\n            \"file_name\": \"https://i9.ytimg.com/vi/uFvZolIXg0Q/maxresdefault_live.jpg?sqp=CJST-f8F&rs=AOn4CLD15uHk7ZK5a9QQ07yt6Kl2xaraHQ\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.01.13 10:15:42\",\n            \"updated_at\": \"2021.01.13 10:15:42\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/thumbnail/{thumbnail_id}"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/publish/{id}/thumbnail/{thumbnail_id}/remove",
    "title": "Publish-Patch Remove Thumbnail",
    "version": "1.0.0",
    "name": "Patch_Remove_Thumbnail",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Delete thumbnail</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "thumbnail_id",
            "description": "<p>the thumbnail id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>the thumbnail id is not equal to the thumbnail id of the publishing.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 405 Method Not Allowed\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 405,\n    \"message\": \"대표이미지는 삭제 할 수 없습니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/thumbnail/{thumbnail_id}/remove"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/publish/{id}/video/replace-archive",
    "title": "Publish-Patch Replace-archive",
    "version": "1.0.0",
    "name": "Patch_Replace-archive",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Select from video archive to change. Used to change the registered image by importing it from the archive when changing the registered image.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Patch-Body",
          "content": "{\n    \"archive_id\": 293\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 33,\n        \"sns_post_id\": null,\n        \"channel_id\": 2,\n        \"platform_id\": 1,\n        \"metadata_id\": 33,\n        \"thumbnail_id\": 9,\n        \"state\": 5,\n        \"open_state\": \"C\",\n        \"on_monitoring\": null,\n        \"is_live\": null,\n        \"views\": 29602,\n        \"likes\": 7169,\n        \"hates\": 4689,\n        \"shared\": 832,\n        \"comments\": 627,\n        \"playtimes\": 0,\n        \"duration\": null,\n        \"publisher_id\": 2,\n        \"published_at\": \"2020.08.08 14:28:04\",\n        \"last_sync_at\": null,\n        \"last_analytics_sync_at\": null,\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.08.14 17:28:04\",\n        \"updated_at\": \"2020.08.14 17:28:04\",\n        \"is_collected\": \"N\",\n        \"has_archive\": false,\n        \"channel\": {\n            \"id\": 2,\n            \"name\": \"나혼자산다\",\n            \"logo\": \"https://sns-dev-static.gemiso.com/images/channels/layer-609.png\",\n            \"logo_clip_yn\": \"N\",\n            \"use_logo_clip_yn\": \"Y\",\n            \"logo_clip_url\": null,\n            \"logo_thumbnail_yn\": \"N\",\n            \"use_logo_thumbnail_yn\": \"Y\",\n            \"logo_thumbnail_url\": null,\n            \"sns_download_speed\": \"2\",\n            \"active_yn\": \"Y\",\n            \"creater_id\": 1,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.08.27 18:16:53\",\n            \"updated_at\": \"2021.02.18 10:27:43\",\n            \"recommend_tags\": []\n        },\n      ...\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"The HTTP status code \\\"23000\\\" is not valid.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/video/replace-archive"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/publish/{id}/video/add-archive",
    "title": "Publish-Patch Video Archive",
    "version": "1.0.0",
    "name": "Patch_Video_Archive",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Select and add from the video archive</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"archive_id\": 33\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다. : 33.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/video/add-archive"
      }
    ]
  },
  {
    "type": "patch",
    "url": "/v1/publish/{id}/video/remove",
    "title": "Publish-Patch Video Remove",
    "version": "1.0.0",
    "name": "Patch_Video_Remove",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Delete video</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"archive_id\": 33\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Undefined index: archives\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/video/remove"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/{publish_id}/localization/",
    "title": "Localization-Post One",
    "version": "1.0.0",
    "name": "Post_Localization",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Create multilingual metadata.</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>the publishing id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"metadata_id\": 19430,\n    \"language_code\": \"ko\",\n    \"title\": \"초겨울 불광천-다국어\",\n    \"description\": \"그런 모습이다.  \\n끝없는 시간의 줄기를 흘러서 타고 내려가는, 물빛과 불빛이 만나 \\n그 난반사된 물결의 흐름에 흔들리며 뭉게진 그림자속에 어렴풋이 떠오르는 환영의 눈부심이 어떻게, 어디에, 무엇을 하고 있는지 물고본다.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"metadata_id\": 19430,\n        \"language_code\": \"ko\",\n        \"title\": \"초겨울 불광천-다국어\",\n        \"description\": \"그런 모습이다.  \\n끝없는 시간의 줄기를 흘러서 타고 내려가는, 물빛과 불빛이 만나 \\n그 난반사된 물결의 흐름에 흔들리며 뭉게진 그림자속에 어렴풋이 떠오르는 환영의 눈부심이 어떻게, 어디에, 무엇을 하고 있는지 물고본다.\",\n        \"creater_id\": 2,\n        \"updated_at\": \"2021.03.02 15:28:42\",\n        \"created_at\": \"2021.03.02 15:28:42\",\n        \"id\": 11443\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"The HTTP status code \\\"23000\\\" is not valid.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/localization/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/remove-multi",
    "title": "Publish-Post Remove-Multi",
    "version": "1.0.0",
    "name": "Post_Remove-Multi",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing - batch deletion</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>publish id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n    \"ids\":[18821],\n    \"del_archive\":true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 406 Not Acceptable\n{\"result\":false,\"locale\":\"ko\",\"code\":406,\"message\":\"게시에 사용되고 있는 아카이브는 삭제 할 수 없습니다.\"}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/remove-multi"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/{id}/video/add",
    "title": "Publish-Post Video Add",
    "version": "1.0.0",
    "name": "Post_Video_Add",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Add video by uploading, Add video in upload settings (facebook, instagram..)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>required|file|mimetypes:video/x-ms-asf,video/x-flv,video/mp4,application/x-mpegURL,video/MP2T,video/3gpp,video/quicktime,video/x-msvideo,video/x-ms-wmv,video/avi</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 33,\n        \"sns_post_id\": null,\n        \"channel_id\": 2,\n        \"platform_id\": 1,\n        \"metadata_id\": 33,\n        \"thumbnail_id\": 162402,\n        \"state\": 5,\n        \"open_state\": \"C\",\n        \"on_monitoring\": null,\n        \"is_live\": null,\n        \"views\": 29602,\n        \"likes\": 7169,\n        \"hates\": 4689,\n        \"shared\": 832,\n        \"comments\": 627,\n        \"playtimes\": 0,\n        \"duration\": null,\n        \"publisher_id\": 2,\n        \"published_at\": \"2020.08.08 14:28:04\",\n        \"last_sync_at\": null,\n        \"last_analytics_sync_at\": null,\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.08.14 17:28:04\",\n        \"updated_at\": \"2021.03.01 19:06:26\",\n        \"is_collected\": \"N\",\n        \"has_archive\": true,\n        ...\n        \"archives\": [\n            {\n                \"id\": 541,\n                \"title\": \"fox.mp4\",\n                \"description\": null,\n                \"duration\": 14,\n                \"thumbnail_id\": 162402,\n                \"uploaded_file_id\": 499,\n                \"status\": \"P\",\n                \"creater_id\": 2,\n                \"updater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.03.01 19:06:23\",\n                \"updated_at\": \"2021.03.01 19:06:26\",\n                \"pivot\": {\n                    \"publish_id\": 33,\n                    \"archive_id\": 541\n                },\n                \"thumbnail\": {\n                    \"id\": 162402,\n                    \"archive_id\": 541,\n                    \"sequence\": 1,\n                    \"url\": \"https://sns-dev-static.gemiso.com/images/thumbnails/1614593183_w265.jpg\",\n                    \"original_url\": \"https://sns-dev-static.gemiso.com/images/scenes/1614593183.jpg\",\n                    \"file_name\": \"1614593183.jpg\",\n                    \"creater_id\": 1,\n                    \"deleted_at\": null,\n                    \"created_at\": \"2021.03.01 19:06:26\",\n                    \"updated_at\": \"2021.03.01 19:06:26\"\n                },\n                \"thumbnails\": [\n                    {\n                        \"id\": 162402,\n                        \"archive_id\": 541,\n                        \"sequence\": 1,\n                        \"url\": \"https://sns-dev-static.gemiso.com/images/thumbnails/1614593183_w265.jpg\",\n                        \"original_url\": \"https://sns-dev-static.gemiso.com/images/scenes/1614593183.jpg\",\n                        \"file_name\": \"1614593183.jpg\",\n                        \"creater_id\": 1,\n                        \"deleted_at\": null,\n                        \"created_at\": \"2021.03.01 19:06:26\",\n                        \"updated_at\": \"2021.03.01 19:06:26\"\n                    }\n                ]\n            },\n            {\n                \"id\": 544,\n                \"title\": \"fox.mp4\",\n                \"description\": null,\n                \"duration\": null,\n                \"thumbnail_id\": 1,\n                \"uploaded_file_id\": 502,\n                \"status\": \"P\",\n                \"creater_id\": 2,\n                \"updater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.03.02 10:43:16\",\n                \"updated_at\": \"2021.03.02 10:43:16\",\n                \"pivot\": {\n                    \"publish_id\": 33,\n                    \"archive_id\": 544\n                },\n                \"thumbnail\": {\n                    \"id\": 1,\n                    \"archive_id\": null,\n                    \"sequence\": 0,\n                    \"url\": \"https://sns-dev-static.gemiso.com/images/thumbnails/no-image.png\",\n                    \"original_url\": \"https://sns-dev-static.gemiso.com/images/thumbnails/no-image.png\",\n                    \"file_name\": \"no-image.png\",\n                    \"creater_id\": 1,\n                    \"deleted_at\": null,\n                    \"created_at\": null,\n                    \"updated_at\": null\n                },\n                \"thumbnails\": []\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"result\": false,\n    \"code\": 422,\n    \"locale\": \"ko\",\n    \"message\": \"The given data was invalid.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/video/add"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/{id}/video/replace",
    "title": "Publish-Post Video Replace",
    "version": "1.0.0",
    "name": "Post_Video_Replace",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Upload video to change. Used when changing the registered image, when changing the registered image from direct upload</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>publish id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>required|file|mimetypes:video/x-ms-asf,video/x-flv,video/mp4,application/x-mpegURL,video/MP2T,video/3gpp,video/quicktime,video/x-msvideo,video/x-ms-wmv,video/avi</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 33,\n        \"sns_post_id\": null,\n        \"channel_id\": 2,\n        \"platform_id\": 1,\n        \"metadata_id\": 33,\n        \"thumbnail_id\": 9,\n        \"state\": 5,\n        \"open_state\": \"C\",\n        \"on_monitoring\": null,\n        \"is_live\": null,\n        \"views\": 29602,\n        \"likes\": 7169,\n        \"hates\": 4689,\n        \"shared\": 832,\n        \"comments\": 627,\n        \"playtimes\": 0,\n        \"duration\": null,\n        \"publisher_id\": 2,\n        \"published_at\": \"2020.08.08 14:28:04\",\n        \"last_sync_at\": null,\n        \"last_analytics_sync_at\": null,\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.08.14 17:28:04\",\n        \"updated_at\": \"2020.08.14 17:28:04\",\n        \"is_collected\": \"N\",\n        \"has_archive\": false,\n        ...\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Trying to get property 'archives' of non-object\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/video/replace"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/publish/playlist/{id}",
    "title": "Playlist-Put One",
    "version": "1.0.0",
    "name": "Put_A_Playlist",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put a playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the playlist id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"title\": \"테스트4 재생목록\",\n\t\"description\": \"테스트 재생목록 4\",\n    \"default_language_code\": \"ko\",\n\t\"thumbnail_color\": \"#FFFFFF\",\n\t\"thumbnail_id\": 56140,\n\t\"open_state\":\"O\",\n\t\"tags\": [\"GSAM\", \"제머나이\"],\n    \"localized\": [\n        {\n            \"language_code\": \"ko\",\n            \"title\": \"테스트4 재생목록 !!!\",\n            \"description\": \"테스트4 재생목록 !!!\"\n        },\n        {\n            \"language_code\": \"en\",\n            \"title\": \"Test Playlist 4\",\n            \"description\": \"Localization test 4.\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 258,\n        \"channel_id\": 6,\n        \"platform_id\": 1,\n        \"sns_playlist_id\": \"PLqEIYksVjSsXm7KXelV_eck4XW6EHjRvi\",\n        \"title\": \"테스트4 재생목록\",\n        \"description\": \"테스트 재생목록 4\",\n        \"default_language_code\": \"ko\",\n        \"thumbnail_color\": \"#FFFFFF\",\n        \"thumbnail_id\": 56140,\n        \"open_state\": \"O\",\n        \"creater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2021.03.02 17:34:46\",\n        \"updated_at\": \"2021.03.02 17:35:37\",\n        \"publishings\": [],\n        \"tags\": [\n            \"GSAM\",\n            \"제머나이\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Undefined variable: result\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist/{id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/publish/{id}/bookmark/add",
    "title": "Bookmark-Put Add",
    "version": "1.0.0",
    "name": "Put_Add_Bookmark",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Add bookmark</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"The HTTP status code \\\"23000\\\" is not valid.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/bookmark/add"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/publish/{publish_id}/localization/{localized_id}",
    "title": "Localization-Put Localization",
    "version": "1.0.0",
    "name": "Put_Localization",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put Localization</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "localized_id",
            "description": "<p>the multilingual metadata id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\": 5448,\n    \"metadata_id\": 19430,\n    \"language_code\": \"ko\",\n    \"title\": \"초겨울 불광천-다국어1\",\n    \"description\": \"그런 모습이다.  \\n끝없는 시간의 줄기를 흘러서 타고 내려가는, 물빛과 불빛이 만나 \\n그 난반사된 물결의 흐름에 흔들리며 뭉게진 그림자속에 어렴풋이 떠오르는 환영의 눈부심이 어떻게, 어디에, 무엇을 하고 있는지 물고본다.\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of archive file</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"code\": 404,\n    \"locale\": \"ko\",\n    \"message\": \"요청된 Url을 처리할 수 없습니다. Url을 확인하세요.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/localization/{localized_id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/publish/",
    "title": "Publish-Put Many",
    "version": "1.0.0",
    "name": "Put_Many",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing - batch editing</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Put-Body",
          "content": "[{\n  \"id\": 20405,\n  \"state\": 0,\n  \"open_state\": \"C\",\n  \"metadata\": {\n    \"id\": 20429,\n    \"title\": \"테스트\",\n    \"description\": \"테스트 영상으로 설명 교체\",\n    \"for_child\": \"N\",\n    \"for_adult\": \"N\",\n    \"sharable\": \"Y\"\n  }\n}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 20405,\n            \"sns_post_id\": null,\n            \"channel_id\": 6,\n            \"platform_id\": 2,\n            \"metadata_id\": 20429,\n            \"thumbnail_id\": 99708,\n            \"state\": 0,\n            \"open_state\": \"C\",\n            \"on_monitoring\": null,\n            \"is_live\": \"N\",\n            \"views\": 0,\n            \"likes\": 0,\n            \"hates\": 0,\n            \"shared\": 0,\n            \"comments\": 0,\n            \"playtimes\": 0,\n            \"duration\": null,\n            \"publisher_id\": 9,\n            \"published_at\": null,\n            \"last_sync_at\": null,\n            \"last_analytics_sync_at\": null,\n            \"creater_id\": 9,\n            \"updater_id\": 9,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.01.13 11:31:59\",\n            \"updated_at\": \"2021.01.13 14:12:52\",\n            \"is_collected\": \"N\",\n            \"has_archive\": true,\n            ...\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 402 Payment Required\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 402,\n    \"message\": \"아카이브 자산화가 되지 않은 게시물은 재배포 할 수 없습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/publish/{publish_id}/subtitle/",
    "title": "Subtitle-Put Subtitle",
    "version": "1.0.0",
    "name": "Put_Subtitle",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Subtitles-Save All</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "metadata_id",
            "description": "<p>the metadata id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subtitle",
            "description": "<p>the subtitle text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[\n    {\n        \"metadata_id\": 19430,\n        \"language_code\": \"ko\",\n        \"in\": \"00:00:03.000\",\n        \"out\": \"00:00:10.000\",\n        \"subtitle\": \"테스트 자막 1\"\n    },\n    {\n        \"metadata_id\": 19430,\n        \"language_code\": \"ko\",\n        \"in\": \"00:00:13.000\",\n        \"out\": \"00:00:20.000\",\n        \"subtitle\": \"테스트 자막 2\"\n    },\n    {\n        \"metadata_id\": 19430,\n        \"language_code\": \"ko\",\n        \"in\": \"00:00:23.000\",\n        \"out\": \"00:00:30.000\",\n        \"subtitle\": \"테스트 자막 3\\\\n두째줄\"\n    },\n    ...\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Argument 1 passed to...\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/subtitle/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/playlist/{id}/remove-publish",
    "title": "Playlist-Remove Publishing",
    "version": "1.0.0",
    "name": "Remove_Publishing",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Remove Publish From Playlist</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the playlist id, on param</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"publish\": [\n       19685\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\",\n    \"trace\": []\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/playlist/{id}/remove-publish"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/publish/update-multi",
    "title": "Publish-Update Many",
    "version": "1.0.0",
    "name": "Update_Many",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Update Many</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>publish id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Put-Body",
          "content": "{\n  \"ids\": [16, 17],\n  \"data\": {\n      \"tags\": {\n          \"tags\": [\"태그1\", \"태그2\", \"태그3\"], \n          \"method\": \"replace\"\n      },\n      \"title\": {\n          \"title\": \"변경될 제목\",\n          \"method\": \"pre\"\n      },\n      \"description\": {\n          \"description\": \"변경될 내용\",\n          \"method\": \"post\"\n      },\n      \"open_state\": \"O\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다. : 12222227\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/update-multi"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/upload",
    "title": "Publish-Upload One",
    "version": "1.0.0",
    "name": "Upload_One",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Upload One</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>(required)|file|mimetypes:video/x-ms-asf,video/x-flv,video/mp4,application/x-mpegURL,video/MP2T,video/3gpp,video/quicktime,video/x-msvideo,video/x-ms-wmv,video/avi</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "publishing_channels",
            "description": "<p>(required)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example",
          "content": "file=\"fox.mp4\" (File)\npublishing_channels=[{\"channel\": {\"id\":6},\"platform\":{\"id\":1}},{\"channel\": {\"id\":6},\"platform\":{\"id\":2}}]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 36710,\n            \"sns_post_id\": null,\n            \"channel_id\": 6,\n            \"platform_id\": 1,\n            \"metadata_id\": 36746,\n            \"thumbnail_id\": 1,\n            \"state\": 0,\n            \"open_state\": \"O\",\n            \"on_monitoring\": null,\n            \"is_live\": \"N\",\n            \"views\": 0,\n            \"likes\": 0,\n            \"hates\": 0,\n            \"shared\": 0,\n            \"comments\": 0,\n            \"playtimes\": 0,\n            \"duration\": null,\n            \"publisher_id\": 2,\n            \"published_at\": null,\n            \"last_sync_at\": null,\n            \"last_analytics_sync_at\": null,\n            \"creater_id\": 2,\n            \"updater_id\": 2,\n            \"deleted_at\": \"1980.01.01 00:00:00\",\n            \"created_at\": \"2021.03.01 17:02:16\",\n            \"updated_at\": \"2021.03.01 17:02:16\",\n            \"is_collected\": \"N\",\n            \"has_archive\": false,\n            ...\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"result\": false,\n    \"code\": 422,\n    \"locale\": \"ko\",\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n        \"file\": [\n            \"file은(는) 필수값 입니다.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/upload"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/{publish_id}/subtitle/upload",
    "title": "Subtitle-Upload Subtitle",
    "version": "1.0.0",
    "name": "Upload_Subtitle",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Upload Subtitle</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "publish_id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>Subtitle file: required|mimes:vtt,srt,sbv,stl,sub,ass,dfxp,ttml,qt.txt,txt|max:1048576</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"metadata_id\": 33,\n            \"language_code\": \"ko\",\n            \"in\": \"00:00:00.500\",\n            \"out\": \"00:00:02.000\",\n            \"subtitle\": \"The Web is always changing\"\n        },\n        {\n            \"metadata_id\": 33,\n            \"language_code\": \"ko\",\n            \"in\": \"00:00:02.500\",\n            \"out\": \"00:00:04.300\",\n            \"subtitle\": \"and the way we access it is changing\"\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 422 Unprocessable Entity\n{\n    \"result\": false,\n    \"code\": 422,\n    \"locale\": \"ko\",\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n        \"file\": [\n            \"The file must be a file of type: vtt, srt, sbv, stl, sub, ass, dfxp, ttml, qt.txt, txt.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{publish_id}/subtitle/upload"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/publish/{id}/thumbnail/upload",
    "title": "Publish-Upload Thumbnail",
    "version": "1.0.0",
    "name": "Upload_Thumbnail",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Uploading thumbnails</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the publishing id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>required|file|mimes:png,jpeg</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"id\": 33,\n        \"sns_post_id\": null,\n        \"channel_id\": 2,\n        \"platform_id\": 1,\n        \"metadata_id\": 33,\n        \"thumbnail_id\": 99707,\n        \"state\": 5,\n        \"open_state\": \"C\",\n        \"on_monitoring\": null,\n        \"is_live\": null,\n        \"views\": 29602,\n        \"likes\": 7169,\n        \"hates\": 4689,\n        \"shared\": 832,\n        \"comments\": 627,\n        \"playtimes\": 0,\n        \"duration\": null,\n        \"publisher_id\": 2,\n        \"published_at\": \"2020.08.08 14:28:04\",\n        \"last_sync_at\": null,\n        \"last_analytics_sync_at\": null,\n        \"creater_id\": 2,\n        \"updater_id\": 2,\n        \"deleted_at\": null,\n        \"created_at\": \"2020.08.14 17:28:04\",\n        \"updated_at\": \"2021.03.02 11:33:10\",\n        \"thumbnails\": [\n            {\n                \"id\": 162763,\n                \"archive_id\": null,\n                \"sequence\": 1,\n                \"url\": \"https://sns-dev-static.gemiso.com/images/thumbnails/1614653325_w265.jpg\",\n                \"original_url\": \"https://sns-dev-static.gemiso.com/images/scenes/1614653325.png\",\n                \"file_name\": \"1614653325.png\",\n                \"creater_id\": 2,\n                \"deleted_at\": null,\n                \"created_at\": \"2021.03.02 11:48:45\",\n                \"updated_at\": \"2021.03.02 11:48:45\",\n                \"pivot\": {\n                    \"publish_id\": 33,\n                    \"thumbnail_id\": 162763\n                }\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n    \"result\": false,\n    \"code\": 422,\n    \"locale\": \"ko\",\n    \"message\": \"The given data was invalid.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/thumbnail/upload"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/publish/{id}/download",
    "title": "Publish-Video Download",
    "version": "1.0.0",
    "name": "Video_Download",
    "group": "Publishing",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Publishing-Execution of archive assetization</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "data",
            "description": "<p>the publishing id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of dispatch job</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": 567201\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 409 Conflict\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 409,\n    \"message\": \"이미 자산화 되어 있는 아카이브 입니다.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/publish.js",
    "groupTitle": "Publishing",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/publish/{id}/download"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/roles/{id}",
    "title": "Delete One",
    "version": "1.0.0",
    "name": "Delete_One",
    "group": "Roles",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete permission group</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "parameter": [
          {
            "group": "parameter",
            "type": "Number",
            "optional": false,
            "field": "role",
            "description": "<p>id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/roles.js",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/roles/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/roles/all",
    "title": "Get All",
    "version": "1.0.0",
    "name": "Get_All",
    "group": "Roles",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>List of authority groups</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "data",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result",
            "description": "<p>true or false</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>something from server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"result\": true,\n       \"locale\": \"ko\",\n       \"message\": null,\n       \"data\": [\n           {\n               \"id\": 1, // 권한그룹 id\n               \"display_name\": \"테스트부서\", // 권한그룹 표시명\n           }, ...\n       ]\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/roles.js",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/roles/all"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/roles/",
    "title": "Get List",
    "version": "1.0.0",
    "name": "Get_List",
    "group": "Roles",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>List of authority groups</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "params",
            "description": "<p>the response parameters</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Get-Parameter:",
          "content": "params={\n\"page\": 1, // (optional) page (default 1)\n\"page_size\": 30, // (optional) page size (default 10)\n\"order\": \"created_at desc\", // (optional) sort [created_at: registration date (default), name: authority group name] [asc -ascending order, desc-descending order (default)]\n\"duration\": {// (optional) period search\n\"start_date\":\"\", // search start date\n\"end_date\":\"\", // search end date\n\"scope\":\"\" // Period field [created_at:registration date]\n},\n\"keyword\":{ // keyword search\n\"keyword\":\"\", // search keyword\n\"scope\":[] // (optional) search field (name: permission group name, default (all))\n},\n\"active_yn\": \"Y\" // (optional) // whether active\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "list",
            "description": "<p>authorization group list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"list\": [\n            {\n            \"id\": 1, // authorization group id\n            \"name\": \"admin\", // permission group name\n            \"display_name\": \"Administrator\", // permission group display name\n            \"description\": \"Permission given to the administrator\", // Description of the permission group\n            \"dashboard_type\": \"analytics\", // dashboard type\n            \"active_yn\": \"Y\", // active or not\n            \"created_at\": \"2020.11.25 14:33:10\", // Creation date\n            \"updated_at\": \"2020.11.25 14:33:10\", // date of revision\n            \"users_count\": 2 // number of users to use\n             }, ...\n        ],\n        \"paging\": {\n            \"current_page\": 1, // 현재페이지\n            \"first_page_url\": \"http://localhost/v1/roles?page_size=10&order=created_at%20desc&keyword%5Bkeyword%5D=&keyword%5Bscope%5D%5B0%5D=name&page=1\",\n            \"from\": 1,\n            \"last_page\": 1,\n            \"last_page_url\": \"http://localhost/v1/roles?page_size=10&order=created_at%20desc&keyword%5Bkeyword%5D=&keyword%5Bscope%5D%5B0%5D=name&page=1\",\n            \"next_page_url\": null,\n            \"path\": \"http://localhost/v1/roles\",\n            \"per_page\": 10,\n            \"prev_page_url\": null,\n            \"to\": 3,\n            \"total\": 3 // 총 건수\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/roles.js",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/roles/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/roles/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Roles",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Authority group inquiry</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>Authorization group id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"result\": true,\n       \"locale\": \"ko\",\n       \"message\": null,\n       \"data\": {\n           \"id\": 1, // 권한그룹 id\n           \"name\": \"admin\", // 권한그룹 명\n           \"display_name\": \"관리자\", // 권한그룹 표시명\n           \"description\": \"관리자에 주어지는 권한\", // 권한그룹 설명\n           \"dashboard_type\": \"analytics\", // 대쉬보드 유형(analytics:통계관리자용, worker:컨텐츠 작업자용)\n           \"active_yn\": \"Y\", // 활성여부\n           \"created_at\": \"2020.11.25 14:33:10\", // 생성일시\n           \"updated_at\": \"2020.11.25 14:33:10\", // 수정일시\n           \"role_permissions\": [ // 메뉴 권한 코드\n               \"read-publishing\", \n               ...\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input the role id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"Call to a member function setAppends() on null\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/roles.js",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/roles/{id}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/roles/remove-multi",
    "title": "Post Remove-multi",
    "version": "1.0.0",
    "name": "Post_Remove-multi",
    "group": "Roles",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>remove-multi Role</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>the role id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body",
          "content": "{\n\"ids\": [1, 2], // (required) permission id array\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/roles.js",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/roles/remove-multi"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/roles/",
    "title": "Create Roles",
    "version": "1.0.0",
    "name": "Post_Roles",
    "group": "Roles",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Create permission group</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(required) permission group name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dashboard_type",
            "description": "<p>(required) dashboard type (analytics | worker)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active_yn",
            "description": "<p>(required) active or not (Y | N)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "role_permissions",
            "description": "<p>(optional) menu permission code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"테스트권한그룹\",\n    \"dashboard_type\": \"worker\",\n    \"active_yn\": \"Y\",\n    \"role_permissions\": [\n        \"read-publishing\",\n        \"read-publishing-list\",\n        \"update-publishing-list\",\n        \"delete-publishing-list\",\n        \"read-publishing-schedule\",\n        \"update-publishing-schedule\",\n        \"delete-publishing-schedule\",\n        \"read-publishing-playlist\",\n        \"update-publishing-playlist\",\n        \"delete-publishing-playlist\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dashboard_type",
            "description": "<p>values: analytics | worker</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "active_yn",
            "description": "<p>values: Y | N</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"name\": \"테스트권한그룹\",\n        \"dashboard_type\": \"worker\",\n        \"active_yn\": \"Y\",\n        \"display_name\": \"테스트권한그룹\",\n        \"description\": \"테스트권한그룹\",\n        \"updated_at\": \"2021.02.25 17:24:55\",\n        \"created_at\": \"2021.02.25 17:24:55\",\n        \"id\": 34\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Server Error\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 0,\n    \"message\": \"The HTTP status code \\\"23000\\\" is not valid.\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/roles.js",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/roles/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/roles/{id}",
    "title": "Put One",
    "version": "1.0.0",
    "name": "Put_One",
    "group": "Roles",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Modify permission group</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(required) permission group name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dashboard_type",
            "description": "<p>(required) dashboard type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active_yn",
            "description": "<p>(required) active or not</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "role_permissions",
            "description": "<p>(optional) menu permission code</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"테스트권한그룹\",\n    \"dashboard_type\": \"worker\",\n    \"active_yn\": \"Y\",\n    \"role_permissions\": [\n        \"read-publishing\",\n        \"read-publishing-list\",\n        \"update-publishing-list\",\n        \"delete-publishing-list\",\n        \"read-publishing-schedule\",\n        \"update-publishing-schedule\",\n        \"delete-publishing-schedule\",\n        \"read-publishing-playlist\",\n        \"update-publishing-playlist\",\n        \"delete-publishing-playlist\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"result\": true,\n       \"locale\": \"ko\",\n       \"message\": null,\n       \"data\": { // 권한그룹 생성 정보\n           ... (권한그룹 정보)\n       }\n     }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/roles.js",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/roles/{id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/roles/update-multi",
    "title": "Put Update-multi",
    "version": "1.0.0",
    "name": "Put_Update-multi",
    "group": "Roles",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Batch modification of permission groups</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "ids",
            "description": "<p>the role id list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Put-Body",
          "content": "{\n\"ids\": [1, 2], // (required) permission id array\n\"data\": {\n\"active_yn\": \"Y\" // whether active\n}\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/roles.js",
    "groupTitle": "Roles",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/roles/update-multi"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/sns/sync-facebook-instagram",
    "title": "Post Sync-facebook-instagram",
    "version": "1.0.0",
    "name": "Post_Sync-facebook-instagram",
    "group": "SNS",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Post Sync-facebook-instagram</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i https://sns-dev-api.gemiso.com/v1/sns/sync-facebook-instagram",
        "type": "json"
      }
    ],
    "filename": "apidocs/v1/apidocs.js",
    "groupTitle": "SNS",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/sns/sync-facebook-instagram"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/tag-template/",
    "title": "Get Tag-template",
    "version": "1.0.0",
    "name": "Get_Tag-template",
    "group": "Tag-template",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Tag template list inquiry</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Tag template id</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>Tag template list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"id\": 1,\n            \"name\": \"템플릿 추가1\",\n            \"creater_id\": 2,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.11.19 15:10:26\",\n            \"updated_at\": \"2020.11.19 15:10:26\",\n            \"tags\": [\n                \"GSAM\"\n            ]\n        },\n        {\n            \"id\": 2,\n            \"name\": \"템플릿 추가2\",\n            \"creater_id\": 2,\n            \"deleted_at\": null,\n            \"created_at\": \"2020.11.19 15:10:49\",\n            \"updated_at\": \"2020.11.19 15:10:49\",\n            \"tags\": [\n                \"GSAM\",\n                \"제머나이\"\n            ]\n        },\n        {\n            \"id\": 5,\n            \"name\": \"태그 템플릿3\",\n            \"creater_id\": 2,\n            \"deleted_at\": null,\n            \"created_at\": \"2021.02.03 16:20:54\",\n            \"updated_at\": \"2021.02.03 16:20:54\",\n            \"tags\": [\n                \"MBC\",\n                \"태그3\"\n            ]\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/apidocs.js",
    "groupTitle": "Tag-template",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/tag-template/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/tag-template/",
    "title": "Put Tag-template",
    "version": "1.0.0",
    "name": "Put_Tag-template",
    "group": "Tag-template",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put Tag-template (create|update|remove)</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "action",
            "description": "<p>create|update|remove</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>the name of tag template</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "tags",
            "description": "<p>tags of a tag template</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[\n    {\n  \"action\":\"create\",\n  \"name\": \"태그 템플릿3\",\n  \"tags\": [\"MBC\", \"태그3\"]\n    },\n    {\n  \"action\":\"create\",\n  \"name\": \"태그 템플릿4\",\n  \"tags\": [\"MBC4\", \"태그4\"]\n    }\n]",
          "type": "Object[]"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of updated user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\"result\":true,\"locale\":\"ko\",\"message\":null,\"data\":true}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/apidocs.js",
    "groupTitle": "Tag-template",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/tag-template/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/upload/{store}",
    "title": "Upload Store",
    "version": "1.0.0",
    "name": "Upload_Store",
    "group": "Upload",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Image file upload processing</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "store",
            "description": "<p>channel|channel-banner|thumbnail|profile|movie|scene</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>The file must be a file of type: png, jpeg, gif, bmp.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>the ID of user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"file_path\": \"/images/channels/\",\n        \"file_name\": \"54efb66641072c3a52dd48657b86afaf.jpg\",\n        \"save_file_name\": \"1613979984.jpg\",\n        \"file_size\": 137641,\n        \"creater_id\": 2,\n        \"updated_at\": \"2021.02.22 16:46:24\",\n        \"created_at\": \"2021.02.22 16:46:24\",\n        \"id\": 484,\n        \"url\": \"https://sns-dev-static.gemiso.com/images/channels/1613979984.jpg\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"result\": false,\n    \"code\": 422,\n    \"locale\": \"ko\",\n    \"message\": \"The given data was invalid.\",\n    \"errors\": {\n        \"file\": [\n            \"The file must be a file of type: png, jpeg, gif, bmp.\"\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/apidocs.js",
    "groupTitle": "Upload",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/upload/{store}"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/users/",
    "title": "Create User",
    "version": "1.0.0",
    "name": "Create_User",
    "group": "Users",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>User creation</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>(required) Login ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(required) login password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(required) username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tel",
            "description": "<p>(optional) contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "locale",
            "description": "<p>(optional) UI language setting code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active_yn",
            "description": "<p>(required) whether active</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "channels",
            "description": "<p>(optional) List of selected channel IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "departments",
            "description": "<p>(optional) List of selected channel group IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>(required) list of authorization group ids</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Post-Body:",
          "content": "{\n    \"user_id\": \"20210115-022\",\n    \"password\": \"1111\",\n    \"name\": \"테스트사용자\",\n    \"tel\": \"02-1111-2222\",\n    \"locale\": \"ko\",\n    \"active_yn\": \"Y\",\n    \"channels\": [1,3,6],\n    \"departments\": [10],\n    \"roles\": [2]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": {\n        \"user_id\": \"20210115-022\",\n        \"name\": \"테스트사용자\",\n        \"tel\": \"02-1111-2222\",\n        \"locale\": \"ko\",\n        \"active_yn\": \"Y\",\n        \"updated_at\": \"2021.02.26 01:47:32\",\n        \"created_at\": \"2021.02.26 01:47:32\",\n        \"id\": 87,\n        \"is_admin\": false\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 409 Conflict\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 409,\n    \"message\": \"이미 존재하는 ID입니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/users/"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/v1/users/{id}",
    "title": "Delete One",
    "version": "1.0.0",
    "name": "Delete_One",
    "group": "Users",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Delete user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>user id, on param</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n  \"result\": true,\n  \"locale\": \"ko\",\n  \"message\": null,\n  \"data\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/users/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/users/{id}",
    "title": "Get One",
    "version": "1.0.0",
    "name": "Get_One",
    "group": "Users",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get a user</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of user, on params</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \"result\": true,\n   \"locale\": \"ko\",\n   \"message\": null,\n   \"data\": {\n            \"id\": 2, // user id\n            \"user_id\": \"admin\", // login ID\n            \"name\": \"administrator\", // username\n            \"tel\": \"11111\", // phone number\n            \"locale\": \"ko\", // UI setting language code\n            \"profile_id\": null, // profile image id\n            \"active_yn\": \"Y\", // active or not\n            \"last_logined_at\": \"2021.01.15 14:38:20\", // Last login date\n            \"deleted_at\": null, // Whether to delete (date)\n            \"created_at\": \"2020.08.14 08:27:58\", // Creation date\n            \"updated_at\": \"2021.01.15 05:38:20\", // date and time of modification\n            \"profile_url\": \"https://sns-dev-static.gemiso.com/images/profiles/1609824865.PNG\", // Profile image URL\n            \"is_admin\": true, // whether or not you belong to the administrator authority group\n            \"channels\": [// List of channels to which permission is assigned (checked in the affiliated channel group)\n                {\n                    ... (channel information)\n                }, ...\n            ],\n            \"departments\": [// affiliated channel group\n                {\n                    ... (channel group information)\n                }, ...\n            ],\n            \"roles\": [// permission group\n                {\n                  ... (permission group information)\n                }\n            ]\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"사용자가 존재하지 않습니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/users/{id}"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/users/shortcuts/",
    "title": "Get Shortcuts",
    "version": "1.0.0",
    "name": "Get_Shortcuts",
    "group": "Users",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Get Shortcuts</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": [\n        {\n            \"code\": \"publishing-list\",\n            \"parent_code\": \"publishing\",\n            \"sequence\": 1,\n            \"url\": \"/publish\",\n            \"description\": \"퍼브리싱 현황\",\n            \"use_shortcut\": \"Y\",\n            \"active_yn\": \"Y\",\n            \"pivot\": {\n                \"user_id\": 2,\n                \"menu_code\": \"publishing-list\"\n            }\n        },\n        {\n            \"code\": \"publishing-playlist\",\n            \"parent_code\": \"publishing\",\n            \"sequence\": 3,\n            \"url\": \"/publish/playlist\",\n            \"description\": \"퍼브리싱 재생목록\",\n            \"use_shortcut\": \"Y\",\n            \"active_yn\": \"Y\",\n            \"pivot\": {\n                \"user_id\": 2,\n                \"menu_code\": \"publishing-playlist\"\n            }\n        },\n        {\n            \"code\": \"publishing-schedule\",\n            \"parent_code\": \"publishing\",\n            \"sequence\": 2,\n            \"url\": \"/publish/schedule\",\n            \"description\": \"퍼브리싱 일정\",\n            \"use_shortcut\": \"Y\",\n            \"active_yn\": \"Y\",\n            \"pivot\": {\n                \"user_id\": 2,\n                \"menu_code\": \"publishing-schedule\"\n            }\n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/users/shortcuts/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/v1/users/",
    "title": "Get Users",
    "version": "1.0.0",
    "name": "Get_Users",
    "group": "Users",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>User list inquiry</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>(optional) page (default 1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page_size",
            "description": "<p>(optional) page size (default 10)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "order",
            "description": "<p>(optional) sort [created_at: registration date (default), name: authority group name] [asc -ascending order, desc-descending order (default)]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "departments",
            "description": "<p>(optional) channel group</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "duration",
            "description": "<p>(optional) channel group</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "start_date",
            "description": "<p>search start date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "end_date",
            "description": "<p>search end date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>Period field [created_at: registration date, last_logined_at: last login date]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "keyword",
            "description": "<p>search keyword</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "active_yn",
            "description": "<p>(optional) whether active</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Get-Parameter:",
          "content": "params={\n \"page\": 1, // (optional) page (default 1)\n \"page_size\": 30, // (optional) page size (default 10)\n \"order\": \"created_at desc\", // \n \"departments\": [1, 3, ...], // \n \"duration\": {// (optional) period search\n    \"start_date\":\"\", // search start date\n    \"end_date\":\"\", // search end date\n    \"scope\":\"\" // Period field [created_at: registration date, last_logined_at: last login date]\n },\n \"keyword\":{ // keyword search\n    \"keyword\":\"\", // search keyword\n    \"scope\":[] // (optional) search field (name: username, user_id: login ID, default (all))\n },\n \"active_yn\": \"Y\" // (optional) // whether active\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"result\": true,\n   \"locale\": \"ko\",\n   \"message\": null,\n   \"data\": {\n       \"list\": [\n           {\n               \"id\": 45, // user id\n               \"user_id\": \"alsdud116\", // login ID\n               \"name\": \"test1\", // username\n               \"tel\": \"test1\", // phone number\n               \"locale\": null, // UI language code setting\n               \"profile_id\": null, // Profile image Url\n               \"active_yn\": \"N\", // active or not\n               \"last_logined_at\": null, // last login date and time\n               \"deleted_at\": null, // Whether to delete (date)\n               \"created_at\": \"2021.01.06 06:35:13\", // registration date\n               \"updated_at\": \"2021.01.07 09:04:25\", // last modified date\n               \"is_admin\": false, // belong to the administrator authority group\n               \"departments\": [// Channel group (department) information\n                   {\n                       \"name\": \"test department\",\n                       ... (channel group information)\n                   }, ...\n               ],\n               \"roles\": [// permission group\n               {\n                   \"display_name\": \"general user\",\n                   ... (permission group information)\n              }\n              ]\n           }, ...\n       ],\n       \"paging\": {\n           \"current_page\": 1, // 현재페이지\n           \"first_page_url\": \"http://localhost/v1/users?page_size=10&order=created_at%20desc&keyword%5Bkeyword%5D=&keyword%5Bscope%5D%5B0%5D=name&departments%5B0%5D=10&page=1\",\n           \"from\": 1,\n           \"last_page\": 1,\n           \"last_page_url\": \"http://localhost/v1/users?page_size=10&order=created_at%20desc&keyword%5Bkeyword%5D=&keyword%5Bscope%5D%5B0%5D=name&departments%5B0%5D=10&page=1\",\n           \"next_page_url\": null,\n           \"path\": \"http://localhost/v1/users\",\n           \"per_page\": 10,\n           \"prev_page_url\": null,\n           \"to\": 4,\n           \"total\": 4 // 총 건수\n       }\n   }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>access token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/users/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/users/remove-multi",
    "title": "Post Remove-multi",
    "version": "1.0.0",
    "name": "Post_Remove-multi",
    "group": "Users",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Batch delete users</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Post-Body:",
          "content": "{\n  \"ids\": [1, 2], // (Required) user id array\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/users/remove-multi"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/users/{id}",
    "title": "Put One",
    "version": "1.0.0",
    "name": "Put_One",
    "group": "Users",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>User modification</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>user id, on param</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": "<p>(required) Login ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>(required) login password</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>(required) username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tel",
            "description": "<p>(optional) contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "locale",
            "description": "<p>(optional) UI language setting code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active_yn",
            "description": "<p>(required) whether active</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "channels",
            "description": "<p>(optional) List of selected channel IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": true,
            "field": "departments",
            "description": "<p>(optional) List of selected channel group IDs</p>"
          },
          {
            "group": "Parameter",
            "type": "Number[]",
            "optional": false,
            "field": "roles",
            "description": "<p>(required) list of authorization group ids</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Put-Body",
          "content": "{\n    \"user_id\": \"20210115-021121\",\n    \"password\": \"1111\",\n    \"name\": \"테스트사용자\",\n    \"tel\": \"02-1111-33331\",\n    \"locale\": \"ko\",\n    \"active_yn\": \"Y\",\n    \"channels\": [1,3,6],\n    \"departments\": [10],\n    \"roles\": [1]\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"user_id\": \"20210115-0221\",\n    \"password\": \"1111\",\n    \"name\": \"테스트사용자\",\n    \"tel\": \"02-1111-3333\",\n    \"locale\": \"ko\",\n    \"active_yn\": \"Y\",\n    \"channels\": [1,3,6],\n    \"departments\": [10],\n    \"roles\": [1]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/users/{id}"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/users/shortcuts/",
    "title": "Put Shortcuts",
    "version": "1.0.0",
    "name": "Put_Shortcuts",
    "group": "Users",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>Put Shortcut code list</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "shortcuts",
            "description": "<p>code list</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[\n    \"publishing-list\",\n    \"publishing-schedule\",\n    \"publishing-playlist\"\n]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 401 Unauthorized\n{\n    \"result\": false,\n    \"message\": \"Unauthorized request.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/users/shortcuts/"
      }
    ]
  },
  {
    "type": "put",
    "url": "/v1/users/update-multi",
    "title": "Put Update-multi",
    "version": "1.0.0",
    "name": "Put_Update-multi",
    "group": "Users",
    "permission": [
      {
        "name": "Auth"
      }
    ],
    "description": "<p>User batch modification</p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "defaultValue": "Bearer access_token",
            "description": "<p>Bearer access_token json web token to access to data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n \"Authorization\": \"Bearer {{access_token}}\",\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "examples": [
        {
          "title": "Put-Body:",
          "content": "{\n  \"ids\": [1, 2], // (Required) user id array\n  \"data\": {\n      \"active_yn\": \"Y\" // Activated or not\n  }\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n{\n    \"result\": true,\n    \"locale\": \"ko\",\n    \"message\": null,\n    \"data\": true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "invalid",
            "description": "<p>input data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n    \"result\": false,\n    \"locale\": \"ko\",\n    \"code\": 404,\n    \"message\": \"데이터를 찾을 수 없습니다. 존재하는 데이터인지 확인 해 주시기 바랍니다.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "apidocs/v1/users.js",
    "groupTitle": "Users",
    "sampleRequest": [
      {
        "url": "https://sns-dev-api.gemiso.com/v1/users/update-multi"
      }
    ]
  }
] });

define({ "api": [
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "get",
    "url": "sessions",
    "title": "get-all-sessions",
    "description": "<p>récupère l'ensemble des sessions disponibles</p>",
    "name": "get_all_sessions",
    "group": "Session",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>JWT token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example:",
          "content": "{\n\"Authorization\":\"JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTZmMDlkYzM1YmZkZTBm\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>succès</p>"
          },
          {
            "group": "Success 200",
            "type": "array[Session]",
            "optional": false,
            "field": "sessions",
            "description": "<p>array contenant les sessions</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"sessions\": [session1, session2, ...]\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "401": [
          {
            "group": "401",
            "optional": false,
            "field": "There",
            "description": "<p>are no sessions</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "Session",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/apisessions"
      }
    ]
  },
  {
    "type": "get",
    "url": "/",
    "title": "Hello World",
    "name": "GetHome",
    "group": "Static_Pages",
    "description": "<p>Cette URL affiche un simple message Hello World</p> <p>Il est possible d'écrire des messages sur plusieurs lignes dans la description.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHello, World!",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/index.js",
    "groupTitle": "Static_Pages",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/:name",
    "title": "Say hello to a specific name",
    "name": "GetName",
    "group": "Static_Pages",
    "description": "<p>Cette URL affiche un message Hello personnalisé</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nom de la personne à saluer</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "name: Nymous",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHello, Nymous!",
          "type": "html"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/index.js",
    "groupTitle": "Static_Pages",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/:name"
      }
    ]
  }
] });

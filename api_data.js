define({ "api": [
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "post",
    "url": "/sessions",
    "title": "create-session",
    "description": "<p>Création d'une session</p>",
    "name": "create_session",
    "group": "Session",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "succes",
            "description": "<p>succès</p>"
          },
          {
            "group": "Success 200",
            "type": "sessionSchema",
            "optional": false,
            "field": "result",
            "description": "<p>l'objet session créé</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"result\": {\n        \"creator\": {\n            \"username\": \"lhulot\",\n            \"role\": \"etudiant\",\n            \"nom\": \"Hulot\",\n            \"prenom\": \"Louis\",\n            \"email\": \"louishulot@hotmail.fr\",\n            \"_id\": \"5aba4faee534b8001826eaf1\"\n        },\n        \"users\": [\n            {\n                \"user\": {\n                    \"username\": \"lhulot\",\n                    \"role\": \"etudiant\",\n                    \"nom\": \"Hulot\",\n                    \"prenom\": \"Louis\",\n                    \"email\": \"louishulot@hotmail.fr\",\n                    \"_id\": \"5aba4faee534b8001826eaf2\"\n                },\n                \"html\": \"\",\n                \"css\": \"\",\n                \"js\": \"\",\n                \"_id\": \"5aba4faee534b8001826eaf3\"\n            }\n        ],\n        \"name\": \"\",\n        \"hash\": \"MGTdcB\",\n        \"created\": \"2018-03-27T12:46:59.307Z\",\n        \"_id\": \"5aba4faee534b8001826eaf4\",\n        \"__v\": 0\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "Session",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/sessions"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "delete",
    "url": "/session/:hash",
    "title": "delete-session",
    "description": "<p>Supression session</p>",
    "name": "delete_session",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>hash code de la session</p>"
          }
        ]
      }
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
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message de succès</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"result\": 'session supprimée'\n}",
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
            "field": "session",
            "description": "<p>session does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "Session",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/session/:hash"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "delete",
    "url": "/session/:hash/user",
    "title": "delete-user-in-session",
    "description": "<p>Supression utilisateur</p>",
    "name": "delete_user_in_session",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>hash code de la session</p>"
          }
        ]
      }
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
            "type": "userSchemea",
            "optional": false,
            "field": "user",
            "description": "<p>utilisateur supprimé</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"result\": [userDeleted]\n}",
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
            "field": "session",
            "description": "<p>session does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "Session",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/session/:hash/user"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "get",
    "url": "/sessions",
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
          "content": "{\n    \"success\": true,\n    \"sessions\": [sessionSchema, sessionSchema, ...]\n  }",
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
            "field": "session",
            "description": "<p>there are no sessions</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "Session",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/sessions"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "get",
    "url": "/sessions/:hash",
    "title": "get-one-session",
    "description": "<p>récupère la session au hash code envoyé</p>",
    "name": "get_one_session",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>hash code de la session</p>"
          }
        ]
      }
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
            "type": "sessionSchema",
            "optional": false,
            "field": "session",
            "description": "<p>la session demandé</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"session\": {\n        \"created\": \"2018-03-22T08:18:23.095Z\",\n        \"users\": [\n            {\n                \"html\": \"\",\n                \"css\": \"\",\n                \"js\": \"\",\n                \"user\": {\n                    \"_id\": \"5ab367455813230018e9e8c0\",\n                    \"username\": \"amartin\",\n                    \"role\": \"etudiant\",\n                    \"nom\": \"nom\",\n                    \"prenom\": \"prenom\",\n                    \"email\": \"nom.prenom.@gmail.com\"\n                },\n                \"_id\": \"5ab367455813230018e9e8c1\"\n            }\n        ],\n        \"_id\": \"5ab367455813230018e9e8c2\",\n        \"creator\": {\n            \"_id\": \"5ab367455813230018e9e8bf\",\n            \"username\": \"nom.prenom\",\n            \"role\": \"etudiant\",\n            \"nom\": \"nom\",\n            \"prenom\": \"prenom\",\n            \"email\": \"nom.prenom@gmail.com\"\n        },\n        \"name\": \"CLOCK sa mère\",\n        \"hash\": \"zqEtPX\",\n        \"__v\": 0\n    }\n}",
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
            "field": "session",
            "description": "<p>session does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "Session",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/sessions/:hash"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "put",
    "url": "/session/user/:hash",
    "title": "insert-new-user",
    "description": "<p>insertion d'un nouvel utilisteur pour la session</p>",
    "name": "insert_new_user",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>hash code de la session</p>"
          }
        ]
      }
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
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>objet contenant : hash, creator, created, name, users, code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.hash",
            "description": "<p>hash code de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "userSchema",
            "optional": false,
            "field": "result.creator",
            "description": "<p>créateur de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "result.created",
            "description": "<p>date de création de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>nom de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "array[userSchme]",
            "optional": false,
            "field": "result.users",
            "description": "<p>array des users de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "array[String]",
            "optional": false,
            "field": "result.code",
            "description": "<p>array contenant les codes de l'utilisateur courant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"result\": {\n        \"hash\": \"zqEkPX\",\n        \"creator\": {userSchema},\n        \"created\": \"2018-03-22T08:18:23.095Z\",\n        \"name\": \"CLOCK sa mère\",\n        \"users\": [userSchema, userSchema ...],\n        \"code\": {\n            \"html\": \"<html>\\n  <p>\\n      Eloïse arrêtes tes bêtises\\n  </p>\\n</html>\\n\\n\",\n            \"css\": \"p {\\n  color: green;\\n}\",\n            \"js\": \"\"\n        }\n    }\n}",
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
            "field": "session",
            "description": "<p>session does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "Session",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/session/user/:hash"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "put",
    "url": "/session/code/:hash",
    "title": "update-code-in-session",
    "description": "<p>mise à jour du code de l'utilisateur</p>",
    "name": "update_code_in_session",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>hash code de la session</p>"
          }
        ]
      }
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
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>objet contenant : hash, creator, created, name, users, code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.hash",
            "description": "<p>hash code de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "userSchema",
            "optional": false,
            "field": "result.creator",
            "description": "<p>créateur de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "result.created",
            "description": "<p>date de création de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>nom de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "array[userSchme]",
            "optional": false,
            "field": "result.users",
            "description": "<p>array des users de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "array[String]",
            "optional": false,
            "field": "result.code",
            "description": "<p>array contenant les codes de l'utilisateur courant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"result\": {\n        \"hash\": \"zqEkPX\",\n        \"creator\": {userSchema},\n        \"created\": \"2018-03-22T08:18:23.095Z\",\n        \"name\": \"CLOCK sa mère\",\n        \"users\": [userSchema, userSchema ...],\n        \"code\": {\n            \"html\": \"<html>\\n  <p>\\n      Eloïse arrêtes tes bêtises\\n  </p>\\n</html>\\n\\n\",\n            \"css\": \"p {\\n  color: green;\\n}\",\n            \"js\": \"\"\n        }\n    }\n}",
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
            "field": "session",
            "description": "<p>session does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "Session",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/session/code/:hash"
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
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "get",
    "url": "/sessions/code/:hash",
    "title": "find-use-session-info",
    "description": "<p>récupère les informations des users de la session</p>",
    "name": "find_use_session_info",
    "group": "User",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>hash code de la session</p>"
          }
        ]
      }
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
            "type": "result",
            "optional": false,
            "field": "result",
            "description": "<p>object contenant hash, creator, created, name, users, code</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.hash",
            "description": "<p>hash code de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "userSchema",
            "optional": false,
            "field": "result.creator",
            "description": "<p>objet user du créateur de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "date",
            "optional": false,
            "field": "cresult.reated",
            "description": "<p>date de création de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.name",
            "description": "<p>nom de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "array[usersSchema]",
            "optional": false,
            "field": "result.usesrs",
            "description": "<p>array des userSchema de la session</p>"
          },
          {
            "group": "Success 200",
            "type": "code",
            "optional": false,
            "field": "result.code",
            "description": "<p>tableau contenant le cade</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"result\": {\n        \"hash\": \"zqEkPX\",\n        \"creator\": userSchema,\n        \"created\": \"2018-03-22T08:18:23.095Z\",\n        \"name\": \"CLOCK sa mère\",\n        \"users\": [userSchema, userSchema, ...],\n        \"code\": {\n            \"hmtl\": \"<html>\\n  <p>\\n      Eloïse arrêtes tes bêtises\\n  </p>\\n</html>\\n\\n\",\n            \"css\": \"p {\\n  color: green;\\n}\",\n            \"js\": \"\"\n        }\n    }\n}",
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
            "field": "session",
            "description": "<p>session does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/sessions/code/:hash"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "get",
    "url": "/sessions/users/:hash",
    "title": "get-all-users-of-session",
    "description": "<p>récupère l'ensemble des users d'une sessuib</p>",
    "name": "get_all_users_of_session",
    "group": "User",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>hash code de la session</p>"
          }
        ]
      }
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
            "type": "array[userSchema]",
            "optional": false,
            "field": "arrayUsers",
            "description": "<p>array des users de la sesison</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"result\": [userSchema, userSchema ...]\n}",
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
            "field": "session",
            "description": "<p>session does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/sessions/users/:hash"
      }
    ]
  },
  {
    "version": "1.0.0-SNAPSHOT",
    "type": "get",
    "url": "/sessions/code/:hash/:username",
    "title": "get-user-code",
    "description": "<p>récupère les informations d'un utilisateur d'une session</p>",
    "name": "get_user_code",
    "group": "User",
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "hash",
            "description": "<p>hash code de la session</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user name de l'utilisateur dont on veut récuperer les informations</p>"
          }
        ]
      }
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
            "type": "object",
            "optional": false,
            "field": "result",
            "description": "<p>objet contenant, result et user</p>"
          },
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "result.user",
            "description": "<p>object contenant html, css, js, user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.user.html",
            "description": "<p>code html de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.user.js",
            "description": "<p>code js de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "result.user.css",
            "description": "<p>code css de l'utilisateur</p>"
          },
          {
            "group": "Success 200",
            "type": "userSchema",
            "optional": false,
            "field": "result.user.user",
            "description": "<p>userSchema de l'utilisateur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"result\": {\n        \"success\": true,\n        \"user\": {\n            \"html\": \"\",\n            \"css\": \"p {\\n  color: red;\\n}\",\n            \"js\": \"\",\n            \"user\": {\n                \"_id\": \"5ab367455813230018e9e8c0\",\n                \"username\": \"amartin\",\n                \"role\": \"etudiant\",\n                \"nom\": \"Martin\",\n                \"prenom\": \"Alexandre\",\n                \"email\": \"alexandre.martin.ecl@gmail.com\"\n            },\n            \"_id\": \"5ab367455813230018e9e8c1\"\n        }\n    }\n}",
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
            "field": "session",
            "description": "<p>session does not exist</p>"
          }
        ]
      }
    },
    "filename": "src/api/sessions/index.js",
    "groupTitle": "User",
    "sampleRequest": [
      {
        "url": "http://localhost:4000/api/sessions/code/:hash/:username"
      }
    ]
  }
] });
db = db.getSiblingDB('response_template_db');

db.createCollection('response_templates', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'template_id',
        'template_name',
        'template_content',
        'tags',
        'created_at',
        'updated_at',
      ],
      properties: {
        template_id: {
          bsonType: 'string',
          description: '応答テンプレートのユニークなID（文字列型）',
        },
        template_name: {
          bsonType: 'string',
          description: '応答テンプレートの名前（文字列型）',
        },
        template_content: {
          bsonType: 'string',
          description: '応答テンプレートの内容（文字列型）',
        },
        tags: {
          bsonType: 'array',
          description: '応答テンプレートに関連するタグ（配列型）',
          items: {
            bsonType: 'string',
          },
        },
        created_at: {
          bsonType: 'date',
          description: '応答テンプレートの作成日時（日付型）',
        },
        updated_at: {
          bsonType: 'date',
          description: '応答テンプレートの更新日時（日付型）',
        },
      },
    },
  },
});

db.response_templates.createIndex({ template_name: 1 });
db.response_templates.createIndex({ tags: 1 });

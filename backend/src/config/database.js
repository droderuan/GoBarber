require('dotenv/config');

module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    // faz com q crie uma coluna created_at updated_at para cada tabela
    timestamps: true,

    // diz que o padrao de nome de tabela é user_group e nao userGroup
    underscored: true,
    // msm coisa, mas para nome de coluna e relacionamentos
    underscoredAll: true,
  },
};

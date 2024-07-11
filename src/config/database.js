module.exports = {
  dialect: 'postgres',
  url: 'postgresql://postgres:tNzCvoBguXvpqXFjiSFcleRCuyJFZQiQ@viaduct.proxy.rlwy.net:25968/railway',

  define: {
    timespamps: true, // Deixa automaticamente a data de criação e última atualização no meu BD
    underscored: true, // sistema padronizado de camel case
    underscoredAll: true,
  },
}

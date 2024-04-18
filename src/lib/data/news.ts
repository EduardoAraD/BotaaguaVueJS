import { News } from '../../model/News';

export const news: News[] = [
  {
    id: '1',
    publicationDate: '2024-04-17 20:00:00',
    image: 'https://github.com/EduardoAraD/assets/blob/main/botaagua/news/1.jpeg?raw=true',
    title: 'Botaagua empata em casa e garante vaga nas Semi-finais.',
    titlePageLink: 'Botaagua vs Atalanta',
    subtitle: 'Botaagua empata por 1 a 1 com o Atalanta e vai emfrentar o Olympique de Marseille nas semi-finais da UEFA Europa League.',
    descriptions: [
      {
        type: 'heading',
        value: 'Tudo igual no primeiro tempo.'
      },
      {
        type: 'paragraph',
        value: `
          Jogando em casa, o Botaagua partiu pra cima do Atalanta que se segurou bem nos minutos iniciais.
          Com o passar do tempo a Atalanta começou a gostar do jogo em teve uma chance clara aos 11 minutos.
          Porém foi as 33 que a Atalanta abriu o placar com AOUER e com esse resultados a partida ia para a prorrogação.
          Entretando, no ataque seguinte, aos 39, o Botaagua empatou com ANDRADE num belo chute na saída do goleiro.
          Terminando assim 1 a 1 no primeiro tempo.
        `
      },
      {
        type: 'heading',
        value: 'Segundo tempo eletríco',
      },
      {
        type: 'paragraph',
        value: `O segundo tempo quente para o Atalanta que teve uma oportunidade clara aos 51 minutos, porém com um bela defesa de Berfrand.
        O Atalanta pressionou nos minutos iniciais e o Botaagua parecia nas cordas. O Atalanta pressionava e o Botaagua conseguia contra-ataques
        e com uma chance boa com VEGA as 68.
        O jogo se caminhava para o final e o Botaagua estava com o jogo sobe controle, até que aos 90 minutos o Atalante teve uma oportunidade de
        levar o jogo para a prorrogação, porém ELIA não dominou e o juiz apitou. Botaagua nas semi-finais.
        `
      },
      {
        type: 'heading',
        value: 'Botaagua nas semi-finais',
      },
      {
        type: 'paragraph',
        value: `
          Com o placar agregado de 4 a 3 para o Botaagua FC, o time vai para as semi-finais da Europa League enfrentar o Olympique de Marseille que passou
          pelo RB Salzburg nos penaltis por 5 a 4 depois de um empate no placar agregado de 3 a 3.
          O Primeiro jogo vai ser na Arena Pabussú e o jogo de volta em Marseille. Os jogos estão marcados para o dia 18 e 19 de abril.
        `
      }
    ],
  },
];
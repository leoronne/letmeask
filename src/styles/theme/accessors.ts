import { Theme } from './theme';

interface StyledProps {
  [prop: string]: any;
  theme: Theme;
}

/**
 * Função reponsável por criar accessors (atalhos) para propriedades do tema.
 * Sempre que queremos acessar uma variável dentro do tema no styled-components
 * precisamos passar uma função na interpolação do css para podermos
 * ter acesso às props que o styled-components forneçe. Por exemplo:
 *
 * styled.div`
 *    background-color: ${props => props.theme.colors.primary.base};
 *    color: ${props => props.theme.colors.primary.textColor};
 * `
 *
 * Esse código se torna muito verboso uma vez que precisamos dessas variáveis
 * para estilizar os componentes da aplicação
 *
 * Criando acessors conseguimos acessar essas props de uma forma mais
 * limpa. Por exemplo:
 * import { colors } from 'caminho-para-pasta-theme';
 * styled.div`
 *    background-color: ${colors('primary.base')};
 *    color: ${colors('primary.textColor')};
 * `
 * */
export function createAccessor<Type>(themeProp: string) {
  return (query: string) => (props: StyledProps): Type => {
    const root = props.theme[themeProp];
    const path = query.split('.');

    if (!root) {
      throw new Error(`Propriedade ${themeProp} não existe no tema.`);
    }

    if (path.length) {
      return path.reduce((prev, current) => {
        if (prev[current]) {
          return prev[current];
        }

        throw new Error(`Propriedade ${current} não encontrada.`);
      }, root);
    }

    throw new Error(`Path "${query}" inválido.`);
  };
}

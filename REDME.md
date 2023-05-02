# Comandos Iniciais
    * npm create vite@latest ( 2021 )
    * npx create-react-app nomeProjeto ( 2020 )
    * npx create-react-app nomeProjeto --template typescript ( 2020 )
# Dependencias
    * npm install --save react-icons
    * npm install --save styled-components
    * npm install --save @types/styled-components
# Pricipais comandos
    * npm run dev
# Home styled components
    import styled from "styled-components";

    export const Container = styled.div`
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: violet;

    `;
# Login styled components
        import styled from "styled-components";

        export const Container = styled.div`
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            
            background-color: violet;

    `;
# props
    * background: ${ props => props.theme.colors. }
import styled from "styled-components"

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: #333333;
    max-width: 98vw;
    margin-top: 1rem;
    margin-bottom: 1rem;


    

    @media(min-width: 568px){
        flex-direction: row ;
    max-width: 100vw;
    max-height: 95vh;
    margin-bottom: 0rem;

    }

`

export const Marg = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100vw;

    align-self: center;
    margin-bottom: 1rem;




      @media(min-width: 568px){
    max-width: 70vw;
    min-width: 70vw;
    max-height: 100vh;
    align-self: center;
    padding: 1rem;
    margin-bottom: 0rem;
     box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
        -webkit-box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
        -moz-box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
    }
`


export const Left = styled.div`
    min-height: 95vh;
    box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
        -webkit-box-shadow: 1px 1px 5px 5px rgba(0,0,0,0.12);
        -moz-box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);


    
    @media(min-width: 568px){
    max-width: 25vw;
    min-width: 25vw;
    min-height: 85vh;
    }

`
export const Right = styled.div`
        display: flex;
        flex-direction: column;
        min-height: 70vh;
        min-width: 90vw;
        padding: .5rem;
        justify-content: space-evenly;
        font-size: 1.3rem;
        align-self: center;


        box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
        -webkit-box-shadow: 1px 1px 5px 5px rgba(0,0,0,0.12);
        -moz-box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);

    
        @media(min-width: 568px){
            flex-direction: row;
            font-size: 1.3rem;
            max-height: 60vh;
        min-width: 68vw;
    
        }
`
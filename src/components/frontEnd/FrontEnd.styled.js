import styled from "styled-components"

export const FrontEndContainer = styled.div`
     @media(min-width: 568px){
    width: 7vw;
    }
`

export const Down = styled.div`
  /* div{ */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 2%;

    @media(min-width: 568px){
    flex-direction: column;
    width: 7vw;
    padding: .5rem;
    }

    box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);
        -webkit-box-shadow: 1px 1px 5px 5px rgba(0,0,0,0.12);
        -moz-box-shadow: -1px 1px 5px 5px rgba(0,0,0,0.12);

        div{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            img{
                width: 24px;
                height: 24px;

                 @media(min-width: 568px){
                width: 40px;
                height: 40px;
                }
            }
        }
        
`
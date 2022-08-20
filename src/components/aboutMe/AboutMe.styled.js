import styled from "styled-components"

export const AboutMeContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding: 1rem;
        background-color: #ffffff;

        @media(min-width: 568px){
            padding: .5rem .2rem;
            max-height: 99vh;
            align-self: center;
        }
`

export const Bio = styled.div`
        p{
            color: #555555;
            /* font-weight: bold; */
            text-transform: capitalize;
            text-overflow: ellipsis;
            text-align: left;
            font-size: 1rem;
            padding: .2rem .5rem;
            line-height: 1.2rem;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            
            span{
                display: inline-block;
            }
        }
`

export const Photo = styled.div``
export const Profile = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
                
        h3{
            padding: 0;
            margin: 0;
            display: inline-block;
        }
        img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
            padding-bottom: .1rem;
        }

         @media(min-width: 568px){
            img{
            width: 200px;
            height: 200px;
            border-radius: 50%;
        }

        }
`
export const Contact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;

    a{
        margin: 0;
        padding: 0;
    }
    img{
         max-width: 15px;
        max-height: 15px;
        margin: 0 .3rem;
    }

    @media(min-width: 568px){
         img{
         max-width: 25px;
        max-height: 25px;
        margin: 0 .5rem;
    }
    }



    /* Reference reasons */
    

`
export const About = styled.div``
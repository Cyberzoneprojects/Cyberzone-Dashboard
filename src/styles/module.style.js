import styled from "styled-components"

export const Card = styled.div`
width: 25rem;
background-color: gray;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px;
border: gray;
border-size: 1rem;
margin-bottom: 2rem;
margin-right: auto;
border-radius: 0rem 0rem .3rem .3rem;
`

export const Card_body = styled.div`
`

export const Card_image = styled.img`
 height: 8rem;
 width: 25rem;
`

export const Divider_line = styled.div`
 height: 1.3rem;
 width: 25rem;
 border-radius: .3rem;
 background-color: black;
`

export const Module_name = styled.div`
font-size: 1.1rem;
padding-top: 1rem;
padding-left: .7rem;
`

export const Headering = styled.p`
font-size: 1.7rem;
font-style: bold;
font-weight: 600;
padding-top: 1.1rem;
padding-left: .7rem;
`
export const Section_container = styled.div`
display: flex;
justify-content: space-between;
margin: 3rem 5rem 1rem .7rem;
`

export const Sub_section_container = styled.div`
display: flex;
`
export const Section_text = styled.p`
font-style: bold;
font-weight: 900;
padding-left: .7rem;
`
export const Time_used = styled.p`
font-style: bold;
font-weight: 900;
padding-left: .7rem;
margin-top: -2rem;
margin-bottom: 2rem;
`

export const Card_button = styled.button`
align: center;
background: #E3B104;
color: white;
text-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border: none;
height: 2.5rem;
width: 10rem;
border-radius: 2rem;
text-shadow: .1rem;
font-weight: 900;
margin-bottom: 2rem;
`

export const Module_display = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);

margin: 0rem 5rem 6rem;
`



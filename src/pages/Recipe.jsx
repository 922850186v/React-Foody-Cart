import React from 'react';
import {useState , useEffect} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {

    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab , setActiveTab] = useState("instructions");
    
    const fetchDetails = async () =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        // console.log(detailData);
    };

    useEffect(()=>{
        fetchDetails();
    },[params.name]);
  return (
    <DetailWrapper>
        <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt='' />
        </div>
        <Info>
            <BtnArea>
            <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</Button>
            <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=> setActiveTab('ingredients')}>Ingredients</Button>
            </BtnArea>
            {activeTab === 'instructions' && (
            <div>
            <p dangerouslySetInnerHTML={{__html: details.summary}}></p><br></br>
            <p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
            </div>
            ) }

            {activeTab === 'ingredients' && (
            <ul>
            {details.extendedIngredients.map((ingredient) =>
                <li key={ingredient.id}>{ingredient.original}</li>
            )}
            </ul>
            )}

        </Info>
    </DetailWrapper>
  )
}
const BtnArea = styled.div`
    display: flex;
    margin-bottom: 1rem;
`
const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;
    .active{
        background: linear-gradient(35deg, #494949 , #313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
    }
    p{
        font-size: 1.1rem;
    }
    li{
        font-size: 1.1rem;
        line-height: 1.75rem;
    }
    ul{
        margin-top: 1rem;
    }
    img{
        border-radius: 10px;
    }
`
const Button = styled.div`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
    display: flex;
    max-height: 3.5rem;
    border-radius: 10px;
`
const Info = styled.div`
    Button{
        display: flex;
    }
    /* display: flex; */
    margin-left: 5rem;
`
export default Recipe
import React from 'react';
import PropTypes from 'prop-types';

//구조분해할당 사용 !! 
function Food({ name, picture, rating }) {
  return(
    <div>
      <h2>I like {name}</h2>;
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
    //alt는 시각 장애인을 위한 것임.
  );

}
//리액트에서 객체는 중괄호 양쪽을 공백으로 채욱, JSX의 자바스크립트는 중괄호 양쪽을 공백으로 채우지 않는 방법으로 구분한다.

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://cdn.crowdpic.net/detail-thumb/thumb_d_AAA4C5E8C1E29791413BFBFF5419BA73.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://image.chosun.com/sitedata/image/201902/24/2019022401106_0.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image: 'https://recipe1.ezmember.co.kr/cache/recipe/2018/10/03/355b5cd5c3beb1a775c82ee425dcd1931.jpg',
    rating:  3,
  },
  {
    id: 4,
    name: 'Kimbap',
    image: 'https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG',
    rating: 2,
  },
];




function App() {

  return(
    <div>
      {foodILike.map(dish => ( <Food key={dish.id} name={dish.name} picture= {dish.image} rating={dish.rating} />))}
    </div>
    //key props는 리액트 내부에서 사용되는 특수한 props라서 Food 컴포넌트에 직접 전달되지 않는다. 
    
  );
      // Food컴포넌트에 사용한 props의 이름은 fav이고, fav에 "Kimchi"라는 값을 담아 Food 컴포넌트에 보냈다. 
      // props에 있는 데이터는 문자열인 경우를 제외하면 모두 중괄호 {}로
  
  
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  Picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;

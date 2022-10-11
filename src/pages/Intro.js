import React from 'react'
import photo from './photo.jpg'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect } from 'react'


const Intro = () => {
  const fold=useSelector(state=>state.fold.fold)
  useEffect(()=>{},[fold])
  return (
    <div className={'intro-box'+(fold?'':' intro-padding')}>
      <div>
        <img src={photo} className="intro-photo"/>
        </div>
        <div>
          개발자가 된 이유<br/>
          프론트엔드는 직관적으로 눈으로 볼 수 있으며<br/>
          개발자라는 직업은 새로운 것을 접하는것을<br/>
          좋아하는 저에게 즐거움을 선사해주기에 선택하였습니다.<br/>
        </div>
        

    </div>
  )
}

export default Intro
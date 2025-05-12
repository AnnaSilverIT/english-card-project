import React,  { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Card from '../Card/Cards';
import left from './left.jpg'
import right from './right.jpg'
import englishWords from '../WordTable/EnglishWords';
import './CardSwitcher.css';


function CardSwitcher ({props}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordsLearned, setWordsLearned] = useState(0);
  const [isTranslateVisible, setIsTranslateVisible] = useState(false)
  const translateButtonRef = useRef(null)


  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? englishWords.length - 1 : prevIndex - 1));
    setIsTranslateVisible(false); 
  };

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === englishWords.length - 1 ? 0 : prevIndex + 1));
    setIsTranslateVisible(false);
  };
  const incrementWordsLearned = () => {
    setWordsLearned((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    if (translateButtonRef.current) {
      translateButtonRef.current.focus();
    }
    setIsTranslateVisible(false);
  }, [currentIndex]);
  return (
    <div className='cardSwitcher'>
      <div className='switchWrapper'>
      <button className={classNames('buttonLeft', 'buttonSwitch')} 
          style={{ backgroundImage: `url(${left})` }}
          onClick={handleLeftClick}></button>
      <Card 
      word={englishWords[currentIndex].word} 
      transcription={englishWords[currentIndex].transcription} 
      translation={englishWords[currentIndex].translation} 
      incrementWordsLearned={incrementWordsLearned}
      translateButtonRef={translateButtonRef}
      isTranslateVisible={isTranslateVisible}
      setIsTranslateVisible={setIsTranslateVisible}
      />
      <button className={classNames('buttonRight','buttonSwitch')}
      style={{backgroundImage: `url(${right})`}}
      onClick={handleRightClick}></button>
      </div>
      <div className='counterWrapper'>{currentIndex + 1}/{englishWords.length}</div>
      <div>Изучено слов: {wordsLearned}</div>
    </div>
  )
}

export default CardSwitcher
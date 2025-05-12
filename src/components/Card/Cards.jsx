import React, {useEffect} from 'react';
import classNames from 'classnames';
import './Card.css';

const Card = ({word, transcription, translation, incrementWordsLearned, translateButtonRef, isTranslateVisible, setIsTranslateVisible }) => {

  const showTranslate = () => {
    incrementWordsLearned(); 
    setIsTranslateVisible(true);
  };
  
  useEffect(() => {
    if (!isTranslateVisible && translateButtonRef.current) {
      translateButtonRef.current.focus();
    }
  }, [isTranslateVisible]);
  return (
    <div className={classNames('card')}>
      <p className="card__word">{word}</p>
      <p className='card__transcription'>{transcription}</p>
      {!isTranslateVisible && (
        <button ref={translateButtonRef} className='card__button' onClick={showTranslate}>Показать перевод</button>
      )}
      {isTranslateVisible && (
        <div>
          <p className='card__translation'>{translation}</p>
          <button className='card__button' onClick={() => setIsTranslateVisible(false)}>Скрыть перевод</button>
        </div>
      )}
    </div>
  );
};


export default Card;
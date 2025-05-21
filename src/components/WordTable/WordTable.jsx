import React, { useState, useRef, useEffect } from 'react';
import './WordTable.css';
import classNames from 'classnames';
import englishWords from './EnglishWords'

const WordTable = () => {
  const [words, setWords] = useState(englishWords);
  
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedWord, setEditedWord] = useState({ word: '', transcription: '', translation: '' });

  const viewTranslationButtonRef = useRef(null);
  const [errors, setErrors] = useState({}); 
  useEffect(() => {
    if (editingIndex !== null && viewTranslationButtonRef.current) {
      viewTranslationButtonRef.current.focus();
    }
  }, [editingIndex]);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedWord(words[index]);
    setErrors({ [index]: { word: false, transcription: false, translation: false } });
  };

  const handleDeleteClick = (index) => {
    const newWords = words.filter((_, i) => i !== index);
    setWords(newWords);
    console.log(`Удалено слово: ${words[index].word}`);
    if (editingIndex === index) {
      setEditingIndex(null);
      setEditedWord({ word: '', transcription: '', translation: '' });
      setErrors({});
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWord((prev) => ({ ...prev, [name]: value }));
    setErrors((prevErrors) => {
      const currentErrors = prevErrors[editingIndex] || { word: false, transcription: false, translation: false };
      if (value.trim() === '') {
        currentErrors[name] = true;
      } else {
        currentErrors[name] = false;
      }
      return { ...prevErrors, [editingIndex]: currentErrors };
    });
  };

  
  const validateFields = () => {
    const currentErrors = {};
    let isValid = true;
    
    ['word', 'transcription', 'translation'].forEach((field) => {
      if (!editedWord[field].trim()) {
        currentErrors[field] = true;
        isValid = false;
      } else {
        currentErrors[field] = false;
      }
    });
    
    setErrors({ [editingIndex]: currentErrors });
    
    return isValid;
  };
  const handleSaveClick = (index) => {
    if (!validateFields()) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }
    const newWords = words.map((word, i) => (i === index ? editedWord : word));
    setWords(newWords);
    setEditingIndex(null);
    setEditedWord({ word: '', transcription: '', translation: '' });
    setErrors({});
  };


  const handleCancelClick = () => {
    setEditingIndex(null);
    setEditedWord({ word: '', transcription: '', translation: '' });
    setErrors({});
  };

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Слово</th>
          <th>Транскрипция</th>
          <th>Перевод</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            {editingIndex === index ? (
              <>
                <td>
                  <input
                    type="text"
                    name="word"
                    value={editedWord.word}
                    onChange={handleInputChange}
                    style={{
                      borderColor:
                        errors[index]?.word ? 'red' : undefined,
                      outline:
                        errors[index]?.word ? '2px solid red' : undefined,
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="transcription"
                    value={editedWord.transcription}
                    onChange={handleInputChange}
                    style={{
                      borderColor:
                        errors[index]?.transcription ? 'red' : undefined,
                      outline:
                        errors[index]?.transcription ? '2px solid red' : undefined,
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="translation"
                    value={editedWord.translation}
                    onChange={handleInputChange}
                    style={{
                      borderColor:
                        errors[index]?.translation ? 'red' : undefined,
                      outline:
                        errors[index]?.translation ? '2px solid red' : undefined,
                    }}
                  />
                </td>
                <td>
                  <button
                    className={classNames('tableButtons', 'tableButtonSave')}
                    onClick={() => handleSaveClick(index)}
                    disabled={
                      Object.values(errors[index] || {}).some((error) => error) ||
                      Object.values(editedWord).some((value) => value.trim() === '')
                    }
                  >
                    Сохранить
                  </button>
                </td>
              </>
            ) : (
              <>
                <td>{word.word}</td>
                <td>{word.transcription}</td>
                <td>{word.translation}</td>
                <td>
                  <button
                    className={classNames('tableButtons', 'tableButtonEdit')}
                    onClick={() => handleEditClick(index)}
                  >
                    Редактировать
                  </button>
                  <button
                    className={classNames('tableButtons', 'tableButtonDelete')}
                    onClick={() => handleDeleteClick(index)}
                  >
                    Удалить
                  </button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WordTable;
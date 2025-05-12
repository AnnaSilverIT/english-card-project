import React, { useState } from 'react';
import './WordTable.css';
import classNames from 'classnames';
import englishWords from './EnglishWords'

const WordTable = () => {
  const [words, setWords] = useState(englishWords);
  
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedWord, setEditedWord] = useState({ word: '', transcription: '', translation: '' });

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditedWord(words[index]);
  };

  const handleDeleteClick = (index) => {
    const newWords = words.filter((_, i) => i !== index);
    setWords(newWords);
    console.log(`Удалено слово: ${words[index].word}`);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWord((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveClick = (index) => {
    if (editedWord.word && editedWord.transcription && editedWord.translation) {
      const newWords = words.map((word, i) => (i === index ? editedWord : word));
      setWords(newWords);
      console.log(`Сохранено слово: ${editedWord.word}`);
      setEditingIndex(null);
      setEditedWord({ word: '', transcription: '', translation: '' }); // Сбросить поля после сохранения
    } else {
      console.error("Необходимо заполнить все поля.");
    }
  };

  const handleCancelClick = () => {
    setEditingIndex(null);
    setEditedWord({ word: '', transcription: '', translation: '' });
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
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="transcription"
                    value={editedWord.transcription}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="translation"
                    value={editedWord.translation}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <button className={classNames('tableButtons', 'tableButtonSave')} onClick={() => handleSaveClick(index)}>Сохранить</button>
                  <button className={classNames('tableButtons', 'tableButtonCancel')} onClick={handleCancelClick}>Отмена</button>
                </td>
              </>
            ) : (
              <>
                <td>{word.word}</td>
                <td>{word.transcription}</td>
                <td>{word.translation}</td>
                <td>
                  <button className={classNames('tableButtons', 'tableButtonEdit')} onClick={() => handleEditClick(index)}>Редактировать</button>
                  <button className={classNames('tableButtons', 'tableButtonDelete')} onClick={() => handleDeleteClick(index)}>Удалить</button>
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
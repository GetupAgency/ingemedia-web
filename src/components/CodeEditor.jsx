import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import './CodeEditor.css';

function CodeEditor({ title, language, value, onChange }) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Détermine l'extension de langage selon le type
  const getLanguageExtension = () => {
    switch (language) {
      case 'html':
        return [html()];
      case 'css':
        return [css()];
      case 'javascript':
        return [javascript({ jsx: true })];
      default:
        return [];
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleKeyDown = (e) => {
    // Échapper avec ESC
    if (e.key === 'Escape' && isFullscreen) {
      setIsFullscreen(false);
    }
  };

  return (
    <div 
      className={`code-editor ${isFullscreen ? 'fullscreen' : ''}`}
      onKeyDown={handleKeyDown}
    >
      <div className="code-editor-header">
        <span className="code-editor-title">{title}</span>
        <div className="header-actions">
          <span className="code-editor-language">{language}</span>
          <button 
            className="fullscreen-btn" 
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Quitter le plein écran (ESC)' : 'Plein écran'}
          >
            {isFullscreen ? '⊗' : '⛶'}
          </button>
        </div>
      </div>
      <CodeMirror
        value={value}
        height={isFullscreen ? "calc(100vh - 60px)" : "400px"}
        theme={oneDark}
        extensions={getLanguageExtension()}
        onChange={(val) => onChange(val)}
        className="code-editor-codemirror"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          highlightSpecialChars: true,
          foldGutter: true,
          dropCursor: true,
          allowMultipleSelections: true,
          indentOnInput: true,
          bracketMatching: true,
          closeBrackets: true,
          autocompletion: true,
          rectangularSelection: true,
          crosshairCursor: true,
          highlightActiveLine: true,
          highlightSelectionMatches: true,
          closeBracketsKeymap: true,
          searchKeymap: true,
          foldKeymap: true,
          completionKeymap: true,
          lintKeymap: true,
        }}
      />
    </div>
  );
}

export default CodeEditor;


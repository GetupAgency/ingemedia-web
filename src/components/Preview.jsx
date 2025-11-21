import React, { useMemo, useEffect } from 'react';
import './Preview.css';

function Preview({ html, css, js }) {
  // Debug : affiche les valeurs reçues
  useEffect(() => {
    console.log('Preview props:', { 
      html: html || '(vide)', 
      css: css || '(vide)', 
      js: js || '(vide)' 
    });
  }, [html, css, js]);

  // Génère le contenu de l'iframe avec useMemo pour éviter les re-renders inutiles
  const srcDoc = useMemo(() => {
    // Si tout est vide, affiche un message d'aide
    if (!html && !css && !js) {
      return `
        <!DOCTYPE html>
        <html lang="fr">
          <head>
            <meta charset="UTF-8">
            <style>
              body {
                margin: 0;
                padding: 40px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: #f8f9fa;
                color: #666;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                text-align: center;
              }
              .message {
                background: white;
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              }
            </style>
          </head>
          <body>
            <div class="message">
              <h3>👋 Commence à écrire ton code !</h3>
              <p>L'aperçu s'affichera ici en temps réel.</p>
            </div>
          </body>
        </html>
      `;
    }

    return `
      <!DOCTYPE html>
      <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              margin: 0;
              padding: 20px;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
              background: white;
              color: #333;
            }
            ${css}
          </style>
        </head>
        <body>
          ${html}
          <script>
            try {
              ${js}
            } catch (error) {
              console.error('Erreur JavaScript:', error);
              document.body.innerHTML += '<div style="color: red; padding: 10px; background: #fee; border: 1px solid red; margin: 10px 0; border-radius: 4px;"><strong>❌ Erreur JS:</strong> ' + error.message + '</div>';
            }
          </script>
        </body>
      </html>
    `;
  }, [html, css, js]);

  return (
    <div className="preview">
      <div className="preview-header">
        <span className="preview-title">👁️ Aperçu</span>
        <span className="preview-badge">Mise à jour en temps réel</span>
      </div>
      <div className="preview-content">
        <iframe
          srcDoc={srcDoc}
          title="preview"
          sandbox="allow-scripts allow-forms allow-modals allow-popups allow-same-origin"
          className="preview-iframe"
        />
      </div>
    </div>
  );
}

export default Preview;


import { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Button = (options) => {
  const {
    ariaLabel = null,
    textContent = 'Add',
    size = 'medium',
    modifier = 'primary',
    type = 'button',
    disabled = false,
    onClick = null,
    hasError = false,
    errorMessage = null,
    customStyle = null,
  } = options;

  // Validate and setup the button configuration
  const [_hasError, _setHasError] = useState(hasError);
  const [_errorMessage, _setErrorMessage] = useState(errorMessage);
  const allowedButtonTypes = ['button', 'submit', 'reset'];
  const evalTextContent = textContent || 'Add';
  let evalType = type?.toLowerCase() || 'button';
  let evalSize = size?.toLowerCase() || 'medium';
  // Check to validate the button type value
  if (evalType !== 'button') {
    // Check to make sure that the value for type is allowed
    if (allowedButtonTypes.indexOf(evalType) === -1) {
      console.error(
        `Invalid button type value. Changing value to "button"\n\tRecieved: ${type}\n\tExpected: ["${allowedButtonTypes.join(
          '", "'
        )}"]`
      );
      evalType = 'button';
    }
  }
  // Build Style attributes for the button
  const evalStyle = `
    button.transparent {
      background: transparent;
      border: none;
    }
    button.gc-btn {
      padding: 6px 14px;
      margin: 10px 0;
      box-shadow: 3px 3px 3px var(--color-transparent-05);
      border: 0;
      border-radius: 5px;
      transition: all 0.3s ease;
      ${
        customStyle
          ? Object.entries(customStyle).map((k, v) => {
              if (!k) return;
              const [attr, val] = k;
              return `${attr}: ${val}`;
            })
          : null
      }
    }

    button.gc-btn:hover,
    button.gc-btn:focus {
      opacity: 0.85;
    }

    button.gc-btn--primary {
      color: white;
      background: var(--button-primary--bg_color);
    }

    button.gc-btn--secondary {
      color: white;
      background: var(--button-secondary--bg_color);
    }

    button.gc-btn--tertiary {
      color: black;
      background: var(--button-tertiary--bg_color);
      border: 1px solid var(--button-tertiary--border_color);
    }

    button.gc-btn--ghost {
      color: black;
      background: transparent;
      box-shadow: none;
    }

    button.gc-btn--rounded {
      border-radius: 50%;
    }

    button.gc-btn--icon {
      padding: 0;
    }

    button.gc-btn--disabled {
      color: black;
      cursor: not-allowed;
      background: var(--button-disabled--bg_color);
    }

    button.gc-btn--xsmall {
      font-size: 8px;
      line-height: 10px;
    }

    button.gc-btn--small {
      font-size: 10px;
      line-height: 12px;
    }

    button.gc-btn--medium {
      font-size: 14px;
      line-height: 16px;
    }

    button.gc-btn--large {
      font-size: 18px;
      line-height: 20px;
    }

    button.gc-btn--xlarge {
      font-size: 22px;
      line-height: 24px;
    }

    button.gc-btn--block {
      width: 100%;
    }
  `;

  // Button Local Functions
  const handleOnClick = (e) => {
    if (disabled) {
      _setHasError(true);
      _setErrorMessage(
        'Button is disabled. Please review the page to find any errors.'
      );
    } else if (onClick) {
      onClick(e);
    } else {
      console.warn('Button has no onClick event handler.');
    }
  };

  // Render component
  return (
    <div>
      <button
        className={`gc-btn gc-btn--${evalSize} ${modifier
          .split(' ')
          .map((m) => `gc-btn--${m.toLowerCase()}`)
          .join(' ')} `}
        type={evalType}
        disabled={disabled}
        onClick={handleOnClick}
        aria-label={ariaLabel}
      >
        <style>{evalStyle}</style>
        {evalTextContent}
      </button>
      {_hasError && (
        <div className="gc-btn--error_container">
          {_errorMessage || 'Something went wrong. Please try again.'}
        </div>
      )}
    </div>
  );
};

export { Button };

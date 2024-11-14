import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Button(options) {
  const { style, type, data, textContent, modifier, onClick } = options;
  // Build Style attributes for the button
  const evalStyle = `
    button.transparent {
      background: transparent;
      border: none;
    }
    button.gc-btn {
      justify-content: center;
      width: 100%;
      height: 50px;
      color: white;
      background: var(--color-green-300);
      font-size: 1.1rem;
      box-shadow: 3px 3px 3px var(--color-transparent-05);
      border: 0;
      border-radius: 5px;
      transition: all 0.3s ease;
      ${
        style
          ? Object.entries(style).map((k, v) => {
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
  `;
  const allowedButtonTypes = ['button', 'submit', 'reset'];
  const evalTextContent = textContent || 'Add';
  let evalType = type?.toLowerCase() || 'button';

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

  if (modifier === 'icon_eye') {
    return (
      <button
        className="transparent"
        data={JSON.stringify(data)}
        onClick={onClick}
      >
        <VisibilityIcon />
      </button>
    );
  } else {
    return (
      <button className="gc-btn" type={evalType}>
        <style>{evalStyle}</style>
        {evalTextContent}
      </button>
    );
  }
}

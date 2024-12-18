export default function Grid({ children }) {
  return (
    <div id="gantt-grid-container">
      {children}
      <style jsx>{`
        #gantt-grid-container {
          display: flex;
          // grid-template-columns: 300px 1fr;
          outline: 2px solid var(--color-outline);
          border-radius: 5px;
          box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </div>
  );
}

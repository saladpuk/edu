export function Highlight({ children, color }) {
  return (
    <span style={{
      backgroundColor: color,
      borderRadius: '5px',
      color: '#fff',
      padding: '0.1rem',
    }}>{children}</span>
  );
}

export function Red({ children }) {
  return (<Highlight color="#fe3b3b">{children}</Highlight>);
}

export function Green({ children }) {
  return (<Highlight color="#25c2a0">{children}</Highlight>);
}

export function Blue({ children }) {
  return (<Highlight color="#1877F2">{children}</Highlight>);
}

export function Gray({ children }) {
  return (<Highlight color="#393939">{children}</Highlight>);
}
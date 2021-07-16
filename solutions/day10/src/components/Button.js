const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
  fontSize: 22,
  width:150,
  color: 'white',
  margin: '10px auto',
}

const Button = ({ text, onClick, style }) => (
    <button style={buttonStyles} onClick={onClick}>
      {text}
    </button>
  )
  export default Button
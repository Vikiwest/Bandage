

function LoginBtn({action, content}) {
  return (
    <div>
      <button 
      className="loginbtn"
      onClick={action}>
        {content}
      </button>
      
    </div>
  )
}

export default LoginBtn

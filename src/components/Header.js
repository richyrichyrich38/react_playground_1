function Header(props) {
  return (
    <>
      <header>
        <h3>{props.title}</h3>
        <nav>
          <button onClick={() => props.setPage('home')}>Home</button>
          <button onClick={() => props.setPage('contact')}>Contact</button>
        </nav>
      </header>
    </>
  )
}

export default Header
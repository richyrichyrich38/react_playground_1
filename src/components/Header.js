function Header(prop) {
  return (
    <>
      <header>
        <h3>{prop.title}</h3>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </>
  )
}

export default Header
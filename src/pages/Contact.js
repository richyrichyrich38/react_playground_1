const styles = {
  header: {
    textAlign: 'center',
    margin: '20px 0'
  },

  submitBtn: {
    backgroundColor: 'lightseagreen',
    color: 'white',
    cursor: 'pointer'
  }
};

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Form Submitted!');
  }


  return (
    <>
      <h1 style={styles.header}>Contact me</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <input type="text`" placeholder="Enter your email address" />
        <textarea placeholder="Enter your message" cols="30" rows="10"></textarea>
        <button style={styles.submitBtn}>Submit</button>

      </form>
    </>
  )
}

export default Contact;
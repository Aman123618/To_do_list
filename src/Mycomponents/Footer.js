



const Footer = () => {
  let footerstyle={
    position:"absolute",
    top:"100vh",
    width:"100%"
  }
  return (
    <footer className=" bg-dark text-light py-3" style={footerstyle}>
      <p className="text-center">
      copyright &copy; My Todoslist.com
      </p>
    </footer>
  )
}

export default Footer




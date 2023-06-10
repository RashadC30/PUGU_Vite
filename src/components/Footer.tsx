import useCart from "../hooks/useCart"

type PropsType = {
  viewCart: boolean,
}

const Footer = ({viewCart}: PropsType) => {
  const {totalItems, totalPrice} = useCart()

  const year: number = new Date().getFullYear()

  const pageContent = viewCart
    ? <p>Put Ur Glasses Up &copy; {year}</p>
    : (
      <>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <p>Put Ur Glasses Up &copy; {year}</p>
      </>
    )

  const content = (
    <footer className="footer">
      {pageContent}
    </footer>
  )
  return content
}

export default Footer
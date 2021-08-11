function Footer () {
    const date = new Date()
    const fullYear = date.getFullYear()
    return (
<footer>
    
        <p>&copy; Eleven Fifty 2021</p>
 <p>{fullYear}</p>
</footer>
    )
}

export default Footer;
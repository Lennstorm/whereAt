import './header.css'

function Header({ title }) {
    return (
        <header className="header">
            <h1 className='header_title'> {title} </h1>
        </header>
    )
}

export default Header